---
title: No sound in Flash videos
layout: default
created: 2009-11-27 14:27:24 +0100
updated: 2010-02-12 22:22:35 +0100
toc: false
tags:
  - know-how
  - software
  - linux
  - flash
  - sound
---
If you have no sound in Flash videos but in all other programs, there are two possibilities:

1. the PCM output is set to silence
    * check volume setting with `alsamixer`
1. you might have a second audio device (e.g. a Webcam with a microphone) which gets preferred by ALSA
    * fix it by unplugging it, or
    * force ALSA to use another device, see [ALSA FAQ#26](http://alsa.opensrc.org/FAQ026)
    * set *Skype* → *Options* → *Sound Devices* to *[  ] Allow Skype to automatically adjust my mixer levels*
1. some sound via PulseAudio is currently playing (see [ALSA → PulseAudio for Flash and others]({% post_url 2010-02-12-alsa-to-pulseaudio-for-flash %}))

Bug report is [#396558](https://bugs.launchpad.net/ubuntu/+source/flashplugin-nonfree/+bug/396558).
