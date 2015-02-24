---
title: Cisco Catalyst 2950
language: de
layout: default
created: 2009-06-05 09:54:04 +0200
updated: 2009-06-05 17:01:15 +0200
toc: false
tags:
  - know-how
  - hacking
  - hardware
  - cisco
  - catalyst
---
MAC Adresstabelle
=================

Mit folgendem Befehl (im `enable` Modus) kann man sich den Zustand der MAC-Adresstabelle anzeigen lassen:

    show mac-address-table count

Die Ausgabe sieht in etwa so aus:

~~~
Mac Entries for Vlan 1:
---------------------------
Dynamic Address Count  : 89
Static  Address Count  : 0
Total Mac Addresses    : 89

Total Mac Address Space Available: 8178
~~~

Laut [cisco.com](http://supportwiki.cisco.com/ViewWiki/index.php/The_circumstances_that_delete_the_learned_MAC_addresses_from_the_switch_MAC_table)
ist der normale Timeout einer MAC-Adresse 5min (=300 Sekunden). Während der STP-Erkennung ist der Timeout
15 Sekunden - das erklärt auch, warum die MAC-Adresstabelle nach Ändern der Topologie plötzlich leer ist.


MAC Flooding Angriff
====================

Üblicherweise schalten Switches bei überfüllter CAM-Tabelle (MAC <=> Port-Zuordnung) in eine Art Hub-Modus für
unbekannte MAC-Adressen, so dass man auf allen Ports ALLE Pakete bekommt, die an MAC-Adressen gehen sollen, welche
nicht in der Tabelle stehen. Dadurch wird das Mitsniffen von fremder Kommunikation möglich.

Dies ist nochmal genauer unter [tomshardware.com](http://www.tomshardware.com/forum/19910-42-switch-behavior-table-full#t74120) erläutert.
Demnach ändert sich für bereits bestehende Einträge der CAM-Tabelle nichts - diese werden weiterhin geswitcht.

Der genaue Ablauf ist auch nochmal unter [hakipedia.com](http://www.hakipedia.com/index.php/CAM_Table_Overflow)
erklärt. Dort wird auch gezeigt, wie man den Switch gegen diesen Angriff absichern kann.


Versuchsaufbau
--------------

![Versuchsaufbau]({{ site.url }}/assets/macflooding.png)

*IP305* und *IP110* sind VoIP-Geräte. Die *IP305* ist die Telefonanlage, die beiden *IP110* sind Telefone. Durch diesen
Aufbau ist gewährleistet, das jeglicher Verkehr zwischen Telefonanlage und Telefon durch den Switch geht. Die
Kommunikation unter den Telefonen bei erfolgtem Verbindungsaufbau dürfte direkt über den PoE-Switch abgewickelt werden.


Benutzte Software
-----------------

* [BackTrack 4](http://www.remote-exploit.org/backtrack.html) --- *insbes. das `macof`-Tool aus dem
  [dsniff](http://www.monkey.org/~dugsong/dsniff/)-Paket zum Fluten der MAC-Tabelle*
* [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/) oder [PuTTY Tray](http://haanstra.eu/putty/) --- *für
  den Zugriff auf die Cisco-Konsole*
* [Wireshark](http://www.wireshark.org/) --- *zum Mitprotokollieren des VoIP-Verkehrs*


Vorbereitung
------------

* *BackTrack 4* in einer virtuellen Maschine auf dem *Angreifenden PC* booten (VM mit ca. 512MB oder mehr RAM anlegen,
  ISO-Image als CD-Laufwerk einbinden; alternativ direkt das [VMware-Image](http://www.remote-exploit.org/backtrack_download.html) herunterladen)
* mit `root` / `toor` in BackTrack anmelden
* mit folgenden Befehlen die IP-Adresse einrichten: (die IP durch eine freie IP im Netz ersetzen)

  ~~~
  /etc/init.d/networking start
  ifconfig eth0 192.168.0.9
  ~~~

* am *Logging PC* das Programm *Wireshark* installieren und starten
* eine Überwachungs-Sitzung auf dem benutzten Netzwerk-Interface starten
* in der Filterzeile folgenden Filter angeben und Anwenden: `h225 || q931` (Unterlässt man dies, wird Wireshark durch
  die MAC-Flut überlastet und man kann Stunden warten, bis die interessanten Pakete sichtbar sind.)


Durchführung
------------

* auf dem *Angreifenden PC* wird jetzt in der VM das Tool `macof` gestartet:

        macof

* jetzt laufen haufenweise MAC-Adressen über den Bildschirm; die Bildschirmausgabe bremst allerdings den Ablauf des
  Programms. Schaltet man mit <kbd>Strg</kbd>-<kbd>Alt</kbd>-<kbd>F2</kbd> auf ein anderes Terminal, wird die
  CAM-Tabelle schneller geflutet. (Mit <kbd>Strg</kbd>-<kbd>Alt</kbd>-<kbd>F1</kbd> kommt man jederzeit wieder zurück
  auf das erste Terminal.)
* den Erfolg kann man an der Konsole des Switches mit dem o.g. Befehl verfolgen:

  ~~~
  Switch>en
  Switch#show mac-address-table count

  Mac Entries for Vlan 1:
  ---------------------------
  Dynamic Address Count  : 8186
  Static  Address Count  : 0
  Total Mac Addresses    : 8186

  Total Mac Address Space Available: 0
  ~~~

* erhält man zuerst keine Pakete auf dem *Logging PC*, liegt das daran, dass die "echten" MAC-Adressen im Netz noch in
  der Tabelle des Switches stehen; das Löschen dieser kann man forcieren, indem man ein Kabel abzieht und/oder
  ansteckt - dadurch wird der MAC-Timeout auf 15 Sekunden gesetzt und 15 Sekunden später sind alle alten MAC-Adressen
  aus der Tabelle gefallen - dabei muss `macof` aktiv sein und die Telefone sollten in den 15 Sekunden nicht angefasst
  werden (sonst beginnt der Timeout von vorn), damit die freigewordenen Plätze gleich "zugemüllt" werden.
* jetzt erscheinen im *Wireshark* die H225-Nachrichten, wenn man an einem Telefon einen Hörer abhebt bzw. das andere
  Telefon anruft:  
  <img src="{{ site.url }}/assets/wireshark.png" alt="Wireshark Screenshot" width="600" />


Absicherung
-----------

Mit folgenden Befehlen kann man den Switch gegen solche Angriffe absichern:

~~~
Switch>en
Switch#conf ter
Switch(config)#interface range FastEthernet 0/1 - 8
Switch(config-if-range)#switchport mode access
Switch(config-if-range)#switchport port-security
Switch(config-if-range)#switchport port-security maximum 5
Switch(config-if-range)#switchport port-security violation shutdown
Switch(config-if-range)#end
Switch#
~~~

Dadurch werden pro Port nur 5 MAC-Adressen erlaubt. Kommen von einem Port Nachrichten von weiteren MAC-Adressen, wird
dieser Port deaktiviert, d.h. das Gerät wird vom Netz getrennt. Die Befehle sind [hier](http://www.cisco.com/en/US/docs/ios/security/command/reference/sec_s6.html#wp1033679)
erläutert. Evtl. muss man noch `switchport port-security aging` setzen, damit alte MAC-Adressen auch aus der Statistik
genommen werden.

Die deaktivierten Ports bekommt man auf zwei Wege wieder an:

~~~
Switch>en
Switch#conf ter
Switch(config)#interface FastEthernet 0/2
Switch(config-if)#shutdown
Switch(config-if)#no shutdown
~~~

oder global:

~~~
Switch>en
Switch#conf ter
Switch(config)#errdisable recovery cause psecure-violation
~~~


Netgear FS108P PoE-Switch
-------------------------

Der gleiche Angriff auf einen *Netgear FS108P* Switch bringt den Switch nur dazu, Pakete an unbekannte MAC-Adressen zu
ignorieren. Somit wäre das eine DoS-Attacke - aber keine Möglichkeit, fremde Daten mitzusniffen. Die Broadcast-Pakete
hingegen werden auf allen Ports ausgegeben und fluten somit auch angeschlossene Switches/Router.
