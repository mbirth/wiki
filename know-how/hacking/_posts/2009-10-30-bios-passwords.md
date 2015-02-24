---
title: BIOS Passwords
language: en
layout: default
created: 2008-07-16 00:44:43 +0200
updated: 2009-10-30 22:53:46 +0100
toc: true
tags:
  - know-how
  - hacking
  - hardware
  - bios
  - passwords
---
[Diese Seite auf Deutsch.]({% post_url 2009-10-30-bios-passwords-de %})

Since Notebook-manufacturers know of the problem of forgotten passwords, they often implement easy ways to remove BIOS
passwords into their notebooks.

<p><div class="notewarning" markdown="1">
**WARNING!  
I don't take any responsibility for damages your notebook could get by using these tricks.**
</div></p>


Removing the battery
====================

Remove AC power and remove the battery. Now find and remove the BIOS battery for about a minute and then reinsert it.
If this doesn't work, try it with 10 minutes or even 20.

If you can't easily remove the BIOS battery, you can short it for about 1 to 2 seconds. But never short it for longer
because it will get hot and could even explode.

The BIOS battery is mostly located somehwere below the notebook's keyboard. To remove the keyboard, there are sometimes
only some clips holding the whole thing - but sometimes, you have to disassemble half of the notebook just to get to
the inside.

This trick works with almost any notebook - even with the "high secure" [Fujitsu-Siemens Lifebook E-series]({% post_url 2008-07-20-fujitsu-lifebook-e-series %}).

<img src="{{ site.url }}/assets/baycomwb2_5.jpg" alt="" width="320" />


Reset-switch
============

If you can't get rid of the password by removing the BIOS battery, there often is a Jumper or DIP-switch, which
disabled the password. A Jumper could be located in the RAM-extension slot. Also take a look at the mainboard below the
keyboard. Sometimes, the Jumpers are even labeled - if not, just try.

With DIP-switches - if you found some - you should start trying with the highest switch, because the first ones mostly
define the processor speed and you could possibly destroy your processor. You should - with the notebook switched off -
switch the highest switch to the opposite position, switch on the notebook, check whether the BIOS password is still
requested and an empty password doesn't work (just press ENTER at the prompt). If so, switch off the notebook, switch
the highest switch to its initial position and try the same with the next switch.

If you found the correct switch, do the following before switching the switch back to its initial position: Go to
BIOS-Setup and clear the password there or define a new one. Afterwards, switch off the notebook, switch the DIP-switch
to its initial position and reassemble the notebook.

<img src="{{ site.url }}/assets/acer203tx3.jpg" alt="" width="320" />


DELL notebooks
==============

DELL-notebooks store the BIOS-password in an 24C02-EEPROM and therefore, the password can't be deleted by removing the
BIOS-battery. Also, there's no Jumper or DIP-switch, which resets the password. But you will notice a so-called
"Service Tag" at the password prompt. With it, the DELL-Hotline is able to generate an unlock-password. If you want to
save the stress with the Hotline, you can find programs in the Internet which generate an unlock-password from the
Service-Tag. Sadly, I only found a password-generator for Service-Tags ending with -D35B.

If your notebook has a different Service-Tag, there's an alternative:  
You can manually erase the EEPROM. But you have to find it first. Somewhere on your mainboard should be an 8-pin IC
with "24C02" printed on it. Sometimes, it's located near the CD-ROM or Touchpad. If you found it, notice the
manufacturer and go to his homepage to download the datasheet of that IC. There should be mentioned the correct pin
for "clear" or "reset". Short-circuit this pin to ground. There could be a test-contact near the IC leading to the
appropriate pin. Just short it to ground for some seconds. But pay attention not to short the wrong pin to ground -
this could destroy the notebook. After this procedure, the BIOS password should be deleted.
[This homepage](http://www.darkmagic.org/mike/dell-tag/dell/dell.html) contains a really good explanation of this
procedure. Some more infos are on the DELL page.

<img src="{{ site.url }}/assets/delllati.jpg" alt="The password prompt of DELL notebooks. Here you can see the service tag." width="320" />


Standard password
=================

By the way: Notebooks of the first generation used to have standard passwords to enable access to them. For AWARD-BIOS
there were e.g. `LKWpeter` and `aLLy` - depending on the BIOS' version. You can find lists of such standard passwords
on the net. For current BIOS-variants and -versions, there are no known standard passwords.


Special handling
================

<ul>
{% for page in site.categories.bios-password %}
    <li><a href="{{ page.url }}">{{ page.title }}</a>{% if page.language == 'de' %} (German){% endif %}</li>
{% endfor %}
</ul>


If everything fails
===================

If you can still boot and only need the password to the BIOS-setup, Christophe Grenier's
[CmosPwd](http://www.cgsecurity.org/wiki/CmosPwd) will help you in most cases. It reads out the CMOS-memory and tries
to decrypt the password stored there. For SONY Vaio notebooks, look [here]({% post_url 2008-07-20-sony-vaio %}).
