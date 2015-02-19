---
title: Fortuna GPSmart BT
layout: default
created: 2009-02-02 19:07:10 +0100
updated: 2009-03-31 11:53:41 +0200
toc: false
tags:
  - know-how
  - hardware
  - fortuna
  - gpsmart
  - gps
---
**Homepage:** [fortuna.com.tw](http://www.fortuna.com.tw/gpsmart.htm)

<img src="{{ site.url }}/assets/gpsmart.jpg" height="300" alt="Fortuna GPSmart" />


No fix since 2005-07-11
=======================

There is an error in the original firmware of the GPSmart that the device almost never get a fix since July, 11th 2005.
The function to calculate the visible satellites is erroneus and gives wrong values since that date. So the device searches for satellites which are not visible.

On [this page on eXpansys](http://www.expansys.com/ft.aspx?code=105113&thread=39), *johnr_61* writes that he patched the firmware with new ephemeris data
so that everything works fine again. This patch should work until 2010-11-22.


Update firmware
===============

Connect the device with the special cable. (Normal Mini-USB cables don't work since the devices actually provides only a standard serial interface
which has to be converted to normal USB using the `PL2303`-IC from Prolific.)

Use *FortunaSync* to establish the connection (*Link to Fortuna GPS*) and then use *SirfFlash* to upload the new firmware.

<p><div class="noteimportant" markdown="1">
There are some devices where the flashing doesn't work. If you try to establish a connection using *FortunaSync*, the device locks up.
Some of these devices have a jumper `R30` on the PCB which should be shorted to get directly into flashing mode. Mine didn't have one
but had a `J2` which might had the same effect, but it still didn't work. After some trying I found out that this device goes into
the *SiRF Binary*-communication mode instead of the *NMEA*-mode the newer devices go into. So if you use *SirfDemo* to switch the
device to NMEA-format, the firmware upgrade works until the device reboots itself. After that it's back into SiRF Binary mode and the upgrade fails.
</div></p>


Power cable
===========

You might have noticed that you can't power the GPSmart using a normal USB-to-MiniUSB cable. The backlight for the display can be switched
on and off, but the display itself doesn't show anything. Since I had the same problem with my *HTC Universal*, I found a solution
at [forum.xda-developers.com](http://forum.xda-developers.com/showthread.php?t=285768). According to [Wikipedia](http://en.wikipedia.org/wiki/Universal_Serial_Bus#USB_cables),
the 4th pin is used for detection of *USB On-The-Go*, i.e. whether the other device provides power or not. Interestingly, the roles seem a bit mixed up here.
According to Wikipedia, if pin #4 is grounded, the socket should provide power. Here it is that pin #4 has to be grounded for the device to accept power (for charging).

After opening the GPSmart and bridging pins 4 and 5, I could successfully power the device via a normal USB-to-MiniUSB cable. After removing the bridge, the device powered off.

My first idea for a solution was to use conductive lacquer coat to bridge the pins inside the MiniUSB plug. But then I remembered I had some adaptor:

![USB-B to Mini adapter]({{ site.url }}/assets/usb-b2s.jpg)

And lucky for me, the pins were already bridged in this thing. So I can now power my GPSmart using a normal USB extension cable and this adaptor.


Sync cable
==========

The MiniUSB port on the GPSmart is not really a USB interface. The GPSmart has a serial interface and also uses the port for power.
The FortunaSync cable uses a [FTDI FT232BM](http://www.ftdichip.com/FTProducts.htm#FT232BM) which also controls pin #4 (see above). This IC converts the serial signals to USB.
