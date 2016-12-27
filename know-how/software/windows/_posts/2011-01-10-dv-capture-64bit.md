---
title: No DV capture possible on Windows 7 64bit
layout: default
created: 2011-01-10 21:24:19 +0100
updated: 2011-01-10 21:25:07 +0100
toc: false
tags:
  - know-how
  - software
  - windows
  - video
---
On a Windows 7 64bit, I was not able to capture any DV video from a video camera connected via Firewire IEEE1394. I was
able to control the camera from the capture program (tried *NeroVision* and *magix Video Deluxe*) but only got a black
screen and no audio.

After a little search, I found [this forum post](http://www.sevenforums.com/music-pictures-video/12371-cant-capture-my-dv-camera.html)
which suggests to switch the IEEE1394 driver from the automatically detected *Texas Instruments* one to the
***1394 OHCI Compliant Host Controller (Legacy)*** one. After that change, everything worked as expected. This seems
to only affect 64bit systems.

To switch the driver, do the following:

1. press <kbd>Win</kbd>+<kbd>R</kbd> to get to the *Run…* dialog, type `devmgmt.msc`, click **OK**
1. in the *Device Manager*, find the **IEEE 1394 Bus Host Controllers** group, expand it
1. right-click the **Texas Instruments…** entry
1. select **Update driver software…**
1. click **Browse my computer for driver software**
1. click **Let me pick from a list of device driver on my computer**
1. select the **1394 OHCI Compliant Host Controller (Legacy)** (that *(Legacy)* is important!)
1. click **Next**


*[OHCI]: Open Host Controller Interface
*[IEEE]: Institute of Electrical and Electronics Engineers
*[IEEE1394]: Institute of Electrical and Electronics Engineers Standard 1394
