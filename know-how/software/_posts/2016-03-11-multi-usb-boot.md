---
created: 2016-03-11 19:36:55 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2016/03/11/multi-usb-boot.html
tags:
- know-how
- software
- usb
- flash-drive
- booting
title: Multi USB Boot
toc: false
updated: 2016-03-11 19:36:55 +0100
---

Similar to [booting different operating systems via network]({% post_url 2016-03-05-ipxe-network-boot %}),
you can also boot multiple systems from a USB flash drive.

![]({{ site.url }}/assets/multi-boot-grub.jpg){: width="400px"}

This is even a bit easier since you have a boot medium (the flash drive) and
don't have to jump through hoops to get a system to boot from the network.


Initial Setup
=============

While you *can* use the whole flash drive for everything, I found it more neat
to have separate partitions for each tool. So I started out by creating a 16 GiB
partition on my 32 GiB flash drive. This serves as the main partition to boot
from. Make it a primary partition and format it with ext4[^1].

Now, we need to install the bootloader to it. I chose `grub`, others use
`syslinux`. Both are suitable, so it's up to you. I followed [these](https://www.pendrivelinux.com/boot-multiple-iso-from-usb-via-grub2-using-linux/)
instructions. (Omitting the `wget` command because I wanted to have my own
`grub.cfg`.)

First, mount the new partition so the neccessary files can be copied to it. My
partition is `/dev/sdc1`, so I mount it with:

    sudo mount /dev/sdc1 /mnt/usb

Now, to install `grub`, just do a:

    grub-install --force --no-floppy --boot-directory=/mnt/usb/boot /dev/sdc

You should now find a `/boot/grub` directory in that partition with a file
`grub.cfg`. That's what we will be fiddling with.

If that file doesn't exist, create one with these contents:

```
set timeout=10
set default=0

insmod ext2
```


Adding Systems
==============

As stated above, I prefer to have separate partitions for each system I want to
boot. Since you can only have 4 primary partitions on a drive, we need to embed
our additional systems into an extended partition. So, I created an extended
partition in the remaining 16 GiB of my 32 GiB flash drive. That's where new
tools will go.

But besides the files, we also need to instruct our newly installed `grub` where
to look for files and how to boot them.

You can find many boot settings on [this blog post](http://pongup.blogspot.de/2010/10/multipleboot-usb.html)
already. However, these are for `syslinux`. I'll post some options for `grub`
here.

Also, the needed files and configuration lines to boot the systems are very
similar to those of iPXE for network booting. So you can check [this post]({% post_url 2016-03-05-ipxe-scripts-for-tools %})
and use them.


System Rescue CD
----------------

If you mount the ISO image and have a look at the contents, you'll see that the
SysRescCD is about 410 MiB in size (all kernels + `sysrcd.dat` and a few
others). To be safe for future (probably slightly larger) versions, I went with
a 450 MiB (470 MB[^2]) partition inside the newly created extended partition and
also formatted it as ext4. For me, the partition is called `sdc7`.

![]({{ site.url }}/assets/multi-usb-partitions.png){: width="800px"}

Copy the following directories and files from the SysRescCD to that new
partition:

* `isolinux/` (the whole directory incl. all files and subdirectories)
* `sysrcd.dat`
* `sysrcd.md5`
* `version`

Now to find out the boot parameters, we have to look at the boot configuration
for the SysRescCD itself. This is contained in the `isolinux/isolinux.cfg` file.

Search for these lines:

```
LABEL rescue32_2
MENU LABEL 2. SystemRescueCd with all files cached to memory
LINUX rescue32
INITRD initram.igz
APPEND docache
TEXT HELP
Boot standard 32bit kernel and run system from memory.
It requires 512 MB of memory to work and takes some time during the
boot process, but the cdrom can be removed and system will be faster.
ENDTEXT
```

This contains all information we need to create our `grub.cfg` lines. The kernel
to boot is `rescue32` with parameter `docache`. And the initfs is `initram.igz`.

Also, I have the files in a directory `isolinux` on partition `sdc7`, or #7 on
the flash drive. Translated to grub-speak, this is `(hd0,msdos7)` (`hd0` means
the drive we are booting from.)

So the lines we need to add to the `grub.cfg` are:

```
menuentry "SystemRescueCd 4.9.0 (32bit)" {
 linux (hd0,msdos7)/isolinux/rescue32 docache
 initrd (hd0,msdos7)/isolinux/initram.igz
}
```

In the same way, the 64bit version with German keyboard layout would look like
this:

```
menuentry "SystemRescueCd 4.9.0 (64bit)" {
 linux (hd0,msdos7)/isolinux/rescue64 setkmap=de docache
 initrd (hd0,msdos7)/isolinux/initram.igz
}
```

You can read about more parameters for the kernel on the [official SysRescCD
documentation](https://www.system-rescue-cd.org/Sysresccd-manual-en_Booting_the_CD-ROM).

That's it. You should now be able to boot SysRescCD from your flash drive.



[^1]: If you're afraid about wear&tear with ext4, you could also use ext2 but
      should `fsck` the partitions every once in a while.

[^2]: "MiB" is MebiByte where 1 MiB = 1024 KiB = 1024 Bytes. Whereas "MB" is
      MegaByte where 1 MB = 1000 kB = 1000 Bytes. And although most system tools
      show "MB", some mean "MiB" and others actually mean "MB". And some mix it
      up completely.

*[USB]: Universal Serial Bus
*[GiB]: Gibibyte (=1024 MiB)
*[GB]: Gigabyte (=1000 MB)
*[MiB]: Mebibyte (=1024 KiB)
*[MB]: Megabyte (=1000 kB)
*[ISO]: International Organization for Standardization (refers to their standard no. 9660)