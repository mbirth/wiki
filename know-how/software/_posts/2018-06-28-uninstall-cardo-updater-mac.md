---
created: 2018-06-28 00:24:23 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2018/06/28/uninstall-cardo-updater-for-mac.html
tags:
- know-how
- software
- cardo
- updater
- cardoupdater
- uninstall
title: Uninstall Cardo Updater for Mac
toc: false
updated: 2018-06-28 00:24:23 +0200
---

Cardo Updater puts the main binary `cardo-updater` into `/usr/local/` and
registers this as a LaunchDaemon with the file `/Library/LaunchDaemons/com.cardosystems.cardo-updater.plist`.

After killing all `cardo-updater` processes and removing both files, the updater is gone.