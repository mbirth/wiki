---
title: Steam bug in Ubuntu
layout: default
created: 2016-02-20 14:56:35 +0100
updated: 2016-02-20 14:56:35 +0100
toc: false
tags:
  - know-how
  - software
  - linux
  - steam
  - ubuntu
---
Steam has the bad habit to not run after upgrades of the Steam software.

This is, because it uses its own libc which expects libraries not there in
Ubuntu.

To fix this, delete the file `libstdc++.so.6.0.18` from the following folders:

* `~/.local/share/Steam/ubuntu12_32/steam-runtime/amd64/usr/lib/x86_64-linux-gnu/`
* `~/.local/share/Steam/ubuntu12_32/steam-runtime/i386/usr/lib/i386-linux-gnu/`
