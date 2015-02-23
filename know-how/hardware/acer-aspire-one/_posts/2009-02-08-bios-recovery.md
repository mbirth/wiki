---
title: BIOS Recovery on the Acer Aspire One
layout: default
created: 2008-09-28 19:28:33 +0200
updated: 2009-02-08 14:50:11 +0200
toc: false
tags:
  - know-how
  - hardware
  - acer
  - aspire
  - bios
---
After playing around a bit, my Aspire One (v3114) got bricked after a normal reboot (blank screen, power led and
fan on, nothing else). There's a nice recovery procedure for the BIOS at [macles](http://macles.blogspot.com/2008/08/acer-aspire-one-bios-recovery.html).

1. download the latest BIOS from [Acer](http://support.acer-euro.com/drivers/notebook/as_one_150.html)
1. format an USB stick with FAT32 / VFAT
1. put the files `FLASHIT.EXE` and `ZG5_`*version*`.fd` onto the stick
1. rename the ZG5-file to `ZG5IA32.FD`
1. now connect this stick to your AAO, also connect the battery and the power supply
1. hold <kbd>Fn</kbd>-<kbd>ESC</kbd> down while powering on the AAO
1. release when the Power-LED starts blinking
1. (maybe press the power button to initiate the process)[^1]
1. :warning: **DO NOT INTERRUPT THIS PROCESS!!!** :warning:
1. wait until the blinking ends and the AAO reboots a bit later


Somehow an A150L with the v3114 BIOS didn't let me update it to v3304. The Power-LED was blinking and the LED on my
flash drive flashed but after a few seconds, the A150 rebooted and the BIOS reported still the v3114.


[^1]: I'm not sure whether this is neccessary as I don't remember doing it when recovering my bricked A150X

*[BIOS]: Basic Input/Output System
*[FAT32]: File Allocation Table, 32bit
*[VFAT]: Virtual File Allocation Table
*[USB]: Universal Serial Bus
*[AAO]: Acer Aspire One
*[LED]: Light Emitting Diode
