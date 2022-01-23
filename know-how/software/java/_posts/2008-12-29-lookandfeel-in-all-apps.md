---
created: 2008-12-16 13:16:21 +0100
language: en
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/12/16/lookandfeel-in-all-apps.html
tags:
- know-how
- software
- java
title: LookAndFeel in ALL apps
toc: false
updated: 2008-12-29 00:25:37 +0100
---

To set your favorite LAF in all Java apps, you can create a file `swing.properties` in your `jre/lib`[^1] folder with
following contents:

    swing.laf=com.sun.java.swing.plaf.nimbus.NimbusLookAndFeel
    swing.defaultlaf=com.sun.java.swing.plaf.nimbus.NimbusLookAndFeel

You can also set the `_JAVA_OPTIONS` environment variable to the following (or just specify these parameters upon the
`java`-call):

    -Dswing.laf=com.sun.java.swing.plaf.nimbus.NimbusLookAndFeel -Dswing.defaultlaf=com.sun.java.swing.plaf.nimbus.NimbusLookAndFeel

From now on you will see *NimbusLookAndFeel* in all Java applications which do not set a LAF on their own.

Available LookAndFeels as of 1.6:

* `com.sun.java.swing.plaf.gtk.GTKLookAndFeel`
* `com.sun.java.swing.plaf.motif.MotifLookAndFeel`
* `com.sun.java.swing.plaf.nimbus.NimbusLookAndFeel`
* `com.sun.java.swing.plaf.windows.WindowsLookAndFeel`
* `javax.swing.plaf.basic.BasicLookAndFeel`
* `javax.swing.plaf.metal.MetalLookAndFeel`
* `javax.swing.plaf.multi.MultiLookAndFeel`
* `javax.swing.plaf.synth.SynthLookAndFeel`


[^1]: Windows: `C:\Program Files\Java\jre1.6.0_01\lib`  
      Linux: `/usr/lib/jvm/java-6-sun/jre/lib`