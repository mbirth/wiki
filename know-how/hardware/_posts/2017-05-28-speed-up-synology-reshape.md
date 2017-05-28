---
title: Speed up Synology volume reshaping
layout: default
language: en
created: 2017-05-28 23:45:40 +0200
updated: 2017-05-28 23:45:40 +0200
toc: false
tags:
  - know-how
  - hardware
  - synology
  - diskstation
  - dsm
  - raid
  - lvm
  - reshape
  - storage
---
I wanted to increase the available storage on my Synology DS415+ by replacing 2x 2TB disks with
4TB ones, changing my 4-4-2-2 configuration to 4-4-4-4 and the overall storage space from 8TB to
12TB.

After replacing the first disk, there was the data reconstruction which finished after 2 hours
or so. But then came the reshaping which I left running over night (~10 hours) and it still only
got to 20%.

That made me wonder how long the overall process might take and if that is normal.

Google brought me to [this](https://forum.synology.com/enu/viewtopic.php?t=79595) and
[this](https://forum.synology.com/enu/viewtopic.php?t=124489) forum post which suggested this
command for checking the status and estimated runtime:

```
root@DiskStation:~# cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4]
md3 : active raid5 sdd6[2] sda6[0] sdb6[1]
      1953494784 blocks super 1.2 level 5, 64k chunk, algorithm 2 [3/3] [UUU]
      [=====>...............]  reshape = 25.1% (491263360/1953494784) finish=5198.4min speed=4687K/sec

md2 : active raid5 sdd5[4] sda5[0] sdc5[5] sdb5[1]
      5846049792 blocks super 1.2 level 5, 64k chunk, algorithm 2 [4/4] [UUUU]

md1 : active raid1 sdd2[3] sda2[0] sdb2[1] sdc2[2]
      2097088 blocks [4/4] [UUUU]

md0 : active raid1 sdd1[3] sda1[0] sdb1[1] sdc1[2]
      2490176 blocks [4/4] [UUUU]

unused devices: <none>
```

As you can see, for me it showed about 5200 minutes left. That would be almost 87 hours, or a
little bit over 3½ days. Given that some people reported runtimes of 16 days, I assumed I was
lucky already.

However, the `speed` indicator of the above command showed values around 4-6 MB/sec which is
rather slow for hard drives capable of 100 MB/sec and more.

People mentioned running services on the DiskStation to be a problem, especially indexing services
for e.g. the PhotoStation. So I stopped every service I didn't need (from the *Package Manager*)
and paused those services which appeared at the top for the `top` command, i.e. which were using
the CPU:

```
root@DiskStation:~# synoservice --pause synomkthumbd
root@DiskStation:~# synoservice --pause pkgctl-FileStation
root@DiskStation:~# synoservice --pause scemd
root@DiskStation:~# synoservice --pause synorelayd
root@DiskStation:~# synoservice --pause synoindexd
```

(Just remember to `--resume` them after everything is done.)

Now to the tweaking of the lvm parameters. Since I didn't want to just change settings to values
from the forums without knowing why and what they do, I searched for a site explaining the
different parameters and I found [this nice page](https://baptiste-wicht.com/posts/2015/03/how-to-speed-up-raid-5-6-growing-with-mdadm.html)
which explains the commands and their effects in terms of speed and memory consumption.

The `sysctl dev.raid.speed_limit_max` already showed a reasonable value of `200000` (200 MB/sec)
but I raised it to 500 MB/sec - just to be sure.

    sysctl -w dev.raid.speed_limit_max=500000

As expected, this didn't do anything. On to the next parameter from that page - the
`stripe_cache_size`. First, check the current (default) value:

    root@DiskStation:~# cat /sys/block/md3/md/stripe_cache_size
    256

This means the stripe cache is 256 pages of 4096 Bytes each = 1 MiB per disk. Not very much.
So I increased it as per the recommendation to 4096 pages = 16 MiB per disk:

    echo 4096 > /sys/block/md2/md/stripe_cache_size
    echo 4096 > /sys/block/md3/md/stripe_cache_size

(`md2` and `md3` are my `raid5` devices. See `mdstat` output above.)

This brought the biggest effect. The estimated runtime left immediately fell to around 1300
minutes, fluctuating between 1100 and 1800 minutes:

```
root@DiskStation:~# cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4]
md3 : active raid5 sdd6[2] sda6[0] sdb6[1]
      1953494784 blocks super 1.2 level 5, 64k chunk, algorithm 2 [3/3] [UUU]
      [=====>...............]  reshape = 26.0% (509001728/1953494784) finish=1338.0min speed=17992K/sec
```

That was already impressive, cutting down the overall time from 3.5 days to 22 hours.
And we had another parameter to tweak: the read-ahead. Again, we first want to figure out the
default value:

    root@DiskStation:~# blockdev --getra /dev/md3
    384

Since the value is in "sectors" of 512 Bytes, that comes in at 192 KiB. As we have plenty of RAM
(upgraded my DS to 8GB), I've set this to the recommended 32 MiB:

    root@DiskStation:~# blockdev --setra 65536 /dev/md3
    root@DiskStation:~# blockdev --setra 65536 /dev/md2

And that gave another small boost:

```
root@DiskStation:~# cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4]
md3 : active raid5 sdd6[2] sda6[0] sdb6[1]
      1953494784 blocks super 1.2 level 5, 64k chunk, algorithm 2 [3/3] [UUU]
      [=====>...............]  reshape = 26.1% (511295616/1953494784) finish=1001.1min speed=24008K/sec
```

Another 300 minutes (5 hours) shaved off the remaining time. With a remaining time of less
than 17 hours for something which initially needed 3.5 days, I was very pleased.

And the process seems to have sped up even more as it is now - 9.5 hours later - nearing completion:

```
root@DiskStation:~# cat /proc/mdstat 
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] 
md3 : active raid5 sdd6[2] sda6[0] sdb6[1]
      1953494784 blocks super 1.2 level 5, 64k chunk, algorithm 2 [3/3] [UUU]
      [===================>.]  reshape = 95.9% (1874314432/1953494784) finish=20.1min speed=65521K/sec
```




*[MiB]: Mebibyte (1024 KiB), similar to Megabyte (1000 kB)
*[KiB]: Kibibyte (1024 Bytes), similar to Kilobyte (1000 Bytes)
