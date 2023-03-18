---
description: Deploying Rocket.Chat on DigitalOcean
---

# DigitalOcean

{% hint style="info" %}
[**👉 Trouble installing or deploying Rocket.Chat?** Join our Weekly Technical Helpline to get real-time help from our team!](https://app.livestorm.co/rocket-chat/rocketchats-weekly-technical-helpline?type=detailed)
{% endhint %}

You can now install Rocket.Chat on DigitalOcean using a 1-Click install from the DigitalOcean Marketplace.

[![do-btn-blue](https://user-images.githubusercontent.com/51996/58146107-50512580-7c1a-11e9-8ec9-e032ba387c2a.png)](https://marketplace.digitalocean.com/apps/rocket-chat?action=deploy\&refcode=1940fe28bd31)

After you create your 1-Click install using the Rocket.Chat app in DigitalOcean Marketplace, you'll likely want a registered domain name to access Rocket.Chat.

We recommend setting up an A record from your domain to your servers IP address. Ex: chat.mycompany.com

Rocket.Chat will not work with HTTPS out of the box because certificates are unique for each installation, but with this setup HTTPS will be available using Let's Encrypt certificates.

After the Rocket.Chat One-Click is finished and your domain is setup. You will need to login to your droplet to finish setup.

```
ssh root@your_droplet_ip
```

Once you are connected you should see something like:

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

Besides the recommended setup you can out of the box access Rocket.Chat server at: [http://Droplet-IP:3000](http://droplet-ip:3000)

## Backend

Under the hood, the image uses docker for managing the deployment. Please read our documentation on [docker](../rapid-deployment-methods/docker-and-docker-compose/) to learn more about managing it.

## Enabling HTTPS

To get https, first make sure you have the correct A record (optionally CNAME) set for your domain going to your droplet IP.

Create a non root user account first, if you haven't already.

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

Once you can confirm the records update\[s] haver propagated, follow the steps below

1. Copy the `rocketchat` project directory from root, and change ownership

```bash
cd ~
sudo cp -r /root/rocketchat .
sudo chown -R $UID:$GID rocketchat
cd rocketchat
```

2. Create a `.env` file with the following contents

```bash
LETSENCRYPT_EMAIL= # your email, required for the tls certificates
# set this to your domain name or subdomain, not trailing slashes or https://, just the domain
# make sure it actually resolves to your droplet ip
DOMAIN= 
RELEASE= # pin the rocketchat version, at the time of writing, prefer 6.0.0
ROOT_URL= # set this to https://${DOMAIN} replace ${DOMAIN} with the actual domain
BIND_IP=127.0.0.1

```

3. Download the traefik template

```bash
curl -LO \
    https://raw.githubusercontent.com/RocketChat/Docker.Official.Image/master/traefik.yml
```

4. Recreate the existing Rocket.Chat container

```bash
docker compose up -d rocketchat --force-recreate
```

5. Star traefik

```bash
docker compose -f traefik.yml up -d
```

Now wait for the certs to be generated and Rocket.Chat to be restarted. After about a minute you should be able to access your instance on `https://${DOMAIN}`.
