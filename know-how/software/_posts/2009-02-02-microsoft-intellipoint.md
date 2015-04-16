---
title: Microsoft IntelliPoint
layout: default
created: 2009-02-02 21:23:07 +0100
updated: 2009-02-02 21:23:07 +0100
toc: false
tags:
  - know-how
  - software
  - microsoft
  - intellipoint
---
**Download:** [microsoft.com](http://www.microsoft.com/hardware/download/download.aspx?category=MK)


Use with other mice
===================

After installation, find the file `point32.inf` in the `C:\Program Files\Microsoft IntelliPoint\` folder. Copy one of
the `HID_Filtr_Inst`-lines and change the PnP-ID to that of your mouse. E.g. my *Logitech V400* has `Vid_046D&Pid_C518`
and with its 2 additional buttons and the 4-way-scrollwheel it's comparable with the *Wireless Laser Mouse 6000*.

If you take a look at the `point32.inf`, you'll find this line near the end:

{% highlight ini %}
HID\Vid_045E&Pid_00F0.DeviceDesc="Microsoft USB Laser Mouse 6000 (IntelliPoint)"
{% endhighlight %}

so go back to the top and find the line:

{% highlight ini %}
%HID\Vid_045E&Pid_00F0.DeviceDesc%=HID_Filtr_Inst, HID\Vid_045E&Pid_00F0
{% endhighlight %}

Since the part before the equals sign is only the variable of the description from the end, you only need to change the
part after the equals sign. So just copy this line and change the ID. For me it had to look like this:

{% highlight ini %}
%HID\Vid_045E&Pid_00F0.DeviceDesc%=HID_Filtr_Inst, HID\Vid_046D&Pid_C518
{% endhighlight %}

Now go to the *Device Manager* => *Mice*, right-click your mouse and choose *Update driver* => *Chose driver manually*.
Select the IntelliPoint directory and you should see an entry "Microsoft USB Laser Mouse 6000 (IntelliPoint)". Install
it and reboot. Done.

The most interesting feature is the "[Instant View](http://www.microsoft.com/hardware/mouseandkeyboard/features/instantviewer.mspx)"
(aka. Exposé) and maybe the [zoom feature](http://www.microsoft.com/hardware/mouseandkeyboard/features/magnify.mspx).
Logitech's [SetPoint](http://www.logitech.com/index.cfm/428/144&cl=de,de?softwareid=671&osid=1) doesn't offer these
features. But I watched the screen flickering every few seconds which might be because of IntelliPoint updating the
thumbnails for "Instant View".

Compared to *SetPoint*, the `ipoint.exe` only consumes 2,5 MiB RAM whereas SetPoint needs around 12,5 MiB. Also it
brings the `KHALMNPR.exe` which consumes additional 6 MiB.

Only problem for now: Horizontal scrolling doesn't work since it seems to be handled through SetPoint and IntelliPoint
doesn't understand the signals of the Logitech mouse. Also you have to scroll the wheel 2-3 ticks before the object on
screen starts the actual scrolling. OTOH the "Precision Enhancer" seems really useful for editing pictures.

btw: For Exposé-feature, you can use [iEx](http://www.oxygen-inc.com/premium/InsaniSoft/iEx.htm) (contained in the
*iEx Settings*-download). Or if you want to spend money, [TopDesk](http://www.otakusoftware.com/topdesk/) is a better
alternative.
