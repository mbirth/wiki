---
created: 2010-05-23 03:48:17 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2010/05/23/enable-moving-any-app-to-sd-card-froyo.html
tags:
- know-how
- hardware
- google
- nexusone
- passion
- android
title: Enable moving any app to SD card (FroYo)
toc: false
updated: 2010-07-21 17:15:18 +0200
---

Android 2.2 (Codename: **Fro**zen **Yo**ghurt) brings a new feature which allows moving apps to the SD card.
Unfortunately this only works for apps which bring a flag to allow this, i.e. not for the current versions.

To enable this globally, activate USB debugging and plug the phone to your computer. Make sure,
you have the Android SDK installed and `cd`'ed to the `tools/`-dir.

Now run

    sudo ./adb shell pm setInstallLocation 2

Valid values are:

  * `0` --- Automatic (app decides, default)
  * `1` --- internal memory preferred
  * `2` --- storage card preferred

(seen in a [comment on androidguys.com](http://www.androidguys.com/2010/05/22/storing-apps-sd-froyo/#IDComment76660167))

<p><div class="notetip" markdown="1">
If you get *insufficient permissions* errors, run `./adb kill-server` and try the above command again.
</div></p>