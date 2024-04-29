# Search and join public channels on the Matrix network

<figure><img src="../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

You can easily search for and join public channels on the Matrix network from your workspace. This feature expands your ability to collaborate and communicate securely with users from different nodes, encouraging meaningful engagement and knowledge sharing.

{% hint style="info" %}
The global search for federated public channels is available to workspaces subscribed to any of Rocket.Chat's [premium plans](../../../readme/our-plans.md) from version `6.3`.
{% endhint %}

To search for and join a federated channel,

* On the Rocket.Chat menu bar, click the **Create New** icon.
* Navigate to **Create > Explore** and select **Search federated rooms**.
* Select a server and search for federated rooms on that server.
* You can join rooms that have auto-join enabled.

{% hint style="info" %}
Users may encounter difficulty joining a public channel with a large number of members. A temporary fix is to enable [faster remote room joins](https://matrix.org/blog/2022/10/18/testing-faster-remote-room-joins/) as an administrator. However, it is essential to note that enabling this setting may potentially impact other aspects of the matrix server.
{% endhint %}

### Manage Server List

You can manage the server list and choose to join federated rooms from each of the Matrix network servers you have enlisted.

To add a server,

* Below the server option dropdown, click **Manage server list**.
* Add a server (_**for example**_ — _**community.rs**_) and click **Add**.
* Now, you can search and join public federated channels from that server.

To remove a server,

* Hover over the server. Click the **cancel button** beside the server name.

{% hint style="info" %}
The default servers cannot be removed. You can only remove the servers that you added.
{% endhint %}
