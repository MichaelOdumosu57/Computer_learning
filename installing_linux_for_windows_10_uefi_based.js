

https://www.pcsuggest.com/dual-boot-windows-10-and-ubuntu-uefi/

get iso file from link

download rufus usb creator

    use the steps in pc suggest in order to change your drive to a bootable usb

before starting process you should know your system

    the  HDD has GPT partition table so it is UEFI
    
partition the disk

    you need a dedicated /home partition
    
then restart turn on with boot mangaer

    for your hp laptop turn off then turn on with esc button to activate the boot manger
    
    choose the usb option your new bootable drive
    
    select install ubuntu
    
        choose your language
        connect to the wireless network that your computer will be using the most
        skip third party installation
        installation type, you choose something else
            choose that 20gb of free space to create the root partition
                8192 mb,
                primary,
                beginning of this space,
                use as: ext4 journaling file system
                mount point: "/"
                
            assign all free space to home partition
                whats left mb
                primary,
                beginning of this space,
                use as: ext4 journaling file system
                mount point: "/home"
                
                
        my final partitioned disk type
        
        Device       Type     Mount Point   Format?    Size         Used          System
        /dev/sda                                       1 MB
        freespace                                      272 MB       96MB           Windows Boot Manager
        /dev/sda1    efi                               16 MB        unknown
        /dev/sda2                                      786180 MB    unknown
        /dev/sda3    ntfs                              8192MB       unknown
        /dev/sda7    ext4     /              yes       12778MB      unknown
        /dev/sda8    ext4     /home          yes       176825MB     unknown
        /dev/sda4    ntfs
        
        device for boot loader installation:
        /dev/sda ATA WDC WD10JPVX-60J(1.0TB)
        
        
        it would ask about swap space but you have a 1TB of space youre fine
        
        what the installer is changing
        
        changing partition tables
        SCSI1 (0,0,0)(sda)
        
        reformatting partitions
        partition #7 of SCSI1(0,0,0) (sda) as ext4
        partition #8 of SCSI1(0,0,0) (sda) as ext4
        
        now you have features to fill out
        
        Your Name: Tobologz
        Your Computer's name: elgesis
        // or elgesis-besox
        Pick a username: autospark
        password: Vrti32pc;q15 if not use the other one
        
        if everything was done correctly it will ask you to reboot your computer