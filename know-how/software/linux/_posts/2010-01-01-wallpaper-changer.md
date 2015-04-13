---
title: Wallpaper Changer
layout: default
created: 2010-01-01 23:35:53 +0100
updated: 2010-01-01 23:36:05 +0100
toc: false
tags:
  - know-how
  - software
  - linux
---
Desktop Drapes
==============

* **Homepage:** <http://drapes.mindtouchsoftware.com/>
* **Launchpad-Site:** [drapes](https://launchpad.net/drapes)
* **Package:** [drapes](apt://drapes)

Has some problems under *Karmic Koala* (e.g. the thumbnails are not shown, crashes if you delete a selected image).
The list of enabled images is kept in `~/.gnome2/drapes.xml`.


Wally
=====

* **Homepage:** <http://www.becrux.com/index.php?page=projects&name=wally>

Seems to not work in *Karmic*.


Wallpaper Tray
==============

* **Homepage:** <http://freshmeat.net/projects/wp_tray/>
* **Package:** [wallpaper-tray](apt://wallpaper-tray)

It is a panel applet which shows a small thumbnail of the current active image. It will show images from your selected
directories (in the preferences) **plus** all images in `~/.gnome2/backgrounds.xml` (see [#355081](https://bugs.launchpad.net/ubuntu/+source/wallpaper-tray/+bug/355081)).
Seems relatively stable and is my preferred choice among these 3.
