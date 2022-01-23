---
created: 2016-03-05 00:36:55 +0100
layout: redirect
layout_old: default
redirect_to: https://blog.mbirth.de/archives/2016/03/05/my-ipxe-settings.html
tags:
- know-how
- software
- ipxe
- network
- booting
title: My iPXE settings
toc: false
updated: 2016-03-05 00:36:55 +0100
---

I'll list my modifications (keep everything else as it is) here but keep in mind that you most probably want
different settings.

See also [this post about iPXE in general]({% post_url 2016-03-05-ipxe-network-boot %}).

src/config/console.h
--------------------

(commented in to enable:)

    #define    CONSOLE_FRAMEBUFFER /* Graphical framebuffer console */

(changed from `us` to `de`:)

    #define    KEYBOARD_MAP    de


src/config/general.h
--------------------

(changed from `#undef` to `#define`:)  

    #define    NET_PROTO_IPV6      /* IPv6 protocol */

(changed from `#undef` to `#define`:)  

    #define    DOWNLOAD_PROTO_HTTPS    /* Secure Hypertext Transfer Protocol */
    #define    DOWNLOAD_PROTO_FTP  /* File Transfer Protocol */

(changed from `#undef` to `#define`:)  

    #define    DOWNLOAD_PROTO_NFS  /* Network File System Protocol */

(commented in to disable:)  

    #undef SANBOOT_PROTO_ISCSI /* iSCSI protocol */
    #undef SANBOOT_PROTO_AOE   /* AoE protocol */
    #undef SANBOOT_PROTO_IB_SRP    /* Infiniband SCSI RDMA protocol */
    #undef SANBOOT_PROTO_FCP   /* Fibre Channel protocol */

(changed from `#undef` to `#define`:)  

    #define    SANBOOT_PROTO_HTTP  /* HTTP SAN protocol */

(commented in to enable - *works only for undionly.kpxe*:)  

    #define   IMAGE_ELF       /* ELF image support */
    
(commented in to enable:)  

    #define    IMAGE_SCRIPT        /* iPXE script image support */

(commented in to enable - *works only for undionly.kpxe*:)  

    #define   IMAGE_COMBOOT       /* SYSLINUX COMBOOT image support */

(commented in to enable:)

    #define NSLOOKUP_CMD       /* DNS resolving command */

(commented in to enable:)

    #define REBOOT_CMD     /* Reboot command */
    #define POWEROFF_CMD       /* Power off command */

(commented in to enable:)

    #define PING_CMD       /* Ping command */
    #define CONSOLE_CMD        /* Console command */
    #define IPSTAT_CMD     /* IP statistics commands */