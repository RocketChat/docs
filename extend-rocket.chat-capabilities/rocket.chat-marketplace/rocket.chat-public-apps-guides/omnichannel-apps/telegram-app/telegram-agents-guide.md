# Telegram Agent's Guide

If you set up Telegram app integration and a user sends you a message on the connected Telegram bot,

* It appears in your Rocket.Chat workspace, just like any other Omnichannel conversation available for an [agent ](../../../../../use-rocket.chat/omnichannel/agents.md)to take it.
* You can respond to the customer from your workspace, who receives the response on Telegram.&#x20;
* You can also send and receive files during the conversation.

## Quick Replies

You can also use quick reply buttons to send or receive quick replies on telegram. This is useful and required for companies with a chatbot user serving Omnichannel conversations. You need to have a bot ([Dialogflow](../dialogflow-app/)/[RASA](../rasa-app.md)) configured before implementing bot quick replies.

* Navigate to **Administration > Workspace > Settings > Omnichannel > Routing.**
* Enable [**Assign new conversations to bot agent**](https://docs.rocket.chat/guides/administration/settings/omnichannel-admins-guide#routing). The routing system attempts to find a bot agent, if any exists, before addressing new conversations to a human agent.

![Quick repiles](<../../../../../.gitbook/assets/telegram quick replies .png>)
