# Configure Whatsapp Cloud App

With the WhatsApp Cloud App installed on your public Rocket.Chat workspace and the Facebook Developer App Created for WhatsApp, you can now connect, edit and disconnect Whatsapp numbers.

## WhatsApp Cloud App Shortcuts

The WhatsApp Cloud app has a list of shortcuts to ease usage. Run the slash command `/whatsapp help` to see the list of shortcuts and their functions:

* **/whatsapp connect:** Connect a new WhatsApp number
* **/whatsapp numbers:** View and edit all connected WhatsApp number
* **/whatsapp support:** Get support information
* **/whatsapp help:** See the help menu

## Connect WhatsApp Number

{% hint style="success" %}
There is no limit to the number of WhatsApp numbers that can be linked to a Facebook app.
{% endhint %}

* Click on **Connect WhatsApp Number** from the first message sent by the `whatsapp-cloud.bot` or run the slash command `/whatsapp connect`
* Fill in the details of the new Whatsapp Number:
  * **PhoneNo Id**: The WhatsApp phone number ID you want to connect.
  * **WhatsApp Business Id**: The WhatsApp Business Account ID of the WhatsApp number to connect.
  * **Access Token**: The App's access token. It can be either temporary or permanent.
  * **Facebook App Secret**: The Facebook App's secrete. This secret is used to verify if the messages are sent from authorized WhatsApp servers.
  * **Welcome Message**: First message your customer will receive upon messaging you.
  * **Conversation Finished Message**: The message sent to your customer when an agent closes the conversation.
  * **Default message for offline service**: Message sent to your customer when no agents are available online.

### Setup Facebook App webhook URL

* After saving, you receive a message to configure the callback URL in your app.

{% hint style="info" %}
This is a one-time process.
{% endhint %}

* Go to the App created on your [Facebook Developer Console](https://developers.facebook.com/apps).
* Navigate to **WhatsApp** > **Configuration** and paste the callback URL and Verify Token provided by Rocket.Chat. Click **Verify and save.**
* From the configuration screen, click on **Manage** across the Webhook field.
* **Subscribe** to `messages` (v14.0 or higher). Now, click **Done.**

{% hint style="success" %}
After subscribing to the messages, the Rocket.Chat WhatsApp Cloud app is ready to use.
{% endhint %}

## Edit WhatsApp Cloud Number

To edit an already set WhatsApp number,

* Run the slash command `/whatsapp numbers`
* A list of connected numbers is displayed. Click on **Edit** across the number you wish to edit.
* Make the necessary changes and **Update.**

## Disconnect WhatsApp Number

To disconnect a WhatsApp number,

* Run the slash command `/whatsapp numbers`
* A list of connected numbers is displayed. Click on **Disconnect** across the number you wish to disconnect
* Confirm the prompt to **Disconnect.**
* You get a message notifying you about the disconnection
