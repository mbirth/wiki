---
title: TASSIMO Barcodes
language: de
layout: default
created: 2013-09-08 15:43:52 +0200
updated: 2016-04-16 17:50:50 +0200
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
| Costa Espresso for Capp. & Latte  |         |  02209-5 |   0000 1000 1010 0001 |
| TWINING's English Breakfast       |  195 ml |  03287-2 |   0000 1100 1101 0111 |
| TWINING's Earl Grey               |         |  03351-0 |   0000 1101 0001 0111 |
| TWINING's Darjeeling              |         |  03351-0 |   0000 1101 0001 0111 |
| TWINING's Waldfruchttee           |         |  03354-1 |   0000 1101 0001 1010 |
| Suchard Hot Chocolate             |  195 ml |  04785-2 |   0001 0010 1011 0001 |
| ICE DISC Espresso ❄               |         |  06146-9 |   0001 1000 0000 0010 |
| ICE DISC Cappucino ❄              |         |  06146-9 |   0001 1000 0000 0010 |
| ICE DISC Chocolate ❄              |         |  06146-9 |   0001 1000 0000 0010 |
| Jacobs Espresso                   |   60 ml |  06178-0 |   0001 1000 0010 0010 |
| Jacobs Espresso für Latte Macch.  |         |  06178-0 |   0001 1000 0010 0010 |
| CARTE NOIRE Espresso Classic      |         |  06178-0 |   0001 1000 0010 0010 |
| CARTE NOIRE Espresso Intense      |         |  06178-0 |   0001 1000 0010 0010 |
| Milch für Cadbury                 |         |  06182-7 |   0001 1000 0010 0110 |
| Milch für Milka, Marabou & Freia  |         |  06182-7 |   0001 1000 0010 0110 |
| Milch für Costa Cappuccino        |         |  06182-7 |   0001 1000 0010 0110 |
| Milch für CARTE NOIRE Cappu.      |         |  06182-7 |   0001 1000 0010 0110 |
| Jacobs Caffè Crema                |         |  06409-5 |   0001 1001 0000 1001 |
| Milka                             |         |  06665-5 |   0001 1010 0000 1001 |
| OREO                              |         |  06665-5 |   0001 1010 0000 1001 |
| Cadbury                           |         |  06665-5 |   0001 1010 0000 1001 |
| Service-Disc ⚒                    |         |  07879-5 |   0001 1110 1100 0111 |
| Jacobs Caffè Crema XL             |  215 ml |  29761-5 |   0111 0100 0100 0001 |
| CARTE NOIRE Petit Déjeuner        |  215 ml |  29761-5 |   0111 0100 0100 0001 |
| Costa Americano                   |  220 ml |  29761-5 |   0111 0100 0100 0001 |
| Kenco Medium Roast                |  195 ml |  29761-5 |   0111 0100 0100 0001 |
| CARTE NOIRE Lungo Intenso         |         |  30195-4 |   0111 0101 1111 0011 |
| Jacobs Krönung Verwöhnkanne       |         |  34419-7 |   1000 0110 0111 0011 |
| Tea Bar Peach Iced Tea ❄          |         |  34913-0 |   1000 1000 0110 0001 |
| Milch für OREO                    |         |  36681-6 |   1000 1111 0100 1001 |
| Second Cup Espresso Forte         |   65 ml |  59459-2 |   1110 1000 0100 0011 |
| Gevalia Kaffe Espresso            |         |  59491-2 |   1110 1000 0110 0011 |
| Starbucks Espresso Roast          |         |  59683-1 |   1110 1001 0010 0011 |
| Milch für Cappuccino              |  215 ml |  63479-3 |   1111 0111 1111 0111 |
| Milch für Latte (Pulver?)         |  250 ml |  63607-0 |   1111 1000 0111 0111 |
| Milch für Latte Macchiato         |         |  63735-0 |   1111 1000 1111 0111 |
| Milch für Costa Caramel Latte     |         |  63735-0 |   1111 1000 1111 0111 |
| Gevalia Kaffe Signature Blend     |         |  64226-2 |   1111 1010 1110 0010 |
| Maxwell House Morning             |  300 ml?|  64803-5 |   1111 1101 0010 0011 |
| Gevalia Kaffe Caramel Espresso    |   60 ml |  67427-0 | 1 0000 0111 0110 0011 |
| Milch für Chai Latte              |         |  67447-8 | 1 0000 0111 0111 0111 |
| Second Cup Chocolate Syrup        |  195 ml |  67645-8 | 1 0000 1000 0011 1101 |
| Corner Coffee Pepp. Choc. Syrup   |         |  67645-8 | 1 0000 1000 0011 1101 |
| Nabob Breakfast Du Matin          |         |  68305-0 | 1 0000 1010 1101 0001 |
| Tazo Awake Black Tea              |         |  69955-6 | 1 0001 0001 0100 0011 |
| TWINING's Chai Latte              |         |  71587-4 | 1 0001 0111 1010 0011 |
| ICE DISC Tea ❄                    |         |  71651-2 | 1 0001 0111 1110 0011 |


Tassimo Professional
--------------------

[Gastronomie-Gerät](http://www.tassimopro.com/) und die Kapsel-Codes sind
inkompatibel zu normalen Tassimo-Geräten, damit die Mitarbeiter nicht die
Kapseln klauen.

* Gevalia Kaffe Espresso: 84983-8


Programmierung
==============

<p><div class="notewarning">
Die Angaben hier sind aus der Patentschrift übernommen. Wie die in den Barcodes oben kodiert wurden, ist noch nicht ganz klar.
</div></p>

| Bits  | Funktion              | Werte     |
|:-----:|:----------------------|:----------|
| 0 & 1 | Wassertemperatur      | 00 = kalt |
|                              || 01 = warm |
|                              || 10 = 83 ℃ |
|                              || 11 = 93 ℃ |
| 2 & 3 | Kapselfüllung         | 00 = schnell Füllen, mit Ziehen  |
|                              || 01 = schnell Füllen, ohne Ziehen |
|                              || 10 = langsam Füllen, mit Ziehen  |
|                              || 11 = langsam Füllen, ohne Ziehen |
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
                   \\_______ 94℃ ???
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


Links
=====

* [Reverse engineering T-Disk barcodes for Tassimo coffee makers](http://reverseengineering.stackexchange.com/questions/3919/reverse-engineering-t-disk-barcodes-for-tassimo-coffee-makers)
* [Tassimo (T-Disc) Barcode von "Großer Tasse"](http://board.gulli.com/thread/739924-s-tassimo-t-disc-barcode-von-grosser-tasse/)
* [Tassimo Heißwasser-Disc mit 4 einstellbaren Mengen](http://www.kaffekompagniet.com/shop/tassimo-hot-water-916p.html)
