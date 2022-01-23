---
created: 2008-08-13 22:18:28 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/08/13/wake-on-lan.html
tags:
- know-how
- software
- linux
- networking
title: Wake-on-LAN
toc: false
updated: 2008-08-13 22:18:28 +0200
---

Preparing to go asleep
======================

To make Linux not shut down the network interface upon *halt*, edit the file `/etc/init.d/halt`, find the line with the
`halt` command and remove the parameter `-i` if there. This parameter does `ifdown` on all networking interfaces. As the
manpage for *halt* states, this is unneccessary for newer kernels - also it disables WOL.

The second step is to make sure, your card supports WOL. To find out, issue the `sudo ethtool eth0` command. You should
get something like this:

~~~
Settings for eth0:
	Supported ports: [ TP MII ]
	Supported link modes:   10baseT/Half 10baseT/Full 
	                        100baseT/Half 100baseT/Full 
	Supports auto-negotiation: Yes
	Advertised link modes:  10baseT/Half 10baseT/Full 
	                        100baseT/Half 100baseT/Full 
	Advertised auto-negotiation: Yes
	Speed: 10Mb/s
	Duplex: Half
	Port: MII
	PHYAD: 1
	Transceiver: internal
	Auto-negotiation: on
	Supports Wake-on: g
	Wake-on: g
	Current message level: 0x00000007 (7)
	Link detected: no
~~~

The important lines are the `Supports Wake-on` and `Wake-on` ones. The "`g`" means it is enabled for MagicPacket™.
If not, you should manually call the command:

    ethtool -s eth0 wol g

This should enable WOL for the card. If this works, you have to issue this command after every bootup as the state will
be back to disabled then. You might want to create a startup script.


Waking remote PCs
=================

The simple way is to use `wakeonlan` which only supports MagicPacket™.

For a PC in a Class C network, use a call like this:

    wakeonlan -i 192.168.1.255 de:ad:be:ef:ca:fe

This would send the packet to the 192.168.1.x subnet and the PC with the specified MAC address should wake up.

**Note:** Some nVidia chipsets require the MAC address to be specified in reverse order. In the example this would
be `fe:ca:ef:be:ad:de`.