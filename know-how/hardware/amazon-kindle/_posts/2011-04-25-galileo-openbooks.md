---
created: 2011-04-25 14:33:47 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2011/04/25/galileo-openbooks.html
tags:
- know-how
- hardware
- amazon
- kindle
- galileo
- openbooks
title: Galileo OpenBooks
toc: false
updated: 2011-04-25 14:33:47 +0200
---

Calibre settings
================

Enter the following two expressions under *Search & Replace* in the conversion settings:

* **First expression**
    * *Search Regular Expression:* `(<body.*>)(.|\n)*(<div class="main">)`
    * *Replacement Text:* `\1\3`

* **Second Expression**
    * *Search Regular Expression:* `<hr.*><a name="kommentar">(.|\n)*(</body>)`
    * *Replacement Text:* `</div>\2`

This will cut out the left (contents) and right (ads) sides as well as the comment form. You will get a plain nice eBook.