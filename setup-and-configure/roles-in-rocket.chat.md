# Roles in Rocket.Chat

Roles and permissions are integral to managing access in any digital workspace. Rocket.Chat employs a comprehensive role-based system for secure and efficient workspace management. This system allows administrators to assign roles, each with a specific set of [permissions](../use-rocket.chat/workspace-administration/permissions/), to control user actions and access levels within the workspace.

A role refers to a set of permissions and privileges assigned to a user or a group of users within the workspace. They determine the controls and features a user can access or handle in a workspace. They are displayed as mini tags beside the username on messages.

{% hint style="info" %}
See [#roles](../use-rocket.chat/workspace-administration/permissions/#roles "mention") to learn more about the default roles and role scopes in your workspace.
{% endhint %}

{% hint style="info" %}
To create and manage custom roles with specified permissions tailored to your needs, please refer to [#creating-custom-roles](../use-rocket.chat/workspace-administration/permissions/#creating-custom-roles "mention").
{% endhint %}

## Categories of Rocket.Chat Roles

**Rocket.Chat Administrator Role**

A Rocket.Chat administrator has the `Admin` role, which gives full access to the entire Rocket.Chat workspace. They can manage both [workspace-administration](../use-rocket.chat/workspace-administration/ "mention") and [omnichannel](../use-rocket.chat/omnichannel/ "mention") settings.

**Rocket.Chat User Roles**

Rocket.Chat users can have one or more roles, allowing them to perform the various actions granted by the role's permissions.

| Role          | Description                                                                                                                                                                                                                                                                 |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `user`        | The user role is the most common in Rocket.Chat. It serves as a standard role for all members of a Rocket.Chat workspace. Users can join [rooms](../use-rocket.chat/user-guides/rooms/), send messages, upload files, and participate in all forms of communication.        |
| `bot`         | [Bots ](../use-rocket.chat/workspace-administration/settings/bots.md)are automated users that can be programmed to perform specific tasks, such as sending messages, answering questions, and triggering notifications.                                                     |
| `guest`       | [Guest users](../use-rocket.chat/workspace-administration/users/guest-users.md) have limited access to your Rocket.Chat workspace. They can only participate in [rooms](../use-rocket.chat/user-guides/rooms/) they belong to.                                              |
| `anonymous`   | Unauthenticated visitors on your Rocket.Chat workspace. Anonymous users do not have a specified username.                                                                                                                                                                   |
| `app`         | Automated users that are used by Rocket.Chat Apps from the [rocket.chat-marketplace](../extend-rocket.chat-capabilities/rocket.chat-marketplace/ "mention")                                                                                                                 |
| `Owner`       | A [room ](../use-rocket.chat/user-guides/rooms/)owner is a user designated as the owner of a specific room. The room owner can manage the channel, including controlling access to joining the channel, editing channel settings, and managing messages within the channel. |
| `Leader`      | A [room](../use-rocket.chat/user-guides/rooms/) leader gets pinned on the top of a channel and can receive 1:1 messages from other channel users.                                                                                                                           |
| `Moderator`   | Moderators can manage messages, delete messages, and ban users from a specific channel.                                                                                                                                                                                     |
| `auditor`     | It allows a user to view and [audit all messages](../use-rocket.chat/communication-management/message-auditor/audit-logs.md) within the workspace. Users with the `auditor` role alone cannot send messages.                                                                |
| `auditor-log` | The `auditor-log` role allows a user to see  [logs about all audited messages](../use-rocket.chat/communication-management/message-auditor/audit-logs.md)  with timestamps and by whom. Users with the `auditor-log` role alone cannot send messages.                       |

### Rocket.Chat Omnichannel Roles

[Omnichannel](../use-rocket.chat/omnichannel/) roles allow users to interact with or manage various Omnichannel features.

| Role               | Description                                                                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Livechat Agent`   | LiveChat [Agents](../use-rocket.chat/omnichannel/agents.md) handle visitors' inquiries and support requests through [Omnichannel Live Chat](../use-rocket.chat/omnichannel/livechat-widget-installation.md).  |
| `Livechat Manager` | LiveChat [Managers ](../use-rocket.chat/omnichannel/managers.md)can manage Livechat [Agents](../use-rocket.chat/omnichannel/agents.md) and all other [Omnichannel ](../use-rocket.chat/omnichannel/)features. |
| `livechat-monitor` | Users with the `livechat-monitor` role can view and [monitor ](../use-rocket.chat/omnichannel/monitors.md)Live Chat interactions and analytics.                                                               |

### Rocket.Chat Marketplace Roles

Internally, there are two roles for [Rocket.Chat Marketplace](../extend-rocket.chat-capabilities/rocket.chat-marketplace/). The first is within the publisher and the second within the workspace. Henceforth, they're known as publisher roles and system roles.

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

The `viewer` role can read everything but can't update anything.

By offering a variety of predefined roles and the ability to create custom roles, Rocket.Chat ensures that workspace administrators can effectively control and limit user actions.
