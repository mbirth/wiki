---
created: 2008-08-29 10:19:59 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/08/29/automount-internal-drives.html
tags:
- know-how
- software
- linux
- automount
- storage
title: Automount internal drives
toc: false
updated: 2008-08-29 10:19:59 +0200
---

According to [Only Ubuntu](http://onlyubuntu.blogspot.com/2008/05/auto-mounting-internal-drives-in-ubuntu.html), to
enable auto-mounting of internal drives on bootup, edit the file `/etc/hal/fdi/policy/preferences.fdi` and change
the line

    <merge key="storage.automount_enabled_hint" type="bool">false</merge>

to this:

    <merge key="storage.automount_enabled_hint" type="bool">true</merge>

From now on, internal drives should appear on your Desktop.