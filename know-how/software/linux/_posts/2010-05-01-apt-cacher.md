---
title: apt-cacher(-ng)
layout: default
created: 2009-10-12 23:30:40 +0200
updated: 2010-05-01 13:57:04 +0200
toc: false
tags:
  - know-how
  - software
  - linux
  - software
  - apt
---
[apt-cacher](apt://apt-cacher) and [apt-cacher-ng](apt://apt-cacher-ng) both act as a proxy between `apt-get` or
`aptitude` and the Debian repositories. It stores the packages upon first request and loads them from cache on further
ones. If you have 2 or more Ubuntu PCs in your network, you can save a massive amount of bandwidth with it.


Installation
============

1. Install the package [apt-cacher](apt://apt-cacher) or [apt-cacher-ng](apt://apt-cacher-ng)
1. Make sure it is running (sometimes you might have to edit a file `/etc/default/apt-cacher` or
   `/etc/default/apt-cacher-ng` to enable it)
1. Now do the following on **ALL PCs** in your network - including the one with `apt-cacher(-ng)` installed:
    * Create a file `/etc/apt/apt.conf.d/01proxy` with the following contents: (replace the IP by the IP of the PC with
      `apt-cacher(-ng)` installed)

            Acquire::http::Proxy "http://192.168.0.1:3142";

    * Create a file `/etc/apt/apt.conf.d/99clean` with the following contents: (this will keep the local apt-cache clean)

            DPkg::Post-Invoke {"/usr/bin/find /var/cache/apt/archives/ -type f -mtime 2 -name *.deb -exec /bin/rm -f {} \; || true";};

That was it. All packages will be cached on the `apt-cacher(-ng)`-PC and the local caches will be kept clean.
