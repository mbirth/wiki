---
created: 2009-08-24 18:25:41 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/08/24/gajim-and-notify-osd.html
tags:
- know-how
- software
- linux
title: Gajim and Notify-OSD
toc: false
updated: 2009-08-24 18:25:41 +0200
---

[gajim](apt://gajim) doesn't support the new (since Jaunty) `libnotify-osd` library of Ubuntu and instead shows a
dialog box.

There's a patch available at [archlinux.org](http://aur.archlinux.org/packages/gajim-notify-osd/gajim-notify-osd/osd.patch)
which enables support for `libnotify-osd`.