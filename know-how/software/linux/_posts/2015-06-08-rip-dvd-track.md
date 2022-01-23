---
created: 2008-08-27 00:42:59 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/08/27/rip-dvd-track.html
tags:
- know-how
- software
- linux
title: Rip DVD track
toc: false
updated: 2015-06-08 01:02:16 +0200
---

To rip a DVD track to a file, you need the [transcode](apt://transcode) package and the encoders you're going to use.

To rip a single track as ogg, use the command

    transcode -i /dev/scd0 -x dvd -T 5,15 -a 0 -y null,ogg -o ~/Nasty.ogg

This would rip audio only (video goes to *null*) chapter 5, track 15 to the file `Nasty.ogg`.

    transcode -i /dev/scd0 -x dvd -T 5,15 -a 0 -y null,raw -b 192 -o ~/Nasty.mp3

This one rips to a `mp3` file. The codec is `raw` because *transcode* internally works with mp3.


**UPDATE:** The `raw` audio encoder is deprecated and `tcaud` should be used instead. Use this:

    transcode -i /dev/scd0 -x null,dvd -y null,tcaud -T 1,8 -a 0 --lame_preset extreme -m outputfile.mp3

More information about how to use `transcode` is explained here: [ubuntuforums.org](http://ubuntuforums.org/showthread.php?t=1357157).


mplayer
=======

Find out the longest DVD track using [lsdvd](apt://lsdvd):

    lsdvd | grep Longest


Then dump that track with [mplayer](apt://mplayer):

    mplayer dvd://02 -v -dumpstream -dumpfile output.vob

Convert with [avidemux](apt://avidemux), [avconv](apt://avconv) or similar, e.g.:

    avconv -i output.vob -map 0:0 -map 0:1 -qscale:0 8 -qscale:2 2 -filter:v yadif output.mp4

    avconv -i output.vob -map 0:0 -map 0:1 -f avi -c:v mpeg4 -b:v 800k -g 300 -bf 2 -c:a libmp3lame -b:a 128k -async 30 output-en.avi

    avconv -ss 00:24:02 -i output.vob -map 0:0 -map 0:1 -qscale:0 8 -qscale:2 2 -filter:v yadif -t 00:05:55 output.mp4