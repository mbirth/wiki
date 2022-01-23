---
created: 2009-02-02 02:15:29 +0100
language: en
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/02/02/siemens-gigaset.html
tags:
- know-how
- hacking
- hardware
- siemens
- phone
title: SIEMENS Gigaset
toc: false
updated: 2009-02-02 22:27:14 +0100
---

Service mode
============

Hold keys **1**, **4** and **7** while turning on the phone. You will see the display test.


Service menu
============

Power-on the phone into service mode and type `76200` (4000er series) or `46395`[^1] (2000er and 3000er series) to get
to the service menu.

There you can check some options and on the next regular power-on, you'll see the checked infos on the display. To get
everything back to normal, repeat the procedure to uncheck these options.


Factory reset
=============

Power the phone on into service mode and type `4685463` to reset the phone to factory settings - **completely**, i.e.
incl. all phonebook entries. (The normal factory reset keeps them!)


Phone code
==========

If you forgot the phone code, there seem to be 2 ways:

**1.** Get into the service menu and type: `4#`, push *OK*, `*R#R`, *OK*, `8#9*` and the red button.

**2.** Get into the service menu, move the selection to the menu separator (`---------`) and type: `89376200`.


EEPROM patcher
==============

:warning: Doesn't work for all phones!

Get into service mode and type `337766`. This is useful to prepare older *SL74* models for MMS sending:

1. get into the EEPROM patcher
1. Type part #1: `63508 65443 32604` and confirm with *OK*
1. Type part #2: `58644 58028 59475` and *OK*
1. power off the phone and power on again


Approval test
=============

Hold **1**, **3** and **0** while powering on the phone. (**1**, **5**, **9** and **0** should also work)

Seems to be a mode where the phone sends data all the time so that you can test radiation.


[^1]: Zip code of *Bocholt* where the Gigasets are/were built