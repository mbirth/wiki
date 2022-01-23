---
created: 2009-04-10 23:34:36 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/04/10/mail-notification.html
tags:
- know-how
- software
- linux
title: mail-notification
toc: false
updated: 2009-04-10 23:34:36 +0200
---

Keyring error
=============

If you get the following error message:

> The password of IMAP/POP3 mailbox xxxxx could not be saved to the keyring.

Check whether `gnome-keyring-daemon` runs. If not, just run it once and the `mail-notification` should work again.