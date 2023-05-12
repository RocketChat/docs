# Data Loss Prevention User Guide

<figure><img src="../../../.gitbook/assets/2021-06-10_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (2) (1) (1) (1) (1) (1) (1) (4) (1) (1) (1) (1) (1).jpg" alt=""><figcaption></figcaption></figure>

In its simplest terms, data loss prevention (DLP) is a security mechanism that helps ensure that sensitive data is not unduly shared, misused, lost, or accessed by unauthorized users.

Rocket.Chat's DLP App includes several controls to prevent data loss, such as restricting access to sensitive information, monitoring data transfers, and detecting and blocking potentially dangerous activities.

If there is any Rocket.Chat [room](../rooms/), where sensitive information like credit card details, phone numbers, and IP addresses is being exchanged between users, you can prevent or restrict the sharing of this sensitive information using the DLP app.

To get the DLP app functioning on your workspace, you need the workspace administrator to install and configure the DLP app from the [Rocket.Chat marketplace](../../../extend-rocket.chat-capabilities/rocket.chat-marketplace).

{% content-ref url="../../../extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/data-loss-prevention-dlp-app.md" %}
[data-loss-prevention-dlp-app.md](../../../extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/data-loss-prevention-dlp-app.md)
{% endcontent-ref %}

## Data Loss Prevention App in Action

With the app installed and fully configured, the defined rulesets take effect.

If a user wants to share credit card details with another user in a room,

* The DLP app picks up this message and replaces the sensitive data with `###.` Clicking on **More Info** details the message and its current status.
* The app's bot user `dlp.bot` notifies the specified channel about sharing sensitive details.
* Channel Moderators can **Accept** or **Reject** the message in the **Moderator Channel** from being sent.

#### Approve

Approving a message allows it to go through. It is received and visible in the room.

#### Reject

Rejecting a message prevents it from reaching its destination, and the status gets updated to `Rejected.`
