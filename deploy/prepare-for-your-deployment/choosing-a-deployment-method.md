# Choosing a Deployment Method

{% hint style="success" %}
**Rocket.Chat 6.0** is our most secure and scalable version yet. It includes 10 security patches, 9 brand-new features, and 25+ overall platform enhancements. Visit our [website](https://www.rocket.chat/six) to learn more about what’s new in this latest version. [Update now](https://docs.rocket.chat/deploy/updating-rocket.chat)!
{% endhint %}

## Choosing a Deployment Method

Rocket.Chat offers various deployment methods, and choosing can get slightly conflicting. Although we recommend using [Docker and Docker Compose](docker-and-docker-compose.md), you may want to know when best to consider other deployment methods.

* **Deployment Methods**: Docker, Snap, Manual, Ansible, etc
* **Deployment Platforms**: AWS, Digital Ocean, GCP, etc

{% hint style="danger" %}
The Rocket.Chat architecture does not support serverless deployment models such as AWS Fargate.
{% endhint %}

### Considerations <a href="#considerations" id="considerations"></a>

There are a few characteristics to be considered before deploying Rocket.Chat. Let us take a look at these points for better evaluation and scoring.

**Scalability**: Scalability refers to the ability of a system to handle an increasing amount of work or resources. In this case, we discuss which deployment method can be easily scaled. For example, if you have a single instance of Rocket.Chat server running which can handle thousands of simultaneous online users, what happens when the number of users increases by tens of thousands? Do you terminate and get a bigger instance or get more Rocket.Chat servers to handle the extra users?

**Ease of Deployment**: This determines how easy it is to use a deployment mechanism. With the aim of data ownership and privacy, Rocket.Chat can be deployed swiftly without any technical knowledge.

**Ease of Maintenance**: Just like the ease of deployment, ease of maintenance is also a factor to consider before choosing a deployment method. We refer to maintenance as the activities to be performed, like updating their instances, patching security fixes, updating components as needed, changing configurations, and community support.

**Official Support**: Rocket.Chat offers a variety of official support. This is based on update frequency, bug resolutions, and feature implementations.

**Community Support**: Problems faced with deployment are often about something other than the application misbehaving but rather some wrong configurations made by the user. Such configurations can be related directly to a dependency, the deployment method, or the platform. In such cases, it's easier to get solutions by visiting the problem tools' guide or community page to request support.

### Scorecard <a href="#scorecard" id="scorecard"></a>

This scorecard shows each deployment method's rating(on 05) against each consideration.

<table><thead><tr><th width="200">Text</th><th>Docker</th><th>Snaps</th><th>One Click Deployment</th></tr></thead><tbody><tr><td><strong>Scalability</strong></td><td><strong><code>3.75</code></strong></td><td><strong><code>1.0</code></strong></td><td><strong><code>2.0</code></strong></td></tr><tr><td><strong>Ease of Deployment</strong></td><td><strong><code>3.75</code></strong></td><td><strong><code>4.5</code></strong></td><td><strong><code>5.0</code></strong></td></tr><tr><td><strong>Ease of Maintenance</strong></td><td><strong><code>4.0</code></strong></td><td><strong><code>5.0</code></strong></td><td><strong><code>1.0</code></strong></td></tr><tr><td><strong>Official Support</strong></td><td><strong><code>5.0</code></strong></td><td><strong><code>5.0</code></strong></td><td>Digital Ocean: <strong><code>5.0.</code></strong> Linode: <strong><code>0.0</code></strong></td></tr><tr><td><strong>Community Support</strong></td><td><strong><code>5.0</code></strong></td><td><strong><code>2.0</code></strong></td><td><strong><code>4.0</code></strong></td></tr><tr><td><strong>Comments</strong></td><td><a href="choosing-a-deployment-method.md#comments">Docker Comments</a></td><td></td><td>All one click deployment methods have the same score ranking.</td></tr></tbody></table>

#### Docker Comments <a href="#comments" id="comments"></a>

* Scaling your Rocket.Chat deployment using Docker, especially Docker Compose, is relatively easy.
* To install using Docker Compose, you need a single `YAML` file, namely a compose file. While the Rocket.Chat deployment is easy; the initial setup requires a little more work. Configuring and securing Docker can get even more complicated. Although worth it, it isn’t the easiest, especially compared to our other deployment options.
* Maintaining the installation using Docker is straightforward, from changing configurations and data backups to updating components.
* Docker deployment is officially supported by Rocket.Chat.
* Docker has a large following and a massive community around it. It is easier to receive support from the community.
