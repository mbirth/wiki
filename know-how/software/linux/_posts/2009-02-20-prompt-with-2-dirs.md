---
created: 2008-08-05 17:48:29 +0200
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2008/08/05/prompt-with-2-directories.html
tags:
- know-how
- software
- linux
- shell
title: Prompt with 2 directories
toc: false
updated: 2009-02-20 00:32:43 +0100
---

bash
====

To only show the last 2 directories in prompt, there are two scripts at the [Muffin Research Labs](http://muffinresearch.co.uk/archives/2007/09/25/showing-last-two-directories-of-pwd-in-bash-prompt/).
The best one would be this:

{% highlight bash %}
function PWD {
    tmp=${PWD%/*/*};
    [ ${#tmp} -gt 0 -a "$tmp" != "$PWD" ] && echo \<${PWD:${#tmp}+1} || echo $PWD;
}
{% endhighlight %}

Add this to `.bash_profile` and replace `\w` by `$(PWD)` (note the parents!) in your `PS1` line in that file.

A more comfort version which replaces the home directory by a tilde, is the following. I changed the function name to
`PWD2` to highlight the difference to the normal `PWD` variable.

{% highlight bash %}
function PWD2 {
    xpwd=${PWD/$HOME/"~"};
    tmp=${xpwd%/*/*};
    [ ${#tmp} -gt 0 -a "$tmp" != "$xpwd" ] && echo «${xpwd:${#tmp}+1} || echo $xpwd;
}
{% endhighlight %}


zsh
===

The zsh has this feature built-in. Use this to show only 2 parts of the PWD:

    %3(~.«.)%2~

This says: If `%~` (the prompt incl. replacements such as `~` for homedir) has 3 or more parts, show `«`.
After that show 2 parts of `%~`.