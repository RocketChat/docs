# Rocket.Chat Federation

{% hint style="info" %}
Effective December 15, 2023, Rocket.Chat will cease support for connections from cloud services and official mobile/desktop apps to workspaces running legacy versions outside our support window. Users on unsupported legacy servers are advised to upgrade to the latest Rocket.Chat version to ensure continued access to cloud, mobile, and desktop applications. **Each Rocket.Chat version is supported for six months post-release.**
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

<table><thead><tr><th>Feature</th><th data-type="checkbox">Community</th><th data-type="checkbox">Starter</th><th data-type="checkbox">Pro</th><th data-type="checkbox">Enterprise</th></tr></thead><tbody><tr><td>Create 1:1 DMs</td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Create federated channels and multi-user DMs. <a data-mention href="workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/create-federated-rooms.md">create-federated-rooms.md</a></td><td>false</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Invite external users to federated channels and DMs from the UI.<a data-mention href="workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/invite-external-users-to-your-rocket.chat-server.md">invite-external-users-to-your-rocket.chat-server.md</a></td><td>false</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Search for public  federated rooms in the Matrix Network.</td><td>false</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Invite multiple users to multi-user DMs using slash commands.</td><td>false</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Invite an external user to DMs using slash commands.</td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Send/Receive attachments (files, audio, and video messages)</td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Edit, Delete and Qoute messages.</td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Message reactions and sending emojis.</td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Mention internal and external users in federated channels.</td><td>false</td><td>true</td><td>true</td><td>true</td></tr><tr><td>User's avatar synchronization.</td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td><a href="workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup/#important-warning-about-the-installation">User's typing indicator</a> </td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td><a href="workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/assign-roles-for-users-in-federated-rooms.md">Define permissions for users inside rooms</a> </td><td>false</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Support for <a href="https://spec.commonmark.org/0.30/">Markdown spec</a>.</td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td><a href="workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup/matrix-allow-block-list.md">Servers allow list/block list</a> </td><td>true</td><td>true</td><td>true</td><td>true</td></tr></tbody></table>
