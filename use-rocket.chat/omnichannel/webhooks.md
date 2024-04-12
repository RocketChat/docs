# Webhooks

Omnichannel webhooks allow you to integrate the Rocket.Chat Omnichannel to any third-party system, e.g., CRM, Zoho, etc.

To access **Webhooks** settings, go to **Administration** > **Workspace** > **Omnichannel** > [**CRM Integration**](https://docs.rocket.chat/use-rocket.chat/workspace-administration/settings/omnichannel-admins-guide#crm-integration).

## Create Omnichannel Webhook

To create a new **Omnichannel** webhook, go to **Omnichannel** > **Webhooks**.

* **Webhook URL**: The Webhook URL from the system you want to connect (destination).
* **Secret Token**: Enter the secret token that can be used to verify the webhook.

{% hint style="info" %}
The field **Secret Token** is sent to a header `X-RocketChat-Livechat-Token` so you can validate if the request became from Livechat.

If your endpoint returns a response status other than `200`, Rocket.Chat will retry ten times, waiting ten seconds between retries.
{% endhint %}

* **Send Request on**: Select the action(s) you want this integration to have.
* **HTTP timeout (in milliseconds)**: Enter the request timeout value.
* Click Save.&#x20;

You can also **Reset** the values and **Send Test** for the Webhook setup.

### Sample JSON Data

Here is an example of JSON data sent in the request.

{% tabs %}
{% tab title="Livechat session" %}
```json
{
  "_id": "Tc5SyBZHovD4k8BXv",
  "label": "James",
  "createdAt": "2023-02-02T10:16:07.230Z",
  "lastMessageAt": "2023-02-02T10:22:14.087Z",
  "tags": [
    "self"
  ],
  "visitor": {
    "_id": "63db8d4990fe6eda42ad429a",
    "token": "e36e352c742eee48860d576fcefb372afc44ebc95750fa1e3b646195f702341a",
    "name": "James",
    "username": "guest-3",
    "email": [
      {
        "address": "abc.xyz+local-on@rocket.chat"
      }
    ],
    "phone": null
  },
  "agent": {
    "_id": "aXjjcPwq4Pcp7xftH",
    "username": "user1",
    "name": "User One",
    "email": "uaser1@mail.com"
  },
  "type": "LivechatSession",
  "messages": [
    {
      "u": {
        "_id": "63db8d4990fe6eda42ad429a",
        "username": "guest-3",
        "name": "James"
      },
      "_id": "2untSdndqBP7opGWw",
      "username": "guest-3",
      "msg": "Hi",
      "ts": "2023-02-02T10:16:09.615Z"
    },
    {
      "u": {
        "_id": "aXjjcPwq4Pcp7xftH",
        "username": "user1",
        "name": "User One"
      },
      "_id": "7xjkw8ZFitMSNGmeJ",
      "username": "user1",
      "msg": "How can I help you today?",
      "ts": "2023-02-02T10:21:05.391Z",
      "agentId": "aXjjcPwq4Pcp7xftH"
    },
    {
      "u": {
        "_id": "63db8d4990fe6eda42ad429a",
        "username": "guest-3",
        "name": "James"
      },
      "_id": "y7p77YFfkHJeg5gD9",
      "username": "guest-3",
      "msg": "don't worry,thank you",
      "ts": "2023-02-02T10:22:14.087Z"
    },
    {
      "u": {
        "_id": "aXjjcPwq4Pcp7xftH",
        "username": "user1",
        "name": "User One"
      },
      "_id": "ciAggDuN8ioqDrTby",
      "username": "user1",
      "msg": "Thank you for visiting",
      "ts": "2023-02-02T10:23:11.437Z",
      "agentId": "aXjjcPwq4Pcp7xftH",
      "closingMessage": true
    }
  ],
  "servedBy": {
    "_id": "aXjjcPwq4Pcp7xftH",
    "username": "user1",
    "ts": "2023-02-02T10:16:07.375Z"
  },
  "closedAt": "2023-02-02T10:23:11.344Z",
  "closedBy": {
    "_id": "aXjjcPwq4Pcp7xftH",
    "username": "user1"
  },
  "closer": "user"
}
```
{% endtab %}

{% tab title="Message sent" %}
```json
{
  "_id": "Tc5SyBZHovD4k8BXv",
  "label": "James",
  "createdAt": "2023-02-02T10:16:07.230Z",
  "lastMessageAt": "2023-02-02T10:16:09.615Z",
  "visitor": {
    "_id": "63db8d4990fe6eda42ad429a",
    "token": "e36e352c742eee48860d576fcefb372afc44ebc95750fa1e3b646195f702341a",
    "name": "James",
    "username": "guest-3",
    "email": [
      {
        "address": "abc.xyz+local-on@rocket.chat"
      }
    ],
    "phone": null
  },
  "agent": {
    "_id": "aXjjcPwq4Pcp7xftH",
    "username": "user1",
    "name": "User One",
    "email": "uaser1@mail.com"
  },
  "type": "Message",
  "messages": [
    {
      "u": {
        "_id": "aXjjcPwq4Pcp7xftH",
        "username": "user1",
        "name": "User One"
      },
      "_id": "7xjkw8ZFitMSNGmeJ",
      "username": "user1",
      "msg": "How can I help you today?",
      "ts": "2023-02-02T10:21:05.391Z",
      "agentId": "aXjjcPwq4Pcp7xftH"
    }
  ]
}
```
{% endtab %}
{% endtabs %}
