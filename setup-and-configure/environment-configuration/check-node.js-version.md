# Check Node.js Version

Rocket.Chat is built on top of Node.js, which is the engine that powers its functionality. For detailed information on Node.js, see the official [Node.js documentation](https://nodejs.org/en/docs).

Rocket.Chat is built with [Meteor](https://meteor.com), a JavaScript framework, and the version of Meteor in use dictates the supported Node.js version for that specific version. The guide provides instructions on how to check the supported Node.js version for any specific release.

{% hint style="info" %}
The only reason you may need to check this (except for idle curiosity or debugging purposes) is if you're using the manual method of deployment. We don't recommend manual installation. Instead, [Docker](../../deploy/deploy-rocket.chat/deploy-with-docker-and-docker-compose.md) is recommended and encouraged. With [Docker](../../deploy/deploy-rocket.chat/deploy-with-docker-and-docker-compose.md) (or [Snap](../../deploy/deploy-rocket.chat/deploy-with-snaps.md)) you won't need to worry about the Node version.
{% endhint %}

To determine the Node.js version compatible with a specific release:

* Visit our [GitHub releases](https://github.com/RocketChat/Rocket.Chat/releases) page, navigate to the details for that particular version, and look for **Engine versions**. For example, for the 6.5.2 release, the following information is displayed:

```
Engine versions
    * Node: 14.21.3
    * MongoDB: 4.4, 5.0, 6.0
    * Apps-Engine: 1.41.0
```

* You can also use our releases API to access this information. Taking version 6.3.0 as an example, to know the supported node version for this release, perform a `GET` operation on [`https://releases.rocket.chat/6.3.0/info`](https://releases.rocket.chat/6.3.0/info). You're looking for the `nodeVersion` key. \
  For example, for the current latest version, with `curl` and `jq`:

```
~ via  v12.22.11 took 25s
➜ curl https://releases.rocket.chat/latest/info -s | jq '.nodeVersion' -r
14.18.3
```

![](<../../.gitbook/assets/2021-06-10\_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (2) (1) (1) (1) (1) (1) (1) (4) (1) (1) (1) (1) (1) (1) (1) (53).jpg>)![](<../../.gitbook/assets/2021-06-10\_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (2) (1) (1) (1) (1) (1) (1) (4) (1) (1) (1) (1) (1) (1) (1) (3).jpg>)![](<../../.gitbook/assets/2021-06-10\_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (2) (1) (1) (1) (1) (1) (1) (4) (1) (1) (1) (1) (1) (1) (1) (34).jpg>)
