# Create federated rooms

## Creating a 1:1 Direct Message&#x20;

To create a federated 1:1 [Direct Message](../../user-guides/rooms/direct-messages/) with other federated users in your workspace:

* Create a[ 1:1 Direct Message](../../user-guides/rooms/direct-messages/create-a-new-direct-message.md)
* Add the federated user as a member following the [syntax to invite external users](invite-external-users-to-your-rocket.chat-server.md#invite-external-users-syntax).
* Then, click Create.

You can also use a slash command to create a 1:1 DM with an external user. The general syntax for the slash command is:

```
/federation dm @username:server.com
```

Where`@username:server.com` represents the external user you want to invite, following the [syntax to invite external users.](invite-external-users-to-your-rocket.chat-server.md#invite-external-users-syntax)

## Creating a Multi-user Direct Message&#x20;

<figure><img src="../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

[Multi Direct Message](../../user-guides/rooms/direct-messages/create-a-new-direct-message.md#create-a-new-multi-user-direct-message-1-m) allows you to send DMs to multiple users simultaneously, whether they are federated or not. To create a federated Multi Direct Message:

To create a federated Multi Direct Message:

* Create a [Multi-user Direct Message](../../user-guides/rooms/direct-messages/#types-of-direct-messages)
* Add the members of the DM. Use the [syntax to invite external users](invite-external-users-to-your-rocket.chat-server.md#invite-external-users-syntax) when adding federated users.
* Then, click create.

You can also use a slash command to create a 1:M DM with an external user. The general syntax for the slash command is:

```
/federation dm @username1:server.com @username2:server2.com
```

Where`@username1:server.com` represents the external user you want to invite, following the [syntax to invite external users.](invite-external-users-to-your-rocket.chat-server.md#invite-external-users-syntax)

## Creating a channel/group ![](../../../.gitbook/assets/Premium.svg)

You can create federated [channels](../../user-guides/rooms/channels/) having both Rocket.Chat and other federated users.

To create a federated channel,

* Start by [creating a channel](../../user-guides/rooms/channels/create-a-new-channel.md) within your Rocket.Chat workspace.
* Enable **Federated.**
* Add members to your workspace.  Use the [syntax to invite external users](invite-external-users-to-your-rocket.chat-server.md#invite-external-users-syntax) when adding federated users.
* Then, click create.

{% hint style="info" %}
* Federated Channels can not be _Encrypted, Read-Only, or Broadcasted_ for now.
* You cannot create [Discussions](../../user-guides/rooms/discussions/) within federated Channels.
{% endhint %}

Whenever your user is invited to participate in a federated room created in an external server, the server name is displayed at the top of that room. This helps the user to differentiate when there are multiple rooms with the same name but all from different servers.

## Editing a federated room

<figure><img src="../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

Only the **name, avatar,** and **topic** of a federated room can be edited after it is created.

{% hint style="warning" %}
Rocket.Chat federation does not support deleting rooms and sending invite links for now.
{% endhint %}
