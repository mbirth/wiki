---
created: 2010-08-04 10:47:49 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2010/08/04/samba-not-showing-symlinks.html
tags:
- know-how
- software
- linux
- samba
title: Samba not showing Symlinks
toc: false
updated: 2010-08-04 10:47:49 +0200
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