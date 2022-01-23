---
created: 2009-05-05 00:54:50 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/05/05/tips-tricks-for-the-iphone.html
tags:
- know-how
- hardware
- apple
- iphone
- tipsntricks
title: Tips & Tricks for the iPhone
toc: false
updated: 2010-04-20 23:57:18 +0200
---

Mark mail as unread
===================

There's a somewhat hidden way to mark messages as "unread" in the mail app: When viewing a mail,
touch the **Details** link in the upper right. Then find the **Mark as unread** link below the subject.


Access Network Monitor
======================

If you like to see the reception status of all the cells you're receiving, type the following code on
the dialpad and press the dial button: **`*3001#12345#*`**


Recover from Recovery Mode loop
===============================

If you try to update the firmware, you might be stuck in the *"Connect to iTunes"*-recovery mode although you didn't
change any bit of the firmware (e.g. because of some freakin' errors of iTunes). You now have the choice between a
long firmware+backup restore - or get your iPhone back running in about 30 seconds. The procedure is described
at [ihackintosh.com](http://www.ihackintosh.com/2009/09/recover-iphone-3gs-from-apple-logo-or-recovery-mode-loop/). Do
yourself a favor and **don't try it in Windows**. Installing `libusb` there broke something and after a reboot of
Windows, all USB devices didn't work and hat yellow exclamation marks in the Windows device manager. Under Linux,
it's easy as pie. These instructions are for Ubuntu:

1. get [iRecovery](http://github.com/westbaer/irecovery) source code and install [build-essential](apt://build-essential) as well as [libusb-dev](apt://libusb-dev)
1. compile *iRecovery*
1. get the iPhone into recovery mode:
    * switch it completely off, disconnect all cables
    * hold down the ▢ Home button
    * keep the button down while connecting it to the PC
    * wait until the *"Connect to iTunes"* logo appears, then release the ▢ Home button
1. now run: `./irecovery -s`
1. wait for the prompt (`]`) and enter the following commands: (if `fsboot` doesn't do anything, type `reboot`)  
{% highlight text %}
] setenv auto-boot true
] saveenv
] fsboot
{% endhighlight %}
1. your iPhone should now boot normally