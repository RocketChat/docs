# SMS

External users can communicate with your Rocket.Chat workspace through SMS. This integration extends [Rocket.Chat's Omnichannel](../../../../use-rocket.chat/omnichannel/) capabilities. This is helpful for customers to contact your support team via SMS.

It offers the ability to configure SMS integration with several providers. However, this guide is focused on [Twilio ](https://www.twilio.com/)using [Twilio Programmable Messaging API](https://www.twilio.com/messaging).&#x20;

{% hint style="info" %}
You are required to have your workspace available on a public URL.
{% endhint %}

## Twilio Programmable Messaging Configuration

To relay SMS, you need to get a Twilio number and create a messaging service.

* Sign up or log in to your [Twilio](https://www.twilio.com/) account.
* From your Twilio console, navigate to **Messaging** > **Try it out** > **Get Set Up.**&#x20;
* Click **Start setup**, and follow the prompts to configure a Twilio messaging service.
* Fill in the service name and hit **Create Messaging Service.**
* Twilio will automatically provision a number for you, so click  **Provision and add this number.**

{% hint style="success" %}
With the configuration complete, you can send an SMS to ensure the number works.
{% endhint %}

## Twilio SMS and Rocket.Chat Webhook

After configuring your Twilio number for messaging, the next step is to link it to Rocket.Chat through an Omnichannel webhook [endpoint](https://developer.rocket.chat/reference/api/rest-api/endpoints/omnichannel/omnichannel-endpoints/sms-incoming-twilio).

* From your [Twilio console](https://console.twilio.com/), navigate to **Phone Numbers** > **Manage** > **Active numbers.** You will see your Twilio provisioned number and the messaging service it is linked to
* Click on the number to open its configuration page.
* Navigate to **Messaging Configuration**. Update the **Webhook URL** value for "_**A message comes in**_" with the URL of your publicly available Rocket.Chat workspace in this format `https://<SERVER_URL>/api/v1/livechat/sms-incoming/twilio` . Then, click **Save.**

{% hint style="info" %}
Ensure the action type selected above is _`Webhook`_ and the method is _`HTTP POST.`_
{% endhint %}

## Rocket.Chat Twilio SMS Setting

To connect your Twilio Programmable Messaging number to your Rocket.Chat workspace,

* Navigate to **Administration** > **Workspace** > **Settings** > **SMS** on your workspace.
* Enable it and select Twilio as the **service.**
* Update the Account SID and Account Token from the T [Twilio console](https://console.twilio.com/) in the Twilio tab. Click **Save Changes**.

## Test Rocket.Chat SMS Messaging

We have configured a Twilio Programmable Messaging number and linked it with Rocket.Chat through a webhook.&#x20;

To test the two-way communication between Rocket.Chat and SMS,

* Open any SMS messaging app on your phone and send a message to your [Twilio active number](https://console.twilio.com/us1/develop/phone-numbers).
* The message is received on your Rocket.Chat workspace and available for any [Omnichannel Agent](../../../../use-rocket.chat/omnichannel/agents.md) to continue the conversation.
* Similarly, when a reply is sent from Rocket.Chat, the sender receives it via SMS.

{% hint style="info" %}
The green message icon on the side identifies external SMS messages sent to an Omnichannel department.
{% endhint %}
