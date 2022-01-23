---
created: 2016-01-26 19:54:55 +0100
language: en
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2016/01/26/synology-telnet-password.html
tags:
- know-how
- hacking
- hardware
- synology
- xpenology
- telnet
- password
title: Synology Telnet password
toc: true
updated: 2016-01-26 19:54:55 +0100
---

If you ever had a problem with your Synology DiskStation, you might have
stumbled upon the emergency telnet access or even the serial port on the PCB.

Or maybe you just wanted to set it (or XPEnology) up and needed the `root`
password to configure a static IP in order to access the web based setup.

But what is the password?

Luckily, Gui Ambros took a look at the GPL'ed source code and
[made a small C snippet](https://wrgms.com/synologys-secret-telnet-password/)
to generate that password.

It is based on the current day and month.

<script>
var today = new Date();
var d = today.getDate();
var m = today.getMonth() + 1;

var mh = m.toString(16);
var pm = ('0' + m).substr(-2);
var pdh = ('0' + d.toString(16)).substr(-2);

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
              'August', 'September', 'October', 'November', 'December'];

function gcd(x, y) {
  return y?gcd(y, x%y):Math.abs(x);
}

var x = gcd(d, m);
var px = ('0' + x).substr(-2);

document.write('Today\'s (' + d + ' ' + months[m-1] + ') password is: <code>' + mh + pm + '-' + pdh + px + '</code>');
</script>

The structure is like this:

1. Current month in hexadecimal, lower case (Jan:`1`, Feb:`2`, … , Oct:`a`, Nov:`b`, Dec:`c`)
1. Current month in decimal, 2 characters, zero padded (`01`, `02`, …, `11`, `12`)
1. Minus (`-`)
1. Current day of the month in hex, 2 characters, zero padded, lower case (`01`, `02`, …, 10:`0a`, …, 30:`1e`, 31:`1f`)
1. [Greatest common divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) between month and day, 2 characters, zero padded (`01`, …, `12`)

Here is a small Python snippet to calculate today's password:

{% highlight python %}
from datetime import date
import fractions

today = date.today()
m = today.month
d = today.day

print("%x%02d-%02x%02d" % (m, m, d, fractions.gcd(d, m)))
{% endhighlight %}

And if you look at the source code of this page, you'll find the JavaScript
which calculates the code displayed above.

<p><div class="notetip" markdown="1">
If the generated password doesn't work, also try `101-0101`. After a bootup, the
time might be reset to 1 January 1970.
</div></p>

By the way: This password doesn't work for SSH after you've setup your Synology.
After the setup, the `root` password is that of your `admin` user.