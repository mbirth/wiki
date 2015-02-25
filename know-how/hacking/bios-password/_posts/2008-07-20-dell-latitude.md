---
title: DELL Latitude series
layout: default
created: 2008-07-20 22:26:53 +0200
updated: 2008-07-20 22:25:53 +0200
toc: false
tags:
  - know-how
  - hacking
  - hardware
  - bios
  - passwords
  - dell
  - latitude
---
These ones are something different. DELL notebooks save their BIOS password in an EEPROM-chip so it isn't deleted when
you short-circuit the BIOS battery or something like that.

Also there's no jumper/DIP-switch which disables the password. Nevertheless, there are three different ways to get such
things fixed:

1. Solder out the EEPROM and replace it with an empty one (this will result in service tag loss), or
1. Generate an universal password for this device (only works for tags ending with `-D35B` for now), or
1. Short pin 6 or 7 of the EEPROM to ground. See [General strategy]({% post_url 2009-10-30-bios-passwords %}#dell_notebooks) for more info.

I will describe the second one here.


Service tags ending with -D35B
==============================

Switch on the notebook until you get the password-entry screen, which should look like this one:  
![Password prompt of a DELL Latitude C610]({{ site.url }}/assets/delllati.jpg)

Notice the service tag number **8WG030J-D35B** which is the key to the password. Now hack this number into the nice tool ([Latitude_MasterPW.exe]({{ site.url }}/assets/latitude.zip),
there is another tool included for Latitude XPi) and generate your master password.

Enter the service tag **EXACTLY** as it appears in the BIOS (all upper case letters) and get your master password
("jgnijfyj" in this case).

Now enter this master password on the password prompt (Remember that on German keyboards, z ⇔ y!), **hold down the
<kbd>Ctrl</kbd>-key and press <kbd>Enter</kbd> twice**. Et voilà!

I don't know why, but somehow, my service tag changed to **8WG030J-595B** (either it was because of this password
breach or because of a BIOS upgrade). The generated universal password doesn't work with this new service tag.

Also read the DELL-section under [General strategies]({% post_url 2009-10-30-bios-passwords %}#dell_notebooks).


[Back to overview.]({% post_url 2009-10-30-bios-passwords %})
