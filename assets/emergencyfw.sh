#!/bin/sh

if [ -z "$1" ]; then
    echo "Syntax: $0 <output-file>"
    exit 1
fi

if [ ! -f /usr/bin/slugimage ]; then
    echo "/usr/bin/slugimage not found. Please install the slugimage package."
    exit 250
fi

if [ ! -f /usr/bin/devio ]; then
    echo "/usr/bin/devio not found. Please install the devio package."
    exit 251
fi

if [ ! -f di-nslu2.bin ]; then
    echo "di-nslu2.bin not found! Please download and unpack from http://www.slug-firmware.net/d-dls.php."
    exit 2
fi

INITRD=`ls -1r initrd.img-* | head -1`
VMLINUZ=`ls -1r vmlinuz-* | head -1`

if [ -z "$INITRD" ]; then
    echo "No initrd.img found. Please copy from <NSLU2-drive>/boot first."
    exit 3
fi

if [ -z "$VMLINUZ" ]; then
    echo "No vmlinuz found. Please copy from <NSLU2-drive>/boot first."
    exit 4
fi

INITRD_TEST=`echo "$INITRD" | sed -e "s/initrd\.img-//"`
VMLINUZ_TEST=`echo "$VMLINUZ" | sed -e "s/vmlinuz-//"`

if [ "$INITRD_TEST" != "$VMLINUZ_TEST" ]; then
    echo "WARNING! initrd.img ($INITRD_TEST) and vmlinuz ($VMLINUZ_TEST) are for different kernel versions. Aborting..."
    exit 5
fi

echo "Preconditions ok."

echo "Splitting di-nslu2.bin..."
slugimage -u -i di-nslu2.bin
# Will create RedBoot, SysConf, apex.bin, vmlinuz, ramdisk.gz, Trailer

echo "Preparing initrd.img..."
dd if="$INITRD" of="$INITRD.padded" ibs=6291440 conv=sync
devio "<<""$INITRD.padded" > "$INITRD.swapped" "xp $,4"

echo "Preparing vmlinuz..."
dd if="$VMLINUZ" of="$VMLINUZ.padded" ibs=1441760 conv=sync
devio "<<""$VMLINUZ.padded" > "$VMLINUZ.swapped" "xp $,4"

echo "Creating new image $1..."
slugimage -p -b RedBoot -s SysConf -L apex.bin -k "$VMLINUZ.swapped" -r "$INITRD.swapped" -t Trailer -o "$1"

echo "Cleaning up..."
rm RedBoot SysConf apex.bin vmlinuz ramdisk.gz Trailer
rm "$INITRD.padded" "$INITRD.swapped"
rm "$VMLINUZ.padded" "$VMLINUZ.swapped"


echo "All done."
