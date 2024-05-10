---
description: Omnichannel Integration between Rocket.Chat and Telegram.
---

# Telegram App

<figure><img src="../../../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

With the Telegram app on Rocket.Chat, your customers can send and receive Omnichannel messages from your workspace through a [Telegram bot](https://core.telegram.org/bots).&#x20;

**Key features of the Rocket.Chat Telegram app**

* Manage Telegram conversations from a single inbox with unlimited chat history.
* Engage with clients via multimedia chat.
* Option to set up quick replies using bots.

{% hint style="warning" %}
The Telegram app is used for Omnichannel conversations. To use your Telegram bot in rooms, see the [simple-telegram-bot.md](../../../../../use-rocket.chat/workspace-administration/integrations/simple-telegram-bot.md "mention") integration.
{% endhint %}

## Install the Telegram app

To install the **Telegram** app in your workspace, follow these steps:

1. Go to **Administration** > **Apps** > **Marketplace**.
2. Search for the **Telegram** app.
3. Click **Install** and accept the required permissions.

{% hint style="warning" %}
You must enable the [Omnichannel](../../../../../use-rocket.chat/omnichannel/) feature with agents and managers assigned to receive and send Omnichannel messages.
{% endhint %}

## Generate your Telegram bot token

To generate a Telegram bot token, follow these steps:

1. Install and open the Telegram app on your devive. Open a new chat, search and select **"BotFather"**.
2. Click **Start**. Type `/newbot` in the chat and **Send**.&#x20;
3. Select a name and a unique username for your bot.
4. Once the username is accepted, a congratulatory message displays all the bot's details, including the API token.&#x20;
5. Copy the bot API token.

## Configure the Telegram app

To configure the Telegram app in your workspace, follow these steps:

1. On the **Telegram App Info** screen, go to the **Settings** tab.
2. Update the following fields:

<table><thead><tr><th width="303">Field</th><th>Description</th></tr></thead><tbody><tr><td><strong>Telegram Bot Token</strong> <mark style="color:red;">*</mark></td><td>The bot token you copied when <a href="./#generate-your-telegram-bot-token">generating the telegram bot</a>.</td></tr><tr><td><strong>Default Department Id or Name</strong></td><td>Only the agents of this department can serve Telegram conversations.</td></tr><tr><td><strong>Service Unavailable Message</strong></td><td>The message that is sent to your customer when no agents are available online.</td></tr><tr><td><strong>Welcome Message</strong></td><td>The message sent to customers when they send their first message.</td></tr><tr><td><strong>Conversation Finished Message</strong></td><td>The message sent to your customer when an agent closes the conversation.</td></tr><tr><td><strong>Agents Display Name</strong></td><td>You can display the agent's name, or username, or not display anything.</td></tr><tr><td><strong>File Upload Enabled</strong></td><td>Enable or disable file sharing.</td></tr><tr><td><strong>Accepted Media Types</strong></td><td><p>Select the type of files that can be shared between the agents and your Telegram customers.<br></p><p>Enter the values as a comma-separated list of media types. Leave it blank to accept all media types. There are some limitations for media types. For details, see <a href="https://core.telegram.org/bots/api#sending-files">https://core.telegram.org/bots/api#sending-files</a></p></td></tr><tr><td><strong>Message Text Formatting options</strong></td><td><p>Select the text formatting option for your conversations. You can select one of the following values:</p><ul><li><code>None</code></li><li><code>Html</code></li><li><code>Markdown</code></li><li><code>MarkdownV2</code></li></ul><p>The Bot API supports basic formatting for messages, like bold, italic, underlined, strikethrough, spoiler text and more. For details, see <a href="https://core.telegram.org/bots/api/#formatting-options">https://core.telegram.org/bots/api/#formatting-options</a></p></td></tr></tbody></table>

3. Click **Save changes**.

Send messages to your bot to test the configuration.

## Uninstall Telegram app

To delete the Telegram app from your workspace, follow these steps:

1. Go to **Administration** > **Apps** > **Installed**.
2. Click th**e kebab menu** against the **Telegram app**.
3. Select **Uninstall**.
4. Click **Yes** to confirm the uninstallation.

{% hint style="warning" %}
To learn more about Telegram bots, see the official [Telegram Bots Guide.](https://core.telegram.org/bots#6-botfather)
{% endhint %}
