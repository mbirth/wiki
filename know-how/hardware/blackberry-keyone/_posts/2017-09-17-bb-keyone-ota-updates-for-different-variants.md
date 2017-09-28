---
title: BlackBerry KEYone OTA updates for different variants
layout: default
language: en
created: 2017-09-15 20:32:10 +0200
updated: 2017-09-17 20:49:36 +0200
toc: false
tags:
  - know-how
  - hardware
  - blackberry
  - keyone
  - ota
  - updates
  - firmware
---
Variants and update situation
=============================

The KEYone is sold as different models: BBB100-1 (US model), BBB100-2 (EMEA model), etc. And each
model is distributed in multiple variants, expressed in the last 3 digits of the PRD number.

<p><div class="noteclassic" markdown="1">
The PRD number of your device can be found on the box or in the *Project test* menu in the
updater's advanced mode. (see below) Later firmware versions also show this in the *Traceability*
option of the [MMI test mode]({% post_url 2017-06-30-bb-keyone-mmi-test-engineering-mode %}).
</div></p>


Here are a few models and variants:

|    Model   |   PRD number  | Variant                |
|------------|---------------|:-----------------------|
| BBB100-1   | PRD-63116-001 | Unlocked US            |
| BBB100-1   | PRD-63116-003 | Bell                   |
| BBB100-1   | PRD-63116-005 | Rogers                 |
| BBB100-1   | PRD-63116-036 | AT&T                   |
| BBB100-2   | PRD-63117-003 | Unlocked UK            |
| BBB100-2   | PRD-63117-011 | Unlocked Germany       |
| BBB100-2   | PRD-63117-015 | NL, Belgium            |
| BBB100-2   | PRD-63117-023 | AZERTY Belgium         |
| BBB100-2   | PRD-63117-027 | Unlocked UAE           |
| BBB100-3   | PRD-63118-001 | Unlocked               |
| BBB100-4/5 | PRD-63734-001 | Unlocked               |
| BBB100-4/5 | PRD-63734-002 | Unlocked?              |
| BBB100-6   | PRD-63763-001 | Unlocked               |
| BBB100-7   | PRD-63764-001 | Unlocked               |

While the variants of a model all have the same hardware, the different variants allow for
different features being enabled, e.g. for different carriers.

The downside is that different carriers also release updates at different times. Sometimes weeks to
months after other variants got them already. Luckily, all different variants of a model seem to
use the same firmware. This allows to install updates from another variant should they not be
available for the own device.


Update process in general
=========================

On the KEYone, there's an app called *Updates* pre-installed which sends the device's PRD number
and current firmware version to TCL's servers which then reply with "There's no update for you." or
the link to the update file.

The app then downloads said file and puts it at the right location so the Android bootloader can
find and install it.

Such OTA update contains a script with all instructions about what is to be updated. This script
also does various checks first to make sure it can be installed properly. So the risk using the
method described below is very small as a wrong update would abort automatically.


Enabling advanced mode in Updates app
=====================================

The *Updates* app on the KEYone has a hidden advanced mode with additional features. You can
activate that by tapping the three dots in the upper right and selecting *Help* to get to the
help screen. There, tap 8 times on the last item *Checking for updates*. A dialog box will appear
asking you for a password.

<p><div class="noteclassic" markdown="1">
The password can be obtained by decompiling the APK file for the Updates app, either using some
[online service](http://www.javadecompilers.com/apk) or [an app](https://play.google.com/store/apps/details?id=com.njlabs.showjava)
and looking at the `/com/tcl/ota/AdvancedModeValidateFragment.java` file.

To get the APK file, you can use [ML Manager](https://play.google.com/store/apps/details?id=com.javiersantos.mlmanager)
or maybe your file manager supports it already. (Don't forget to enable showing system apps and
not user apps only.)
</div></p>

<!-- Password: fotaapp*#1221# -->

After you've entered the correct password, three new menu items appear in the Updater's main menu:
*Update manually*, *FOTA test* and *Project test*.


Menu item: Update manually
--------------------------

This one allows you to install a full firmware update manually from the device. You need to name
the update file something like `JSU_PRD-63117-123.zip` (replace the PRD number with that of your
device) and put it in the root directory of your MicroSD card or the internal storage.

It should then appear in this menu in the *Updates* app. You can install it by tapping the three
dots behind the filename and select *Install*.


Menu item: FOTA test
--------------------

Here you can simulate different phone models/variants with different firmware versions and test
if the updater works correctly. **This is exactly what we need during the process below.**


Menu item: Project test
-----------------------

This menu item shows a few parameters like your PRD number (called *Device CU Reference* here),
current firmware version, your IMEI and a few more parameters. You can also test the notification
Spark in the BlackBerry Launcher and the Play Services.


Finding out which variant gets what update
==========================================

OTAs are always differential updates for a specific firmware version to a newer one. To install it,
you **must** have the correct initial firmware installed. Otherwise, the updater script will fail
and abort the update.

To find out which updates are available for which variant, I found [this script](https://gist.github.com/thurask/f4ace564e6575ef41c4e35d2458ca2d0)
which I rewrote and improved. My version can be found here:

<https://github.com/mbirth/tcl_ota_check>

For convenience, I put up a matrix [here]({% post_url 2017-09-28-bb-keyone-variants-ota-matrix %}).

Let's say we have a UK BBB100-2. The PRD would be PRD-63117-003 and as of September 2017, we'd run
firmware version `AAM481`. However, that's the July patch, not the September patch.

But we can see from the matrix, that other variants already got the August patch (`AAN358`) and the
`PRD-63117-034` even is on the September patch already (`AAO472`). However, the `-034` never ran
version `AAM481`. So we have to get our device to `AAN358` first to be able to patch it to
`AAO472`. For that, we can use any variant that has our current version `AAM481` and `AAN358`, e.g.
`PRD-63117-011`.


Doing the actual update
=======================

Now that we've chosen a variant that has the update we want, we just have to make the updater
think our device is that variant.

To do this, go into the new menu *FOTA test* and there:

1. enable **Test mode**
1. set the *Emulated CU Reference* to the chosen variant: `PRD-63117-011`
1. set the *Emulated current version* to your current version: `AAM481`
1. tap the <kbd>START TEST</kbd> button below

You should end up back in the updater's start screen. Tap the **CHECK FOR UPDATES NOW** button.
It should search for updates and find the OTA to version `AAN358`. It should also start to download
the new version. When done, tap the button to start the installation.

Your phone will reboot and install the update. It'll boot up to the new version.

<p><div class="notetip" markdown="1">
In the case of the `PRD-63117-003` variant and assuming a time of mid-September 2017, the just
installed `AAN358` isn't the latest version for this model. There's a newer `AAO472` version
available as you can see from the [matrix]({% post_url 2017-09-28-bb-keyone-variants-ota-matrix %}).
But only the variant `PRD-63117-034` is currently getting the OTA update to `AAO472`. Enter that
into the *Emulated CU Reference* field in the *Updates* app, change the *Emulated current version*
to the just installed `AAN358` and tap <kbd>START TEST</kbd> again. It'll show the second update
and let you install that.

(If the updater started to download the previous update file again, remove it like explained in
the *Cleanup* section.)
</div></p>


Cleanup
=======

Disabling test mode
-------------------

After you've updated your device, it's important to disable the **Test mode** of the *Updates* app
so it will notify you of further updates. To do this, go into the *FOTA test* menu and slide the
switch for *Test mode* into the "off" position.


Removing already downloaded update
----------------------------------

It might happen that the updater starts to download the same update (which we just installed)
again. If that happens to you, first make sure the **Test mode** is disabled (see above), then go
into the updater's *Settings* menu. You should find an entry about the downloaded file with a
dustbin/trashcan icon. Tap that to delete the wrong file.


Disabling advanced mode
-----------------------

There's no built-in way to disable the advanced mode of the *Updates* app. So the only way is to
reset all settings for the app itself. To do this, you need to go into the Android settings →
*Apps*. There, tap the three dots menu and select *Show system*. Now scroll down the list to tap
the *Updates* app. There, tap *Storage* and hit the <kbd>CLEAR DATA</kbd> button. After that, the
*Updates* app is in "Basic" mode again.





*[APK]: Android Package
*[CU]: Customer Unit
*[EMEA]: Europe, Middle East, Africa
*[FOTA]: Firmware Over-the-Air
*[IMEI]: International Mobile Equipment Identity
*[OTA]: Over-the-air
*[PRD]: Product Requirements Documents
*[TCL]: Telephone Communication Limited, nowadays: The Creative Life
*[UAE]: United Arab Emirates
*[UK]: United Kingdom
*[US]: United States (of America)
