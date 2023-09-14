---
description: >-
  Workspace gives you a consolidated view of basic information about your
  workspace.
---

# Workspace

Visit the **Workspace** section to get insight, statistics, and information on the various aspects of your server. This can help you to evaluate better and monitor the various activities.

To access this menu, go to **Administration** > **Workspace** > **Workspace.**

## Deployment

The deployment card shows information related to your server deployment.

* **Version**: The current version of your Rocket.Chat server. This can be different from the latest version if not updated.
* **Deployment ID**: Your server's deployment ID.
* **Apps Engine Version**: The version of Apps engine. It can be different from the latest if not updated.
* **Node Version**: The Node.js version your server is running on.
* **Database Migration**: The date of database migration.
* **MongoDB**: The MongoDB version
* **Commit Details**: Details on the recent commit of your server.
* **PID**
* **Instances:** See the status of your workspace instance.

## License

This shows the information patenting to the license of your server.

* **License**: This shows the license tags active on your server.
* **Features**: The various features supported by the license on your server. Like `Omnichannel` `Auditing`, `Canned Responses`, `Engagement Dashboard`.

### Apply Offline License

To apply your offline license:

* Navigate to **Administration** > **Workspace** > **Workspace**
* On the License card, click **Apply Offline License.**
* Paste the license you got from the[ Rocket.Chat Cloud Console](https://cloud.rocket.chat/home) or provided from the License purchase confirmation email in the modal presented.
* Hit **Apply license**

### Change Offline License

To change your offline license,

* Navigate to **Administration** > **Workspace** > **Workspace**
* Click on the **Change Offline License** at the bottom of the License card
* A modal is presented, prompting you to paste the license you got from the[ Rocket.Chat Cloud Console](https://cloud.rocket.chat/home) or provided from the License purchase confirmation email.
* Clear the old license code and paste the new license code, then hit **Apply license.**

## Usage

* **Users**
  * **Total**: The total number of users on the server.
  * **Online**: The number of users that are currently `online`.
  * **Busy**: The number of users that are in `Busy` mode.
  * **Offline**: The number of users that are offline.
* **Types and Distribution**
  * **Connected**
  * **Activated Users**: The number of activated users on your server.
  * **Activated Guests**: The number of guests that have been activated.
  * **Deactivated Users**: Number of inactive users.
  * **Rocket.Chat App Users**: The number of Rocket.Chat users. Example `bot users`, `app users`.
* **Uploads**
  * **Total Uploads**: The number of total uploads that have been made on the server.
  * **Total Uploads Size**: The total size of all uploads.
* **Rooms**
  * **Total Rooms**: The total number of rooms on the server.
  * **Total Channels**: Total number of channels on your server.
  * **Total Private Groups**: Total number of private groups on the server
  * **Total Direct Message Rooms**: Total number of Direct Messages created on the server.
  * **Total Discussions**: Total number of discussions
  * **Total Omnichannel Rooms**: Total number of Omnichannel rooms.
* **Messages**
  * **Total Messages**: Total messages sent and received on the server.
  * **Total Threads**: The total number of threads on the server.
  * **Total Messages in Channels**: Total messages in all channels only
  * **Total Messages in Private Groups**: Total number of messages in private groups only
  * **Total Messages in Direct Messages**: Total number of messages that have been sent in all direct messages
  * **Total Messages in Omnichannel**: The total number of messages in omnichannel.

{% hint style="info" %}
Click the **See on Engagement Dashboard** button to view more usage statistics on the [engagement-dashboard.md](engagement-dashboard.md "mention"). This button is disabled for community edition workspaces.
{% endhint %}

## Seats Usage

The seats usage displays the statistics of used, available(unused), and total seats.

{% hint style="info" %}
Click on **Request Seats** to upgrade your plan and get more seats.
{% endhint %}

## Download Info

To download info about your server,&#x20;

* Click the **Download Info** button at the top right of **Workspace** screen.
* A download is prompted with a file named `statistics.json`.

## Refresh

Refreshing information on your Rocket.Chat server will prompt for the latest stats to be pulled.

To refresh,&#x20;

* Click the **Refresh** button at the top right of the **Workspace** screen.
