---
description: Extra configurations that can be done on your air-gapped workspace.
---

# Air-gapped workspace Configuration

## Push Notification Configuration

In an air-gapped workspace, sending push notifications through FCM/APNS isn't possible as they rely on internet connectivity. However, if the air-gapped server is considered a regular server with a strong firewall, outbound traffic can be configured to allow push notifications by opening specific ports as per [FCM ](https://firebase.google.com/docs/cloud-messaging/concept-options#messaging-ports-and-your-firewall)and [APNS](https://support.apple.com/en-us/HT203609) guidelines. Nevertheless, this approach may compromise the air-gapped environment's security and should be carefully considered.

{% hint style="info" %}
For fully air-gapped workspaces, you have to build a Rocket.Chat app for your desired mechanism. To learn more, kindly visit [Rocket.Chat Apps-Engine](https://developer.rocket.chat/apps-engine/rocket.chat-apps-engine).
{% endhint %}
