---
title: Midnight Commander (mc)
layout: default
created: 2009-06-21 12:01:38 +0200
updated: 2010-01-22 18:06:36 +0100
toc: false
tags:
  - know-how
  - software
  - linux
---
Open drop-down box
==================

To open a drop-down box (like those on the *FTP link…* dialog), press <kbd>Alt</kbd>+<kbd>H</kbd>.


ZIP contents not shown
======================

The later versions of `unzip` have a slightly different output format but the `uzip`-module still expects the old one.
To fix this, edit the file `/usr/share/mc/extfs/uzip` (as *root*) and change the line

{% highlight perl %}
# Set this to 1 if zipinfo (unzip -Z) is to be used (recommended), otherwise 0.
my $op_has_zipinfo = 0;
{% endhighlight %}

to

{% highlight perl %}
# Set this to 1 if zipinfo (unzip -Z) is to be used (recommended), otherwise 0.
my $op_has_zipinfo = 1;
{% endhighlight %}


Highlighter
===========

* [autohotkey.syntax]({{ site.url }}/assets/autohotkey.syntax) --- *AutoHotkey* scripts (Windows program!)
* [eztemplate.syntax]({{ site.url }}/assets/eztemplate.syntax) --- *eZ Publish* TPL files

Download the above files to `~/.mc/cedit` and add the following definitions (as needed) to `~/.mc/cedit/Syntax`.
If you don't have this file, copy it from `/usr/share/mc/syntax/` first.

~~~
file ..\*\\.ahk$ AutoHotkey\sFile
include autohotkey.syntax

file ..\*\\.(tpl|TPL)$ eZPublish\sTemplate
include eztemplate.syntax
~~~


*[FTP]: File Transfer Protocol
