# Push Notifications

## Setup Push Notifications

There are two ways to set up push notifications with Rocket.Chat:

* Push Gateway
* Self Configured

### Push Gateway

Select this option if you and your users intend to use the official Rocket.Chat mobile applications. We set up a push gateway holding our keys to enable push alerts to be received on our official mobile application by any server. Doing this safeguards the secret keys required to transmit notifications to you and your users via Apple(APN) and Google (FCM) systems.

### Self Configured

You'll have to white-label your app if you don't want to use our push gateway.

{% hint style="info" %}
To learn more about white-labeling, see the [Mobile App White Labelling](https://developer.rocket.chat/open-source-projects/mobile-app/mobile-app-white-labelling) guide.
{% endhint %}

## Push Notifications Workflow

The push notification workflow for Rocket.Chat is designed to be fast, reliable, and flexible, allowing users to stay informed and engaged with their chat messages and channels even when they're not actively using the app.\
\
The [flowchart](https://whimsical.com/notification-workflow-PRwN4MWNsxSwqHjHXaPUuC) below describes the workflow of Rocket.Chat notifications from when a message is sent to when its notification is delivered.

{% embed url="https://whimsical.com/notification-workflow-PRwN4MWNsxSwqHjHXaPUuC" %}
Rocket.Chat Push Notification Workflow
{% endembed %}

Here are some potential causes to watch out for if you notice that notifications are not being delivered. The notification will not be sent if:&#x20;

* The room notifications are disabled.
* The user ignores the sender.
* `@here`, `@all` notifications are disabled, and the message is `@here`, `@all`.
* The user is not active, or their status is set to **Busy**.
* The user notification is not connected to **Desktop** or **Mobile**.
* The user settings to always display mobile notifications is not **ON**.
* The user room preference is set to **Nothing**, or use a default preference set to **Nothing**.
* The room members count is bigger than the limit for disabling notifications.

## Push Notifications Rules

Notifications are determined based on server settings, user preferences, and subscriptions. User status (online, away, offline)is no longer considered for email and mobile push notifications. Instead, these notifications go to a new queue following these rules:

* When the user is online, the notification is scheduled to be sent in 120 seconds.
* When the user is away, the notification is scheduled to be sent in 120 seconds minus the amount of time he is away.
* When the user is offline, the notification is sent immediately.
* When the user reads a channel, all the notifications for that user are removed (_clears the queue_).
* When a notification is processed to be sent to a user, and there are other scheduled notifications:
  * All scheduled notifications for the user are now rescheduled to the current time.
  * The current notification goes back to the queue to be processed ordered by creation date.

## FAQ

<details>

<summary>I am getting, "Server notifications are misconfigured!"</summary>

If you are getting this message and are using our push gateway, please make sure:

* Your server version is greater or equal to 0.74.3.
* Your server is registered. (you can check this by going to `http://yourserver/admin/cloud`)

</details>
