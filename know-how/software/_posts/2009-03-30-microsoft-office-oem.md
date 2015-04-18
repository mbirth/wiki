---
title: Microsoft Office OEM
layout: default
created: 2009-03-30 12:26:11 +0200
updated: 2009-03-30 12:26:11 +0200
toc: false
tags:
  - know-how
  - software
  - microsoft
  - office
---
Install Fujitsu-Siemens version
===============================

If you want to install a *Microsoft Office* and you happen to only have an OEM version from Fujitsu-Siemens, you'll
notice that it refuses to install on any Non-FSC-PC. But after some peeking around on the CD, you'll find a
suspiciously large file `Install\OFF_FSC.EXE` with around 250 MiB.

Taking a look at it reveals something strange:

~~~
00000000 47 4F 4E 49 │ C3 91 0E 8A │ 69 A9 79 79 │ 5C 36 B8 1E  GONIÃ...i©yy\6¸.
00000010 74 B0 52 C4 │ 64 20 8C C5 │ 13 A0 99 10 │ 27 7B 2E 27  t°RÄd .Å. ..'{.'
00000020 6D 87 BF 73 │ 04 8A AC 32 │ 0A 84 03 A9 │ 46 98 BE 71  m.¿s..¬2...©F.¾q
00000030 AC 61 32 5E │ BE 07 4C C8 │ B0 C1 95 92 │ 60 0B 08 4C  ¬a2^¾.LÈ°Á..`..L
00000040 1B 5F A5 15 │ C3 23 45 C4 │ 3F 63 78 9E │ 4C 12 8E 06  ._¥.Ã#EÄ?cx.L...
~~~

This doesn't look like a normal `EXE` file, it's missing the typical `MZ` header. Also the following data looks
encrypted, i.e. somewhat random.

Somewhat below you'll find some strings which have to do with unpacking - so the file seems to be a crypted
self-extracting archive.

Going several pages further down, you'll find something familiar:

~~~
00009FE0 00 00 00 00 │ 00 00 00 00 │ 00 00 00 00 │ 00 00 00 00  ................
00009FF0 00 00 00 00 │ 00 00 00 00 │ 00 00 00 00 │ 00 00 00 00  ................
0000A000 4D 53 43 46 │ 00 00 00 00 │ 12 91 43 0E │ 00 00 00 00  MSCF......C.....
0000A010 2C 00 00 00 │ 00 00 00 00 │ 03 01 01 00 │ 7E 00 00 00  ,...........~...
0000A020 00 00 00 00 │ 5D 11 00 00 │ 5D 1D 01 00 │ C1 00 00 00  ....]...]...Á...
0000A030 00 00 00 00 │ 00 00 0F 2F │ 2F 79 03 00 │ 41 55 54 4F  .......//y..AUTO
0000A040 52 55 4E 2E │ 49 4E 46 00 │ 31 A8 19 00 │ C1 00 00 00  RUN.INF.1¨..Á...
0000A050 00 00 0F 2F │ BA 58 03 00 │ 43 43 35 36 │ 31 34 30 31  .../ºX..CC561401
0000A060 2E 43 41 42 │ 00 3A F1 04 │ 00 F2 A8 19 │ 00 00 00 0F  .CAB.:ñ..ò¨.....
0000A070 2F BC 58 03 │ 00 43 44 35 │ 36 31 34 30 │ 31 2E 43 41  /¼X..CD561401.CA
0000A080 42 00 F3 99 │ 1F 00 2C 9A │ 1E 00 00 00 │ 0F 2F C6 58  B.ó...,....../ÆX
0000A090 03 00 43 46 │ 35 36 31 34 │ 30 31 2E 43 │ 41 42 00 C3  ..CF561401.CAB.Ã
0000A0A0 C6 0A 00 1F │ 34 3E 00 00 │ 00 0F 2F CA │ 58 03 00 43  Æ...4>..../ÊX..C
0000A0B0 4C 35 36 31 │ 34 30 31 2E │ 43 41 42 00 │ 9C CC 12 00  L561401.CAB..Ì..
~~~

`MSCF` stands for *MicroSoft Cabinet File*. It's a header for the standard `CAB` archives used to distribute software.
The `AUTORUN.INF`, `CC561401.CAB`, etc. are also a clear sign that this seems to be the index of the archive. The
letters `MSCF` are mentioned several times before this location but there was no file index near them. This one here is
clearly a standard CAB file.

So now take your favorite Hex-Editor and cut everything up to the `MSCF` header. The new file has to begin with `MSCF`.
Rename it to something `.cab` and use your favorite archiving tool to unpack it. Et voilà!



*[OEM]: Original Equipment Manufacturer
*[CD]: Compact Disc
*[MZ]: Mark Zbikowski
*[CAB]: Cabinet
