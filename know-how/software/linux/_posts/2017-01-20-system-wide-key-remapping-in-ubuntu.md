---
created: 2017-01-20 11:14:41 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2017/01/20/system-wide-key-remapping-in-ubuntu.html
tags:
- know-how
- software
- linux
- keyboard
- remapping
- keycode
title: System wide key remapping in Ubuntu
toc: false
updated: 2017-01-20 11:14:41 +0100
---

On my [hp Spectre x360]({% post_url 2016-07-26-hp-spectre-x360 %}), the <kbd>Ins</kbd> key is only
reachable via the <kbd>Fn</kbd> key as in <kbd>Fn</kbd>+<kbd>PrtScr</kbd>.

So I wanted to swap both keys. System-wide - so not only in X (using `xev`).

I finally found [this](http://superuser.com/questions/290115/how-to-change-console-keymap-in-linux)
which suggested the following procedure:

1. Dump the current keyboard layout:

        sudo dumpkeys > backup.kmap

1. Check the keycodes you want to change (<kbd>Ins</kbd> = 110, <kbd>PrtScr</kbd> = 99):

        sudo showkey

   (When you're done, wait 10 seconds for it to exit automatically.)

1. Copy the dumped keyboard layout:

        cp backup.kmap ins-prt-swap.kmap

1. Edit it to swap all occurrences of `99` to `110` and vice versa, e.g. change:

        keycode  99 = ...
        ...
        keycode 110 = Insert.....

   to

        keycode 110 = ...
        ...
        keycode  99 = Insert.....

1. The suggested `sudo setcon --save` didn't work for me, but Ubuntu loads the active keymap from
   the file `/etc/console-setup/cached.kmap.gz`. So I gzipped my `ins-prt-swap.kmap` and copied the
   resulting `ins-prt-swap.kmap.gz` to `/etc/console-setup/cached.kmap.gz`.