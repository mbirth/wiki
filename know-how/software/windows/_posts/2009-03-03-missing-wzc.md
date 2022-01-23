---
created: 2009-03-03 00:47:50 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/03/03/missing-wireless-zero-configuration.html
tags:
- know-how
- software
- windows
- wifi
title: Missing Wireless Zero Configuration
toc: false
updated: 2009-03-03 00:47:50 +0100
---

If you are missing the *Wireless Zero Configuration* (in German: *Konfigurationsfreie drahtlose Verbindung*), you might
have installed a D-Link driver.

To get the Windows tool back, there's a nice manual at [practicallynetworked.com](http://www.practicallynetworked.com/qa/qa20040311.shtml):

1. go to *Start* → *Connect to* → *Show all* (or: *Control Panel* → *Networking*)
1. right-click any device and choose *Properties*
1. click the *Install…* button
1. choose category **Service**
1. click *Have Disk…*
1. select the path `C:\WINDOWS\inf` and click **OK**
1. choose the *Wireless Zero Configuration* and confirm all dialogs