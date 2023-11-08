---
description: Install and use the Zoom App.
---

# Zoom

<figure><img src="../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

Zoom integration with Rocket.Chat allows users to create and join virtual meetings with audio and video capabilities, facilitating "face-to-face" collaboration when in-person meetings are impossible. This integration enhances user engagement and streamlines communication, enabling more efficient and rapid collaboration within Rocket.Chat.

The Zoom app integration in Rocket.Chat enables users to manage meetings—including initiation, scheduling, joining, recording, and sharing—directly within a channel. It also allows for participant and duration tracking, automated or custom reminders for upcoming meetings, and seamless recognition of Zoom URLs pasted into channels, eliminating the need to switch between applications.

{% hint style="info" %}
The new Zoom app version 2.3.0 now supports multi-meeting capabilities and can be set as the [default video-conferencing provider](../../../use-rocket.chat/rocket.chat-conference-call/conference-call-admin-guide/). Ensure you are using Rocket.Chat v6.3.0 or higher to utilize these features.
{% endhint %}

Integrate Zoom with Rocket.Chat to:

* Initiate Zoom calls within channels, rooms, discussions, or direct messages.
* Join Zoom meetings directly through Rocket.Chat.
* Use /zoom slash commands to create new meeting rooms.
* Paste Zoom URLs in channels for direct rendering in the Zoom interface.

## Install the Zoom App

{% hint style="danger" %}
**Prerequisites for Integration**

* Users **must** have same email accounts on both Rocket.Chat and Zoom to enable meeting creation.
* A Server-to-Server OAuth app **must be created** on the Zoom Marketplace prior to integration.
{% endhint %}

### **Create Server-to-Server OAuth App at Zoom Marketplace**

To create a new Server-to-Server OAuth app from the Zoom marketplace, follow the instructions mentioned below:&#x20;

* Sign in to  [Zoom Marketplace](https://marketplace.zoom.us/).
* From the top navigation bar, select **Develop > Build App**.
* From the available list of app types, choose **Server-to-Server OAuth** and click **Create**.
* Enter a name for the app and click **Create.**
* From the **App Credentials** section, copy the app's **Account ID**, **Client ID,** and **Client Secret**.&#x20;
* Click continue to proceed to the **Information** section. Provide the **basic information** of your app, such as the name, description, and company name. This will show on the app listing card.
* Update your **developer's contact information** and continue to **Feature**.
* Define the **features** of your app. Then, head to the **Scopes** section.&#x20;
* Click on **Add Scopes** button and add this scope: \
  \
  **View and manage all user meetings** **`/meeting:write:admin`**\

* After adding this scope, continue to the last step for **Activation**. Your app will now be ready for activation. Once activated, your app can invoke the selected Zoom APIs.&#x20;

Now that you've created the server-to-server OAuth app at Zoom marketplace, visit the Rocket.Chat marketplace in your workspace to install the Zoom app.&#x20;

To **install the Zoom app**,

* Go to **Administration** > **Marketplace**.
* Search for the **Zoom** app and click on the item.&#x20;
* Click **Install** and accept the **needed permissions** to install.&#x20;

To update the app,&#x20;

* Go to **Administration** > **Marketplace**.
* Search for the **Zoom** app and click on the item.&#x20;
* You will find the **Update** button right below the app name and description.&#x20;
* Click on the **Update** button to update to the latest version of the Zoom app.&#x20;

## Configure the Zoom App

To configure the Zoom App,

* Navigate to the **Zoom App Info** screen > **Settings** tab.
* Paste the **Account ID**, **Client ID,** and **Client Secret** of the server-to-server OAuth app you created at Zoom marketplace.&#x20;
* Click **Save Changes**.&#x20;

Now that you've installed and configured the Zoom app, proceed to [using-the-zoom-app.md](zoom/using-the-zoom-app.md "mention").
