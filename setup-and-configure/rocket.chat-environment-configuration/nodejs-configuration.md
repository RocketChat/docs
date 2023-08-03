---
description: NodeJs configuration for Rocket.Chat
---

# NodeJs Configuration

Welcome to the Node.js configuration guide for Rocket.Chat, a comprehensive resource designed to help you understand the intricacies of setting up and configuring Rocket.Chat's environment using Node.js. Rocket.Chat is built on top of Node.js, which is the engine that powers its functionality. This guide provides a brief overview of some of the details of Node.js, with a more detailed guide available in the official [Node.js documentation](https://nodejs.org/en/docs).

Rocket.Chat is built with  [Meteor](https://meteor.com), a JavaScript framework, and the version of Meteor in use dictates the supported Node.js version for that specific version. The guide provides instructions on how to check the supported Node.js version for any specific release by navigating to the GitHub releases page for that specific version.

{% hint style="info" %}
The only reason you may need to check this (except for idle curiosity or debugging purposes) is if you're using the manual method of deployment. We don't recommend manual installation. Instead, [Docker](../../deploy/prepare-for-your-deployment/rapid-deployment-methods/docker-and-docker-compose/) is recommended and encouraged. With [Docker](../../deploy/prepare-for-your-deployment/rapid-deployment-methods/docker-and-docker-compose/) (or [Snap](../../deploy/prepare-for-your-deployment/snaps.md)) you won't need to worry about the Node version.
{% endhint %}



Rocket.Chat is built with [Meteor](https://meteor.com), a JavaScript framework. The version of Meteor in use dictates the supported NodeJs version for that specific version.

**NodeJs version compatible with a specific release**: To determine the NodeJs version compatible with a specific release:

* Visit our GitHub releases page, navigate to the details for that particular version, and look for **Engine versions**.
* You can also use our releases API to access this information. Taking version 4.5.0 as an example, to know the supported node version for this release, perform a GET on [https://releases.rocket.chat/6.3.0/info](https://releases.rocket.chat/6.3.0/info). You're looking for the `nodeVersion` key. For the current latest version, with `curl` and `jq`:

```
~ via  v12.22.11 took 25s
➜ curl https://releases.rocket.chat/latest/info -s | jq '.nodeVersion' -r
14.18.3
```
