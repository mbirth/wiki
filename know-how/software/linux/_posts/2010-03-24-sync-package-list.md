---
created: 2010-03-23 17:53:30 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2010/03/23/sync-package-list-between-2-pcs.html
tags:
- know-how
- software
- linux
- administration
title: Sync Package List between 2 PCs
toc: false
updated: 2010-03-24 10:39:37 +0100
---

To export a list of all installed packages, you can use the following command:

    sudo dpkg --get-selections > selections.txt

But this will loose any `{A}` markers for automatically installed packages and therefore produce a lot of garbage when
dependencies change.

To export only manually installed packages, use `aptitude` like this:

    sudo aptitude search '~i!~M' -F '%p install' > selections.txt

(More `aptitude` filterstrings can be found on [their project page](http://algebraicthunk.net/~dburrows/projects/aptitude/doc/en/ch02s03s05.html).)

On the other machine, use the following command to set the new markers:

    sudo dpkg --set-selections < selections.txt

Now run `aptitude` and resolve the dependencies.