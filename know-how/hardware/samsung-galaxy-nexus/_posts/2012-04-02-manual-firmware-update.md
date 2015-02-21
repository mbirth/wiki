---
title: Manual Firmware Update on the Galaxy Nexus
layout: default
created: 2011-12-16 22:26:17 +0100
updated: 2012-04-02 14:46:03 +0200
toc: false
tags:
  - know-how
  - hardware
  - samsung
  - galaxy-nexus
  - firmware
  - rom
---
*Samsung* seems to have failed, rushing to put out an update to the "Volume-"-bug in their Galaxy Nexus.
They provided a wrong-signed Google+ and Google Maps app. They failed to update ("Wrong package signature", see [here](http://code.google.com/p/android/issues/detail?id=22435)).

To find out if your device has this broken firmware, check the build number: **ITL41F.I9250XWKK8** instead of just **ITL41F** (or **ITL41D**) is the broken one.

To flash the official firmware, do as follows:

1. if you already set up everything on your device, you can make a backup:
    1. backup the internal settings using `adb backup -all -system -shared -apk` (enable *USB Debugging* first, under Windows you may have to install some drivers)
        * this will create a file `backup.ab` with your data
        * :warning: There was a bug in 4.0.1 which didn't backup `/mnt/sdcard` using adb. To fix this, manually backup the contents of `/mnt/sdcard` using a
          tool like [FTPServer](https://play.google.com/store/apps/details?id=lutey.FTPServer), [WebSharing](https://play.google.com/store/apps/details?id=nextapp.websharing.r1) or similar
1. download the official firmware from <http://code.google.com/android/nexus/images.html#yakju> (European devices are **yakju**, Verizon is **mysid**)
1. download `fastboot` for Windows from <http://code.google.com/p/android-roms/downloads/detail?name=fastboot-win32.zip&can=2&q=>, for Linux try to find a binary package
1. boot the phone into the bootloader (hold both volume keys and then hold the power key)
1. use `fastboot` to flash the bootloader
1. `fastboot reload-bootloader`
1. use `fastboot` to flash the radio firmware
1. `fastboot reload-bootloader`
1. use `fastboot` to flash the main firmware (that ZIP file)
1. if you really need an unlocked bootloader to easily update in the future, do it now: (it will be locked after update)
    1. boot into the bootloader
    1. `fastboot oem unlock`
    1. reboot
1. to restore your backed up settings, do this:
    1. set up all previous Google- and eMail-accounts
    1. enable *USB Debugging*
    1. restore all internal data using `adb restore backup.ab`
    1. maybe: use FTPServer, WebSharing or similar to restore `/mnt/sdcard`
