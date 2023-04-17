---
description: Omnichannel Integration between Rocket.Chat and Facebook.
---

# Facebook App

Omnichannel Integration between Rocket.Chat and Facebook Messenger. The Facebook Messenger app lets you handle messages from your Facebook contacts directly in Rocket.Chat. Your customers contact you via Messenger, and you answer chats from your Rocket.Chat workspace. Some key features of this integration include sending messages with quick reply buttons, welcome messages(starting/closing chat), file sharing, and the correlation between your Facebook pages and your Rocket.Chat departments.

{% hint style="warning" %}
**You must have the** [**Omnichannel feature**](https://docs.rocket.chat/use-rocket.chat/omnichannel#enable-omnichannel) **enabled and have** [**agents**](https://docs.rocket.chat/use-rocket.chat/omnichannel/agents) **and** [**managers**](https://docs.rocket.chat/use-rocket.chat/omnichannel/managers) **assigned to receive and send Omnichannel messages.**
{% endhint %}

## Install Facebook App

To install the Facebook App,

* Go to **Administration > Apps > Marketplace.**
* Search for the **Facebook App**.
* Click **Install** and accept the needed permissions. You receive a message from `facebook.bot` in the `#omnichannel-facebook-setup` channel with setup instructions.

## Configure Facebook App

To configure the GitHub App,

* On the **GitHub App Info** screen, navigate to **Settings.**
* Update the **Settings**:
  * **Agents Display Name:** You can display the agent's name or username.
  * **File Upload Enabled:** You can enable/disable file sharing and set a limit for maximum upload size.
  * **Accepted Media Type:** Select the type of files that can be shared between the Agents and your Twitter Contacts.
* Click **Save changes.**

## Facebook App Authentication

Before sending any messages, you must authorize Omni-Gateway to send and receive Facebook messages on behalf of your account.

Ensure that each of the following requirements is met before starting the authentication process:

* &#x20;A [Facebook Account](https://www.facebook.com/).&#x20;
* A [Facebook page.](https://www.facebook.com/pages/creation/) This is the page from where your customers can message you.
* Make sure your [Rocket.Chat](http://rocket.chat) instance is on a public Address and is accessible by anyone on the internet. Go to **Admin > General > Site Url** to confirm this.
* Lastly, ensure your [Rocket.Chat](http://rocket.chat) instance is connected to [Rocket.Chat](http://rocket.chat) Cloud. Go to **Admin > Connectivity Services** to connect to Cloud.

### Subscribe/Unsubscribe

You are automatically subscribed to the Facebook page after successful authentication. However, you can choose to unsubscribe.

* From the list of connected Facebook Accounts, click the **UNSUBSCRIBE** button against the account you want to unsubscribe.

### Edit Page Configurations

To update the page configurations,

* Click the **Edit Page Config** button under the account and update the following settings:
  * **Department**: You can route all the conversations from this page to a specific [**department**](https://docs.rocket.chat/guides/omnichannel/departments). Only the agents of this department can serve conversations coming from this page.
  * **Welcome Message:** First message your customer will receive when they message you.
  * **Conversation Finished Message:** A message sent to your customer when a conversation is closed.
  * **Default message for offline service:** Message sent to your visitor when no agents are available online.

{% hint style="info" %}
Only the agents of this particular department can see and take the chats.
{% endhint %}

## Facebook App Shortcuts

The Facebook app has a list of shortcuts to ease usage.&#x20;

* **`/facebook authorize`::** Starts the Facebook authorization.
* **`/facebook unauthorize`:** Revoke facebook authorization.
* **`/facebook edit pageId`:** Edit Page configuration for the given pageId.
* **`/facebook help`:** Shows help message.

{% hint style="danger" %}
When a Facebook user sends a message, and no agent is available on the server to chat, the conversation won't be created. This means that when agents return to work, they will not know someone was reaching out. Therefore, please ensure you always have at least one agent online.
{% endhint %}

## Uninstall Facebook  App

To delete the Facebook app from your workspace,

* Go to **Administration > Apps > Installed.**
* Click th**e kebab menu** against the **Facebook** **app.**
* Select **Uninstall**.
* Click **Yes** to confirm the uninstallation.
