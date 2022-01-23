---
created: 2009-04-20 22:07:23 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/04/20/develop-ios-apps.html
tags:
- know-how
- hardware
- apple
- iphone
- development
title: Develop iOS Apps
toc: false
updated: 2010-04-02 18:07:54 +0200
---

real Apps
=========

* XCode
* [appcelerator](http://appcelerator.com/) (write in JavaScript, but gets natively compiled to standalone apps)
    * currently my weapon of choice for iPhone+Android development, needs a Mac with XCode though for the iPhone part
    * see [appcelerator Titanium Framework]({% post_url 2010-06-08-appcelerator-titanium %})


Pseudo-Apps
===========

*Pseudo-Apps* is what I call the apps which are actually a bunch of HTML pages with JavaScript and some JavaScript-API
for accessing the iPhone internal features. These open in a WebKit-control so that they are basically some spiced up websites.

* [PhoneGAP](http://phonegap.com/) (HTML/JavaScript/CSS, gets compiled and can be offered through AppStore; standalone apps)
    * [nachbaur.com](http://blog.nachbaur.com/2009/04/native-ui-controls-in-phonegap-coming.html) native UI controls in PhoneGap
* [Big Five](http://www.big5apps.com/) (HTML/JavaScript/CSS, runs off the web → slow when switching pages, needs Big5-Launcher)


Web-Apps
========

* [iUI](http://joehewitt.com/files/iphone/navigation.html) iPhone navigation emulated using JavaScript and CSS ([Google Code project](http://code.google.com/p/iui/))
* [CiUI](http://www.clientcide.com/cnet-js-standards/ciui-cnet-iphone-ui/) similar to iUI
* [Moousture](http://neofreeman.freepgs.com/Moousture/iphone.html) finger-gesture control