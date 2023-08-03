---
description: Deploying Rocket.Chat on Amazon Web Services
---

# Deploy with AWS

By leveraging Amazon Web Services (AWS) to deploy. Rocket.Chat on an EC2 instance, organizations can unlock a host of benefits, from scalability and reliability to cost-effectiveness and simplified management

## Preparation Steps

The minimum requirement to run Rocket.Chat successfully is 2Gb 2 cores. You need an active AWS account to proceed with the deployment.

{% hint style="warning" %}
&#x20;It is not recommended to use this method for large production. Instead, see how to deploy on [Kubernetes with Helm](https://docs.rocket.chat/deploy/prepare-for-your-deployment/rapid-deployment-methods/helm).
{% endhint %}

In this guide, you'll learn how to:

* Host Rocket.Chat on an EC2 instance with a domain name.
* Secure your  Rocket.Chat server with a free SSL certificate from [Let's Encrypt](https://letsencrypt.org/).

## Deploy Rocket.Chat on an EC2 instance

**Launch an EC2 Instance**

To create a new EC2 instance:

* Log into your [AWS Console](https://console.aws.amazon.com/), and open the **EC2 Service.**
* From the sidebar, click **Instances.** Then, click **Launch Instances** to set up a new EC2 instance.
* Set the instance name and select at least _**Ubuntu Server 18.04 LTS**_**" with "**_**64-bit (x86)**_ architecture as the OS image.
* Select an instance type of your choice according to the Cores recommendation above.
* Choose an existing key pair or create a new one for SSH connections.
* Adjust the instance details as needed or keep the defaults.
* Adjust the storage size and configuration as required.
* Make sure to add a tag called **Name** and assign a value.
* Allow **SSH, HTTP,** and **HTTPS** in the security group configuration, and proceed with **Review and Launch**.
* After confirming your instance configuration, **Launch Instance**.

**Allocate an Elastic IP**

Next, allocate an IP address to the EC2 instance. To allocate an elastic IP,

* From the [EC2 Service](https://signin.aws.amazon.com/signin?redirect\_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fec2%2Fv2%2Fhome%3Fstate%3DhashArgs%2523%26isauthcode%3Dtrue\&client\_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fec2\&forceMobileApp=0\&code\_challenge=9eFrxS4u\_-ut1PIoNw1-Cx5EmHMwRGaqLYRat\_RnBGE\&code\_challenge\_method=SHA-256) dashboard, click **Elastic IPs.**
* Click **Allocate Elastic IP address.**
* Select **Amazon's pool of IPv4 addresses,** and click **Allocate.**
* Click and open the newly created IP address and select **Associate Elastic IP address.**
* Select your instance and click **Associate.**
* In the details below, copy the **Public DNS**. You will need it to configure the DNS. The format looks like this: `ec2-18-XXX-XXX-XXX.eu-central-1.compute.amazonaws.com`

**Configure DNS with AWS Route 53**

To make your workspace accessible on the internet, you will require a domain name that people can use to access it.

* Open the **Route 53** service dashboard and navigate to **Hosted Zones**.
* Click **Create Hosted Zone.**
* Enter your domain name and select _**Public Hosted Zone**_ as the type. Click the **Create hosted zone** button.
* Select your newly created zone and click **Create Record Set.**
* Enter "_www_" as a subdomain (if desired), select Type _CNAME_, enter the Public DNS name you copied from the elastic IP to the value field, and click "**Create.**"

**Get an SSL Certificate from Let's Encrypt**

Use Let's Encrypt to get a free & open-source SSL certificate:

* SSH to your instance.

```
ssh -i <path_to_key_file.pem> ubuntu@<public_ip_address>
```

{% hint style="info" %}
If your DNS has resolved, you may replace the Ip address with your domain name.
{% endhint %}

* Install `certbot` using `apt`:

```
sudo apt update
sudo apt install certbot
```

* Obtain a certificate from Let's Encrypt by running this command:

```
sudo certbot certonly --standalone --email <emailaddress@email.com> -d <domain.com> -d <subdomain.domain.com>
```

{% hint style="info" %}
A second (or more) domain is optional.
{% endhint %}

**Restrict access using security groups.**

If you want to restrict traffic to your AWS instance, you may adjust the security groups again. Make sure you allow "_TCP/22_" from your current location for the SSH connection, as well as "_TCP/443_" from the location you wish to use to access from.

**Configure Nginx Web Server with TLS/SSL**

Rocket.Chat is set to run on port _3000_ by default. However, you can use Nginx as a reverse proxy to link your domain name to the Rocket.Chat server running on that port. This way, your users can access your workspace through your domain name(_example.com)_, instead of directly using the port in the URL(_example.com:3000_).

* Install Nginx web server:

```bash
 sudo apt-get install nginx
```

* Backup the default config file for reference:

```bash
 cd /etc/nginx/sites-available
 sudo mv default default.reference
```

* Create a new site configuration for Rocket.Chat:

```bash
 sudo nano /etc/nginx/sites-available/default
```

```nginx
 server {
     listen 443 ssl;

     server_name <ABC.DOMAIN.COM>;

     ssl_certificate /etc/letsencrypt/live/<ABC.DOMAIN.COM>/fullchain.pem;
     ssl_certificate_key /etc/letsencrypt/live/<ABC.DOMAIN.COM>/privkey.pem;
     ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
     ssl_prefer_server_ciphers on;
     ssl_ciphers 'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH';

     root /usr/share/nginx/html;
     index index.html index.htm;

     # Make site accessible from http://localhost/
     server_name localhost;

     location / {
         proxy_pass http://localhost:3000/;
         proxy_http_version 1.1;
         proxy_set_header Upgrade $http_upgrade;
         proxy_set_header Connection "upgrade";
         proxy_set_header Host $http_host;
         proxy_set_header X-Real-IP $remote_addr;
         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         proxy_set_header X-Forwarded-Proto http;
         proxy_set_header X-Nginx-Proxy true;
         proxy_redirect off;
     }
 }

 server {
     listen 80;

     server_name <ABC.DOMAIN.COM>;

     return 301 https://$host$request_uri;
 }
```

{% hint style="info" %}
Ensure to update `ABC.DOMAIN.COM` with your domain name. Update it in the path to your key files as well.
{% endhint %}

* Test the Nginx configuration to make sure there are no syntax errors

```bash
sudo nginx -t
```

* If the syntax test went successful, restart Nginx:

```bash
sudo systemctl restart nginx
```

Confirm it is running correctly by opening a web browser and entering your domain name. A "_502 Bad Gateway_" page is expected since the Rocket.Chat backend is not yet running. Ensure the SSL connection works appropriately by clicking the lock icon next to the address bar. Confirm it's valid and issued by "_Let's Encrypt Authority X3_".

**Install Rocket.Chat**

Now that your EC2 instance and domain are ready, SSH into your instance and follow our [Deploy with Docker & Docker Compose](docker-and-docker-compose.md) guide to set up your Rocket.Chat workspace. Once your workspace is running, log in to your site at `https://ABC.DOMAIN.COM.`The first user to log in will be the workspace administrator.
