# Omnichannel Admin's Guide

Configure the Omnichannel settings to streamline conversations from various communication channels into Rocket.Chat. Omnichannel provides the ability to set up and receive conversations from pop-up [Livechat widgets](../livechat-widget-installation.md) on your website or channels like Facebook to your Rocket.Chat workspace.

To access the Omnichannel menu, go to **Administration** > **Workspace** > **Settings** > **Omnichannel**.

The settings are as follows:

{% hint style="info" %}
Remember to click **Save changes** to apply any changes made here.
{% endhint %}

* **Omnichannel enabled**: When set to true, it enables the Omnichannel feature on your Rocket.Chat workspace.\
  Workspace administrators and omnichannel managers can now see the Omnichannel section to manage, while Omnichannel [Agents ](../agents.md)have access to their respective Omnichannel features.
* **Request comment when closing conversation**: If enabled, the agents must add a comment before closing a chat.
* **Accept new omnichannel requests when the agent is idle**: Enable the option to let Omnichannel agents receive new chat requests when they are idle.
* **Continuous sound notifications for new omnichannel room**: Set notification sound for a new omnichannel room.
* **File Uploads Enabled**: Enable this option to allow file uploads on Omnichannel communication channels.
* **Ask visitors if they would like a transcript after chat closed**: When enabled, Omnichannel visitors are asked if they require a transcript of their conversation after closing the chat.
* **Message to Show When Asking About Transcript**: This allows you to set a message that is displayed to the visitor when asking if they require a transcript.
* **Enable department removal**: Once departments are removed, there is no option to restore them. We highly recommend archiving the department instead.

## Livechat

Manage the following Omnichannel Livechat widget appearance settings:

* **Livechat Title**: Enter the title that is shown on your Livechat widget.
* **Livechat title background color**: The Livechat background color.
* **Enable message character limit**: Enable the option to set a message character limit.
* **Livechat message character limit**: Set a limit on message characters allowed on the visitor.
* **Display Offline Form**: When enabled, the offline form is displayed to visitors when there is no available agent.
* **Clear guest session when chat ended**: Enable the option to clear guest session when a chat ends.
* **Validate Email Address**: Enable the option to validate the visitor's email address.
* **Offline Form Unavailable Message**: A message to display when the online form is unavailable.
* **Title**: The offline form title.
* **Color**: The color of the Livechat widget. This also changes the color of the Livechat icon.
* **Instructions**: Instructions to your visitor to fill out the form to send a message.
* **Email Address to Send Offline Messages**: An email address to which you want all offline messages to be sent.
* **Offline Success Message**: The message seen by the visitor after successfully sending an offline message.
* **Allow Visitor to Switch Departments**: When enabled, Livechat visitors can switch departments.
* **Show agent information**: Enable this option to show information about the agent attending to a visitor in the Livechat widget.
* **Show agent email**: When this option is enabled, the Omnichannel agent's email is displayed to the visitor.
* **Conversation Finished Message**: Set a message to be sent to a visitor when the conversation is finished.
* **Conversation Finished Text**: Additional text to show after a conversation is finished.
* **Show Pre-registration Form**: This lets you set whether or not to show the pre-registration form.
* **Show name field**: Enable this to show the visitor name field.
* **Show email field**: Enable this to show the visitor email field.
* **Monitor History for Changes on**: This lets you monitor history changes on the Page URL or Page Title.
* **Send Visitor Navigation History as a Message**: When this option is enabled, you can send a visitor's navigation history to them as a message.
* **Registration Form Message**: The message seen on the registration form.
* **Livechat Allowed Domains**: Comma-separated list of domains allowed to embed the Livechat widget. Leave blank to allow all domains.
* **Send Livechat offline messages to a channel**: Whether to send Livechat offline message to a channel.
* **Channel Name**: The channel to which Livechat offline messages should be sent.
* **Livechat Widget Additional Scripts**: Use this setting to add additional JavaScript scripts to the widget bundle. You can add a list of scripts by separating them with commas, for example: `https://yourUrl/customScript1.js,https://yourUrl/customScript2.js`
* **Livechat Widget Additional CSS**: Use this setting to add additional CSS to the widget bundle. You can add a list of CSS files by separating them with commas, for example: `https://yourUrl/customFile1.css,https://yourUrl/customFile2.css`
* **Livechat widget position on the screen**: ![](../../../.gitbook/assets/Premium.svg) Select the position of the widget on your site - `Left` or `Right`. The widget is displayed at the bottom of the page.
* **Livechat background**: ![](../../../.gitbook/assets/Premium.svg) Enter the widget background color as hexadecimal (`#F5455C`), a color name (`red`), or an image using a URL (`url('https://example.com/image.png')`). This field follows CSS standards. See the [background property documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/background) for details.
* **Hide system messages**: ![](../../../.gitbook/assets/Premium.svg) Select the system messages that you want to hide in the livechat conversations in the widget. The options are as follows:
  * `Hide "User Join" messages`
  * `Hide "User Leave" messages`
  * `Hide "Conversation finished" messages`
  * `Hide "Conversation started" messages`
  * `Hide "Conversation transfered" messages`
* **Hide "powered by Rocket.Chat"**: ![](../../../.gitbook/assets/Premium.svg) Enable this option to hide the watermark in the widget.
* **Livechat widget logo (svg, png, jpg)**: ![](../../../.gitbook/assets/Premium.svg) Change the logo of the widget. By default, the following widget logo is displayed:

<figure><img src="../../../.gitbook/assets/widgetlogo.png" alt=""><figcaption></figcaption></figure>

See how to [install the Livechat widget](../livechat-widget-installation.md) and manage the [Livechat appearance](../livechat-widget-appearance.md).

## Business Hours

Manage the following business hours settings:

* **Business hours enabled**: Enable business hours.
* **Business Hour Type (Single or Multiple)**: Set the [type of business hour](../business-hours.md#business-hour-modes). By default, workspaces on the [community plan ](../../../readme/our-plans.md#community)only support the single business hour mode.

To learn more about how to optimize business hours in your workspace, see [Business Hours](https://docs.rocket.chat/use-rocket.chat/omnichannel/business-hours).

{% hint style="warning" %}
The **multiple business hour** feature is exclusively available to workspaces subscribed to any of Rocket.Chat's [premium plans](../../../readme/our-plans.md).
{% endhint %}

## CRM Integration

Integrate your Rocket.Chat Livechat events using webhooks to other external tools or CRMs. Manage the following settings:

* **Webhook URL**: The Webhook URL from the system you want to connect (destination).
* **Secret Token**: Enter the secret token that can be used to verify the webhook.

{% hint style="info" %}
The field **Secret Token** is sent to a header `X-RocketChat-Livechat-Token` so you can validate if the request became from Livechat.

If your endpoint returns a response status other than `200`, Rocket.Chat will retry ten times, waiting ten seconds between retries.
{% endhint %}

* **Send Request on Chat Start**: Sends a post request to the webhook endpoint when an Omnichannel chat starts.
* **Send Request on Chat Close**: Sends a request when a chat gets closed.
* **Send Request on Chat Taken**: Sends a request when an agent joins a chat.
* **Send request on Chat Queued**: A request gets sent when a chat gets queued.
* **Send Request on Forwarding**: Triggers request to be sent when a chat gets forwarded to another Omnichannel department or agent.
* **Send Request on Offline Messages**: Sends a request when a visitor leaves an offline message.
* **Send Request on Visitor Messages**: A request is sent when a visitor sends a message.
* **Send Request on Agent Messages**: Sends a request when an agent sends a message or reply.
* **Send Visitor Navigation History on Request**: Sends a request about a visitor's navigation history. This feature depends on the **Send Visitor Navigation History as a Message** field to be enabled in the **Livechat** settings section.
* **Send request on lead capture**: Sends a request when a lead is captured.
* **Lead capture email regex**: Specify the regex for lead captured email. For example, `\b[A-Z0-9._%+-]+@(?:[A-Z0-9-]+.)+[A-Z]{2,4}\b`
* **Lead capture phone regex**: Set the regex for lead-captured phone numbers. For example, `((?:([0-9]{1,3})|[0-9]{2})[ -]*?[0-9]{4,5}(?:[-\s_]{1,2})?[0-9]{4}(?:(?=[^0-9])|$)|[0-9]{4,5}(?:[-\s_]{1,2})?[0-9]{4}(?:(?=[^0-9])|$))`
* **Livechat\_http\_timeout**: Enter the request timeout value.

For additional settings, see [Webhooks](https://docs.rocket.chat/use-rocket.chat/omnichannel/webhooks).

## Canned Responses <a href="#a4x6dcwkpxm" id="a4x6dcwkpxm"></a>

<figure><img src="../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

Canned responses allow Omnichannel agents to use predefined message replies. You can enable or disable the use of canned responses in your workspace.

* **Enable Canned Responses**: Enable the option to use canned replies.

For details, see [Canned Responses](https://docs.rocket.chat/use-rocket.chat/omnichannel/canned-responses).

## GDPR

Configure GDPR data processing and consent.

* **Allow to collect and store HTTP header information**: This lets you determine whether Livechat is allowed to store information collected from HTTP header data, such as IP address, User-Agent, and so on.
* **Force visitors to accept data processing consent**: When enabled, visitors are not allowed to start chatting without consent.
* **Data processing consent text**: Set the consent text that visitors see about how you process their data.

## Queue Management <a href="#uuvo8ic5yio" id="uuvo8ic5yio"></a>

Configure the Omnichannel queue and how simultaneous chats get managed.

* **Queue processing delay timeout**: Set time in seconds in which queue delay in processing timeouts.
* **Waiting queue**: Enable the Omnichannel queue.
* **Waiting queue message**: A message that is displayed to the visitor when they get in the queue.
* **Max. number of simultaneous chats**: Set the maximum number of simultaneous chats that agents can tend to.
* **Calculate and dispatch Omnichannel waiting queue statistics**: Processing and dispatching queue statistics such as position and estimated waiting time. If the Livechat channel is not in use, it is recommended to disable this setting and prevent the server from doing unnecessary processes.
* **Number of recent chats to calculate estimate wait time**: The number of served chats to be used when calculating queue time.
* **Maximum waiting time in queue**: The maximum time in minutes for which a chat can be kept in queue, -1 means unlimited.
* **Sorting Mechanism:** Select the mechanism for sorting chats. It can either be **Timestamp**, [sla-policies.md](../sla-policies.md "mention")or [priorities.md](../priorities.md "mention").

{% hint style="warning" %}
All these settings except **"Queue processing delay timeout"** are exclusively available to workspaces subscribed to any of Rocket.Chat's [premium plans](../../../readme/our-plans.md).
{% endhint %}

To learn more about queuing, refer to [omnichannel-queue.md](../../omnichannel-agents-guides/omnichannel-queue.md "mention").

## Routing

Routing allows you to define the behavior of your Live Chat queues.

* **Omnichannel Routing Method**: Select your preferred routing method. Refer to [queue-types-routing-algorithm.md](queue-types-routing-algorithm.md "mention") for details on the types of routing methods used in Rocket.Chat.
* **Accept with No Online Agents**: When enabled, Omnichannel conversations are accepted even when there are no agents online.
* **Assign new conversations to bot agent**: When enabled, the routing system attempts to find a bot agent before addressing new conversations to a human agent.
* **Max number of items displayed in the queue**: Set the maximum number of items displayed in the incoming Omnichannel queue.
* **Show Queue List to All Agents**: Enable this to display the Omnichannel Queue for all agents.
* **External Queue Service URL**: Set your External Queue Service URL if your **Omnichannel Routing Method** is [External Service](queue-types-routing-algorithm.md#external-service).
* **Secret Token**: Enter the secret token.

<figure><img src="../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

* **Last-Chatted Agent Preferred**: Enable to allow the allocation of chats to the agent who previously interacted with the same visitor if the agent is available when the chat starts.
* **Assign new conversations to the contact manager**: This setting allocates a chat to the assigned Contact Manager as long as the Contact Manager is online when the chat starts.

## Sessions

The session setting allows you to define how open chat sessions are to be handled.

* **How to Handle Open Sessions When Agent Goes Offline**: Select what happens to an open chat session when an Agent goes offline.
  * **None**: Nothing happens.
  * **Forward**: Gets forwarded to another agent.
  * **Close**: The chat gets closed.
* **How Long to Wait After Agent Goes Offline**: Set the time in seconds before the action specified above happens.
* **Comment to Leave on Closing Session**: Set a comment to be displayed to the visitor on closing the chat.
* **How Long to Wait to Consider Visitor Abandonment?**: This lets you set how long in seconds to wait for before considering that the visitor abandoned the chat.

<figure><img src="../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

* **How to handle Visitor Abandonment**: Select what to do when visitors abandon chats. The options are:
  * **Do Nothing**
  * **Close chat**
  * **Place chat On-Hold**
* **Custom message when room is automatically closed by visitor inactivity**: Set a message that is sent when a chat gets automatically closed due to the visitor's inactivity.
* **How long to wait before closing a chat in On Hold Queue?**: Define how long in seconds the chat remains in the On Hold queue until it's automatically closed by the system.
* **Custom message for closed chats in On Hold queue**: Custom Message to be sent when a room in the on hold queue gets automatically closed by the system.
* **Allow agents to manually place chat On Hold**: When enabled, the agents have the option to place a chat on hold.
* **Chats on hold only after agent engagement**: Allow chats to be put on hold only if the agent was the last to send a message in the conversation.
* **Timeout (in seconds) for automatic transfer of unanswered chats to another agent**: Specify the time in seconds for unanswered chats to be transferred to other agents.

## Video and Audio Call

Configure the provider responsible for your Video and Audio calls.

* **Call Provider**: Select the call provider to use for Omnichannel Calls. Set the default call provider in [conference-call-admin-guide](../../rocket.chat-conference-call/conference-call-admin-guide/ "mention").

Extend the functionality of video and audio calling with any of the available [Rocket.Chat Conference Call](../../rocket.chat-conference-call/conference-call-admin-guide/) Apps like [Jitsi](../../rocket.chat-conference-call/conference-call-admin-guide/jitsi-app.md), [Pexip](../../rocket.chat-conference-call/conference-call-admin-guide/pexip-app.md), [BigBlueButton](../../rocket.chat-conference-call/conference-call-admin-guide/bigbluebutton-bbb-app.md), and [Google Meet](../../rocket.chat-conference-call/conference-call-admin-guide/google-meet-app.md).
