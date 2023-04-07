---
description: Omnichannel Integration between Rocket.Chat and WhatsApp Business.
---

# WhatsApp

It is a paid subscription and costs you $39 per month. Alternatively, you can use the [whatsapp-cloud-app](../whatsapp-cloud-app/ "mention"), which connects Rocket.Chat directly to WhatsApp without any third-party service.

![](<../../../../../.gitbook/assets/image (841).png>)

{% hint style="warning" %}
**You must enable the** [**Omnichannel**](../../../../../use-rocket.chat/omnichannel/) **feature with** [**agents**](../../../../../use-rocket.chat/omnichannel/agents.md) **and** [**managers**](../../../../../use-rocket.chat/omnichannel/managers.md) **assigned to receive and send Omnichannel messages.**
{% endhint %}

## Install WhatsApp App

To install the Whatsapp App,

* Go to **Administration > Apps > Marketplace.**
* Search for the WhatsApp app.
* Click **Install** and accept the needed permissions. You receive a message from `whatsapp.bot` in the `#omnichannel-whatsapp-setup` channel with setup instructions.

## Configure WhatsApp App

To configure the WhatsApp App,

* On the **WhatsApp App** I**nfo** screen, navigate to **Settings.**
*   Update the required fields:

    * **Notification of undeliverable message**: Notification to alert the agent that a message was not delivered to the WhatsApp platform.
    * **Agents Display Info:** You can display the agent's name or username.
    * **File Uploads Enabled:**  Enable/disable file sharing and set a limit for **Maximum File Upload Size (in bytes)**.
    * **Accepted Media Types:** Provide a list of accepted media types comma-separated.  To accept all media types, leave this blank.
    * **Allow Quote Messages:** Agents will see the quoted message reference on Rocket.Chat, when the Contact quotes/replies to a message on WhatsApp.

    {% hint style="warning" %}
    For workspaces below version 4.2.0, ensure you have the following index on the "rocketchat\_apps\_persistence" collection in DB: **appId\_1\_associations\_1** before activating **Allow Quote Messages** feature.
    {% endhint %}

    * **Template Message Metadata Refresh Interval(in Minutes):** For a better user experience, the app must cache some Template Messages meta-data information. You can define the duration (in minutes) within which the app will automatically refresh its cache. To learn more about template messages, see [WhatsApp Omnichannel Integration API.](https://developer.rocket.chat/reference/api/rest-api/endpoints/apps-endpoints/whatsapp-endpoints/whatsapp-omnichannel-integration-api)
    * **Message Status Endpoint URL:** The URL to receive the status of each message exchanged.
    * **Filter Message Status:** Filter the statuses you wish to receive at the endpoint ("Message Status Endpoint URL") based on Message Type.
    * **Allow List options for Quick Replies:** If enabled, messages with more than three quick reply options would be rendered as List options. **Max limit for list options is 10.**
    * **Custom label for all List Option buttons:** Define a custom label message you want to display on all Quick reply options sent as List Message.
* Click **Save Changes**.

### Create 360Dialog Account

{% hint style="info" %}
If you have a 360dialog account, click **Yes and** proceed to [connect your WhatsApp number](./#connect-whatsapp-number-to-your-workspace).&#x20;
{% endhint %}

From the `whatsapp.bot` message,&#x20;

* If you don't have a 360dialog account, click **No**.&#x20;
* Click on the **Create 360 Dialog Account** button.&#x20;
* After creating your account, copy the **API key** and complete the bot instructions.

### Connect WhatsApp Number to your Workspace

After copying your newly generated API key on 360Dialog,&#x20;

* Return to your Rocket.Chat workspace and click **Connect WhatsApp Number**.
* Fill in the required details:
  * **API Key:** The API key of your WhatsApp number.
  * **Department:** The [department](../../../../../use-rocket.chat/omnichannel/departments.md) that will handle WhatsApp conversations from this number.
  * **Welcome Message:** A message sent to customers when they send their first message.
  * **Conversation Finished Message**. A message sent to your customer when an agent closes the conversation,
  * **Default message for offline service**: A message sent to your customer when no agents are available online,
* Click **Connect.**

{% hint style="info" %}
You can set up as many WhatsApp numbers as you want.
{% endhint %}

## Uninstall WhatsApp App

To delete the WhatsApp app from your workspace,

* Go to **Administration > Apps > Installed.**
* Click th**e kebab menu** against the **Whatsapp** **app.**
* Select **Uninstall**.
* Click **Yes** to confirm the uninstallation.

{% content-ref url="../../../../../resources/frequently-asked-questions/whatsapp-business-app-faqs.md" %}
[whatsapp-business-app-faqs.md](../../../../../resources/frequently-asked-questions/whatsapp-business-app-faqs.md)
{% endcontent-ref %}
