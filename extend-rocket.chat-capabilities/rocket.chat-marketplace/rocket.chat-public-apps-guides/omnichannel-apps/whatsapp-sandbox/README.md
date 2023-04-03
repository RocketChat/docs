---
description: An extension for the existing production-ready WhatsApp App.
---

# WhatsApp Sandbox

The **WhatsApp Sandbox** app allows you to test [Rocket.Chat](http://rocket.chat/) integration with WhatsApp in a sandbox environment. You can send messages and templates in this test environment and receive a webhook.

{% hint style="info" %}
This app is not intended for production use. It is only for testing purposes. For production use, please use the [official WhatsApp integration](https://docs.rocket.chat/guides/app-guides/omnichannel-apps/whatsapp).
{% endhint %}

{% hint style="warning" %}
**You must enable the** [**Omnichannel**](../../../../../use-rocket.chat/omnichannel/) **feature with** [**agents**](../../../../../use-rocket.chat/omnichannel/agents.md) **and** [**managers**](../../../../../use-rocket.chat/omnichannel/managers.md) **assigned to receive and send Omnichannel messages.**
{% endhint %}

## Install Whatsapp Sandbox Integration App

To install the Whatsapp Sandbox App,

* Go to **Administration > Apps > Marketplace.**
* Search for the **Whatsapp Sandbox** app.
* Click **Install** and accept the needed permissions.  You receive a message from `whatsapp-sandbox.bot` with setup instructions.

{% hint style="info" %}
To get support, please run the `/whatsapp-sandbox support` command.
{% endhint %}

## Get the Test API key from 360 Dialog

You need a test **API-KEY** from 360 Dialog to use WhatsApp Sandbox App.

To get the **API-KEY,**

* Send a WhatsApp message to the phone number **4930609859535** with the content **START.** You can use this link: [https://wa.me/4930609859535?text=START](https://wa.me/4930609859535?text=START)
* Alternatively, you can use this QR Code: [https://docs.360dialog.com/whatsapp-api/whatsapp-api/sandbox#1.-get-a-test-api-key](https://docs.360dialog.com/whatsapp-api/whatsapp-api/sandbox#1.-get-a-test-api-key).
* As a response, you will receive your Test API-KEY. This **API-KEY** is associated with the WhatsApp number you sent the message with. Now, you can use 360dialog WhatsApp.

{% hint style="info" %}
See the [official documentation](https://docs.360dialog.com/docs/whatsapp-api/sandbox) to learn more about 360dialog Sandbox and its[ limitations](https://docs.360dialog.com/docs/whatsapp-api/sandbox#sandbox-limitations).
{% endhint %}

## Configure Whatsapp Sandbox App

To configure the Whatsapp Sandbox App,

* On the **Whatsapp Sandbox App Info** screen, navigate to **Settings.**
* Update the required fields:
  * **WhatsApp Sandbox API KEY:** The API KEY provided by 360Dialog for the Sandbox environment.
  * **Default department:** (Optional) The name or department ID that will handle WhatsApp conversations.
  * **Welcome Message:** (Optional) The message sent to customers when they send their first message
  * **Conversation Finished Message:** (Optional) The message  sent to your customer when an agent closes the conversation.
  * **Service Unavailable Message:** The message sent to your customer when no agents are available online.
  * **Notification of undeliverable message:** (Optional) Set this option to alert the agent that the message wasn't delivered to the WhatsApp platform.
  * **Agents Display Info:** The agent information that would be appended before every message an agent sends to a customer.
  * **Allow Quote Messages:** If enabled, agents can see the quoted message reference on Rocket.Chat when the Contact quotes/replies to a message on WhatsApp.
  * **Message Status Endpoint URL:** The endpoint URL where you want to receive the status of each message exchanged.
  * **Filter Message Status:** Filter the statuses (All, Regular Messages, or Template Messages ) you wish to receive at the endpoint ("Message Status Endpoint URL") based on Message Type.
  * **Allow List options for Quick Replies:** If enabled, messages with more than three quick reply options would be rendered as List options.  Max limit for list options is 10.
  * **Custom label for all List Option button:** Define a customized label message you want to display on all Quick reply options sent as List Message.
* Click **Save Changes**.

You can now start sending messages from WhatsApp Sandbox to [Rocket.Chat](http://rocket.chat/).

## Uninstall Whatsapp Sandbox App

To delete the Whatsapp Sandbox app from your workspace,

* Go to **Administration > Apps > Installed.**
* Click th**e kebab menu** against the **Whatsapp Sandbox** app**.**
* Select **Uninstall**.
* Click **Yes** to confirm the uninstallation.
