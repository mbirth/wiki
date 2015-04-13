---
title: Tango colours in command prompt
layout: default
created: 2012-12-18 16:19:12 +0100
updated: 2014-02-25 16:48:12 +0100
toc: false
tags:
  - know-how
  - software
  - windows
---
<https://en.wikipedia.org/wiki/Tango_Desktop_Project#Palette>

Import this registry file:

{% highlight registry %}
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Console]
; Black
"ColorTable00"=dword:00000000
; Blue
"ColorTable01"=dword:00a46534
; Green
"ColorTable02"=dword:00069a4e
; Cyan
"ColorTable03"=dword:009a9806
; Red
"ColorTable04"=dword:000000cc
; Magenta
"ColorTable05"=dword:007b5075
; Yellow
"ColorTable06"=dword:0000a0c4
; White
"ColorTable07"=dword:00cfd7d3
; Dark Gray (Light Black)
"ColorTable08"=dword:00535755
; Light Blue
"ColorTable09"=dword:00cf9f72
; Light Green
"ColorTable10"=dword:0034e28a
; Light Cyan
"ColorTable11"=dword:00e2e234
; Light Red
"ColorTable12"=dword:002929ef
; Light Magenta
"ColorTable13"=dword:00a87fad
; Light Yellow
"ColorTable14"=dword:004fe9fc
; Light White
"ColorTable15"=dword:00eceeee
{% endhighlight %}
