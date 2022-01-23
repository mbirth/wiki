---
created: 2009-03-05 23:44:43 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/03/05/moneyplex.html
tags:
- know-how
- software
- money
title: Moneyplex
toc: false
updated: 2009-03-05 23:44:43 +0100
---

* **Homepage:** [matrica.de](http://www.matrica.de/)

Moneyplex is an online banking application especially for the German HBCI banking system.


Umlauts in Ubuntu
=================

Since Ubuntu is fully UTF-8 for some time now (and Moneyplex isn't), you'll see strange things when using it: Some
umlauts are replaced by question marks while others are printed fine.

To get everything working, you have to generate an (old) ISO-8859-15 locale. To accomplish this, edit the file
`/var/lib/locales/supported.d/de` and add the following line:

    de_DE@euro ISO-8859-15

Now run the following command to generate the new locale:

{% highlight bash %}
sudo dpkg-reconfigure locales
{% endhighlight %}

Finally you have to edit the `~/moneyplex/start` script to use the new locale. Change the following two lines:

{% highlight bash %}
export LC_ALL=de_DE.ISO-8859-15@euro
export LANG=de_DE.ISO-8859-15@euro
{% endhighlight %}

Now you should see all umlauts correctly.


*[HBCI]: Homebanking Computer Interface
*[UTF]: Unicode Transformation Format