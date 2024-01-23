---
description: Atlassian Bamboo Integration
---

# Bamboo Integration

<figure><img src="../../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

{% hint style="success" %}
This app can also work in a fully air-gapped environment. Follow the [air-gapped-app-installation.md](../../../../setup-and-configure/rocket.chat-air-gapped-deployment/air-gapped-app-installation.md "mention") guide and continue with the configuration instructions below.
{% endhint %}

## Install Bamboo Integration App

To install the Bamboo Integration App,

* Navigate to **Administration > Apps > Marketplace.**
* Search for the **Bamboo Integration** app.
* Click **Install.**
* **Agree** to the permissions to confirm the installation.

## Configure Bamboo Integration App

{% hint style="info" %}
Confirm that you have the  [Rocket.Chat Notifications for Bamboo](https://marketplace.atlassian.com/apps/1220022/rocket-chat-notifications-for-bamboo?tab=overview\&hosting=server) add-on installed on your Bamboo server.
{% endhint %}

To configure the Bamboo Integration app,

* Navigate to a [channel](../../../../use-rocket.chat/user-guides/rooms/channels/) or private [room ](../../../../use-rocket.chat/workspace-administration/rooms.md)and run the slash command `/bamboo install`.&#x20;
* You will receive an ephemeral message with instructions on how to configure your Bamboo, as follows:
  * On your Bamboo, install the [Rocket.Chat Notifications for Bamboo](https://marketplace.atlassian.com/apps/1220022/rocket-chat-notifications-for-bamboo) add-on.
  * Add notification on a Build Plan or Deployment Environment.
  * Select the "Rocket.Chat" recipient type.
  * On the "Rocket.Chat URL" field, insert the URL given in the ephemeral message (e.g., `https://example.com:3000/api/apps/private/6a7b5a37-b9bb-4d49-ae38-c6ebcb3fe479/ejDjQ9Kyh2wBgrSwt/webhook`)
  * On the "Rocket.Chat channel" field, type the name of the channel or private room you want to be notified of the events.
  * Now, your Rocket.Chat workspace starts receiving the configured notifications.

The Bamboo Integration doesn't support every Build/Deployment event. Rocket.Chat won't send any notifications in response to unsupported events. The supported events include the following:

* Plans:
  * All Builds Completed
  * Failed Builds and First Successful
* Jobs:
  * All Jobs Completed
  * Failed Jobs and First Successful
  * Job Error
* Deployments:
  * Deployment Started and Finished
  * Deployment Failed
