---
created: 2008-08-21 10:39:59 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/08/21/syslogd-for-lan.html
tags:
- know-how
- software
- linux
- syslog
- monitoring
- networking
title: SyslogD for LAN
toc: false
updated: 2008-08-21 10:39:59 +0200
---

To let the *syslogd* also receive messages from your local network, edit the file `/etc/default/syslogd` and modify the
last line so that it looks like this:

    SYSLOGD="-r"

Restart the *sysklogd* and watch your `/var/log/messages`.