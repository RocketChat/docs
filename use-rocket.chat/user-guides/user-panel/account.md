---
description: >-
  Manage your Rocket.Chat account settings through the browser, desktop, and
  mobile apps.
---

# Account

To access and manage your Rocket.Chat account on a workspace,

* Login to your Rocket.Chat server with a valid username and password.&#x20;
* Click your avatar.&#x20;
* Under **Account**, select any of the settings to access the account settings — **Profile**, **Preferences**, **Accessibility and appearance**.
* On the left-hand pane, you can find the following tabs:
  * **Profile**
  * **Preferences**
  * **Security**
  * **Integrations**
  * **Personal Access Tokens**
  * **Omnichannel**
  * **Accessibility and appearance**
  * **Manage devices**

Updating account settings is unique to your workspace and does not affect your account on other workspaces.

Let's look at the settings for each tab in detail.

{% hint style="info" %}
The settings displayed depend on your workspace account settings configured by the administrator. See [Accounts](https://docs.rocket.chat/use-rocket.chat/workspace-administration/settings/accounts) to learn about the settings.
{% endhint %}

## Profile

You can update the following settings for your **Profile**:

* **Profile Picture**: You can also upload a picture or enter a URL.
* **Name** and **Username**
* **Status Message**
* **Nickname**
* **Bio**
* **Email**
* Click **Logout from other Logged In Locations** to log out of your account from other clients.
* Click **Delete my account** to delete your account from this workspace.

## Preferences

In the **Preferences**, you can configure and set your preferences for your account on the workspace. These preferences include the following:

### **Localization**

* **Language**: Set the language to use for the Rocket.Chat user interface.

Rocket.Chat determines the language displayed in your workspace based on the following priority:

1. **User Preference:** This is the language you choose for your account under the [user preferences](account.md#preference). It takes priority over all other options.
2. **Browser Language:** If you haven't selected a language under [user preferences](account.md#preference), Rocket.Chat will use the language configured in your web browser.
3. [**Server Language**](../../workspace-administration/settings/general/#general-settings)**:** This is the default language set by the Rocket.Chat workspace administrator. It's only used as a last resort if neither your user preference nor browser language is available.

### **User Presence**

* **Enable Auto-Away**: Enable the auto-away functionality, which changes the status to `away` after an idle period.
* **Idle time limit**: Set the time in seconds to wait before the status changes to away.

### **Notifications**

Make sure to update your browser preferences to allow notifications.

* **Desktop Notifications**: Click the **Test Desktop Notification** to see how notifications will be displayed on the desktop.
* **Require Interaction to Dismiss Desktop Notification**: When enabled, notifications must be attended to before they can be dismissed. i.e., they will remain in the notification panel until they are visited.
* **Show Desktop Notifications For**: Allows you to select the type of messages that should trigger desktop or browser notifications.
* **Send Push Notifications For**: Allows you to select what type of messages should trigger push notifications.
* **Offline Email Notifications**: Allows you to set what type of message notifications you want to receive by email.
* **Receive login detection emails**: Get an email notification whenever a login is made to your account.

{% hint style="danger" %}
To receive email notifications, you must verify your email address.
{% endhint %}

### **Messages**

* **Unread Tray Icon Alert**: Toggles if the tray icon highlights when you have unread messages.
* **Always show thread replies in the main channel**: When enabled, all replies under a [thread](../rooms/threads/) will also be displayed directly in the main [room](../rooms/). When disabled, they're displayed based on the sender's choice.
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
* **Enter key behavior**: Configure what the `Enter` key does.
  * Normal mode (send with `Enter`)
  * Alternative mode (send with `Enter + Ctrl/Alt/Shift/CMD`)
  * Desktop mode (only sends with `Enter` on desktop)

### **Highlights**

* **Highlight words**: Specify a comma-separated list of words or phrases to trigger notifications when mentioned by anyone in public or private channels of which you are a member.&#x20;

### **Sound**

* **New Room Notification**: When added to a new room, select the sound to play.
* **New Message Notification**: Select the sound to play for every new message.
* **Mute Focused Conversations**: When enabled, open and active rooms will not create notifications.
* **Notifications sound volume**: Set the volume of the notification sound.

### **My Data**

Download your data as HTML or export it as JSON. Whichever option you choose, the request is processed in a queue, and a link to the exported file is sent to your email.

## Security

You can update the following account security settings depending on your workspace settings.

### **Password**

This tab is displayed if the setting to change passwords in [Accounts](https://docs.rocket.chat/use-rocket.chat/workspace-administration/settings/accounts) is enabled.

* Update your **password** and **confirm the new password**.
* Then, click **Save Changes**.

### **Two Factor Authentication**

This tab is displayed if 2FA is enabled in the workspace settings.

Refer to the [two-factor-authentication-user-guide.md](../security-bundle/two-factor-authentication-user-guide.md "mention") to gain a comprehensive understanding of two-factor authentication in Rocket.Chat.

### **E2E Encryption**

This tab is displayed if [E2E encryption](https://docs.rocket.chat/use-rocket.chat/workspace-administration/settings/e2e-encryption) is enabled in the workspace settings.

You can create encrypted private groups and direct messages. You may also update existing private groups or DMs to encrypted. It is end-to-end encryption, so the key to encode/decode your messages isn't saved on the server. For that reason, you need to store your password somewhere safe. You are required to enter it on other devices you wish to use E2E encryption.

**Change Encryption Password**

To create an encryption password,

* Enter a new encryption password&#x20;
* Confirm the new encryption password and click **Save Changes**

#### &#x20;**Reset E2E Key**

This option will remove your current E2E key and log you out. When you log in again, Rocket.Chat will generate a new key and restore your access to any encrypted room that has one or more members online. Due to the nature of the E2E encryption, Rocket.Chat can't restore access to any encrypted room with no members online.

{% hint style="info" %}
Refer to the [E2E Encryption user guide ](../security-bundle/end-to-end-encryption-user-guide.md)for more details.
{% endhint %}

## Integrations

* **WebDAV Accounts**: Select a webdav account for integrations.

## Personal Access Tokens

To make API calls easily, you have the option to create personalized access tokens.

**Create a Personal Access Token**

To create a personal access token,&#x20;

* Enter the token name and click **Add**.
* You can configure whether or not to require 2FA when using this token by selecting between the **Ignore Two Factor Authentication** and **Require Two Factor Authentication** drop-down options.
* Enter your password or 2FA code to **Verify**.
* Your access token is generated successfully. It displays Your **User Id** and an **Access Token.**

{% hint style="info" %}
Remember to store the user ID and access token in a safe place as you can only view it once.
{% endhint %}

**Delete Personal Access Token**

To delete an access token,

* From the Personal Access Token list, click the **Delete** icon against the token you choose to delete.
* Then, click **Delete**.

**Regenerate Personal Access Token**

To regenerate an existing access token,&#x20;

* From the Personal Access Token list, click the refresh icon against the token you choose to regenerate.
* &#x20;Then, click **Regenerate**.

## Omnichannel

**Hide conversation after closing:** Redirect agents to the home page after closing a conversation.

**Conversational Transcript**

* **Export chat transcript as PDF**: Always export the transcript as PDF at the end of conversations.
* **Send chat transcript via email**: Always send the transcript to contacts at the end of the conversations.

To learn about the accessibility, appearance, and device management settings, see the next topics.
