---
title: IBM ThinkPad series
layout: default
created: 2008-07-21 19:50:40 +0200
updated: 2008-07-21 19:50:40 +0200
toc: true
tags:
  - know-how
  - hacking
  - hardware
  - bios
  - passwords
  - ibm
  - thinkpad
---
Please also see [this homepage](http://www.ja.axxs.net/unlock/) for more information regarding removing passwords from
IBM ThinkPads.


240 [2609]
==========

Short the jumper JP1.


310/310D/310E/310ED [2600]
==========================

Use switch SW2 near CPU socket (second bit switch counting from the lowest side).


??? [2610], 365C/365CD/365CS/365CSD/365E/365ED [2625]
=====================================================

The following procedure disables user and supervisor passwords:

1. Power-off the computer.
1. Disconnect the AC-Adaptor.
1. Open the keyboard and remove the battery pack.
1. Remove the Mylar cover. See FRU Removals and Replacements.
1. Locate the S2 switch block on the system board.
1. Set Switch 1 to OFF.
1. Wait 30 seconds.
1. Set Switch 1 to ON.
1. Replace the Mylar cover.
1. Replace the battery.
1. Connect the AC-Adaptor.
1. Power-on the computer.
1. Go to a DOS full screen.
1. Press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F11</kbd> to access the setup screen and reset the passwords.


355x [2619], 360x [2620], 370C/750x/755C/755CS [9545]
=====================================================

How to disable the power-on password:

1. Power-off the computer.
1. Open the keyboard and remove the battery pack and the diskette drive.
1. Remove the attachment holder.
    * For models 355x and 360x, see '1115 Standby Battery'.
    * For models 370C, 750x, 755C and 755CS, see '2105 Standby Battery'.
1. Install a jumper on the power-on password connector -1- at bottom left side of the system board.
1. Reinstall the diskette drive and battery pack.
1. Power-on the computer and wait until the POST ends.
1. Verify that the password prompt does not appear.
1. After service check is completed, remove the jumper.


710T [2523]
===========

To disable the power-on password:

1. Power-off the computer.
1. Remove backup-battery cover.
1. Locate the security switch beside the backup battery.
1. Move the slide switch to the opposite side.
1. Power-on the computer.


730TE [2524]
============

Use the following procedure to disable the power-on password if needed.

1. Power off the system.
1. Remove the Pen Compartment Cover and the Sub Battery cover.
1. Identify the security pin wich is located beside the sub battery.
1. Power on the system while making a short-circuit between the two security pins with a regular screwdriver's flat tip.


??? [9546, 9547]
================

1. Power-off the computer.
1. Open the keyboard, and remove the diskette drive or CD-ROM drive and the battery pack.
1. Install a jumper on the power-on password connector on the left side of the FDD connector.  
   (See 'Password Connector' for location.)
1. Reinstall the battery pack and the diskette drive/CD-ROM drive.
1. Power-on the computer and wait until the POST ends.
1. Verify that the password prompt does not appear.
1. After the service check is completed, remove the jumper.


300 [2615]
==========

To override a password , do the following.

1. Power-off the computer.
1. Remove the access panel.
1. Remove the battery pack.
1. Remove the top assembly (do not disconnect any cables).
1. Connect a jumper to the two pads (R39) at the side of the math coprocessor socket.
1. Reinstall the battery pack.
1. Power-on the computer. Keep the computer on until the LEDs blink and the system locks.
1. Remove the jumper.
1. Press and hold the reset switch, then power-on the computer.
1. Power-off the computer.
1. Replace the top assembly and the access panel.


350, PS/Note 425 [2618]
=======================

Remove the cmos battery 5 minutes


365X, 365XD [2625]
==================

1. Power off the computer.
1. Open the keyboard and lift the right-most section of the insulator sheet.
1. Push out the small door on the right side of the base cover.
1. Apply a short across the Power-On Password Jumper Pads.
1. With the jumper tool in place, power on the computer to clear the password.
1. Remove the jumper and power off the computer.
1. Power on the computer and verify that the password has been cleared.


380-385 [2635]
==============

1. Power off the computer.
1. Turn the computer upside down, loosen the DIMM cover screw, remove the DIMM cover.
1. Then power-on the computer by applying a short across the power-on password jumper pads 315


380XD, 385XD, 380Z [2635]
=========================

1. Power off the computer.
1. Turn the computer upside down, loosen the memory-slot cover screw, and remove the memory-slot cover.
1. Short across the power-on password jumper pads
1. Power on the computer and wait until the POST ends.
1. Reinstall the memory-slot cover, and turn the computer right side up.


i-Series 1400 [2611]
====================

1. Turn off the computer.
1. Unplug the AC Adapter and remove the battery.
1. Remove the keyboard and the thermal plate.
1. Move the password switch (SW2, switch 2) from OFF to ON to bypass the password.  
   **Note:** SW2 has four switches, the second upper switch (switch 2) is the password bypass/check switch.  
   Turning the switch to the left (ON position) is "bypass password", the right (OFF position) is "check password".
1. Plug in the AC adapter and turn on the system.
1. While the ThinkPad logo is being displayed, wait for a beep before pressing <kbd>F1</kbd> to enter the BIOS Utility.
1. Select "System Security" from the BIOS Utility main menu and press <kbd>Enter</kbd>.
1. Set the "Power-On Password" setting to "None" to clear the password.
1. Save and exit the BIOS Utility.
1. Turn off the system and unplug the AC Adapter.
1. Move the password switch from ON to OFF to enable the password function.
1. Reinstall the thermal plate and keyboard.
1. Reinstall the battery pack and plug in the AC Adapter.


i-Series 1400/1500 [2621]
=========================

If only the power-on pasword is set, do the following to remove it:

1. Power off the computer.
1. Remove the battery and the AC Adapter.
1. Remove the backup battery (RTC) 20 minutes or use the screw driver to touch the backup battery (RTC) 1 sec.
1. Put back the backup battery (RTC).
1. Power on the computer and wait until the POST ends.
1. Verify that the password prompt does not appear.


390/i Series 1700 [2626, 2627], 390E [2626], 390X / i 1700 [2624, 2627]
=======================================================================

1. Power off the computer.
1. Remove the battery pack and AC Adapter.
1. Remove the backup battery (RTC) for 20 minutes or use a screwdriver to touch the backup battery (RTC) for 1 second.
1. Put back the backup battery (RTC).
1. Power on the computer and wait until POST ends.
1. Verify that the password prompt does not appear. 


500 [2603]
==========

1. Power-off the computer.
1. Disconnect all cables attached to the computer.
1. Remove the memory card access panel and memory card (if installed).
1. Power-on the computer.
1. Locate the two pins labeled PAD1-2 on the system board (in the memory card access area).
1. Short the two pins together.
1. Press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F3</kbd> to access the System Parameters Setup Menu.
1. Press <kbd>Esc</kbd>.
1. Press <kbd>F5</kbd> to reset the parameter to their default values.
1. The System Time, System Date, and Password (if required) parameters need to be set manually.
1. Press <kbd>Esc</kbd>, then <kbd>F4</kbd> to save the values, exit the Setup program, and reboot the computer.
1. If a memory card was removed, power-off the computer and install the memory card.
1. Install the memory card access panel.


510 [2604]
==========

1. Power-off the computer.
1. Disconnect all cables attached to the computer.
1. Remove the memory card access panel and DRAM card (if installed).
1. Power-on the computer.
1. Locate the two pins labeled PAD1-2 on the system board (see 'System Board Connectors').
1. Short the two pins together.
1. Press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F3</kbd> to access the System Parameters Setup Menu.
1. Press <kbd>Esc</kbd>.
1. Press <kbd>F5</kbd> to reset the parameter to their default values.
1. The System Time, System Date, and Password (if required) parameters need to be set manually.
1. Press <kbd>Esc</kbd>, then <kbd>F4</kbd> to save the values, exit the Setup program, and reboot the computer.
1. If a DRAM card was removed, power-off the computer and install the DRAM card.
1. Install the memory card access panel.


560, 560E [2640]
================

1. Power off the computer
1. Remove the frame
1. Flip the keyboard over as shown in the figure
1. Jumper the two password jumper pads (R364 or R39) located on the system board
1. Power on the computer to clear the password
1. Replace the keyboard and the frame  
   When replacing the frame, make sure that the frame fits correctly in place. If it is not in place, the click buttons
   of the TrackPoint III cannot be pressed.
1. Replace the screws
1. Power on the computer and wait until the POST ends
1. Verify that the password prompt does not appear.

The hard disk password is stored on the hard disk.


560x [2640-560 - 60x, 70x]
==========================

1. Power off the computer
1. Remove the frame
1. Position the keyboard over as shown in the figure
1. Jumper the two password jumper pads (BIT-X) on the system board
1. Power on the computer to clear the password
1. Replace the keyboard and the frame
   When replacing the frame, make sure that the frame fits correctly in place. If it is not in place, the click buttons
   of the TrackPoint III will not work.
1. Replace the screws.
1. Power on the computer and wait until the POST ends.
1. Verify that the password prompt does not appear


560Z [2640]
===========

1. Power off the computer.
1. Turn the computer upside down.
1. Loosen the DIMM socket lid screw -1- , and remove the DIMM socket lid.
1. Short the power-on password jumper pads (R522).
1. Power on the computer and wait until the POST ends. The password is cleared.
1. Reinstall the DIMM socket lid, and turn the computer right side up.
1. Verify that the password promp does not appear.
1. To reactivate the password, set the password again.


570 [2644]
==========

1. Power off the computer.
1. Remove the DIMM cover on the bottom side of the computer.
1. Short-circuit the two password pads.
1. Under the short-circuit condition, power on the computer and wait until the POST ends.  
   After the POST ends, the password prompt does not appear. The power-on password is removed.
1. Reinstall the DIMM cover.


765D [9546], 765L [9547]
========================

1. Power off the computer.
1. Open the keyboard, and remove the battery pack and the diskette or CD-ROM drive.
1. Install a jumper on the power-on Password connector on the left side of the FDD connector.
1. Reinstall the battery pack and the diskette drive/CD-ROM drive.
1. Power on the computer and wait until POST ends.
1. Verify that the password prompt does not appear.
1. After the service check is completed, remove the jumper.


770 [9548/49]
=============

1. Power off the computer.
1. Remove the DIMM cover.
1. Short-circuit the two password pads or put the jumper (pads near the top of the cover).
1. Under the short-circuit condition, power on the computer and wait until POST ends.  
   After the POST ends, the password prompt does not appear. The power-on password is removed. If a jumper has been
   used for short the password pads, then remove the jumper.
1. Reinstall the DIMM cover.


[Back to overview.]({% post_url 2009-10-30-bios-passwords %})
