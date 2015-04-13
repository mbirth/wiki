---
title: Gajim and Notify-OSD
layout: default
created: 2009-08-24 18:25:41 +0200
updated: 2009-08-24 18:25:41 +0200
toc: false
tags:
  - know-how
  - software
  - linux
---
[gajim](apt://gajim) doesn't support the new (since Jaunty) `libnotify-osd` library of Ubuntu and instead shows a
dialog box.

There's a patch available at [archlinux.org](http://aur.archlinux.org/packages/gajim-notify-osd/gajim-notify-osd/osd.patch)
which enables support for `libnotify-osd`.
