---
title: Compiling PHP-GTK
layout: default
created: 2009-01-11 13:48:56 +0100
updated: 2009-01-11 13:57:32 +0100
toc: false
tags:
  - know-how
  - software
  - linux
  - software
  - php
  - gtk
---
To compile [php-gtk](http://gtk.php.net/), you need the following packages:

    sudo aptitude install php5-dev php5-gd libgtk2.0-dev libglade2-dev build-essentials


When trying to use the `buildconf.sh`, you might encounter the following error:

~~~
~/php-gtk-2.0.1$ ./buildconf
Configuring for:
PHP Api Version:         20041225
Zend Module Api No:      20060613
Zend Extension Api No:   220060519
rebuilding aclocal.m4
rebuilding configure
configure.in:77: warning: LTOPTIONS_VERSION is m4_require'd but not m4_defun'd
aclocal.m4:2912: LT_INIT is expanded from...
aclocal.m4:2947: AC_PROG_LIBTOOL is expanded from...
configure.in:77: the top level
configure.in:77: warning: LTSUGAR_VERSION is m4_require'd but not m4_defun'd
configure.in:77: warning: LTVERSION_VERSION is m4_require'd but not m4_defun'd
configure.in:77: warning: LTOBSOLETE_VERSION is m4_require'd but not m4_defun'd
configure:12242: error: possibly undefined macro: m4_ifval
      If this token and others are legitimate, please use m4_pattern_allow.
      See the Autoconf documentation.
configure:15849: error: possibly undefined macro: _LT_SET_OPTIONS
configure:15849: error: possibly undefined macro: LT_INIT
make[1]: *** [configure] Error 1
make: *** [all] Error 2
~~~

which leaves the `configure`-script in a broken state. The problem is that the newer `libtool.m4` has been split into
different files. To make it work, you have to concatenate the different files back into the libtool.

~~~
$ cd /usr/share/aclocal
$ sudo cp libtool.m4 libtool.m4~backup
$ sudo chmod 777 libtool.m4
$ sudo cat lt~obsolete.m4 ltoptions.m4 ltsugar.m4 ltversion.m4 >>libtool.m4
$ sudo chmod 644 libtool.m4
~~~

After that, unpack a **clean** `php-gtk` source and try again.

~~~
~/php-gtk-2.0.1$ ./buildconf
~/php-gtk-2.0.1$ ./configure
~/php-gtk-2.0.1$ make
~/php-gtk-2.0.1$ sudo make install
~~~

After enabling the new extension in the `php.ini`, you should be able to use the [Gtk2-Frontend for PEAR](http://pear.php.net/PEAR_Frontend_Gtk2).

    sudo pear install --alldeps pear/PEAR#gtk2installer

You can now run the graphical installer using the following command:

    sudo pear -G
