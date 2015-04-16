---
title: Dr. Kaiser PcConsole
layout: default
created: 2008-07-15 00:22:10 +0200
updated: 2008-07-15 22:04:16 +0200
toc: false
tags:
  - know-how
  - software
---
**Homepage:** <http://www.dr-kaiser.eu/>

To make locking the workstation impossible, kill `PdsLspSv.exe` in Task Manager.

`HKLM\SYSTEM\CurrentControlSet\Services\PdsLsp\Flags`

This value controls locking Internet upon bootup (only, if the LehrerConsole isn't working).
