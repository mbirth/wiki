---
created: 2008-07-15 00:21:03 +0200
language: en
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/07/15/swing-apps-show-garbled-backgrounds.html
tags:
- know-how
- software
- java
title: Swing apps show garbled backgrounds
toc: false
updated: 2008-07-15 00:21:03 +0200
---

This may have to do with a damaged OpenGL pipeline. Play around with the following parameters:

* `--Dsun.java2d.opengl==true|false`
* `--Dsun.java2d.opengl.fbobject==true|false`
* `--Dsun.java2d.d3d==true|false`

If you found the correct combination, set it as environment variable `_JAVA_OPTIONS`.