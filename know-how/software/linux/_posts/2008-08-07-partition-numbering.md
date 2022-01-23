---
created: 2008-08-07 22:13:23 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/08/07/partition-numbering.html
tags:
- know-how
- software
- linux
- hdd
- partitioning
title: Partition Numbering
toc: false
updated: 2008-08-07 22:13:23 +0200
---

After removal of the first primary partition, you might notice, that the names of the remaining partitions didn't
change. `/dev/sda2` stays `/dev/sda2`. To renumber the partition, use `fdisk` and create a new primary partition no. 1
which is located behind `sda2`. You might want to delete your swap partition, create a new one in partition slot no. 1.

Now enter the expert menu of fdisk and type <kbd>f</kbd> to fix the partition table. The partitions will be renumbered
according to their position on disk. After that delete the temporary partition and re-create your swap. Don't forget to
write the new partition table to disk.

Afterwards, update your `/boot/grub/menu.lst`, maybe `/etc/fstab` and do a `grub-install`.