---
created: 2020-01-06 11:57:02 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2020/01/06/uk-extended-keyboard-with-even-more-extensions.html
tags:
- know-how
- software
- windows
- keyboard
- driver
- layout
- microsoft
- umlaut
- umlauts
title: UK Extended keyboard with even more extensions
toc: false
updated: 2020-01-06 11:57:02 +0100
---

Recently, I switched from a German QWERTZ to a UK Extended QWERTY keyboard layout - for easier
access to characters for programming.

The UK Extended keyboard is great in that it still provides means to type umlaut characters which
I still need when writing German mails. For normal umlauts, you can type <kbd>AltGr</kbd> + <kbd>2</kbd>
followed by any vowel to get e.g. `ä`, `ö` or `ü`. To the get the "sz" ligature, in Linux, you can
type <kbd>AltGr</kbd> + <kbd>s</kbd> which produces a `ß`.

However, after changing the keyboard layout on my Windows 10 work PC, I've noticed that the official
UK Extended layout doesn't usually provide the `ß`. And while Linux people were smart and added it,
in Windows <kbd>AltGr</kbd> + <kbd>s</kbd> does nothing.

But luckily, Microsoft provides a small tool to create custom keyboard layouts: The
[Microsoft Keyboard Layout Creator](https://www.microsoft.com/en-us/download/details.aspx?id=22339).
And it still works with Windows 10.

During installation, make sure to install it into a path **without any spaces**, because otherwise
you won't be able to compile the layouts. I've installed it into `C:\kbdcreator`.
 
After installation, you can run it from the Start menu. Choose *File* --> *Load Existing Keyboard...*
and look for "United Kingdom Extended" to not have to start from scratch.

With the keyboard loaded, check the box "Alt+Ctrl (AltGr)" on the left and then click the "s" (VK_S)
button. An input box should appear - copy&paste a "ß" (U+00df) and click "OK".

Now also check the "Shift" checkbox on the left and click "s" again. This time, copy&paste the upper
case version "ẞ" (U+1e9e) and confirm with "OK".

You can now edit the Metadata by opening *Project* --> *Properties*. Remember, what you've configured
as the "Description" and "Language". That's where you'll find the keyboard again later.

Once you're satisfied, you can compile the keyboard by selecting *Project* --> *Build DLL and Setup Package*.
This will build installers for 32bit and 64bit Windows. After that is done, you're asked if you want
to open the output folder. Do this and double-click the `setup.exe` to install your newly created
keyboard.

With this installed, you can now open the Windows Control Panel and add this keyboard to your system.