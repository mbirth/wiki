---
title: sysupgrade with ExtRoot
layout: default
created: 2014-05-26 22:30:20 +0200
updated: 2014-05-26 22:47:49 +0200
toc: false
tags:
  - know-how
  - software
  - openwrt
---
Run `sysupgrade` or upload the new file with LuCI.

<p><div class="noteimportant" markdown="1">
When upgrading with ExtRoot mounted, your configuration in ExtRoot will be saved and **restored to the `overlay` in
Flash memory**. So if you have a specific emergency configuration, be sure to boot without ExtRoot before starting the
upgrade.
</div></p>

After the reboot, you will be in the base system (that is, your configuration, but without ExtRoot). Run these commands
to get back on track:

    opkg update
    opkg install block-mount
    opkg install kmod-fs-ext4
    opkg install kmod-usb-storage
    mount /dev/sda1 /mnt
    rm /mnt/etc/.extroot-uuid
    reboot

After this reboot, either everything will be working again (/dev/sda1 mounted to `/overlay`) or - if there was a new
kernel in that upgrade - /dev/sda1 might be mounted to `/overlay-disabled`. In that case, you have to recreate ExtRoot
(save your configuration first).

If your previous ExtRoot mounted fine, you might want to update your packages there. It is important to **NOT** upgrade
kernel modules as this might break things. The [ExtRoot Wiki Page](http://wiki.openwrt.org/doc/howto/extroot#old.notes)
lists a command to only update non-kernel-packages:

    opkg upgrade $(opkg list-upgradable | awk '($1 !~ "^kmod|Multiple") {print $1}')
