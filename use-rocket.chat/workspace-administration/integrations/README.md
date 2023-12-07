---
description: Integrate tools and services to ease everyday workflows.
---

# Integrations

Rocket.Chat supports webhooks to integrate tools and services you like into the platform. Webhooks are simple event notifications via HTTP POST. This way, any webhook application can post a message to a Rocket.Chat instance and much more.

With scripts, you can point any webhook to Rocket.Chat and process the requests to print customized messages, define the username and avatar of the user of the messages and change the channel for sending messages, or you can cancel the request to prevent undesired messages.

## **Available integrations**

* **Incoming Webhook**: Let an external service send a request to Rocket.Chat to be processed.
* **Outgoing Webhook**: Let Rocket.Chat trigger and optionally send a request to an external service and process the response.

By default, a webhook is designed to post messages only. The _message_ is part of a JSON structure, which has the same format as that of a [Rocket.Chat message](https://app.gitbook.com/s/-MWf1K8RJU-TjNEtPxvb/reference/api/rest-api/endpoints/messaging/chat-endpoints/postmessage#message-object-example).

{% hint style="info" %}
If you would like more power and control over various features of Rocket.Chat, aside from sending and receiving messages, take a look at [Rocket.Chat Apps.](https://rocket.chat/marketplace#apps)
{% endhint %}

### Incoming webhook script

ES2015 / ECMAScript 6 scripts can handle Webhooks to process the request, print customized messages, or cancel the request to prevent undesired messages.

#### **Create a new incoming webhook**

To create a new incoming webhook:

* Navigate to **Administration** > **Workspace** > **Integrations.**
* Click +**New** at the top right corner.
* Switch to the **Incoming** tab**.**
* Turn on the **Enabled** toggle.
* **Name:** Enter a name for your webhook. The name is optional; however, providing a name to manage your integrations easily is advisable.
* **Post to Channel**: Select the channel (or user) where you prefer to receive the alerts. It is possible to override messages.
* **Post as**: Choose the username that this integration posts as. The user must already exist.
* **Alias**: Optionally enter a nickname that appears before the username in messages.
* **Avatar URL**: Enter a link to an image as the avatar URL if you have one. The avatar URL overrides the default avatar.
* **Emoji**: Enter an emoji optionally to use the emoji as the avatar. Check the emoji cheat sheet [here](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md).
* Turn on the **Script Enabled** toggle.
* Paste your script inside the **Script** field.&#x20;
* Save the integration.
* Use the generated **Webhook URL** to post messages to Rocket.Chat.

### Script details

The Rocket.Chat integration script should be written in ES2015 / ECMAScript 6. The script requires a global class named **Script**, which is instantiated only once during the first execution and kept in memory. This class contains a method called _**process\_incoming\_request**_, which is called by your server each time it receives a new request. The _process\_incoming\_request_ method takes an object as a parameter with the request property and returns an object with a content property containing a valid Rocket.Chat message, or an object with an error property, which is returned as the response to the request in JSON format with a Code 400 status.

A valid Rocket.Chat message must contain a text field that serves as the body of the message. If you redirect the message to a channel other than the one indicated by the webhook token, yyou can specify a channel field that accepts `room id` or, if prefixed with `"#"` or "`@`", channel name or user, respectively.

You can use the console methods to log information to help debug your script. More information about the console can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/log). To view the logs, navigate to **Administration** > **Workspace** > **View Logs**.

```javascript
/* exported Script */
/* globals console, _, s */

/** Global Helpers
 *
 * console - A normal console instance
 * _       - An underscore instance
 * s       - An underscore string instance
 */

class Script {
  /**
   * @params {object} request
   */
  process_incoming_request({ request }) {
    // request.url.hash
    // request.url.search
    // request.url.query
    // request.url.pathname
    // request.url.path
    // request.url_raw
    // request.url_params
    // request.headers
    // request.user._id
    // request.user.name
    // request.user.username
    // request.content_raw
    // request.content

    // console is a global helper to improve debug
    console.log(request.content);

    return {
      content:{
        text: request.content.text
        // "attachments": [{
        //   "color": "#FF0000",
        //   "author_name": "Rocket.Cat",
        //   "author_link": "https://open.rocket.chat/direct/rocket.cat",
        //   "author_icon": "https://open.rocket.chat/avatar/rocket.cat.jpg",
        //   "title": "Rocket.Chat",
        //   "title_link": "https://rocket.chat",
        //   "text": "Rocket.Chat, the best open source chat",
        //   "fields": [{
        //     "title": "Priority",
        //     "value": "High",
        //     "short": false
        //   }],
        //   "image_url": "https://rocket.chat/images/mockup.png",
        //   "thumb_url": "https://rocket.chat/images/mockup.png"
        // }]
       }
    };

    // return {
    //   error: {
    //     success: false,
    //     message: 'Error example'
    //   }
    // };
  }
}
```

To test if your integration works, use [curl ](https://curl.se/)to make a POST request to the generated webhook URL.

```clike
curl -X POST \
  -H 'Content-Type: application/json' \
  --data '{
      "emoji": ":smirk:",
      "text": "Example message",
      "attachments": [
          {
              "title": "Rocket.Chat",
              "title_link": "https://rocket.chat",
              "text": "Rocket.Chat, the best open source chat",
              "image_url": "link-to-an-image",
              "color": "#764FA5"
          }
      ]
  }' \
  https://your-webhook-url
```

### Outgoing webhook script

You can utilize scripts to process all messages from a channel and modify how Rocket.Chat creates or cancels the request. You have the option to either cancel the request and return a message or take no action. Additionally, you can create another request within the script using the HTTP global helper. When a response is received from the request, it executes the script, calling another method that allows you to process the response, similar to incoming webhooks. To create a new outgoing webhook, follow these steps.

#### Create a new outgoing webhook

To create a new outgoing webhook:

* Navigate to **Administration** > **Workspace** > **Integrations.**
* Click +**New** in the top right corner.
* Switch to the **Outgoing** tab**.**
* **Event Trigger**: Select the type of event that triggers this outgoing webhook integration.
* Turn on the **Enabled** toggle.
* **Name**: Enter a name for your webhook.
* **Channel**: Enter the channel to listen to.
* **Trigger Words**: If your event trigger is **Message Sent**, enter the words that should trigger this webhook separated by commas.
* Enter the URL called for each request in the **URLs** field. You can modify this URL inside the script.
* **Post as**: Enter the username that this integration posts as. This field is optional.
* **Alias**: Enter a nickname that appears before the username in messages.
* **Avatar URL**: Optionally enter an image URL as the avatar for each message the webhook posts.
* **Emoji**: Optionally enter an emoji to use as an avatar.
* **Token**: Enter a token that is used to verify authorized webhook calls. The token is optional but essential to avoid cross-site request forgery (CSRF) or replay attacks.
* Turn on **Script Enabled.**
* Paste your script inside the **Script** field.
* Save your integration.

### Script details

The script should be in ES2015 / ECMAScript 6. The script expects a global class called **Script**. This class is instantiated once, only on the first execution, and kept in memory. The class has a method called **prepare\_outgoing\_request**, called in the configured channel for the event triggers:

* **Message Sent**: Called in the configured channel when the message starts with any **Trigger Words.**
* **File Uploaded**: Called when any file is uploaded in the configured channel.
* **Room Archived**: Called when a room is archived.
* **Room Created**: Called when a room is created.
* **User Joined Room**: Called when a user joins the channel.

The **prepare\_outgoing\_request** method returns an object with at least _url_ and _method_ properties. You can also change the request object and replace it. It is possible to return nothing and cancel the request or return a message.

The Script class has another method named process\_outgoing\_response. The method **process\_outgoing\_response** is called for every request response, with an object as a parameter containing the _request_ property, that is, the object you returned in the previous method and a response property. The process\_outgoing\_response method can return nothing to proceed with the default processing, return false to stop it, or an object with the content property that contains a valid Rocket.Chat message.

The example script sends commands such as issues, comments, and pull requests to GitHub.

````javascript
/* exported Script */
/* globals console, _, s, HTTP */

/** Global Helpers
 *
 * console - A standard console instance
 * _       - An underscore instance
 * s       - An underscore string instance
 * HTTP    - The Meteor HTTP object to do sync http calls
 */

class Script {
  /**
   * @params {object} request
   */
  prepare_outgoing_request({ request }) {
    // request.params            {object}
    // request.method            {string}
    // request.url               {string}
    // request.auth              {string}
    // request.headers           {object}
    // request.data.token        {string}
    // request.data.channel_id   {string}
    // request.data.channel_name {string}
    // request.data.timestamp    {date}
    // request.data.user_id      {string}
    // request.data.user_name    {string}
    // request.data.text         {string}
    // request.data.trigger_word {string}

    let match;

    // Change the URL and method of the request
    match = request.data.text.match(/^pr\s(ls|list)/);
    if (match) {
      return {
        url: request.url + '/pulls',
        headers: request.headers,
        method: 'GET'
      };
    }

    // Prevent the request and return a new message
    match = request.data.text.match(/^help$/);
    if (match) {
      return {
        message: {
          text: [
            '**commands**',
            '```',
              '  pr ls [open|closed|all]  List Pull Requests',
            '```'
          ].join('\n')
          // "channel": "#name-of-channel",
          // "attachments": [{
          //   "color": "#FF0000",
          //   "author_name": "Rocket.Cat",
          //   "author_link": "https://open.rocket.chat/direct/rocket.cat",
          //   "author_icon": "https://open.rocket.chat/avatar/rocket.cat.jpg",
          //   "title": "Rocket.Chat",
          //   "title_link": "https://rocket.chat",
          //   "text": "Rocket.Chat, the best open source chat",
          //   "fields": [{
          //     "title": "Priority",
          //     "value": "High",
          //     "short": false
          //   }],
          //   "image_url": "https://rocket.chat/images/mockup.png",
          //   "thumb_url": "https://rocket.chat/images/mockup.png"
          // }]
        }
      };
    }
  }

  /**
   * @params {object} request, response
   */
  process_outgoing_response({ request, response }) {
    // request              {object} - the object returned by prepare_outgoing_request

    // response.error       {object}
    // response.status_code {integer}
    // response.content     {object}
    // response.content_raw {string/object}
    // response.headers     {object}

    var text = [];
    response.content.forEach(function(pr) {
      text.push('> '+pr.state+' [#'+pr.number+']('+pr.html_url+') - '+pr.title);
    });

    // Return false will abort the response
    // return false;

    // Return empty will proceed with the default response process
    // return;

    return {
      content: {
        text: text.join('\n'),
        parseUrls: false
        // "attachments": [{
        //   "color": "#FF0000",
        //   "author_name": "Rocket.Cat",
        //   "author_link": "https://open.rocket.chat/direct/rocket.cat",
        //   "author_icon": "https://open.rocket.chat/avatar/rocket.cat.jpg",
        //   "title": "Rocket.Chat",
        //   "title_link": "https://rocket.chat",
        //   "text": "Rocket.Chat, the best open source chat",
        //   "fields": [{
        //     "title": "Priority",
        //     "value": "High",
        //     "short": false
        //   }],
        //   "image_url": "https://rocket.chat/images/mockup.png",
        //   "thumb_url": "https://rocket.chat/images/mockup.png"
        // }]
      }
    };
  }
}
````

## Integration Pattern&#x20;

<details>

<summary>Pattern for Incoming Webhooks</summary>

For incoming webhooks, you notify Rocket.Chat from another platform through webhooks, and the pattern is as follows:

1. Create an incoming webhook on Rocket.Chat.
2. Understand the structure of data of the sending platform. Most platforms return data in the form of JSON. Know the structure of data that is sent to your webhook.
3. Construct a Rocket.Chat message: Using the data returned by the third-party platform, construct a Rocket.Chat message using the returned data's attributes. The payload of the message is in this structure.

</details>

<details>

<summary>Pattern for Outgoing Webhooks</summary>

For outgoing webhooks, you notify a third-party platform about events occurring on your Rocket.Chat workspace and the pattern is as follows:

1. Generate a webhook on a third-party platform, such as Slack.
2. Create an outgoing webhook and replace the URLs field with the generated webhook URL.
3. Understand the structure of the data that the third-party platform expects, so as to construct this data from Rocket.Chat's message.
4. Construct the data expected by the third-party platform.

The data manipulation is done in the webhook's Script class.

</details>
