---
created: 2009-12-22 00:43:14 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/12/22/memup-pop-key.html
tags:
- know-how
- hardware
- memup
- popkey
- usb
title: memup Pop Key
toc: false
updated: 2009-12-22 01:15:54 +0100
---

* **Homepage:** <http://www.memup.com/>

I just bought a 4GB *Pop Key* in a local supermarket. This device not only works as a simple flash disk but also brings a CD-ROM-Partition with a small security software with it. This just calls for modification...


CD Partition
============

After some searching, I found a posting on the [usboffice.kr](http://blog.usboffice.kr/?p=146) blog. Luckily, the *Pop Key* has a USB ID of `090c:1000` and thus holds an SMI Chip.
With the [SMI UFD Utility](http://ftp.usboffice.kr/files/SMI_UFD_Utility.zip), you can resize the CD partition or even remove it from the stick.

This way, you can make it e.g. a Windows XP or Windows 7 installation device, use it for the [System Rescue CD](http://www.sysresccd.org/Main_Page) or - if you can trick the *U3 LaunchPad* into
accepting the stick - burn the U3 software to it to make it U3 compatible.

*[SMI]: Semiconductor Manufacturing International