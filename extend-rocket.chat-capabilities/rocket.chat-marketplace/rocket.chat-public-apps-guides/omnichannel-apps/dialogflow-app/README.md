---
description: Integration between Rocket.Chat and Dialogflow .
---

# Dialogflow App

Dialogflow lets you easily add like-life conversational AI to your websites, applications, messaging platforms, and contact center with intuitive, advanced virtual agents.

Using Rocket.Chat and the Dialogflow Chatbot platform integration, you can set up and train your chatbot to respond to any query it's been trained for and configure it to act as an Omnichannel agent.

{% hint style="warning" %}
**You must enable the** [**Omnichannel**](../../../../../use-rocket.chat/omnichannel/) **feature with** [**agents**](../../../../../use-rocket.chat/omnichannel/agents.md) **and** [**managers**](../../../../../use-rocket.chat/omnichannel/managers.md) **assigned to receive and send Omnichannel messages.**
{% endhint %}

## Install Dialogflow  App

To install the Dialogflow App,

* Go to **Administration > Apps > Marketplace.**
* Search for the **** Dialogflow **** app.
* Click **Install** and accept the needed permissions.

{% hint style="info" %}
See the [official Dialogflow guide](https://cloud.google.com/dialogflow/es/docs/quick/setup) to learn how to set up Dialogflow.
{% endhint %}

## Bot User Configuration

To configure a bot user,

* Navigate to **Administration** > **Workspace** > **Users**.
* Search and select your bot agent named **Rocket Agent**.
* Click **Edit.**
* Ensure the _**Bot**_** ** and _**Live Chat Agent**_ role is assigned to this user.

&#x20;![](<../../../../../.gitbook/assets/rocket-agent-bot (1).png>)



## Configure Dialogflow App

* On the **Dialogflow App Info** screen, navigate to **Settings.**
* Update the required fields:
  * **Bot Username:** Set the[ name of the bot you have already configured](./#bot-user-configuration). This is the user who will assist with the conversations through Dialogflow integration.
  * **Project Id:** The project Id where the bot is set up.
  * **Environment:** The [environment](https://cloud.google.com/dialogflow/es/docs/agents-versions) where the bot is set up.
  * **Client Email:** The client email in your dialog flow instance.
  * **Private Key:** The private key in your dialog flow instance.
  * **Language:** Select the language you'd be interacting with the Bot.
  * **Fallback Responses Limit:** If the Omnichannel end-user asks something that the bot is not trained to answer and fails. **Fallback Responses Limit** defines how many failures of the conversation should be forwarded to a human agent.
  * **Target Department for Handover:** Select the department to transfer customers when there is a bot-to-live agent handover.
  * **Handover Message:** A message sent to the customer upon handover.
  * **Service Unavailable Message:** A message sent by the bot to the customer if service is unavailable.
  * **Close Chat Message:** A message sent automatically to the customer when a chat is closed.&#x20;
  * &#x20;**Hide Quick Replies:** If enabled, all quick replies will hide when customers click on any of them.
* Click **Save Changes**.

## Uninstall Dialogflow App

To delete the  app from your workspace,

* Go to **Administration > Apps > Installed.**
* Click th**e kebab menu** against the Dialogflow app**.**
* Select **Uninstall**.
* Click **Yes** to confirm the uninstallation.
