---
title: Compiling Kismet
layout: default
created: 2010-02-25 22:44:16 +0100
updated: 2010-02-26 00:15:54 +0100
toc: false
tags:
  - know-how
  - software
  - linux
  - software
  - kismet
---
You need the following libraries to successfully compile [Kismet](http://www.kismetwireless.net/download.shtml):

* [libncurses5-dev](apt://libncurses5-dev)
* [libncursesw5-dev](apt://libncursesw5-dev)
* [libpcap0.8-dev](apt://libpcap0.8-dev)
* [libpcre3-dev](apt://libpcre3-dev)
* [libnl-dev](apt://libnl-dev)
* [libcap-dev](apt://libcap-dev)

~~~
./configure --enable-airpcap
~~~


Install from PPA
================

You can also install the latest version using `aptitude` from [Festor's HackTools PPA](https://launchpad.net/~festor-deactivatedaccount/+archive/hack-tools).

<p><div class="noteimportant" markdown="1">
The shown URL to the PPA is wrong as Festor's account got deactivated. The correct URLs are:

    deb http://ppa.launchpad.net/festor/hack-tools/ubuntu jaunty main
    deb-src http://ppa.launchpad.net/festor/hack-tools/ubuntu jaunty main
</div></p>


*[PPA]: Personal Package Archive
