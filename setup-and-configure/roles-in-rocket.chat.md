# Roles in Rocket.Chat

Roles and permissions are integral to managing access in any digital workspace. Rocket.Chat employs a comprehensive role-based system for secure and efficient workspace management. This system allows administrators to assign roles, each with a specific set of [permissions](../use-rocket.chat/workspace-administration/permissions/), to control user actions and access levels within the workspace.

## Categories of Rocket.Chat Roles

### Rocket.Chat Administrator Role

A Rocket.Chat administrator has the `Admin` role, which gives full access to the entire Rocket.Chat workspace. They can manage both [workspace-administration](../use-rocket.chat/workspace-administration/ "mention") and [omnichannel](../use-rocket.chat/omnichannel/ "mention") settings.

### Rocket.Chat User Roles

Rocket.Chat users can have one or more roles, allowing them to perform the various actions granted by the Role's permissions.

| Role          | Description                                                                                                                                                                                                                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `user`        | The user role is the most common in Rocket.Chat. It serves as a standard role for all members of a Rocket.Chat workspace. Users can join [rooms](../use-rocket.chat/user-guides/rooms/), send messages, upload files, and participate in all forms of communication.                          |
| `bot`         | [Bots ](../use-rocket.chat/workspace-administration/settings/bots.md)are automated users that can be programmed to perform specific tasks, such as sending messages, answering questions, and triggering notifications.                                                                       |
| `guest`       | Guest users are users with limited access to your Rocket.Chat workspace. They can take participate only in [Rooms](../use-rocket.chat/user-guides/rooms/) they're a part of.                                                                                                                  |
| `anonymous`   | Unauthenticated visitors on your Rocket.Chat workspace. Anonymous users do not have a specified username.                                                                                                                                                                                     |
| `app`         | Automated users that are used by Rocket.Chat Apps from the [rocket.chat-marketplace](../extend-rocket.chat-capabilities/rocket.chat-marketplace/ "mention")                                                                                                                                   |
| `Owner`       | A [Channel ](../use-rocket.chat/user-guides/rooms/channels/)owner is a user designated as the owner of a specific channel. The channel owner can manage the channel, including controlling access to joining the channel, editing channel settings, and managing messages within the channel. |
| `Leader`      | A channel Leader gets pinned on the top of a channel and can receive 1:1 messages from other channel users.                                                                                                                                                                                   |
| `Moderator`   | Moderators can manage messages, delete messages, and ban users from a specific channel.                                                                                                                                                                                                       |
| `auditor`     | It allows a user to view and [audit all messages](../use-rocket.chat/message-auditing-log.md)  within the workspace. Users with auditor roles alone cannot send messages.                                                                                                                     |
| `auditor-log` | The `auditor-log` role allows a user to see  [logs about all audited messages](../use-rocket.chat/message-auditing-log.md)  with timestamps and by whom. Users with just the auditor-log role cannot send messages.                                                                           |

### Rocket.Chat Omnichannel Roles

[Omnichannel](../use-rocket.chat/omnichannel/) roles allow users to interact with or manage various Omnichannel features.

| Role               | Description                                                                                                                                                                                                    |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Livechat Agent`   | Live Chat [Agents](../use-rocket.chat/omnichannel/agents.md)handle visitors' inquiries and support requests through [Omnichannel Live Chat](../use-rocket.chat/omnichannel/livechat-widget-installation.md).   |
| `Livechat Manager` | Live Chat [Managers ](../use-rocket.chat/omnichannel/managers.md)can manage Livechat [Agents](../use-rocket.chat/omnichannel/agents.md) and all other [Omnichannel ](../use-rocket.chat/omnichannel/)features. |
| `livechat-monitor` | Users with the `livechat-monitor` role can view and [monitor ](../use-rocket.chat/omnichannel/monitors.md)Live Chat interactions and analytics.                                                                |

{% hint style="info" %}
You can create and manage custom roles with specified permissions tailored to your needs. To learn more, see [#roles](../use-rocket.chat/workspace-administration/permissions/#roles "mention").
{% endhint %}

### Rocket.Chat Marketplace Roles

Internally, we have two roles for [Rocket.Chat Marketplace](../extend-rocket.chat-capabilities/rocket.chat-marketplace/); one within the publisher and the second within the system. Henceforth, they're known as publisher roles and system roles.

#### Publisher Roles

There are three different roles within a Publisher, which include the following:

* [Owner](roles-in-rocket.chat.md#publisher-owner)
* [Developer](roles-in-rocket.chat.md#publisher-developer)
* [Viewer](roles-in-rocket.chat.md#publisher-viewer)

The Owner role is applied whenever someone creates a publisher. Each of the subsequent roles only applies to people they have invited.

#### Publisher: Owner

The `owner` has permission to manage everything on the publisher dashboard. It includes managing both Apps and other Users.

To change the role of another user,

* Click **Change Role** from the **Actions** dropdown across the user in question
* Select the desired Role to change

#### Publisher: Developer

A user with the `developer` role can read everything and update Apps.

#### Publisher: Viewer

The `viewer` role can read everything but can.t update anything.

{% hint style="info" %}
See [#scope-of-roles](../use-rocket.chat/workspace-administration/permissions/#scope-of-roles "mention") to learn more about the role scopes in Rocket.Chat.
{% endhint %}

Rocket.Chat's role-based system provides a robust and flexible mechanism for managing access to resources and features within a workspace. By offering a variety of predefined roles and the ability to create custom roles, Rocket.Chat ensures that workspace administrators can effectively control and limit user actions.
