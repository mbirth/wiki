---
title: Automount internal drives
layout: default
created: 2008-08-29 10:19:59 +0200
updated: 2008-08-29 10:19:59 +0200
toc: false
tags:
  - know-how
  - software
  - linux
  - automount
  - storage
---
According to [Only Ubuntu](http://onlyubuntu.blogspot.com/2008/05/auto-mounting-internal-drives-in-ubuntu.html), to
enable auto-mounting of internal drives on bootup, edit the file `/etc/hal/fdi/policy/preferences.fdi` and change
the line

    <merge key="storage.automount_enabled_hint" type="bool">false</merge>

to this:

    <merge key="storage.automount_enabled_hint" type="bool">true</merge>

From now on, internal drives should appear on your Desktop.
