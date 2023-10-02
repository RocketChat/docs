# Create federated rooms

## Creating a channel/group

<figure><img src="../../../../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

You can create federated [channels](../../../../../user-guides/rooms/channels/) having both Rocket.Chat and other federated users.

To create a federated channel,

* Start by [creating a channel](../../../../../user-guides/rooms/channels/create-a-new-channel.md) within your Rocket.Chat workspace.
* Enable **Federated.**
* Add members (optional) and click **Create.**

{% hint style="info" %}
**Important**:

* Federated Channels can not be _Encrypted, Read-Only, or Broadcasted_ for now.
* You cannot create  [Discussions](../../../../../user-guides/rooms/discussions/) within federated Channels.
{% endhint %}

Whenever your user is invited to participate in a federated room created in an external server, the server name is displayed at the top of that room. This helps the user to differentiate when there are multiple rooms with the same name but all from different servers.

## Creating a Direct Message 1:1

<figure><img src="../../../../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

You can create a [Direct Message](../../../../../user-guides/rooms/direct-messages/) with other federated users.

Create a federated DM with these steps:

* Create a[ 1:1 Direct Message](../../../../../user-guides/rooms/direct-messages/create-a-new-direct-message.md)
* Set the federated user you wish to message following the [syntax to invite external users](invite-external-users-to-your-rocket.chat-server.md#invite-external-users-syntax).

## Creating a Multi-user Direct Message

Using [Multi Direct Message](../../../../../user-guides/rooms/direct-messages/#types-of-direct-messages), you can send Direct Messages to multiple users(federated or not) at once.

To create a federated Multi Direct Message:

* Create a [Multi-user Direct Message](../../../../../user-guides/rooms/direct-messages/#types-of-direct-messages)
* Select the users to whom you want to send messages following the [syntax to invite external users](invite-external-users-to-your-rocket.chat-server.md#invite-external-users-syntax).

## Slash commands

You can also use an available slash command to create and invite users for Direct Messages rooms. The general syntax for the available slash command is:

```
/federation dm @username:server.com
```

Where:

* `/federation`: The slash command itself.
* `dm`: The command you want to execute, _dm_ is the only one available now.
* `@username:server.com`: The external user you want to invite, using the [syntax to invite external users.](invite-external-users-to-your-rocket.chat-server.md#invite-external-users-syntax)

## Creating a Multi-user Direct Message using slash command

<figure><img src="../../../../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

To create Multi-user Direct Messages using slash commands, you need to open the message box in any channel and type the following command using the [syntax to invite external users](invite-external-users-to-your-rocket.chat-server.md#invite-external-users-syntax):

```
/federation dm @username1:server.com @username2:server2.com
```

## Creating a Direct Message 1:1 using slash command

To create a 1:1 Direct Message using slash commands, open the message box in any channel and type the following command using the [syntax to invite external users](invite-external-users-to-your-rocket.chat-server.md#invite-external-users-syntax):

```
/federation dm @username1:server.com
```

## Editing a federated room

Only the **name** and **topic** of a federated room can be edited after it is created.

## Deleting a federated room

Deleting federated rooms are not supported for now.

## Invite links

They are not supported yet.
