# Scaling Rocket.Chat

<figure><img src="../../../.gitbook/assets/2021-06-10_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (2) (1) (1) (1) (1) (1) (1) (4) (1) (1) (1) (1) (1) (1) (1) (48).jpg" alt=""><figcaption></figcaption></figure>

As concurrent users on your workspace grow, you may experience system latency. Monitoring system performance is essential to determine if additional resources are needed. For example, you may see the Rocket.Chat mode process approaching 100% CPU (even if the host CPU load is low). This is due to the single-threaded nature of Node.js applications, as they can't take advantage of multiple cores natively.

You can use microservices to scale your environment while maintaining user performance.

[**Microservices**](microservices.md)**:** Deploy Rocket.Chat using microservices or several smaller components, each focusing on a single feature of Rocket.Chat.

{% hint style="success" %}
**Rocket.Chat 6.0** is our most secure and scalable version yet. It includes 10 security patches, 9 brand-new features, and 25+ overall platform enhancements. Visit our [website](https://www.rocket.chat/six) to learn more about what’s new in this latest version. [Update now](https://docs.rocket.chat/deploy/updating-rocket.chat)!
{% endhint %}
