---
created: 2009-05-14 17:17:58 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/05/14/ios-firmware-3.0-beta-without-registration.html
tags:
- know-how
- hardware
- apple
- iphone
- firmware
- hacking
title: iOS Firmware 3.0 BETA without registration
toc: false
updated: 2009-08-01 20:03:23 +0200
---

There is a way to install and activate the most recent BETA firmware without registering the device's UDID as a developer.

What you'll need:

* [iTunes 8.2](http://www.iphoneheat.com/2009/05/download-iphone-os-30-beta-5-7a312g-and-itunes-82-b10/)
* [iPhoneOS 3.0 BETA firmware file](http://www.iphoneheat.com/2009/03/download-iphone-firmware-files-all-at-one-place/)
* [iUtilities](http://blog.alltechrelated.com/2008/10/24/iutilities-usefully-theme-windows-application/) or [DiskAid](http://www.digidna.net/diskaid/)
* [QuickPwn](http://www.quickpwn.com/2009/05/quickpwn-3-0-beta-5.html) for the specific firmware version
* maybe the carrier-specific features file


Steps
=====

1. Install iTunes 8.2
1. Maybe make a backup of your iPhone
1. Hold <kbd>Shift</kbd> and click the *Restore* button (MAC users: try holding <kbd>⌥</kbd> while clicking)
1. Select the iPhone OS 3.0 firmware file
1. Wait until the firmware is installed (~15min)
    * Your iPhone will need activation after bootup, but since your UDID isn't registered at Apple, iTunes will deny the activation
    * the trick is to make iTunes think, there's a 2.2.1 firmware on your phone which it will activate without any problems
1. Jailbreak the phone using *QuickPwn* (make sure, the *Activate** option is **unchecked**!!)
1. now use *iUtilities* or *DiskAid*:
    * **iUtilities:** Click the *String Editor* tab and find the section *System Version*
        * enter **2.2.1** into the first box and **5H11** into the second one
        * click *Go*
    * **DiskAid:** Open DiskAid, set the starting node to *Root* in the bottom left
        * navigate to `/System/Libraries/Core Services` and find the file `SystemVersion.plist`
        * open this file (or copy to PC and open there) with an editor (e.g. notepad.exe)
        * change the *ProductBuildVersion* to **5H11** and change the *ProductVersion* to **2.2.1**. Make sure that *ReleaseType* is **Public**
        * save the file (or drag from PC back into *DiskAid*)
1. reboot your iPhone (hold Home and Power until the slider appears)
1. launch iTunes and it will activate your iPhone
1. now you might revert the changes made by *iUtilities* or *DiskAid*, see the table below:

| Device | Version | Build  | Note           |
|:------:|:-------:|:------:|:---------------|
|   3G   | 2.2.1   | 5H11   |                |
|   3G   | 3.0     | 7A238j | BETA 1         |
|   3G   | 3.0     | 7A259g | BETA 2         |
|   3G   | 3.0     | 7A280f | BETA 3         |
|   3G   | 3.0     | 7A300g | BETA 4         |
|   3G   | 3.0     | 7A312g | BETA 5         |
|   3G   | 3.0     | 7A341  | Final / Gold Master  |
|   3G   | 3.1     | 7C97d  | BETA 1         |
|   3G   | 3.1     | 7C106c | BETA 2         |
|   3G   | 3.1     | 7C116a | BETA 3         |


SystemVersion.plist
===================

In case you didn't make a backup copy, the file looks like this:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>ProductBuildVersion</key>
    <string>7A312g</string>
    <key>ProductCopyright</key>
    <string>1983-2009 Apple Inc.</string>
    <key>ProductName</key>
    <string>iPhone OS</string>
    <key>ProductVersion</key>
    <string>3.0</string>
    <key>ReleaseType</key>
    <string>Beta</string>
</dict>
</plist>
{% endhighlight %}


Links
=====

* [facepunch.com](http://www.facepunch.com/showthread.php?t=732296)
* [alltechrelated.com](http://blog.alltechrelated.com/2009/05/13/guide-how-to-bypass-the-udid-registration-for-os-30/)
* [hackint0sh.org](http://www.hackint0sh.org/forum/f201/72220.htm)

*[UDID]: Unique Device IDentifier