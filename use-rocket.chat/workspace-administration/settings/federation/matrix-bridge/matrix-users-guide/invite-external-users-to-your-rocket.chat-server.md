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

Once the Matrix Bridge is well configured and running, the external users' syntax is interpreted in any _Add Members_ input in the workspace.After you invite an external user for the first time, a copy for that user will be created in your local Rocket.Chat instance.

{% hint style="info" %}
Once the external user exists and the external server runs, the user will auto-join the room. However, they can choose to decline or accept the invite.
{% endhint %}
