---
title: Galileo OpenBooks
layout: default
created: 2011-04-25 14:33:47 +0200
updated: 2011-04-25 14:33:47 +0200
toc: false
tags:
  - know-how
  - hardware
  - amazon
  - kindle
  - galileo
  - openbooks
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
