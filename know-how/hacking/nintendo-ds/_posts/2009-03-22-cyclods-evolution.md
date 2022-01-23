---
created: 2009-03-10 01:04:17 +0100
language: en
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/03/10/cyclods-evolution.html
tags:
- know-how
- hacking
- hardware
- nintendo
- gaming
title: CycloDS Evolution
toc: false
updated: 2009-03-22 13:01:57 +0100
---

<img src="{{ site.url }}/assets/cyclodsevo.jpg" alt="" width="200" />

* **Homepage:** [cyclopsds.com](http://www.cyclopsds.com/)
* **Firmware:** [cyclopsds.com](http://www.cyclopsds.com/cgi-bin/cyclods/engine.pl?page=support)
* **Comparison:** [joystiq.com](http://nintendo.joystiq.com/2008/05/20/ds-fanboys-semi-ultimate-homebrew-guide/)
* **Review:** [gameboy-advance.net](http://www.gameboy-advance.net/ds-lite/cyclods.htm)
* **Buy one:** [chipmonkey.de](http://chipmonkey.de/) (Germany)

The *CycloDS Evolution* is a cartridge for the NDS which adds homebrew capabilities. You can then run various homebrewed
titles from a miniSDHC card on the NDS. You can even play [backups of your own games]({% post_url 2009-03-23-dump-games %})
and thus take them all with you in a single cartridge.


Cheats Database
===============

The CycloDS Evo supports ActionReplay(tm) compatible cheat codes. The *Evolution Tools* (downloadable on their [Support page](http://www.cyclopsds.com/cgi-bin/cyclods/engine.pl?page=support))
supports downloading cheats from [codejunkies.com](http://codejunkies.com). After the processing is done, you get a
~600 KiB `user.evoCheats` file.

According to the [forums](http://www.teamcyclops.com/forum/showthread.php?t=1580), `codejunkies.com` is missing several
cheats for newer games, so you might want to download the database from [gbatemp.net](http://cheats.gbatemp.net/) which
is ~1,7 MiB. There's even a direct link to the latest version of the file:

* <http://cheats.gbatemp.net/latest/user.evoCHEATS.zip>

You might also want to trim your `default.evoCheats` file down to 0 Bytes and make it read-only so that only the newer
cheats database is used.