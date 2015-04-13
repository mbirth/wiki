---
title: Backup-Userprofile as active profile
layout: default
created: 2008-07-15 00:06:44 +0200
updated: 2008-07-15 00:06:44 +0200
toc: false
tags:
  - know-how
  - software
  - windows
---
Check registry key: `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList` for needed profile.

Change `State` value to following:

|  Value|Meaning       |
|------:|:-------------|
| `100`h|logged on user|
| `104`h|normal profile|
|`8100`h|backup profile|
