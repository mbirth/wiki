---
created: 2010-03-01 21:40:32 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2010/03/01/acpi-events.html
tags:
- know-how
- software
- linux
- acpi
title: ACPI Events
toc: false
updated: 2010-03-01 21:40:46 +0100
---

If you wish to change the behavior upon pushing e.g. the power button, you can edit the config files located in
`/etc/acpi/events/`. To disable the power button, you would edit the file `powerbtn` there and change the `action` line
to:

{% highlight ini %}
action=/bin/true
{% endhighlight %}