---
created: 2009-02-09 17:50:56 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/02/09/evoluent-vertical-mouse-3.html
tags:
- know-how
- hardware
- evoluent
- verticalmouse
- mouse
title: Evoluent Vertical Mouse 3
toc: false
updated: 2009-02-10 00:01:22 +0100
---

![Evoluent Vertical Mouse 3]({{ site.url }}/assets/vm3_sm.jpg)

  * **Homepage:** [evoluent.com](http://www.evoluent.com/vm3.html)

Remapping buttons in Linux
==========================

You can use the following command to remap the buttons:

    xinput set-button-map <device-id> <button1> <button2> <button3> ... <buttonN>

The `<device-id>` is shown in the `xinput list` output - you can use the name as a string or the id number. You can query the actual button state using `xinput query-state <device-id>`.

The mouse has following button-ids:

| Button                | ID |
|:----------------------|:--:|
| Thumb button          |  9 |
| Index finger button   |  1 |
| Middle finger button  |  8 |
| Ring finger button    |  3 |
| Wheel button          |  2 |
| Wheel up              |  4 |
| Wheel down            |  5 |

See [remapping mouse buttons]({% post_url 2010-01-07-remapping-mouse-buttons %}) on what buttons X11 recognizes.

According to this the default configuration (`xinput set-button-map <device-id> 1 2 3 4 5 6 7 8 9`) would give you middle click on the wheel button and right-click on the middle finger.
The ring finger button would be for special use as well as the thumb button.

I for myself prefer having the middle-button on the middle finger and the right-click on the ring finger.
So I mapped 8→3 and 3→2 and I also mapped 9→8 and 2→9 to have the wheel button and thumb button for special use in some programs which make use of additional buttons.
My final `xinput` line looks like this:

    #                       input id: 1 2 3 4 5 6 7 8 9
    xinput set-button-map <device-id> 1 9 2 4 5 6 7 3 8

You could also map 9→6 and 2→7 to have the 2 additional buttons emulate *Wheel left* and *Wheel right*:

    #                       input id: 1 2 3 4 5 6 7 8 9
    xinput set-button-map <device-id> 1 7 2 4 5 8 9 3 6