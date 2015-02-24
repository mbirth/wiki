---
title: MEDION HDDrive2go
language: de
layout: default
created: 2009-06-09 15:43:52 +0200
updated: 2009-12-27 20:18:52 +0100
toc: false
tags:
  - know-how
  - hacking
  - hardware
  - medion
  - hdd
---
<img src="{{ site.url }}/assets/hddrive2go.jpg" alt="" height="300" />


Hardware
========

* **Festplatte:** Western Digital Caviar SE, P/N: WD2500JB-00GVC0 (250GB, 8MB Cache, 7200rpm, IDE)
* **Controller:** Cypress CY7C68300B (AT2LP)
* **EEPROM:** CSI 24WC02WI


Cypress AT2LP RC42
==================

Schließt man ein inkompatibles Gerät an, z.B. eine *InnoDisk EDC2000* Flash disk, kann es sein, dass kein USB-Laufwerk
mehr erkannt wird, sondern ein Gerät **Cypress AT2LP RC42**. In diesem Fall wurde der EEPROM gelöscht und der
Cypress-Chip muss neu programmiert werden.

Dazu gibt es das Tool *Primer*. Dieses hat ein findiger Benutzer in der [WinHelpLine](http://www.winhelpline.info/forum/600431-post148.html)
zum Download zur Verfügung gestellt. In der ZIP-Datei ist auch der Treiber, mit dem man Windows das Gerät "beibringen"
kann. Dazu im Treiber-Dialog unbedingt manuell(!) nach einem Treiber suchen, in der näheren Kategorisierung dann
entweder oben "Alle Geräte" wählen, oder unten "USB Controller". Danach klickt man auf *Diskette...* und wählt das
`Driver`-Verzeichnis aus der ZIP-Datei. Nun wird der *Cypress AT2LP Manufacturing Driver* installiert.

Jetzt aus dem *HDDrive2go* den Stromstecker ziehen (USB bleibt dran!) und nach ein paar Sekunden wieder einstecken.
Im *Primer*-Tool sollte jetzt kurz *Programming device EEPROM* auf gelbem Grund erscheinen und gleich zu
*Programming successful* auf grünem Grund wechseln.

Nun Strom und USB abziehen, ein paar Sekunden warten und alles wieder anschließen. Die Festplatte sollte nun wieder
erkannt werden.

* **Download:** [primer.zip]({{ site.url }}/assets/primer.zip)
* **bebilderte Anleitung:** [dbflash.pdf]({{ site.url }}/assets/dbflash.pdf)
* **English instructions:** [dbflash_en.pdf]({{ site.url }}/assets/dbflash_en.pdf)
* <http://www.cypress.com/?rID=14406> --- dort gibt's u.a. das Tool *Blaster* (unten in dem **RD1058**-Paket),
  welches scheinbar ähnlich wie *Primer* arbeitet. Unter den Konfigurationsdateien ist aber nichts, was der benötigten
  `100_self_ATA.iic` ähnlich sieht.


Gerät wird nicht erkannt
========================

Sollte Windows keinen Ton von sich geben, wenn man das *HDDrive2go* anschließt, kann das durch einen ungültig
geflashten EEPROM ausgelöst sein. Dies passiert z.B., wenn man die Primer-Datei `PH-1003.iic` benutzt - diese
funktioniert nur bei USB-Laufwerken von *Targa*.

Der Cypress-Chip hat glücklicherweise einen Reset-Modus, womit man neue Daten in den EEPROM schreiben kann. Dazu muss
man allerdings das Gehäuse komplett zerlegen, so dass man die Platte von der Platine trennen kann. Dazu das Kabel von
der Platine abziehen - das andere Ende kann in der Platte stecken bleiben.

Jetzt die Pins 1 und 3 mit einem Jumper überbrücken. Die ersten beiden Pins sind auf der Platine beschriftet. Der
dritte ist dann wieder in der gleichen Reihe wie der erste.

Sind die beiden Pins überbrückt, erst den USB-Stecker anschließen (auch am PC!) und dann den Stromstecker einstecken.
Jetzt sollte der PC das *Cypress AT2LP RC42*-Gerät erkennen und man kann wie o.a. fortfahren. Ist die korrekte Kennung
geflasht, Strom und USB abziehen, Jumper abziehen und die Platte wieder normal anschließen.


Links
=====

* <http://daltrey.org/linux/cypress.html>
* <http://www.winhelpline.info/forum/600850-post150.html>
* <http://daltrey.org/tw/tiki-index.php?page=CypressAt2lp>
* <http://www.cypress.com/products/?gid=9&fid=14&rpn=CY7C68300C>
