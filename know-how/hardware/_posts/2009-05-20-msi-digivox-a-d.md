---
title: MSI DigiVox A/D USB2.0
layout: default
created: 2009-05-20 11:05:28 +0200
updated: 2009-05-20 11:05:28 +0200
toc: false
tags:
  - know-how
  - hardware
  - msi
  - digivox
---

Ubuntu
======

To use this DVB-T USB stick in Ubuntu, you have to install a newer kernel driver.
Follow the instructions from [mcentral.de](http://mcentral.de/wiki/index.php5/Em2880).
Also you might have to install the firmware files according to [ubuntuforums.org](http://ubuntuforums.org/showthread.php?t=437208).
Finally you need to extract the firmware of the `xc3028` tuner using the manual at [wiki.ubuntuusers.de](http://wiki.ubuntuusers.de/em28xx#Firmware-ab-Intrepid-Ibex).
(You'll need the Windows driver for this as the firmware is extracted from it.)

After that, use the [totem-xine](apt://totem-xine?refresh=yes) package instead of `totem-gstreamer` (uninstall the latter one).
But to make things work, you first have to create a channels.conf for xine to find the valid channels (you need the [dvb-utils](apt://dvb-utils?refresh=yes) package):

    scan -p -x 0 /usr/share/dvb/dvb-t/de-Berlin > ~/.xine/channels.conf


If you want to try the `totem-gstreamer`, try this:

    scan -p -x 0 /usr/share/dvb/dvb-t/de-Berlin > ~/.gstreamer-0.10/channels.conf


(or you could just copy the file over, if you already created one)
