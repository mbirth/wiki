---
title: Flashing HTC devices from Linux
layout: default
created: 2008-09-13 00:47:08 +0200
updated: 2008-09-13 00:47:08 +0200
toc: false
tags:
  - know-how
  - software
  - windows-mobile
  - linux
---
To flash HTC devices under Linux, there is the [HTCFlasher](http://code.google.com/p/htc-flasher/) tool.

You might be missing the `/dev/ttyUSB0` device in recent Ubuntu installations. To fix this, use `lsusb` and look for
the device ID of a *Microsoft Corp. Generic PPC Flash device* (if in bootloader mode). Now do a

    sudo modprobe usbserial vendor=0x045e product=0x00ce

or add the following line to your `/etc/modules`:

    usbserial vendor=0x045e product=0x00ce

The ID here is that of my HTC Universal.
