---
created: 2009-05-20 02:17:15 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/05/20/ios-firmware-unpacking.html
tags:
- know-how
- hardware
- apple
- iphone
- firmware
- hacking
title: iOS Firmware Unpacking
toc: false
updated: 2009-05-24 23:27:24 +0200
---

Preparations
============

You'll need the following tools:

* [genpass.c](http://www.theiphonewiki.com/wiki/index.php?title=GenPass)
* [vfdecrypt-linux.tar.gz](http://code.google.com/p/iphone-elite/downloads/list)
* [Xpwn](http://www.zdziarski.com/iphone-forensics/v2.x-Base/Xpwn/)
* [OpenSSL 0.9.8h sources](http://www.openssl.org/source/openssl-0.9.8h.tar.gz)

Now compile the `genpass.c`:

1. untar `openssl-0.9.8h.tar.gz` and rename the directory to just `openssl`
1. compile OpenSSL:  

        cd openssl/
        ./config && make

1. now go one directory up (I assume this is where you put the `genpass.c`) and compile it:  

        gcc genpass.c openssl/libcrypto.a -o genpass -I openssl/include

1. the `vfdecrypt-linux.tar.gz` comes with a precompiled binary. If you want to compile it on your own, do it like this:  

        gcc vfdecrypt.c ../openssl/libcrypto.a -I ../openssl/include/ -o vfdecrypt


Unpacking the ipsw file
=======================

The ***iP**hone **S**oft**w**are* `.ipsw` files are normal ZIP files. You can extract them with e.g. *IZArc*. The archives
contain several files and some disk images: the iPhone OS itself, an Upgrade image and a Restore image. These 3 interesting
files for the iPhone OS 3.0 BETA 5 are named like this (output of `unzip -l`):

~~~
Archive:  iPhone1,2_3.0_7A312g_Restore.ipsw
  Length     Date   Time    Name
 --------    ----   ----    ----
208347136  05-04-09 13:09   018-4965-005.dmg
 13086064  05-04-09 13:00   018-4970-005.dmg
 13086064  05-04-09 13:00   018-4972-005.dmg
~~~

The larger one is the iPhone OS image, the other two are the two loader images (upgrade/restore).


Decrypt a loader image
======================

You need an *initialization vector* and a *key* for decrypting this. For now, these are posted
on [theiphonewiki.com](http://www.theiphonewiki.com/wiki/index.php?title=VFDecrypt_Keys:_3.x#iPhone_3G_5).

Do this using the **Xpwntool**:

    ./xpwntool 018-4972-005.dmg ramdisk.dmg -iv 5508FD2D20F22048D4BC1780A0B1CAFF -k 198FEAFD04973FC8B07A052BE75B9288


Find encryption key for iPhoneOS
================================

The key might be already posted on [theiphonewiki.com](http://www.theiphonewiki.com/wiki/index.php?title=VFDecrypt_Keys:_3.x#iPhone_3G_5),
so maybe we don't need this step.

Use the compiled `genpass.c` to extract the encryption key from the decrypted loader image:

    ./genpass s5l8900x ./ramdisk.dmg 018-4965-005.dmg

This will give something like this:

~~~
passphrase: fcdf5fbe3bdcaeff0c3de34430ffb473ac34cb0b55efdc087e70aa7c558a1055
not block 0
not block 1
not block 2
not block 3
not block 4
not block 5
vfdecryptk: f7b1edb0ee9196a1393dccdc8d090051308b84ab322bf860cb1d3ca566ef2e29752fa79a
~~~


Decrypt iPhoneOS
================

This was a bit tricky as the syntax for `vfdecrypt` was wrong in all other manuals and even in the syntax help of `vfdecrypt` itself.

Run this:

    ./vfdecrypt -i018-4965-005.dmg -kf7b1edb0ee9196a1393dccdc8d090051308b84ab322bf860cb1d3ca566ef2e29752fa79a -odmg.dmg

(Note the missing *\<SPACE\>* between the parameter's name and value.)

This will give you a file `dmg.dmg` which is the decrypted iPhoneOS image.


Uncompress iPhoneOS image
=========================

Since the `dmg.dmg` (199 MiB) is a compressed image, you can't mount it directly in Linux. You first have to unpack it.
There's a tool `dmg` among the **Xpwntools**. So use it like this:

    ./dmg extract dmg.dmg dmg-raw.dmg

You'll get a 441 MiB file `dmg-raw.dmg`.


Mount iPhoneOS
==============

To go exploring the iPhoneOS files, you can now mount the uncompressed image like this:

    sudo mount -o loop -t hfsplus ./dmg-raw.dmg /mnt/iphoneimage

(Make sure that `/mnt/iphoneimage` exists and is an empty folder.)


Links
=====

* [mail-archive.com](http://www.mail-archive.com/linux4nano-dev@gna.org/msg00209.html) --- technical explanation
* [tungchingkai.blogspot.com](http://tungchingkai.blogspot.com/2009/04/how-to-decrypt-iphone-os-30-beta.html) --- how to decrypt the firmware file
* [theiphonewiki.com](http://www.theiphonewiki.com/wiki/index.php?title=VFDecrypt_Keys:_3.x#iPhone_3G_5) --- several encryption keys for iPhone firmware files