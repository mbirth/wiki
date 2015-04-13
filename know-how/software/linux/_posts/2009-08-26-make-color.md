---
title: Colourful make and gcc
layout: default
created: 2009-08-26 09:46:36 +0200
updated: 2009-08-26 09:46:36 +0200
toc: false
tags:
  - know-how
  - software
  - linux
---
Install the packages [colormake](apt://colormake) and [colorgcc](apt://colorgcc). Then create the following alias:

    alias make="colormake"

Also add this environment variable:

    export CC="colorgcc"

And you should be set.
