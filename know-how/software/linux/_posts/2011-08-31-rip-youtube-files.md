---
created: 2009-12-05 02:52:46 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/12/05/rip-youtube-videosaudio.html
tags:
- know-how
- software
- linux
- youtube
- ripping
- audio
title: Rip YouTube videos/audio
toc: false
updated: 2011-08-31 23:41:50 +0200
---

The tools you need are described on [blog.joff3.com](http://blog.joff3.com/2008/02/downloading-and-ripping-music-from.html).
There's also the nice [youtube-dl](apt://youtube-dl) package. One thing I noticed: the `ffmpeg` command there re-encodes
the audio which might loose some quality. To just dump the audio off the Flash video, use:

    ffmpeg -i somevideo.flv -acodec copy output.mp3

This is for 240px videos. All larger ones use AAC format. Use this:

    ffmpeg -i somevideo.flv -acodec copy output.aac
    ffmpeg -i somevideo.mp4 -acodec copy output.aac

If you happen to have the latest webm format, use this:

    ffmpeg -i somevideo.webm -vn -acodec copy output.ogg


This will just extract the audio track without doing anything to it.


You could also try [vixy.net](http://vixy.net/).