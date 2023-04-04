# Sentry

Add Sentry notifications via a new WebHook in Rocket.Chat This script works for the sentry.com and self-hosted versions.

1. Follow all instructions for creating an i[ncoming webhook](./#incoming-webhook-script).
2. Login to your project on Sentry and go to **Settings** > **Developer Settings** > **Create New Integration > Internal Integration > Next.**
3. Give your integration a name, copy the webhook URL generated, and paste it into the **Webhook URL** field.
4. Turn on **Alert Action Rule**. This is important so that your incoming webhook URL is notified when there is an event on Sentry.
5. Enter appropriate values for the Permissions section and select the types of events to notify your incoming webhook.
6. Click **Save Changes**.
7. Clone Sentry's [example project](https://github.com/getsentry/integration-platform-example) and follow the instructions in the repository to run the backend and frontend to test and trigger different event types.

The script below gets different attributes of a Sentry event and sends it as a message to your configured channel when creating the webhook.

```javascript
class Script {

  process_incoming_request({request}) {
    // console is a global helper to improve debug
    // console.log(request.content);

    return {
      content: {
        text: "Error in project *" + request.content.project + "\n*Message:* " +
          request.content.message + "\n*Culprit:* " + request.content.culprit
      }
    };
  }
}

```

Use the `console.log(request.content)` line to debug the JSON content posted by Sentry.
