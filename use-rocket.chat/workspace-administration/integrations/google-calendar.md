# Google Calendar

This integration uses Rocket.Chat incoming webhook. With this integration, you get your event notifications right into Rocket.Chat.

## Prerequisites

1. A Google Cloud Platform project with the Google Calendar API enabled. To create a project and enable an API, refer to [Create a project and enable the API](https://developers.google.com/workspace/guides/create-project).
2. Prepare authorization credentials for a desktop application. To learn how to create credentials for a desktop application, refer to [Create credentials](https://developers.google.com/workspace/guides/create-credentials#desktop) (make sure you download the JSON file).
3. Have a [Channel](../../user-guides/rooms/channels/) for the event messages to be posted.

{% hint style="info" %}
You can simply install and use the [Rocket.Chat Google Calendar app](../../../extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/google-calendar/) on your workspace instead of manually configuring the integration.
{% endhint %}

## Prepare Incoming Webhook

1. Go to **Administration > Workspace > Integration**.
2. Click **+New** **> Incoming**.
3. Turn on **Enabled**.
4. Enter a name for the integration.
5. Enter the channel name where the integration messages are to be posted in the **Post to Channel** field.
6. Enter an existing username the integration uses to post as that user in the **Post as** field.
7. Optionally enter an alias that appears before the username in the **Alias** field.
8. Enter an image URL to use as the avatar for this integration in the **Avatar URL** field if you have one.
9. Optionally enter an emoji to use as the avatar instead in the **Emoj**i field.
10. Turn on **Script Enabled**.
11. Copy and paste the contents of [script.js](https://github.com/debdutdeb/rocketchat-google-calendar/blob/main/script.js) in the Script field.
12. Scroll to the bottom of the screen and click **Save**.
13. The webhook URL is generated upon saving successfully saving the integration in the **Webhook URL** field.

## Run Integration Program

The integration program runs on a server, periodically grabs the event data from your calendar, and sends that data to your Rocket.Chat server to be processed and sent to the channel you set up in the previous section.

To install the integration program:

1. &#x20;Install the [go binary](https://golang.org/doc/install) and then run the `go get github.com/debdutdeb/rocketchat-google-calendar` command in your terminal.
2. Edit your `bashrc`, `zshrc` or `fish` config and add `$(go env GOPATH)/bin` to your `PATH`. This way you won't have to specify the whole path to the command every time. Use the help option to learn all the command line options and modify its execution process - `rocketchat-google-calendar -h`. Running the command gives an output that looks like this:

```
Usage of ./rocketchat-google-calendar:
  -calendars string
        List of calendar IDs, separated by commas. (default "primary")
  -credentials string
        Enter path to the credentials file. (default "credentials.json")
  -eventin string
        The upper limit of upcoming event start time. Lower bound is the moment of API access. (default "30m")
  -waitfor string
        Time to wait before attempting a POST to Rocket.Chat webhook. (default "5m")
  -webhook string
        Enter the webhook url you got from Rocket.Chat.
```

3. Enter the appropriate values for the respective options. The full command should be like this:

```
rocketchat-google-calendar \
-webhook https://the-incoming-webhook-url \ 
-calendars primary \
-credentials /full/path/to/cedentials.json \
-waitfor 5m -eventin 30m

```

4. Click the link which prompts you to authorize the app to use your Google account.
5. Once you get the token, please copy and paste it on the terminal and hit enter.

Your integration is now running.

## Notifying Once Every Day

The example command above fetches the event data from the Google servers every 5 minutes. You can change that behavior however you like.

One everyday use case is to be notified about all the meetings/events daily in the morning. You can achieve this by combining the two flags `-eventin` and `-waitfor`.

Use `24h` for both of those options. This way, the integration program fetches data every 24 hours, lists the events that will occur in those 24 hours, and sends them to your configured channel.
