---
description: Omnichannel Integration between Rocket.Chat and Instagram Messenger API.
coverY: 0
---

# Instagram Direct

With Instagram Direct, you can directly handle messages from your Instagram Business Inbox in [Rocket.Chat](http://rocket.chat). Instagram users contact you via Instagram Direct messages, and you answer chats from your Rocket.Chat workspace. Some key features of this integration include sending messages with quick reply buttons, welcome messages(starting/closing chat), file sharing, and the correlation between your Instagram Direct pages and your Rocket.Chat departments.

The Instagram Direct integration is available to the following Instagram Direct Professional Accounts:

* All Business accounts
* Creator accounts via a phased roll-out, beginning with accounts with less than 500k followers

{% hint style="info" %}
For more official info, see [Instagram Messaging with the Messenger Platform](https://developers.facebook.com/docs/messenger-platform/instagram).
{% endhint %}

## Install Instagram Direct App

To install the Instagram Direct App,

* Go to **Administration > Apps > Marketplace.**
* Search for the **Instagram Direct** app.
* Click **Install** and accept the needed permissions. You receive a message from `instagram.bot` in the `#omnichannel-instagram-setup` channel with setup instructions.

{% hint style="warning" %}
**You must enable the** [**Omnichannel**](../../../../../use-rocket.chat/omnichannel/) **feature with** [**agents**](../../../../../use-rocket.chat/omnichannel/agents.md) **and** [**managers**](../../../../../use-rocket.chat/omnichannel/managers.md) **assigned to receive and send Omnichannel messages.**
{% endhint %}

## Configure Instagram Direct App

### Handover protocol

If you have multiple Facebook apps connected to a single Facebook account, then Facebook allows those apps to participate in a conversation by passing control of the conversation between them. This feature is known as the Handover protocol. If you use the Handover protocol on your account, this Instagram app allows you to perform some handover operations. &#x20;

{% hint style="info" %}
To learn more, see the official documentation for [Handover Protocol](https://developers.facebook.com/docs/messenger-platform/instagram/features/handover-protocol).
{% endhint %}

To configure the Instagram Direct App,

* On the Instagram Direct App I**nfo** screen, navigate to **Settings.**
*   Update the required fields:

    * **Agents Display Name:** Choose to display the agent's name or username.
    * **File Upload Enabled:** Enable/disable file sharing and set a limit for maximum upload size.
    * **Accepted Media Types:** Select the type of files that can be exchanged during a conversation.
    * **Delete messages once it has been "Unsend" from Instagram:** Select what to do with Unsent messages.
    * **Instagram Handover Protocol Action:** It defines the action which should be performed while sending an agent's message to a thread to get access to the thread.



    {% hint style="info" %}
    **Take Thread Control** action will only work if you've configured Rocket.Chat Omni-gateway app as a **Primary Receiver** from Facebook Apps page settings.
    {% endhint %}



    * **Instagram Handover Protocol Metadata:** It defines the metadata to be passed along with thread control action requests. You can use this to pass some custom payload to other apps.
* Click **Save Changes**.

## Instagram Direct Authentication

Before sending any messages, you must authorize the **Omni-Gateway** to send and receive Instagram Direct messages on behalf of your account.

Ensure that each of the following requirements is met before starting the authentication process:

* An Instagram [Business Account](https://help.instagram.com/502981923235522?fbclid=IwAR0TNcoToWKAq8OTOH4VjUC75NSk8EyqFW2Xz5KWDX7SsYK-9rNYppMMnLs).
* A [Facebook Account](https://www.facebook.com/).&#x20;
* A[ Facebook Page](https://www.facebook.com/pages/creation/) connected to your Instagram account.&#x20;

{% hint style="info" %}
&#x20;See the Meta guide on [connecting your Facebook Page to your Instagram account](https://help.instagram.com/570895513091465/?helpref=related\_articles).
{% endhint %}

* Enable [Message Control Connected Tools Settings](https://developers.facebook.com/docs/messenger-platform/instagram/get-started#connected-tools-toggle) from your Instagram account on mobile.
* Make sure your [Rocket.Chat](http://rocket.chat) instance is on a public Address and is accessible by anyone on the internet. Go to **Admin > General > Site Url** to confirm this.
* &#x20;Lastly, ensure your [Rocket.Chat](http://rocket.chat) instance is connected to [Rocket.Chat](http://rocket.chat) Cloud. Go to **Admin > Connectivity Services** to connect to Cloud.

### Authentication

To start the authentication with Instagram Direct,

* From the `instagram.bot message`, click on the Start Authentication button.
* You are redirected to a page to log in and authorize Instagram Direct.
* Select the Instagram business account you want to use with Rocket.Chat Omni Gateway.
* If you have multiple pages associated with your Instagram account, it will prompt you to choose the preferred page to connect.
* Determine what Rocket.Chat Omni Gateway can do with the pages you have selected.
* After selecting your page, you will receive a success message with credentials for your  Instagram Business Account that has been authenticated that subscribed.

### Subscribe/Unsubscribe

You are automatically subscribed to the Instagram page following successful authentication. However, you can choose to unsubscribe.

* From the list of connected Instagram Business Accounts, click the **UNSUBSCRIBE** button against the account you want to unsubscribe.

### Edit Page Configurations

To update the page configurations,

* Click the **Edit Page Config** button under the account and update the following settings:
  * **Department**: You can route all the conversations from this page to a specific [**department**](https://docs.rocket.chat/guides/omnichannel/departments). Only the agents of this department can serve conversations coming from this page.
  * **Welcome Message:** First message your customer will receive when they message you.
  * **Conversation Finished Message:** A message sent to your customer when a conversation is closed.
  * **Default message for offline service:** Message sent to your visitor when no agents are available online.

{% hint style="danger" %}
When an Instagram user sends a message, and no agent is available on the server to chat, the conversation won't be created. This means that when agents return to work, they will not know someone was reaching out. Therefore, please ensure you always have at least one agent online.
{% endhint %}

## Instagram Direct App Shortcuts

The Instagram Direct app has a list of shortcuts to ease usage.&#x20;

* **`/instagram authorize`::** Starts the Instagram authorization process to connect your Instagram accounts.
* **`/instagram unauthorize`:** Revoke Instagram authorization to remove all connected Instagram accounts.
* **`/instagram edit pageId`:** Edit Page configuration for the given pageId.
* **`/instagram edit username`:** Edit PageInstagram configuration for the given Instagram username.
* **`/instagram help`:** Shows help message.

## Uninstall Instagram Direct App

To delete the Instagram Direct app from your workspace,

* Go to **Administration > Apps > Installed.**
* Click th**e kebab menu** against the **Instagram Direct** **app.**
* Select **Uninstall**.
* Click **Yes** to confirm the uninstallation.

{% hint style="danger" %}
You cannot receive messages on Rocket.Chat if you have a country restriction set on Instagram.
{% endhint %}
