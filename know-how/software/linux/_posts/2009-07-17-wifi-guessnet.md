---
title: WiFi on bootup with guessnet
layout: default
created: 2008-11-15 18:32:48 +0100
updated: 2009-07-17 23:10:31 +0200
toc: false
tags:
  - know-how
  - software
  - linux
  - networking
  - wifi
---
Install the [guessnet](apt://guessnet) package. This will install the `guessnet-ifupdown` helper tool.

Now edit your `/etc/network/interfaces` file and add the following lines:

~~~
auto wlan0
iface wlan0 inet dhcp
    wpa-ssid CompanyWLAN
    wpa-proto WPA 
    wpa-key-mgmt WPA-PSK
    wpa-psk S3Cr3tKe4

mapping wlan0
    script guessnet-ifupdown
    map default: wlan0-open
    map autofilter: true  # look for wlan0- interfaces
    map timeout: 9
    map init-time: 9   # for slow drivers
    map verbose: true
    map debug: false

iface wlan0-home inet dhcp
    test wireless essid WLANatHOME closed
    wpa-psk S3cr3tH0meKe4
    wpa-key-mgmt WPA-PSK
    wpa-proto WPA 
    wpa-ssid WLANatHOME

# if all else fails: pick an open network
iface wlan0-open inet dhcp
    test wireless open
    wireless-essid any 
    wireless-mode auto
~~~

This will first try to connect to the **CompanyWLAN** network and if this is not found, try the **WLANatHOME**. If
everything fails, it will connect to any open Access Point.
