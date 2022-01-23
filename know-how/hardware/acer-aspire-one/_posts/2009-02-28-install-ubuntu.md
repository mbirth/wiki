---
created: 2008-09-28 22:30:35 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/09/28/install-ubuntu-on-the-acer-aspire-one.html
tags:
- know-how
- hardware
- acer
- aspire
- ubuntu
- linux
title: Install Ubuntu on the Acer Aspire One
toc: false
updated: 2009-02-28 01:31:40 +0100
---

There's a nice help page at the [Ubuntu page](https://help.ubuntu.com/community/AspireOne).

**Needed:**

* 1+ GiB USB stick
* Ubuntu 8.04.1 install CD
* [liveUSB](http://klik.atekon.de/liveusb)
* a wired network connection


**Missing features:**

* Hibernation on the A110
* Power saving for Card readers and WLAN
* WLAN switch


Intrepid Ibex (8.10)
====================

Works almost out-of-the-box. You just have to blacklist the `ath_pci` module to make the WLAN card work. Everything
else seems to work fine. You might have to keep the `setkeycodes` mappings for the popup displays when changing volume
or brightness to work. The WIFI LED doesn't work with the `ath5k` module but the killswitch does.


Blank screen on bootup
----------------------

If you got a blank screen after *grub*, remove any `vga=0x314` (or similar) parameter from your kernel line. Intrepid
now uses *uvesafb* which depends on *v86d* (not automatically installed!!) and seems to have some problems finding the
internal VGA card upon bootup.

A small workaround has been posted at [UbuntuForums](http://ubuntuforums.org/showthread.php?t=938874&highlight=boot+screen):

1. install: *v86d* and you might want *fbset*
1. create: `/etc/modprobe.d/uvesafb` with the following content:  

        options uvesafb mode_option=800x600-16 mtrr=3 scroll=ywrap

1. edit: `/etc/modprobe.d/blacklist-framebuffer` and add:  

        blacklist uvesafb

1. edit: `/etc/modules` and add:  

        uvesafb

1. run: `update-initramfs -u`
1. reboot

Jaunty Jackalope (9.04)
=======================

Works 99% out-of-the-box. Add `acer_wmi` to `/etc/modprobe.d/blacklist` to get the `ath5k` module working. Also you
might need to install `linux-backport-modules` to make the `lbm_cw_cfg80211` accept the `regdom` option. (If you're
in Europe, you might want to add the following line to your `/etc/modprobe.d/options`:

    options lbm_cw_cfg80211 ieee80211_regdom=EU

This sets the *regulatory domain* to **EU** which enables channels 12-14 (see [Wikipedia](http://de.wikipedia.org/wiki/Wireless_Local_Area_Network#Frequenzen_und_Kan.C3.A4le)).
The non-lbm-module doesn't like this option.


more tips
---------

The [ArchLinux Wiki](http://wiki.archlinux.org/index.php/Acer_Aspire_One) contains several tips for tweaking a Linux
to suit the *Aspire One*. Also take a look at the [[:know-how:software:linux:start]] section on this page.