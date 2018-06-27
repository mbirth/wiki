---
title: Uninstall Cardo Updater for Mac
layout: default
created: 2018-06-28 00:24:23 +0200
updated: 2018-06-28 00:24:23 +0200
toc: false
tags:
  - know-how
  - software
  - cardo
  - updater
  - cardoupdater
  - uninstall
---
Cardo Updater puts the main binary `cardo-updater` into `/usr/local/` and
registers this as a LaunchDaemon with the file `/Library/LaunchDaemons/com.cardosystems.cardo-updater.plist`.

After killing all `cardo-updater` processes and removing both files, the updater is gone.
