---
created: 2008-09-12 21:53:07 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/09/12/boot-to-own-partition.html
tags:
- know-how
- software
- linux
- software
- bootup
title: /boot to own partition
toc: false
updated: 2009-03-31 11:48:44 +0200
---

Using an emulated SCSI-adapter in VMware with a very large root disk may give you either

    Error 18: Selected Cylinder exceeds maximum supported by BIOS

or

    Error 16: Inconsistent Filesystem Structure

This is because the *initrd* image is created (maybe only partially) outside the 1024-cylinder boundary accessible by
the VMware BIOS. The only stress-free solution is to move `/boot` to its own partition directly at the beginning of the
virtual disk. There is a nice how-to from [Tek Guru](http://tekguru.wordpress.com/2007/09/04/howto-moving-boot-to-its-own-partition/).

So use your favourite partitioner (I prefer GPartEd from the [SysRescCD](http://www.sysresccd.org/).) and move the
beginning of the first partition about 100 MiB to the right to add a new *ext3* partition in front of it. 100 MiB
should be enough for most people. You may need to use `fdisk`'s expert menu to fix the partition ordering if you can't
live with a `/dev/sda3` at the beginning of the disk.

Afterwards mount both partitions, the future `/boot` and the system partition and copy the contents of `/boot` to the
new and empty partition. Rename the old boot-folder and create a new empty one. Edit the `fstab` and add following line:

    /dev/sda3     /boot     ext3     rw     0    1

(Tek Guru used `ro` here to mount the partition read-only. As Ubuntu often updates the initrd, `rw` is the better way.)

Now open the `grub/menu.lst` and remove the `/boot` in front of the entries. Since grub sees the plain partition,
everything is in the root directory at this point. Maybe you also have to change the `root hd(0,X)` if your `X` is
not `0` (= the first partition).

Using the rescuecd, you can now boot your system using the `rescuecd boothd=/dev/sda2` (`root=/dev/sda2` in recent
versions) parameter. If the system is up, run

    grub-install /dev/sda

to finally install grub correctly. You should now be able to boot.


<p><div class="noteclassic" markdown="1">
You can use the same technique to get around the 137 GB / 128 GiB limit of some
older mainboards. Just create a `/boot` partition at the beginning and after the kernel has loaded the controller
module, the (BIOS-)limit is gone.
</div></p>