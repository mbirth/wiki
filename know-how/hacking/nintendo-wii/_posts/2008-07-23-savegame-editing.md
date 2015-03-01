---
title: Wii Savegame Editing
language: en
layout: default
created: 2008-07-23 21:31:36 +0200
updated: 2008-07-23 21:31:58 +0200
toc: false
tags:
  - know-how
  - hacking
  - hardware
  - nintendo
  - wii
---
Savegames, as well as almost all other files, are encrypted using some crypto magic. The keys were found and now there
are some tools to decrypt and recrypt the savegames called [Segher's Wii.git](http://wiibrew.org/wiki/Segher's_Wii.git).

To compile them, you need to also compile OpenSSL, add the `include`-directory of OpenSSL to the search path for gcc and
also point the `ld` to the compiled libcrypto.a.

After that, find the 3 interesting keys on [HackMii](http://hackmii.com/2008/04/keys-keys-keys/), which are `md5-blanker`,
`sd-iv` and `sd-key`.

Create a directory `~/.wii` and put the 3 keys in ***binary*** form in there. (No text file with the values as numbers
and letters but binary files with exactly 16 Bytes per file. Use `ghex2` or such.)

If everything is correct, you can uncompress savegames data.bin using `tachtig` and recompress them using `twintig`.
