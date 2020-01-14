---
title: Import video from MiniDV camcorder in Windows 10
layout: default
language: en
created: 2020-01-14 16:54:43 +0100
updated: 2020-01-14 16:54:43 +0100
toc: false
tags:
  - know-how
  - hardware
  - minidv
  - camera
  - camcorder
  - windows 10
  - win10
  - windows10
  - panasonic
---
My dad has an old Panasonic MiniDV camcorder and wanted to import old tapes into his cutting tool
on Windows 10. After hooking up the camcorder via Firewire, the import dialog showed the time code
of the running tape, but instead of the video, the preview was black and there was no audio.

To make sure it isn't a problem of the software, we tried [VirtualDub](http://virtualdub.org/) -
with the same result.

After some googling, it seems as if Microsoft removed parts of the Firewire IEEE1394 driver. And
those parts seem to be necessary for these old camcorders.

Luckily, they offer a "Legacy" driver for downloading:

* https://www.microsoft.com/en-us/download/details.aspx?id=44218

This will download a `1394_OHCI_Legacy_Driver.msi`. Double-click to install it.
Afterwards, you'll find a new folder `C:\Program Files (x86)\1394 OHCI Compliant Host Controller (Legacy)\`.

In there, depending on your PC, enter either the `x86_driver` or the `x64_driver` folder, right-click the
`Legacy1394.inf` file and select **Install**.

After installation, open your Device Manager, find the section "IEEE 1394 Bus host controllers" and open it.
Find your Firewire card, right-click it and select **Update driver...**. Select "Browse my computer for
driver software", then "Let me pick from a list of device drivers on my computer" and find the driver for
**Generic 1394 OHCI compliant host controller (Legacy)**. Select that and click "Next" to install it.

That's it - you should be able to import video now.
