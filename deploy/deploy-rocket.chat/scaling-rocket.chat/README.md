# Scaling Rocket.Chat

<figure><img src="../../../.gitbook/assets/2021-06-10_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (2) (1) (1) (1) (1) (1) (1) (4) (1) (1) (1) (1) (1) (1) (1) (34).jpg" alt=""><figcaption></figcaption></figure>

As concurrent users on your workspace grow, you may experience system latency. Monitoring system performance is essential to determine if additional resources are needed. For example, you may see the Rocket.Chat mode process approaching 100% CPU (even if the host CPU load is low). This is due to the single-threaded nature of Node.js applications, as they can't take advantage of multiple cores natively. You can use microservices to scale your environment while maintaining user performance.

The scaling approach depends on your [deployment method](../). For deployments using [Docker](../deploy-with-docker-and-docker-compose.md), scaling by [running multiple Rocket.Chat instances ](running-multiple-instances.md)is a well-established approach. However, [microservices](microservices.md) offer a more granular and efficient scaling option for [Kubernetes](../deploy-with-kubernetes.md) deployments.

{% hint style="warning" %}
For deployments approaching 1,000 concurrent users and above, the microservices architecture is recommended for optimal scalability.
{% endhint %}

This documentation will guide you through both approaches, ensuring your Rocket.Chat workspace scales alongside your growing user base.

{% hint style="info" %}
As of December 15, 2023, Rocket.Chat has ceased support for connections from cloud services and official mobile/desktop apps to workspaces running legacy versions outside our support window. Users on unsupported legacy servers are advised to upgrade to the latest Rocket.Chat version to ensure continued access to cloud, mobile, and desktop applications. **Each Rocket.Chat version is supported for six months post-release.**
{% endhint %}
