---
title: apt-get Errors
layout: default
created: 2009-01-21 21:30:24 +0100
updated: 2009-01-24 17:34:46 +0100
toc: false
tags:
  - know-how
  - software
  - linux
  - software
  - apt
---
If you get the following error while updating the package list:

    W: GPG error: http://ppa.launchpad.net jaunty Release: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY 632D16BB0C713DA6

You need to manually update the key. The key-ID is the last 8 digits of the key, in this case: *0c713da6*.

Now fetch the key from the Ubuntu keyserver:

    gpg --keyserver keyserver.ubuntu.com --recv 0c713da6

And finally add the new key to the apt-keyring:

    gpg --export --armor 0c713da6 | sudo apt-key add -



You can even automate this a bit with the following shell script:

{% highlight bash %}
#!/bin/bash
KEYID=${1:-8}
gpg --keyserver keyserver.ubuntu.com --recv $KEYID
gpg --export --armor $KEYID | sudo apt-key add -
{% endhighlight %}

This will only use the last 8 digits of the first parameter as KEYID. So you can even call it with the full 16 digits.
