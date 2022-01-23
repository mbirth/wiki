---
created: 2009-01-18 23:26:15 +0100
language: en
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/01/18/wii-mplayer-and-samba.html
tags:
- know-how
- hacking
- hardware
- nintendo
- wii
title: Wii MPlayer and Samba
toc: false
updated: 2009-01-18 23:26:15 +0100
---

The [MPlayer Christmas Edition](http://www.elotrolado.net/hilo_mplayer-christmas-edition_1157252) for Wii supports SMB
browsing. You can configure the login data of the desired SMB share through the `smb.conf` on the SD card as follows:

~~~
ip=192.168.1.100
share=Public
user=wii
pass=somethingelse
port=445
~~~

For it to work, you **MUST** use a dedicated user in Samba. Guest shares won't work. Also make sure you have
**`security=user`** set in your Linux `smb.conf`. For more information see
[this thread](http://www.tehskeen.com/forums/showpost.php?p=48403&postcount=76) as tehskeen.com.