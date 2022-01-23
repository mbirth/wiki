---
created: 2008-07-15 23:43:57 +0200
language: en
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/07/15/ezpublish-templates-in-eclipse.html
tags:
- know-how
- software
- ezpublish
title: eZPublish templates in Eclipse
toc: false
updated: 2009-02-08 14:37:49 +0100
---

Syntax-highlighting and Code-completion
=======================================

With the [Smile eZ Publish](http://smile-ez-plugin.sourceforge.net/)-plugin for Eclipse, there is syntax highlighting
and code-completion for eZ Publish-templates. But this only works if you open the `.tpl`-files out of a project.

If not already set, at the configuration page *Window → Preferences… → General → Editors → File Associations → *.tpl*
select *Open With… → Smile TPL Editor*. Alternatively you can use the *[JAC eZ Template Editor](http://ez.no/developer/contribs/3rd_party/eclipse_plugin_jac_ez_template_editor)*
which is included in that plugin.

Installation:

1. `Help → Software Updates → Find and Install…`
1. (X) Search for new features to install
1. Click <kbd>Next ></kbd>
1. `New Remote Site…`
1. **Name:** Smile ezPublish
1. **URL:** http://smile-ez-plugin.sourceforge.net/update/
1. Click <kbd>OK</kbd>
1. make sure that the new entry is checked
1. below: <kbd>Finish</kbd>
1. install the plugin as usual


Template-validating and Class-browser
=====================================

To get these features you have to download the [Smile eZ Publish Extension](http://sourceforge.net/project/showfiles.php?group_id=190833&package_id=224521)
and install it into eZ Publish. Enable the extension `smileclasses` at the eZ-Adminpanel.

In Eclipse, go to your project settings, open the page *eZ Publish* and at **Server** enter the URL to the
smileclasses-export, e.g. `http://foobar.com/ezpublish/smileclasses/export`. **Web root** might be the local filepath
to the main directory of the server (don't know if this is used, it isn't mentioned in any documentation). You might
also enable the template validation.

If everything is correct, at *Window → Show View → Other… → Smile eZ Publish* you can activate the *[Classes View](http://smile-ez-plugin.sourceforge.net/screen1.jpg)*
to see all eZ Publish-classes.

**Note:** On sites with `RequireUserLogin=true` you have to add both smileclasses-functions to the `AnonymousAccessList[]`.
(see [here](http://sourceforge.net/tracker/index.php?func=detail&aid=1694375&group_id=190833&atid=934946)).