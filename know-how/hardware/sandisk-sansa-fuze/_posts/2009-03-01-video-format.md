---
created: 2008-12-31 00:33:58 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/12/31/sandisk-sansa-video-format.html
tags:
- know-how
- hardware
- sandisk
- sansa
- fuze
- video
title: SanDisk Sansa Video format
toc: false
updated: 2009-03-01 13:00:13 +0100
---

The Sansa is very picky about what file to play and what not. The demo video has the following format:

~~~
General #0
Complete name : WAZ.MineToRemember.SansaPlayer.avi
Format : AVI
Format/Info : Audio Video Interleave
Format/Family : RIFF
File size : 20.0 MiB
PlayTime : 3mn 26s
Bit rate : 812 Kbps
Writing application : InterVideo

Video #0
Codec : DivX 5
Codec/Family : MPEG-4
Codec profile : Unknown
Codec settings/Packe : No
Codec settings/BVOP : Yes
Codec settings/QPel : No
Codec settings/GMC : 0
Codec settings/Matri : Default
PlayTime : 3mn 26s
Bit rate : 667 Kbps
Width : 224 pixels
Height : 176 pixels
Display Aspect ratio : 1.273
Frame rate : 20.000 fps
Resolution : 8 bits
Interlacement : Progressive

Audio #0
Codec : MPEG-1 Audio layer 3
PlayTime : 3mn 26s
Bit rate : 128 Kbps
Bit rate mode : CBR
Channel(s) : 2 channels
Sampling rate : 44.1 KHz
Resolution : 16 bits
Writing library : Xing (new)
~~~


Encoding
========

According to [this post](http://www.anythingbutipod.com/forum/showpost.php?p=307639&postcount=14) the
[Any Video Converter](http://www.any-video-converter.com/products/for_video_free/) should be able to convert videos for the FUZE. The Settings are:

  * AVI
  * 224x176 resolution
  * with Xvid or Divx5 codec
  * Video: 134kbps, 20fps
  * Audio: mp3, 128kbps, 2 channels, 44100khz