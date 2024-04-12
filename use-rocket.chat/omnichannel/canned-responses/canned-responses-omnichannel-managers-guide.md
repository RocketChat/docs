# Canned Responses Omnichannel Manager's Guide

If you are using canned responses for the first time, see the [Rocket.Chat admin's guide for canned responses](./#canned-responses-rocket.chat-admins-guide) or contact your workspace administrator to enable canned responses on your workspace.

## Create canned responses

To create a canned response,&#x20;

* Go to **Administration > Omnichannel > Canned Responses**. A list of canned responses in the workspace is displayed.
* Click **Create canned response**.
* Enter the following information:
  * **Shortcut**: The shortcut of your new canned response.
  * **Message**: Enter your message snippet. You can use any available placeholders to personalize your message. You can also preview the message anytime by switching between the `Editor` and `Preview` tab. The available placeholders include: `{{contact.name}}`, `{{contact.email}}`, `{{contact.phone}}`, `{{agent.name}}`, `{{agent.email}}`.&#x20;
  * **Tags**: Set the tags for your canned response. This helps agents find canned responses specific to a particular topic
  * **Sharing**: Set the usage scope of your Canned Response.
    * **Public**: Anyone across your workspace can access your canned response.
    * **Department**: Anyone in the selected department can access your canned response.&#x20;
    * **Private**: Only you and Omnichannel managers can access your canned response.&#x20;
* Click **Save**.

A new canned response is ready to be used by typing `!` in the message box.

{% hint style="warning" %}
Visit the [Canned Response Permission](./#canned-responses-permissions) guide to learn about the permissions required to create canned responses.
{% endhint %}

### Canned response example

Hi  `{{contact.name}}`,

My name is  `{{agent.name}}`  from the special service team. How can I help you today? Our products are back in stock and eagerly waiting to be part of your collection. You can claim your treasure on our website or at your nearest store.&#x20;

Got any more questions?  I am here to guide you on this shopping journey.

### Create canned response from within a chatroom

You can create a canned response on the go from within a conversation.

To create a canned response in a conversation,

* Click on the <img src="../../../.gitbook/assets/image (251).png" alt="" data-size="line"> Canned Responses icon
* Click **Create** and [fill in the required details as specified above](canned-responses-omnichannel-managers-guide.md#create-canned-responses).

## Filter canned responses

You can filter canned responses from the main page by:

1. **Search**: Searching the Canned Message shortcut or message text.
2. **Sharing**: You can filter by sharing.
3. **Created By**: You can filter by the name of the user who created the canned responses.

{% hint style="info" %}
To learn more about how agents can use canned responses, see the [agent guide.](../../omnichannel-agents-guides/omnichannel-conversation.md#canned-responses)&#x20;
{% endhint %}
