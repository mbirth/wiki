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

  - if you already set up everything on your device, you can make a backup:
    - backup the internal settings using `adb backup -all -system -shared -apk` (enable *USB Debugging* first, under Windows you may have to install some drivers)
      * this will create a file `backup.ab` with your data
      * :warning: There was a bug in 4.0.1 which didn't backup `/mnt/sdcard` using adb. To fix this, manually backup the contents of `/mnt/sdcard` using a
        tool like [FTPServer](https://play.google.com/store/apps/details?id=lutey.FTPServer), [WebSharing](https://play.google.com/store/apps/details?id=nextapp.websharing.r1) or similar
  - download the official firmware from <http://code.google.com/android/nexus/images.html#yakju> (European devices are **yakju**, Verizon is **mysid**)
  - download `fastboot` for Windows from <http://code.google.com/p/android-roms/downloads/detail?name=fastboot-win32.zip&can=2&q=>, for Linux try to find a binary package
  - boot the phone into the bootloader (hold both volume keys and then hold the power key)
  - use `fastboot` to flash the bootloader
  - `fastboot reload-bootloader`
  - use `fastboot` to flash the radio firmware
  - `fastboot reload-bootloader`
  - use `fastboot` to flash the main firmware (that ZIP file)
  - if you really need an unlocked bootloader to easily update in the future, do it now: (it will be locked after update)
    - boot into the bootloader
    - `fastboot oem unlock`
    - reboot
  - to restore your backed up settings, do this:
    - set up all previous Google- and eMail-accounts
    - enable *USB Debugging*
    - restore all internal data using `adb restore backup.ab`
    - maybe: use FTPServer, WebSharing or similar to restore `/mnt/sdcard`
