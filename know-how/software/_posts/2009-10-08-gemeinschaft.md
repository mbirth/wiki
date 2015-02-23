---
title: Gemeinschaft Asterisk PBX
language: de
layout: default
created: 2009-10-08 01:35:01 +0200
updated: 2009-10-08 20:54:42 +0200
toc: true
tags:
  - know-how
  - software
  - asterisk
  - telephony
  - gemeinschaft
---
* [kempgen.net](http://www.kempgen.net/gemeinschaft/gemeinschaft-installation-trunk.html) --- Anleitung zur manuellen Installation
    * in der `sounds-wav-to-alaw.sh` muss beim `sox`-Befehl der Parameter **`-w`** in **`-2`** geändert werden
* [belug.de](http://www.belug.de/hilfe/howtos/fcpci/) --- Kompilieren des fcpci-Moduls
    * [kerneltrap.org](http://kerneltrap.org/mailarchive/linux-netdev/2009/6/7/5890033) --- `capi_ctr_reseted()` heißt jetzt `capi_ctr_down()` (muss geändert werden!)


Allgemeine Bedienung
====================

Benutzer an Telefon anmelden
----------------------------

Bei den Provisioning-fähigen Telefonen:

* Hörer abheben
* `*0<Durchwahl>` eintippen
* nach Aufforderung Kennwort eintippen (bei uns üblicherweise `1234`)
* Telefon evtl. rebooten


Anrufergruppe beitreten
-----------------------

Damit das Telefon richtig klingelt, folgenderweise der Anrufergruppe **100** beitreten:

* Hörer abheben
* `*5<Queue-Nr.>` eintippen (bei uns die `100`)
* auflegen


Rauswählen ohne 0
=================

In der MySQL-Datenbank `asterisk` in der Tabelle `gates` sind die Wählstrings hinterlegt. Standard (und nicht über GUI
änderbar) ist folgender:

    mISDN/g:{gateway}/{number:1}

d.h., von der Rufnummer wird immer die erste Stelle abgeschnitten. In den neueren Versionen werden aber generell alle
nicht intern vorhandenen Rufnummern an das ausgehende Routing übergeben. Somit kann man durch eine Änderung in der
Datenbank den Wählstring auf

    mISDN/g:{gateway}/{number}

ändern und hat dann den gewünschten Effekt. [Google Groups Thread](http://groups.google.de/group/gemeinschaft-users/browse_thread/thread/2ceb4e5afdd50375)


Anruferidentifizierung
======================

Vorgesehen ist, dass dies auf dem Telefon passiert. Daher gibt es momentan keine Funktionalität in dieser Richtung,
die direkt im Asterisk den Anrufernamen aus einer Tabelle sucht.

Da wir mit Queues arbeiten, muss dieser Aufruf vor dem Weiterleiten des ankommenden Anrufs in den Queue passieren.
Ein geeigneter Ort ist der `to_queue:`-Abschnitt in der `e-internal.ael` - direkt über dem `Queue()`-Aufruf:
[Google Groups Thread](http://groups.google.de/group/gemeinschaft-users/browse_thread/thread/cf4683c6a9081ae2)

~~~
                                else {
                                        Set(ring_instead_of_moh=);
                                        Progress();  // SIP: "183 Session Progress" with early media
                                }
                                // Die folgende Zeile ist neu:
                                AGI(/opt/gemeinschaft/dialplan-scripts/in-get-callerid.agi,${CALLERID(num)});
                                Set(queue_entertime=${EPOCH});
                                Queue(${EXTEN},${ring_instead_of_moh},,,${queuetimeout});
                                Set(queue_waittime=$[${EPOCH}-${queue_entertime}]);
                                Verbose(1,### Tried to enter queue ${EXTEN}\, result: ${QUEUESTATUS}\, waittime: ${queue_waittime});
~~~

Das Script `in-get-callerid.agi` sieht dann in etwa so aus:

{% highlight php %}
#!/usr/bin/php -q
<?php

define( 'GS_VALID', true );  /// this is a parent file
require_once( dirName(__FILE__) .'/../inc/conf.php' );
require_once( GS_DIR .'inc/agi-fns.php' );

ini_set('implicit_flush', 1);
ob_implicit_flush(1);

$number = trim(@$argv[1]);
if (empty($number)) die();

gs_agi_verbose( '### Number identification for ' . $number );

// TODO: Identify number

echo 'SET VARIABLE CALLERID(name) ' . gs_agi_str_esc($neuer_name) . "\n";

?>
{% endhighlight %}

Wichtig ist noch, dass das AGI-Script ausführbar (`chmod a+x in-get-callerid.agi`) sein und die magische erste Zeile
haben muss.


Konferenzräume von außen
========================

In der Grundkonfiguration gibt es nur dynamische Konferenzräume, die man mittels <kbd>8</kbd><kbd>8</kbd> *+ Raumnummer*
anlegen kann. Diese sind allerdings dann nicht von außen erreichbar. Folgenderweise kann man einen Raum von außen
erreichbar machen: [Google Groups Thread](http://groups.google.de/group/gemeinschaft-users/browse_thread/thread/d79b8b969ae80ef9)

In der `meetme.conf` einen neuen statischen Konferenzraum (hier: Nummer 888) anlegen:

    [rooms]
    conf => 888

In der `e-internal.ael` direkt im Kontext `to-internal-users` folgenden Eintrag machen:

~~~
        //----------------------------------------------------------
        // Direct to conference
        //----------------------------------------------------------
        20888 => {
                Answer();
                System(wget 'http://192.168.1.245/gemeinschaft/prov/call-init.php?user=ah&to=21888');
                Playback(silence/2);
                MeetMe(888, cM);
        }

        21888 => {
                Answer();
                MeetMe(888, cM);
        }
~~~

Dadurch werden Anrufe auf der 21888 direkt in den Konferenzraum 888 geschaltet. Anrufe auf der 20888 lassen das Telefon
vom Benutzer `ah` den Konferenzraum anrufen und schicken den Anrufer danach erst in den Raum. Somit muss man nicht in
einem stillen Raum auf die Teilnehmer warten.


Aussetzer beim Klingeln der Telefone
====================================

Die Telefone haben nach ca. 10 Sekunden plötzlich für ca. 2 Sekunden aufgehört zu klingeln. In diesen 2 Sekunden kann
man den Anruf auch nicht annehmen. [Google Groups Thread](http://groups.google.de/group/gemeinschaft-users/browse_thread/thread/a02d0cb376a77953)

Ursache ist die Einstellung *Klingelzeit pro Agent* des Queues. Diese ist per default auf 10 Sekunden eingestellt,
sollte allerdings bei der Einstellung *Alle klingeln gleichzeitig* nicht greifen. Dennoch mach die Anlage nach den
10 Sekunden eine kurze Pause. Erhöht man den Wert auf z.B. 60 Sekunden, sollte die Pause nicht mehr auftreten.


Status-Monitor
==============

Es gibt 2 Status-Monitore:

* <http://192.168.1.245/gemeinschaft/monitor.php?extensions=10-99>
* <http://192.168.1.245/gemeinschaft/mon/mon.php?extensions=10-99>

Der erstere fragt Asterisk alle paar Sekunden über das Manager-Interface ab und erzeugt somit pro Betrachter mehr
Last. Der zweitere benutzt (via AJAX) den ExtStateDaemon, welcher wie folgt aktiviert werden muss:


Aktivieren des ExtStateD
------------------------

1. Kopieren des init-Scripts nach `/etc/init.d`:  

        cp /usr/src/gemeinschaft/etc/init.d/gs-extstated /etc/init.d/

1. Einrichten des automatischen Starts:  

        update-rc.d gs-extstated defaults 90 10

1. Starten des Daemons  

        /etc/init.d/gs-extstated start

[Google Groups Thread](http://groups.google.com/group/gemeinschaft-users/browse_thread/thread/58af4e988e64cae4?hide_quotes=no#msg_1a966420d40bb2ee)


Anrufbeantworter-Scripting
==========================

`/opt/gemeinschaft/scripts/gs-vm-audio-set`:

{% highlight php %}
#!/usr/bin/php -q
<?php
/** @author Markus Birth <mab@silversolutions.de> */

define( 'GS_VALID', true );  /// this is a parent file
define( 'GS_VM_AUDIO_DIR', '/opt/gemeinschaft/vm-rec' ); // path to VM recordings
define( 'GS_VM_AUDIO_FILEFORMAT', '%1$s-%2$s.alaw' );  // %1$s = extension, %2$s = external|internal
define( 'GS_VM_AUDIO_SOURCE_DIR', '/ssl' );            // source dir for <filename> (will be appended to GS_VM_AUDIO_DIR)

require_once( dirName(__FILE__) .'/../inc/conf.php' );
include_once( GS_DIR .'lib/getopt.php' );
include_once( GS_DIR .'inc/gs-lib.php' );


/***********************************************************
*    the shell parameters
***********************************************************/
$usage = 'Usage: '. baseName(__FILE__) .' --user=<user> --source=internal|external --file=<filename>';

$opts = @getOptsNoMultiples( '',
    array(
        'user=',
        'source=',
        'file='
    ),
    $usage
);
if (! isSet( $opts['user'] )
 || ! isSet( $opts['source'] )
 || ! isSet( $opts['file'] )
 ) {
    gs_script_invalid_usage( $usage );
}


/***********************************************************
*    do stuff
***********************************************************/
if (!in_array($opts['source'], array('internal', 'external'))) {
    gs_script_error( 'Please specify only "external" or "internal" as source!' );
}

$srcPath = GS_VM_AUDIO_DIR . GS_VM_AUDIO_SOURCE_DIR . '/' . $opts['file'] . '.alaw';
if (!file_exists($srcPath)) {
    gs_script_error( 'File "' . $srcPath . '" not found!' );
}
$trgPath = GS_VM_AUDIO_DIR . '/' . sprintf(GS_VM_AUDIO_FILEFORMAT, $opts['user'], $opts['source']);

if (file_exists($trgPath)) {
    echo 'Warning. Target file "' . $trgPath . '" will be overwritten!' . PHP_EOL;
}

if ( !copy($srcPath, $trgPath) ) {
    gs_script_error( 'Failed to copy "' . $srcPath . '" to "' . $trgPath . '"!' );
}

echo 'Set VM announcement of user ' . $opts['user'] . ' for ' . $opts['source'] . ' calls to "' . $opts['file'] . '".' . PHP_EOL;

?>
{% endhighlight %}


`/opt/gemeinschaft/sbin/do-event`:

{% highlight bash %}
#!/bin/sh

GS_DIR=/opt/gemeinschaft/scripts
GS_USER=99
GS_QUEUE=100
GS_SOURCE=external
LOGFILE=/var/log/gemeinschaft/do-event.log

case "$1" in
    mittag)
        $GS_DIR/gs-vm-audio-set --user=$GS_USER --source=$GS_SOURCE --file=mittag 2>&1 >>$LOGFILE
        $GS_DIR/gs-queue-callforward-activate --queue=$GS_QUEUE --source=$GS_SOURCE --case=timeout --active=std 2>&1 >>$LOGFILE
        ;;
    momeeting)
        $GS_DIR/gs-vm-audio-set --user=$GS_USER --source=$GS_SOURCE --file=momeeting 2>&1 >>$LOGFILE
        $GS_DIR/gs-queue-callforward-activate --queue=$GS_QUEUE --source=$GS_SOURCE --case=timeout --active=std 2>&1 >>$LOGFILE
        ;;
    off)
        $GS_DIR/gs-queue-callforward-activate --queue=$GS_QUEUE --source=$GS_SOURCE --case=timeout --active=no 2>&1 >>$LOGFILE
        $GS_DIR/gs-vm-audio-set --user=$GS_USER --source=$GS_SOURCE --file=default 2>&1 >>$LOGFILE
        ;;
    *)
        echo "Usage: $0 {mittag|momeeting|off}"
        exit 1
        ;;
esac

exit 0
{% endhighlight %}


**crontab**:

~~~
MAILTO=mab@intranet.silversolutions.de
#m  h  dom mon dow   command
00 10   *   *   1    /opt/gemeinschaft/sbin/do-event momeeting
00 11   *   *   1    /opt/gemeinschaft/sbin/do-event off
00 13   *   *  1-5   /opt/gemeinschaft/sbin/do-event mittag
00 14   *   *  1-5   /opt/gemeinschaft/sbin/do-event off
~~~


*[GUI]: Graphical User Interface
*[AGI]: Asterisk Gateway Interface
*[AJAX]: Asynchronous Javascript and XML
