---
title: DYMO LabelWriter 320 under Ubuntu Linux
layout: default
created: 2011-10-09 22:37:45 +0200
updated: 2011-10-09 22:39:57 +0200
toc: false
tags:
  - know-how
  - hardware
  - dymo
  - labelwriter
  - ubuntu
  - linux
---
This label printer doesn't work out of the box under Linux. There are some instructions over at
[ubuntuforums.org](http://ubuntuforums.org/showthread.php?t=861781), but they're missing something
for the latest Ubuntu *Oneiric Ocelot*. These instructions should work:

  - download the DYMO SDK `dymo-cups-drivers-1.2.0.tar.gz` from [dymo.com](http://sites.dymo.com/DeveloperProgram/Pages/LW_SDK_Linux.aspx)
  - unpack (a directory `dymo-cups-drivers-1.2.0` will be created)
  - make sure you've installed [libcups2-dev](apt://libcups2-dev) and [libcupsimage2-dev](apt://libcupsimage2-dev) (and, of course, [build-essential](apt://build-essential))
  - run `./configure`
  - try a `make all`, you will most probably get various errors like *"size_t has not been declared"* or *"size_t does not name a type"* --- if so, try this:
    * add a line: `#include <stddef.h>` as the first line to the following files:
      * `src/lw/LabelWriterLanguageMonitor.h`
      * `src/lw/LabelWriterDriver.h`
      * `src/common/Halftoning.h`
    * now, again, run `make all`
  - run `sudo make install`
  - now open **System Settings** → **Printer**
  - make sure, your LabelWriter is connected
  - add a new printer, choose your LabelWriter, when asked for a driver, point it to `ppd/lw320.ppd` from the `dymo-cups-drivers-1.2.0` directory
  - start printing, e.g. from [glabels](apt://glabels)
