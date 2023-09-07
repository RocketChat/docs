# Install Zoom App

## Prerequisites

* A Zoom [Pro account](https://zoom.us/pricing) for other users to create Zoom links. These users are added to your Zoom account, and their emails must be the same on Rocket.Chat and Zoom.
* A Server-to-Server OAuth app created at Zoom Marketplace.&#x20;

## Create Server-to-Server OAuth App at Zoom Marketplace

To create a new Server-to-Server OAuth app from the Zoom marketplace, follow the instructions mentioned below:&#x20;

* Sign in to  [Zoom Marketplace](https://marketplace.zoom.us/).
* From the top navigation bar, select **Develop > Build App**.
* From the available list of app types, choose **Server-to-Server OAuth** and click **Create**.
* Enter a name for the app and click **Create.**
* Under the **App Credentials** section, copy the app's **Account ID**, **Client ID,** and **Client Secret**.&#x20;
* Once you have copied this, provide the **basic information** of your app such as the name, description, and company name. This will show on the app listing card.
* Also, provide the **developer contact information**. Provide your corporate email for announcements including new Marketplace/API updates, breaking changes, and other updates that impact your app.
* Define the **features** and **scope** of your app and head to the **Activation** section. Your app will now be ready for activation. Once activated, your app will be allowed to invoke the selected Zoom APIs.&#x20;
* Once you have created the server-to-server OAuth app at Zoom marketplace, visit the Rocket.Chat marketplace within your workspace to install the Zoom app.&#x20;

{% hint style="danger" %}
**Note:** You cannot participate in two or more meetings simultaneously. The generated token will be utilized for creating Zoom meetings in which the administrator serves as the meeting host. Since each user in the workspace will have the ability to create Zoom meetings on behalf of the administrator, the administrator cannot simultaneously host more than one meeting.
{% endhint %}

## Install Zoom App

To install the Zoom app,

1. Go to **Administration** > **Marketplace**.
2. Search for the **Zoom** app and click on the item.&#x20;
3. Click **Install** and accept the **needed permissions** to install.&#x20;

{% hint style="warning" %}
**Note to existing Zoom app users:** Please be aware that on September 8, 2023, Zoom will be deprecating its JWT authentication method. After September 8, 2023, all JWT applications will be deactivated, and integrations will no longer be able to interact using the JWT app type. You must install the most recent version of the Zoom app to continue using this app. Refer to [Zoom’s announcement](https://developers.zoom.us/docs/internal-apps/jwt-faq/) for more information on the deprecation.&#x20;
{% endhint %}

To update the app,&#x20;

1. Go to **Administration** > **Marketplace**.
2. Search for the **Zoom** app and click on the item.&#x20;
3. You will find the **Update** button right below the app name and description.&#x20;
4. Click on the **Update** button to update to the latest version of the Zoom app.&#x20;

## Configure the Zoom App

To configure the Zoom App,

* Navigate to the **Zoom App Info** screen > **Settings** tab.
* Paste the **Account ID**, **Client ID,** and **Client Secret** of the server-to-server OAuth app you created at Zoom marketplace.&#x20;
* **Save** the changes.&#x20;

## Using the Zoom App

To use the Zoom app in a [room](../../../../use-rocket.chat/workspace-administration/rooms.md),

* Run the slash command `/zoom start` to generate a new Zoom meeting link. It generates a Zoom meeting link, and anyone in that room can click the link to join the meeting.
* You can also run `/zoom start <topic>` to add a title to the meeting. For example, `/zoom start < Designers Daily Standup>`.
