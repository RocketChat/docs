---
description: Learn how to handle omnichannel conversations.
---

# Omnichannel Conversation

When you log in to your workspace as an agent and [set your status to **Available**](./#omnichannel-agent-availability)**,** to handle new conversations:

* When you receive an omnichannel message from a customer/visitor, you will be notified by a pop-up sound, and the message is displayed under the "**Queued Chat**" section.
* You can preview the content of a conversation by clicking on it. When you're ready to handle the conversation, click **Take it,** and it is moved to the "**Chats in Progress**" section.
* Click on a conversation to reply to an omnichannel contact.

{% hint style="warning" %}
If a message is sent to a [department](../omnichannel/departments.md) you don't belong to, you won't receive it.
{% endhint %}

Note that when the visitors are typing messages, the typing indicator is displayed next to their icon. For example, ![](<../../.gitbook/assets/image (457).png>)

## Omnichannel Conversation Quick Actions

In an Omnichannel conversation, quick actions can be performed from the top of the chat screen. They are shown as icons on the top right.

## Move back to the Queue

If an omnichannel conversation needs to be handled by another agent within your department,

* Click <img src="../../.gitbook/assets/image (248).png" alt="" data-size="line"> to
* Click **Move to the queue**.

The conversation starts to appear in the Queued Chats for other agents to see.

## Forward a conversation

To forward a conversation:

* Click on the <img src="../../.gitbook/assets/forward-chat.png" alt="" data-size="line"> icon.
* Enter the department or the Agent to whom the conversation should be forwarded.
* Leave a comment if necessary and click **Forward**.
* A notification appears briefly at the top to indicate if the operation succeeded or failed.

## Conversation transcript

Following an Omnichannel conversation, forwarding the transcript to the contact you were serving as an agent may be necessary.

#### To send the transcript via email,

* Click <img src="../../.gitbook/assets/send-transcript.png" alt="" data-size="line"> icon
* Click **Send via email**
* Enter their **Email**
* Enter the **Subject**
* Hit **Request**.

#### To export the transcript as PDF, ![](../../.gitbook/assets/Premium.svg)

* Click <img src="../../.gitbook/assets/end-conversation.png" alt="" data-size="line"> icon to close the conversation first
* Enter comments if any
* Update [Tags](../omnichannel/tags.md) for this conversation
* Select **Export chat transcript as PDF**
* You receive a new direct message from **Rocket.Cat** with the conversation attached in PDF form.

{% hint style="warning" %}
Exporting as PDF becomes available only after you **Close** the omnichannel conversation. It is not possible to export an incomplete conversation.
{% endhint %}

To export the transcript of a previously closed conversation,

* Click <img src="../../.gitbook/assets/send-transcript.png" alt="" data-size="line"> icon
* Click Export as PDF
* The transcript appears within the conversation as a message from **Rocket.Cat.**

{% hint style="info" %}
You need **Request PDF Transcript** permission assigned to your role. To assign permission, navigate to the home screen **Kebab menu > Workspace >** **Permissions**, assign **Request PDF Transcript** to your role, or contact your workspace administrator.
{% endhint %}

To enable **Export Conversation Transcript** automatically for every chat,

* Click your avatar and select **My account**.
* Navigate to **Omnichannel** and enable the transcript option you want to automate.
  * **Export chat transcript as PDF**: Always export the transcript as PDF at the end of conversations.
  * **Send chat transcript via email:** Always send the transcript to contacts at the end of the conversations.
* Click **Save Changes**.

## Place conversation On-Hold ![](../../.gitbook/assets/Premium.svg)

During supporting conversation as an agent, you can find yourself in a situation where Omnichannel contacts terminate the conversation abruptly. Still, the conversation will persist in your queue until it is **Closed**. This can potentially impact your service capacity as you may be unable to engage in new conversations due to the maximum number of simultaneous conversations allowed per agent. To address this concern, you can pause the conversation temporarily by using the Place Chat On-Hold feature.

To place a conversation on hold,

* Click <img src="../../.gitbook/assets/image (638).png" alt="" data-size="line">
* Click **Place Chat On-Hold**

If the Omnichannel contact engages again, the routing algorithm will try to find you first to assign this conversation. If you are busy serving other conversations at maximum capacity, the conversation will be assigned to the next available agent.

You can also click the conversation in the queue anytime and click **Resume** to engage with the same contact again.

{% hint style="info" %}
You can manually place the conversation on hold only when you send the last message to the contact.
{% endhint %}

## Close a conversation

To end a conversation:

* Click <img src="../../.gitbook/assets/end-conversation.png" alt="" data-size="line"> icon.
* Enter comments if any
* Update [Tags](../omnichannel/tags.md) for this conversation
* Select **Export chat transcript as PDF** in case you need it exported.
* Select **Send chat transcript via email** if you want it sent to the guest's email.
* Click **Confirm,** and the conversation disappears from the **Chats in Progress** queue.
* The PDF conversation transcript is sent to you as a direct message if you request that the chat be exported.

## Call

Communication with omnichannel contacts on Rocket.Chat can also be done using audio/video calls. Your workspace must have at least one call app installed to make these calls.

{% hint style="info" %}
To enable Rocket.Chat video call feature, please get in touch with your administrator or follow the [instructions](../rocket.chat-conference-call/omnichannel-video-audio-call-configuration.md).
{% endhint %}

To make a call,

* Click <img src="../../.gitbook/assets/phone-icon.png" alt="" data-size="line">icon from quick actions on the right side
* Click **Join Call** button in the conversation.
* Enter your name in the new browser window and hit **Join meeting**

## Room information

* Click the <img src="../../.gitbook/assets/Screen Shot 2023-03-03 at 11.23.02 PM.png" alt="" data-size="line">icon from quick actions on the right side to reveal the details of your current conversation.
* The details revealed include the date and time, average response time, queue time, the contact name, and your username.
* Click **Edit** to add some further information. E.g., the topic discussed or priority
* Hit **Save.**

## Canned Responses ![](../../.gitbook/assets/Premium.svg)

Canned responses allow you to call pre-saved message snippets with shortcuts (preceded with `!`) to communicate a quick note to your omnichannel contact in omnichannel as well as regular conversations inside your Rocket.Chat's workspace.

**To send a canned response,**

* Start your message with `!` and the canned response shortcut, or you can select the canned response from the drop-down list that will appear above your text field
* You can also use the same canned responses when talking to your peers outside Omnichannel

To access all available canned responses for your department or all public canned responses on your workspace,

* Click <img src="../../.gitbook/assets/image (251).png" alt="" data-size="line"> icon.
* Hover your cursor over the canned response you want to use in your current conversation
* Hit **Use.**

### Create a canned response from a room as an agent

You can create a canned response during an omnichannel conversation if you have [appropriate permissions](../omnichannel/canned-responses/#canned-responses-permissions).

{% hint style="info" %}
See [#create-canned-response-from-within-chatroom](../omnichannel/canned-responses/canned-responses-omnichannel-managers-guide.md#create-canned-response-from-within-chatroom "mention") and contact your workspace administrator to assign you the required permission.
{% endhint %}

## Contact information

To get the contact details of the currently selected omnichannel conversation's contact,

* Click ![](../../.gitbook/assets/contact-info.png)icon

While viewing contact information, click **Edit** to edit the contact details or click **Chat History** to see the chat history.

## Search chats

To search for messages in a conversation,

1. Click ![](<../../.gitbook/assets/search (1).png>) icon
2. Enter your search query.
3. The search result is displayed as you type. You can also use [Regular Expressions.](https://en.wikipedia.org/wiki/Regular\_expression) For example, to search for the word `error` followed by any three digits, use `error\d{3}` .

## Search for file attachments

To search for files that have been attached to the conversation,

* Click <img src="../../.gitbook/assets/attach-file.png" alt="" data-size="line">icon.
* All files that have been attached are displayed.
* Enter the search query.
* Optionally, choose the file type you are interested in. By default, all the file types are displayed.

## View contact chat history

To get the chat history of the contact:

* Click ![](../../.gitbook/assets/contact-history.png) icon.
* The contact is displayed alongside the last closing message which you sent.
* Below the contact details, click the ![](../../.gitbook/assets/messages.png) icon, and the messages in the history are displayed.
* Enter a search query in the search box. The results are displayed as you type.

## Invite users to a chat

Invite other livechat agents or managers to an ongoing chat. This is useful when you require additional help or need to work together with a visitor. To invite:

* In a chat, send the slash command `/invite @<username>`.
* If the user is not an agent, a manager, or a user with permission to join a chat, the message **User is not an Omnichannel Agent** is displayed. Otherwise, the user is added to the chat.

{% hint style="info" %}
In the backend, the [Join Livechat Room](https://developer.rocket.chat/reference/api/rest-api/endpoints/omnichannel/livechat-endpoints/livechat-room/join-livechat-room) is called to invite users to a livechat room.
{% endhint %}
