---
created: 2013-12-16 14:16:31 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2013/12/16/resize-partition.html
tags:
- know-how
- software
- linux
title: Resize partition
toc: false
updated: 2014-02-10 09:09:32 +0100
---

Detect new disk size
====================

With virtual machines (VMware at least), you can resize the disk drives without restarting the VM itself. After doing
that, you have to get Linux to recognize the new disk drive size. Use one of these (found [here](http://oldblog.renanmarks.net/en/blog/reload-partition-table-without-rebooting-linux-system)
and [here](http://jason-antonacci.blogspot.de/2012/08/recognizing-linux-block-device.html)) - assuming the modified
drive is `/dev/sdc`:

* `hdparm -z /dev/sdc`
* `echo 1 > /sys/block/sdc/device/rescan`
* `partprobe /dev/sdc`

<p><div class="notewarning">
Make sure to umount all mounts from this drive before rescanning it. Otherwise, it won't work.
</div></p>

Check the success with `fdisk -l`.


Resize partition
================

Using `parted`, there's the `resize` command. But this is not as robust, es using `resize2fs` from the [e2fsprogs](apt://e2fsprogs)
package. So the recommended way is to manually resize the partition using `parted` and then run `resize2fs` to do the
actual resize operation.

Make sure to switch to `unit s` (sectors) in `parted` and `print` the partition table before doing anything to it so
that you can refer to it later.


Fill Empty Space
================

To fill empty space with zeroes (to e.g. reduce the partition size using `vmkfstools`), use this command (found [here](http://www.zedt.eu/tech/linux/zero-out-free-disk-space/)):

    nice cat /dev/zero > zero.fill; sync; sleep 1; sync; rm -f zero.fill