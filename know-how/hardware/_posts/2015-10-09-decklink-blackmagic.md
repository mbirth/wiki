---
created: 2015-10-09 11:16:16 +0100
language: en
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2015/10/09/decklink-blackmagic-quad.html
tags:
- know-how
- hardware
- decklink
- blackmagic
title: DeckLink BlackMagic Quad
toc: false
updated: 2015-10-09 11:16:16 +0100
---

ffmpeg -f decklink -i "DeckLink SDI (1)@3" -framerate 25 -vf "yadif=0:-1,scale=1280:720,setdar=16/9" -codec:v mpeg4 -r 25.000 -b:v 2000k -maxrate 3500k -c:a libvo_aacenc -b:a 256k -f mpegts udp://10.24.141.132:1234 -vf "scale=320:200" -c:a mp3 -f mpegts udp://10.24.141.132:1235

You can use any of the 4 BlackMagic processors by specifying `DeckLink SDI (1)` … `DeckLink SDI (4)`. The number after the `@` is the port.

This example streams the signal on port `@3` in 2 different formats to different ports on `10.24.141.132`.

More info on [StackOverflow](http://stackoverflow.com/questions/19212047/ffmpeg-command-line-for-capturing-and-recording-audio-and-video-in-720p-from-d).