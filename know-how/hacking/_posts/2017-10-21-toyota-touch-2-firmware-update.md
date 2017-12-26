---
title: Toyota Touch 2 Firmware Update
language: en
layout: default
created: 2017-10-21 20:00:00 +0200
updated: 2017-10-21 20:00:00 +0200
toc: false
tags:
  - know-how
  - hacking
  - toyota
  - touch
  - touch&go
  - touch2
  - firmware
  - software
---
What unit do I have?
====================

Recent Toyotas have a unit called "Touch 2" or "Touch&Go 2" in their middle console. Problem is:
you can't differentiate between them easily. Actually, the "Touch 2" is what you see when sitting
in your car. The "Touch&Go 2" is the same base unit, but with an extra processor and software
module stuck on its back. The "Go"-part will completely replace all features of the "Touch", but
still use the same display and controls. Like replacing the computer tower under your table but
keeping the same display, keyboard and mouse. That's why "Touch&Go" units show different screens
than the "Touch"-only units.

If your device has navigation, that comes from the "Go"-part and this update isn't for you as you
can't update the "Touch"-part easily because the USB-socket now goes to the "Go"-unit. Also it
wouldn't do much for you, as the "Touch"-unit is disabled anyways.


Preparation
===========

To do the update, you need your VIN and an empty USB stick with at least 1GB space total.

Head over to [this website](https://www.toyota-tech.eu/CAL/VINDecode.aspx) and create a free
account (or login). Enter your VIN and the _Bulletin ID_ **BE-0044T-0415**. You should get one
result like this:

![]({{ site.url }}/assets/toyota-tech-results.png)

Download the file, unpack it and you should get a file `13TXDAEU-CA42_9999.kwi`.

Format your USB stick with FAT32 format and put the extracted file on it. Nothing else.


The Update
==========

1. Turn on the ignition (Don't start the car.)
1. Wait until the radio screen comes on
1. Remove all USB sticks and/or CDs from your headunit
1. Press and hold the <kbd>MEDIA</kbd> (might be a <kbd>♬</kbd>) button and while holding it,
   turn on and off the low beams 3 times in a row. A service menu should appear. Let go of the
   <kbd>MEDIA</kbd> button now.
   ![]({{ site.url }}/assets/toyota-touch-2-service-menu.jpg)
1. Tap on "Service Information".
1. Tap on "Program Update".
1. Connect the USB stick with the firmware file.
1. Tap on "OK". A message about a detected update media should appear.
1. Tap "OK" again. A screen "ECU Selection" with only one entry should appear.
   ![]({{ site.url }}/assets/toyota-touch-2-ecu-selection.jpg)
1. Tap "Select" for the one entry.
1. To start the actual update, tap "OK".
1. **WAIT!** Until the blue bar fills up and **turns green**.
   ![]({{ site.url }}/assets/toyota-touch-2-transfer-complete.jpg)
1. Tap "OK".
1. Leaving the USB stick plugged in and not touching anything else: Turn off the ignition.
1. Turn on the ignition again, USB still plugged. (Don't start the car.)
1. Wait until the radio screen comes on (might take a little longer this time).
   ![]({{ site.url }}/assets/toyota-touch-2-update-progress.jpg)
1. Remove the USB stick.
1. Turn off the ignition.
1. **WAIT** for about 30 seconds or more. (I was able to hear the device's fan turning off after
   about 25 seconds. So 30 seconds should be safe.)
1. Turn on the ignition (Don't start the car.) and **WAIT** again. The headunit should boot with
   the new software version.
1. Done.


