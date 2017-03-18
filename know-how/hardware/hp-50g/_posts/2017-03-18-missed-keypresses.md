---
title: HP 50g and missed keypresses
layout: default
language: en
created: 2017-03-18 22:29:30 +0100
updated: 2017-03-18 22:29:30 +0100
toc: false
tags:
  - know-how
  - hardware
  - hp
  - 50g
  - calculator
---
The default key debouncing wait time in the HP 50g is very long so that it misses lots of
keypresses when typing fast. E.g. when typing `500` the calculator only registers `50`. This
behaviour is controlled by the `KEYTIME` setting.

The `KEYTIME` setting specifies the number of processor ticks, any further keypresses are ignored
after a key was pressed. The default value is **1138** which resembles about 140 ms.

Setting this to e.g. **500** (~61 ms) makes entering numbers much more reliable. Some users even
disabled it by setting it to **0** and had no problems at all.


Changing the value
==================

To set the `KEYTIME` setting to **500**, press the following keys (in RPN mode):

1. <kbd>5</kbd><kbd>0</kbd><kbd>0</kbd>
1. <kbd>ENTER</kbd>
1. <kbd>ALPHA</kbd><kbd>ALPHA</kbd>
1. <kbd>K</kbd><kbd>E</kbd><kbd>Y</kbd><kbd>T</kbd><kbd>I</kbd><kbd>M</kbd><kbd>E</kbd>
1. <kbd>STO ▶</kbd>

But this only works for the current session. After a reboot of the device, the value will be back
to the default value of **1138** again.


Changing the value on bootup
============================

To have this value changed on every bootup of the calculator, we have to save the instructions
to a special variable called `STARTUP`. To do this, press the following keys (in RPN mode):

1. <kbd>↱</kbd><kbd>+</kbd> (this will insert `<< >>` and place the cursor in the middle)
1. <kbd>5</kbd><kbd>0</kbd><kbd>0</kbd>
1. <kbd>↱</kbd><kbd>0</kbd> (this will insert a `→`)
1. <kbd>ALPHA</kbd><kbd>ALPHA</kbd>
1. <kbd>K</kbd><kbd>E</kbd><kbd>Y</kbd><kbd>T</kbd><kbd>I</kbd><kbd>M</kbd><kbd>E</kbd>
1. <kbd>ENTER</kbd>
1. <kbd>S</kbd><kbd>T</kbd><kbd>A</kbd><kbd>R</kbd><kbd>T</kbd><kbd>U</kbd><kbd>P</kbd>
1. <kbd>STO ▶</kbd>

This stores the instruction into the special variable `STARTUP` which gets evaluated on every
bootup.
