# Install Zoom App

{% hint style="danger" %}
**Prerequisites for Integration**

* Users **must** have same email accounts on both Rocket.Chat and Zoom to enable meeting creation.
* A Server-to-Server OAuth app **must be created** on the Zoom Marketplace prior to integration.
{% endhint %}

## Create Server-to-Server OAuth App at Zoom Marketplace

To create a new Server-to-Server OAuth app from the Zoom marketplace, follow the instructions mentioned below:&#x20;

* Sign in to  [Zoom Marketplace](https://marketplace.zoom.us/).
* From the top navigation bar, select **Develop > Build App**.
* From the available list of app types, choose **Server-to-Server OAuth** and click **Create**.
* Enter a name for the app and click **Create.**
* Under the **App Credentials** section, copy the app's **Account ID**, **Client ID,** and **Client Secret**.&#x20;
* Once you have copied this, provide the **basic information** of your app, such as the name, description, and company name. This will show on the app listing card.
* Also, provide the **developer's contact information**. Provide your corporate email for announcements, including new Marketplace/API updates, breaking changes, and other updates that impact your app.
* Define the **features** of your app and head to the **Scopes** section.&#x20;
* Click on **Add Scopes** button and add this scope: \
  \
  **View and manage all user meetings** **`/meeting:write:admin`**\

* After adding this scope, continue to the last step for **Activation**. Your app will now be ready for activation. Once activated, your app can invoke the selected Zoom APIs.&#x20;
* Once you have created the server-to-server OAuth app at Zoom marketplace, visit the Rocket.Chat marketplace within your workspace to install the Zoom app.&#x20;

## Install Zoom App within Rocket.Chat

To install the Zoom app,

1. Go to **Administration** > **Marketplace**.
2. Search for the **Zoom** app and click on the item.&#x20;
3. Click **Install** and accept the **needed permissions** to install.&#x20;

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

{% hint style="warning" %}
Please ensure that each non-admin workspace user has registered individually on the Zoom app marketplace account.&#x20;
{% endhint %}
