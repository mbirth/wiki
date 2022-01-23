---
created: 2009-08-31 00:29:08 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/08/31/rockbox-on-fuze.html
tags:
- know-how
- hardware
- sandisk
- sansa
- fuze
- rockbox
title: Rockbox on FUZE
toc: false
updated: 2009-12-28 16:31:28 +0100
---

<p><div class="notewarning" markdown="1">

**This only works for FUZEv1 models.** If your firmware version (see *System Settings* → *Info*) begins with `2.`,
you have a **v2** model and trying to use this Rockbox could render your device useless!

</div></p>


  * Latest Rockbox build: [rockbox-sansafuze.zip](http://build.rockbox.org/data/rockbox-sansafuze.zip)


Installing
==========

Please read the instructions in the official [RockBox for FUZE manual](http://download.rockbox.org/daily/manual/rockbox-sansafuze/rockbox-buildch2.html#x4-60002).


Themes
======

The display of the FUZE has 220x176 pixels and therefore the same dimension as the [iPod Color/Photo](http://themes.rockbox.org/index.php?target=ipodcolor)
or the [iRiver H3xx](http://themes.rockbox.org/index.php?target=h300).


Voice
=====

<p><div class="noteclassic" markdown="1">
The following instructions are not neccessary anymore as the *rbutil* now supports the FUZE
</div></p>

Use the [rbutil](http://www.rockbox.org/twiki/bin/view/Main/RockboxUtility) to generate `.voice` files.
Then open the file `.rockbox/langs/english.voice` (or whatever language you just created) up in a hex editor and change the
Byte at position 0x07 to `0x35` = 53d, the target ID of the Fuze. Now it should be recognized.
You can find all target IDs in the [rbutil.ini](http://svn.rockbox.org/viewvc.cgi/trunk/rbutil/rbutilqt/rbutil.ini).