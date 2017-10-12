---
title: BlackBerry KEYone variant's OTA updates
layout: default
language: en
created: 2017-09-17 20:35:18 +0200
updated: 2017-10-12 16:34:48 +0200
toc: false
tags:
  - know-how
  - hardware
  - blackberry
  - keyone
  - ota
  - updates
  - firmware
---
<p><div class="noteimportant" markdown="1">
Note that firmwares are only compatible between the same model. So when trying to update a device
from version `AAL093`, make sure to emulate the correct model. If you have the BBB100-1, you have
to use `PRD-63116-001`. If you have the BBB100-2, use `PRD-63117-003`.

For other BBB100 models, make sure the 5 digits in the middle of the PRD number match.

However, since the OTA updates check the device before installing, there should be no risk of
bricking your device should you manage to download the wrong update.
</div></p>


BBB100-1 (PRD-63116) firmwares
==============================

<div style="overflow-x: scroll;" markdown="1">

| PRD-63116-001 |        | AAL093 |        |        | AAL964 |        |        |        | AAN355 |        | AAN517 |        | AAO472 |        |
| PRD-63116-003 | AAK399 |        | AAL483 |        |        |        | AAM625 |        |        |        | AAN517 |        | AAO472 |        |
| PRD-63116-005 | AAK399 |        | AAL483 |        |        |        | AAM625 |        |        |        | AAN517 |        | AAO472 |        |
| PRD-63116-007 | AAK399 |        | AAL483 |        |        |        | AAM625 |        |        |        |        |        | AAO472 |        |
| PRD-63116-009 |        |        |        | AAL619 |        | AAM481 |        |        |        | AAN358 |        |        | AAO472 |        |
| PRD-63116-010 |        |        |        | AAL619 |        | AAM481 |        |        |        | AAN358 |        |        |        |        |
| PRD-63116-013 |        |        |        | AAL619 |        | AAM481 |        |        |        | AAN358 |        |        | AAO472 |        |
| PRD-63116-017 |        |        |        |        |        | AAM481 |        |        |        |        |        |        | AAO472 |        |
| PRD-63116-020 |        |        |        |        |        | AAM481 |        |        |        | AAN358 |        |        | AAO472 |        |
| PRD-63116-021 |        |        |        | AAL619 |        | AAM481 |        |        |        | AAN358 |        |        | AAO472 |        |
| PRD-63116-023 |        |        |        |        |        | AAM481 |        |        |        | AAN358 |        |        | AAO472 |        |
| PRD-63116-024 |        |        |        |        |        | AAM481 |        |        |        | AAN358 |        |        | AAO472 |        |
| PRD-63116-027 |        |        |        |        |        |        |        | AAN057 |        |        |        |        |        |        |
| PRD-63116-033 |        |        |        |        |        | AAM481 |        |        |        |        |        |        | AAO472 |        |
| PRD-63116-036 |        |        |        |        |        |        |        |        |        |        |        | AAN596 |        | AAO750 |
| PRD-63116-040 |        |        |        |        |        |        |        |        |        |        |        |        | ?????? |        |
| PRD-63116-041 |        |        |        |        |        |        |        |        |        | AAN358 |        |        | AAO472 |        |
| PRD-63116-042 |        |        |        |        |        |        |        |        |        | AAN358 |        |        | AAO472 |        |

</div>

* PRD-63116-036 is the AT&T variant which gets its updates from AT&T's servers
* PRD-63116-039 and onwards is the Black KEYone.


BBB100-2 (PRD-63117) firmwares
==============================

<div style="overflow-x: scroll;" markdown="1">

| PRD-63117-003 | AAK624 | AAK879 | AAL093 | AAL682 | AAM481 |        | AAO472 |
| PRD-63117-011 | AAK624 | AAK879 |        | AAL682 | AAM481 | AAN358 | AAO472 |
| PRD-63117-015 |        | AAK879 |        | AAL682 | AAM481 | AAN358 | AAO472 |
| PRD-63117-017 |        |        |        |        |        | AAN358 |        |
| PRD-63117-019 |        |        |        |        | AAM481 | AAN358 | AAO472 |
| PRD-63117-023 |        | AAK879 |        |        | AAM481 | AAN358 |        |
| PRD-63117-025 |        |        |        | AAL682 |        | AAN358 |        |
| PRD-63117-027 |        | AAK879 |        |        | AAM481 | AAN358 |        |
| PRD-63117-028 |        | AAK879 |        |        | AAM481 | AAN358 |        |
| PRD-63117-029 |        |        |        | AAL682 | AAM481 | AAN358 | AAO472 |
| PRD-63117-034 |        |        |        |        |        | AAN358 | AAO472 |
| PRD-63117-035 |        |        |        |        |        | AAN358 | AAO472 |
| PRD-63117-036 |        |        |        |        |        | AAN358 | AAO472 |
| PRD-63117-037 |        |        |        |        |        | AAN358 |        |
| PRD-63117-039 |        |        |        |        |        | AAN358 | AAO472 |
| PRD-63117-040 |        |        |        |        |        | AAN358 |        |
| PRD-63117-041 |        | AAK879 |        |        | AAM481 | AAN358 |        |
| PRD-63117-042 |        |        |        |        |        | AAN358 |        |

</div>


Other firmwares
===============

<div style="overflow-x: scroll;" markdown="1">

| PRD-63118-001 | AAL093 |        |        |        |        |        |        |        |        | AAO472 |        |        |
| PRD-63118-003 |        |        | AAM286 |        |        |        |        | AAN982 |        |        |        | AAP494 |
| PRD-63734-001 |        |        |        |        |        | AAM999 |        |        | AAO273 | AAO472 |        |        |
| PRD-63734-002 |        |        |        |        |        | AAM999 |        |        | AAO273 | AAO472 |        |        |
| PRD-63763-001 |        | AAL964 |        | AAM625 |        |        | AAN358 |        |        | AAO472 |        |        |
| PRD-63764-001 |        |        |        |        | AAM693 |        | AAN358 |        |        |        | AAO548 |        |

</div>

* `AAK199` --- pre-release version for pre-relase devices
* `AAK831`, `AAL655` --- no OTA, use an Autoloader if available
