# SlackBridge

SlackBridge allows you to mirror the messages received in a Slack channel or private group into Rocket.Chat in real-time. This means that if you send a message in a Rocket.Chat channel, the message will also be sent in the respective Slack channel, and vice versa. In this way, you can communicate across both platforms.

To enable it, you must create a custom bot in Slack and add it to the desired channels and private groups.

## Create a custom bot in Slack

1. Go to [Set up a bot user](https://my.slack.com/apps/A0F7YS25R-bots).
2. Click **Add Configuration**.
3. Pick a username for your bot and click **Add Bot Integration**.
4. Copy the API Token. You'll need it when setting up SlackBridge in Rocket.Chat.
5. Customize your bot the way you like it and click **Save Integration**.

## Enable SlackBridge in Rocket.Chat

1. Go to **Administration** > **Workspace** > **Settings** > **SlackBridge**.
2. Enable SlackBridge.
3. Add the API Token that you got from your custom bot configuration.
4. You can define values for other settings according to your requirements.
5. Once you are done, click **Save changes**.

You can now add the bot to the channels or private groups you want to mirror from.
