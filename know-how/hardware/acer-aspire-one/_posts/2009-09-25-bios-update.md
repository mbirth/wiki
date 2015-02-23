---
title: BIOS Update on the Acer Aspire One
layout: default
created: 2008-10-21 01:36:01 +0200
updated: 2009-09-25 14:10:27 +0200
toc: false
tags:
  - know-how
  - hardware
  - acer
  - aspire
  - bios
---
To update the BIOS without Windows, install [UNetBootIn](http://unetbootin.sf.net/) and use it to put FreeDOS on a
flash drive. Now extract the e.g. `v.3305.zip` to it and reboot the machine. Press <kbd>F12</kbd> in the right
moment and select your USB flash drive from the list. Press <kbd>ENTER</kbd> when you see the `boot:` prompt, then
launch the *Default* configuration and select to boot FreeDOS without any drivers.

Now you should be at the `A:\>` prompt which is the emulated floppy drive. Change to `C:` and execute `3305.BAT`.


Gateway BIOS
============

[macles](http://macles.blogspot.com/2009/03/brightness-table.html) points out that there are netbooks with the same
hardware as the AAO and therefore the BIOS file is compatible. You can download the Gateway-BIOS from there. In the
comments you will find tips and tricks if your sound or function keys are not working after the update.

*[BIOS]: Basic Input/Output System
*[AAO]: Acer Aspire One
