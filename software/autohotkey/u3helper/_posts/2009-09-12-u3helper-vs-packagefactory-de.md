---
alternatives:
- language: en
  url: /software/autohotkey/u3helper/u3helper-vs-packagefactory.html
created: 2009-09-12 09:31:40 +0200
language: de
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/09/12/u3helper-vs.-packagefactory-de.html
tags:
- software
- autohotkey
- u3helper
title: U3Helper vs. PackageFactory
toc: false
updated: 2009-09-12 09:31:40 +0200
---

[This page in English.]({% post_url 2009-09-12-u3helper-vs-packagefactory %})

Vielleicht fragt sich ja wer, warum die komplizierte U3Helper-Methode wählen, wenn es doch
[Package Factory](http://www.eure.ca/) gibt? Dafür gibt es einige Gründe:

* Ganz oben ist erstmal, dass Package Factory keine Programme handhaben kann, die die Registry benutzen. Solche
  Programme würden bei einem mit Package Factory erstelltem U3-Package auf jedem Rechner stets ihre Einstellungen
  vermissen bzw. die Einstellungen vom letzten Start auf dem jeweiligen PC wiederfinden.
* Womit wir schon beim zweiten Punkt wären: Package Factory sorgt nicht dafür, dass Registry-Einträge hinterher wieder
  aufgeräumt werden.
* Und Punkt Nr. 3: Mit Package Factory nimmt jedes Programm auf dem U3-Stick doppelt Platz ein, da es einmal
  komprimiert im U3-Package liegt und dann noch entpackt im `%U3_DEVICE_EXEC_PATH%`-Ordner (üblicherweise
  `\System\Apps\{UUID}\Exec` auf dem Stick).

Package Factory funktioniert im Prinzip so, als wenn man ein normales portables Programm (was also auf jedem USB-Stick
läuft) in einen speziellen Ordner auf dem U3-Stick packt und im LaunchPad ein Icon dafür anlegt. Mehr ist es nicht.

Hier nochmal im Überblick:

***PRO Package Factory:***

* einfache Umwandlung aller portablen Programme
* kein Herausfinden der Datendateien und Registryeinträge nötig

Probleme mit Package Factory:

* Registry-Einträge werden nicht überwacht/bereinigt, geschweige denn zwischen Systemen transportiert
* Pfadangaben in den Programmen können auf einem anderen PC u.U. an völlig falsche Orte zeigen, so dass Datendateien
  nicht gefunden werden
* non-portable Programm können damit nicht U3-fähig gemacht werden
* Programme belegen doppelt Speicher auf dem U3-Stick (siehe Erklärung oben)


***PRO U3Helper:***

* verwaltet Registry-Einträge, transportiert Einstellungen zwischen PCs, löscht die Einträge nach der Benutzung
* die Programmdateien (`.exe`, `.dll`, etc.) liegen nur in komprimierter Form auf dem U3-Stick und werden bei Bedarf
  auf den PC entpackt, nur die Datendateien liegen unkomprimiert auf dem Stick
* Datendateien werden beim Start mit auf den PC kopiert und dort benutzt/verändert, dadurch wird die Geschwindigkeit
  des Programms und die Lebenszeit des Flash-Speichers drastisch erhöht. Hinterher wird alles wieder auf den U3-Stick
  kopiert.
* verwaltet Pfadangaben in `.ini`, `.xml`-Dateien und Registry, so dass die Programme ihre Dateien auf jedem PC finden
* kann bei Bedarf Umgebungsvariablen umbiegen, so dass auch nicht-USB-Stick-fähige Programme ihre Daten auf dem
  U3-Stick anlegen statt auf dem PC
* kann `.dll` und `.ocx`-Dateien in Windows registrieren und nach der Benutzung wieder de-registrieren (z.B. für ältere
  CCleaner-Versionen nötig)


**Die Benutzung von U3Helper für kommerzielle Zwecke bedarf meiner Einwilligung**, sofern ich das Programm nicht schon
selbst U3-fähig gemacht habe und auf meinem FTP-Server anbiete.