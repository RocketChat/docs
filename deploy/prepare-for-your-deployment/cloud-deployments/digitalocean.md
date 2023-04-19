---
description: Deploying Rocket.Chat on DigitalOcean
---

# DigitalOcean

You can now install Rocket.Chat on DigitalOcean using a [1-Click install](https://marketplace.digitalocean.com/apps/rocket-chat?action=deploy\&refcode=1940fe28bd31) from the DigitalOcean Marketplace.

After you create your 1-Click install using the Rocket.Chat app in DigitalOcean Marketplace, create a registered domain name to access Rocket.Chat.&#x20;

We recommend setting up an A record from your domain to your server's IP address. For example, _chat.mycompany.com._ Rocket.Chat will not work with HTTPS out of the box because certificates are unique for each installation, but with this setup, HTTPS will be available using Let's Encrypt certificates.

After the Rocket.Chat One-Click and your domain is set up,

* Log in to your droplet to complete the setup.

```
ssh root@your_droplet_ip
```

* Once you are connected, you should see something like this:

```
##################################################################################################################################################################
Rocket.Chat is the leading open source team chat software solution. Free, unlimited and completely customizable with on-premises and SaaS cloud hosting.
Replace email, HipChat & Slack with the ultimate team chat software solution.

This Rocket.Chat image uses docker under the hood. To learn more, please read our docker documentation - https://docs.rocket.chat/deploy/prepare-for-your-deployment/rapid-deployment-methods/docker-and-docker-compose

You can find the compose project in /root/rocketchat directory.
  
Looking for how to use Rocket.Chat? Be sure to check our docs: https://docs.rocket.chat
Need some help? Join our community forums https://forums.rocket.chat and https://open.rocket.chat
##################################################################################################################################################################
```

{% hint style="info" %}
Asides from the recommended setup, you can get out-of-the-box access to Rocket.Chat server at  `http://Droplet-IP:3000`.
{% endhint %}

## Backend

Under the hood, the image uses docker for managing the deployment. To learn more about managing Docker, please read our [docker documentation](../rapid-deployment-methods/docker-and-docker-compose/).&#x20;

## Enabling HTTPS

To get HTTPS, ensure the correct A record (optionally CNAME) is set for your domain going to your droplet IP.

* Create a non-root user account if you haven't already.

```bash
username= #put your username here
```

```bash
# you can omit docker group, if you do, run the docker commands with sudo
sudo useradd -mG sudo,docker $username
sudo passwd $username # give it a strong password
# copy over the authorized_keys file so that you can ssh into that account directly
sudo cp -r /root/.ssh /home/$username
sudo chown -R $(id $username -u):$(id -g $username) /home/$username/.ssh
sudo su - $username
```

Once you can confirm the records update\[s] have propagated, follow these steps:

* Copy the `rocketchat` project directory from the root, and change ownership.

```bash
cd ~
sudo cp -r /root/rocketchat .
sudo chown -R $UID:$GID rocketchat
cd rocketchat
```

* Create a `.env` file with the following information:

```bash
LETSENCRYPT_EMAIL= # your email, required for the tls certificates
# set this to your domain name or subdomain, not trailing slashes or https://, just the domain
# make sure it actually resolves to your droplet ip
DOMAIN= 
RELEASE= # pin the rocketchat version, at the time of writing, prefer 6.0.0
ROOT_URL= # set this to https://${DOMAIN} replace ${DOMAIN} with the actual domain
BIND_IP=127.0.0.1

```

* Download the traefik template by running the following command:

```bash
curl -LO \
    https://raw.githubusercontent.com/RocketChat/Docker.Official.Image/master/traefik.yml
```

* Recreate the existing Rocket.Chat container

```bash
docker compose up -d rocketchat --force-recreate
```

* Star traefik

```bash
docker compose -f traefik.yml up -d
```

Now, wait for the certs to be generated and Rocket.Chat to be restarted. After a while, you can access your instance on `https://${DOMAIN}`.
