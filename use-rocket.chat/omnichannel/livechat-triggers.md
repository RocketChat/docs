# Livechat Triggers

Omnichannel Livechat triggers are events you can set up. When these events occur, they make the Livechat widget take action or open automatically.

To access this menu, go to **Administration > Omnichannel > Livechat Triggers**. Here, you can **View**, **Create New**, **Edit**, or **Delete** existing Livechat Triggers.

## Create new Omnichannel Livechat trigger

To create a new Omnichannel Livechat trigger, click **Create trigger** and enter the following details:

* **Enable**: Enables the Livechat trigger.
* **Run only once for each visitor**: Select to have the trigger run once for each visitor. If false, you get a recurring pop-open. (For example, If your user goes to a different website and comes back to the same website, it pops open.)
* **Name**: Name your new trigger.
* **Description**: Set the description of the trigger.
* **Condition**: Select the condition for which the action will be triggered. Depending on what condition to track, you can set additional properties for validation.
  * **Visitor Page URL**: This setting lets you specify a regular expression (regex) describing the website page where you want the live chat widget trigger to occur. For instance, if your website is xyz.com and you wish for the trigger to occur only on a specific page (xyz.com/contact) and not on any other pages, select "**Visitor Page URL**" and enter the regex. In this scenario, the regex should be `.*/contact`_._ Alternatively, if you want the trigger action to occur on all your website pages, the regex should be `.*`.
  * **Visitor Time on Site**: The action occurs after the specified time in seconds once the customer visits your website.
  * **Chat Open by Visitor**: The action occurs when the customer/visitor opens a new chat.
  * **After Guest Registration**: The action occurs after a guest submits the Livechat registration form.
* **Action**: Define the action you want the Livechat widget to perform.  See [Livechat Trigger Actions](livechat-triggers.md#omnichannel-livechat-trigger-actions) for more details.
* **Sender**: Select the sender of the trigger action:
  * **Impersonate next agent from queue**: The next agent from the queue is impersonated as the sender.
  * **Custom agent**: Select the custom agent as the sender of the trigger action and message.
* **Message**: Enter a message for the trigger.

### Omnichannel Livechat Trigger Actions&#x20;

In the Livechat widget, trigger actions are carried out when the specified conditions are met. There are two primary trigger actions available:

**Send a Message**

When the trigger condition is satisfied, this action sends a predefined static message from the widget to the visitor. This setting prompts you to enter the **sender** and **message**. You can select if the sender should impersonate the next available agent in the queue or be a custom agent.

**Send a Message (External Service)** ![](../../.gitbook/assets/Premium.svg)

This option allows you to send personalized messages to visitors from the widget using external services like CRMs, bots and custom-built solutions to deliver a more engaging and relevant experience for each visitor.  You can send relevant metadata data of the visitor to the external service. The external service then uses this data to dynamically generate a personalized message, like a targeted offer, custom welcome greeting, or support based on past interactions.

It prompts you for the following details:

{% hint style="warning" %}
You must set a **Secret Token** in [webhooks.md](webhooks.md "mention") before using external service triggers.&#x20;
{% endhint %}

* **Sender**: You can also select if you want to impersonate the next available agent in the queue or use a custom agent.
* **External service URL:** The endpoint URL of the external service. Rocket.Chat sends a request to this endpoint with a payload of the visitor metadata in this format:

```json
{
    "visitorToken": "36b5316b579bd4a7ba55e6738f554a32c7fbe5621fcba842cd08aca2b7986d92",
    "metadata": [
        { "key": "name", "value": "Morgan" },
        { "key": "serviceId", "value" : "12345"}
    ]
  }

```

Rocket.Chat expects the response returned from the external service to include the trigger message in this JSON format:

```json
{
    "contents": [
        {
            "msg": "Welcome to our support center, Morgan! How can we assist you today?",
            "order": 0
        },
        {
            "msg": "Feel free to ask any questions you have. We're here to help!",
            "order": 1
        }
    ]
}
```

The `msg`  denotes the trigger message, while order represents the order in which the messages are displayed. The response must include at least one `msg`.&#x20;

* **Send Test:** Click this button to send a test request to the external service URL and confirm its success.
* **Timeout (in miliseconds)**: The time in milliseconds to wait for an external service to respond before canceling the request.
* **Fallback message:** Message to send after timeout ends.

## Edit Omnichannel Livechat trigger

To edit an Omnichannel Livechat trigger:

* Select the trigger from the list of triggers.
* A section is opened with all the current details of that trigger, which can be modified and saved.

## Delete Omnichannel Livechat trigger

To delete a trigger, click on the **delete** icon on the right-hand side of the trigger.
