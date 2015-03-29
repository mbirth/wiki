---
title: Updating X11 Fontcache
layout: default
created: 2008-08-15 11:14:03 +0200
updated: 2008-08-15 11:14:03 +0200
toc: false
tags:
  - know-how
  - software
  - linux
  - fonts
---
After adding some fonts to the ˋ/usr/share/fontsˋ directories, you have to re-login to see the added fonts. To update
the fontcache without a log-cycle, use the following command:

    sudo fc-cache -fv
