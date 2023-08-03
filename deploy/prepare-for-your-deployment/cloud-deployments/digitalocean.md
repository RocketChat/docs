---
description: Deploying Rocket.Chat on DigitalOcean
---

# DigitalOcean

Rocket.Chat can now be easily installed on DigitalOcean using the  [1-Click install](https://marketplace.digitalocean.com/apps/rocket-chat?action=deploy\&refcode=1940fe28bd31) from the Marketplace. Once you've set it up, create a registered domain name to access Rocket.Chat.&#x20;

Set up an A record from your domain to your server's IP address (e.g., _chat.mycompany.com_). , it's important to note that Rocket.Chat won't have HTTPS by default, as certificates are unique to each installation. However, with this configuration, you can enable HTTPS using Let's Encrypt certificates.

{% hint style="success" %}
Behind the scenes, the image uses Docker to handle the deployment. See [docker-and-docker-compose.md](../docker-and-docker-compose.md "mention") to learn how to manage docker deployments.
{% endhint %}

After the Rocket.Chat droplet and your domain is set up,

* Log in to your droplet to complete the setup using this command:

```
ssh root@your_droplet_ip
```

* You will be prompted to enter your password. After successfully connecting, it displays a message similar to this:

```
##################################################################################################################################################################
Rocket.Chat is the leading open source team chat software solution. Free, unlimited and completely customizable with on-premises and SaaS cloud hosting.
Replace email, HipChat & Slack with the ultimate team chat software solution.

This Rocket.Chat image uses docker under the hood. To learn more, please read our docker documentation - https://docs.rocket.chat/deploy/prepare-for-your-deployment/rapid-deployment-methods/docker-and-docker-compose

You can find the compose project in $HOME/rocketchat directory.

Looking for how to use Rocket.Chat? Be sure to check our docs: https://docs.rocket.chat
Need some help? Join our community forums https://forums.rocket.chat and https://open.rocket.chat
##################################################################################################################################################################

```

{% hint style="info" %}
Asides from the recommended setup, you can also get immediate access to the Rocket.Chat server by visiting `http://Droplet-IP:3000`.
{% endhint %}

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

Once you can confirm the records update\[s] have propagated, copy the `rocketchat` project directory from the root, and change ownership.

```bash
cd ~
sudo cp -r /root/rocketchat .
sudo chown -R $UID:$GID rocketchat
cd rocketchat
```

* Create a `.env` file with the following variables:

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

