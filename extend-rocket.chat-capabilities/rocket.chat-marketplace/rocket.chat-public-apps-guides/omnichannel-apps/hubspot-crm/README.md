---
description: Integration between Rocket.Chat and HubSpot CRM
---

# HubSpot CRM

You can add HubSpot CRM to your Rocket.Chat account to manage the contacts and receive HubSpot ticket notifications in Rocket.Chat. Once Rocket.Chat integrated into HubSpot, the HubSpot bot is added as a user to your workspace.

{% hint style="warning" %}
**You must have the** [**Omnichannel feature**](https://docs.rocket.chat/use-rocket.chat/omnichannel#enable-omnichannel) **enabled and have** [**agents**](https://docs.rocket.chat/use-rocket.chat/omnichannel/agents) **and** [**managers**](https://docs.rocket.chat/use-rocket.chat/omnichannel/managers) **assigned to receive and send Omnichannel messages.**
{% endhint %}

## Install HubSpot CRM App

To install the HubSpot CRM App,

* Go to **Administration > Apps > Marketplace.**
* Search for the **HubSpot CRM** app.
* Click **Install** and accept the needed permissions.&#x20;

{% hint style="info" %}
**Migrate an API key integration to a private app**: If you've built a Rocket.Chat and HubSpot CRM integration that uses a [HubSpot API key](https://knowledge.hubspot.com/integrations/how-do-i-get-my-hubspot-api-key), you need to complete the migration to your[ private app](https://developers.hubspot.com/docs/api/private-apps), remove all references to the HubSpot API key from your code, and follow the next steps to use your private app's access token.
{% endhint %}

## Create a new private app

This secure method allows you to use HubSpot's APIs to access specific data from your account. You can authorize what each private app can request or change in your account, generating an access token unique to your app.

* In your [**HubSpot**](https://app.hubspot.com/signup-hubspot/developers?hubs\_signup-url=developers.hubspot.com%2Fget-started\&hubs\_signup-cta=developers-getstarted-app\&uuid=5eb23338-41e6-4d2f-8840-9143ae580b22\&step=landing\_page) account, navigate to **Settings > Account Setup > Integrations > Private Apps**.
* Click **Create private app**.
* On the _**Basic Info**_ tab, update the **name**, **upload icon,** and **description** of your app.
* Click the **Scopes** tab. Search and select the **Read** or **Write** checkbox for each scope you want your private app to access. The image below highlights the scopes you should add:

![Scopes](../../../../../.gitbook/assets/PrivateAppScopes.png)

* After configuring your app, click **Create app**.
* Review the information about your app's access token in the dialog box, then click **Continue creating**.
* Once you have created your app, copy the access token. You can start making API calls using the app's access token.

## Configure HubSpot CRM App

**Migrated an API Key integration to a Private app**: Private apps enable you a powerful, secure way to make API calls to your HubSpot account.

To configure the HubSpot CRM App,

* On the **HubSpot CRM App** **Info** screen, navigate to **Settings.**
* Update the required fields:
  * **API key**: Enter the API key or private app's access token to allow access to your HubSpot account information.
  * Enable the option to display contact information when assigning the agent to the chat.
  * Enable/disable the option to ignore archived objects.
* Click **Save Changes**.

## Uninstall HubSpot CRM Integration App

To delete the HubSpot CRM Integration app from your workspace,

* Go to **Administration > Apps > Installed.**
* Click th**e kebab menu** against the **HubSpot CRM Integration** app**.**
* Select **Uninstall**.
* Click **Yes** to confirm the uninstallation.
