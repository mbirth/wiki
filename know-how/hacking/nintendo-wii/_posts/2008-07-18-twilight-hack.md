---
created: 2008-07-18 22:44:40 +0200
language: en
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/07/18/wii-twilight-hack.html
tags:
- know-how
- hacking
- hardware
- nintendo
- wii
title: Wii Twilight Hack
toc: false
updated: 2008-07-18 22:44:40 +0200
---

The Twilight Hack is described at [Code Retard](http://www.coderetard.com/2008/05/07/install-wii-virtual-console-game-channels-with-wad-installer/).
It works by using a bug in *Zelda - Twilight Princess*. In short is goes like this:

1. get [WAD Installer 2.1](http://www.coderetard.com/wp-content/uploads/2008/05/wad-installer_v21.zip) and copy the
   `wad-installer.elf` to the root directory of your SD-card and name it `boot.elf`
1. get the [Twilight Hack Beta](http://www.coderetard.com/wp-content/uploads/2008/06/twilight-hack-v01-beta1.zip) (for
   the Wii 3.3 firmware) and copy the `rzdp.bin` as `data.bin` to `/private/wii/title/RZDP` (P for PAL).
1. copy all wanted games (`*.wad`-files) to a directory `/wad` on your SD card (4MiB ~ 59 blocks)
1. get *Zelda - Twilight Princess*, run it at least once on your Wii to create the savegame slot
1. insert SD card, delete savegame on your Wii and copy the Twilight Hack savegame from your SD card
1. now run *Zelda*, load game, walk towards the guy and talk to him
1. the screen goes black and shows the WAD Installer which installs all files found in `/wad`