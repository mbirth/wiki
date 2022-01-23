---
created: 2009-08-10 01:41:46 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/08/10/linksys-nslu2.html
tags:
- know-how
- hacking
- hardware
- linksys
- nas
- storage
title: Linksys NSLU2
toc: true
updated: 2009-12-06 14:01:10 +0100
---

**NSLU2** means *Network Storage Link for USB 2.0 Disk Drives*. Also see [here](http://en.wikipedia.org/wiki/NSLU2).

![NSLU2]({{ site.url }}/assets/nslu2.jpg)


Custom firmwares
================

The NSLU2 supports different firmwares. The original one is rather outdated. The most used firmwares are:

  * *Unslung* --- an add-on to the original firmware, keeping the web-interface and all standard features
  * *SlugOS/BE* --- a firmware optimized for small devices; using `opkg` and `ipkg` you can install various applications/services
  * *Debian/NSLU2* --- a stripped down Debian linux with all things you know from Debian, but packages are not optimized for small memory devices


SlugOS/BE
---------

### Bad network performance

My network consists of a WLAN repeater which bridges the network of my neighbor with mine. Access to the Internet is provided
by a gateway in my neighbor's network. The NSLU2 device has severe problems downloading files from the Internet. All downloads
stall after a few bytes. Some tests showed that my side of the network works fine but everything behind the WLAN bridge is
almost unreachable from the NSLU2. All other devices in my network can use the Internet fine.

My current solution is using [tcpwatch-httpproxy](apt://tcpwatch-httpproxy) on my Desktop-PC and a file `~/.wgetrc` on my NSLU2
with the contents:

    timeout = 10
    http_proxy = <my IP>:8080


Debian/NSLU2
------------

### Power button for shutdown instead of reboot

To make pushing the power button shut down the Slug instead of rebooting it, edit the file `/etc/inittab` and replace the
line

    ca:12345:ctrlaltdel:/sbin/shutdown -t1 -a -r now

by

    ca:12345:ctrlaltdel:/sbin/shutdown -t1 -a -h now


Afterwards do a

    telinit q


### Free memory

Since ARM packages from Debian are not optimized for small memory footprint, you might want to free up some memory by
deactivating several services which are not needed.


#### bash

To save even more memory, you could replace `bash` by `dash` in your `/etc/passwd` file.


#### exim4

Exim4 is a complete mail exchanger. Most people will only need a simple MTA to send some logs to the admin. So
remove `exim4` and use `ssmtp` instead.


#### getty

If you don't have/use the serial console on the NSLU2, you should disable `getty`. Edit the file `/etc/inittab` and
comment out the following line:

    #T0:23:respawn:/sbin/getty -L ttyS0 115200 linux

Afterwards do a

    telinit q


#### ipv6

If you don't use IPv6, you should blacklist the kernel module to save some more RAM. Add the following line
to `/etc/modprobe.d/blacklist`:

    blacklist ipv6


#### sshd

If you don't use *sshfs* or some other special features of *OpenSSH*, you could replace it by `dropbear`.


### Emergency firmware

If your DebianSlug doesn't boot and the root disk is perfectly clean, you might have a firmware problem. To create
a working firmware, you'll need the files `vmlinuz-2.6.30-2-ixp4xx`, `initrd.img-2.6.30-2-ixp4xx`[^1] and the [di-nslu2.bin](http://www.slug-firmware.net/d-dls.php) (the DebianSlug installer image).

1. make sure you have installed the packages [slugimage](apt://slugimage) and [devio](apt://devio)
1. copy the `di-nslu2.bin` to an empty directory and run this:  
  
        slugimage -u -i di-nslu2.bin

1. now copy the two other files also in that directory
1. prepare the kernel image: (This will pad the file to 1441760 Bytes and then switch the [Endianess](http://en.wikipedia.org/wiki/Endianess) of the file.)  
  
        dd if=vmlinuz-2.6.30-2-ixp4xx of=vmlinuz-2.6.30-2-ixp4xx.padded ibs=1441760 conv=sync
        devio "<<"vmlinuz-2.6.30-2-ixp4xx.padded > vmlinuz-2.6.30-2-ixp4xx.swapped "xp $,4"

1. prepare the initrd image:  
  
        dd if=initrd.img-2.6.30-2-ixp4xx of=initrd.img-2.6.30-2-ixp4xx.padded ibs=6291440 conv=sync
        devio "<<"initrd.img-2.6.30-2-ixp4xx.padded > initrd.img-2.6.30-2-ixp4xx.swapped "xp $,4"

1. now compile the new firmware image:  
  
        slugimage -p -b RedBoot -s SysConf -L apex.bin -k vmlinuz-2.6.30-2-ixp4xx.swapped -r initrd.img-2.6.30-2-ixp4xx.swapped -t Trailer -o debianslug.bin

Finally you only have to burn the new image to the NSLU2 using [upslug2](apt://upslug2):

    upslug2 -i debianslug.bin

If you want to make changes to the `initrd`, take a look at [cyrius.com](http://www.cyrius.com/debian/nslu2/repack.html).

**UPDATE:** Here is a little script which does the above in a more comfortable way. Just throw it into the directory
together with the `di-nslu2.bin`, the `initrd.img-2.xxx` and `vmlinuz-2.xxx`. Download: [emergencyfw.sh]({{ site.url }}/assets/emergencyfw.sh)


### Tools

#### iStat Server

[iStat](http://bjango.com/apps/istat/) is an app for the *iPhone* to show performance statistics of different machines.
I compiled their [iStat Server](http://code.google.com/p/istatd/) on my Slug and made a little DEB package.

![iStat]({{ site.url }}/assets/istat.png)

Download: [istatd_0.5.4_armel.deb]({{ site.url }}/assets/istatd_0.5.4_armel.deb)


[^1]: both found in `/boot` on the root partition of the NSLU2-disk