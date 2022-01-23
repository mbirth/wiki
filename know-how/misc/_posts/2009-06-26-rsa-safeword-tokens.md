---
created: 2009-06-26 20:39:10 +0200
language: en
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2009/06/26/rsasafeword-tokens.html
tags:
- know-how
- miscellaneous
- security
title: RSA/Safeword Tokens
toc: false
updated: 2009-06-26 20:39:10 +0200
---

The [P800](http://www.sonyericsson.com/cws/support/phones/p800) had an integrated RSA and SafeWord Token generator.
For the iPhone there is a *SecurID* application in the app store.

Here are some example initialization infos.


RSA SecurID Example data
========================

|   Serial#  |      Activation License         |
|:----------:|:-------------------------------:|
| `50453047` | `A4X3453NKFV8T2Y3JP093D3W91XUB` |
| `50525681` | `ACTUM53ERJHHIET93498HI3XTKAM2` |
| `50525682` | `AF3K453HLKMGL340KGMNL93YGKAMF` |
| `50525683` | `A9U4453M6W434MDEGEGKMM3YTK9BM` |

(Taken from [this PDF](http://rsasecurity.agora.com/rsasecured/guides/imp_pdfs/Ezos_EzWAP_SecurID.pdf).)


SafeWord Example data
=====================

|   Serial#  | Authorization Code | Key Phrase                                |
|:----------:|:------------------:|:------------------------------------------|
| `00000123` | `2325134541-20609` | `muster=baloneys=climb=offer`             |
| `99991001` | `4193215130-26411` | `elastomer:scantness:decathlon:acidified` |
| `99991002` | `1792530354-64939` | `daubs@billeting@torments@consisted`      |
| `99991003` | `745943421-56800`  | `racquets@baked@purebred@frisking`        |
| `99991004` | `1677991100-26956` | `benzoin%gonged%blockader%gleamed`        |
| `99991005` | `2200844912-50759` | `minor;casement;elide;expose`             |

(Taken from the file `mpass.dat` from [this file](http://www.securecomputing.com/index.cfm?sKey=943).)