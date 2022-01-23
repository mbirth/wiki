---
created: 2017-06-30 18:05:00 +0200
language: en
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2017/06/30/mmi-test-and-engineering-mode-on-the-blackberry-keyone.html
tags:
- know-how
- hardware
- blackberry
- keyone
- hidden
- mmi
- testmode
- engineering
- mode
title: MMI Test and Engineering Mode on the BlackBerry KEYone
toc: false
updated: 2017-06-30 18:05:00 +0200
---

<p><div class="notewarning" markdown="1">
**USE THESE AT YOUR OWN RISK!** Especially the Engineering Mode has a few options which can trigger
DTEK (showing your OS as compromised) and probably do worse.
</div></p>

(These codes seem to be standard for Alcatel phones. Interestingly, they work here, too.)



MMI Test
========

This is similar to the BBVE and provides various tests for all phone components. To open it, open
your phone dialer and type this:

<kbd>*</kbd> <kbd>#</kbd> <kbd>2<br/>ABC</kbd> <kbd>8<br/>TUV</kbd> <kbd>8<br/>TUV</kbd> <kbd>6<br/>MNO</kbd> <kbd>#</kbd>  ("AUTO")

To test single components or get traceability information (PRD number, manufacturing date, etc.),
tap "MANU". The buttons "AUTO1" and "AUTO2" run several tests automatically. To exit the test mode,
tap "MANU" and find the "Exit" option at the end of the list.



Engineering Mode
================

This mode has a few settings (black font on black background - hold your finger above where the
text should be for the background to become grey, making the text visible).


<kbd>*</kbd> <kbd>#</kbd> <kbd>*</kbd> <kbd>#</kbd> <kbd>2<br/>ABC</kbd> <kbd>6<br/>MNO</kbd> <kbd>3<br/>DEF</kbd> <kbd>7<br/>PQRS</kbd> <kbd>6<br/>MNO</kbd> <kbd>4<br/>GHI</kbd> <kbd>3<br/>DEF</kbd> <kbd>#</kbd> <kbd>*</kbd> <kbd>#</kbd> <kbd>*</kbd>  ("ANDROID")


<p><div class="noteimportant" markdown="1">
After enabling "root", some apps might be able to modify system settings and thus making DTEK show
the system as "compromised". The only way to reset this is to do a factory reset.
</div></p>