---
created: 2009-10-24 23:49:15 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/10/24/install-wubildr.html
tags:
- know-how
- software
- windows
- ubuntu
- wubi
title: Install wubildr
toc: false
updated: 2009-10-24 23:49:39 +0200
---

The loader for a convenient [wubi](http://www.wubi-installer.org/)-installation of Ubuntu, can be easily re-added to
the Windows Vista/Windows 7 bootloader.

After you have transferred all Ubuntu related files to the new root drive (*files:* `wubildr` and `wubildr.mbr` and the
`ubuntu` *directory*), open a new Console **as Administrator** and run the following commands to add Ubuntu to the boot menu:

* `bcdedit /create /d "Ubuntu" /application bootsector`
  This will return an identifier in the form of a GUID - in the following commands, replace `{ID}` by that identifier!
* `bcdedit /set {ID} device partition=C:`
* `bcdedit /set {ID} path \wubildr.mbr`
* `bcdedit /displayorder {ID} /addlast`

Done. Upon the next boot, a new entry *Ubuntu* should appear in your boot menu.