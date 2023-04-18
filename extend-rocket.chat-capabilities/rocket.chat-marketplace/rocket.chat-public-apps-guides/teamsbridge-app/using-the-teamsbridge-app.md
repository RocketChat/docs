# Using Microsoft Teams Bridge

Before using Microsoft Teams Bridge, you must have your organization's Teams account or Guest Account. Without your authorization, no one can access your Teams data or send/receive messages for you.

Log in to your Microsoft Teams account to allow Microsoft Teams Bridge to synchronize your messages.&#x20;

To use Microsoft Teams Bridge in a channel or DM,

* Using the slash command, type `/teamsbridge-login-teams` to log in to your Teams account and **Send**.&#x20;
* Click the **Login Teams** button from the message returned. It redirects you to log in to your Teams account. You can also log out by typing `/teamsbridge-logout-teams`.

{% hint style="info" %}
A bot is created for all team users in the workspace. Communication with users in Microsoft Teams Bridge is via bots.&#x20;
{% endhint %}

* After a successful login, type `/teamsbridge-provision-teams-bot-user`  and click **Send** to create a bot user in the workspace for all users in your Teams organization.

## Add users to a room using Microsoft Teams Bridge

To add a user from your Teams organization to a [room ](../../../../use-rocket.chat/user-guides/rooms/)on your workspace,

{% hint style="warning" %}
Adding a Teams Bot user is only supported for private channels, private teams, and private discussions.
{% endhint %}

* Using the slash command, type `/teamsbridge-add-user` and  **Send**.
* An **Add Teams users** screen is shown. Select all the users in your Teams organization you want to add to the room.&#x20;
* Click **Add users.**

## Send a Direct Message (DM) using Microsoft Teams Bridge

Since communication on Rocket.Chat with Microsoft Teams Bridge uses bots; click the user's bot from the room, and send a message. They will receive the messages in their Teams account as direct messages.

To create a direct message from the menu bar,

* Click the **Create New** icon in the Rocket.Chat menu bar, then select **Direct Message**.&#x20;
* Select the bot of the user you want to start a DM with. Then, click **Create** and send a message.
