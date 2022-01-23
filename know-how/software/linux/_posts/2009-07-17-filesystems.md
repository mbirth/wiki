---
created: 2009-01-08 22:33:36 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/01/08/filesystems.html
tags:
- know-how
- software
- linux
- filesystems
title: Filesystems
toc: false
updated: 2009-07-17 23:04:03 +0200
---

Creating
========

ext3
----

    mkfs.ext3 /dev/sdb1 -L my_external

You might want to enable additional features using `tune2fs`.

    tune2fs -O +feature /dev/sdb1

**`feature`** may be one of the following:

|feature       | Description                                                                  |
|:------------:|:-----------------------------------------------------------------------------|
|`large_file`  |If you have files > 2GiB, this flag should be automatically set by the kernel.|
|`dir_index`   |Uses hashed b-trees to speed up lookups in large directories.                 |
|`sparse_super`|Limits the number of backup superblocks to save space on large filesystems.   |

There are some more, but these are the most interesting. On external drives you might want to set the reserved space
for the root-user to 0% instead of the default 5%:

    tune2fs -m 0 /dev/sdb1

You can show all information about the superblock using:

    tune2fs -l /dev/sdb1


Renaming
========

To rename a partition (e.g. an USB drive), there are different tools for different filesystems.
There's a nice overview at [ubuntu.com](https://help.ubuntu.com/community/RenameUSBDrive).

ext2 / ext3
-----------

You need the package [e2fsprogs](apt://e2fsprogs).

    sudo e2label /dev/sdb1
    sudo e2label /dev/sdb1 my_external


FAT16 / FAT32
-------------

You need the package [mtools](apt://mtools).

    sudo mlabel -i /dev/sdb1 -s ::
    sudo mlabel -i /dev/sdb1 ::my_external


JFS
---

You need the package [jfsutils](apt://jfsutils).

    sudo jfs_tune /dev/sdb1
    sudo jfs_tune -L my_external /dev/sdb1


NTFS
----

You need the package [ntfsprogs](apt://ntfsprogs).

    sudo ntfslabel /dev/sdb1
    sudo ntfslabel /dev/sdb1 my_external


ReiserFS (v3)
-------------

You need the package [reiserfsprogs](apt://reiserfsprogs).

    sudo reiserfstune -l my_external /dev/sdb1


XFS
---

You need the package [xfsprogs](apt://xfsprogs).

    xfs_admin -l /dev/sdb1
    xfs_admin -l my_external /dev/sdb1