# Canned Responses Omnichannel Manager's Guide

If you are using canned responses for the first time, see the [Rocket.Chat admin's guide for canned responses](./#canned-responses-rocket.chat-admins-guide) or contact your workspace administrator to enable canned responses on your workspace.

## Create Canned Responses

To create a Canned Response,&#x20;

* Go to **Administration > Omnichannel > Canned Responses**. A list of Canned Responses in the workspace is displayed.
* Click on **+ New**
* Update the required information and Hit **Save.** A new Canned Response is ready to be used by typing `!` in the message box.
  * **Shortcut**: The shortcut of your new canned response.
  * **Message**: Enter your message snippet. You can use any available placeholders to personalize your message. You can also preview the message anytime by switching between the `Editor` and `Preview` tab. The available placeholders include: `{{contact.name}}`, `{{contact.email}}`, `{{contact.phone}}`, `{{agent.name}}`, `{{agent.email}}`.&#x20;
  * **Tags**: Set the tags for your canned response. This helps agents find canned responses specific to a particular topic
  * **Sharing**: Lets you set the usage level of your Canned Response
    * **Public**: Anyone across your workspace can access your canned response. It requires the  `save-all-canned-responses` [permission](../../workspace-administration/permissions/).
    * **Department**: Anyone in the selected department can access your canned response. It requires the  `save-department-canned-responses` [permission](../../workspace-administration/permissions/).
    * **Private**: Only you and Omnichannel managers can access your canned response.&#x20;

<details>

<summary>Canned Response Message Example</summary>

Hi  `{{contact.name}}`,

My name is  `{{agent.name}}`  from the special service team. How can I help you today? Our products are back in stock and eagerly waiting to be part of your collection. You can claim your treasure on our website or at your nearest store.&#x20;

Got any more questions?  I am here to guide you on this shopping journey.

</details>

### Create canned response from within a chatroom

You can create a canned response on the go from within a conversation.

To create a canned response in a conversation,

* Click on the  <img src="../../../.gitbook/assets/image (251).png" alt="" data-size="line"> Canned Responses icon
* Click on **Create** and [fill in the required details as specified above](canned-responses-omnichannel-managers-guide.md#create-canned-responses).

## Filtering Canned Responses

You can filter canned responses from the main page by:

1. **Search**: Searching the Canned Message shortcut or message text.
2. **Sharing**: You can filter by sharing.
3. **Created By**: You can filter by name of the user who created the canned responses.

{% hint style="info" %}
To learn more about how agents can use canned responses, see the [agent guide.](../../omnichannel-agents-guides/omnichannel-conversation.md#canned-responses)&#x20;
{% endhint %}
