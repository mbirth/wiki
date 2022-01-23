---
created: 2009-02-02 16:39:21 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/02/02/colourful-manpages.html
tags:
- know-how
- software
- linux
- software
- manpages
- colours
title: Colourful manpages
toc: false
updated: 2009-07-17 23:01:40 +0200
---

1. Install the `most` pageviewer: (or click here: [most](apt://most))

        sudo aptitude install most

1. Reconfigure the system to use `most` instead of `less` for paging:

        sudo update-alternatives --config pager

After that, manpages will appear more colourful.