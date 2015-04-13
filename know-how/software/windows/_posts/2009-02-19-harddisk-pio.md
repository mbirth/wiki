---
title: HD uses PIO instead of DMA
layout: default
created: 2008-07-15 00:10:30 +0200
updated: 2009-02-19 22:06:02 +0100
toc: false
tags:
  - know-how
  - software
  - windows
  - hardware
  - hdd
---
If Windows uses PIO mode instead of DMA, it probably have slowed down due to reading errors. To fix the slow-down, find
the registry key:

    HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Class\{4D36E96A-E325-11CE-BFC1-08002BE10318}

This contains the subfolders `0000`, `0001` and `0002`. `0001` is the primary IDE port and `0002` is the secondary. But
watch the entries in there and you'll get the idea.

The important values are `MasterIdDataChecksum` and `MasterDeviceTimingModeAllowed` as well as `SlaveIdDataChecksum`
and `SlaveDeviceTimingModeAllowed`. Delete the keys and reboot. Windows will re-detect the speed and should be back at
full DMA speed.

Usually, this should be fixed since SP2, but it seems to not work everywhere. You could try to force a retry by adding
a DWORD-entry `ResetErrorCounterOnSuccess` with a value of `1` to that key.


*[PIO]: Programmed Input/Output
*[DMA]: Direct Memory Access
