---
created: 2013-01-15 10:00:50 +0100
language: en
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2013/01/15/tango-messenger.html
tags:
- know-how
- software
- android
- messenger
title: Tango Messenger
toc: false
updated: 2013-01-15 10:00:50 +0100
---

If you text with someone over [Tango](https://play.google.com/store/apps/details?id=com.sgiggle.production), you might
not know his/her phone number, because he got yours first and started the conversation.

But if you are on a rooted Android, that's no problem. Head to `/data/data/com.sgiggle.production/files` and find the
file `call_log.dat`. Take a look at it - it should look similar to this:

{% highlight xml %}
<?xml version="1.0" encoding="utf-8"?>
<call_records>Cq4BChZvTGszYW9JS1g5a0E1S1VaNXJTN2FnEgAaDys0OSAxMjM0NTY3ODkwMSIWam9obi5kb2VAZXhhbXBsZS5vcmcoAzCYobqHBTgAQP///////////wFKCEpvaG5SBkRvZVo1ZWI5NWU3Mzk0NGJmMGVmNGRjZTdiMDRlYWQ0MjBiZDNAcmVhbHRpbWUuc2dpZ2dsZS5jb21iBTc3Mjg4agByAHoACq8BChZv
TGszYW9JS1g5a0E1S1VaNXJTN2FnEgAaDys0OSAxMjM0NTY3ODkwMSIWam9obi5kb2VAZXhhbXBsZS5vcmcoAzDy07eHBTgAQP///////////wFKCEpvaG5SBkRvZVo1ZWI5NWU3Mzk0NGJmMGVmNGRjZTdiMDRlYWQ0MjBiZDNAcmVhbHRpbWUuc2dpZ2dsZS5jb21iBjExMzE4NWoAcgB6AAquAQoWb0xrM2Fv
SUtYOWtBNUtVWjVyUzdhZxIAGg8rNDkgMTIzNDU2Nzg5MDEiFmpvaG4uZG9lQGV4YW1wbGUub3JnKAEwo9G3hwU4AED///////////8BSghKb2huUgZEb2VaNWViOTVlNzM5NDRiZjBlZjRkY2U3YjA0ZWFkNDIwYmQzQHJlYWx0aW1lLnNnaWdnbGUuY29tYgU5NTMzNmoAcgB6AA==</call_records>
{% endhighlight %}

The string in the `<call_records>`-tag looks very much like base64, so let's try! Use a local converter or some online
service like [base64decode.org](http://www.base64decode.org/) to decode the Base64-stuff only (not the XML around it!).

You'll get something like this:

~~~
..
.oLk3aoIKX9kA5KUZ5rS7ag....+49 12345678901".john.doe@example.org(.0.....8.@..........J.JohnR.DoeZ5eb95e73944bf0ef4dce7b04ead420bd3@realtime.sgiggle.comb.77288j.r.z.
..
.oLk3aoIKX9kA5KUZ5rS7ag....+49 12345678901".john.doe@example.org(.0.ӷ..8.@..........J.JohnR.DoeZ5eb95e73944bf0ef4dce7b04ead420bd3@realtime.sgiggle.comb.113185j.r.z.
..
.oLk3aoIKX9kA5KUZ5rS7ag....+49 12345678901".john.doe@example.org(.0.ѷ..8.@..........J.JohnR.DoeZ5eb95e73944bf0ef4dce7b04ead420bd3@realtime.sgiggle.comb.95336j.r.z.
~~~

And there it is:

* conversation id (`oLk3aoIKX9kA5KUZ5rS7ag`)
* phone number (`+49 12345678901`)
* email address (`john.doe@example.org`)
* name (2 fields: `John` and `Doe`)
* maybe some online conversation id (`5eb95e73944bf0ef4dce7b04ead420bd3@realtime.sgiggle.com`)
* some number? (`77288`, `113185` and `95336`)