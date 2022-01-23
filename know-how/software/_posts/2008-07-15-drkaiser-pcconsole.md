---
created: 2008-07-15 00:22:10 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/07/15/dr.-kaiser-pcconsole.html
tags:
- know-how
- software
title: Dr. Kaiser PcConsole
toc: false
updated: 2008-07-15 22:04:16 +0200
---

**Homepage:** <http://www.dr-kaiser.eu/>

To make locking the workstation impossible, kill `PdsLspSv.exe` in Task Manager.

`HKLM\SYSTEM\CurrentControlSet\Services\PdsLsp\Flags`

This value controls locking Internet upon bootup (only, if the LehrerConsole isn't working).