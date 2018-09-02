---
title: Synology NFSv4 with id mapping
layout: default
language: en
created: 2018-01-05 12:50:43 +0100
updated: 2018-01-05 12:50:43 +0100
toc: false
tags:
  - know-how
  - hardware
  - synology
  - diskstation
  - dsm
  - nfs
  - nfsv4
  - nfs4
  - idmapd
  - idmapping
  - export
  - mount
---
**Disclaimer:** ID mapping without a Kerberos server only works halfway with NFSv4, it seems. I
managed to get the correct usernames to show up on my client when listing files, but creating new
files always creates them as user *nobody* because the Synology doesn't map anything in that case.
[This bug report][1] and the [linked thread][2] suggest this is normal behaviour of `idmapd` when
not using Kerberos for some reason. (EDIT: [More detailed explanation.][3])

However, what I did:

First, you have to enable idmapping after loading the NFS service. For that, you have to edit the
file `/usr/syno/etc/rc.sysv/S83nfsd.sh` on the Synology. Find the line

    SYNOLoadModules $KERNELMODULE

and add the following line after that:

    echo "N" > /sys/module/nfsd/parameters/nfs4_disable_idmapping

Then, still on the Synology, edit the `/etc/idmap.conf` and set the `Domain` to your `ITET-PHO` if
not already set. Disable NFS, apply and re-enable (+apply) it afterwards in the Synology's control
centre to reload `nfds`.

On your client machine, create a file `/etc/modprobe.d/nfs-idmap.conf` with the following contents:

    options nfs nfs4_disable_idmapping=0
    options nfsd nfs4_disable_idmapping=0

Reload the `nfs` kernel module afterwards to apply the options.

Also make sure, `idmapd` is running on your client. (On Ubuntu artful, I had to run
`sudo systemctl start nfs-idmapd` manually, I think.) And, of course, use `nfsvers=4` as a mount
option.

(On the Synology, you can `killall idmapd` and run it in foreground using `idmapd -f -vvv` to see
if it's doing anything.)


  [1]: https://bugs.launchpad.net/ubuntu/+source/nfs-utils/+bug/966734
  [2]: http://thread.gmane.org/gmane.linux.nfsv4/7103/focus=7105
  [3]: https://lists.debian.org/debian-kernel/2013/03/msg00136.html
