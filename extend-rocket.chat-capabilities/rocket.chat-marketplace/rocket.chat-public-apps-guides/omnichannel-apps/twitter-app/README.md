---
description: Omnichannel Integration between Rocket.Chat and Twitter.
---

# Twitter App

![](<../../../../../.gitbook/assets/Deprecated (1).png>)

{% hint style="warning" %}
Please be aware that the current Twitter integration facilitated by Rocket.Chat Twitter app has been ![](<../../../../../.gitbook/assets/Deprecated (1).png>). This change follows unilateral amendments to the terms and conditions by Company X (formerly known as Twitter), which has impacted the ability to manage Twitter customer messages directly within Rocket.Chat. Our team is diligently investigating alternative solutions to re-establish this integration. We will provide updates and documentation on a new app designed to deliver an enhanced integration experience as soon as a resolution is found.
{% endhint %}

It is a paid subscription that costs you $25 monthly.

![](<../../../../../.gitbook/assets/image (459) (1) (1) (1) (1) (1).png>)

{% hint style="warning" %}
**You must have the** [**Omnichannel feature**](https://docs.rocket.chat/use-rocket.chat/omnichannel#enable-omnichannel) **enabled and have** [**agents**](https://docs.rocket.chat/use-rocket.chat/omnichannel/agents) **and** [**managers**](https://docs.rocket.chat/use-rocket.chat/omnichannel/managers) **assigned to receive and send Omnichannel messages.**
{% endhint %}

## Install Twitter App

To install the Twitter App,

* Go to **Administration > Apps > Marketplace.**
* Search for the **Twitter** app.
* Click **Install** and accept the needed permissions. You receive a message from `twitter.bot` in the `#omnichannel-twitter-setup` channel with setup instructions.

## Configure Twitter App

To configure the Twitter App,

* On the **Twitter App Info** screen, navigate to **Settings.**
* Update the **Settings**:
  * **Default Department**. Only the agents of this [department](../../../../../use-rocket.chat/omnichannel/departments.md) can serve Twitter conversations.
  * **Service Unavailable Message:** A message sent to visitors when no agents are available online.
  * **Welcome Message:** A message sent to visitors when they send their first message in a conversation.
  * **Conversation Finished Message:** A message sent to visitors when the conversation is closed.
  * **Agents Display Name:** You can display the agent's name or username.
  * **File Upload Enabled:** You can enable/disable file sharing and set a limit for maximum upload size.
  * **Accepted Media Type:** Select the type of files that can be shared between the Agents and your Twitter Contacts.
* Click **Save Changes.**

## **Twitter Authentication**

Before sending any messages, you must authorize the **Omni-Gateway** to send and receive Twitter messages on behalf of your account.

To start the authentication with Twitter,

* From the `twitter.bot` message, click on the **Start Authentication** button.
* The authentication process is started. Hit **Click here to authorize**.
* You are redirected to a page where you can use your business mail to authorize Twitter.
* Confirm the mail and click **Authorize app.**
* You will receive a success message with credentials for the Twitter account authenticated to your workspace.

## Twitter App Shortcuts

The Twitter app has a list of shortcuts to ease usage.

* **/twitter authorize:** Starts the Twitter authorization process
* **/twitter unauthorize:** Revoke Twitter authorization
* **/twitter support:** Show support info
* **/twitter help:** Shows help message

## Uninstall Twitter App

To delete the Twitter app from your workspace,

* Go to **Administration > Apps > Installed.**
* Click th**e kebab menu** against the **Twitter** **app.**
* Select **Uninstall**.
* Click **Yes** to confirm the uninstallation.
