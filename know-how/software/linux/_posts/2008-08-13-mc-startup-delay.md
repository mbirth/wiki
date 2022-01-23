---
created: 2008-08-13 22:36:06 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/08/13/mc-startup-delay.html
tags:
- know-how
- software
- linux
- mc
title: MC Startup Delay
toc: false
updated: 2008-08-13 22:36:06 +0200
---

If Midnight Commander needs several seconds to startup, check the `interfaces` line in your `smb.conf`. According to [this page](http://osdir.com/ml/gnome.apps.mc.general/2006-09/msg00057.html),
the built-in Samba code of *mc* is outdated and doesn't recognize device names like `eth0` or `lo` as the newer
*smbclient* does. So it tries to resolve those into IPs which takes ages until they time out.

Replace the devices by their respective netmasks (e.g. `192.168.1.0/24`) and *mc* will startup instantly.