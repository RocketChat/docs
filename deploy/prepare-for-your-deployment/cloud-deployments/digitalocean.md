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

{% hint style="info" %}
To enable _HTTPS_, see [installing-nginx-and-ssl-certificate.md](../rapid-deployment-methods/docker-and-docker-compose/installing-nginx-and-ssl-certificate.md "mention").
{% endhint %}
