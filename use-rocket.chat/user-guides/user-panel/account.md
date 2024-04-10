---
description: >-
  Manage your Rocket.Chat account settings through the browser, desktop, and
  mobile apps.
---

# Account

To access and manage your Rocket.Chat account on a workspace,

* Log in to your Rocket.Chat server with a valid username and password.&#x20;
* Click your avatar and select **Account**.
* You can update your **Profile**, **Preference**, **Security** and **Personal Access Tokens**.

{% hint style="success" %}
Updating account settings is unique to your workspace and does not affect your account on other workspaces.
{% endhint %}

## Profile

To update your account profile in a workspace,&#x20;

* Navigate to **Avatar Menu >  Account** > **Profile.**
* You can update your **avatar, name, username, nickname, bio, and status message.** Click **Save Changes**.
* Click **Logout from other LoggedIn Locations** to log out of your account from other clients.
* Click **Delete My Account** to delete your account from this workspace.

## Preference

In the **Preferences**, you can configure and set your preferences for your account on the workspace.

To access this menu, Navigate to **Avatar Menu >  Account** > **Preferences.** Update your preferences and click **Save Changes.** These preferences include the following:

**Localization**

* **Language**: Set the language to use for the Rocket.Chat user interface.

**User Presence**

* **Enable Auto-Away**: Enable the auto-away functionality, which changes the status to _away_ after an idle period.
* **Idle time limit**: Set the time in seconds it waits before the status changes to away.

**Notifications**

* **Desktop Notifications**: Click the **Test Desktop Notification** to see how notifications will be displayed on the desktop.
* **Require Interaction to Dismiss Desktop Notification**: When enabled, notifications must be attended to before they can be dismissed. i.e., they will remain in the notification panel until they are visited.
* **Show Desktop Notifications For**: Allows you to select the type of messages that should trigger desktop or browser notifications.
* **Send Push Notifications For**: Allows you to select what type of messages should trigger push notifications.
* **Offline Email Notifications**: Allows you to set what type of message notifications you want to receive by email.
* **Receive login detection emails**: Get an email notification whenever a login is made to your account.

{% hint style="danger" %}
For email notifications, you must verify your email address.
{% endhint %}

**Messages**

* **Unread Tray Icon Alert**: Toggles if the tray icon highlights when you have unread messages.
* **Always show thread replies in the main channel**: When enabled, all replies under a [thread](../rooms/threads/) will also be displayed directly in the main      [room](../rooms/). When disabled, they're displayed based on the sender's choice.
* **Also send thread messages to channel behavior:** When replying to a [thread](../rooms/threads/), select how your replies should be sent to the [room](../rooms/).
  * **Selected for the first reply, unselected for the remaining**: The first reply to the [thread](../rooms/threads/) is displayed in the main [room](../rooms/), while subsequent replies are not.
  * **Selected by default**: The **Also send to channel** checkbox is always selected when replying to a [thread](../rooms/threads/). When the reply is sent, it's also displayed in the main [room](../rooms/).
  * **Unselected by default**: The **Also send to channel** checkbox is not selected when replying to a [thread](../rooms/threads/). When the reply is sent, it's not displayed in the main [room](../rooms/).&#x20;

{% hint style="info" %}
When replying to a thread, you can select or unselect the **Also send to channel** checkbox based on your preference.
{% endhint %}

* **Use Emojis**: Enable this to allow the use of emojis.
* **Convert ASCII to Emoji**: Toggles emoji conversion when inputting ASCII characters.
* **Auto Load Images**: Enable to autoload images and avoid clicking on them to preview.
* **Save Mobile Bandwidth**: Saves mobile data when the app is open. Commonly known as Data Saver.
* **Collapse embedded media by default**: Toggles if messages with&#x20;
* **Hide Contextual Bar by clicking outside of it**: Automatically closes the right sidebar in rooms when you click outside them.
* **Display Avatars**: Hides avatars on the channels, showing only the users' usernames.
* **Enter key behavior**: Configure what the **enter** key does.
  * Normal mode (send with Enter)
  * Alternative mode (send with Enter + Ctrl/Alt/Shift/CMD)
  * Desktop mode (only sends with Enter on desktop)

**Highlights**

* **Highlight words**: Specify a comma-separated list of words or phrases to trigger notifications when mentioned by anyone in public or private channels of which you are a member.&#x20;

**Sound**

* **New Room Notification**: When added to a new room, select the sound to play.
* **New Message Notification**: Select the sound to play for every new message.
* **Mute Focused Conversations**: When enabled, open and active rooms will not create notifications.
* **Notifications sound volume**: Set the volume of the notification sound.

**My Data**

Download your data as HTML or export it as JSON. Whichever option you choose, the request is processed in a queue, and a link to the exported file sent to your email.

## Security

You can update your password or enable  Two Factor Authentication (2FA) for your account to enhance your account security.&#x20;

To access security settings,&#x20;

* Navigate to **Avatar Menu > Account** > **Security**.

**Password**

* Update your **password** and **confirm the new password**.
* Then, click **Save Changes**.

**Two-factor authentication**

Kindly consult the [two-factor-authentication-user-guide.md](../security-bundle/two-factor-authentication-user-guide.md "mention") to gain a comprehensive understanding of two-factor authentication in Rocket.Chat.

### **E2E Encryption**

You can now create encrypted private groups and direct messages. You may also update existing private groups or DMs to encrypted. It is end-to-end encryption, so the key to encode/decode your messages isn't saved on the server. For that reason, you need to store your password somewhere safe. You are required to enter it on other devices you wish to use e2e encryption.

**Change Encryption Password**

To create an encryption password,

* Enter a new encryption password&#x20;
* Confirm the new encryption password and click **Save Changes**

#### &#x20;**Reset E2E Key**

This option will remove your current E2E key and log you out. When you log in again, Rocket.Chat will generate a new key and restore your access to any encrypted room that has one or more members online. Due to the nature of the E2E encryption, Rocket.Chat can't restore access to any encrypted room with no members online.

{% hint style="info" %}
Visit the [E2E Encryption user guide ](../security-bundle/end-to-end-encryption-user-guide.md)for more details.
{% endhint %}

## Integrations

* **WebDAV Accounts**: Select a webdav account for integrations.

## Personal Access Tokens

To make API calls easily, you have the option to create personalized access tokens.

To access **Personal Access Tokens**,&#x20;

* Navigate to **Avatar Menu > Account** > **Personal Access Tokens**.

**Creating a Personal Access Token**

To create a personal access token,&#x20;

* From the Access Token dashboard, enter the token name and hit **Add**.
* You can configure whether or not to require 2FA when using this token by selecting between the **Ignore Two Factor Authentication** and **Require Two Factor Authentication** dropdown option.
* Enter your password or 2FA code to **Verify**.
* Your access token is generated successfully. It displays Your **User Id** and an **Access Token.**

{% hint style="info" %}
Remember to store the user Id and access token in a safe place as you can only view it once.
{% endhint %}

**Delete Personal Access Token**

To delete an access token,

* From the Personal Access Token list, click the **Delete** icon against the token you choose to delete.
* Then, click **Delete**.

**Regenerate Personal Access Token**

To regenerate an existing access token,&#x20;

* From the Personal Access Token list, click the refresh icon against the token you choose to regenerate.
* &#x20;Then, click **Regenerate**.

### Omnichannel

**Hide conversation after closing:** Redirect agents to the home page after closing a conversation.

**Conversational Transcript**

* **Export chat transcript as PDF**: Always export the transcript as PDF at the end of conversations.
* **Send chat transcript via email**: Always send the transcript to contacts at the end of the conversations.
