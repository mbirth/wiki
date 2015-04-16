---
title: Skype <=> SIP Interlink
layout: default
created: 2009-05-17 13:06:06 +0200
updated: 2009-05-17 13:06:06 +0200
toc: false
tags:
  - know-how
  - software
  - sip
  - skype
  - conference
---
To connect Skype to a SIP-PBX (e.g. Asterisk), there's only one free application available:

* [SipToSis](http://www.mhspot.com/sts/siptosis.html) (former *SippySkype*)

There are also some (Windows-)apps for money, like:

* [Uplink Skype to SIP](http://www.nch.com.au/skypetosip/)
* [PSGw](http://www.rsdevs.com/psgw.shtml)

Since you can't integrate these apps into Asterisk, you need to add an extension for each Skype account (1 per PC).

If somebody calls via Skype, you can let SipToSis dial a specific number (internal/external) via the Asterisk PBX. Most
probably you want it to dial your own SIP extension.

If you call the Skype extension, you can let SipToSis dial a specific Skype contact. Maybe you could add another
virtual PBX so that you could dial `<SkypeContact>@<SipToSis-IP>` on your VoIP-phone to call a specific Skype contact -
but your VoIP-phone then needs to be registered with this virtual PBX.


SipToSis (SippySkype)
=====================

Since this program is free and written in Java, it's the perfect choice for now. Configuration might be a bit tricky
though.


Configuration
-------------

In this example, there are following values:

| Value          | Description    |
|:--------------:|:---------------|
|192.168.1.162   |IP of the PC running Skype and SipToSis|
|192.168.1.245   |IP of the Asterisk PBX                 |
|88              |SipToSis-extension on the Asterisk PBX |
|44@192.168.1.212|Extension and IP of the VoIP-phone to use for incoming Skype calls|


### siptosis.cfg (former sippyskype.cfg)

{% highlight ini %}
via_addr=192.168.1.162
host_port=5060
contact_url=sip:88@192.168.1.245:5060
from_url="Skype Gateway" <sip:88@192.168.1.245:5060>
username=88
realm=asterisk
passwd=skype
do_register=yes
{% endhighlight %}

So this general description should work:

|Setting      |Note          |
|:------------|:-------------|
|`via_addr`   |IP of SipToSis/SippySkype|
|`host_port`  |Desired Port of SipToSis |
|`contact_url`|`sip:`//Asterisk-Skype-Extension//`@192.168.1.245:5060`|
|`from_url`   |some name + the `contact_url`|
|`username`   |Asterisk-Skype-Extension     |
|`realm`      |might be not used            |
|`passwd`     |Asterisk-Skype-Ext-Passwort  |
|`do_register`|Should SipToSis register itself in the PBX? Yes!|

The remaining options can be left at default values.


### SkypeToSipAuth.props

This file defines the receivers of the calls. You can route incoming calls of different Skype contacts to different SIP
accounts. But in most cases you want to receive all calls on one specific VoIP phone.

    *,sip:44@192.168.1.212:5060


<p><div class="noteclassic" markdown="1">
You have to specify the IP of the **VoIP-phone** which should receive the calls. **NOT** the IP of the Asterisk PBX.
</div></p>
