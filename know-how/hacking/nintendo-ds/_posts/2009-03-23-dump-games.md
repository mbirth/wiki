---
created: 2009-03-15 14:41:43 +0100
language: en
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/03/15/dump-games.html
tags:
- know-how
- hacking
- hardware
- nintendo
- gaming
title: Dump Games
toc: false
updated: 2009-03-23 01:04:47 +0100
---

Dumping game cartridges is done the same way like [dumping savegames]({% post_url 2009-03-15-backup-savegames %}).


EZFlash 3in1 method
===================

The only difference here is that you might have to swap the cartridges more often since the Flash memory of the [EZFlash 3in1]({% post_url 2009-03-15-ezflash-3in1 %})
is only 32 MiB and some games are up to 128 MiB in size.

There's a nice tutorial with pictures at [monroeworld.com](http://www.monroeworld.com/myfaq/index.php?action=artikel&cat=7&id=129&artlang=en).

Here are some estimated times for dumping different sized game cartridges (copied from that page):

| Game size | Number of passes | est. time needed |
|----------:|:-----------------|-----------------:|
|    4 MiB  |   1 pass         |   2min 30sec     |
|    8 MiB  |   1 pass         |   3min 15sec     |
|   16 MiB  |   1 pass         |   4min 45sec     |
|   32 MiB  |   1 pass         |   9min 30sec     |
|   64 MiB  |   2 passes       |  14min 15sec     |
|  128 MiB  |   4 passes       |  19min 00sec     |
|  256 MiB  |   8 passes       |  38min 00sec     |


Wi-Fi method
============

Be warned that the Wi-Fi transfer speed is somewhat "limited". Dumping a 128 MiB game takes almost **2 hours**. So make
sure your NDS is connected to its power adaptor.


ROM Trimming
============

Game cartridges have the typical memory ICs in binary sizes (8, 16, 32, 64, 128, 256 MiB) although the game often
doesn't occupy the whole memory. That means if a game is 35 MiB in size, it is shipped on a 64 MiB cartridge. When
dumping, you'll dump the whole 64 MiB although the last 29 MiB are empty (filled with `0x00`). So you can save a lot of
space if you trim a ROM down to the real size.

<p><div class="notewarning">
Games which use the WiFi feature mostly store their connection info in this empty space so using the wrong program to trim a ROM will break online capability of games.
</div></p>

A good trimmer is [NDSTokyoTrim](http://techsuki.net/nintendo-ds-rom-trimmer/) which can detect WiFi-games and leaves
the space for their settings.