# Push

Enable and configure push notifications for your workspace members using mobile devices.

{% hint style="info" %}
Workspaces on the [community](../../../readme/our-plans.md#community) plan allow up to 10,000 free monthly push notifications. Get unlimited push notifications by subscribing to any of Rocket.Chat's [premium plans](../../../readme/our-plans.md).
{% endhint %}

## Push Notifications Configuration

{% hint style="info" %}
To use push notifications, you are required to accept the **Cloud Service Privacy Terms Agreement** in the **Administration** > **Workspace** > **Settings** > **Setup Wizard** > **Cloud Info** settings.
{% endhint %}

Go to **Administration > Workspace > Settings > Push** to enable push notifications**.**

* **Enable**: Turn on to enable push notifications on your Rocket.Chat workspace.
* **Enable Gateway**: Setting this to true allows you to use a custom push notification gateway. When disabled, it utilizes [Certificates and Keys](push.md#certificate-and-keys), allowing direct communication with Apple/Google instead of going through a gateway.

{% hint style="info" %}
Rocket.Chat SaaS workspaces use the Rocket.Chat gateway by default and cannot be changed.

On self-managed workspaces, you can either use the default Rocket.Chat gateway or set up a custom notification gateway.
{% endhint %}

* **Gateway**: Specify the gateway to use. Multiple lines can be used to specify multiple gateways.
* **Production:** Enable this for workspaces in production.

With the configuration all done, click the **Send a test push to my user** button to send a test push to yourself.

{% hint style="info" %}
To successfully send a test push to your user, you need to be logged in to the workspace on your mobile device and then close or minimize the application.
{% endhint %}

### Certificate and Keys

The workspace will rely on certificates and keys to configure push notifications if gateways are not enabled. Refer to the official guide below for configuring push notifications certifications and keys on Android and iOS.

{% embed url="https://developer.rocket.chat/open-source-projects/mobile-app/mobile-app-white-labelling/configuring-push-notifications" %}

### Privacy

In Privacy, you can configure what information you want your push notification to have.

* **Show Channel/Group/Username in Notification**: Toggle this on to make the channel name, group name, and username visible in notifications.
* **Show Message in Notification**: Enabling this makes messages visible in notifications.
* **Hide message content from Apple and Google (and the Gateway, if enabled)**: Turn this on to hide the content of a message from Google/Apple or any other push gateway. This adds only the `message id` to the notification data. The mobile client dynamically fetches the content from the server and updates the notification before displaying it.  Failure to fetch a message using the provided `message id` in the push data triggers a "You have a new message" notification.

{% hint style="info" %}
The **Hide message content from Apple and Google (and the Gateway, if enabled)** setting is accessible to workspaces subscribed to any of Rocket.Chat's [premium plans](../../../readme/our-plans.md).
{% endhint %}

With the push configuration completed, follow the  [#default-user-preferences](accounts/#default-user-preferences "mention") guide to set the default user preferences for notifications. Manage channel-based notifications using the [#channel-notifications](../../user-guides/rooms/channels/edit-a-channel.md#channel-notifications "mention") guide.

{% hint style="info" %}
On some channels, notifications can stop if the number of users exceeds the set limit. You can set the limit in **Administration** > **General** > **Notifications**. See[#notifications](general/#notifications "mention") for more information.
{% endhint %}

## Connect to cloud

When you purchase a  package for push notifications as a self-managed customer, you need to connect your workspace [Rocket.Chat Cloud](../../rocket.chat-cloud/).

Link and sync your account in the Connectivity Services menu.

{% content-ref url="../registration.md" %}
[registration.md](../registration.md)
{% endcontent-ref %}

## Check the count of notifications used per month

To check the count of notifications used per month:

* Go to [cloud.rocket.chat](http://cloud.rocket.chat)
* Switch to the Workspaces tab
* Select the workspace you want to check the count for
* The push notifications block shows the number of used notifications per your current limit per month.
