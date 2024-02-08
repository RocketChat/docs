# Message Actions

**Message actions** allow you to interact with and manage your messages in a [room](../rooms/). This guide will walk you through the available message actions in a Rocket.Chat workspace.

## Open message actions

To display the message actions menu, hover over the message and click the **kebab** menu.

### Quote a message

Click <img src="../../../.gitbook/assets/image (2) (1).png" alt="" data-size="line"> to quote and respond to a message.

### Edit messages

To edit a message, click on the **Edit** option from the message actions menu. You can also place your cursor in the message box and press the **Up arrow** to edit your last message.

{% hint style="info" %}
The workspace administrator can assign [permissions](../../workspace-administration/permissions/) for users to edit messages from other users. By default, only administrators, moderators, and channel owners can edit other users' messages.
{% endhint %}

### Draft messages

Rocket.Chat saves all message drafts so you can return to edit later.&#x20;

### Delete messages

To delete a message, click **Delete** from the message actions menu.

### Star messages

Star messages to make it easier to locate them later. To **Star** a message, click **Star** from the message actions menu. If you want to unstar a message, click **Remove Star**.

To view starred messages, click the **kebab** menu on the room navbar and select **Starred Messages**. Starred messages are specific to individual [rooms ](../rooms/)and do not apply globally across the workspace; each room maintains its own list of starred messages.

### Pin messages

Pin messages in a room to make them easily accessible to all users in that room. To pin a message, select the **Pin Message** option from the message actions menu. Remove pinned messages by selecting **Remove Pin**.

{% hint style="info" %}
The workspace administrator can assign [permissions](../../workspace-administration/permissions/) for  users to pin messages in a room. By default, only administrators, moderators, and owners of the channel can pin messages.
{% endhint %}

### Reactions

You can react to messages with emojis. To add a reaction to a message, hover over the message and click on the **Smiley Face** icon. Then, select an emoji. You can see other users' emoji reactions under the message. To react with the same emoji as another user, click on the emoji. To remove your reaction, click on your emoji.

### Permalink a message

Permalink a message to create a URL directly to that message in the chat. Click on the **Copy Link** option from the message actions menu. This copies the message URL into your clipboard.

### Copy a message

To copy the contents of a message to your clipboard, click on the **Copy Text** option from the message actions menu.

### Reply to a message

Reply to a message to quote and respond to the message. The reply automatically triggers a notification sent to the message's original author. You can **Reply in Thread** or **Reply in Direct Message.**

Use **Reply in Thread** to start a new [thread ](../rooms/threads/)under the original message. Use **Reply in Direct Message** to quote and respond to the original message in the sender's [DM](../rooms/direct-messages/).

### Report a message or user

To report offensive messages, click **Report** from the message actions menu.

To report a user, click the user icon and see the full profile of the user. A **User Info** pane opens on the right-hand side. Click the kebab icon and click **Report**.&#x20;

Workspace admins, moderators, and users with permissions can access the [**Moderation**](../../workspace-administration/moderation.md) tab to view the details of the reported messages and users.

### Message Info

<figure><img src="../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

The message info shows a list of users that have read the message with a timestamp. The message info option is displayed when the  [**read receipts** setting](../../workspace-administration/settings/message.md#read-receipts) is enabled in the workspace. Click the **Info** option from the message actions menu to view the message info.

{% hint style="info" %}
The message **Info** feature is available to workspaces subscribed to any of Rocket.Chat's [premium plans](../../../readme/our-plans.md).&#x20;
{% endhint %}

### Message Forwarding/Share message &#x20;

Click <img src="../../../.gitbook/assets/image (1) (3).png" alt="" data-size="line">to forward messages to another channel, thread, or discussion.  You can forward messages directly to any user, channel, thread, or discussion you have access to. You can select a message and share it with unlimited recipients. This streamlines information sharing across various channels with large audiences, ensuring everyone receives the same message simultaneously. The benefits include saving time, improved communication flow, increased collaboration, and overall convenience.

{% hint style="info" %}
Message sharing is available from version 6.2 and above.
{% endhint %}

From editing and deleting messages to pinning and reacting to them, users can use these message actions to enhance their communication and collaboration experience. Moving to the next section, we'll guide you through [exchanging temporary and encrypted messages between users in your workspace](off-the-record-otr-messaging-user-guide.md).
