---
description: Integration between Rocket.Chat and Salesforce CRM platform.
---

# Salesforce CRM Integration

## Configure Salesforce CRM&#x20;

* Create a private key and public key certificate with these commands:&#x20;

{% hint style="info" %}
Linux has OpenSSL by default to run these commands. However, you can choose your preferred method.
{% endhint %}

```
openssl genrsa -out privatekey.pem 1024

openssl req -new -x509 -key privatekey.pem -out publickey.cer -days 3650
```

&#x20;To view the keys you just created, run this command:

```
ls -lrt
```

* Retrieve and copy the private key using this command:

```
openssl rsa -in privatekey.pem -check
```

* Create a new connected app on Salesforce.
  * Fill in the name, email, and other required information.
  * Check the **Enable OAuth Settings** option.
  * Add your callback URL.
  * Check the **Use Digital signatures** option and upload the public key certificate _(publickey.cer)_ you created earlier.
  * For the **Selected OAuth scopes**, add the _**api refresh\_token offline\_access**_ option.&#x20;
  * Click **Save**.
* Click **Manage Consumer Key** and copy the **Consumer Key**.
* Navigate to **Settings > Apps > Manage Apps > Connected Apps.** From the list of connected apps, click the **Edit** action beside the app you created earlier.
  * Select **Admin approved users are pre-authorized** option for **Permitted Users** dropdown option.
  * Click **Save**.
* Navigate to **Settings > Users > Users** and confirm your user profile name.&#x20;
* Navigate to **Settings > Users > Profile.** From the list of profiles, click the **Edit** action beside your user's profile name. Alternatively, click the profile name, then hit the **Edit** button**.**&#x20;
  * Scroll to **Connected App Access** and select the checkbox of the app you created.
  * Click **Save**.

## Install Salesforce CRM Integration App

To install the Salesforce CRM Integration App,

* Go to **Administration > Apps > Marketplace.**
* Search for the **Salesforce CRM Integration** app.
* Click **Install** and accept the needed permissions.&#x20;

{% hint style="warning" %}
**You must have the** [**Omnichannel feature**](https://docs.rocket.chat/use-rocket.chat/omnichannel#enable-omnichannel) **enabled and have** [**agents**](https://docs.rocket.chat/use-rocket.chat/omnichannel/agents) **and** [**managers**](https://docs.rocket.chat/use-rocket.chat/omnichannel/managers) **assigned to receive and send Omnichannel messages.**
{% endhint %}

## Configure Salesforce CRM Integration App

To configure the Salesforce CRM Integration App,

* On the **Salesforce CRM Integration App Info** screen, navigate to **Settings.**
* Update the required fields:
  * **Consumer Key:** The consumer key from your Salesforce instance.
  * **Private Key:** The private key from your Salesforce instance.
  * **Salesforce Username**: Your salesforce username, it's useful for identification.
  * **Authentication URL**: Authentication URL for Salesforce Api. In the case of production, this should be [https://login.salesforce.com/services/oauth2/token](https://login.salesforce.com/services/oauth2/token) .&#x20;
  * **Audience for JWT**: In case of production, this should be [https://login.salesforce.com](https://login.salesforce.com/)
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
