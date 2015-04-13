---
title: mail-notification
layout: default
created: 2009-04-10 23:34:36 +0200
updated: 2009-04-10 23:34:36 +0200
toc: false
tags:
  - know-how
  - software
  - linux
---
Keyring error
=============

If you get the following error message:

> The password of IMAP/POP3 mailbox xxxxx could not be saved to the keyring.

Check whether `gnome-keyring-daemon` runs. If not, just run it once and the `mail-notification` should work again.
