---
created: 2008-10-07 21:53:51 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/10/07/umts-via-bluetooth.html
tags:
- know-how
- software
- linux
- umts
- bluetooth
title: UMTS via Bluetooth
toc: false
updated: 2009-07-17 23:09:25 +0200
---

To use UMTS Internet via a bluetooth mobile phone, install the packages [gnome-ppp](apt://gnome-ppp) and [ppp](apt://ppp).

There's a nice manual at [UbuntuUsers](http://wiki.ubuntuusers.de/Bluetooth/Mobile).

1. use `hcitool scan` to find the MAC of your mobile
1. use `sdptool search DUN` to find the dial-up networking details of your mobile, note the line `Channel: 7`
1. edit the file `/etc/bluetooth/rfcomm.conf` and uncomment the section and make the changes according to your details:  
  
        rfcomm0 {
        	# Automatically bind the device at startup
        	bind yes;
        
        	# Bluetooth address of the device
        	device 11:22:33:44:55:66;
        
        	# RFCOMM channel for the connection
        	channel	7;
        
        	# Description of the connection
        	comment "SonyEricsson P1i";
        }

1. launch *Gnome-PPP*
1. click *Setup* and change the settings:
    * **Modem** Tab
        * *Device:* /dev/rfcomm0
        * *Type:* USB-Modem
        * *Speed:* 460800
        * [X] *Wait for dialtone*
        * **Init Strings**
            * *Init 2:* `ATE1` (ATZ is sent automatically by Gnome-PPP)
    * **Network** Tab
        * Leave everything as it is
    * **Options** Tab
        * [X] *Ignore terminal strings (stupid mode)*
1. enter following details for dialup:
    * **Username:** t-mobile
    * **Password:** tm
    * **Phone number:** *99#