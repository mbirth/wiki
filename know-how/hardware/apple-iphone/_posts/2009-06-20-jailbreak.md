---
created: 2009-04-20 20:36:03 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/04/20/apple-iphone-jailbreak.html
tags:
- know-how
- hardware
- apple
- iphone
- jailbreak
title: Apple iPhone Jailbreak
toc: false
updated: 2009-06-20 20:22:41 +0200
---

See [Wikipedia](http://en.wikipedia.org/wiki/Jailbreak_\(iPhone\)) for a description of WHAT this is.

* **Homepage:** [quickpwn.com](http://www.quickpwn.com/) *(for iPhone OS <3.0)*
* **Download:** [redsn0w](http://blog.iphone-dev.org/post/126908912/redsn0w-in-june) *(for the new iPhone OS 3.0)*


Jailbreak from Linux
====================

You'll need *SUN VirtualBox* with working kernel modules and a working Windows VM.

1. setup the VM to use USB through an USB 2.0 controller
1. you may add a device filter for USB - fill only the following fields (this ensures that the device will be auto-connected to the VM):
    * **Name:** Apple iPhone
    * **Manufacturer:** Apple Inc.
1. startup the VM
1. now download the *redsn0w* tool and run it (close iTunes beforehand)
1. it should detect the iPhone and give you the recovery mode instructions, do so
1. if the USB filter works, the jailbreak should work as on a normal Windows PC, if not, here comes the tricky part:
    * when you are instructed to hold the buttons for several seconds, after you have released the power button and are still holding
      the HOME button, right-click the "USB Plug" of VirtualBox to see if an Apple device has appeared. This happened for me at
      around 16 seconds left to hold. You have to close the context menu and right-click the icon again to see newly appeared devices.
      If the new Apple device appears (something like "iPhone (Recovery mode)") click it to connect it to the VM.
    * if the QuickPwn/redsn0w finished "uploading hacked bootloader" and is stuck at 100%, just use the USB menu to disconnect the
      iPhone (listed as "Recovery") and find the "iPhone in DFU mode" in the context menu and connect this one. After that, the
      jailbreak continues until the end.
    * when the jailbreak is done, use the context menu to unplug the iPhone which will automatically reboot your phone and install
      the Jailbreak


Repositories for Cydia
======================

There is a long list at [alltechrelated.com](http://blog.alltechrelated.com/iphone-ipod-touch/cydia-20installer-4-source-list/) with plenty of repositories for Cydia.


Noteworthy apps
===============

Some interesting apps from the *Cydia Installer*:

* **Video Recorder for 3G** --- Video recording for your iPhone (Trial version)
* **Snapture** --- Camera replacement with various additional features (Trial version)
* **iRealSMS** --- SMS tool replacement with templates/drafts and several other features (Trial version)
* **MobileTerminal** --- access the underlying DarwinOS via commandline (together with **OpenSSH** you'll get full remote-admin functionality)