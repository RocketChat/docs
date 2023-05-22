# Livechat Widget Installation

The Live Chat Widget is a chat interface that can be embedded into a webpage. Visitors on your website can click the widget to initiate a conversation. It can serve as an excellent tool for use cases like the following:

* Offering Live and real-time support to customers/users.
* Embedded to get information from people interacting with your website.

## Livechat Widget Installation

To install the Live Chat widget,

{% hint style="info" %}
Configure the following settings on your Rocket.Chat workspace:

* Add the domain where the Live Chat will be used to the allowed list: Go to **Administration** > **Workspace** > **Settings** > **Omnichannel** > **Livechat** > **Livechat Allowed Domain**. Make sure to exclude `https://` or any trailing slashes from the domain entry.

By configuring this setting correctly, you allow access to the Live Chat widget on your specified domain.
{% endhint %}

* Go to **Administration** > **Omnichannel** > **Live Chat Installation**.
* Copy the code snippet and paste it above the last `</body>` tag on your website.
* The **Live Chat** widget appears at the bottom right of your webpage.

Learn more about [Live Chat settings](../workspace-administration/settings/omnichannel-admins-guide/#live-chat) and [Live Chat appearance](livechat-widget-appearance.md).

## Deploying Live Chat Widget to a different domain

To run the Live Chat Widget on a domain different from your Rocket.Chat server, &#x20;

* After installing the widget, navigate to **Administration** > **Workspace** > **Settings** > **General.**
* Disable **Restrict access inside any iframe** on your Rocket.Chat server.

## Troubleshoot Livechat Widget Installation

If you have issues displaying the Live Chat Widget, check your browser developer console to examine the details of any errors you might be experiencing.

<details>

<summary>Failed to read 'localStorage' properly from Window</summary>

<img src="../../.gitbook/assets/Clipboard - May 12, 2022 4_21 PM.png" alt="" data-size="original">

An error like this is related to your browser settings for third-party cookies. Try with another browser or review your browser settings to confirm it's not blocking third-party cookies.

</details>

<details>

<summary>Trying to access localhost:3000</summary>



Review the **Site URL** setting under **Administration** > **Workspace** > **Settings** > **General** and the server name setting on your reverse proxy (if you have one) to guarantee they are all aligned and correspond to the same URL used in your Live Chat Widget installed script.

</details>

<details>

<summary>Live Chat doesn't show OR Content Security Policy directive violation</summary>

![](<../../.gitbook/assets/image (4).png>)

Add the domain where the iframe is been used in the list of allowed domains under  **Administration** > **Workspace** > **Settings** > **Omnichannel** > **Livechat** > **Livechat Allowed Domain**

</details>
