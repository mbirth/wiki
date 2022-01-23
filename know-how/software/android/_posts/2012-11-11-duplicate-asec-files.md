---
created: 2012-11-11 00:29:15 +0100
language: en
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2012/11/11/duplicate-files-in-dataapp-asec.html
tags:
- know-how
- software
- android
title: Duplicate files in /data/app-asec/
toc: false
updated: 2012-11-11 00:29:29 +0100
---

On Jelly Bean, using FX with root, I noticed duplicate files in /data/app-asec/, e.g.:

* `com.disney.WMW-1.asec` (56,9 MB)
* `com.disney.WMW-2.asec` (56,9 MB)

It looks like one is obsolete and consuming almost 60MB.

So I deleted the older ones of the duplicates and also renamed all files to have the suffix `-1`.

After a reboot, some apps were not working. The launcher showed a "app is not installed" message.

After some more research, I found the file `/data/system/packages.xml` which contains lines like these:

{% highlight xml %}
<package name="com.disney.WMW" codePath="/mnt/asec/com.disney.WMW-2/pkg.apk" resourcePath="/mnt/asec/com.disney.WMW-2/res.zip" nativeLibraryPath="/mnt/asec/com.disney.WMW-2/lib" flags="0" ft="13ab353ea00" it="13484d822a3" ut="13ab3547873" version="16" userId="10214" installer="com.android.vending">
{% endhighlight %}

So I changed these lines to read `com.disney.WMW-1` and after one more reboot, all apps worked again. AND I had **500MB more free space**.