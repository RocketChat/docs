# Invite external users to your Rocket.Chat server

## Invite external users' syntax

Whenever you want to invite someone from an external server, use the following syntax to identify them when you click **Add members**:

```
@username:server.com
```

Which is represented by the following parts:

* `@username`: The username from the external server (red part).
* `(:)`: A colon character separating the external username and the external server name.
* `server.com`: The external server name(blue part).

Once the Matrix Bridge is well configured and running, the external users' syntax is interpreted in any "_**Add Members"**_ input in the workspace. After inviting an external user to your workspace, a copy of that user is created in your Rocket.Chat instance. You don't need to use the external user syntax _(`@username:server.com`)_ to invite them to other rooms in your workspace. Instead, you can invite the local user who appears as a suggestion in the "**Add Members**" input.

{% hint style="info" %}
Once the external user exists and the external server runs, the user will auto-join the room. However, they can choose to decline or accept the invite.
{% endhint %}
