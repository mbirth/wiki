---
title: JSON Mime-Types
language: en
layout: default
created: 2010-03-11 14:34:12 +0100
updated: 2010-03-11 14:34:12 +0100
toc: false
tags:
  - know-how
  - development
  - web
  - javascript
  - json
---
For JSON data, there are different mime-types floating around the web:

* `application/json`
* `text/javascript`
* `text/json`
* `text/x-json`

At [ruby-forum.com](http://www.ruby-forum.com/topic/94728#193035) there is a nice discussion which points out, why it
is best to use **`text/x-json`**. The already wide-spread `application/json` is not really correct as `application` is
meant for data which can only be read *after being processed*. But as JSON is clear-text, you can read it somewhat
without parsing. That's why the `text` branch is to be preferred. And as the `json` type is not yet approved, you have
to use `x-json` - a nonstandard extension.
