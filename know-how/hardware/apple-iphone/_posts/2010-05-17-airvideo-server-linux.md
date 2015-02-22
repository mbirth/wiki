---
title: AirVideo Server under Linux
layout: default
created: 2010-02-16 21:28:54 +0100
updated: 2010-05-17 14:45:34 +0200
toc: false
tags:
  - know-how
  - hardware
  - apple
  - iphone
  - airvideo
  - multimedia
---
*[AirVideo](http://www.inmethod.com/air-video/)* is a Client/Server-Mediaplayer, which allows you to stream videos
directly from your PC to your iPhone. Its server software started as Windows-/Mac-only but now there's also a Linux
server module available, too.

All details are explained in [their user forums](http://www.inmethod.com/forum/posts/list/34.page).


Compile the special FFmpeg under Ubuntu
=======================================

1. download the customized version of *FFmpeg* from: <http://www.inmethod.com/air-video/licenses.html>
   (use the 2.2.5 version!) and unpack it to some directory
1. install the following packages: [libmp3lame-dev](apt://libmp3lame-dev), [libfaad-dev](apt://libfaad-dev),
   [libx264-dev](apt://libx264-dev) (`0.svn20100115-0.0~kkstemp1` from [Stéphane Marguet's PPA](https://launchpad.net/~stemp/+archive/ppa)!),
   [mpeg4ip-server](apt://mpeg4ip-server), [git-core](apt://git-core), [pkg-config](apt://pkg-config)
    1. change to the directory to where you have unpacked *FFmpeg*
    1. run:  
{% highlight bash %}
$ ./configure --enable-pthreads --disable-shared --enable-static --enable-gpl --enable-libx264 --enable-libmp3lame --enable-libfaad --disable-decoder=aac
$ make
{% endhighlight %}
1. after the build is complete, download the `AirVideoServerLinux.jar` and `test.properties` from [this posting](http://www.inmethod.com/forum/posts/list/60/34.page#3935) (**UPDATE:** [Newer version](http://www.inmethod.com/forum/posts/list/120/34.page#5252))
1. modify the `test.properties` and fix the paths to the 3 tools and your video directory:
    * `path.ffmpeg` should point to your just compiled `ffmpeg`-binary
    * `path.mp4creator` is `/usr/bin/mp4creator`
    * `path.faac` is `/usr/bin/faac`
    * `folders` format is: *\<label1\>*`:`*\<path1\>*`,`*\<label2\>*`:`*\<path2\>*`,`…`,`*\<labelN\>*`:`*\<pathN\>*
    * leave the other options as they are
1. finally you can run:  
{% highlight bash %}
java -jar AirVideoServerLinux.jar test.properties
{% endhighlight %}
1. manually add the server (by its IP!) to *AirVideo* on your iPhone
1. Have fun!


Autostart AirVideoServer
========================

To autostart *AirVideoServer* upon bootup, you can use [UpStart](http://upstart.ubuntu.com/) which is the default
way in *Karmic Koala*.

Just create a file `/etc/init/airvideo.conf` with these contents:

~~~
start on runlevel [2345]
stop on shutdown
respawn

exec sudo -H -n -u mbirth /usr/bin/java -jar /opt/AirVideoServer/AirVideoServerLinux.jar /opt/AirVideoServer/test.properties
~~~

This will tell *UpStart* to run the server process as user `mbirth` upon reaching one of the runlevels 2-5 and stop the
server when the system shuts down. `respawn` tells it to restart the server if it crashed.

You can also control it manually by doing

    sudo start airvideo

or

    sudo stop airvideo


Bonjour Announcement
====================

*jcheshire* pointed out how to add *AirVideo* to the [avahi-daemon](apt://avahi-daemon), so that it is automatically
recognized by the clients. Read more in the [AirVideo forums](http://www.inmethod.com/forum/posts/list/165/34.page#6907).
