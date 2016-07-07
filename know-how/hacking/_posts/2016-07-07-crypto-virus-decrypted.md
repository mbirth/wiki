---
title: Crypto-Virus decrypted
language: en
layout: default
created: 2016-07-08 01:24:11 +0200
updated: 2016-07-08 01:24:11 +0200
toc: false
tags:
  - know-how
  - hacking
  - virus
  - cryptovirus
  - cryptor
---
A friend received the following mail from (supposedly) **FedEx International**:

![]({{ site.url }}/assets/cryptovirusmail.png)

The attached zip file contained a file `000794681.doc.js`. Since `.js` is a
known file type in Windows, it would show up as `000794681.doc` and you'd think
it's a Word file. But clicking on it will run the JavaScript using the *Windows
Scripting Host*.


The entry point
===============
The JavaScript looks like this ([GIST](https://gist.github.com/mars3142/3fc6a5522fcb752cdcbde3a5c1bca434)):

![]({{ site.url }}/assets/codedocjs.png)

The various `g55(number, string)` calls do nothing but sorting the string into
the number's position in an array. In the last but one line, the snippets in
the array are joined in the numeric order which turns out to be valid
JavaScript (or JScript) code again. In the last line, that code is executed.

If you omit the last line and, instead, output the contents of `h72`, you'll
get the unobfuscated code of the first stage: [GIST](https://gist.github.com/mbirth/d21bf52a024d0634f731e90dca94d254).

What this does is basically:

* Download 5 files (incl. backup servers if one is taken down) into `%TEMP%`
  * `a1.exe` (some Visual Basic program)
  * `a2.exe` (some NSIS installer, unpacks files to `AppData` then waits)
  * `a.exe` (php.exe, PHP runtime)
  * `php4ts.dll` (PHP library)
  * `a.php` (the actual encrypting PHP code)
* If all 3 PHP files are downloaded:
  * Write message into `a.txt`
  * Register autostart to open `a.txt` after login
  * Register extension `.crypted` to open/display `a.txt` whenever you click on
    a crypted file
  * Copy `a.txt` to your Desktop as `DECRYPT.txt`
  * Run the actual encryption of your files (see next chapter)
  * Display `a.txt`
  * Overwrite the `a.php` (containing the encryption key) with your key's
    identifier (so it can't be undeleted to get the actual key)
  * Delete `a.exe`, `php4ts.dll` and, of course, the `a.php`

The files to download are selected by 3 parameters:

* `ad`, the BitCoin address you should sent money to
* `id`, some identifier?, can be omitted
* `rnd`, file selector

The `ad` parameter is used to generate your encryption key (see next chapter).

The `rnd` parameter selects the file you download. It's made up of the current
mirror server's number (0..4) and the file to download (1..5). So it starts
with `01`, `02`, etc. and if that server doesn't answer, it'll continue with
`11`, `12` .. `15`. The files you get with `01`, `11`, `21`, etc. are the same.

However, there seem to be some variation with the files returned for `*1`. I'm
not sure if it's time based or randomly selected each time you start a
download. When downloading from different servers in a short time, you'll
mostly get the same file. In rare occasions, one (the last file downloaded)
was different. I've found 5 different variations which differ in length and
bytes starting from position 0x43cb6. Could also be random data to confuse
antivirus products.

I think the files `a1.exe` and `a2.exe` are there to either confuse some
antivirus products or just filler material for future use.

What's also interesting is, that the files are returned with a MIME type of
`image/png`. Also, the download only works when the user agent string
contains `Windows NT`, otherwise you'll get an empty (0 bytes) response.


Encryption code
===============

The downloaded PHP script (`a.php`) seems to be freshly obfuscated each time
you download it. But while the obfuscated version differs every time, the
deobfuscated code is the same.

Only with different `ad` values in the download URL, you'll get different
encryption keys. This is the BitCoin address you are asked to send money to.
This is also and identifier for your encryption key.

E.g., an `ad` value of `17DmGrhMXJcvsmj9tihgTRGAhACynuBmSo` returns a PHP
script with the key:

    MWKTbqXczBBUtCGOY6rxrB6Q2ECoaLUCGHDI5C54QaQHiP5010q99mPQNqAKkMkCtCicYss0uCCIDHPa5DiMDF6wYajvGFmaKJD4mtscEVSXPLUuduRStiug/kCCoA16swZZvi2c

If you change `ad` to `27DmGrhMXJcvsmj9tihgTRGAhACynuBmSo`, the key changes to:

    MmSWbqXczBBUtCGOY6rxrB6Q2ECoaLUCGHDI5C54QaQHiP5010q99mPQNqAKkMkCtCicYss0uCCIDHPa5DiMDF6wYajvGFmaKJD4mtscEVSXPLUuduRStiug/kCCoA16swZZvi2c
     ^^^


to be continued...
