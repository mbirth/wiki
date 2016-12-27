---
title: iPhone Carrier Settings
layout: default
created: 2009-06-20 21:20:46 +0200
updated: 2009-06-20 21:20:46 +0200
toc: false
tags:
  - know-how
  - hardware
  - apple
  - iphone
  - settings
---
To enable MMS and Tethering, you might have to install a carrier-specific file for your carrier.

* **T-Mobile Germany:** [24100.net](http://www.24100.net/2009/03/t-mobile-germany-vodafone-germany-iphone-os-30-mms/)
* the same file with more features enabled (see next section): [Download here]({{ site.url }}/assets/tmobile_germany.ipcc)


Details
=======

If you look at the `.ipcc`-file you'll notice that it's a standard ZIP archive. Inside you'll find a folder `Payload`
and a folder with your carrier's name. There you'll find a file `carrier.list` along some others. It is an XML file
with all the features for your carrier. Some interesting snippets:

{% highlight xml %}
        <key>AllowEDGEEditing</key>
        <true/>
        <key>AllowMMSCEditing</key>
        <true/>
        <key>AllowMMSEditing</key>
        <true/>
...
        <key>ShowCallForwarded</key>
        <false/>
        <key>ShowCallForwarding</key>
        <false/>
        <key>ShowTTY</key>  <!-- Show options for TTY devices -->
        <false/>
...
        <key>SupportMMS</key>
        <true/>
...
        <key>SupportsNITZ</key>   <!-- Network Identity and TimeZone (time synching via carrier) -->
        <false/>
{% endhighlight %}

You can upload the `.ipcc` file using the Developer version of iTunes 8.2.0.10[^1]. Or you can upload the file to a
webserver and download it to your phone. There's also the possibility of creating a single merged XML file which then
must be sent using the MIME type `application/x-apple-aspen-config`.


MMS Settings
============

The carrier file for T-Mobile Germany doesn't contain the MMS settings. So go to *Settings* → *General* → *Network*
→ *Cellular Data Network* and input the following under the **MMS** section:

* **APN:** `mms.t-d1.de`
* **Username:** `t-mobile`
* **Password:** `mms`
* **MMSC:** `mms.t-mobile.de/servlets/mms`
* **MMS Proxy:** `172.28.23.131:8008`
* **MMS Max Message Size:** 300
* **MMS UA Prof URL:** *\<leave blank\>*


[^1]: Or change the shortcut to iTunes so that it reads: `...\iTunes.exe" /setPrefInt carrier-testing 1`, Mac users run `defaults write com.apple.iTunes carrier-testing -bool TRUE`
