# Rocket.Chat Federation

{% hint style="success" %}
Deprecation for cloud services and apps is now extended to November 20, 2023. Rocket.Chat versions will receive support for six months after release.

⚠️ Attend our community call on November 9th for details and upgrade guidance. Shape the agenda by submitting questions upon registration.

🔗 [Register for the Community Open Call](https://app.livestorm.co/rocket-chat/community-open-call-1?type=detailed)
{% endhint %}

Federation allows for unlimited communication between workspaces by making them visible to each other on the federated network.

Rocket.Chat uses the [Matrix](https://matrix.org/) communication protocol for decentralized and interoperable communications. Organizations can easily connect and collaborate with external parties using any federated Rocket.Chat workspace or Matrix-compatible platform by bridging Rocket.Chat through Matrix.

To enable and set up Federation on your workspace,

* Go to **Administration** > **Workspace** > **Settings** > **Federation**.
* Setup and Configure federation with Matrix with [this guide](workspace-administration/settings/federation/matrix-bridge/).

{% hint style="info" %}
![](<../.gitbook/assets/Deprecated (1).png>) [Rocket.Chat basic federation](workspace-administration/settings/federation/rocket.chat-federation) is deprecated from version 6.0. Thus, we strongly recommend using [matrix-bridge](workspace-administration/settings/federation/matrix-bridge/ "mention").
{% endhint %}

{% content-ref url="workspace-administration/settings/federation/matrix-bridge/" %}
[matrix-bridge](workspace-administration/settings/federation/matrix-bridge/)
{% endcontent-ref %}

## Features

The Rocket.Chat Federation implementation currently supports the following features on Community and Enterprise plans:

<table><thead><tr><th>Feature</th><th data-type="checkbox">Community/Enterprise</th><th data-type="checkbox">Enterprise Only</th></tr></thead><tbody><tr><td>Create federated channels, groups, DMs, and multi-user DMs from the UI. <a data-mention href="workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/create-a-federated-rooms.md">create-a-federated-rooms.md</a></td><td>false</td><td>true</td></tr><tr><td>Invite external users to federated channels, groups, DMs, and multi-user DMs from the UI. <a data-mention href="workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/invite-external-users-to-your-rocket.chat-server.md">invite-external-users-to-your-rocket.chat-server.md</a></td><td>false</td><td>true</td></tr><tr><td>Search public rooms in the Matrix Network.</td><td>false</td><td>true</td></tr><tr><td>Invite multiple users to multi-user DMs using slash commands.</td><td>false</td><td>true</td></tr><tr><td>Invite an external user to DMs using slash commands.</td><td>true</td><td>false</td></tr><tr><td>Send/Receive attachments (Files, audio, and video messages)</td><td>true</td><td>false</td></tr><tr><td>Edit, Delete and Qoute messages.</td><td>true</td><td>false</td></tr><tr><td>Message reactions and sending emojis.</td><td>true</td><td>false</td></tr><tr><td>Mention internal and external users in federated channels.</td><td>true</td><td>false</td></tr><tr><td>User's avatar synchronization.</td><td>true</td><td>false</td></tr><tr><td>User's typing indicator (<a href="workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup/#important-warning-about-the-installation">More Info</a>)</td><td>true</td><td>false</td></tr><tr><td>Define permissions for users inside rooms (<a href="workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/assign-roles-for-users-in-federated-rooms.md">More info</a>) .</td><td>true</td><td>false</td></tr><tr><td>Support for <a href="https://spec.commonmark.org/0.30/">Markdown spec</a>.</td><td>true</td><td>false</td></tr><tr><td>Servers allow list/block list (<a href="workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup/matrix-allow-block-list.md">More info</a>).</td><td>false</td><td>false</td></tr></tbody></table>
