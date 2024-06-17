# Edit A Channel

To edit a public or private channel:

* Click the **Room Information** icon from the menu bar to view more details about the channel.
* Click **Edit** to edit the [Channel information](./#channel-information).&#x20;
* Update the Channel information.
* Click **Save.**

### Other Channel Edit Actions

Some additional edit actions for a channel include:

#### Password Access

Secure a channel by setting up password access. It means users can only join the channel with a valid password.

#### Hide System Messages

Select the Rocket.Chat action alerts to hide. For example—"Hide User Joined messages" will hide the alert that displays in the chat whenever a new user joins the channel.

**Allow Reacting**

Allow authorized members to react to messages in a broadcast channel.

**Prune**

Kindly refer to [#per-room-policies](../../../workspace-administration/settings/retention-policy.md#per-room-policies "mention") to define retention policy in a channel.

## Hide or Leave a Channel

* To **Hide** or **Leave** a channel, click the **kebab** icon next to the delete button on the **Channel Information** page.
* Select **Hide** or **Leave** from the dropdown options.
* To unhide a channel, you may search for it in your Rocket.Chat workspace.

Alternatively, enter the command `/part` or `/leave` in the message input box to leave that channel.

{% hint style="warning" %}
A channel owner can not leave a channel until they set someone else as the owner of that channel.
{% endhint %}

## Star Messages in Channel

You can star important messages in a channel to easily access them later. Starred messages are identified by a small star ⭐ by the side.

To star a message,&#x20;

* Click the **kebab icon** when you hover over the message. Then, select **Star.**

To un-star a message,&#x20;

* Click the **kebab icon** when you hover over the message. Then, select Remove S**tar.**

To view all stared messages,&#x20;

* Click on the **kebab icon** of the **Channel** menu bar and select **Starred Messages.** A list of all stared messages are displayed.

## Prune Messages from a Channel

If you are a workspace admin or are assigned the **clean-channel-history** permission, the **prune messages** option allows you to swiftly delete messages from a channel.

{% hint style="info" %}
_Pruned messages and files are deleted forever and cannot be recovered. You are advised to use this feature with extra caution._
{% endhint %}

To prune selected messages, fill in these fields:

* **Newer than**: Deletes all messages posted **after** a particular date.
* **Older than**: Deletes all messages posted **before** a particular date.
* **Users**:  Allows you to specify which user's message to delete. Add a username, and the user's messages are deleted.
* **Inclusive**: Deletes all messages that were sent  at the specified start and end times you have specified in the `Newer than` and `Older than` fields.
* **Exclude pinned messages**: Do **not** delete pinned messages.
* **Only remove the attached files, keep messages**: Delete files but not the messages.

## Channel Notifications

You can update the notification preference for a channel you belong to. By default, a channel notifies you whenever someone mentions you or uses the `@all` mention.

To update channel notification preferences,&#x20;

* Click the **kebab icon** at the menu bar of the channel.
* Select **Notification Preferences**.

The notification options include the following:

* **Turn ON**: Choose whether to receive alerts or not.
* **Mute @all and @here mentions:**  Mute alerts whenever you are mentioned in the channel.
* **Mark As Unread:** Display the channel as unread when there are unread messages.
* **Audio**: Select whether the channel will play a sound whenever someone mentions you or post a message on the channel. The sound can also be customized.
* **Desktop**: Controls notification behavior when using any desktop app or browser.
* **Mobile**: Controls push notification behavior when using any mobile app.
* **Email**: Set whether an email is sent whenever someone mentions you or posts a message.
