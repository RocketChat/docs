# Invite external users to your Rocket.Chat server

To invite an external user to a federated [DM](../../user-guides/rooms/direct-messages/create-a-new-direct-message.md) or [channel](../../user-guides/rooms/channels/create-a-new-channel.md), use the following syntax to add them as members when creating the room:

```
@username:server.com
```

* `@username`: The username from the external server
* `(:)`: A colon character separating the external username and the external server name.
* `server.com`: The external server name or domain name

For example, `@test_user:matrix.org`.&#x20;

When you successfully invite an external user to a federated room, a local copy of that user is generated within your Rocket.Chat instance. There's no need to use the external user syntax `(@username:server.com`) to invite them to other rooms in your workspace. Instead, you can simply invite the local user, who appears as a suggestion in the "**Add Members**" input.

{% hint style="info" %}
Once the external user exists and the external server runs, the user will auto-join the room. However, they can choose to decline or accept the invite.
{% endhint %}
