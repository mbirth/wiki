---
title: Install missing i386-libraries on 64bit systems
layout: default
created: 2010-02-13 16:10:20 +0100
updated: 2010-02-13 16:10:20 +0100
toc: false
tags:
  - know-how
  - software
  - linux
---
If you are on a 64bit system, you might sometimes stumple upon 32bit programs which need several libraries of which are
no lib32-packages. A good example is the [Amazon MP3 Downloader](http://www.amazon.de/gp/help/customer/display.html?ie=UTF8&nodeId=200317330).

You can now either search the missing libraries at [packages.ubuntu.com](http://packages.ubuntu.com/) or use a tool
which does this for you: [getlibs](http://ubuntuforums.org/showthread.php?t=474790). You run it with the desired 32bit
program as a parameter and it will locate, download and install all missing libraries the program needs to run.

Download it at [frozenfox.freehostia.com](http://frozenfox.freehostia.com/cappy/).
