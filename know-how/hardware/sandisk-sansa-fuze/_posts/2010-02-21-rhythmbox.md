---
created: 2008-12-31 00:48:23 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/12/31/rhythmbox-and-sansa.html
tags:
- know-how
- hardware
- sandisk
- sansa
- fuze
- rhythmbox
title: Rhythmbox and Sansa
toc: false
updated: 2010-02-21 13:14:26 +0100
---

To work with the FUSE in Rhythmbox, you have two choices: **MTP** mode or **MSC** mode. The MTP mode is the *Media Transfer Protocol* which the
Windows Media Player uses. There's a plugin for Rhythmbox which lets the player show up and you are able to manage the player from there.

The MSC mode is *Mass Storage Class* mode which brings up the player like any other USB stick or external harddrive. Rhythmbox won't
recognize it as a player in this mode but you can force it by creating a file `.is_audio_player` in the root of your Sansa.

Make sure to put following contents into that file:

~~~
audio_folders=MUSIC/,PODCASTS/,AUDIOBOOKS/
output_formats=application/ogg,audio/mpeg,audio/flac,audio/x-ms-wma,audio/aac,audio/mp4,audio/audible
input_formats=application/ogg,audio/mpeg,audio/flac,audio/x-ms-wma,audio/aac,audio/mp4,audio/audible
folder_depth=1
playlist_path=PLAYLISTS/%File
playlist_format=audio/x-iriver-pla
~~~

The `audio_folders` tells Rhythmbox where to put music files. Without that line all songs will be put under the root and thus the player won't recognize them.

The `output_formats` describes all formats the player can **create**, i.e. by the internal recording feature.

The `input_formats` describes all formats the player recognizes so that Rhythmbox can decide whether to transcode a file or not.

`folder_depth` influences the directory structure Rhythmbox creates. A `folder_depth` of **2** creates a `Artist/Album/Song.mp3` structure. A **1** creates a `Artist - Album/Song.mp3` (which is what I prefer) and, I guess, a **0** doesn't create any folder but just puts the files into the `MUSIC/` directory.

The `playlist_path` and `playlist_format` describe the location for playlists and what format the player supports. (I'm not sure whether the FUZE supports `audio/x-mpegurl` format.)


The file `/usr/share/hal/fdi/information/10freedesktop/10-usb-music-players.fdi` lists the options usually set for FUZE players. Just search for the string "Fuze". But I guess the PnP-ID of the newer models isn't in that XML file.

*[MTP]: Media Transfer Protocol
*[MSC]: Mass Storage device Class
*[FUSE]: Filesystem in Userspace