---
created: 2008-09-03 23:08:39 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/09/03/enable-usb-sharing.html
tags:
- know-how
- software
- linux
title: Enable USB Sharing
toc: false
updated: 2009-05-05 12:25:03 +0200
---

To use USB devices under e.g. [VirtualBox](http://virtualbox.org/) in *Hardy*, edit the file
`/etc/init.d/mountdevsubfs.sh` and find the line:

    # Magic to make /proc/bus/usb work

Remove the following four comments so that it looks like this:

{% highlight bash %}
#
# Magic to make /proc/bus/usb work
#
mkdir -p /dev/bus/usb/.usbfs
domount usbfs "" /dev/bus/usb/.usbfs -obusmode=0700,devmode=0600,listmode=0644
ln -s .usbfs/devices /dev/bus/usb/devices
mount --rbind /dev/bus/usb /proc/bus/usb
{% endhighlight %}

Also add the following line to your `/etc/fstab` (*129* is the group-ID of *vboxusers*)[^1]:

    none     /proc/bus/usb     usbfs     devgid=129,devmode=0666    0     0

Now enable the new settings by doing:

    sudo /etc/init.d/mountdevsubfs.sh stop
    sudo /etc/init.d/mountdevsubfs.sh start

Finally, edit the file `/etc/udev/rules.d/40-basic-permissions.rules` and find the line containing the `usb_device`
subsystem. Extend the permissions to `0666` like this:

    SUBSYSTEM="usb_device", MODE="0666"

Save the file and you should be able to use USB devices inside VirtualBox guest systems.

According to [Ubuntu Unleashed](http://www.ubuntu-unleashed.com/2008/04/howto-install-virtualbox-in-hardy-heron.html),
you might have to add 2 lines to the `/etc/init.d/mountkernfs.sh` for the *usbfs* to get mounted automatically upon boot.

I'm also not sure about the permissions. It might work also using `0664` or even `0644`.


[^1]: see [Stone.log](http://yoten.blogspot.com/2007/06/virtualbox-usb-error.html)