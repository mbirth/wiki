---
title: Merge Video Files
layout: default
created: 2010-03-02 22:13:26 +0100
updated: 2010-03-02 23:59:34 +0100
toc: false
tags:
  - know-how
  - software
  - linux
  - video
---
To merge multiple (similar) video files into one big file, there are different ways.


avimerge
========

This only works with `avi` files. *avimerge* is part of the [transcode-utils](apt://transcode-utils) package.

    avimerge -o output.avi -i file1.avi file2.avi file3.avi fileN.avi

If the sound doesn't match from the second file on, use the `-c` switch.

<p><div class="noteimportant" markdown="1">
Check your files after merging! If you have no audio near the end of the final video file, use *mencoder* below.
</div></p>


mencoder
========

This should also work with `mpg` videos. Install the [mencoder](apt://mencoder) package.

    mencoder -oac copy -ovc copy file1.avi file2.avi file3.avi fileN.avi -o output.avi
