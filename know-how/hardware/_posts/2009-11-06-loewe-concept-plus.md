---
title: Loewe Concept Plus
language: de
layout: default
created: 2009-11-06 21:46:28 +0100
updated: 2009-11-06 21:46:28 +0100
toc: false
tags:
  - know-how
  - hardware
  - loewe
  - tv
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
