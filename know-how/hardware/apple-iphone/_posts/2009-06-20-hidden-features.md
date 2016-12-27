---
title: iphoneOS Hidden Features
layout: default
created: 2009-06-20 21:18:27 +0200
updated: 2009-06-20 21:19:17 +0200
toc: false
tags:
  - know-how
  - hardware
  - apple
  - iphone
  - features
---
There are some hidden options which you have to enable via modifying some file.
(see [here](http://www.funkyspacemonkey.com/iphone-os-30-episode-iii-howto-enable-battery-percentage-toggle-settings)
and [here](http://www.funkyspacemonkey.com/iphone-os-30-episode-iihowto-enable-videorecording-interface-iphone-2g3g).)

Enable a feature
================

For this you have to have [ssh-access]({% post_url 2009-04-26-ssh-access %}) enabled!!

1. `ssh` into the iPhone (remember: the `root`-password is **`alpine`**)
1. `cd` to `/System/Library/CoreServices/Springboard.app/`
1. run this command: `plutil -c xml1 M68AP.plist` (this will convert the binary-XML to plaintext)
1. now use `nano`, `mcedit` or `vim` to edit the file
1. find the **capabilites** dictionary right at the top of the file
1. add the following two key/value-pair: 
   {% highlight xml %}
<key>gas-gauge-battery</key>
<true/>
{% endhighlight %}
1. save the file
1. run `plutil -c binary1 M68AP.plist` to convert the file back into binary-XML format
1. logout
1. reboot(=respring) the iPhone


Features Explained
==================

accessibility
-------------

This will add a new settings menu below *General* (right below *International*). It is empty on iPhone 3G.


gas-gauge-battery
-----------------

This will enable a new setting under *General* → *Usage* to enable a percentage field left of the battery icon.


video-camera
------------

This will enable a new photo <=> video switch in the camera interface.

<p><div class="notewarning" markdown="1">
Enabling this feature will make the camera **unusable**! You won't be able to take normal photos with this feature enabled. (as of BETA 5)
</div></p>


voice-control
-------------

This will add a new settings menu below *General* → *International*. It is empty on iPhone 3G.


More Features
=============

In the file `/System/Library/PrivateFrameworks/GraphicsServices.framework/GraphicsServices` there are various more feature codes listed - here's a screendump:

~~~
...device-name-localized...device-name.still-camera....cameraRestriction...telepho
ny...sms.video-camera....auto-focus-camera...wifi....accelerometer...magnetometer.
...gps.location-services...microphone..opengles-1..opengles-2..volume-buttons..rin
ger-switch...piezo-clicker...bluetooth...unified-ipod....youtube.youtubePlugin...g
reen-tea...not-green-tea...international-settings..stand-alone-contacts....delay-s
leep-for-headset-click...launch-applications-while-animating.load-thumbnails-while
-scrolling.sensitive-ui....apple-internal-install..all-features....nike-ipod...app
licationInstallation.voice-control...proximity-sensor....gas-gauge-battery...acces
sibility...mms.encrypted-data-partition....encode-aac..fcc-logos-via-software..tel
ephony-maximum-generation....hiccough-interval...application-display-identifiers.t
v-out-settings.screen-dimensions...main-screen-width...main-screen-height..main-sc
reen-scale...main-screen-orientation.explicitContentRestriction..volume-limit-rest
riction....inAppPurchasesRestriction...enforce-shutter-click...enforce-googlemail.
~~~

Anyone tried `nike-ipod` or enabling the `magnetometer` on a 3G? Also what could `green-tea` be?
