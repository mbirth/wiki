---
created: 2010-03-04 13:41:08 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2010/03/04/citrix-icaclient.html
tags:
- know-how
- software
- linux
- software
- citrix
- icaclient
title: Citrix ICAClient
toc: false
updated: 2010-03-04 14:22:24 +0100
---

* **Download:** [citrix.com](http://www.citrix.com/English/ss/downloads/details.asp?downloadId=3323&productId=186) (preferably `.deb` format)

This plugin will work with browsers which support Netscape compatible plugins, e.g. *Firefox* or *Opera*.


SSL error 61
============

This error means your certificate chain is broken or not "trusted".


Get certificates
----------------

While the Windows clients download the certificates automatically, the Linux client doesn't. You will need access to a
Windows running *Firefox* or talk to someone to get the required certificates.

* Open Firefox (make sure you had at least one successful connection using the ICAClient)
* go to menu *Tools* → *Options…* → *Advanced* → *Encryption* and click the button *View certificates*
* click the *Servers* tab
* find the certificate matching your desired Citrix server and select it (click once)
* now click the *Export…* button, choose **X.509 certificate (DER)** as format and save it
* click the *View…* button and notice the name under "Issued By" → "Common Name (CN)" then close the dialog
* select the *Authorities* tab
* search the list for the name you just saw, most times the group will have a similar name
* export this certificate the same way as above (DER format)
* view that certificate and check whether the "Issued By" → "Common Name (CN)" is different from the certificates
  name - if so: repeat the steps to also export this one
* if all certificates are exported, copy them to these locations:
    * the Root CA certificate (that one you exported last) goes to `/usr/lib/ICAClient/keystore/cacerts/` to make it a
      *trusted* certificate
    * all other go to `~/.ICAClient/keystore/cacerts/`
* All done.