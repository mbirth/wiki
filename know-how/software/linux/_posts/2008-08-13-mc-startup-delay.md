---
title: MC Startup Delay
layout: default
created: 2008-08-13 22:36:06 +0200
updated: 2008-08-13 22:36:06 +0200
toc: false
tags:
  - know-how
  - software
  - linux
  - mc
---
If Midnight Commander needs several seconds to startup, check the ˋinterfacesˋ line in your ˋsmb.confˋ. According to [this page](http://osdir.com/ml/gnome.apps.mc.general/2006-09/msg00057.html),
the built-in Samba code of *mc* is outdated and doesn't recognize device names like ˋeth0ˋ or ˋloˋ as the newer
*smbclient* does. So it tries to resolve those into IPs which takes ages until they time out.

Replace the devices by their respective netmasks (e.g. ˋ192.168.1.0/24ˋ) and *mc* will startup instantly.
