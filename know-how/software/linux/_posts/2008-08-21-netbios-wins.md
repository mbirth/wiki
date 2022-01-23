---
created: 2008-08-21 10:36:55 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/08/21/netbioswins-support.html
tags:
- know-how
- software
- linux
- networking
- netbios
- wins
title: NetBIOS/WINS support
toc: false
updated: 2008-08-21 10:45:41 +0200
---

To enable lookup of WINS-names in Ubuntu, edit the file `/etc/nsswitch.conf` and find the line:

    hosts:          files mdns4_minimal [NOTFOUND=return] dns mdns4

Append `wins` to the end of the line so that it looks like this:

    hosts:          files mdns4_minimal [NOTFOUND=return] dns mdns4 wins

From now on you can also use NetBIOS names to address PCs in your LAN.