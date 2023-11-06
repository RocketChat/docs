---
description: Install and use the Zoom App.
---

# Zoom

<figure><img src="../../../.gitbook/assets/2021-06-10_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (2) (1) (1) (1) (1) (1) (1) (4) (1) (1) (1) (1) (1) (1) (1) (34).jpg" alt=""><figcaption></figcaption></figure>

Zoom integration with Rocket.Chat allows users to create and join virtual meetings with audio and video capabilities, facilitating "face-to-face" collaboration when in-person meetings are impossible. This integration enhances user engagement and streamlines communication, enabling more efficient and rapid collaboration within Rocket.Chat.

The Zoom app integration in Rocket.Chat enables users to manage meetings—including initiation, scheduling, joining, recording, and sharing—directly within a channel. It also allows for participant and duration tracking, automated or custom reminders for upcoming meetings, and seamless recognition of Zoom URLs pasted into channels, eliminating the need to switch between applications.

{% hint style="warning" %}
As of September 8, 2023, Zoom has deprecated its JWT authentication method. All JWT applications have been deactivated, and integrations using the JWT app type are no longer functional. You must install the latest version of the Zoom app to maintain functionality. For details on the deprecation, please consult [Zoom's official announcement.](https://developers.zoom.us/docs/internal-apps/jwt-faq/)
{% endhint %}

{% hint style="info" %}
The new Zoom app version 2.3.0 now supports multi-meeting capabilities and can be set as the default video-conferencing provider. Ensure you are using Rocket.Chat v6.3.0 or higher to utilize these features.
{% endhint %}

Integrate Zoom with Rocket.Chat to:

* Initiate Zoom calls within channels, rooms, discussions, or direct messages.
* Join Zoom meetings directly through Rocket.Chat.
* Use /zoom slash commands to create new meeting rooms.
* Paste Zoom URLs in channels for direct rendering in the Zoom interface.
