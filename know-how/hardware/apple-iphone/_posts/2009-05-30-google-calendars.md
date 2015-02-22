---
title: Google Calendars
layout: default
created: 2009-05-30 23:11:26 +0200
updated: 2009-05-30 23:11:26 +0200
toc: false
tags:
  - know-how
  - hardware
  - apple
  - iphone
  - google
  - calendar
---
If you want to sync your iPhone primarily with an Exchange server of your company but do want to have your (private) Google Calendars with you, you can add them as CalDAV calendars (since iPhone OS 3.0).

Go to *Settings* → *Mail, Contacts, Calendars* → *Add Account…* → *Other* → *Add CalDAV Account*:

* enter the following:
    * **Server:** `www.google.com`
    * **User Name:** `<username>@gmail.com`
    * **Password:** *`<yourpassword>`*
* touch *Next*, this will create an entry with your default (first) Google Calendar

If you want to add another calendar, repeat the above steps and do this to change to another calendar:

* after adding the calendar touch the new entry (called *"Google"*)
* touch *Advanced Settings*
* edit the *Account URL*, the default one looks like `https://www.google.com:443/calendar/dav/<username>%40gmail.com/user`:
    * replace `<username>%40gmail.com` by the Calendar ID of the other calendar
    * you will find this ID in the settings of the specific Google Calendar, it is in the section **Calendar Address**, it looks like this: `2et3hcu26nrtli1r5r1slvus84@group.calendar.google.com`
    * you might have to replace the `@` by `%40`
* go back and open the Calendar app to download the calendar data
