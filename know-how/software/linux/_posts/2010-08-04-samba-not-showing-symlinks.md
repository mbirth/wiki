---
title: Samba not showing Symlinks
layout: default
created: 2010-08-04 10:47:49 +0200
updated: 2010-08-04 10:47:49 +0200
toc: false
tags:
  - know-how
  - software
  - linux
  - samba
---
After an upgrade to *Ubuntu Lucid Lynx*, all Samba shares were missing symlinks, esp. symlinks to directories outside
the share.

To enable these again, add the following lines into the `[global]` section of your `/etc/samba/smb.conf`:

{% highlight ini %}
follow symlinks = yes
wide links = yes
unix extensions = no
{% endhighlight %}

Then restart `smbd` and you should see the symlinks again.
