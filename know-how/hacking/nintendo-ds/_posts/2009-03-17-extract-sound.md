---
title: Extract Sound from ROMs
language: en
layout: default
created: 2009-03-17 20:41:05 +0100
updated: 2009-03-17 20:41:05 +0100
toc: false
tags:
  - know-how
  - hacking
  - hardware
  - nintendo
  - gaming
---
To extract sounds (or graphics) from a ROM, you'll need the [ndstool]({% post_url 2009-03-16-ndstool %})
and [ndssndext](http://www.4shared.com/file/68276816/8092229e/ndssndext_v04.html).

First extract the game data from ROM:

    ndstool -x -d data <filename>.nds

This will create a new directory `data` containing all the game data. In there you'll most probably find a file `*.sdat`
somewhere. This is a sound archive format. Now run this through the `ndssndext` (I had to use *WinE*):

    wine ndssndext.exe sound_data.sdat

This creates a new folder which contains more folders with the actual contents from the `.sdat`-file. These can be MIDI
files and/or (converted) WAV files.
