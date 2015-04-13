---
title: sudo insults on wrong password
layout: default
created: 2008-09-01 09:50:13 +0200
updated: 2008-09-01 09:50:13 +0200
toc: false
tags:
  - know-how
  - software
  - linux
  - fun
---
Edit the file `/etc/sudoers` and find the line:

    Defaults        env_reset

Now add `,insults` to the end of the line so that it reads like that:

    Defaults        env_reset,insults


From now on, *sudo* will insult anyone who mistypes his password. See for yourself:

> [sudo] password for foo:  
> *Hold it up to the light --- not a brain in sight!*  
> [sudo] password for foo:  
> *Speak English you fool --- there are no subtitles in this scene.*  
> [sudo] password for foo:  
> *I think … err … I think … I think I'll go home*  
> sudo: 3 incorrect password attempts
