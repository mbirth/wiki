---
alternatives:
- language: de
  url: /software/autohotkey/u3helper/u3helper-vs-packagefactory-de.html
created: 2009-09-12 09:30:53 +0200
language: en
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/09/12/u3helper-vs.-packagefactory-gb.html
tags:
- software
- autohotkey
- u3helper
title: U3Helper vs. PackageFactory
toc: false
updated: 2009-09-12 09:30:53 +0200
---

[Diese Seite auf Deutsch.]({% post_url 2009-09-12-u3helper-vs-packagefactory-de %})

Maybe somebody wonders why to choose the complicated U3Helper variant for packaging an app for U3 when there's the
[Package Factory](http://www.eure.ca/)?

There are some good reasons:

First of all, Package Factory can't handle programs which use the registry. Such programs would miss their settings if
launched on another PC or at least find their settings from the last start on that particular PC. Settings do not get
transported to another PC.

This brings us to the second reason: Package Factory doesn't clean up registry entries after use.

And reason #3: Using Package Factory, every application uses twice the space on the U3-stick because it's stored once
in compressed form inside the U3-package and also uncompressed to the `%U3_DEVICE_EXEC_PATH%`
(usually `\System\Apps\{UUID}\Exec`) on the stick.

So Package Factory works mainly like putting a normal portable application (which runs on every USB-stick) into a
special folder on the U3-stick and sticking an icon for it into the LaunchPad. Nothing more.

Here again, an overview:

***PRO Package Factory:***

* simple conversion of all portable applications
* no research on used files and registry-entries needed

Problems with Package Factory:

* registry-entries don't get watched/cleaned or even transported between different systems
* paths in programs may - on a different PC - point to completely different locations, so that data files may not be found
* non-portable applications CAN NOT made U3-compliant
* programs use double the space on the U3-stick (see above)

***PRO U3Helper:***

* manages  registry-entries, transports settings between PCs, cleans entries after use
* the program files (.exe, .dll, etc.) are stored only once and compressed on the U3-stick and get uncompressed to the
  host PC when needed. Only the data files are stored uncompressed  on the stick.
* data files are copied to the PC upon application launch and are used/changed from that location. This drastically
  increased the life-time of the Flash-memory. After use, all data files are copied back to the stick.
* manages paths in .ini, .xml-files and registry, so that applications find their files on different PCs
* can manipulate environment variables so that non-USB-stick-capable applications store their data on the U3-stick
  instead of the PC
* can register .dll and .ocx-files in Windows and de-register them after use (e.g. needed for older versions of CCleaner)

Commercial use of U3Helper **requires my permission**.