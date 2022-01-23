---
created: 2010-04-02 18:06:40 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2010/04/02/appcelerator-titanium-framework.html
tags:
- know-how
- software
- framework
- appcelerator
- titanium
title: appcelerator Titanium Framework
toc: true
updated: 2010-06-08 09:53:45 +0200
---

* **Homepage:** <http://www.appcelerator.com/>
* **API Docs:** <http://developer.appcelerator.com/apidoc/mobile/>


Generate JSDoc file for your IDE
================================

To get auto-completion for the Titanium framework, you have to let your IDE know of all available methods and
properties. Most IDEs can do this by parsing a JavaScript file. If you add JSDoc tags to it, you will even have
descriptions, parameter hints, etc.

For more information about JSDoc, take a look at these links:

* <http://code.google.com/p/jsdoc-toolkit/wiki/TagReference>
* <http://code.google.com/closure/compiler/docs/js-for-compiler.html>
* <http://jsdoc.sourceforge.net/#tagref>

My very first try was with the 0.8.3 API and I created a JSDoc tagged JavaScript file by hand. The file is still
available here: [titanium.js]({{ site.url }}/assets/titanium.js)

Now there's a file [apicoverage.json](http://github.com/appcelerator/titanium_mobile/blob/master/site_scons/apicoverage.json)
available from the *Titanium Mobile* Git repository which contains names and descriptions of all the functions.
You just have to get this into JavaScript code for your IDE to understand.

I wrote a Python3 script, which parses the JSON of the `apicoverage.json` file and generates a dummy JavaScript
file for your IDE. To get that file, first run:

    wget -N http://github.com/appcelerator/titanium_mobile/raw/master/site_scons/apicoverage.json

After that, download this script, put it into the same directory and on Linux make it executable (`chmod a+x genapidoc.py`):

  * [genapidoc.py]({{ site.url }}/assets/genapidoc.py)

Now you only have to run this command:

    genapidoc.py > Titanium.js

or on Windows run this (make sure you installed [Python 3.x.x](http://python.org/download/)):

    python.exe genapidoc.py > Titanium.js


Problems in Linux
=================

Doesn't start on Lucid
----------------------

If *Titanium Developer* doesn't start on *Ubuntu Lucid* complaining about `/usr/lib/libgtk-x11-2.0.so.0`, go
to `$TITANIUM/runtime/linux/1.0.0` and delete the files `libgobject*`, `libglib*`, `libgio*` and `libgthread*`.
Maybe repeat that in older versions of the Runtime.

See [support.appcelerator.net](http://support.appcelerator.net/discussions/support/2361-titanium-developer-10-wont-start-on-ubuntu-1004).


Can't install to device
-----------------------

If you can't install apps to your device connected via USB, check the list of attached devices running the following
command (from the Android SDK):

~~~
$ ./adb devices
List of devices attached 
????????????    no permissions
~~~

If you get a device listed as `????????????    no permissions`, do the following:

~~~
$ sudo ./adb kill-server
$ sudo ./adb start-server
$ ./adb devices
List of devices attached 
HT9CVPxxxxxx    device
~~~

See [this thread](http://www.google.com/support/forum/p/android/thread?tid=08945730bbd7b22b&hl=en) for details.