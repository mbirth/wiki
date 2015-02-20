---
title: TomTom PNAs
layout: default
created: 2009-06-01 13:23:00 +0200
updated: 2009-12-13 02:26:06 +0100
toc: true
tags:
  - know-how
  - hardware
  - tomtom
  - navigation
---
**Homepage:** [tomtom.com](http://www.tomtom.com/)

Custom Firmware
===============

For TomTom PNAs there are several inofficial firmwares. These allow you to run newer firmware versions on older devices.
You can make the firmware believe it is on a different device to enable additional features. This is set by the file `config/model.txt`. The following values are possible:

  * `ori` - doesn't emulate any other device, i.e. runs the normal firmware for your device
  * `x20`
  * `x30` - gray/orange look
  * `x40`
  * `x40light`
  * `x40light2`
  * `x40light3` - *One XL Live* features
  * `x50` - Standard, all features (e.g. animations when opening and closing dialogs, "Eco"-planning mode)
  * `xls` - fresh white/blue look, old icons
  * `ttssdk`

For my *One XL*, `x50` (blueish with animations) and `x30` (gray/orange look) looked beautiful but didn't get me any TTS voice output.
I especially like the display of the lanes besides the next direction. I don't know why TomTom doesn't enable these features for all their devices. Very strange.
`x40light` seems to be the native mode for the *One XL*. `xls` also works with TTS voices. [This posting](http://www.ipmart-forum.com/showpost.php?p=2542293&postcount=17) possibly explains
why the LoquendoTTS voices don't work in all emulations other than `x40light`. But there is a *VocalizerTTS* system with a very limited set of languages available. It should work with these emulations.


Additional applications
=======================

TomTom allows third party applications to be installed on their PNAs. If a developer has prepared a *TomTom HOME2* package, just unpack the files to your *TomTom HOME2*'s `Downloads` directory, usually located in:

    C:\Documents and Settings\<username>\My Documents\TomTom\HOME\Downloads\complete

Just create a new subdirectory and put the files in it. You can then install the application by going to *Add Traffic, Voices, Safety Cameras, etc.* → *Items on my computer* and
clicking the **Add** button for the new items under the *Applications* category.

Joghurts GPS-Site
-----------------

He has programmed *FuelControl*, a *Calculator* and a *Height* display. Download everything at <http://gps.dg4sfw.de/>.


Delete Traffic Camera database
------------------------------

[pasternak.net](http://www.pasternak.net/joomla/content/view/53/73/) has an application which can delete all traffic camera POIs with one touch - useful if you get caught by the police.


Bugs
====

Avoiding the Werner-Voß-Damm
----------------------------

Trying to navigate from Hoeppnerstraße, Berlin (Germany) to the General-Pape-Straße 1, the device calculates a 3km detour instead of sending you right through the Werner-Voß-Damm (some 100 meters).
This happened to me on NavCore 9.014, 9.022, 9.024 and with maps Western\_and\_Central\_Europe\_2GB v830 and v840.

![TomTom Detour Screenshot]({{ site.url }}/assets/tomtom-detour.jpg)


Crashing showing a specific crossing
------------------------------------

  * **Preconditions:** Navigate from `N 52° 42.766', E 12° 35.623'` to `Humboldtallee, 14612 Falkensee` and have the "Hide map above speed" setting activated

Approaching the round-about at `N 52° 42.134', E 12° 36.068'`, everything is fine. If you go above the "hide map"-speed, you'll see the roundabout, if you go below the speed, you'll see the map.

After passing the roundabout, the map displays fine but as soon as you reach the speed where the device should show the next crossing, the device hangs and reboots.
After it started up again and you're above the "hide map"-speed, it crashes and reboots again. The crossing which should show up is the one at `N 52° 31.744', E 13° 06.607'`.

Tested with NavCore 9.014 and 9.024, maps 830 and 840. All combinations show the same behavior.
