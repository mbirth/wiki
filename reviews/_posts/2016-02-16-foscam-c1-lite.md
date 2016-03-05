---
title: "[Review] Foscam C1 Lite"
language: de
layout: default
created: 2016-02-16 23:10:12 +0100
updated: 2016-02-16 23:10:12 +0100
toc: false
tags:
  - review
  - foscam
  - webcam
  - ipcam
  - ip camera
  - c1
---
Ich hatte mir vor geraumer Zeit eine Foscam FI9831W gekauft und mich auch auf
der Foscam-Homepage registriert. Vor einigen Wochen kam eine Mail, in der nach
Testern aus Deutschland gefragt wurde. Dort habe ich mich gemeldet und nun gab
es das erste Testgerät: Eine **Foscam C1 Lite**. Allerdings wurden mir keinerlei
Vorgaben gemacht, so dass ich das Review genauso schreiben würde, hätte ich mir
die Kamera selbst gekauft.


Auspacken
=========

Zuerst fällt die wertige Verpackung auf, die an ein modernes Smartphone
erinnert. In der Packung findet man die Kamera selbst, ein MicroUSB-Kabel sowie
ein entsprechendes Steckernetzteil, was auch z.B. zum Aufladen vom Handy
verwendet werden könnte. Dazu kommen noch Schnellstart-Anleitungen auf Deutsch
und Englisch, eine Sicherheitsinformation (Englisch), eine Garantiekarte sowie
ein "WARNING Video Surveillance in Operation"-Aufkleber und Schrauben und Dübel
für eine eventuelle Wandmontage.


Ersteinrichtung
===============

Die erste Einrichtung kann auf verschiedenen Wegen geschehen:

1. Per App und Einscannen eines QR-Codes auf der Rückseite der Kamera. (EZLink)
2. Per Hotspot von der Kamera aus, an dem man sich anmeldet und per Browser
   die Kamera konfiguriert.
3. Per *WPS Push*, wo man einen Knopf am WLAN-Router und anschließend an der
   Kamera drückt und diese sich dann automatisch mit dem eigenen WLAN verbindet.
   Anschließend konfiguriert man diese über den Browser.

Ich hatte mich für die erste Methode entschieden. Die App bekommt man am
einfachsten durch Einscannen des QR-Codes auf der Verpackung. Danach führt
einen die App durch die weiteren Schritte. Was mich etwas gestört hat, war,
dass ich einen Account bei Foscam anlegen musste, bevor ich mit der App auch
nur irgendwas machen konnte. Die Einrichtung danach war aber ein Kinderspiel.
Allerdings muss man auch wissen, dass man mit dieser Methode auch die
P2P-Funktionen der Kamera aktiviert, d.h. Alarme und Aufzeichnungen werden zu
Foscam geschickt und darüber an die App auf's eigene Smartphone verteilt. Wer
das nicht will, muss die Funktionen anschließend über die Web-Oberfläche der
Kamera wieder deaktivieren.


Weitere Konfiguration
=====================

Überhaupt sollte man anschließend noch alle Einstellungen in der Web-Oberfläche
durchgehen, da man dort noch um Längen mehr einstellen kann. Die Kamera erreicht
man über Port 88 (HTTP) oder 443 (HTTPS). Hier kommen wir aber schon zum
nächsten Kritikpunkt: Die Web-Oberfläche funktioniert weder unter Linux, da sie
ein Browser-Plugin nutzt, was es nur für Windows und MacOS gibt; noch
funktioniert sie im Chrome Browser, da dieser aus Sicherheitsgründen keine
NPAPI-Plugins, wie es das Foscam eines ist, unterstützt. Und ohne Browser-Plugin,
was eigentlich nur für die Darstellung des Live-Bildes benötigt wird, kann man
leider überhaupt nichts einstellen, weil der Login gar nicht erst funktioniert.

Nutzer von Windows XP werden auch Probleme haben - zumindest wollte die
Konfigurationsseite bei mir nicht im Internet Explorer 8 auf gehen. Erst unter
Windows 7 mit dem MSIE 9 (im Kompatibilitätsmodus und mit installiertem Plugin)
funktionierte die Konfiguration der Kamera - dort dann aber problemlos.

Das ist übrigens auch bei meiner anderen Foscam FI9831W so, also scheinbar ein
generelles Problem aktueller Firmwares von Foscam-Kameras.

Ansonsten lässt die Kamera keine Einstellungswünsche offen. Besonders gut ist
die Möglichkeit der Bewegungs- und/oder Geräuscherkennung. Für die
Bewegungserkennung kann man auch Bereiche im Kamerabild festlegen, die ignoriert
werden sollen, z.B. wenn man Haustiere hat. Wird eine Bewegung und/oder ein
Geräusch erkannt, kann man die Kamera ein Alarmsignal ausgeben, und/oder
automatisch Fotos/Video aufzeichnen oder einen stummen Alarm per E-Mail oder
Push-Benachrichtigung zur Handy-App senden lassen.


Betrieb
=======

Ist die Kamera eingerichtet, verrichtet sie brav ihren Dienst und liefert ein
gestochen scharfes Bild. Gute Beleuchtung natürlich vorausgesetzt. Dieses Modell
hat nämlich keine Nachtsicht-Funktion. Durch den eingebauten IR-Filter (nötig
für korrekte Farbwiedergabe bei Tageslicht), der sich auch nicht abschalten
lässt, helfen auch separate IR-Scheinwerfer bei Dunkelheit nicht. Wer Nachtsicht
benötigt, sollte zum großen Bruder, der C1 ohne "Lite", greifen.

Wer mehrere Foscam-Kameras in einem Bereich hat, kann bis zu 8 weitere Kameras
in den Einstellungen hinterlegen und nach dem Login alle auf einer Seite sehen.

Über Port 50021 kann man per FTP auf die Kamera zugreifen und so die
Aufzeichnungen herunter laden.

Diese Kamera hat außerdem die P2P-Funktion, d.h. man kann Videos und Fotos zur
MyFoscam-Homepage hochladen lassen und dort von überall aus drauf zugreifen.
Allerdings kostet dieser Dienst monatliche Gebühren. Die Benutzung der Seite
bedarf außerdem wieder eines Browser-Plugins mit den o.g. Einschränkungen. Und
der Internet Explorer mit 64-bit wird auch nicht unterstützt. Oder man nutzt
das Ganze durch die App.

Des weiteren hat die Kamera auch einen Lautsprecher eingebaut. Man kann also
auch mit der Person vor der Kamera sprechen, z.B. bei einer Türstation.
Allerdings sollte man in Sachen Lautstärke keine Wunder erwarten. Das ist
immerhin eine Kamera, keine Lautsprecher-Box.

Was mir aufgefallen ist: Im Vergleich mit meiner FI9831W liefert die C1 Lite ein
16:9 Bild, während die andere ein 4:3 Bild liefert. Da die C1 Lite aber ein
besseres Weitwinkelobjektiv hat, geht nichts verloren - ganz im Gegenteil: Man
sieht in der Breite mehr.

Da hier die WLAN-Antenne integriert ist, scheint die Kamera etwas wählerischer
zu sein. Während ich mit der FI9831W keine Bildruckler hatte, hat die C1 Lite
immer nur alle paar Sekunden ein Bild geliefert. Nachdem ich auf einen anderen
WLAN-Kanal gewechselt bin, kam auch hier ein ruckelfreies Video.

Laut meinem USB-Energiemonitor zieht die Kamera im normalen Betrieb etwa 250mA
mit Spitzen bis zu 300mA. Da die über ein normales USB-Kabel angeschlossen wird,
kann man sie also auch mit einer USB-Powerbank über Stunden betreiben.


Kritik / Verbesserungswünsche
=============================

* Die Ersteinrichtung per App ("EZLink") sollte komplett ohne Anlegen eines
  Online-Konto möglich sein.
* Die blaue WLAN-LED blinkt im Normalbetrieb(!) einmal die Sekunde. Man kann
  die LEDs zwar komplett abschalten, aber eine Option, dass die blaue LED
  einfach dauerhaft leuchtet, fehlt.
* Nach Aufbau der WLAN-Verbindung "spricht" die Kamera: _"Wireless connection
  succeeded."_. Hier wäre schön, wenn sie zusätzlich noch die IP-Adresse
  ausgeben würde. Und man sollte die Sprachausgabe auch abschalten können,
  damit nach einem Stromausfall nicht aus allen Ecken der Wohnung Stimmen
  kommen.
* Die Web-Oberfläche sollte ohne Browser-Plugin auskommen und in JEDEM aktuellen
  Browser funktionieren, wie das z.B. bei INSTAR der Fall ist. Und wenn man um
  das Plugin nicht herum kommt, sollte wenigstens die Konfiguration der Kamera
  (wo das Plugin nicht benutzt wird) möglich sein.


Fazit
=====

Mal von der - für Linux-User - umständlichen Einrichtung abgesehen, ist das hier
eine solide IP-Kamera, die ein hervorragendes Bild liefert und alles kann, was
man von einer Überwachungskamera erwartet. Und ist die Einrichtung
abgeschlossen, lässt man die Kamera ja i.d.R. einfach machen. Insofern macht man
mit dem Kauf der C1 Lite nichts falsch. Für den Preis bekommt man wahrscheinlich
nichts besseres.
