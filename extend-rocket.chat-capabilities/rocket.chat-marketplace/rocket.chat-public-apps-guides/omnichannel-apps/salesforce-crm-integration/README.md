---
description: Integration between Rocket.Chat and Salesforce CRM platform.
---

# Salesforce CRM Integration

## Install Salesforce CRM Integration App

To install the Salesforce CRM Integration App,

* Go to **Administration > Apps > Marketplace.**
* Search for the **Salesforce CRM Integration** app.
* Click **Install** and accept the needed permissions.&#x20;

{% hint style="warning" %}
**You must enable the** [**Omnichannel**](../../../../../use-rocket.chat/omnichannel/) **feature with** [**agents**](../../../../../use-rocket.chat/omnichannel/agents.md) **and** [**managers**](../../../../../use-rocket.chat/omnichannel/managers.md) **assigned to receive and send Omnichannel messages.**
{% endhint %}

## Configure Salesforce CRM Integration App

To configure the Salesforce CRM Integration App,

* On the **Salesforce CRM Integration App Info** screen, navigate to **Settings.**
* Update the required fields:
  * **Consumer Key:** The consumer key from your Salesforce instance.
  * **Private Key:** The private key from your Salesforce instance.
  * **Salesforce Username**: The salesforce username, it's useful for identification.
  * **Display Contact information when assigning the agent to the chat**: If enabled, Salesforce contact information will be displayed to agents when assigned to chats.
  * **Auto-Save/Update Contacts when a Chat Ends**: If enabled, the app will auto-save/update the customers' info on Salesforce once an agent closes the chat.
  * **Metadata Refresh Interval(in Minutes)**: The duration within which the app will automatically refresh its cache. For a better user experience, the app will cache some meta-data information from Salesforce.
  * **Salesforce Session Timeout(in Minutes)**: It should be the same as the **Session Timeout** setting on your Salesforce Setting ( **Setup** > **Session Settings** > **Session Timeout** > **Timeout Value** ).
* Click **Save Changes.**

## Salesforce CRM Integration App Shortcuts

The Salesforce CRM Integration lists shortcuts to ease usage during Omnichannel conversations.&#x20;

* **`/salesforce contact`** : View Contact information.
* **`/salesforce create-contact`** : Create a new contact.
* **`/salesforce cases`** : View All Contact cases.
* **`/salesforce create-case`** : Create a new case.
* **`/salesforce case 123`** : View information about a specific Case using the Case Number.
* **`/salesforce help`** : Shows help message.

## Uninstall Salesforce CRM Integration App

To delete the Salesforce CRM Integration app from your workspace,

* Go to **Administration > Apps > Installed.**
* Click th**e kebab menu** against the **Salesforce CRM Integration** app**.**
* Select **Uninstall**.
* Click **Yes** to confirm the uninstallation.
