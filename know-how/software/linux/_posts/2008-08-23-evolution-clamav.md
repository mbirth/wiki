---
title: Evolution/ClamAV integration
layout: default
created: 2008-08-23 18:46:33 +0200
updated: 2008-08-23 18:46:33 +0200
toc: false
tags:
  - know-how
  - software
  - linux
  - security
  - evolution
  - clamav
  - antivirus
---
To scan incoming mails for viruses, create to following script somewhere in your system:

{% highlight bash %}
#!/bin/bash
# Fred Blaise <chapeaurouge AT madpenguin DOT org>
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 2 of the License, or
# (at your option) any later version.

# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.

# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 59 Temple Place, Suite 330, Boston,
# MA 02111-1307 USA

FILE=/tmp/$$_outclam.tmp
clamdscan - 1>$FILE

if [ $? -eq 1 ]; then
STRING=$(grep "FOUND" $FILE |cut -d: -f2)
zenity --warning --title="Evolution: Virus detected" --text="$STRING" &

exit 1
fi

exit 0
{% endhighlight %}

Now setup Evolution's Incoming mail filters to pipe mails through your newly created script. If the return value is not
zero, a virus was detected and you might want to move the mail to *Trash* or a special folder.
