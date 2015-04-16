---
title: Network Monitoring
layout: default
created: 2009-11-23 10:01:08 +0100
updated: 2009-11-27 23:50:53 +0100
toc: false
tags:
  - know-how
  - software
  - monitoring
  - network
---
I tried some different products for network monitoring since the top dog *Nagios* is everything else but easy to
maintain.

Tested products were:

* [OpenNMS](#opennms)
* [Zenoss Core](#zenoss-core)
* [Pandora FMS](#pandora-fms)


OpenNMS
=======

* **Homepage:** <http://www.opennms.org/>

Configurable by XML files, so suffers the same problem as Nagios - you need something to configure it comfortably or
spend time writing the config yourself. Compatible to Nagios plugins.


Pandora FMS
===========

* **Homepage:** <http://www.pandorafms.org/>

Really great interface. Supports Nagios plugins. Easy addition of own plugins. For me, this one had the best feature
set.


Zenoss Core
===========

* **Homepage:** <http://community.zenoss.org/>

Not really intuitive configuration. Supports Nagios plugins, offers own extension system (ZenPacks).
