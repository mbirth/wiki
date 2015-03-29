---
title: Partition Numbering
layout: default
created: 2008-08-07 22:13:23 +0200
updated: 2008-08-07 22:13:23 +0200
toc: false
tags:
  - know-how
  - software
  - linux
  - hdd
  - partitioning
---
After removal of the first primary partition, you might notice, that the names of the remaining partitions didn't
change. ˋ/dev/sda2ˋ stays ˋ/dev/sda2ˋ. To renumber the partition, use ˋfdiskˋ and create a new primary partition no. 1
which is located behind ˋsda2ˋ. You might want to delete your swap partition, create a new one in partition slot no. 1.

Now enter the expert menu of fdisk and type <kbd>f</kbd> to fix the partition table. The partitions will be renumbered
according to their position on disk. After that delete the temporary partition and re-create your swap. Don't forget to
write the new partition table to disk.

Afterwards, update your ˋ/boot/grub/menu.lstˋ, maybe ˋ/etc/fstabˋ and do a ˋgrub-installˋ.
