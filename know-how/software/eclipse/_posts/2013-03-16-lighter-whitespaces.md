---
created: 2008-07-15 00:18:52 +0200
language: en
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/07/15/lighten-up-whitespace-characters.html
tags:
- know-how
- software
- ezpublish
title: Lighten up whitespace characters
toc: false
updated: 2013-03-16 17:26:35 +0100
---

If you enable the checkbox *Show whitespace characters* under General → Editors → Text Editors, the characters are a
bit too offensive. Sadly, there's no option to change the transparency of them. The default (and fixed) value is
`64h`/`FFh` = `100d`/`255d` (ca. 40% visible / 60% transparency). You can only change the value using a hex-editor:

* open the file `org.eclipse.jface.text_3.3.1r331_v20070629.jar` in the plugins folder of Eclipse using an archiver
  (e.g. Total Commander)
* unpack the contained file `WhitespaceCharacterPainter.class` out of `/org/eclipse/jface/text/`
* open that file in a hex-editor (e.g. Hex-Workshop, XVI32)
* jump to the location `0x1769` and find the following lines:  
  
        001750: 0a 2a b4 01 1f b6 01 3c 36 0a 2a b4 01 1d 99 00
        001760: 21 2b b6 01 4e 36 0b 2b 10>64<b6 01 51 2a 2b 15
        001770: 09 15 0a b7 01 38 2b 15 0b b6 01 51 a7 00 0c 2a
  
  (The marked `64` is the value described above. `00h` = white/transparent, `FFh` = black.)

<font color="#ffffff">00</font><font color="#eeeeee">11</font><font color="#dddddd">22</font><font color="#cccccc">33</font><font color="#bbbbbb">44</font><font color="#aaaaaa">55</font><font color="#999999">66</font><font color="#888888">77</font><font color="#777777">88</font><font color="#666666">99</font><font color="#555555">AA</font><font color="#444444">BB</font><font color="#333333">CC</font><font color="#222222">DD</font><font color="#111111">EE</font><font color="#000000">FF</font>

`33h` would be 80% transparency and is a nice value.

After saving your changes, put the file back into the .jar and run Eclipse.