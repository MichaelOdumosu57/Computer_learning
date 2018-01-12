http://linux-sys-adm.com/ubuntu-16.04-lts-how-to-install-and-configure-ssh/

first update repositiories
    apt-get update
    apt-get upgrade
    
then install the server

sudo apt-get install openssh-server

    Basic Configuration
    
    open the ssh config file
        sudo vim /etc/ssh/sshd_config
    
        if you want to change the port change find it in the file and change the port to 22222
        
        set max login attempt to 3 to prevent brute force intrusion of your server add this line below port
        MaxAuthTries 3
        
        you can allow certain users to access the server and deny others using add this line at the end of the file
        AllowUsers [username]
        but i need to find the username of my chr -omebook still do not know
        its not the variable name for your ip, its the users on the server
        
    restart ssh service
    
        sudo  systemctl restart ssh
        or
        sudo service ssh restart
        
    to see the status of the ssh service
    
        systemctl status ssh
        
    
    
    