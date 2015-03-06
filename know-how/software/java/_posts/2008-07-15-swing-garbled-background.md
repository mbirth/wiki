---
title: Swing apps show garbled backgrounds
language: en
layout: default
created: 2008-07-15 00:21:03 +0200
updated: 2008-07-15 00:21:03 +0200
toc: false
tags:
  - know-how
  - software
  - java
---
This may have to do with a damaged OpenGL pipeline. Play around with the following parameters:

* `--Dsun.java2d.opengl==true|false`
* `--Dsun.java2d.opengl.fbobject==true|false`
* `--Dsun.java2d.d3d==true|false`

If you found the correct combination, set it as environment variable `_JAVA_OPTIONS`.
