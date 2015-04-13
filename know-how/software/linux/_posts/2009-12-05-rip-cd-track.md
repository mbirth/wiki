---
title: Rip CD Track
layout: default
created: 2009-02-16 22:24:06 +0100
updated: 2009-12-05 00:46:23 +0100
toc: false
tags:
  - know-how
  - software
  - linux
---
The default tool for CD ripping under Gnome is *Sound Juicer*, found under *Applications* → *Sound & Video* →
*Audio CD Extractor*. But this tool had severe problems recognizing my custom configuration for LAME encoding (I
changed `vbr-quality` from `6` to `2` but the tool ignored it) also you had to restart it for every configuration
change which means you have to re-enter all CD information.

So I tried [abcde](http://code.google.com/p/abcde/).

After installing the package [abcde](apt://abcde) and some other utilities (`id3`, `id3v2`, `flac`, `oggconvert`,
etc.), I copied the file `/etc/abcde.conf` to `~/.abcde.conf` and modified it according to [Andrew Strong's examples](http://www.andrews-corner.org/abcde.html)
and my own preference.

Now ripping a CD is as simple as typing `abcde` at the prompt.

* **Download my config:** [abcde.conf]({{ site.url }}/assets/abcde.conf)
