---
created: 2014-03-31 16:59:17 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2014/03/31/kernel-module-check-for-nagios.html
tags:
- know-how
- software
- nagios
title: Kernel Module Check for Nagios
toc: false
updated: 2014-03-31 17:00:17 +0200
---

`mod_loaded`:

{% highlight bash %}
#!/bin/sh
if [ "$1" = "" ]
then
        echo "USAGE:"
        echo "$0 <kernel-mod>"
        exit 99
fi

MOD=$1

STATUS=`lsmod | grep "$MOD"`
if [ -z "$STATUS" ]; then
        echo "CRITICAL - Kernel module $MOD not loaded!"
        exit 2
fi

DATA=( $STATUS )

echo "OK - ${DATA[0]} has ${DATA[2]} instances, ${DATA[1]} bytes.|instances=${DATA[2]}, memory_usage=${DATA[1]}"
exit 0
{% endhighlight %}

For Check_MK add this to the `/etc/check_mk/mrpe.cfg`:

    DigiPort_KernelMod      /usr/local/nagios/plugins/mod_loaded dgrp