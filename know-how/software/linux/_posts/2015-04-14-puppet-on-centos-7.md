---
title: Puppet on CentOS 7
layout: default
created: 2015-04-14 13:33:59 +0200
updated: 2015-04-14 13:33:59 +0200
toc: false
tags:
  - know-how
  - software
  - linux
  - puppet
  - centos
---
To install Puppet on CentOS 7, you can basically follow [these instructions](http://www.unixmen.com/install-puppet-server-centos-7/).

Notes:

1. Don't forget to open the firewall:  
  
        firewall-cmd --zone=public --add-port=8140/tcp --permanent
        firewall-cmd --reload

1. You may have to put SELinux into `permissive` mode to allow Apache read the `config.ru` owned by `puppet`.

To permanently switch from WEBrick to Apache, configure systemd like this:

    systemctl disable puppetmaster
    systemctl enable httpd


Install client agent on RedHat/CentOS
=====================================

1. Pick the correct repository for your version from [PuppetLabs](https://docs.puppetlabs.com/guides/puppetlabs_package_repositories.html#for-red-hat-enterprise-linux-and-derivatives).
1. Install it:  
  
        yum install puppet

1. If needed, configure the Puppetmaster server name in `/etc/puppet/puppet.conf`:  
  
        [agent]
            server = mypuppetmaster.example.org

1. Finally, add the cronjob[^1]:  
  
        puppet resource cron puppet-agent ensure=present user=root minute=30 command='/usr/bin/puppet agent --onetime --no-daemonize --splay'



[^1]: There's also a way to let the puppet agent run as a service described [here](https://docs.puppetlabs.com/guides/install_puppet/post_install.html#start-the-puppet-agent-service),
      but this can have an impact on cpu and memory usage.
