---
title: Synaptics Touchpad
layout: default
created: 2009-02-28 01:36:04 +0100
updated: 2009-07-23 12:45:13 +0200
toc: false
tags:
  - know-how
  - software
  - linux
---
To use features like *circular scrolling*[^1] of a Synaptics touchpad, you need to add the following lines to
your `/etc/X11/xorg.conf`:

~~~
Section "InputDevice"
    Identifier   "Synaptics Touchpad"
    Driver       "synaptics"
    Option       "SHMConfig" "true"
    Option       "SendCoreEvents" "true"
    Option       "Device" "/dev/psaux"
    Option       "Protocol" "auto-dev"
    Option       "HorizEdgeScroll" "0"
EndSection
~~~

You also need to add the following line into your `ServerLayout` section in that file:

        InputDevice "Synaptics Touchpad"

<p><div class="noteclassic">
After an upgrade to Jaunty, these lines are commented out by the update-manager. Just uncomment them and everything
should work again.
</div></p>

Afterwards you can install the [gsynaptics](apt://gsynaptics) package to manage the settings for your touchpad - incl.
enabling the circular scrolling.


[^1]: It's like a jogdial: just draw a circle with your finger starting from top-center. Clockwise will scroll down, counter-clockwise will scroll up.