---
created: 2017-04-10 20:18:32 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2017/04/10/move-windows-minimisemaximiseclose-buttons.html
tags:
- know-how
- software
- linux
- gnome
- gtk
- windows
- buttons
title: Move window's minimise/maximise/close buttons
toc: false
updated: 2017-04-10 20:18:32 +0200
---

There are two locations where you can define the button's location: **dconf** and **gconf**.

The dconf-method works for most of Gnome Shell and Unity. However, e.g. Chrome is using the "old"
gconf-setting.


dconf
=====

Install and run `dconf-editor`.

Go to `org` → `gnome` → `desktop` → `wm` → `preferences` and find the setting **`button-layout`**.
The default value is: `appmenu:close`. To just add the minimise/maximise buttons (e.g. in Gnome Shell),
change it to: `appmenu:minimize,maximize,close`.

To just move the close button to the left, use: `close,appmenu:`. (The `:` separates the buttons on
the left and those on the right.)

You can also mix it up, e.g. `close,appmenu:minimize,maximize`.


gconf
=====

Install and run `gconf-editor`.

Go to `apps` → `metacity` → `general` and find **`button_layout`**.
Here, the default value is `:minimize,maximize,close`.

To get everything to the left, use `close,minimize,maximize:`.