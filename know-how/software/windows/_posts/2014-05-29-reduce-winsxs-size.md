---
title: Reduce size of WinSxS folder
layout: default
created: 2014-05-29 17:35:19 +0200
updated: 2014-05-29 17:35:19 +0200
toc: false
tags:
  - know-how
  - software
  - windows
---
See [here](http://www.t-online.de/computer/software/windows-7/id_51447012/winsxs-mysterioeser-platzfresser-unter-windows-7-und-windows-vista.html).

1. Start → Command Prompt → RIGHT CLICK
1. "Run as administrator"
1. `DISM.exe /Online /Cleanup-Image /spsuperseded`
