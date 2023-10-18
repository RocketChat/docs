# Scaling Rocket.Chat

<figure><img src="../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

As concurrent users on your workspace grow, you may experience system latency. Monitoring system performance is essential to determine if additional resources are needed. For example, you may see the Rocket.Chat mode process approaching 100% CPU (even if the host CPU load is low). This is due to the single-threaded nature of Node.js applications, as they can't take advantage of multiple cores natively.

You can use microservices to scale your environment while maintaining user performance.

[**Microservices**](microservices.md)**:** Deploy Rocket.Chat using microservices or several smaller components, each focusing on a single feature of Rocket.Chat.

{% hint style="success" %}
Our latest version introduces new features, enhancements, and important security fixes. Workspaces running versions outside our support window will not have access to cloud services, official mobile and desktop apps.&#x20;

[Update to the latest version now](https://docs.rocket.chat/deploy/deploy-rocket.chat/updating-rocket.chat)!&#x20;
{% endhint %}
