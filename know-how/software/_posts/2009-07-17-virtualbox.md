---
created: 2009-01-04 15:50:17 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/01/04/virtualbox.html
tags:
- know-how
- software
- virtualisation
- oracle
- virtualbox
title: VirtualBox
toc: false
updated: 2009-07-17 23:14:13 +0200
---

Compacting a disk image
=======================

1. overwrite empty blocks on the disk with zeroes. See below for applications.
1. run the VBoxManage tool like this:[^1]  
  
        VBoxManage modifyhd <NameOfVDIorVMHD> compact


Applications for overwriting empty blocks
=========================================


Eraser (Windows)
----------------

[ [Homepage](http://eraser.heidi.ie/) ] Install as normal. Then go to *Edit* → *Preferences* → *Erasing…* and
select the second Tab *Unused disk space*. Create a new method with one pass and a pattern of only zeroes. Now go to
the "On Demand"-Tasks and create a new one with your local harddisks as target. Run it to perform erasing.


SDelete (Windows, SysInternals)
-------------------------------

[ [Homepage](http://technet.microsoft.com/en-us/sysinternals/bb897443.aspx) ] Download and unpack. Run it like:

    sdelete -c C:\


dd (Linux)
----------

Use something like:

    dd if=/dev/zero of=/junk
    sync
    rm /junk

This will create a large file with only zeroes and fill up the empty space on your hd.


zerofree (Linux)
----------------

[ [Homepage](http://intgat.tigress.co.uk/rmy/uml/index.html) ] Install the [zerofree](apt://zerofree) package. Run it
as the man page says.

<p><div class="notewarning" markdown="1">
Seems like *zerofree* only supports unmounted filesystems. For this to work you should boot into a recovery Linux
inside your VM to clean the disk image.
</div></p>


sfill (Linux)
-------------

Install the [secure-delete](apt://secure-delete) package. Run something like:

    sfill -z -l -l /


Transparency-Bug in VBox 3.0
============================

If you just installed VirtualBox 3.0 and noticed that you only see parts of Windows' titlebars and the icons but no
text or backgrounds, try the following:

Run VirtualBox like this: [Found here](http://webupd8.blogspot.com/2009/05/quick-tip-make-virtualbox-os-window-non.html)

    env XLIB_SKIP_ARGB_VISUALS=1 VirtualBox



[^1]: Older versions of VirtualBox used `modifyvdi` as first parameter. Also this feature is disabled in VBox 2.1.