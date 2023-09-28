---
description: Omnichannel Integration between Rocket.Chat and Telegram.
---

# Telegram App

<figure><img src="../../../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

With the Telegram app on Rocket.Chat, your customers can send and receive Omnichannel messages from your workspace through a Telegram bot.

{% hint style="warning" %}
To use your Telegram bot in a [room](../../../../../use-rocket.chat/workspace-administration/rooms.md), see [telegram.md](../../../../../use-rocket.chat/workspace-administration/integrations/telegram.md "mention").
{% endhint %}

## Install Telegram App

To install the Telegram App,

* Go to **Administration > Apps > Marketplace.**
* Search for the **Telegram** app.
* Click **Install** and accept the needed permissions.

{% hint style="warning" %}
**You must enable the** [**Omnichannel**](../../../../../use-rocket.chat/omnichannel/) **feature with** [**agents**](../../../../../use-rocket.chat/omnichannel/agents.md) **and** [**managers**](../../../../../use-rocket.chat/omnichannel/managers.md) **assigned to receive and send Omnichannel messages.**
{% endhint %}

## Generate your Telegram Bot Token

To generate a Telegram bot token,

* Launch your Telegram app. Open a new chat, search and select **"BotFather".**
* Click **Start**. Type “**/newbot**” in the chat and **Send**.&#x20;
* Select a name and username for your bot.
* Once the username is accepted, a congratulatory message displays all the bot's details, including the API token.&#x20;
* Copy the bot API token.

## Configure the Telegram App

To configure the Telegram App,

* On the **Telegram App Info** screen, navigate to **Settings.**
* Update the required fields:
  * **Bot Token:** The bot token you copied when [generating the telegram bot](./#generate-your-telegram-bot-token).
  * **Default Department**. Only the agents of this department can serve Telegram conversations.
  * **Service Unavailable Message:** The message sent to your customer when no agents are available online.
  * **Welcome Message:**  The message sent to customers when they send their first message.
  * **Conversation Finished Message:** The message sent to your customer when an agent closes the conversation.
  * **Agents Display Name:** You can display the agent's name or username.
  * **File Upload Enabled:** You can enable/disable file sharing.
  * **Accepted Media Types:**  Select the type of files that can be shared between the Agents and your Twitter Contacts.
* Click **Save Changes.**

{% hint style="info" %}
You will only receive messages if you have a department set up. Only the agents of that particular department can receive the chats.
{% endhint %}

## Uninstall Telegram App

To delete the Telegram app from your workspace,

* Go to **Administration > Apps > Installed.**
* Click th**e kebab menu** against the **Telegram app.**
* Select **Uninstall**.
* Click **Yes** to confirm the uninstallation.

{% hint style="warning" %}
To learn more about Telegram bots, see the official [Telegram Bots Guide.](https://core.telegram.org/bots#6-botfather)
{% endhint %}
