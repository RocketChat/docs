# Rocket.Chat Federation

Rocket.Chat's Federation feature enables interconnected communication across different workspaces, leveraging the Matrix protocol for secure, decentralized, and interoperable messaging. This guide provides an overview of Rocket.Chat Federation, including how to enable it, supported deployment paths, limitations, and critical considerations for effective federation setup and management.

## Rocket.Chat Federation Fundamentals

Federation in Rocket.Chat allows workspaces to communicate and share resources within a federated network, facilitating collaboration with external partners, customers, and other organizations. By using the Matrix protocol, Rocket.Chat ensures secure and decentralized communication, enhancing security and interoperability across the federated network.

### Key Features of Federation

* **Security**: Implement secure communication protocols to protect data in transit and at rest across the federated network.
* **Interoperability**: Seamlessly exchange data and communicate across different platforms within the federated ecosystem.
* **Efficient Services**: Apply consistent policies and configurations across the federated network for streamlined management and operations.

### Supported Deployment Paths

Rocket.Chat Federation supports two primary deployment configurations:

* **Microservices Deployment**: Integrates one microservices deployment with one Matrix home server.
* **Single Instance Deployment**: Configures a single instance of Rocket.Chat with one Matrix home server.

{% hint style="warning" %}
Multi-instance Rocket.Chat deployment with a single Matrix home server is not currently supported.
{% endhint %}

### Enabling Federation in Rocket.Chat

Set up and configure federation with Matrix Bridge using [this guide](matrix-bridge/). Rocket.Chat uses Matrix for federation, employing Matrix bridges for connecting with platforms like Slack and WhatsApp. For details on setting up and configuring Matrix bridges, refer to the Matrix AppService documentation.

{% hint style="warning" %}
![](<../../.gitbook/assets/Deprecated (1).png>) [Rocket.Chat basic federation](rocket.chat-federation/) is deprecated from version 6.0. Thus, we strongly recommend using [matrix-bridge](matrix-bridge/ "mention").
{% endhint %}

### Limitations of Rocket.Chat Federation

#### 1. Scaling Limitations

The scalability of Rocket.Chat Federation is limited to the scaling capabilities Matrix home server. For information on sizing and scaling, refer to the [Matrix documentation](https://matrix.org/blog/2020/11/03/how-we-fixed-synapse-s-scalability/).

#### 2. Connectivity Dependencies

Both continuous and sporadic connectivity scenarios are supported in a federated Rocket.Chat implementation. However, Rocket.Chat has not extensively tested environments with intermittent connectivity.

#### 4. Event Synchronization Limitations

Event synchronization between Rocket.Chat and the Matrix home server face several challenges that may impact operational consistency. Below is a list of events and issues that have been identified, which will be continually updated as more information becomes available.

* **Room and User Deletion:** Currently, the deletion of rooms and users is not implemented for synchronization between Rocket.Chat and the Matrix home server. This means that any deletion action taken in one platform will not automatically reflect in the other. It's essential to consider how user data is managed and deleted across systems to maintain consistency between environments.
* **File Upload Limits:** There is a discrepancy in file size limits between Rocket.Chat and the Matrix home server. Administrators need to manually align these limits to ensure files are appropriately handled during synchronization.

Administrators are advised to review these limitations and adjust their workflows accordingly to minimize disruption and maintain compliance with regulatory standards. Future documentation updates will provide further details and guidance on mitigating these synchronization challenges.

### Features

Here are various Rocket.Chat federation features and the [plans](../../readme/our-plans.md) they're supported in:

<table><thead><tr><th>Feature</th><th data-type="checkbox">Community</th><th data-type="checkbox">Starter</th><th data-type="checkbox">Pro</th><th data-type="checkbox">Enterprise</th></tr></thead><tbody><tr><td>Create 1:1 DMs</td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Create federated channels and multi-user DMs. <a data-mention href="matrix-bridge/matrix-users-guide/create-federated-rooms.md">create-federated-rooms.md</a></td><td>false</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Invite external users to federated channels and DMs from the UI.<a data-mention href="matrix-bridge/matrix-users-guide/invite-external-users-to-your-rocket.chat-server.md">invite-external-users-to-your-rocket.chat-server.md</a></td><td>false</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Search for public  federated rooms in the Matrix Network.</td><td>false</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Invite multiple users to multi-user DMs using slash commands.</td><td>false</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Invite an external user to DMs using slash commands.</td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Send/Receive attachments (files, audio, and video messages)</td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Edit, Delete and Qoute messages.</td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Message reactions and sending emojis.</td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Mention internal and external users in federated channels.</td><td>false</td><td>true</td><td>true</td><td>true</td></tr><tr><td>User's avatar synchronization.</td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td><a href="matrix-bridge/matrix-admin-guide/matrix-homeserver-setup/#important-warning-about-the-installation">User's typing indicator</a> </td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td><a href="matrix-bridge/matrix-users-guide/assign-roles-for-users-in-federated-rooms.md">Define permissions for users inside rooms</a> </td><td>false</td><td>true</td><td>true</td><td>true</td></tr><tr><td>Support for <a href="https://spec.commonmark.org/0.30/">Markdown spec</a>.</td><td>true</td><td>true</td><td>true</td><td>true</td></tr><tr><td><a href="matrix-bridge/matrix-admin-guide/matrix-homeserver-setup/matrix-allow-block-list.md">Servers allow list/block list</a> </td><td>true</td><td>true</td><td>true</td><td>true</td></tr></tbody></table>

Rocket.Chat Federation expands your workspace's communication capabilities, enabling seamless collaboration across different platforms and organizations. By understanding the supported deployment paths, limitations, and key features, administrators can effectively set up and manage their federated networks, ensuring secure, interoperable, and efficient communication across the Rocket.Chat ecosystem.
