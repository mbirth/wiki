---
title: Nintendo Wii Encryption Keys
language: en
layout: default
created: 2009-01-30 12:56:51 +0100
updated: 2009-01-30 13:00:54 +0100
toc: false
tags:
  - know-how
  - hacking
  - hardware
  - nintendo
  - wii
---
To use these keys with e.g. [Segher's Wii.git](http://wiibrew.org/wiki/Segher's_Wii.git), you have to put them in binary
files, i.e. use a Hex-Editor and paste these keys so that you get a 16 Byte long file for each key. Segher's tools
expect them to be located in `~/.wii/<keyname>`, e.g. `~/.wii/common-key`.

common-key
==========

    ebe42a225e8593e448d9c5457381aaf7


sd-key
======

    ab01b9d8e1622b08afbad84dbfc2a55d


sd-iv
=====

    216712e6aa1f689f95c5a22324dc6a98


md5-blanker
===========

    0e65378199be4517ab06ec22451a5793
