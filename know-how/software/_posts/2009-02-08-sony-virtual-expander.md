---
title: SONY Virtual Expander
layout: default
created: 2009-02-02 01:47:01 +0100
updated: 2009-02-08 14:29:52 +0100
toc: false
tags:
  - know-how
  - software
  - sony
---
Virtual Expander is a software which is bundled with the following models:

* [USM-E Plus](http://www.sony.net/Products/Media/Microvault/products/usm-ep/index.html#download) (v1.03)
* [USM-D Plus](http://www.sony.net/Products/Media/Microvault/products/usm-dp/index.html#download) (v1.03)
* [USM-JX](http://www.sony.net/Products/Media/Microvault/products/usm-jx/dl.html) (v2.3)
* [USM-H](http://www.sony.net/Products/Media/Microvault/products/usm-h/dl.html) (v2.4)
* [USM-J](http://www.sony.net/Products/Media/Microvault/products/usm-j/dl.html) (v2.4)
* [USM-L](http://www.sony.net/Products/Media/Microvault/products/usm-l/dl.html) (v2.4)
* [USM-LX](http://www.sony.net/Products/Media/Microvault/products/usm-lx/dl.html) (v2.4)

The following information is based on the 1.x version since the 2.x was not available at the time I figured this out.
But I guess it will work on that versions also.


How it works
============

Basically, VE is a compression tool. It lets you manually compress files and adds the extension `.vem` to them. This
extension is associated with the VE Decompressor. So if you double-click a `.vem`-file, it will decompress it and
launch it right after that.

While this works fine for single documents, it doesn't work for a program consisting of many different files as only
the file you click is automatically decompressed and not all together. Also it doesn't recompress a file after use so
it's not really more comfortable than using a regular compression program.

The program activates itself if it detects a SONY USB drive based on its PnP-ID, like `USB\Vid_054c&Pid_0241`.


Hacking the tool
================

The latest version, `VirtualExpander_v24.exe` contains the following strings hardcoded in Unicode starting at position
`0x39a2c` (VendorID `054c` = *SONY*):

* `USB\Vid_054c&Pid_0241`
* `USB\Vid_054c&Pid_0242`
* `USB\Vid_054c&Pid_0243`
* `USB\Vid_054c&Pid_02a5`
* `USB\Vid_054c&Pid_02a7`

To make it work with ANY USB drive, just get the ID of your drive:

1. go to *Control Panel* => *System* => *Advanced* => *Environment variables*
1. add a new **System** variable `DevMgr_Show_Details` with the value "1"
1. <kbd>OK</kbd> your way back to the Desktop
1. open the Device Manager (make sure you closed the "System"-Control Panel before!)
1. find your USB drive in the *USB* group and right-click => *Properties*
1. find the ID on the new tab *Details*

Now use your favorite Hex-editor and overwrite one of the SONY IDs with the PnP-ID of *YOUR* USB drive. That's all!

(The v1.3 has 3 IDs starting at position `0x31950`.)
