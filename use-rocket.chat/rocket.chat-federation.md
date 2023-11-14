# Rocket.Chat Federation

{% hint style="success" %}
* November 20, 2023 will be the sunset date for allowing connections between our cloud services and workspaces running legacy versions of Rocket.Chat that are outside our support window. November 20, 2023 will also be the sunset date for allowing connections between our official mobile and desktop apps and workspaces running legacy versions of Rocket.Chat that are outside our support window. If you are on a legacy unsupported server, we strongly recommend you update to the latest version of Rocket.Chat to access your cloud portal, mobile and desktop apps.
* Rocket.Chat versions receive support for six months after release.
{% endhint %}

Federation allows for unlimited communication between workspaces by making them visible to each other on the federated network. Rocket.Chat uses the [Matrix](https://matrix.org/) communication protocol for decentralized and interoperable communications. Organizations can easily connect and collaborate with external parties using any federated Rocket.Chat workspace or Matrix-compatible platform by bridging Rocket.Chat through Matrix.

To enable and set up Federation on your workspace,

* Go to **Administration** > **Workspace** > **Settings** > **Federation**.
* Setup and Configure federation with Matrix Bridge using [this guide](workspace-administration/settings/federation/matrix-bridge/).

{% content-ref url="workspace-administration/settings/federation/matrix-bridge/" %}
[matrix-bridge](workspace-administration/settings/federation/matrix-bridge/)
{% endcontent-ref %}

{% hint style="info" %}
![](<../.gitbook/assets/Deprecated (1).png>) [Rocket.Chat basic federation](workspace-administration/settings/federation/rocket.chat-federation/) is deprecated from version 6.0. Thus, we strongly recommend using [matrix-bridge](workspace-administration/settings/federation/matrix-bridge/ "mention").
{% endhint %}

## Features

Here are the various Rocket.Chat federation features and the [plans](../readme/our-plans.md) they're supported in:

<table><thead><tr><th>Feature</th><th data-type="checkbox">Community</th><th data-type="checkbox">Starter</th><th data-type="checkbox">Pro</th><th data-type="checkbox">Enterprise</th></tr></thead><tbody><tr><td>Create 1:1 DMs</td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Create federated channels, groups, DMs, and multi-user DMs from the UI. <a data-mention href="workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/create-a-federated-rooms.md">create-a-federated-rooms.md</a></td><td>false</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Invite external users to federated channels, groups, DMs, and multi-user DMs from the UI. <a data-mention href="workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/invite-external-users-to-your-rocket.chat-server.md">invite-external-users-to-your-rocket.chat-server.md</a></td><td>false</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Search public rooms in the Matrix Network.</td><td>false</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Invite multiple users to multi-user DMs using slash commands.</td><td>false</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Invite an external user to DMs using slash commands.</td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Send/Receive attachments (Files, audio, and video messages)</td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Edit, Delete and Qoute messages.</td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Message reactions and sending emojis.</td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Mention internal and external users in federated channels.</td><td>false</td><td>true</td><td>true</td><td>true</td></tr><tr><td>User's avatar synchronization.</td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td><a href="workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup/#important-warning-about-the-installation">User's typing indicator</a> </td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td><a href="workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/assign-roles-for-users-in-federated-rooms.md">Define permissions for users inside rooms</a> </td><td>false</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Support for <a href="https://spec.commonmark.org/0.30/">Markdown spec</a>.</td><td>false</td><td>true</td><td>true</td><td>true</td></tr><tr><td><a href="workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup/matrix-allow-block-list.md">Servers allow list/block list</a> </td><td>true</td><td>true</td><td>true</td><td>true</td></tr></tbody></table>
