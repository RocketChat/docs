# Federation

In federated networks, independent systems or platforms are interconnected and can communicate and share resources with each other. A central management framework controls the configurations.&#x20;

Within Rocket.Chat, federation allows for an unlimited number of workspaces to communicate with each other. Federating a workspace makes it visible to other workspaces over the federated network, thus making communication with other federation-enabled servers possible. It offers a great way to collaborate with partners, customers, and other organizations, regardless of which chat platform they use.

## Key features of federation

* **Security**: Enhance the resilience of your systems by managing the federated environments as one entity. You can implement secure communication protocols that protect the data in transit and at rest.
* **Interoperability**: Exchange data seamlessly regardless of the platform being used.
* **Efficient services**: Set policies for the entire federated network and achieve consistency in the platforms' configurations.

To access Federation on your workspace, go to **Administration** > **Workspace** > **Settings** > **Federation**.

Rocket.Chat provides Federation using [Matrix](https://matrix.org/) by default. Matrix is an open-source network for secure and decentralized communication. Matrix bridges are used to implement interoperability and connect to other platforms, such as Slack and WhatsApp. For details, see the Matrix [AppService](https://matrix.org/docs/matrix-concepts/elements-of-matrix/#appservice-bridges-and-some-bots) documentation.

In the next topics, let's learn how to configure a Matrix bridge for your Rocket.Chat workspace. Once you have configured this, you can create federated channels and join external public channels on the Matrix network!

{% hint style="warning" %}
<img src="../../../../.gitbook/assets/Deprecated (1).png" alt="" data-size="line"> [Rocket.Chat basic federation](rocket.chat-federation/) is deprecated from version 6.0. Thus, we strongly recommend using [matrix-bridge](matrix-bridge/ "mention").
{% endhint %}
