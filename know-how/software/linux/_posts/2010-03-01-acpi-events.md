---
title: ACPI Events
layout: default
created: 2010-03-01 21:40:32 +0100
updated: 2010-03-01 21:40:46 +0100
toc: false
tags:
  - know-how
  - software
  - linux
  - acpi
---
If you wish to change the behavior upon pushing e.g. the power button, you can edit the config files located in
`/etc/acpi/events/`. To disable the power button, you would edit the file `powerbtn` there and change the `action` line
to:

{% highlight ini %}
action=/bin/true
{% endhighlight %}
