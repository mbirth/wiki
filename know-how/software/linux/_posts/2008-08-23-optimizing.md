---
title: Optimizing Linux
layout: default
created: 2008-08-05 16:45:57 +0200
updated: 2008-08-23 18:48:33 +0200
toc: false
tags:
  - know-how
  - software
  - linux
---
At [Ubuntu Unleashed](http://www.ubuntu-unleashed.com/2008/04/tweak-and-optimize-ubuntu-linux-boot.html) you can find a
document about different settings to optimize startup times of the system and applications itself.

The ˋnoatimeˋ and ˋnodiratimeˋ settings are unneccessary in Hardy as the default option ˋrelatimeˋ only updates the
*access time* if the file has been modified after the last access timestamp.

You can enable the full power of the [upstart](https://launchpad.net/upstart) manager by enabling multi-threading.
In ˋ/etc/init.d/rcˋ at line 24, set ˋCONCURRENCY=shellˋ. But beware of slight problems upon booting. Some services might
be started before depending services are. Also some lines upon startup are printed twice. If you have problems
getting your machine up and running, change it back to ˋnoneˋ.

Another nice feature is adding the ˋprofileˋ option to the kernel line upon boot. The bootup will take longer than
usual but the readahead-daemon will catalog all needed files and on the next boot (without that parameter), all needed
files will be preloaded before boot.

On Desktops with much RAM, the ˋ[preload](http://sf.net/projects/preload)ˋ daemon also speeds up working.
