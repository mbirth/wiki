---
title: Backup Wii games to USB HDD
language: en
layout: default
created: 2009-05-24 19:35:29 +0200
updated: 2010-11-14 16:05:02 +0100
toc: false
tags:
  - know-how
  - hacking
  - hardware
  - nintendo
  - wii
---
* [mikeandheth.com](http://www.mikeandheth.com/games/97-connect-wii-usb-hard-drive.html)
* [gbatemp.net](http://wiki.gbatemp.net/wiki/index.php?title=USB_Loader_Releases) --- List of USB Loader programs for the Wii
* [gbatemp.net](http://wiki.gbatemp.net/wiki/index.php?title=WBFS_Managers) --- List of WBFS Managers (programs to copy game ISO files to USB via your PC)
* [usbloadergx.koureio.net](http://usbloadergx.koureio.net/) --- USBLoader GX homepage
* [gbatemp.net](http://gbatemp.net/index.php?showtopic=144844) --- Linux WBFS Manager ([updated version](http://gbatemp.net/index.php?showtopic=145747&hl=cojiro))
* [Wiithon](https://launchpad.net/wiithon) --- Python WBFS Manager (best for Linux!)
* [code.google.com](http://code.google.com/p/linux-wbfs-manager/) --- another Linux WBFS Manager
* [gbatemp.net](http://gbatemp.net/index.php?showtopic=146731&hl=linux) --- FUSE module for WBFS (unstable)


System Menu 4.2
===============

<p><div class="notewarning" markdown="1">
Only backup games you really own. **DO NOT BACKUP BORROWED GAMES OR DOWNLOAD THEM FROM THE INTERNET!** If nobody
actually buys Wii games then the creators won't make any more games. (Also you wouldn't want to end up like [this](http://youtube.com/watch?v=ALZZx1xmAzg),
would you?) However backing up games not only prevents your discs from damage but also makes the games load faster.
</div></p>

<p><div class="noteimportant" markdown="1">
Keep in mind that you could brick your Wii. Only do these steps if you want to take this risk. These steps worked for
me but **I can not be held responsible if they don't work for you or even damage your Wii**.
</div></p>

To patch *System Menu 4.2* to allow backup (and playing of these backups) of games, follow the instructions at [wiihacks.com](http://www.wiihacks.com/recommended-faqs-guides-tutorials-only/24630-full-hacking-guide-4-2-system-menus-79.html).

1. Install the [HomeBrew Channel, DVDX and BootMii]({% post_url 2009-10-07-wii-homebrew-channel %})
    * make a backup of your NAND flash using BootMii
        1. after switching on your Wii, you'll be in the BootMii menu (4 icons)
        1. use <kbd>Power</kbd> to select the gears on the right
        1. use <kbd>Reset</kbd> to choose the gears
        1. the first icon (green arrow pointing from IC to SD-Card) should be highlighted
        1. use <kbd>Reset</kbd> to choose this one
        1. follow the instructions to backup the NAND (don't wonder about the bad blocks. Some Wii have up to 80!)
1. Use one of the packages from *Part B* of the wiihacks-guide to uninstall ios249
    1. prepare and insert SD card
    1. boot your Wii, the *WAD Manager* should run (alternatively: Go to HBC and launch BootMii from there)
    1. in the IOS-selection, select **ios36** (others like 249, 250 might also work, but froze my Wii)
    1. select SD-card as source, press <kbd>A</kbd>
    1. select `IOS249.WAD`, press <kbd>A</kbd>
    1. change action to **Uninstall WAD**, press <kbd>A</kbd>
        * if it gives errors at this point, try one of the other packages
1. Use one of the packages from *Part C* of the wiihacks-guide to install cios38rev14
    1. prepare and insert SD card
    1. boot your Wii, the *cios38-Installer* should run (alternatively: Go to HBC and launch BootMii from there)
    1. in the IOS-selection, keep pressing <kbd>Left</kbd> until **Do not reload IOS** is shown, press <kbd>A</kbd> (might try other IOSes, but it worked fine this way)
    1. if you have a working Internet connection, select **Network install**, otherwise use **WAD install** and press <kbd>A</kbd>
      * if you chose **WAD install**, select the `IOS38-64-v3610.wad` on your SD card
    1. Proceed with the installation and you are done

After this procedure you will be able to use a USB Launcher to make and play backups or a DVD Launcher to play backup DVDs.

<p><div class="noteclassic" markdown="1">
For [some games](http://wiki.gbatemp.net/wiki/index.php?title=USB_Loader_v1.x_Game_Compatibility) it might be needed to
install *Hermes' cIOS* as well. See [wii-homebrew.com](http://www.wii-homebrew.com/download/nintendo-wii-downloads/firmware-und-hacks/originale/hermes-cios)
for instructions. (In German, sorry!)
</div></p>


Shop Channel Update
===================

On October, 21st 2009, Nintendo released a Shop Channel Update. [This post](http://forum.wiibrew.org/read.php?21,38699)
implies that it may be safe to do this update if you are already on 4.2. After I made this update, the *USBLoader GX*
rev. 799 crashed after showing the startup logo. So be sure to make a backup using *BootMii*.

**UPDATE:** The official update seems to reset the IOS249 (and maybe other IOSes). So you either have to repatch your
Wii after the update or use *[WiiSCU](http://wiibrew.org/wiki/WiiSCU)* to update the *Shop Channel* and *IOS61*
(**Note:** Use `-trucha` setting) only.


Burn backups to DVD
===================

You can use any WBFS Manager tool to transfer the backups to your PC (as a ISO file) and burn them onto a DVD. You can
then play the games from DVD using a DVD Launcher such as [NeoGamma](http://www.gbatemp.net/index.php?showtopic=158884).

Make sure, your burning program keeps the book type of **DVD-ROM**. In *Nero* you have to go to the *Choose Recorder*
dialog, *Advanced options* to set the book-type from **Auto** to **DVD-ROM**. Also burn with the slowest speed possible.


Media
-----

| Type                      | Works |
|:--------------------------|:-----:|
| Intenso DVD+R LightScribe |   -   |
| SONY DVD+R Ver. 1.3       |   X   |
| PHILIPS DVD+R LightScribe |   X   |


Play Call of Duty: Black Ops
============================

To play CoD:BO (and not get stuck in the *"Loading…"*-screen), you'll need the cIOS rev20b found [here](http://filetrip.net/f12411-cIOS-Installer-Xr20b.html).
Install using IOS249 from base 57 into slot 249. After that, the game should work.
