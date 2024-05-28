# Deploy with Digital Ocean

Rocket.Chat offers a seamless and user-friendly solution for setting up your own chat platform on Digital Ocean with just a single click. With the [1-Click install](https://marketplace.digitalocean.com/apps/rocket-chat?action=deploy\&refcode=1940fe28bd31) from the Digital Ocean marketplace, you can effortlessly launch and configure Rocket.Chat, empowering your team to communicate and collaborate efficiently.

## Preparation Steps

Before you begin, make sure you have the following:

* An active [Digital Ocean](https://www.digitalocean.com/) account
* A domain name (optional). You can use Digital Ocean's provided IP address, but having a domain name is recommended for a more professional setup to enable HTTPs.

In this guide, you'll learn how to:

* [Deploy Rocket.Chat on Digital Ocean](deploy-with-digital-ocean.md#deploy-rocket.chat-on-digital-ocean)
* [Enable HTTPs for your workspace](deploy-with-digital-ocean.md#enabling-https).

## Deploy Rocket.Chat on Digital Ocean

To set up Rocket.Chat on Digital Ocean,

* Go to the [Rocket.Chat app ](https://marketplace.digitalocean.com/apps/rocket-chat?action=deploy\&refcode=1940fe28bd31)on the Digital Ocean marketplace and follow the prompts to create the Rocket.Chat droplet. After the droplet is successfully created, go to the droplet and click the "**Get Started**" icon for further instructions to set up and access your workspace.

{% hint style="info" %}
You can get immediate access to your Rocket.Chat server by visiting `http://droplet-ip:3000`.
{% endhint %}

* After successfully setting up the Rocket.Chat droplet and your domain, log in to your droplet using the command below:

```
ssh root@your_droplet_ip
```

* Enter your password when prompted. Once you've successfully connected, a message similar to this will appear.:

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

* Create a registered domain name to access Rocket.Chat. Set up an A record from your domain _(e.g. chat.mycompany.com)_ to the droplet's IP address. You'll need the domain for enabling HTTPs on your workspace.

{% hint style="success" %}
Behind the scenes, Digital Ocean uses Docker to handle the deployment. See [deploy-with-docker-and-docker-compose.md](../deploy-with-docker-and-docker-compose.md "mention") to learn how to manage docker deployments.
{% endhint %}
