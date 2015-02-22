---
title: Feature Bits
layout: default
created: 2008-12-31 00:32:38 +0100
updated: 2008-12-31 00:32:38 +0100
toc: false
tags:
  - know-how
  - hardware
  - sandisk
  - sansa
  - fuze
  - features
  - hacking
---
The Sansa's have different features for different countries/regions. E.g. the Japanese radio frequencies ranging from 76 to 90 MHz
are partly used for Police radio and thus it is not allowed to tune to these *forbidden* frequencies.

SanDisk achieved this by removing the **Japan** region from the Radio region selector. In European models of the FUZE you will
only find "USA" and "World" as options in this setting.

Another example is the missing "Hebrew" language for "Arabic" regions and vice-versa.

Now the exciting part: If you download firmware files of the same version for different regions (e.g. from [daniel.haxx.se](http://daniel.haxx.se/sansa/v2fw.html))
you'll notice that ALL firmware files have the same checksum. So how does the player decide which features to enable and which to leave disabled?

As the freaks of the [RockBox](http://rockbox.org/) team pointed out in their [forums](http://forums.rockbox.org/index.php?topic=14064.msg113302#msg113302),
those feature bits are controlled by the **filename of the firmware file**.

The *Sansa Updater* of SanDisk seems to download a new firmware and put it into the root of the player named as `fuzp.bin`.
This way the firmware gets updated without changing any feature-bit. An European player stays an European player.

BUT, if you name the file `fuzpA.bin`, the player will set the feature bits for the USA and thus the **Japan** radio region
will become available. If you have the European version without FM radio, you might want to try naming the file `fuzpF.bin`
to get the FM radio feature. From what I've read, it is only disabled by firmware with the hardware still built-in.

To get most of your player, you should name the firmware file `fuzpT.bin` so that all feature bits get set.


Feature overview
================

|        |  F1  |  F2  |  F3  |  F4  |   F5   |  F6  |  F7  | Region               |
|:------:|:----:|:----:|:----:|:----:|:------:|:----:|:----:|:---------------------|
|A (`41`)|   X  |      |      |   X  |        |   X  |      | Americas / World     |
|E (`45`)|      |      |      |   X  |        |      |      | Europe (no FM radio) |
|F (`46`)|   X  |      |      |   X  |        |      |      | Europe               |
|G (`47`)|      |   X  |      |   X  |  `15`  |      |      | Israel (no FM radio) |
|H (`48`)|   X  |   X  |      |   X  |  `15`  |      |      | Israel               |
|M (`4d`)|      |      |   X  |   X  |  `17`  |      |      | Arabic (no FM radio) |
|N (`4e`)|   X  |      |   X  |   X  |  `17`  |      |      | Arabic               |
|P (`50`)|   X  |      |      |   X  |        |   X  |      | ?                    |
|S (`53`)|      |      |      |   X  |        |   X  |      | South America? (no FM) |
|T (`54`)|   X  |   X  |   X  |   X  |        |   X  |   X  | TEST mode firmware   |


**Description of the flags** (taken from the rockbox forums)

  * **Flag 1:** By looking at the way it varies, I'd bet that this flag means whether the radio is enabled or not. This seems consistent with bclick's findings.
  * **Flag 2** is only 1 for H, G and the test firmware. bclick reported that, in the m300, H and G were Hebrew and Greek respectively.
    So maybe this is an "allow alternate font" flag or something of the sort. Or, maybe, an option which controls whether Greek/Hebrew are present as options in the language selection dialog.
  * **Flag 3** is only 1 for M, N and the test firmware. Same as above with "Arabic" (as bclick reported).
  * **Flag 4** is always 1, so there's no way of knowing what it means.
  * **Flag 5** is probably the default font/character encoding. I recall bclick reporting that, in the m300, M and N looked "like Arabic" (flag = 17),
    G Greek, and H Hebrew (both flag = 15). All others use the default font. The fact that this is the only flag that the test mode does not set is also worth noting.
  * **Flag 6:** I don't really know. Maybe whether the "high" volume option will appear on the menu?  
    *mbirth: might be the "Japan" radio range*
  * **Flag 7** is (quite probably) whether the "test" option will appear on the menu or not. It is only 01 for T, the test firmware.
