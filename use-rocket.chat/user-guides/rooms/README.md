# Rooms

Rooms provide different methods of conversations in your workspace. They allow a more structured and purpose-oriented workflow.

{% hint style="info" %}
If you are an administrator, see the [**Room Workspace Administration**](../../workspace-administration/rooms.md)**.**
{% endhint %}

## Types of Rooms in Rocket.Chat

[**Channels**](channels/)**:** Organize conversations across different topics.

[**Teams**](teams/)**:** Promotes collaboration between different teams.

[**Discussions**](../../workspace-administration/settings/discussion.md):  Allows a separate focused conversation around larger topics in a team or channel.

[**Direct Messages**](direct-messages/): Allows one-off conversations that do not require a channel or team.

[**Thread**](../../workspace-administration/settings/threads.md): Organized conversations around a particular message.

{% hint style="info" %}
Learn about Rocket.Chat [Room Roles.](room-roles.md)&#x20;
{% endhint %}

## Mentions

When someone mentions you with `@username`, `@all` or `@here`, a symbol or a number will appear alongside the channel name. If someone mentions `@all` or `@here` a number will show up showing the number of times the mention is specific to you.

For workspaces on version 6.6 and above, mentioning a user in rooms they aren't a member of prompts the following options:&#x20;

* **Add them**: This option allows you to add the user to the room so they can see your message. It is only displayed if you have permission to add members to that room.
* **Let them know**: You can notify them via DM that you mentioned them, but they're not in the room.
* **Do nothing**: You can also choose to do nothing about it. The bot informs you that the user you mentioned is not in the room.&#x20;

## Auto-Translate

Auto-Translate is a powerful feature in Rocket.Chat that enhances communication and collaboration by automatically translating room messages in real time. It is valuable for global teams, multilingual communities, or organizations that need to bridge language barriers effortlessly.&#x20;

{% hint style="info" %}
The workspace administrator must configure the [Auto-Translate settings](../../workspace-administration/settings/message.md#ibh8nd40he).
{% endhint %}

To enable **Auto-Translate** in a room,&#x20;

* Click the **kebab** icon at the menu bar of the room.
* Select **Auto-Translate**.
* Enable **Automatic Translation.**
* Select your preferred language.

All the messages you receive in the room will be automatically translated to the selected language.

{% hint style="warning" %}
Your translation settings won't affect other users in the room. The messages they receive will also be translated to their selected language.
{% endhint %}
