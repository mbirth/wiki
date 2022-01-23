---
created: 2011-04-09 13:28:16 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2011/04/09/find-ppa-for-specific-package.html
tags:
- know-how
- software
- linux
- administration
title: Find PPA for specific package
toc: false
updated: 2011-04-09 13:28:16 +0200
---

If you want to find out from which PPA a specific package was installed or what other PPAs hold it, you can use the
following command: (found at [superuser.com](http://superuser.com/questions/106794/how-to-tell-from-what-ubuntu-or-debian-repository-a-package-comes))

~~~
$ apt-cache policy mpd
mpd:
  Installed: 0.16.2+git20110331.6d3ed3f-0ubuntu1~ripps1
  Candidate: 0.16.2+git20110331.6d3ed3f-0ubuntu1~ripps1
  Version table:
 *** 0.16.2+git20110331.6d3ed3f-0ubuntu1~ripps1 0
        500 http://ppa.launchpad.net/gmpc-trunk/mpd-trunk/ubuntu/ maverick/main amd64 Packages
        100 /var/lib/dpkg/status
     0.16.1-1ubuntu1 0
        500 http://de.archive.ubuntu.com/ubuntu/ natty/universe amd64 Packages
~~~

Here you can see that the package `mpg` is in the PPA *gmpc-trunk/mpd-trunk* and also in the *natty/universe* repository.
The installed version is that from the PPA - also indicated by the `/var/lib/dpkg/status` line.


*[PPA]: Personal Package Archive