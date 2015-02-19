---
title: Remapping mouse buttons
layout: default
created: 2009-02-09 20:44:38 +0100
updated: 2009-07-17 23:07:05 +0200
toc: false
tags:
  - know-how
  - software
  - linux
  - mouse
---
permanently
===========

To remap mouse buttons permanently, you can use the `xinput set-button-map` command. Every mouse button click issues a button click with a specific id to X11. X11 recognizes the following buttons:

| ID | Button        |
|:--:|:--------------|
|  1 | Left click    |
|  2 | Middle click  |
|  3 | Right click   |
|  4 | Wheel up      |
|  5 | Wheel down    |
|  6 | Wheel left    |
|  7 | Wheel right   |
|  8 | Thumb1        |
|  9 | Thumb2        |
| 10 | ExtBt7        |
| 11 | ExtBt8        |

You can use the following command to remap the buttons:

    xinput set-button-map <device-id> <button1> <button2> <button3> ... <buttonN>

The `<device-id>` is shown in the `xinput list` output - you can use the name as a string or the id number. You can query the actual button state using `xinput query-state <device-id>`.

So the default configuration (`xinput set-button-map <device-id> 1 2 3 4 5 6 7 8 9`) would give you the normal behavior.
But if you prefer e.g. having the thumb buttons for *WheelLeft* and *WheelRight*, you would run this command:

    #                       input id: 1 2 3 4 5 6 7 8 9
    xinput set-button-map <device-id> 1 2 3 4 5 8 9 6 7

This would map buttons 8→6 and 9→7 and vice versa.

To automatically set your preferred mapping on bootup, you can add the line to *System* → *Preferences* → *Startup Applications* (formerly *Sessions*).


per application (Wheel/Thumb only)
==================================

To remap wheel-/thumb-mouse buttons per application, you can use `imwheel` from the same-named [package](apt://imwheel). After installing the package, copy the default configuration to your homedir:

    cp /etc/X11/imwheel/imwheelrc ~/.imwheelrc

And then enable the automatic starting upon start of X11 by editing `/etc/X11/imwheel/startup.conf` and changing the `IMWHEEL_START` value to **`1`**.

Now you can modify your `.imwheelrc` to fit your needs. The format is

    "window regexp"
    Modifier, Mousebutton, Keypresses/Mousebutton
    ...

So for example to use the WheelLeft and WheelRight buttons to switch tabs in Firefox, you could use the following definition:

    "^Firefox-bin$"
    # Flip between browser tabs
    None, Left, Control_L|Page_Up
    None, Right, Control_L|Page_Down

This would map *WheelLeft* to <kbd>Ctrl</kbd>-<kbd>PgUp</kbd> and *WheelRight* to <kbd>Ctrl</kbd>-<kbd>PgDn</kbd>.

A *Modifier* of `None` means, this only works if no modifier (`Shift_L`, `Shift_R`, `Control_L`, `Control_R`, `Alt_L`, `Alt_R`) is pressed while clicking.
If you leave this empty, the mapping works regardless of which modifier is held down.

Use this to go to previous/next track in Rhythmbox using the WheelLeft and WheelRight clicks:

    "^Rhythmbox$"
    None, Left, Alt_L|Left
    None, Right, Alt_L|Right

(In this case, `Rhythmbox` defines the *window resource name* since Rhythmbox itself puts the currently playing song in the title bar.
You could also match against `rhythmbox` which is the *window class name*. Since `imwheel -c` wasn't able to show them to me, I just guessed.)

<p><div class="noteimportant" markdown="1">
Looks like `imwheel` causes some problems when scrolling in *Opera*: The webpage doesn't get redrawn so that you have
blank or garbled areas when scrolling. Also you have to click on an area to scroll it. (i.e. if you have a webpage with a textarea,
the scrollwheel will scroll the textarea even if the pointer is outside of it until you click the area outside the textarea).

To get back the original behavior, comment out the lines for Opera in your `.imwheelrc` or add an `@Exclude` rule.
</div></p>
