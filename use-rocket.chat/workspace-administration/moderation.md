# Moderation

Content moderation is vital for maintaining a safe and inclusive digital workspace. Moderation in Rocket.Chat allows workspace admins and moderators of rooms to view the reported messages and take appropriate action against detrimental users.&#x20;

To access this menu, go to **Administration** > **Workspace** > **Moderation**. The following tabs are displayed on the **Moderation** page.

* Reported messages
* Reported users

Let's look at each of these tabs in detail.

## Reported messages

The **Reported messages** tab displays the messages that have been reported. You can find the following information:

* The users whose messages are reported.
* The reported message.
* The room in which the message is reported.
* The date and time on which the message is reported.
* The number of reported messages of the user.

### Reported messages actions

Click the kebab menu <img src="../../.gitbook/assets/image (1) (2).png" alt="" data-size="line"> across a report to view all the actions you can do to the user and the message that was reported:

1. **See messages** - View the details of the reported messages.
2. **Dismiss reports** - Delete the reports. The messages are not affected.
3. **Delete all messages** - Delete the reported messages from the rooms and dismiss the report.
4. **Deactivate user** - The user cannot log in unless reactivated. The reported messages are deleted from the rooms.
5. **Reset user avatar** - Remove the current user avatar.

## Reported users

The **Reported users** tab displays the users that have been reported. You can find the following information.

* The reported user.
* The date and time on which the user is created.
* The user email.
* The date and time on which the user is reported.
* The number of times the user is reported.

### Reported users actions

Click the kebab menu <img src="../../.gitbook/assets/image (1) (2).png" alt="" data-size="line"> across a report to view all the actions you can do to the reported user:

1. **See reports** - View the details of the reported user.
2. **Dismiss reports** - Delete the reports. The messages are not affected.
3. **Deactivate user** - The user cannot log in unless reactivated. The reported messages are deleted from the rooms.
4. **Reset user avatar** - Remove the current user avatar.

## Search reports

You can search and filter the reports in the following ways:

* Use the **Search** field to find specific reports.
* Click the **All** drop-down menu to find the reports for a specific duration of time. You can select any of the following options:
  * **Today**
  * **Yesterday**
  * **This Week**
  * **Previous Week**
  * **This Month**
  * **All**

{% hint style="info" %}
* **Moderation** is available to all workspaces from version 6.2 or above.
* To learn how to report messages and users, see[#report-a-message-or-user](../user-guides/messages/message-actions.md#report-a-message-or-user "mention").
* You can also install content moderation apps that screen the rooms and report offensive messages automatically. See [Content Moderation Apps](https://docs.rocket.chat/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/content-moderation-apps) for details.
{% endhint %}
