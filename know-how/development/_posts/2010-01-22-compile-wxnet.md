---
created: 2010-01-22 17:36:17 +0100
language: en
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2010/01/22/compile-wx.net.html
tags:
- know-how
- development
- wx-net
title: Compile wx.NET
toc: false
updated: 2010-01-22 17:48:52 +0100
---

* **Homepage:** <http://wxnet.sf.net/>

*wx.NET* is a *wxWidgets*-wrapper for Mono. The compilation is not really straight-forward as one is used to.

1. download the [wx.NET-...-Source.tgz](http://sourceforge.net/projects/wxnet/files/) file and unpack it into a folder
1. make sure you have the following packages installed (as of Ubuntu *Karmic*): [libwxgtk2.6-dev](apt://libwxgtk2.6-dev),
   [mono-mcs](apt://mono-mcs), [libmono-system-data1.0-cil](apt://libmono-system-data1.0-cil) and maybe some more, but
   these few were missing from my all-i-needed install
1. go to `Build/Linux` and rename the file `Defs.in.template` to `Defs.in`
1. edit that file and do the following changes: (Leave the rest as it is.)

        INCLUDE_STC = no
        # WXW_SOURCE_DIR = $(HOME)/packages/wx-widgets-2.6.4
        WXW_INSTALL_DIR= /usr

1. go to `Build/Common` and edit the file `wx-config-helper`: Comment out line #241 so that it looks like this:

        # SDie("output of '$wx_cmd' did not contain a -L/path/to/wx-widgets/lib/directory flag; are you sure wxWidgets has been built?") if ($wx_out !~ m#-L/#);

1. now go back to `Build/Linux` and run:

        make wxnet-core

1. find your library in `Bin/wx.NET.dll`