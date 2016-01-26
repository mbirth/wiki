---
title: Display density on Android
language: en
layout: default
created: 2015-12-02 17:19:42 +0200
updated: 2015-12-02 17:19:42 +0200
toc: false
tags:
  - know-how
  - hacking
  - android
  - display
  - resolution
  - lcd
---
Methods
=======

Android supports changing the display resolution in 2 different ways.

wm density
----------

This method works without root and changes the density of the *window manager*.
You can call this command only from the adb shell.

The syntax is:

    wm density [ppi]

E.g. the Nexus 9 has a real display density of 288ppi, so you would run:

    wm density 288

To reset the value to the factory setting (for the N9 that is 320), just run:

    wm density reset


build.prop
----------

The other way to change the display density is to edit the `build.prop`. This
only works with root access.

To edit the file, first make the `system` partition writable by remounting it.

Then find the file `/system/build.prop` and open it in a text editor. I use
my favourite file manager [FX File Explorer](https://play.google.com/store/apps/details?id=nextapp.fx)
with its integrated editor for that.

Find the following line (Example from Nexus 9 with currently 320ppi):

    ro.sf.lcd_density=320

And change the number to your desired value. BE SURE TO NOT CHANGE ANYTHING ELSE.
Save the file and reboot your device.


Advantages
==========

Setting the correct density value makes the display appear sharper and it may
even make your device run better.

Android knows different *densities* and if an app supplies graphics in different
qualities, it loads them according to the detected density. This means: The
higher the density, the larger graphics Android has to load and keep in
memory. So reducing the density (to the real value) can make Android load
a bit less detailed graphics and thus save RAM.

Android knows these quality classes:

| Class |   PPI   |
|------:|:-------:|
|  ldpi | 100-140 |
|  mdpi | 141-199 |
|  hdpi | 200-319 |
| xhdpi | 320-340 |
| xxhdpi|  ~480   |
|xxxhdpi|  ~640   |

As you can see, the 320ppi of the Nexus 9 makes Android use *xhdpi* resources.
If you change the density to 318, you won't notice anything, but Android will
suddenly use the *hdpi* resources and save memory when running apps.


Problems
========

If you don't have root access and try to change the density using the `wm density`
command only, it might seem to work on the first glance, but you will notice
strange effects.

If you're using SwiftKey, you'll notice it right away:

![]({{ site.url }}/assets/android-dpichanged-swiftkey-broken.png)


Other problems are more subtle (Nexus 9 at 288ppi):

![]({{ site.url }}/assets/android-dpichanged.png)

Compare this to the same screen at the original 320ppi:

![]({{ site.url }}/assets/android-originaldpi.png)

(If you're still searching: Notice the huge "chevron" icon after the
developer's name. And also the **huge** background image.)

<p><div class="noteimportant" markdown="1">
These problems only occur if you use only one method to change the density. If
you use **both** methods and set them to the same value, everything will look
just fine.
</div></p>

More info at the [xda forum](http://forum.xda-developers.com/nexus-9/general/guide-little-trick-improvimg-nexus-9-t3224931).
