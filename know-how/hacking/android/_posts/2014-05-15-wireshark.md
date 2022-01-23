---
created: 2014-05-15 17:11:42 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2014/05/15/monitor-android-traffic-with-wireshark-windows.html
tags:
- know-how
- hacking
- android
- wireshark
title: Monitor Android Traffic with Wireshark (Windows)
toc: false
updated: 2014-05-15 17:11:42 +0200
---

Preparation
===========

You need tcpdump for Android (I used it from the "[Shark for Root](http://pkg.to/lv.n3o.shark)" app) and Netcat for
Windows (I used Ncat from [Nmap for Windows](http://nmap.org/download.html#windows)).


Setup Capturing
===============

Open 3 shells. Run these commands:

1st shell:

    adb shell "su -c '/data/data/lv.n3o.shark/files/tcpdump -n -s 0 -w - port 443 | nc -l -p 11233'"

2nd shell:

    adb forward tcp:11233 tcp:11233

3rd shell:

    ncat 127.0.0.1 11233 | "C:\Program Files\Wireshark\Wireshark.exe" -k -i -