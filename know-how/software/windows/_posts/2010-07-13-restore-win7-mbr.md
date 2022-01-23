---
created: 2010-07-13 23:29:17 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2010/07/13/restore-windows-7-mbr.html
tags:
- know-how
- software
- windows
title: Restore Windows 7 MBR
toc: false
updated: 2010-07-13 23:29:17 +0200
---

If you installed *Windows XP* **after** *Windows 7*, you're left with the XP-MBR on your drive and thus only XP is
booting.

If you happen to have hardware, which produces the [Code 5](http://www.unawave.de/windows-7-tipps/code5-error.html?lang=EN)
error upon trying to boot from the Win7-DVD, you can do the following to restore the Win7-MBR from within XP:

1. boot into XP and insert the Win7-DVD
1. open a *Command Prompt*
1. navigate to the `?:\boot\` directory of the Win7-DVD (with `?` being the letter of your DVD drive)
1. run the following command: (with `C:` being the drive where *Windows 7* is installed)  
  
        bootsect.exe /nt60 C: /mbr
1. reboot and use [EasyBCD](http://neosmart.net/software.php) to add *Windows XP* to the Win7-Bootloader

<p><div class="notetip" markdown="1">
On [unawave.de](http://www.unawave.de/windows-7-tipps/code5-error.html?lang=EN) you'll find instructions on how to
create a Win7-DVD with the Vista-Bootloader so that you don't get the `Code 5` anymore.
</div></p>