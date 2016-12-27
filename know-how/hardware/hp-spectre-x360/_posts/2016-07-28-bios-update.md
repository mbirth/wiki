---
title: hp Spectre x360 BIOS Update
language: en
layout: default
created: 2016-07-28 02:30:21 +0200
updated: 2016-07-28 02:30:21 +0200
toc: false
tags:
  - know-how
  - hardware
  - hp
  - spectre
  - bios
  - update
---
BIOS updates are actually done via the hidden `HP_TOOLS` service partition which
you can get to by pressing <kbd>F2</kbd> after switching on the notebook or from
the *Startup Menu*. The update you download from the hp service page merely
copies the new BIOS files to that partition.

![]({{ site.url }}/assets/hp-startup-menu.jpg 'Startup Menu'){: width="400px"}

However, if you deleted that partition or switched to Linux for your operating
system, things get a little bit complicated.


Hidden partition deleted
========================

So you deleted the hidden `HP_TOOLS` partition when setting up your new
operating system. The only effect you'll notice is that the *System Diagnostics*
option in the BIOS (<kbd>F2</kbd>) will look a bit dull:

![]({{ site.url }}/assets/hp-system-diags-internal.jpg 'Hardware Diagnostics'){: width="400px"}

But don't worry, this can easily be fixed. You only need a spare USB flash
drive and a Windows 7 (or newer) VM or PC. Then do this:

1. Download [HP PC Hardware Diagnostics](http://h41336.www4.hp.com/go_techcenter_pcdiags)
   from the hp support page (first item, ~23 MiB, formerly known as *HP UEFI
   Support Environment*)
1. Run your Windows 7+ VM or get to a Windows 7+ PC.
1. Plug in the empty flash drive (or connect it to your VM).
1. Run the downloaded installer and choose to **Install to USB**.

That's it. You now have a `HP_TOOLS` flash drive which contains the same as the
hidden partition you deleted. And this includes a tool to update your BIOS
firmware.

You can check if everything went correctly by plugging the flash drive to your
Spectre, rebooting and pressing <kbd>F2</kbd> before the operating system loads.

Now, the *System Diagnostics* should look way different:

![]({{ site.url }}/assets/hp-system-diags-tools.jpg 'Hardware Diagnostics from HP_TOOLS'){: width="400px"}


Updating the BIOS firmware
==========================

Now to the actual updating of the BIOS firmware. Of course, you first have to
download the BIOS firmware from the [Spectre's support page](http://support.hp.com/gb-en/drivers/selfservice/hp-spectre-13-4100-x360-convertible-pc/8499273/model/8902244).

Find a PC (or VM) with Windows XP (or newer) and proceed as follows:

1. Plug the flash drive to the Windows machine.
1. Run the downloaded installer and select the *Install to USB stick* option
   when asked.
1. Eject the flash drive and plug it into your Spectre.
1. Switch on the Spectre and press <kbd>F2</kbd> a few times until you end up
   in the *HP PC Hardware Diagnostics UEFI* tool.
1. Click on ***Firmware Management***.

Now you should be seeing this screen:

![]({{ site.url }}/assets/hp-bios-update.jpg 'Firmware Management'){: width="400px"}

Click on *BIOS Update*, confirm that you really want to update the BIOS and
that the new version is newer than your current one. Then just wait for it to
finish and the Spectre to boot up again.


No Windows available
====================

In the case there's no Windows VM or PC available to you whatsoever, you could
try unpacking the installers manually.


HP PC Hardware Diagnostics
--------------------------

First, use `7za` to unpack the downloaded `SP123456.exe` file. This will give you
a `setup.exe` from that package, because hp wraps the actual installer in another
file.

With that `setup.exe`, you can run `wine setup.exe /a` to run it in *admin* mode.
(See [here](http://stackoverflow.com/questions/8681252/programmatically-extract-contents-of-installshield-setup-exe).)
Select your language and watch the *Extracting HP PC Hardware Diagnostics UEFI.msi*
progress bar. Now the important part: **As soon as the dialog finishes**, press
<kbd>Ctrl</kbd>+<kbd>C</kbd> to abort the process so the installer doesn't
delete its temporary folder again. 

Now search the windows temp folders for some folder like `{15EC3F6C-EA46-43B7-9B8A-132F011C1436}`
(differs each time). This could be in `~/.wine/drive_c/windows/temp/` or
`~/.wine/profile/Local Settings/Temp/`. In there, you'll find a file `HP PC Hardware Diagnostics UEFI.msi`.

This can be unpacked with `7z x "HP PC Hardware Diagnostics UEFI.msi"` (`7za`
won't work!), but it won't restore the proper file names. Luckily, there's also
a `Data1.cab` in there, which you can extract with `cabextract Data1.cab`. This
one contains the proper filenames.

Now, on your empty *vfat* formatted flash drive, create the following directory
structure:

* Hewlett-Packard
  * BIOS
    * Current
    * New
    * Previous
  * BIOSUpdate
  * SystemDiags

(Yes, that's a `Hewlett-Packard` directory in the root folder, `BIOS`, `BIOSUpdate`
and `SystemDiags` below that and `Current`, `New` and `Previous` below the `BIOS`
directory.)

From the extracted files, copy `CryptRSA.efi` and `CryptRSA32.efi` to `BIOSUPdate`
*and* `SystemDiags`. Copy all the `HPBios*` files to the `BIOSUpdate` directory
and all `HPSysDiags*` and `SystemDiags*` files go to the `SystemDiags` dir.

This should be sufficient to make it work. (No guarantees!)


BIOS Firmware
-------------

Here, you can unpack the installer from the `SP123456.exe` with `7za`. But
I can't find a way to unpack the extracted installer file as this seems to be
some custom application. Also it uses some specific driver (probably to access
the BIOS) which breaks wine.

So for this, you'd definitely need access to some Windows XP (or newer) PC or
VM. However, since you already have the prepared flash drive, it's only a matter
of plugging that in, running the installer and selecting the *Install to USB
stick* option.

You can also use the *Advanced* option to extract the BIOS files to a separate
directory and copy those manually onto your flash drive to this directory:

    Hewlett-Packard/BIOS/New/

The files are named `0802D.*`, `08035.*`, `0804E.*` and `0804F.*`. Each as
`*.bin` and `*.sig`.


*[BIOS]: Basic Input/Output System
*[VM]: Virtual Machine
*[USB]: Universal Serial Bus
*[PC]: Personal Computer
*[HP]: Hewlett-Packard
