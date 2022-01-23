---
created: 2008-08-15 11:14:03 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/08/15/updating-x11-fontcache.html
tags:
- know-how
- software
- linux
- fonts
title: Updating X11 Fontcache
toc: false
updated: 2008-08-15 11:14:03 +0200
---

After adding some fonts to the `/usr/share/fonts` directories, you have to re-login to see the added fonts. To update
the fontcache without a log-cycle, use the following command:

    sudo fc-cache -fv