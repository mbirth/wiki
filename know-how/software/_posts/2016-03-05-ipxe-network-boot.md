---
title: iPXE Network Boot
layout: default
created: 2016-03-05 00:36:55 +0100
updated: 2016-03-05 00:36:55 +0100
toc: true
tags:
  - know-how
  - software
  - ipxe
  - network
  - booting
---
I first stumbled upon iPXE because of a failing info monitor at my local train
station:

![]({{ site.url }}/assets/ipxe01.jpg){: height="400px"}

[iPXE](http://ipxe.org/) is an open source firmware, meant as a replacement for
the very basic [option ROM](https://en.wikipedia.org/wiki/Option_ROM#Network_boot_ROM)
in ethernet cards. But you can also use that default option ROM to chainload
iPXE without having to modify your device(s).

iPXE brings several features like loading boot images via HTTP, FTP, iSCSI, SMB,
etc. and it also supports WiFi.


First Steps
===========

Where do you get the binaries to boot from? The easiest way is to download
[ready-to-use binaries from their homepage](http://ipxe.org/download).

However, if you want to use e.g. a different keyboard because your devices
don't have a typical QWERTY one, you need to compile iPXE yourself. To do that,
[clone the source code](http://ipxe.org/download) to some directory and modify
the files `src/config/console.h` and `src/config/general.h`.

For inspiration, you can take a look at [my settings]({% post_url 2016-03-05-my-ipxe-settings %}).

I also had a problem with iPXE not being able to fetch the URL to the
`boot.ipxe` from dnsmasq. So I made the following `boot.ipxe` to be included in
the binary:

```
#!ipxe
dhcp
chain http://diskstation/ipxe/boot.ipxe
```

After you're done with the files, you have to *make* the required binaries:

```bash
make bin/undionly.kpxe EMBED=boot.ipxe
make bin-x86_64-efi/ipxe.efi EMBED=boot.ipxe
make bin-i386-efi/ipxe.efi EMBED=boot.ipxe
```

And if everything goes well, you should find the files in those directories.

You have to rename them for further use:

`bin/undionly.kpxe` :arrow_right: `undionly.kpxe.0`  
`bin-x86_64-efi/ipxe.efi` :arrow_right: `ipxe.efi.0`  
`bin-i386-efi/ipxe.efi` :arrow_right: `ipxe32.efi.0`


Booting iPXE
============

So how do you get your computers to boot iPXE? You have to get your DHCP server
to announce it to them. You can either do this in the DHCP directly, or just a
DHCP proxy server, which adds the neccessary information. This can be done with
*dnsmasq*.

I'm using this configuration in a file `/etc/dnsmasq.d/pxeproxy.conf`:

```ini
dhcp-range=172.16.0.0,proxy
dhcp-match=set:ipxe,175   # iPXE sends a 175 option
dhcp-vendorclass=set:bios,PXEClient:Arch:00000
dhcp-vendorclass=set:efi32,PXEClient:Arch:00002
dhcp-vendorclass=set:efi32,PXEClient:Arch:00006
dhcp-vendorclass=set:efi64,PXEClient:Arch:00007
dhcp-vendorclass=set:efi64,PXEClient:Arch:00008
dhcp-vendorclass=set:efi64,PXEClient:Arch:00009
tag-if=set:loadbios,tag:!ipxe,tag:bios
tag-if=set:loadefi32,tag:!ipxe,tag:efi32
tag-if=set:loadefi64,tag:!ipxe,tag:efi64
pxe-service=tag:loadbios,x86PC,"iPXE Network boot (BIOS)",undionly.kpxe
pxe-service=tag:loadefi32,IA32_EFI,"iPXE Network boot (EFI32)",ipxe32.efi
pxe-service=tag:loadefi32,BC_EFI,"iPXE Network boot (EFI32)",ipxe32.efi
pxe-service=tag:loadefi64,X86-64_EFI,"iPXE Network boot (EFI)",ipxe.efi
pxe-service=tag:loadefi64,IA64_EFI,"iPXE Network boot (EFI)",ipxe.efi
dhcp-boot=tag:ipxe,http://diskstation:80/ipxe/boot.ipxe
enable-tftp
tftp-root=/var/ftpd
```

This acts as a proxy for the `172.16.0.0/16` network - the one I use. And for
each request, it detects whether there's the option 175 (=request comes from
iPXE) set or not and which type or architecture is requested (legacy, 32bit,
64bit). According to those flags, either the appropriate iPXE binary is returned
or - if the request is from iPXE - the URL to the boot script which is hosted
on my Synology DiskStation's web server.

The last two lines enable the built-in tftp server of dnsmasq and set the path
to it. That's where you have to put your `undionly.kpxe.0`, `ipxe32.efi.0` and
`ipxe.efi.0` from the previous step.


Before the first boot
=====================

Now that iPXE is launched, it tries to fetch the boot script we compiled in.
But this doesn't exist yet.

I used @robinsmidrod's extensive [full iPXE native menu](https://gist.github.com/robinsmidsrod/2234639)
as a basis, removed all things I didn't need and added the things I needed.

In the beginning, this looked like this:

![]({{ site.url }}/assets/ipxe02.jpg){: height="400px"}


Adding tools to boot
====================

Most tools you want to boot are probably Linux systems. To boot them, you need
a *kernel* and some (initial) filesystem. One way is to load an *initrd*
(initial ramdisk) which contains only the basic stuff and mounts the big
filesystem itself. Or you can mount the "big" filesystem directly and use that
from the beginning.


SystemRescueCD
-------------- 

To boot the [SysRescCD](https://www.system-rescue-cd.org/), you need the
following files from the ISO image:

* `sysrcd.dat` --- "big" filesystem
* `sysrcd.md5` --- checksum to validate the sysrcd.dat
* `isolinux/rescue32` --- kernel for 32bit systems
* `isolinux/rescue64` --- kernel for 64bit systems
* `isolinux/initram.igz` --- initial ramdisk

Copy those to a directory `sysresccd` on your web server (where the `boot.ipxe`
is). Look at the `menu.ipxe` from the example configuration mentioned above for
how to add new menu items.

A menu item for SysRescCD could look like this:

```
:srcd
echo Booting SystemRescueCD 32bit
set base-url http://diskstation:80/ipxe/sysresccd/
kernel ${base-url}isolinux/rescue32
initrd ${base-url}isolinux/initram.igz
imgargs rescue32 setkmap=de dodhcp netboot=${base-url}sysrcd.dat
boot || goto failed
goto start
```

As you can see, we instruct iPXE to boot the kernel `rescue32` with the initrd
`initram.igz` - both from the web server. And in the `imgargs` line, we tell
SysRescCD where to look for the `sysrcd.dat`.

![]({{ site.url }}/assets/ipxe03.jpg){: width="400px"}


Boot ALL the tools
==================

You can find my current config [here](https://github.com/mbirth/ipxe-config).
It boots the following tools via the network - no CD or flash drive needed:

* [System Rescue CD](https://www.system-rescue-cd.org/)
* [DFSee](http://www.dfsee.com/)
* [CloneZilla](http://clonezilla.org/)
* [GParted Live](http://gparted.org/livecd.php)
* [g4u - ghost for unix](http://www.feyrer.de/g4u/)
* [G4L - Ghost for Linux](https://sourceforge.net/projects/g4l/)
* [AVG Rescue CD](http://www.avg.com/ww-en/avg-rescue-cd)
* [BitDefender Rescue CD](http://www.bitdefender.com/support/how-to-create-a-bitdefender-rescue-cd-627.html)
* [F-Secure Rescue CD](https://www.f-secure.com/en/web/labs_global/rescue-cd)
* [HDT - Hardware Detection Tool](http://www.hdt-project.org/)
* [Memtest86 V6](http://www.memtest86.com/)
* [Memtest86+ V5](http://www.memtest.org/)

And this is what it looks like:

![]({{ site.url }}/assets/ipxe04.jpg){: width="400px"}

![]({{ site.url }}/assets/ipxe05.jpg){: width="400px"}
