---
title: Mono + WinForms
language: en
layout: default
created: 2008-10-08 15:23:14 +0200
updated: 2009-07-17 23:15:27 +0200
toc: false
tags:
  - know-how
  - development
  - mono
  - winforms
---
**Installation manual:** [mono-project.com](http://www.mono-project.com/WinForms_Designer#Installation)  
**Forum:** [UbuntuForums.org](http://ubuntuforums.org/showthread.php?t=468183)

The `System.Windows.Forms.dll` is contained in the [mono-winforms2.0-cil](apt://mono-winforms2.0-cil) package. The file
resides in `/usr/lib/mono/2.0/`. To make it show up in MonoDevelop, you might have to create a file `/usr/lib/pkgconfig/windows-forms.pc`
with the following contents:

~~~
prefix=/usr
exec_prefix=${prefix}
pkglibdir=${exec_prefix}/lib/mono/2.0

Name: System.Windows.Forms
Description: Windows Forms for Mono
Version: 2.0.0.0

Libs: -r:${pkglibdir}/System.Windows.Forms.dll
~~~

Afterwards you can add this as a Reference to your project in MonoDevelop.
