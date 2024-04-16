# Matrix Bridge

Rocket.Chat Federation uses a standard protocol called the [Matrix Federation Protocol (MFP)](https://matrix.org/) to connect servers. This means that you can federate with any other Rocket.Chat workspace or servers that support MFP, such as [Element](https://element.io/).  It is designed to provide secure, interoperable, and decentralized real-time communication between Rocket.Chat and any Matrix-compatible applications or servers seamlessly.

A matrix bridge allows you to connect Matrix with other communication networks. Thus, Matrix users can interact with users on different platforms. For example, Element users can interact with users on Slack or Discord using bridges. For details, see the [AppService](https://matrix.org/docs/matrix-concepts/elements-of-matrix/#appservice-bridges-and-some-bots) section in the Matrix documentation.

In this section, we are going to configure a Matrix bridge that will allow Rocket.Chat users to interact in federated rooms and communicate with federated users. See [Rocket.Chat and Matrix architecture](https://github.com/RocketChat/federation-docs/blob/cdd9c3823e4f4329c87402640543226f8423fbd1/DESIGN.md) to learn more.

Using the Rocket.Chat Matrix Bridge integration requires you to have a [Matrix homeserver](https://matrix.org/docs/guides/introduction#how-does-it-work) available.

{% hint style="info" %}
&#x20;We recommend [Synapse](https://matrix-org.github.io/synapse/latest/), which is the most stable compared to other versions like [Dendrite](https://github.com/matrix-org/dendrite). The Matrix Bridge feature has been verified with Synapse `v1.71.0`.
{% endhint %}

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Matrix Admin Guide</strong></td><td>See how to run an Matrix homeserver and setup federation with Rocket.Chat.</td><td></td><td><a href="matrix-admin-guide/">matrix-admin-guide</a></td></tr><tr><td><strong>Matrix User Guide</strong></td><td>Learn how to use Rocket.Chat for federated communication.</td><td></td><td><a href="matrix-user-guide/">matrix-user-guide</a></td></tr><tr><td><strong>Matrix Bridge FAQs</strong></td><td>Common questions about Rocket.Chat Matrix Bridge implementation.</td><td></td><td><a href="../../../resources/frequently-asked-questions/federation-faqs/matrixbridge-faqs.md">matrixbridge-faqs.md</a></td></tr></tbody></table>
