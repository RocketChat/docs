---
description: Enable and configure Omnichannel
---

# Omnichannel Admin's Guide

Configure how [Omnichannel](../../../omnichannel/) can be used to streamline conversations from various communication channels into Rocket.Chat. Omnichannel provides the ability to set up and receive conversations from pop-up [Live Chat widgets](../../../omnichannel/livechat-widget-installation.md) on your website or channels like Facebook to your Rocket.Chat workspace.

To access the Omnichannel menu,

Navigate to **Administration** > **Workspace** > **Settings** > **Omnichannel**

{% hint style="info" %}
Remember to hit **Save Changes** in order to apply any changes made here.
{% endhint %}

* **Omnichannel enabled**: When set to true, it enables the Omnichannel feature on your Rocket.Chat workspace.\
  Workspace administrators and omnichannel managers can now see the [Omnichannel ](../../../omnichannel/)section to manage, while Omnichannel [Agents ](../../../omnichannel/agents.md)have access to their respective Omnichannel features.
* **Request comment when closing conversation**: If enabled, the agents must add a comment before closing a chat.
* **Accept new omnichannel requests when the agent is idle**: Toggle true to let Omnichannel agents receive new chat requests when they are idle.
* **Continuous sound notifications for new omnichannel room**: Set notification sound for a new omnichannel room.
* **File Uploads Enabled**: Enable this to allow file uploads on Omnichannel communication channels.
* **Ask visitors if they would like a transcript after chat closed**: When enabled, Omnichannel visitors are asked if they require a transcript of their conversation after closing the chat.
* **Message to Show When Asking About Transcript**: This allows you set a message that is displayed to the visitor when asking if they require a transcript.
* **Enable department removal**: Once departments are removed, there is no option to restore them. We highly recommend archiving the department instead.

## Canned Responses <a href="#a4x6dcwkpxm" id="a4x6dcwkpxm"></a>

<figure><img src="../../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

[Canned Response](../../../omnichannel/canned-responses/) allows Omnichannel [agents](../../../omnichannel/agents.md) to use predefined message replies. You can enable or disable the use of canned responses in your workspace.

* **Enable Canned Responses**: Turn on to enable the use of Canned Replies.

{% hint style="info" %}
To learn more about canned responses, see [canned-responses-omnichannel-managers-guide.md](../../../omnichannel/canned-responses/canned-responses-omnichannel-managers-guide.md "mention").
{% endhint %}

## External Frame <a href="#gdtlte4az75" id="gdtlte4az75"></a>

Use an external frame to embed Rocket.Chat into your own solution or interact with your CRM.

* **External frame enabled**: Turn on to enable External frame.
* **External frame URL**: Add the URL of your external frame.
* **Encryption key (JWK)**: If provided, it encrypts the user's token with the provided key, and the external system needs to decrypt the data to access the token.

## Livechat

Manage Omnichannel Livechat settings.

* **Livechat Title**: The title shown on your Livechat widget.
* **Livechat title background color**: The Livechat background color.
* **Enable message character limit**: Toggle on to enable the message character limit.
* **Livechat message character limit**: Set a limit on message characters allowed on the visitor.
* **Display Offline Form**: When enabled, the offline form is displayed to visitors when there is no available agent.
* **Clear guest session when chat ended**: Toggle on to clear guest session when a chat ends.
* **Validate Email Address**: When turned on, the visitor's email address is validated.
* **Offline Form Unavailable Message**: A message to show when the online form is unavailable.
* **Title**: The offline form title.
* **Color**: The style color of the Livechat widget. This also changes the color of the Livechat icon.
* **Instructions**: Instructions to your visitor to fill out the form to send a message.
* **Email Address to Send Offline Messages**: An email address to which you want all offline messages to be sent.
* **Offline Success Message**: The message seen by the visitor after successfully sending an offline message.
* **Allow Visitor to Switch Departments**: When enabled, Livechat visitors can switch departments.
* **Show agent information**: Enable this to show information about the agent attending to a visitor in the Live Chat widget.
* **Show agent email**: When set to true, the Omnichannel Agent's email is displayed to the visitor.
* **Conversation Finished Message**: Set a message to be sent to a visitor when the conversation is finished.
* **Conversation Finished Text**: Additional text to show after a conversation is finished.
* **Show Pre-registration Form**: This lets you set whether or not to show the pre-registration form.
* **Show name field**: Toggle to show or hide the name field.
* **Show email field**: Toggle to show or hide the email field.
* **Monitor History for Changes on**: This lets you monitor history changes on the Page URL or Page Title.
* **Send Visitor Navigation History as a Message**: When set to true, you can send a visitor's navigation history to them as a message.
* **Registration Form Message**: The message seen on the registration form.
* **Livechat Allowed Domains**: Comma-separated list of domains allowed to embed the Livechat widget. Leave blank to allow all domains.
* **Send Livechat offline messages to a channel**: Whether to send Livechat offline message to a channel.
* **Channel Name**: The channel to which Livechat offline messages should be sent.
* **Livechat Widget Additional Scripts**: Use this setting to add additional JavaScript scripts to the widget bundle. You can add a list of scripts by separating them with commas, for example: `https://yourUrl/customScript1.js,https://yourUrl/customScript2.js`
* **Livechat Widget Additional CSS**: Use this setting to add additional CSS to the widget bundle. You can add a list of CSS files by separating them with commas, for example: `https://yourUrl/customFile1.css,https://yourUrl/customFile2.css`
* **Livechat widget position on the screen**: ![](../../../../.gitbook/assets/Premium.svg) Select the position of the widget on your site - `Left` or `Right`. The widget is displayed at the bottom of the page.
* **Livechat background**: ![](../../../../.gitbook/assets/Premium.svg) Enter the widget background color as hexadecimal (`#F5455C`), a color name (`red`), or an image using a URL (`url('https://example.com/image.png')`). This field follows CSS standards. See the [background property documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/background) for details.
* **Hide system messages**: ![](../../../../.gitbook/assets/Premium.svg) Select the system messages that you want to hide in the livechat conversations in the widget. The options are as follows:
  * `Hide "User Join" messages`
  * `Hide "User Leave" messages`
  * `Hide "Conversation finished" messages`
  * `Hide "Conversation started" messages`
  * `Hide "Conversation transfered" messages`
* **Hide "powered by Rocket.Chat"**: ![](../../../../.gitbook/assets/Premium.svg) Enable this option to hide the watermark in the widget.
* **Livechat widget logo (svg, png, jpg)**: ![](../../../../.gitbook/assets/Premium.svg) Change the logo of the widget. By default, the following widget logo is displayed:

<figure><img src="../../../../.gitbook/assets/widgetlogo.png" alt=""><figcaption></figcaption></figure>

See how to [install the Livechat widget](../../../omnichannel/livechat-widget-installation.md) and manage the [Livechat appearance](../../../omnichannel/livechat-widget-appearance.md) on this [Omnichannel guide](../../../omnichannel/).

## Business Hour

* **Business hours enabled**: Toggle on to enable business hours.
* **Business Hour Type (Single or Multiple)**: Set the [type of business hour](../../../omnichannel/business-hours.md#business-hour-modes). By default, workspaces on the [community plan ](../../../../readme/our-plans.md#community)only support the single business hour mode.

{% hint style="warning" %}
The **multiple business hour** feature is exclusively available to workspaces subscribed to any of Rocket.Chat's [premium plans](../../../../readme/our-plans.md).
{% endhint %}

{% hint style="info" %}
To learn more about how to optimize business hours in your workspace, see [business-hours.md](../../../omnichannel/business-hours.md "mention").
{% endhint %}

## CRM Integration

Integrate your Rocket.Chat Live Chat events using webhooks to other external tools or CRMs.

See more details about this below.

{% content-ref url="../../../omnichannel/webhooks.md" %}
[webhooks.md](../../../omnichannel/webhooks.md)
{% endcontent-ref %}

## GDPR

Configure GDPR data processing and consent.

* **Allow to collect and store HTTP header information**: This lets you determine whether Live Chat is allowed to store information collected from HTTP header data, such as IP address, User-Agent, and so on.
* **Force visitors to accept data processing consent**: When toggled on, visitors are not allowed to start chatting without consent.
* **Data processing consent text**: Set the consent text that visitors see about how you process their data.

## Queue Management <a href="#uuvo8ic5yio" id="uuvo8ic5yio"></a>

Configure Omnichannel Queue and how simultaneous chats get managed.

* **Queue processing delay timeout**: Set time in seconds in which queue delay in processing timeouts.
* **Waiting queue**: Turn on to enable the Omnichannel queue.
* **Waiting queue message**: A message that is displayed to the visitor when they get in the queue.
* **Max. number of simultaneous chats**: Set the maximum number of simultaneous chats that agents can tend to.
* **Calculate and dispatch Omnichannel waiting queue statistics**: Processing and dispatching queue statistics such as position and estimated waiting time. If the _Livechat channel_ is not in use, it is recommended to disable this setting and prevent the server from doing unnecessary processes.
* **Number of recent chats to calculate estimate wait time**: The number of served chats to be used when calculating queue time.
* **Maximum waiting time in queue**: The maximum time in minutes for which a chat can be kept in queue, `-1 means unlimited`.
* **Sorting Mechanism:** Select the mechanism for sorting chats. It can either be Timestamp, [sla-policies.md](../../../omnichannel/sla-policies.md "mention")or [priorities.md](../../../omnichannel/priorities.md "mention").

{% hint style="warning" %}
All these settings except **"Queue processing delay timeout"** are exclusively available to workspaces subscribed to any of Rocket.Chat's [premium plans](../../../../readme/our-plans.md).
{% endhint %}

To learn more about Queuing, please refer to [omnichannel-queue.md](../../../omnichannel-agents-guides/omnichannel-queue.md "mention").

## Routing

Routing allows you to define the behavior of your Live Chat queues.

* **Omnichannel Routing Method**: Select your preferred routing method. Please refer to [queue-types-routing-algorithm.md](queue-types-routing-algorithm.md "mention") for details on the types of routing methods used in Rocket.Chat.
* **Accept with No Online Agents**: When enabled, Omnichannel conversations are  accepted even when there are no [agents ](../../../omnichannel/agents.md)online.
* **Assign new conversations to bot agent**: When enabled, the routing system attempts to find a bot agent before addressing new conversations to a human agent.
* **Max number of items displayed in the queue**: Set the maximum number of items displayed in the incoming Omnichannel queue.
* **Show Queue List to All Agents**: Enable this to display the Omnichannel Queue for all [Omnichannel Agents](../../../omnichannel/agents.md).
* **External Queue Service URL**: Set your External Queue Service URL if your _Omnichannel Routing Method_ is [External Service](queue-types-routing-algorithm.md#external-service).
* **Secret Token**: Enter the secret token.

<figure><img src="../../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

* **Last-Chatted Agent Preferred**: Enable to allow the allocation of chats to the agent who previously interacted with the same visitor if the agent is available when the chat starts.
* **Assign new conversations to the contact manager**: This setting allocates a chat to the assigned Contact Manager as long as the Contact Manager is online when the chat starts.

## Sessions

The Sessions setting allows you to define how open chat sessions are to be handled.

* **How to Handle Open Sessions When Agent Goes Offline**: Select what happens to an open chat session when an Agent goes offline.
  * **None**: Nothing happens.
  * **Forward**: Gets forwarded to another Agent.
  * **Close**: The chat gets closed.
* **How Long to Wait After Agent Goes Offline**: Set the time in seconds before the action specified above happens.
* **Comment to Leave on Closing Session**: Set a comment to be displayed to the Visitor on closing the chat.
* **How Long to Wait to Consider Visitor Abandonment?**: This lets you set how long in seconds to wait for before considering the Visitor abandoned the chat.

<figure><img src="../../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

* **How to handle Visitor Abandonment**: Select what to do when Visitors abandon chats.
* **Custom message when room is automatically closed by visitor inactivity**: Set a message that is sent when a chat gets automatically closed due to the Visitor's inactivity.
* **How long to wait before closing a chat in On Hold Queue?**: Define how long in seconds the chat remains in the On Hold queue until it's automatically closed by the system.
* **Custom message for closed chats in On Hold queue**: Custom Message to be sent when a room in On-Hold queue gets automatically closed by the system.
* **Allow agents to manually place chat On Hold**: When enabled, the agents have the option to place a chat On Hold, provided the agent has sent the last message.
* **Chats on hold only after agent engagement**: Allow chats to be put on hold only if the agent was the last to send a message in the conversation.
* **Timeout (in seconds) for automatic transfer of unanswered chats to another agent**: Specify the time in seconds for unanswered chats to be transferred to other agents.

## Video and Audio Call

Configure the provider responsible for your Video and Audio calls.

* **Call Provider**: Select the call provider to use for Omnichannel Calls. Set the default call provider in [conference-call-admin-guide](../../../rocket.chat-conference-call/conference-call-admin-guide/ "mention").

Extend the functionality of video and audio calling with any of the available [Rocket.Chat Conference Call](../../../rocket.chat-conference-call/conference-call-admin-guide/) Apps like [Jitsi](../../../rocket.chat-conference-call/conference-call-admin-guide/jitsi-app.md), [Pexip](../../../rocket.chat-conference-call/conference-call-admin-guide/pexip-app.md), [BigBlueButton](../../../rocket.chat-conference-call/conference-call-admin-guide/bigbluebutton-bbb-app.md), and [Google Meet](../../../rocket.chat-conference-call/conference-call-admin-guide/google-meet-app.md).
