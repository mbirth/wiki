---
title: Western Digital GreenPower Disks
layout: default
created: 2012-08-20 20:27:16 +0200
updated: 2012-08-20 20:46:38 +0200
toc: true
tags:
  - know-how
  - hardware
  - westerndigital
  - greenpower
  - wdgreen
---
Advanced Format
===============

*Advanced Format* disks are optimized for 4kB sectors. To format them under Linux, use `parted` with `-a minimal` and unit type `s` (sectors). (see [here](http://wdc.custhelp.com/app/answers/detail/a_id/5655))


IntelliPark
===========

*WD GreenPower* disks have some problems under Linux with their "head parking" feature parking the head every 8 seconds. This destroys the disk over a short time span.

More info:

   * <http://www.sagaforce.com/~sound/wdantiparkd/>
   * <http://www.instantfundas.com/2011/12/intellipark-makes-western-digital-green.html>


Temporary fix
-------------

To fix this, you have to disable it or set it to a more reasonable timeout:

    $ sudo hdparm -S 242 /dev/sdX


You have to repeat this after each boot, so you may want to add the line to your `/etc/rc.local`.


Permanent fix
-------------

To fix this permanently, you can compile the tool `wdidle3`. There's a bootable ISO available for download at [ngohq.com](http://www.ngohq.com/news/19805-critical-design-flaw-found-in-wd-caviar-green-hdds.html).
For Linux, there's **idle3ctl** from the [idle3-tools](http://idle3-tools.sf.net/).

You can display the current value with the following command:

    $ sudo ./idle3ctl -g /dev/sdX
    Idle3 timer set to 80 (0x50)


The value 80 means 8 seconds (default). From 1-128, the values mean 1/10th of a second, e.g. 128 would be 12.8 seconds. 129-254 are in 30 seconds steps. 129 is 30 seconds, 130 is 60 seconds, etc.

Set the desired value as follows:

    $ sudo ./idle3ctl -s 158 /dev/sdX
    Idle3 timer set to 158 (0x9e)
    Please power cycle your drive off and on for the new setting to be taken into account. A reboot will not be enough!


Do as it says to enable the new setting.
