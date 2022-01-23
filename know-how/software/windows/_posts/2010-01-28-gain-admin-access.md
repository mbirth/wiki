---
created: 2010-01-28 19:40:15 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2010/01/28/gain-admin-access.html
tags:
- know-how
- software
- windows
- hacking
title: Gain Admin Access
toc: false
updated: 2010-01-28 20:24:21 +0100
---

To get access to a Windows PC as an *Administrator* user, there is a very brute security hole which you can use. The
only thing is: You need physical access to the machine.

The procedure is as follows:

1. use a Linux Boot-CD (e.g. [BackTrack 4](http://www.backtrack-linux.org/) or the [System Rescue CD](http://www.sysresccd.org/Download))
   or a Windows Installation disc (of the same version as installed!)
    * **Linux Boot-CD:** (there's also a nice screencast over at [offensive-security.com](http://www.offensive-security.com/videos/owning-windows-vista-video/hacking-vista-with-backtrack.html))
        1. if not already, mount the Windows partition
        1. go to `Windows/system32/`
        1. rename the file `Utilman.exe` to `Utilman.exe.bak` and copy `cmd.exe` to `Utilman.exe`:  
          
                # mv Utilman.exe Utilman.exe.bak
                # cp cmd.exe Utilman.exe

        1. reboot the machine into Windows
    * **Windows Boot-CD:**
        1. select your Windows version to "repair"
        1. if it asks whether you want to do use *System Rescue*, say "No"
        1. after it has given up trying to repair your system, click the small link *Advanced Recovery Options*
        1. select *Command Prompt*
        1. now go to your Windows drive, for me it was `D:`
        1. do a `cd \Windows\system32`
        1. now rename the file `Utilman.exe` to `Utilman.exe.bak` and copy `cmd.exe` to `Utilman.exe`:  
                  
                D:\>ren Utilman.exe Utilman.exe.bak
                D:\>copy cmd.exe Utilman.exe

        1. reboot the machine into the regular Windows
1. on the Logon screen of Windows, press <kbd>Win</kbd>+<kbd>U</kbd> - this would normally open the [Utility Manager](http://www.microsoft.com/enable/training/windowsxp/openutilitymanager.aspx)
   aka. `Utilman.exe`, but now, the *Command Prompt* should show up
1. you have `SYSTEM` rights, so you can easily add a new Administrator user:  
          
        C:\>net user BadGuy GoodPassword /add
        C:\>net localgroup Administrators BadGuy /add

   This will add the user `BadGuy` with the password `GoodPassword` and make him a member of the *Administrators* group.
1. Login with the newly created user `BadGuy`
1. Remember to delete the fake `Utilman.exe` and rename `Utilman.exe.bak` back to `Utilman.exe`