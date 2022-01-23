---
created: 2008-08-06 00:18:47 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/08/06/colourful-boot-messages.html
tags:
- know-how
- software
- linux
- software
- bootup
- colours
title: Colourful boot messages
toc: false
updated: 2009-03-31 11:16:03 +0200
---

The functions used for the status messages upon boot are defined in `/lib/lsb/init-functions` and may be overwritten
in `/etc/lsb-base-logging.sh`.

To add colours, in that `init-functions` file find the function *log_use_fancy_output()* and below the `fi` add the lines

{% highlight bash %}
…
else
    FANCYTTY=0
fi
# BEGIN --- colour definition
if [ -n "$TERM" ]; then
    NORMAL=`$TPUT sgr0`
    BOLD=`$TPUT bold`
    BLINK=`$TPUT blink`
    BLACK=`$TPUT setaf 0`
    RED=`$TPUT setaf 1`
    GREEN=`$TPUT setaf 2`
    YELLOW=`$TPUT setaf 3`
    BLUE=`$TPUT setaf 4`
    MAGENTA=`$TPUT setaf 5`
    CYAN=`$TPUT setaf 6`
    WHITE=`$TPUT setaf 7`
fi
# END --- colour definition
case "$FANCYTTY" in
    1|Y|yes|true)   true;;
    …
{% endhighlight %}

After that, edit the `lsb-base-logging.sh` and change e.g. the output of *log_end_msg()*:

{% highlight bash %}
    …
    if [ "$COL" ] && [ -x "$TPUT" ]; then
        printf "\r"
        $TPUT hpa $COL
        if [ "$1" -eq 0 ]; then
            echo "${BOLD}${BLUE}[${GREEN} OK ${BLUE}]${NORMAL}"
        else
            echo "${BOLD}${BLUE}[${RED}fail${BLUE}]${NORMAL}"
        fi
    else
    …
{% endhighlight %}

Your next boot will look like this:

![]({{ site.url }}/assets/colorboot.png)