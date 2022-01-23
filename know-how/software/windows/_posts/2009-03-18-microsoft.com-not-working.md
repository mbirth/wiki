---
created: 2009-03-18 20:05:52 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/03/18/microsoft.com-not-working.html
tags:
- know-how
- software
- windows
title: microsoft.com not working
toc: false
updated: 2009-03-18 20:05:52 +0100
---

If you have a router and Internet works with any application/site but you can't connect to any `microsoft.com` site
(e.g. *WindowsUpdate*, *Windows Live Messenger* [error code: 81000306], etc.) you might have your MTU set to a too high
value. The default MTU for ethernet devices is **1500** but since the PPPoE header adds 8 Bytes to the packets, they
get fragmented. And the `microsoft.com` servers seem to not accept fragmented packets.

So the solution is to set your MTU to the best value for PPPoE: **1492**. To do this, use a tool like the [TCP Optimizer](http://www.speedguide.net/downloads.php)
to set the MTU for your ethernet device to 1492. After a reboot, all `microsoft.com` pages should work again -
including *Windows Live Messenger*.