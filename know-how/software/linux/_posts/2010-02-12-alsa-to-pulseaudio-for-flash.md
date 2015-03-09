---
title: ALSA → PulseAudio for Flash and others
layout: default
created: 2010-02-12 22:07:22 +0100
updated: 2010-02-12 22:23:31 +0100
toc: false
tags:
  - know-how
  - software
  - linux
  - sound
  - alsa
  - pulseaudio
---
One huge problem in a standard Ubuntu install is that not all programs are actually using the PulseAudio daemon but
instead still use ALSA. This is especially true with the [flashplugin](apt://flashplugin-installer). Since PulseAudio
and ALSA can't use the hardware device at the same time, they block each other which leads to hangs and maybe even
crashes of programs (e.g. browser).

The fix is relatively easy and consists of telling ALSA to use its `pulse` plugin for output - which routes the sound
to PulseAudio instead of directly to hardware. It is explained at [pulseaudio.org](http://pulseaudio.org/wiki/PerfectSetup#ALSAApplications).

Basically you only have to create a file `/etc/asound.conf` with these few lines:

~~~
pcm.!default {
    type pulse
}
ctl.!default {
    type pulse
}
~~~

This tells all ALSA apps to use the PulseAudio output by default. Some notes may also be found on [wiki.ubuntu.com](https://wiki.ubuntu.com/PulseAudio).

You should also check that you have installed [libsdl1.2debian-pulseaudio](apt://libsdl1.2debian-pulseaudio) instead of the `-alsa` one.


*[ALSA]: Advanced Linux Sound Architecture
