---
title: Apple iPhone SSH Access
layout: default
created: 2009-04-26 22:04:12 +0200
updated: 2009-04-26 22:09:55 +0200
toc: false
tags:
  - know-how
  - hardware
  - apple
  - iphone
  - ssh
---
You need a [jailbroken]({% post_url 2009-06-20-jailbreak %}) iPhone for this.


1. use Cydia to install the OpenSSH package
1. enable WLAN access and find your iPhone's IP (see Settings → Wi-Fi → *\<Your Network SSID\>* → IP Address)
1. under Linux type: `ssh <IP address> -l root`; for Windows use *PuTTY*
1. (the first connection will need about 20-30 seconds[^1] before you'll be asked to accept the host key)
1. use the following password: `alpine` (older iPhones used `dotty`)

[^1]: most probably the iPhone will generate some encryption keys here
