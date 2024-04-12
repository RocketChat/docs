# Livechat Widget Installation

The Livechat Widget is a chat interface that can be embedded into a webpage. Visitors on your website can click the widget to initiate a conversation. It can serve as an excellent tool for use cases like the following:

* Offering live and real-time support to customers/users.
* Embedded to get information from people interacting with your website.

## Livechat Widget Installation

To install the Livechat widget,

{% hint style="info" %}
Configure the following settings on your Rocket.Chat workspace:

* Add the domain where Livechat will be used to the allowed list: Go to **Administration** > **Workspace** > **Settings** > **Omnichannel** > **Livechat** > **Livechat Allowed Domain**. Make sure to exclude`https://` or any trailing slashes from the domain entry.

By configuring this setting correctly, you allow access to the Livechat widget on your specified domain.
{% endhint %}

* Go to **Administration** > **Omnichannel** > **Livechat Installation**.
* Copy the code snippet and paste it above the last `</body>` tag on your website.
* The Livechat widget appears at the bottom right of your webpage.

Learn more about [Livechat settings](omnichannel-admins-guide/#live-chat) and [Livechat appearance](livechat-widget-appearance.md).

## Deploy Livechat widget to a different domain

To run the Livechat widget on a domain different from your Rocket.Chat server, &#x20;

* After installing the widget, navigate to **Administration** > **Workspace** > **Settings** > **General.**
* Disable **Restrict access inside any iframe** on your Rocket.Chat server.

## Troubleshoot Livechat widget installation

If you have issues displaying the Livechat widget, check your browser developer console to examine the details of any errors you might be experiencing.

1. **Failed to read 'localStorage' properly from Window**

<figure><img src="../../.gitbook/assets/Clipboard - May 12, 2022 4_21 PM.png" alt=""><figcaption></figcaption></figure>

An error like this is related to your browser settings for third-party cookies. Try with another browser or review your browser settings to confirm it's not blocking third-party cookies.

2. **Trying to access localhost:3000**

Review the **Site URL** setting under **Administration** > **Workspace** > **Settings** > **General** and the server name setting on your reverse proxy (if you have one) to guarantee they are all aligned and correspond to the same URL used in your Livechat widget installed script.

3. **Livechat doesn't show OR Content Security Policy directive violation**

<figure><img src="../../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

Add the domain where the iframe is been used in the list of allowed domains under  **Administration** > **Workspace** > **Settings** > **Omnichannel** > **Livechat** > **Livechat Allowed Domain**.
