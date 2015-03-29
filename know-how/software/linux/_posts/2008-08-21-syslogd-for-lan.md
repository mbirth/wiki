---
title: SyslogD for LAN
layout: default
created: 2008-08-21 10:39:59 +0200
updated: 2008-08-21 10:39:59 +0200
toc: false
tags:
  - know-how
  - software
  - linux
  - syslog
  - monitoring
  - networking
---
To let the *syslogd* also receive messages from your local network, edit the file ˋ/etc/default/syslogdˋ and modify the
last line so that it looks like this:

    SYSLOGD="-r"

Restart the *sysklogd* and watch your ˋ/var/log/messagesˋ.
