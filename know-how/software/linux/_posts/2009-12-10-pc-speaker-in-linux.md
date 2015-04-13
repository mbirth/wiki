---
title: PC Speaker in Linux
layout: default
created: 2009-12-10 19:17:02 +0100
updated: 2009-12-10 19:17:02 +0100
toc: false
tags:
  - know-how
  - software
  - linux
  - sound
---
Enable in Ubuntu
================

If you want some scripts to emit beeps, e.g. because you don't always have your headphones on, you first have to enable
the `pcspkr` module. This is per default disabled in Ubuntu. To enable it again, do the following:

1. open `/etc/modprobe.d/blacklist.conf` in your favorite editor (using `sudo`)
1. find these lines:  
  
        # ugly and loud noise, getting on everyone's nerves; this should be done by a
        # nice pulseaudio bing (Ubuntu: #77010)
        blacklist pcspkr
1. comment out the last line
1. finally, do a `sudo modprobe pcspkr`

After that, you can play around with the [beep](apt://beep) program.
