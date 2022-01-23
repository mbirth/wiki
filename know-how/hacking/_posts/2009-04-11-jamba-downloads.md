---
created: 2009-04-11 22:06:49 +0200
language: de
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/04/11/jamba-downloads-de.html
tags:
- know-how
- hacking
- hardware
- jamba
title: Jamba Downloads
toc: false
updated: 2009-04-11 22:06:49 +0200
---

Vor etlicher Zeit hatte ich mal 100,- € Guthaben bei Jamba gewonnen. Beim Versuch, ein Programm auf mein Samsung Z300
zu laden (das Z300 gibt's bei Jamba nur unter der T-Mobile-Bezeichnung *ZM60*), zeigte mir Jamba, dass mein Handy
angeblich keine Software downloaden könne. Der kleinere Bruder, das Z500, hingegen unterstützt das merkwürdigerweise.

Früher hatte es mal funktioniert, dass ich mir den Download-Link an mein Smartphone schicken lasse, und dann von dort
oder vom PC aus die .jad und .jar Dateien herunterlade - aber neuerdings kommt nur "*Ihr Handy unterstützt keine Spiele
- bitte suchen Sie sich stattdessen ein Logo aus:*" und ein paar Logos, die ich nicht mal unter Androhung von Gewalt
herunterladen würde.

Von einigen Experimenten mit einem P910i und Jamba hatte ich herausgefunden, dass Jamba nach dem UserAgent-String vom
Browser geht. (Für ein Opera auf dem PC ist das z.B. `Opera/9.00 (Windows NT 5.1; U; en)`.) Und wenn Jamba einen String
nicht erkennt, verweigert es den Download. Dies ist sicherlich auch dazu da, dass man die Spiele nur auf ein Handy
bekommt, von wo aus man sie nicht weiter verschicken kann. Wär ja auch doof, weil sonst könnte man ja die Software auf
ein neues Handy kopieren.

Also hab ich meine Geräte auf eine von mir präparierte PHP-Seite geschickt und mal die Browser-Strings gespeichert.
Hier ein paar:

* `SonyEricssonP910i/R5B SEMC-Browser/Symbian/3.0 Profile/MIDP-2.0`
* `SGH-Z300 SHP/VPP/R5 SMB3.1 SMM-MMS/1.2.0 profile/MIDP-2.0`
* `MOT-V3v/0E.42.08R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.0 UP.Link/6.3.0.0.0`

Um das Z500 zu simulieren, habe ich den zweiten String in folgenden abgewandelt:

* `SGH-Z500 SHP/VPP/R5 SMB3.1 SMM-MMS/1.2.0 profile/MIDP-2.0`

Nimmt man jetzt einen Browser und stellt diesen UserAgent ein, bekommt man eine WML-Seite zum Download. In dieser
befindet sich dann auch der ersehnte Link zur `.jad`-Datei. Hat man diese heruntergeladen, findet man darin auch den
Link zur finalen `.jar`-Datei.

Das Z300 akzeptiert nun aber auch keine Java-Programme, die man per Bluetooth sendet, sondern nur welche, die per
WAP/GPRS heruntergeladen wurden. Dazu bietet sich [David Pye's FreeWap-Service](http://www.davidpye.com/index.php?page=freewap) an.
Wer es über seinen eigenen Server laufen lassen will, muss zusehen, dass die `.jar`-Dateien mit dem MIME-Typ
"`application/java-archive`" gesendet werden, statt "`application/octet-stream`". Das erreicht man beim
Apache-Webserver mit folgender Zeile in einer Datei `.htaccess`:

    AddType application/java-archive .jar

Dann braucht man nur noch per GPRS auf den URL der `.jar`-Datei zuzugreifen und der Download startet.