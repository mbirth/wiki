---
title: Colourful manpages
layout: default
created: 2009-02-02 16:39:21 +0100
updated: 2009-07-17 23:01:40 +0200
toc: false
tags:
  - know-how
  - software
  - linux
  - software
  - manpages
  - colours
---
1. Install the `most` pageviewer: (or click here: [most](apt://most))

        sudo aptitude install most

1. Reconfigure the system to use `most` instead of `less` for paging:

        sudo update-alternatives --config pager

After that, manpages will appear more colourful.
