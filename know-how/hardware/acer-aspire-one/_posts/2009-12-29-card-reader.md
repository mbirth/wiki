---
title: Card Reader of the Acer Aspire One
layout: default
created: 2008-10-04 13:15:04 +0200
updated: 2009-12-29 15:58:15 +0100
toc: false
tags:
  - know-how
  - hardware
  - acer
  - aspire
  - cardreader
---
**Model:** [JMicron JMB38x](http://www.jmicron.com/Product_JMB38X.htm) PCI Express to 1394a OHCI and Memory Card Host Controller

<p><div class="notetip" markdown="1">
Since *Ubuntu Karmic Koala*, the card reader seems to be recognized fine - but only, **if there is a card inserted upon bootup**.
</div></p>


Enabling the device
===================

The cardreader device seems to be hidden on bootup and you have to enable it by issuing:

    setpci -d 197b:2381 AE=47

This didn't work on the commandline but inside the `rc.local`, my 16GiB SDcard in the left slot was recognized fine.


Multicard-reader driver
=======================

The right-hand SD slot is actually a multi-card reader for MMC, SD, xD and MemoryStick. This device doesn't seem to be
recognized by my Ubuntu.

There's a project called [TI FlashMedia xx12/xx21 driver](http://tifmxx.berlios.de) which also contains the kernel
modules for the jmb38x. The Linpus Linux on the A150L loads modules with exactly those names: `jmb38x_xd`,
`flash_bd`, `memstick`, `mspro_block`, `xd_card` and `jmb38x_ms`.

The [UbuntuForums](http://ubuntuforums.org/showpost.php?p=5778068&postcount=70) contain a HowTo for installing the
TI-part of that driver. I proceeded the same way but installed those modules mentioned above instead of the TI ones.
Modprobing them on command-line worked fine, but after adding the modprobes to the `rc.local`, the next boot ended up
in continuous *soft lockups*.

So make sure you keep an USB stick with the [SysRescCD](http://www.sysresccd.org/Sysresccd-manual-en_How_to_install_SystemRescueCd_on_an_USB-stick) handy.


*[PCI]: Peripheral Component Interconnect
*[OHCI]: Open Host Controller Interface
*[MMC]: MultiMediaCard
*[SD]: Secure Digital
*[xD]: xD-Picture Card
*[TI]: Texas Instruments
*[USB]: Universal Serial Bus
