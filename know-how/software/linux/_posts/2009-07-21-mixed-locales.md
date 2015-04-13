---
title: Mixed Locales
layout: default
created: 2009-04-08 21:06:12 +0200
updated: 2009-07-21 11:04:50 +0200
toc: false
tags:
  - know-how
  - software
  - linux
  - i18n
---
I personally like English language operating systems. So I have set my Ubuntu to English language. But I still want
German curency, decimals and time. With most applications, you can define the formats to use inside the application.
But I stumbled at *Evolution* which lets you define 12/24-hour setting for the calendar, but doesn't use this setting
for the mail list display.

So I added the following lines to the file `/etc/environment` below the `LANG="en_US.UTF-8"`:

{% highlight bash %}
LC_NUMERIC="de_DE.UTF-8"
LC_MONETARY="de_DE.UTF-8"
LC_PAPER="de_DE.UTF-8"
LC_MEASUREMENT="de_DE.UTF-8"
{% endhighlight %}

So the most formats where as I wanted them - despite the time. Yes, I could set `LC_TIME="de_DE.UTF-8"`, but this not
only produces German formats but also German names for the months and weekdays. And this is something I didn't want:
The whole application in English language but the months and weekdays in German, e.g. "Freitag 11:42".

So there are now two possibilities:

1. you compile your own locale definition, or
1. you take a Hex editor and modify the existing one

I decided to do the second.

In `/usr/lib/locale` are all locale definitions. So I made a backup of the original `LC_TIME` below `en_US.utf8` and
fired up *ghex2*.

So in principle there are two strings of every format - one in ANSI encoding which is directly readable, and one in
Unicode where there are 3x `00`-Bytes between the single characters. So in general I just replaced all `%r` (12hrs time)
by `%R` (24hrs time) and removed the `%p` (AM/PM). I also changed the date format `%m/%d/%Y` to `%Y-%m-%d` to get the
international format. As mentioned, I had to make these changes 2x times - once for the ANSI strings and once for the
Unicode ones.

To get the first day of the week correctly (Monday here in Europe), I first had to change the location `0x912` from
`02` to `01` (which means: The first workday of the week is now *Sunday* (1st day) instead of *Monday* (2nd day)). So to
finally get the European week, I also had to change location `0x90c` from decimal value `19971130` (a Sunday) to
`19971201` (a Monday, new value in Hex: `81bc3001`). So now the first day of the week was a Monday (Dec. 1st, 1997) and
thus the week and work-week were corrected.

The *en_US* locale has the first 7-day-week as the first week of the year. In Europe, the first week with at least
4 days is counted as the first week of the year (DIN 1355 / ISO 8601). So I changed location `0x910` from `07` to `04`.

Finally, I still had *Evolution* showing AM/PM times. I fixed this by overwriting these strings with Null-Bytes
(`00`h) - again, two times for each. This made *Evolution* show 24hrs times.


Paper Format
============

The default paper format can be changed as described [here](http://www.arsgeek.com/2007/07/02/change-ubuntus-default-paper-size-from-a4-to-letter/):

    sudo dpkg-reconfigure libpaper1

Or you just change the file `/etc/papersize`.
