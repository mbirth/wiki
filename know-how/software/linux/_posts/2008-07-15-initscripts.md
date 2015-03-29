---
title: event.d/init.d script
layout: default
created: 2008-07-15 23:49:48 +0200
updated: 2008-07-15 23:49:48 +0200
toc: false
tags:
  - know-how
  - software
  - linux
  - system
  - initd
  - boot
---
event.d script
==============

This is an event.d-script for the new Ubuntu [Upstart](http://upstart.ubuntu.com/).

The event gets started/respawned on runlevels 2-5. If you change to level 0, 1 or 6, the process gets stopped/killed.
Manual start/stop works through the same commands ˋstartˋ and ˋstopˋ. With ˋstatusˋ you can check the status.

~~~
# manages Solr search engine

start on runlevel [2345]
stop on runlevel [016]

kill timeout 30
respawn

script
    cd /home/sysadmin/extension/ezfind/java
    exec /usr/bin/java -jar start.jar
end script
~~~


init.d script
=============

This does the same using the traditional init.d-way.

After creation of the script in ˋ/etc/init.dˋ you also have to make the symlinks in the ˋrc.2ˋ..ˋrc.5ˋ-directories.

{% highlight bash %}
#!/bin/sh

### BEGIN INIT INFO
# Provides:          solr
# Required-Start:    
# Required-Stop:     
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: start Solr daemon
### END INIT INFO


# Defaults
RUN_MODE="daemons"

JAVA=/usr/bin/java
DAEMONDIR=/home/sysadmin/extension/ezfind/java
DAEMON=start.jar
PIDDIR=/var/run
SOLRPID=$PIDDIR/solr.pid

# See if the daemon is there
test -x $JAVA -a -x $DAEMONDIR/$DAEMON || exit 0

. /lib/lsb/init-functions

case "$1" in
	start)
		log_daemon_msg "Starting Solr daemon"
		log_progress_msg "solr"
		# Make sure we have our PIDDIR, even if it's on a tmpfs
		install -o root -g root -m 755 -d $PIDDIR
                if ! start-stop-daemon --start --chdir $DAEMONDIR --quiet --pidfile $SOLRPID --make-pidfile --background --exec $JAVA -- -jar $DAEMON; then
		    log_end_msg 1
		    exit 1
		fi
		log_end_msg 0
		;;
	stop)
		log_daemon_msg "Stopping Solr daemon"
		log_progress_msg "solr"

		start-stop-daemon --stop --quiet --pidfile $SOLRPID
		# Wait a little and remove stale PID file
		sleep 1
		if [ -f $SOLRPID ] && ! ps h `cat $SOLRPID` > /dev/null
		then
			# Stale PID file (solr was succesfully stopped),
			# remove it
			rm -f $SOLRPID
		fi

		log_end_msg 0

		;;
	restart|force-reload)
		$0 stop
		sleep 1
		$0 start
		;;
	status)
		pidofproc -p $SOLRPID $JAVA >/dev/null
		status=$?
		if [ $status -eq 0 ]; then
			log_success_msg "SOLR is running"
		else
			log_failure_msg "SOLR is not running"
		fi
		exit $status
		;;
	*)
		echo "Usage: /etc/init.d/solr {start|stop|restart|force-reload|status}"
		exit 1
		;;
esac

exit 0
{% endhighlight %}
