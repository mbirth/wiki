---
title: Unmounting
layout: default
created: 2009-01-24 23:09:03 +0100
updated: 2009-08-13 12:48:35 +0200
toc: false
tags:
  - know-how
  - software
  - linux
---
sudo
====

Using `sudo umount` you can unmount ANYTHING but need `sudo` access.


fusermount
==========

Using `fusermount -u` you can unmount all FUSE mounts.


pumount
=======

Using `pumount` you can unmount all mounts below `/media` which don't appear in `/etc/fstab`.


Shutdown/Reboot hangs
=====================

If there are mounted *cifs* shares, you might encounter a *"CIFS VFS: no response for cmd 50…"* on shutdown or reboot
which may take about half a minute before the machine actually shuts down (or reboots). This is caused by the network
being shut down before the shares were umounted.

The thing is, in Jaunty there already is a script to umount network shares before the network is shut down, but it has
the wrong start-type of `S` = start. If you look at the script itself, you'll find this:

{% highlight bash %}
case "$1" in
  start)
	# No-op
	;;
  restart|reload|force-reload)
	echo "Error: argument '$1' not supported" >&2
	exit 3
	;;
  stop|"")
	do_stop
	;;
  *)
	echo "Usage: umountnfs.sh [start|stop]" >&2
	exit 3
	;;
esac
{% endhighlight %}

So if called with the argument `start`, it will do nothing. It has to be called with `stop`.

To fix this (in Jaunty):

* go to `/etc/rc0.d/`
* find the link `S31umountnfs.sh` (type: S = start)
* do a `sudo mv S31umountnfs.sh K31umountnfs.sh` (type: K = kill/stop)
* now go to `/etc/rc6.d/` and do the same to the link there

You may find some more info on [this blog](http://whereofwecannotspeak.wordpress.com/2007/12/25/unmount-samba-filesystems-before-shutdown-or-reboot/).
