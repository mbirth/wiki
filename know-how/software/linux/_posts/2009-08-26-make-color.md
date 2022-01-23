---
created: 2009-08-26 09:46:36 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/08/26/colourful-make-and-gcc.html
tags:
- know-how
- software
- linux
title: Colourful make and gcc
toc: false
updated: 2009-08-26 09:46:36 +0200
---

Install the packages [colormake](apt://colormake) and [colorgcc](apt://colorgcc). Then create the following alias:

    alias make="colormake"

Also add this environment variable:

    export CC="colorgcc"

And you should be set.