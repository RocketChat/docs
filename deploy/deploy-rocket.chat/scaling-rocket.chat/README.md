# Scaling Rocket.Chat

<figure><img src="../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

As concurrent users on your workspace grow, you may experience system latency. Monitoring system performance is essential to determine if additional resources are needed. For example, you may see the Rocket.Chat mode process approaching 100% CPU (even if the host CPU load is low). This is due to the single-threaded nature of Node.js applications, as they can't take advantage of multiple cores natively.

You can use microservices to scale your environment while maintaining user performance.

[**Microservices**](microservices.md)**:** Deploy Rocket.Chat using microservices or several smaller components, each focusing on a single feature of Rocket.Chat.

{% hint style="success" %}
Deprecation for cloud services and apps is now extended to November 20, 2023. Rocket.Chat versions will receive support for 6 months after release.

⚠️ Attend our community call on November 9th for details and upgrade guidance. Shape the agenda by submitting questions upon registration.

🔗 [Register for the Community Open Call](https://app.livestorm.co/rocket-chat/community-open-call-1?type=detailed)
{% endhint %}
