# Outlook Calendar

<figure><img src="../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

The **Outlook Calendar** integration allows users to sync their daily calendar events from Outlook to their Rocket.Chat workspace. It also provides quick action buttons to interact with the events, for example — joining a meeting.

{% hint style="info" %}
* This integration only works with **Exchange Servers** and does not support Office 365.
* The Outlook Integration is only supported on the Rocket.Chat desktop application.
{% endhint %}

To access the **Outlook calendar** on your workspace,

1. Navigate to **Administration > Workspace > Settings > Outlook Calendar**.
2. Select **Enable** to enable the integration.
3. Enter the following information:
   1. **Exchange URL:** The exchange server URL you need to access the server. For example, `https://owa.xyz.rocket.cat/`
   2. **Outlook URL:** The Outlook application URL in the exchange server is used to redirect the user to the correct application. For example, `https://owa.xyz.rocket.cat/owa/#path=/calendar/view/Month`
   3. **Meeting url Regular Expression:** The expression used to detect meeting URLs in event descriptions. The first matching group with a valid URL will be used. HTML-encoded URLs will be decoded automatically.
4. Click **Save changes**.
5. To access the Outlook calendar in a room, click the kebab menu at the room header. Select **Outlook calendar.** A sidebar is displayed with the calendar history.
   1. From the Outlook sidebar, click **Login**.
   2. Fill in your Outlook login details in the new window and sign in.&#x20;
   3. Now, all your events for the current date are fetched and synced to your workspace. Click an event to see more details about it. If the event has a conference call, click the **Join** button beside it to join the call.

{% hint style="info" %}
You can only add one account. Therefore, you can't switch between different accounts.
{% endhint %}

## Enable or Disable Outlook Event Notifications&#x20;

To disable **Outlook** event notifications,

* From the Outlook sidebar, click the **Calendar Settings** button.&#x20;
* You can disable or enable  **Event notifications** based on your preference.

## Refresh Outlook Sync

To refresh the sync,

* Click the **Sync** button at the bottom of the sidebar.
* While submitting the login form, check the **Remember my credentials** option so that you can synchronize multiple times in the future without adding credentials again.

## Disable Outlook Authentication

To remove your credentials from the workspace,&#x20;

* Click the **Calendar** **Settings** button.
* Click the **Disable** button for Outlook authentication.
