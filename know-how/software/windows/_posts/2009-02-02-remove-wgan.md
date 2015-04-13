---
title: Remove WGA Notification
layout: default
created: 2009-02-02 19:49:08 +0100
updated: 2009-02-02 19:49:08 +0100
toc: false
tags:
  - know-how
  - software
  - windows
  - wga
---
Microsoft distributes the *Windows Genuine Advantage Notification Tool (KB905474)* through the WindowsUpdate mechanism.
This tool should detect fake Windows serial numbers and nag the user. Interestingly, Microsoft hid a small paragraph in
their EULA after that the tool sends daily(!!) reports to Microsoft. According to MS this "is neccessary" since the
tool is BETA and MS needs to be able to react if it goes crazy. Yeah … sure!

Sadly, if you installed it by accident, there's no easy way to remove it. No entry in the *Add/Remove Programs* window.
You could restore a backup of your disk or use *System Restore*, but after some Google'ing I found [this site](http://www.mydigitallife.info/2006/04/26/disable-and-remove-windows-genuine-advantage-notifications-nag-screen/)
which lists 16 ways to remove the WGAN. 

The first method seemed to be the best and so I used [AutoHotkey](http://www.autohotkey.com/) and automated it.

**Download here:** [wganuninst.zip]({{ site.url }}/assets/wganuninst.zip)


How it works
============

1. the files `WgaLogon.dll` and `WgaTray.exe` get moved out of `%WINDIR%\system32` and `%WINDIR%\system32\dllcache`,
   renamed and marked for deletion upon next boot
1. the running process `WgaTray.exe` gets killed (if the file would still be in `system32`, it would get restarted
   through the `WgaLogon.dll`)
1. the 2 uninstall entries and the `WLNotify` entry get deleted from the registry
1. Now everything should be as it was before the WGAN infected your PC.

Reboot and everything should be fine again.

To not get the tool again through the automatic WindowsUpdate, set the update to *Notify but don't download* and when
it asks for the WGAN, de-select it and choose *Don't show again*.


Alternative
===========

Using [muBlinder](http://www.p2plife.com/forums/Official_muBlinder_Page-t320.html) you can patch your
`LegitCheckControl.dll` with new version data so that the WGAN thinks everything is fine. After 3 or 4 reboots, the
warning messages should be gone. If not, muBlinder can also remove it.


WindizUpdate
============

Users of *Firefox* or *Opera* can get WindowsUpdates without any WGA testing through [WindizUpdate](http://windizupdate.com/).
You even get updates for Mozilla-components or some hardware.
