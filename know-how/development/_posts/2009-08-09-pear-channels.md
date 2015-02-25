---
title: PEAR Channels
language: en
layout: default
created: 2009-02-11 20:29:22 +0100
updated: 2009-08-09 13:35:46 +0200
toc: false
tags:
  - know-how
  - development
  - php
  - pear
---
Some channels for PEAR. Use this to add them:

    pear channel-discovery <url>

* pear.php.net
* pecl.php.net
* components.ez.no
* pear.phpdb.org
* pear.phing.info
* pear.symfony-project.com
* pear.phpunit.de
* pear.php-baustelle.de
* pear.zeronotice.org
* pear.phpontrax.com
* pear.agavi.org
* phpsavant.com


Unsupported protocol
====================

If you get the following error message, you have to refresh the channels `pear.php.net` and `pecl.php.net`:

    pear.php.net is using a unsupported protocal - This should never happen.
    install failed

The easiest solution was found in the last post of a thread in the [PEAR Forum](http://www.pear-forum.org/post-5065.html):

* go to `/usr/share/php/.channels/`
* delete the files `pear.php.net.reg` and `pecl.php.net.reg`
* do a `sudo pear update-channels`


*[PEAR]: PHP Extension and Application Repository
