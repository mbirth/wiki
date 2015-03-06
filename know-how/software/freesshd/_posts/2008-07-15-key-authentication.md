---
title: Key Authentication in FreeSSHd
language: en
layout: default
created: 2008-07-15 00:23:35 +0200
updated: 2008-07-15 00:23:35 +0200
toc: false
tags:
  - know-how
  - software
  - freesshd
---
* generate key-pair using puttygen.exe
* enter desired username as *Key comment*
* *Save private key*
* copy OpenSSH-key out of the box *Public key for pasting into OpenSSH authorized keys file* and paste into a file,
  name that file after the username - without any extension
* put that file in the key directory of freeSSHd
* restart the *freeSSHd* service
