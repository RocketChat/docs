# SMS

External users can communicate with your Rocket.Chat workspace through SMS. This integration extends Rocket.Chat's Omnichannel capabilities. This is helpful for customers to contact your support team via SMS.

It offers the ability to configure SMS integration with several providers. However, this guide is focused on [Twilio ](https://www.twilio.com/)using [Twilio Programmable Messaging API](https://www.twilio.com/messaging).&#x20;

{% hint style="info" %}
Your workspace must be available on a public URL.
{% endhint %}

## Twilio Programmable Messaging Configuration

To relay SMS, you need to get a Twilio number and create a messaging service. To do this, follow these steps:

1. Sign up or log in to your [Twilio](https://www.twilio.com/) account.
2. From the messaging section, Twilio will automatically provision a number for you.&#x20;
3. You can send test messages from the Twilio console to ensure the number works.

## Twilio SMS and Rocket.Chat Webhook

After configuring your Twilio number for messaging, the next step is to link it to Rocket.Chat through the Omnichannel webhook [endpoint](https://developer.rocket.chat/reference/api/rest-api/endpoints/omnichannel/omnichannel-endpoints/sms-incoming-twilio).

1. From your Twilio console, go to **Phone Numbers** > **Manage** > **Active numbers.** You will see your Twilio provisioned number and the messaging service it is linked to.
2. Click on the number to open its configuration page.
3. Go to **Messaging Configuration**. Update the **Webhook URL** value for **A message comes in** with the URL of your publicly available Rocket.Chat workspace in this format `https://<SERVER_URL>/api/v1/livechat/sms-incoming/twilio` .&#x20;
4. Then, click **Save.**

{% hint style="info" %}
Ensure the action type selected above is `Webhook` and the method is `HTTP POST`_`.`_
{% endhint %}

## Rocket.Chat Twilio SMS Setting

To connect your Twilio account to your Rocket.Chat workspace, follow these steps:

1. Go to **Administration** > **Workspace** > **Settings** > **SMS** on your workspace.
2. Enable it and select the **Service** as `Twilio`.
3. On the same page, go to the **Twilio** tab. Enter the **Account SID** and **Auth Token** values from your Twilio console.
4. Enable or disable the **File Uploads Enabled** option. If enabled, you can enter the **Accepted Media Types** as comma-separated values. For example, `image/,audio/,video/,text/,application/pdf`. Leave it blank to accept all media types.
5. Click **Save Changes**.

## Test Rocket.Chat SMS Messaging

We have configured a Twilio Programmable Messaging number and linked it with Rocket.Chat through a webhook.&#x20;

To test the two-way communication between Rocket.Chat and SMS, follow these steps:

1. Open any SMS messaging app on your phone and send a message to your Twilio active number.
2. The message is received on your Rocket.Chat workspace and available for any Omnichannel agent to continue the conversation.
3. When a reply is sent from Rocket.Chat, the sender receives it via SMS.

{% hint style="info" %}
The green message icon ![](<../../../../.gitbook/assets/image (693).png>) on the side identifies external SMS messages sent to an Omnichannel department.
{% endhint %}
