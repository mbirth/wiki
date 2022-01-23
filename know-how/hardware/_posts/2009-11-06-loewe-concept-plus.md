---
created: 2009-11-06 21:46:28 +0100
language: de
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/11/06/loewe-concept-plus-de.html
tags:
- know-how
- hardware
- loewe
- tv
title: Loewe Concept Plus
toc: false
updated: 2009-11-06 21:46:28 +0100
---

AV1 und AV2 gleichzeitig
========================

Bei einem *Loewe Concept Plus* (Concept 17-100 od. Concept 84-100) mit Q2100-Chassis konnte man kein Signal von der
zweiten AV-Buchse sehen, solange an AV1 ein Signal anlag. Egal, was man eingestellt hat, man hat immer das Bild von
AV1 gesehen.

Nach Rücksprache mit dem fähigen Support, war der Übeltäter der Pin Nr. 16 an der [AV1-Buchse](http://de.wikipedia.org/wiki/SCART#Steckerbelegung).
Dort liegt das Austast-Signal für den RGB-Betrieb an, welches wohl die Synchronisation des Bildes von der zweiten
Buchse stört. Somit zeigt der TV immer nur das Bild von AV1 an, weil er das Bild von AV2 nicht als gültiges Signal
erkennt.

Nach dem Entfernen des Pin 16 aus dem Scart-Stecker[^1] kann man jetzt problemlos zwischen den beiden AV-Buchsen
umschalten.


[^1]: Da ist ein kleiner Widerhaken an der Fahne, den man mit einer geeigneten Zange platt drücken muss, dann kann man die Fahne nach innen herausnehmen.