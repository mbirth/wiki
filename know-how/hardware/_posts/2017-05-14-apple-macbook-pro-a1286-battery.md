---
created: 2017-05-14 16:42:29 +0200
language: en
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2017/05/14/apple-macbook-pro-a1286-battery-replacement.html
tags:
- know-how
- hardware
- apple
- mac
- macbook
- battery
- replacement
- a1286
- a1321
- a1382
title: Apple MacBook Pro A1286 Battery Replacement
toc: false
updated: 2017-05-14 16:42:29 +0200
---

If you have a MacBook Pro A1286 (15.4", Late-2008 until Mid-2012) and want to replace the battery,
you must be aware of the specific battery in your device. In 2011, for some reason, Apple decided
to switch from the battery model A1321 (73 Wh) to model A1382 (77.5 Wh). While the form-factor
stayed the same, Apple changed the connector and pinout.

![]({{ site.url }}/assets/apple_a1321_a1382_connectors.jpg)

In the above picture, the A1321's connector is the top one with the A1382's at the bottom. Notice
the small "+" and "-" marks on the plugs which indicate the changed polarity.

If you search for the model numbers and the word "battery", you'll soon end up on
[this page](https://www.ifixit.com/Answers/View/74372/Switch+battery+connector+on+the+battery+itself+%28A1321%29)
or probably [this one](https://www.ghostlyhaks.com/forum/macbook/715-fun-facts-for-non-efi-related-apple-repairs).

As you can read there, the pinout of one battery is:

    [+12] [+12] [+12] [SCL] [DET] [SDA] [GND] [GND] [GND]

while the other one is:

    [GND] [GND] [GND] [SCL] [DET] [SDA] [+12] [+12] [+12]

(`SCL` = SMBUS_SMC_BSA_SCL, `DET` = SYS_DETECT_L, `SDA` = SMBUS_SMC_BSA_SDA)

Here is a photo of both batteries where I've marked the `+12V` lines (left: A1382, right: A1321):

![]({{ site.url }}/assets/apple_a1382_a1321_sidebyside.jpg)

If you are comfortable with using a soldering iron and doing some delicate soldering, you can
"easily" (sort of) swap the connectors and the `12V` and `GND` wires. The 3 wires for the `12V`
supply and the 3 `GND` wires are shorted, so they're not going to different cells and it's not
important whether you swap 1-2-3 with 7-8-9 or 9-8-7 or 7-9-8 or 8-7-9 or … (and vice versa).

**I DON'T TAKE ANY RESPONSIBILITY FOR WHAT YOU'RE DOING TO YOUR HARDWARE. Just because it worked out
fine for me, doesn't mean it will work for you.**

<p><div class="notewarning" markdown="1">
When working with Li-Ion or Li-Polymer batteries, it's really important to **never** short the
battery terminals ("+"/`12V` and "-"/`GND`) and to not physically damage the battery packs.
Otherwise, the battery could get very hot and even explode, releasing dangerous gases in the
process.
([More info.](https://electronics.stackexchange.com/questions/176527/hazards-of-puncturing-lithium-ion-batteries))
</div></p>

<p><div class="noteimportant" markdown="1">
Please take extra care to connect the 3 middle wires in the exact same order as they were in the
other connector. They are for the identifier chip and if you mix them up, the MacBook won't
recognise the battery.

**ALSO DOUBLE- AND TRIPLE-CHECK EVERYTHING! TAKE YOUR TIME!** (The whole process took me almost 2
hours.)
</div></p>

Once you're done, it might look like this:

![]({{ site.url }}/assets/apple_a1321_connector_on_a1382.jpg)

Time to plug it into the MBP. Watch out for funny smells, smoke or the battery heating up. But if
everything went fine, you should be able to turn on your MBP just fine.

Once it finished booting up, head into the system information and check the battery info. For me,
it looked like this:

![]({{ site.url }}/assets/apple_a1382_stats_on_a1286.jpg)

**SUCCESS!**


Bonus Picture
=============

This is the controller PCB of the old A1321 battery:

![]({{ site.url }}/assets/apple_a1321_battery_controller.jpg)

The three Microcontrollers (`U`-label, all on the left hand side) on there:

* `U200`: TI *bq20Z45* Charging Controller
* `U301`: CJG W --- TI *bq29410DCT* Secondary Over-Voltage Protection
* `U302`: CBZ --- TI *TMP102* Low-Power Digital Temperature Sensor with SMBus


*[MBP]: MacBook Pro
*[PCB]: Printed Circuit Board
*[SCL]: Signal Clock
*[SDA]: Signal Data
*[TI]: Texas Instruments