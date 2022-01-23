---
created: 2008-07-15 00:06:44 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/07/15/backup-userprofile-as-active-profile.html
tags:
- know-how
- software
- windows
title: Backup-Userprofile as active profile
toc: false
updated: 2008-07-15 00:06:44 +0200
---

Check registry key: `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList` for needed profile.

Change `State` value to following:

|  Value|Meaning       |
|------:|:-------------|
| `100`h|logged on user|
| `104`h|normal profile|
|`8100`h|backup profile|