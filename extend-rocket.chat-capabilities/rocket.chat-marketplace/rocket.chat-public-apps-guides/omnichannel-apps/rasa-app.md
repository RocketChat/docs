# Rasa App

Rasa is a framework for developing AI-powered, industrial-grade chatbots. It is an open-source alternative to the [Dialogflow](dialogflow-app/) app. With the Rasa Chatbot app, you can set up and train your chatbot to respond to any query it's been trained for and configure it to act as an Omnichannel agent.&#x20;

{% hint style="warning" %}
**You must enable the** [**Omnichannel**](../../../../use-rocket.chat/omnichannel/) **feature with** [**agents**](../../../../use-rocket.chat/omnichannel/agents.md) **and** [**managers**](../../../../use-rocket.chat/omnichannel/managers.md) **assigned to receive and send Omnichannel messages.**
{% endhint %}

## Install Rasa App

To install the Rasa App,

* Go to **Administration > Apps > Marketplace.**
* Search for the **Rasa** app.
* Click **Install** and accept the needed permissions.

## Configure Rasa App

To configure the **Rasa** app,

* On the **Rasa App Info** screen, navigate to **Settings.**
* Update the required fields:
  * **Bot Username:** Set the[ name of the bot you have already configured](broken-reference). This is the user who will assist with the conversations through Rasa integration.
  * **Rasa Server URL:** The server available in your Rasa instance.
  * **Service Unavailable Message:** A message sent to your customer if service is unavailable.
  * **Close Chat Message:** A message sent to your customer when a conversation is closed.
  * **Handover Message:** A message sent to a customer upon handover.
  * **Default Handover Department Name:** The target department name where you want to transfer the customer upon handover. ****&#x20;
  * **Enable Callbacks:** Enable callbacks to allow the app to use only callback messages. It is useful when you are using reminder messages in your RASA bot.
  * **Hide Quick Replies:** If enabled**,** all quick replies will hide when customers click on any of them.
* Click **Save Changes**.

## Uninstall Rasa App

To delete the Rasa app from your workspace,

* Go to **Administration > Apps > Installed.**
* Click th**e kebab menu** against the **Rasa** **app.**
* Select **Uninstall**.
* Click **Yes** to confirm the uninstallation.
