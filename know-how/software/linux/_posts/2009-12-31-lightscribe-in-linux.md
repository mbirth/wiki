---
created: 2008-12-06 12:31:38 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/12/06/lightscribe-in-linux.html
tags:
- know-how
- software
- linux
- lightscribe
title: LightScribe in Linux
toc: false
updated: 2009-12-31 10:58:11 +0100
---

To burn/print lightscribe media under Linux, you need two things:

* the [LightScribe System Software](http://www.lightscribe.com/downloadSection/linux/index.aspx)
* a labelling program, such as [LightScribe Simple Labeler](http://www.lightscribe.com/downloadSection/linux/index.aspx?id=815)
  or [4L LaCie LightScribe Labeler](http://www.lacie.com/products/product.htm?pid=10803)


Installing 4L
=============

1. install the lightscribe library: `gksu gdebi-gtk lightscribe-1.14.32.1-linux-2.6-intel.deb`
1. convert the RPM to DEB (you need the packages *fakeroot* and *alien* to be installed!):
   `fakeroot alien --fixperms -c -k 4L-1.0-r6.i586.rpm`
1. **on 64-bit systesm** the previous step will abort with an error, if this is the case:
    * enter the `4L-1.0` directory
    * rename `debian` to `DEBIAN`
    * enter the `DEBIAN` directory
    * delete the directory `4L`
    * edit the file `control`
        * remove the blank line between the `Maintainer:` and `Package:` lines
        * change the `Depends:` into `Depends: lightscribe`
        * add a line `Version: 1.0-r6`
    * now go back to the directory containing the `4L-1.0` directory
    * run `dpkg --build --force-architecture 4L-1.0`
1. install the newly generated DEB file: `gksu gdebi-gtk 4l_1.0-r6_i386.deb` (on 64-bit systems use
   `dpkg -i --force-architecture 4L-1.0.deb`)
1. create a menu shortcut to `/usr/bin/4L-gui` using the *System* → *Preferences* → *Main Menu* tool (as an icon I used
   the LightScribe-logo from [WikiPedia](http://de.wikipedia.org/wiki/Bild:LightScribe-Logo.svg))


No drive detected
-----------------

If *4L-gui* doesn't detect any drive, try running it from a console window. If you see the following error message:

    user@host:/usr/lib% 4L-gui
    4L-cli: error while loading shared libraries: libstdc++.so.5: cannot open shared object file: No such file or directory

The described library is missing (as with *Karmic Koala*). Either try finding it in `aptitude` or do the following:

1. create a file `/etc/ld.so.conf/lightscribeApplications.conf` with the following contents:
   `/opt/lightscribeApplications/common/Qt`
1. run `sudo ldconfig`

This will index the libraries in the given folder - where there is the `libstdc++.so.5` found. If this breaks other
programs for you, use this command:

    sudo LD_LIBRARY_PATH=/opt/lightscribeApplications/common/Qt /usr/bin/4L-gui


root privileges required
------------------------

If you get the error ***Printing requires root privileges*** first check whether you called it with `gksu` or `sudo`
and if yes, check, whether the files `/usr/4L/4L-gui` and `/usr/4L/4L-cli` have any *setuid*-bits set. If so, remove
them.

Or do it the other way around and make sure, the *setuid* mode is set and make `root` the owner.


Installing Simple Labeler
=========================

1. install the lightscribe library: `gksu gdebi-gtk lightscribe-1.14.32.1-linux-2.6-intel.deb`
1. install the simple labeler: `gksu gdebi-gtk lightscribeApplications-1.10.19.1-linux-2.6-intel.deb`
1. **on 64-bit systems** you have to link the `liblightscribe.so` and `liblightscribe.so.1` into the `/usr/lib32`
   directory (moving might also work):  
  
        ln -s /usr/lib/liblightscribe.so /usr/lib32/liblightscribe.so
        ln -s /usr/lib/liblightscribe.so.1 /usr/lib32/liblightscribe.so.1
1. create a menu shortcut to `/opt/lightscribeApplication/SimpleLabeler/SimpleLabeler` using the *System* →
   *Preferences* → *Main Menu* tool (as an icon I used the LightScribe-logo from [WikiPedia](http://de.wikipedia.org/wiki/Bild:LightScribe-Logo.svg))


Enabling enhanced Contrast
==========================

To make burned labels appear darker, you can activate the *enhanced contrast* feature which is present in the library
since version 1.8.15.1. The procedure is described at the [PSE site](http://www.lightscribe.com/downloadSection/pse/).

Darker contrast needs more time to burn!

To enable this feature, run the following command from a command-line:

    sudo /usr/lib/lightscribe/elcu.sh

You will see something like this:

~~~
Current contrast setting: Default

MODIFY CONTRAST SETTINGS:
1 This will make your labels darker, but you will experience a longer label time
2 This will reset your LightScribe contrast to default factory settings
Select new setting: _
~~~

Type <kbd>1</kbd> and confirm with <kbd>ENTER</kbd>.