---
title: SonyEricsson MBW-150
layout: default
created: 2010-10-09 19:02:24 +0200
updated: 2010-10-09 19:02:24 +0200
toc: true
tags:
  - know-how
  - hardware
  - sony
  - sonyericsson
  - mbw150
---

![SonyEricsson MBW-150]({{ site.url }}/assets/mbw150.jpg)

[Product Page](http://www.sonyericsson.com/cws/products/accessories/overview/mbw-150classicedition)

Android 2.x-Phones
==================

  * [xda-developers Thread for OpenWatch](http://forum.xda-developers.com/showthread.php?t=554551)
  * [SmartMadSoft BETA page](http://beta.smartmadsoft.com/)
  * [SmartMadSoft Android Forum](http://www.smartmadsoft.com/forum/index.php?action=vtopic&forum=9)


Notification service using OpenWatch, Tasker and PHP
----------------------------------------------------

### Setup Tasker

1. create a new time-based profile, let it run every **5 minutes** or so
1. add the following actions:
    1. Net → **HTTP Get**
        * **Server:Port:** `www.example.org` *(\<your webserver\>)*
        * **Path:** `/notifier/notify.php` *(adapt according to your setup)*
        * **Attributes:** *\<leave empty\>*
        * **Timeout:** `10` *(default)*
        * **Mime Type:** `text/plain; charset=utf-8`
        * **Output File:** *\<leave empty\>*
    1. Tasker → **Stop**
        * **If:** `[X]`
        * `%HTTPD` **Isn't Set**
    1. Variable → **Variable Split**
        * **Name:** `%HTTPD`
        * **Splitter:** `¶`
        * **Delete Base:** `[ ]`
    1. Alert → **Notify** *(you can omit this one if you like)*
        * **Title:** `Remote Notification`
        * **Text:** `%HTTPD1 %HTTPD2 (%HTTPD3 seconds ago)`
    1. Misc → **Action Intent**
        * **Action:** `com.smartmadsoft.openwatch.action.VIBRATE`
        * **Cat:** `None`
        * **Data:** *\<leave empty\>*
        * **Extra:** `line1:%HTTPD1`
        * **Extra:** `line2:%HTTPD2` *(Note: There are 2 Extra input fields)*
        * **Target:** `Broadcast Receiver`
1. Done!


### Setup Server

Put the following file onto a webserver capable of running PHP scripts (`notify.php`):

{% highlight php %}
<?php

class DataStore {
    private $file;
    private $data = array(
        'entries' => array(),
    );
    private $modified = false;

    public function __construct( $filename = 'queue.json' ) {
        $this->file = getcwd() . '/' . $filename;
        if ( file_exists( $this->file ) ) {
            $this->load();
        }
    }

    public function __destruct() {
        if ( $this->modified ) {
            $this->save();
        }
    }

    public function add( $line1, $line2 ) {
        $this->data['entries'][] = array(
            'timestamp' => time(),
            'line1' => $line1,
            'line2' => $line2,
        );
        $this->modified = true;
    }

    public function getNext() {
        if ( $this->getCount() > 0 ) {
            $entry = array_shift( $this->data['entries'] );
            $this->modified = true;
            return $entry;
        }
        return array();
    }
        
    public function getCount() {
        return count( $this->data['entries'] );
    }

    private function save() {
        $json = json_encode( $this->data );
        file_put_contents( $this->file, $json, LOCK_EX );
        $this->modified = false;
    }

    private function load() {
        $fc = file_get_contents( $this->file );
        $this->data = json_decode( $fc, true );
        $this->modified = false;
    }
}

$ds = new DataStore();

header( 'Content-Type: text/plain; charset=utf-8' );
if ( isset( $_REQUEST['l1'] ) && isset( $_REQUEST['l2'] ) ) {
    // new notification ~~> store
    $ds->add( $_REQUEST['l1'], $_REQUEST['l2'] );
} else {
    // else: Display next notification, if any
    $entry = $ds->getNext();
    if ( isset( $entry['timestamp'] ) ) {
        $span = time() - $entry['timestamp'];
        echo $entry['line1'] . '¶' . $entry['line2'] . '¶' . $span;
    }
}
{% endhighlight %}


### Usage

Under Linux, you can send a notification like this:

    wget -O - --quiet "http://www.example.org/notifier/notify.php?l1=This+is+line1&l2=And+this+is+line2"
