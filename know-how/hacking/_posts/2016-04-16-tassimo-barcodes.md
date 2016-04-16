---
title: TASSIMO Barcodes
language: de
layout: default
created: 2013-09-08 15:43:52 +0200
updated: 2016-04-16 16:08:33 +0200
toc: true
tags:
  - know-how
  - hacking
  - hardware
  - tassimo
---
Im Gegensatz zu anderen Kapselmaschinen, bringen die Kapseln bei Tassimo ihre Zubereitungsanleitung gleich mit:
In Form eines Barcodes auf der Kapsel.

Weitere Informationen:

* <http://blog.chapmanconsulting.ca/wiki/Tassimo%20Hacking.ashx>
* <http://blog.chapmanconsulting.ca/wiki/TassimoBarcodeCreator.ashx>
* Patent: <http://www.google.com/patents/US7231869?printsec=description&dq=coffee+barcode>


Kapsel-Codes
============

<p><div class="notetip" markdown="1">
Die Prüfziffer wird wie beim UPC-Code berechnet: <http://en.wikipedia.org/wiki/Universal_Product_Code#Check_digits>
</div></p>

| Kapsel                            |  Menge  |  dezimal |  binär (ohne Prüfziffer)  |
|:----------------------------------|--------:|:--------:|--------------------------:|
| TWINING's Earl Grey               |         |  03351-0 |   0000 1101 0001 0111 |
| TWINING's Darjeeling              |         |  03351-0 |   0000 1101 0001 0111 |
| ICE DISC Espresso                 |         |  06146-9 |   0001 1000 0000 0010 |
| ICE DISC Cappucino                |         |  06146-9 |   0001 1000 0000 0010 |
| ICE DISC Chocolate                |         |  06146-9 |   0001 1000 0000 0010 |
| Jacobs Espresso                   |   60 ml |  06178-0 |   0001 1000 0010 0010 |
| Jacobs Espresso für Latte Macch.  |         |  06178-0 |   0001 1000 0010 0010 |
| Milch für Cadbury                 |         |  06182-7 |   0001 1000 0010 0110 |
| Milch für Milka, Marabou & Freia  |         |  06182-7 |   0001 1000 0010 0110 |
| Milka                             |         |  06665-5 |   0001 1010 0000 1001 |
| OREO                              |         |  06665-5 |   0001 1010 0000 1001 |
| Cadbury                           |         |  06665-5 |   0001 1010 0000 1001 |
| Service-Disc                      |         |  07879-5 |   0001 1110 1100 0111 |
| Jacobs Caffè Crema XL             |  215 ml |  29761-5 |   0111 0100 0100 0001 |
| CARTE NOIRE Petit Déjeuner        |  215 ml |  29761-5 |   0111 0100 0100 0001 |
| CARTE NOIRE Lungo Intenso         |         |  30195-4 |   0111 0101 1111 0011 |
| Jacobs Krönung Verwöhnkanne       |         |  34419-7 |   1000 0110 0111 0011 |
| Milch für OREO                    |         |  36681-6 |   1000 1111 0100 1001 |
| Milch für Latte Macchiato         |         |  63735-0 |   1111 1000 1111 0111 |
| Milch für Chai Latte              |         |  67447-8 | 1 0000 0111 0111 0111 |
| TWINING's Chai Latte              |         |  71587-4 | 1 0001 0111 1010 0011 |
| ICE DISC Tea                      |         |  71651-2 | 1 0001 0111 1110 0011 |


Programmierung
==============

<p><div class="notewarning">
Die Angaben hier sind aus der Patentschrift übernommen. Wie die in den Barcodes oben kodiert wurden, ist noch nicht ganz klar.
</div></p>

| Bits  | Funktion   | Werte  |
|:-----:|:-----------|:-------|
| 0 & 1 | Wassertemperatur  | 00 = kalt |
|                          || 01 = warm |
|                          || 10 = 83 ℃ |
|                          || 11 = 93 ℃ |
| 2 & 3 | Kapselfüllung     | 00 = schnell Füllen, mit Ziehen  |
|                          || 01 = schnell Füllen, ohne Ziehen |
|                          || 10 = langsam Füllen, mit Ziehen  |
|                          || 11 = langsam Füllen, ohne Ziehen |
| 4 & 5 & 6 & 7 | Getränkemenge | 0000 =  50 ml |
|                              || 0001 =  60 ml |
|                              || 0010 =  70 ml |
|                              || 0011 =  80 ml |
|                              || 0100 =  90 ml |
|                              || 0101 = 100 ml |
|                              || 0110 = 110 ml |
|                              || 0111 = 130 ml |
|                              || 1000 = 150 ml |
|                              || 1001 = 170 ml |
|                              || 1010 = 190 ml |
|                              || 1011 = 210 ml |
|                              || 1100 = 230 ml |
|                              || 1101 = 250 ml |
|                              || 1110 = 275 ml |
|                              || 1111 = 300 ml |
| 8 & 9 & 10 | Flussrate        | 000 =  30 % |
|                              || 001 =  40 % |
|                              || 010 =  50 % |
|                              || 011 =  60 % |
|                              || 100 =  70 % |
|                              || 101 =  80 % |
|                              || 110 =  90 % |
|                              || 111 = 100 % |
| 11 & 12 | Kapsel-Leerung      | 00 = langsamer Fluss / kurze Dauer |
|                              || 01 = langsamer Fluss / lange Dauer |
|                              || 10 = schneller Fluss / kurze Dauer |
|                              || 11 = schneller Fluss / lange Dauer |


Update April 2016
=================

Man hat mir folgende Grafik zugespielt:

![]({{ site.url }}/assets/t_code.png)

Wobei auch hier auffällt, dass z.B. die Temperatur-Angabe für die ICE DISCs
nicht stimmen kann:

```
1 0001 0111 1110 0011
                   \\_______ 94℃
```

Würde man den Code negieren, macht es vielleicht mehr Sinn?

```
0 1110 1000 0001 1100
  ||\__/\_____/\_/|\\_______ kalt
  \|  |    |    | \_________ große T-DISC
   |  |    |    \___________ langsam füllen, kein Ziehen (siehe Tabelle oben)
   |  |    \________________ ??? kleinste Menge ???
   |  \_____________________ 80% Fluss (siehe Tabelle oben)
   \________________________ schneller Fluss, lange Dauer (siehe Tabelle oben)
```
