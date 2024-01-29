# Mod Perspective App

<figure><img src="../../../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

The Mod Perspective app uses the [Perspective API](https://perspectiveapi.com/) to streamline content moderation for decision-makers. Harmful messages are automatically reported based on defined settings, and moderators can take further actions according to the organizational guidelines.

Learn how to install and use the app to fully leverage its capabilities for a safe workspace.

## Prerequisites

1. **Get the API key**

Before you install and configure the app, you need the free-to-use Perspective API key. Follow the steps from [Get Started with Perspective API](https://developers.google.com/codelabs/setup-perspective-api#0) till you [generate the API key](https://developers.google.com/codelabs/setup-perspective-api#3). Take note of the API key. You will need this to configure the app in your Rocket.Chat workspace.

2. **Set quota limit**

Depending on your requirements, you will also need to set a quota limit for the Perspective API in your Google Cloud console. By default, the Perspective API sets a limit of checking one query per second (QPS). This is enough for testing the API in developer environments, but if you have a large number of conversations, this may not be sufficient.

Let's consider that you have 50 rooms with a 100 messages per second in each of the rooms. This means that there are 5000 messages per second. If the quota limit is only one QPS, it will take 5000 seconds (or, 83 minutes) to process one second of traffic. While this does not affect the server as the app handles this in the background, it has a negative impact if you want to block offensive messages as soon they are sent. This is why you may need to update the quota limit for the API.

To request a quota increase, fill out this [Quota Increase](https://developers.perspectiveapi.com/s/request-quota-increase?language=en\_US) form. For further information on updating the quota limit, see [Limits and Errors](https://developers.perspectiveapi.com/s/about-the-api-limits-and-errors?language=en\_US).

## Install the Mod Perspective app

To install the app in your workspace, follow these steps:

1. Go to **Administration** > **Apps** > **Marketplace**.
2. Search for the **Mod Perspective** app from the marketplace and select it.
3. Click **Install**. Accept the required permissions.

## Configure the Mod Perspective app

In your Rocket.Chat workspace, on the **Mod Perspective App Info** page, go to the **Settings** tab. Set values for the following settings according to your requirements:

* **AI Moderated Rooms**: Select the rooms from the list for which you want to enable content moderation.
* **Exclude Roles**: Select the roles for which you want to bypass moderation, for example, `admin` or `moderator`. Messages of users with these roles will not be considered for moderation. Keep in mind that custom roles are not supported.
* **Moderate accounts created in the past (number of days)**: Moderate messages from accounts created within a specific number of days. For example, if you set the value as 30, the app will moderate the message if the sender's account was created within the last 30 days. Messages from accounts created prior to this timeframe will bypass moderation.
* **Perspective API key**: Paste the API key you got from the prerequisites.
* **Block flagged messages delivery**: Automatically block the delivery of flagged messages. When disabled, messages get reported after they are sent. The expected response time from the Perspective API is around 100ms.
* **Delete flagged message**: Automatically delete flagged messages once they are sent. Deleted messages cannot be retrieved.
* **Deactivate user**: Automatically deactivate the sender of a flagged message. Deactivated users cannot log in to workspace.
* **Moderation categories**: Select which types of inappropriate content to be moderated, such as toxicity and profanity. Learn about each of these types from [here](https://developers.perspectiveapi.com/s/about-the-api-attributes-and-languages?language=en\_US).
* **Moderation threshold**: Set a number between 1 and 99 to control the likelihood of moderation, where higher values indicate greater tolerance. For example, a value of 90 flags messages with a 90% or higher chance of fitting into the selected moderation categories.

Click **Save changes**. You have now successfully installed and configured the app to help maintain a good environment! Next, learn more about how you can use the app's features to review the flagged messages and take further action.

{% hint style="info" %}
### Note on Private Room Access

Due to privacy considerations, the app will not report messages or operate in private rooms by default. If you want to enable content moderation in private rooms, follow these steps:

1. Add the `mod-perspective.bot` app user to the private room that you want to moderate. Use the slash command `/invite mod-perspective.bot`.
2. Select the private room under the app **Settings** > **AI Moderated Rooms**.

This gives the app access to private rooms.
{% endhint %}
