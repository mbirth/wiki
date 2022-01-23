---
created: 2008-07-15 22:02:53 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/07/15/max-10-simultaneous-smb-connections.html
tags:
- know-how
- software
- windows
- samba
- smb
title: Max 10 simultaneous SMB-connections
toc: false
updated: 2008-07-15 22:02:53 +0200
---

Windows XP Professional only allows 10 simultaneous connections to shares and printer spoolers. The eleventh user gets
a *System error #71* message. The unused connections get freed after 30 minutes which is a bit late since often you
just need a few files or to print some pages but this blocks the connection for 30 minutes.

To make things better, you can issue the command

    net config server /autodisconnect:3

which sets the limit to 3 minutes. You can even set this to `0` to free a slot almost instantly.

This value can also be changed in the registry. The key is `HKLM\System\CurrentControlSet\Services\LanmanServer\Parameters`.

More information can be found at [KB138365](http://support.microsoft.com/kb/138365).


The really evil can fly to [Google Cache](http://66.102.9.104/search?q=cache:kHQ_0PQXJDQJ:tachyon.zapto.org/binaries/antiwpa/LanServerNoConnLimit/patched.txt+srvsvc.dll+%226a+0a%22&hl=en&ct=clnk&cd=3)
and get a disassembled part of the `srvsvc.dll` with the needed changes to disable the limit. (Only works for XP-SP2!)

The last resort is to upgrade to *Windows Server*. Another thought might be to connect to the shares from a Linux box
and let the clients connect to this Linux machine.