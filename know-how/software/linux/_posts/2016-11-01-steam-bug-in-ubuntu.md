---
created: 2016-02-20 14:56:35 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2016/02/20/steam-bug-in-ubuntu.html
tags:
- know-how
- software
- linux
- steam
- ubuntu
title: Steam bug in Ubuntu
toc: false
updated: 2016-11-01 23:35:32 +0100
---

Steam has the bad habit to not run after upgrades of the Steam software.

This is, because it uses its own libc which expects libraries not there in
Ubuntu.

To fix this, delete the file `libstdc++.so.6.0.18` from the following folders:

* `~/.local/share/Steam/ubuntu12_32/steam-runtime/amd64/usr/lib/x86_64-linux-gnu/`
* `~/.local/share/Steam/ubuntu12_32/steam-runtime/i386/usr/lib/i386-linux-gnu/`


Update October 2016
===================

It seems Steam has a few more bad duplicates to make it fail with Ubuntu 16.10.

This command removes all bad libs from the Steam distribution:

```bash
find ~/.local/share/Steam/ubuntu12_32/ \( -name "libgcc_s.so*" -o -name "libstdc++.so*" -o -name "libxcb.so*" -o -name "libgpg-error.so*" \) -print -delete
```

([Source](https://www.reddit.com/r/linux_gaming/comments/57clur/cant_run_steam_on_ubuntu_1610/))