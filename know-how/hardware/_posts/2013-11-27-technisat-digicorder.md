---
created: 2013-11-27 00:02:41 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2013/11/27/technisat-digicorder.html
tags:
- know-how
- hardware
- technisat
- digicorder
title: TechniSat DigiCorder
toc: false
updated: 2013-11-27 01:29:09 +0100
---

Concat Transport Stream
=======================

Copy recording from the TSD drive to a FAT32 USB HDD.

    cat movie.TS4 movie_*.TS4 > movie.ts

:warning: Target drive needs to support large files >4GB


Convert to MKV
==============

    avconv -i movie.ts -sn -vcodec copy -acodec copy movie.mkv

If avconv aborts because of incomplete frames, use `-ss` and `-t` to seek a few seconds into the stream and stop a few seconds before the end.


Rip recordings to DVD
=====================

    avconv -i movie.ts -target pal-dvd -b:v 8888k -vcodec mpeg2video -acodec copy -ac 6 -mbd rd -trellis 2 -cmp 2 -subcmp 2 -q:v 1 -r 25 -s 720x576 -aspect 16:9 -f vob -y movie.mpg


1. cut and demux using *ProjectX* 
    * if not yet set, set Presettings → Special → global PTS shift (in hours) to **auto**
2. burn DVD using AVStoDVD

Notes:

  * it will use the best audio track (see avconv doc)
  * bitrate 8888k can be reduced
  * direct piping (`cat movie*.TS4 | avconv -i -`) doesn't work (in Windows)
  * ProjectX doesn't like `avconv -g 100`
  * without demuxing, AVStoDVD can't sync the tracks