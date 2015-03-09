---
title: ALSA Sound Card Order
layout: default
created: 2010-02-06 00:41:02 +0100
updated: 2010-02-06 00:41:02 +0100
toc: false
tags:
  - know-how
  - software
  - linux
  - sound
  - alsa
---
The default soundcard to be used with ALSA is that with the index 0 in `/proc/asound/cards`. Usually this is the first
found sound device.

If you want to change this order, you have to find out the name of the kernel module used for that card and then add
the desired `index` to it in a modprobe file. I appended these lines to my `/etc/modprobe.d/alsa-base.conf`:

    options snd-hda-intel index=-2
    options snd-usb-audio index=0

This way, the internal sound card (which was the primary one) now gets some other index and the USB mini speakers get
the index 0 and therefore become the new default device for any sounds.
