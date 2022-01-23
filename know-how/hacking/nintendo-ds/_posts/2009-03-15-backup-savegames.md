---
created: 2009-03-15 14:34:37 +0100
language: en
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/03/15/backup-savegames-on-nintendo-ds.html
tags:
- know-how
- hacking
- hardware
- nintendo
- gaming
title: Backup Savegames on Nintendo DS
toc: false
updated: 2009-03-15 22:16:40 +0100
---

To backup savegames from your cartridges (e.g. for use with a ROM dump on a card like the
[CycloDS Evolution]({% post_url 2009-03-22-cyclods-evolution %})) there are two ways.


EZFlash 3in1 method
===================

You'll need a Slot1-homebrew launcher (like the [CycloDS]({% post_url 2009-03-22-cyclods-evolution %})) and the [EZFlash 3in1]({% post_url 2009-03-15-ezflash-3in1 %})
Slot2-Flash-Expansion (*EZFlash Plus* might not work!).

1. Download and install (on your microSD) the *NDS Backup Tool 3in1* from [Rudolph](http://www009.upp.so-net.ne.jp/rudolph/nds/Backup/)
1. Make sure the EZFlash 3in1 is in your Slot2 and the CycloDS containing the card with the *NDS Backup Tool* is in Slot1
1. Launch CycloDS and use it to run the backup tool
1. Make sure you are in the **Save Backup** mode (if not, press <kbd>L</kbd> until you are)
1. Press <kbd>B</kdb> to create a new savegame dump
1. You are prompted to remove the current Slot1 card (CycloDS) and put in the card of the game … do so!
1. Press <kbd>A</kbd> when ready
1. Now the savegame data will be copied to the Flash of the EZFlash 3in1 card
1. You are prompted to turn off the DS and re-run the *NDS Backup Tool*
1. Turn off the NDS (or press <kbd>A</kbd>), remove the game cartridge and insert the CycloDS cartridge again
1. When loading CycloDS, hold <kbd>L-R</kbd> to automagically re-run the backup tool
1. Confirm the copy process by pressing <kbd>A</kbd>
1. Now the savegame data will be copied from the EZFlash to your microSDHC card
1. You're done. The savegame will be in a folder `/NDS_Backup/` on your microSDHC card.
1. (You might have to rename the savegame file to the same name as the backup ROM of the game.)


Wi-Fi method
============

I did not test this method, but it needs a working Wi-Fi-connection from your NDS to your Access Point and some PC in
your network. You'll have to setup a FTP server. Download the *NDS Backup Tool WiFi* from [Rudolph](http://www009.upp.so-net.ne.jp/rudolph/nds/Backup/),
unpack to your microSD and modify the file `NDS_Backup_Tool_Wifi.ini` and enter the IP, Port, Username and Password of
your FTP server. The rest of the process should be similar to the above (despite of the switching cartridges).