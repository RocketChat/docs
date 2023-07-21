# Installing Nginx & SSL certificate

## Securing the server: Firewall basics (optional, recommended)

First, make sure [UFW](https://en.wikipedia.org/wiki/Uncomplicated\_Firewall) (Uncomplicated FireWall) is installed. It should be installed by default in Ubuntu, but if it’s not, you can check if it is installed by running.

```
apt -qq list ufc
```

It will return simple information about the package if it is found. Otherwise, install the package by running

```
sudo apt-get install ufw
```

{% hint style="info" %}
**IMPORTANT**: We're going to add a firewall rule to permit your default SSH connection port on port 22/tcp.
{% endhint %}

In case you have the port changed on your device, be sure to use the corresponding port.\
Failure to do so will break your SSH connection and log you out of the server as soon as you enable the firewall!

**Set the default access rules:**

```
sudo ufw default deny incoming

sudo ufw default allow outgoing
```

**Set the service rules (SSH / HTTPS):**

```
sudo ufw allow 22/tcp

sudo ufw allow 443/tcp
```

**Enable the firewall:**

```
sudo ufw enable
```

**Check the Firewall status:**

```
sudo ufw status
```

**If you ever add or delete rules you should reload the firewall:**

```
sudo ufw reload
```

**If you ever need to turn off the firewall:**

```
sudo ufw disable
```

## Installing Nginx & SSL certificate

**Install Nginx**

```
sudo apt-get install nginx
```

### Using a commercial SSL cert (recommended)

If you don't have a certificate already, you can grab one for free at [Let's Encrypt](https://letsencrypt.org).

Or, if you want to use a self-signed SSL cert instead, skip ahead to [Self-Signed SSL](installing-nginx-and-ssl-certificate.md#5b-self-signed-ssl).

#### **Install the private key (created when you generated the CSR)**

```
sudo nano /etc/nginx/certificate.key
```

Open the private key and Copy the entire private key text-block from the file that was generated when you created the CSR. Right click on the terminal window and select paste to paste it into nano. Alternatively, if you have a tool such as FileZilla, you can use it via SSH over FTP to upload your cert and key files instead of copy or paste.

Save and Exit.

**Install the SSL certificate (note that this goes in certificate.**_**crt**_**, not .**_**key**_**)**

```
sudo nano /etc/nginx/certificate.crt
```

Open the SSL Certificate provided by the SSL vendor (will probably have a .crt or .pem extension) and copy the entire text-block. Right click on the terminal window and select paste to paste it into nano.

Save and Exit.

### Self-Signed SSL

If you acquired an SSL cert and installed it via the steps above, skip this step.

**Create and install a self-signed SSL certificate:**

```
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/certificate.key -out /etc/nginx/certificate.crt
```

**Follow the prompts.**

Tip: It is **IMPORTANT** that the **Common Name** be set properly. Enter your fully qualified domain name (FQDN) here or, if you don’t have a FQDN, use your public IP address. For example, my FQDN for the chat server is `chat.inumio.com`.

Save and Exit.

### Set Key Permissions, Dhparams, Configure NGINX

**Set permissions:**

```
sudo chmod 400 /etc/nginx/certificate.key
```

**Generate Strong Diffie Helman group**

```
sudo openssl dhparam -out /etc/nginx/dhparams.pem 2048
```

**Configure Nginx:**

```
sudo nano /etc/nginx/sites-available/default
```

Delete the example in this file, and paste in the following:

```apacheconf
# HTTPS Server
    server {
        listen 443 ssl;
        server_name chat.inumio.com;

        error_log /var/log/nginx/rocketchat_error.log;

        ssl_certificate /etc/nginx/certificate.crt;
        ssl_certificate_key /etc/nginx/certificate.key;
        ssl_dhparam /etc/nginx/dhparams.pem;
        ssl_protocols TLSv1.2;
        ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:AES:CAMELLIA:DES-CBC3-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!aECDH:!EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA';
        ssl_prefer_server_ciphers on;
        ssl_session_cache shared:SSL:20m;
        ssl_session_timeout 180m;

        location / {
            proxy_pass http://chat.inumio.com:3000/;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto https;
            proxy_set_header X-Nginx-Proxy true;
            proxy_redirect off;
        }
    }
```

**Edit the config** Change the server name and proxy\_pass to reflect your own details.

Save and Exit.

**Test the config & Restart nginx:**

```
sudo service nginx configtest && sudo service nginx restart
```

**Note:** You can pinpoint problems in your nginx config using the following command:

```
sudo nginx -t
```
