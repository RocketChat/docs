---
description: Integrate your Zoom app with Rocket.Chat
---

# Zoom

<figure><img src="../../../.gitbook/assets/2021-06-10_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (2) (1) (1) (1) (1) (1) (1) (4) (1) (1) (1) (1) (1) (1) (1) (34).jpg" alt=""><figcaption></figcaption></figure>

Zoom enables users to construct and join virtual meeting spaces in which they can communicate using audio and video. When it's not feasible to meet in person, video conferencing technologies like Zoom enable people to collaborate and meet effectively "face-to-face." This adds a personal touch to online meetings, which is crucial for keeping people engaged. Many employees rely on Rocket.Chat as their primary means of communication during the day; by including Zoom's features within the app, they can work more efficiently and collaborate more quickly. Companies may increase their efficiency by using video conferencing tools like Zoom, which can be readily linked with Rocket.Chat.&#x20;

{% hint style="warning" %}
**Note to existing Zoom app users:** Please be aware that on September 8, 2023, Zoom will be deprecating its JWT authentication method. After September 8, 2023, all JWT applications will be deactivated, and integrations will no longer be able to interact using the JWT app type. You must install the most recent version of the Zoom app to continue using this app. Refer to [Zoom’s announcement](https://developers.zoom.us/docs/internal-apps/jwt-faq/) for more information on the deprecation.&#x20;
{% endhint %}

With the Zoom app for Rocket.Chat, users can initiate, schedule, join, record, and share a meeting directly within a channel, as well as monitor meeting participants and duration. You can also send automated or personalized messages to particular channels to remind them of forthcoming meetings, agendas, or required preparation or materials. Also, when you paste Zoom meeting URLs into Rocket.Chat channels, these URLs will be automatically detected by Rocket.Chat and rendered in the Zoom interfaces, sparing you the trouble of switching between tools.&#x20;

{% hint style="info" %}
**Note:** Rocket.Chat has released the most recent version of the Zoom app, Zoom 2.0, with enhanced features and integrated functionality to facilitate a comprehensive collaboration experience between Rocket.Chat and Zoom. **Please ensure that you are operating Rocket.Chat v6.3.0 or later to use the most recent version of this app.**&#x20;
{% endhint %}

By integrating Zoom into your Rocket.Chat workspace, you can:

* Start Zoom calls within a channel, room, discussion, or direct message
* Join Zoom meetings directly from Rocket.Chat&#x20;
* Create a new meeting room by leveraging the /zoom slash commands
* Paste Zoom URLs in channels to get them rendered in the Zoom interface directly
