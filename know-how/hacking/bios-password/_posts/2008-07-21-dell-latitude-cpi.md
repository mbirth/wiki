---
created: 2008-07-21 19:19:56 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/07/21/dell-latitude-cpi-series.html
tags:
- know-how
- hacking
- hardware
- bios
- passwords
- dell
- latitude
title: DELL Latitude CPi series
toc: false
updated: 2008-07-21 19:19:56 +0200
---

Thanks to *Heiko Kehr*. (Everything was done according to [this manual](http://www.darkmagic.org/mike/dell-tag/dell/dell.html).)

1. You can easily remove the keyboard after loosing the six screws. Pay attention that you lift the keyboard equally on
   all sides and not only on one key. It would be sad to unlock this nice thing and then have a broken keyboard.  
   ![]({{ site.url }}/assets/dellcpi_1.jpg)
1. The yellow arrow marks the connector to the keyboard. If you are a used to handle with electronic devices, you may
   just flip the keyboard carefully leaving it connected. If you have opened up an electronic device for the first time,
   please, put everything back in place and bring your notebook to someone who does such things more often. Oh, now is
   a good time to remove all power sources from the notebook (Remove AC plug and battery!!).  
   ![]({{ site.url }}/assets/dellcpi_2.jpg)
1. To remove the CPU-circuit board without damaging it, you have to carefully remove the clamp marked with a blue arrow.
   It is just clipped on and you can later replace it without any need to bend it.  
   I then lifted the circuit board a bit on the right side to detach it from the connector. By pushing it back and
   lifting it one the left side (on the cooler) at the same time, it slowly slipped out of the connector.  
   ![]({{ site.url }}/assets/dellcpi_5.jpg)
1. I then thought of how I may power on the notebook while shorting the EEPROM. I had the idea of using wires which I
   may have cut from the outside, so that I did not have to disassemble the notebook again.  
   ![]({{ site.url }}/assets/dellcpi_3.jpg) ![]({{ site.url }}/assets/dellcpi_4.jpg)  
   ![]({{ site.url }}/assets/dellcpi_6.jpg)
1. Nevertheless, I opened it again to remove the wires, and for taking photos. But I didn't heat the soldering iron
   again, instead, I "broke the wires away".  
   I soldered them using a gas soldering iron. First, because of static electricity charge and second … because it was
   the first thing in my hand. After replacing all neccessary parts, I shorted the two wires with my right hand while
   powering on the notebook with the left one. The now seen message was very different from those I knew. Splitted
   wires and went into the BIOS. I changed settings to the best of my knowledge and rebooted. Pleasure!!  
   ![]({{ site.url }}/assets/dellcpi_7.jpg)


[Back to overview.]({% post_url 2009-10-30-bios-passwords %})