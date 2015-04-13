---
title: Flashplugin not recognizing mouse clicks
layout: default
created: 2010-02-12 22:21:29 +0100
updated: 2010-07-29 23:26:44 +0200
toc: false
tags:
  - know-how
  - software
  - linux
---
If your flashplugin only recognizes the very first mouse click and then seems to ignore the mouse completely, just
click somewhere outside the area where the flash script is (e.g. on the webpage background) and then flash will
recognize the next click.

Some more promising solutions are these:

* [ubuntugeek.com](http://www.ubuntugeek.com/fix-for-flash-is-not-recognizing-mouse-clicks.html): edit the file
  `/usr/lib/nspluginwrapper/i386/linux/npviewer` and add the following line just before the last one:  
  
        export GDK_NATIVE_WINDOWS=1

  The complete file should now look somewhat like this:  
  
        #!/bin/sh
        TARGET_OS=linux
        TARGET_ARCH=i386
        export GDK_NATIVE_WINDOWS=1
        . /usr/lib/nspluginwrapper/noarch/npviewer

* if you are on a 64bit machine, install the 64bit flashplugin from [this PPA](https://launchpad.net/~sevenmachines/+archive/flash)


Flash Preferences unusable
==========================

If your clicks onto the Flash preferences are not recognized, close [gnome-do](apt://gnome-do) and/or [docky](apt://docky).
After that, the preferences should be clickable again. (found [here](http://ubuntuforums.org/showpost.php?p=8484828&postcount=19))
