# WhatsApp Cloud App

The Rocket.Chat WhatsApp Cloud App provides direct communication between Rocket.Chat and WhatsApp using the WhatsApp Cloud API without needing third-party services like 360Dialog. Your Rocket.Chat workspace is linked through a [Facebook Developer app](https://developers.facebook.com/apps) with the WhatsApp setup.

## Install Whatsapp Cloud App

### Prerequisites

* It is required to have your workspace on a secured, publicly available domain.
* You need a Meta developer's account to get the WhatsApp API credentials.
  * Make available a Facebook Business account to link with.
* Your workspace must be registered on Rocket.Chat Cloud.

To install the WhatsApp Cloud Rocket.Chat App,

* Go to **Administration > Apps > Marketplace.**
* Search for the **WhatsApp Cloud** app.
* Click **Install** and accept the needed permissions. You receive a message from `whatsapp-cloud.bot` in the `#omnichannel-whatsapp-cloud-setup` channel with setup instructions.

## Set up Facebook Developer Account with Whatsapp

Meta provides developer tools through their [Facebook Developer's](http://developers.facebook.com/) portal to easily build around the Meta ecosystem.

* Login to your Facebook [Developer account](http://developers.facebook.com) and navigate to **My Apps**

{% hint style="info" %}
You must verify your account before proceeding if it is your first time accessing Facebook for developers.
{% endhint %}

* Click on **Create App** to create a new app
* Select Business as the **App type** and fill in the details
  * **App name**: The name you want to call your app.
  * **Contact address**: Your email to use when contacting you.
  * **Business Account**: Select a business account if you have one. A new account can be created automatically if none is selected.
* Click on **Setup** against **WhatsApp** in the list of products to add displayed. A WhatsApp section is added to the left panel of your Facebook Developer dashboard.
* Navigate to **WhatsApp** > **Getting Started**; you will see a set of credentials to be used later to set [up the WhatsApp Cloud App in Rocket.Chat](whatsapp-cloud-app-configuration.md)
* Verify any existing WhatsApp number to receive messages while in Test Mode.

{% hint style="info" %}
The access token provided is temporary; see [this guide](./#create-a-permanent-whatsapp-cloud-api-token) on how to create a permanent token.
{% endhint %}

### Adding WhatsApp Business phone number to the Facebook app

It is optional to link your original WhatsApp Business number to the App.

* Navigate to **WhatsApp** > **Getting Started** and click on **Add phone number.**

Follow the guides below to learn more about how to add a WhatsApp production number here:

{% embed url="https://developers.facebook.com/docs/whatsapp/cloud-api/get-started/add-a-phone-number/" %}

{% embed url="https://youtu.be/CEt_KMMv3V8?t=388" %}

### Create a Permanent Whatsapp Cloud API Token

Facebook uniquely provides the WhatsApp Cloud API token, Phone _Number ID_, and _WhatsApp Business Account ID_. These credentials are needed by every business when using WhatsApp Cloud services.

The token provided by Facebook initially is temporal. Optionally, you can get a permanent WhatsApp Cloud API token.

* Open the app panel on your [Facebook Developers portal](https://developers.facebook.com/apps).
* Click to open the business page linked to the app.
* From the Facebook business setting page, navigate to **System user.**
* A list of existing users on that app is seen, if any. Click **Add** to add a user, then **Accept** the terms and conditions.
* Fill in the **System username**, then set the **System User Role** to **Admin.** Click **Create System User.**
* Click on **Add Assets** across the newly created user to add assets to use.
* A modal opens up, navigate to **Apps**, select the app, and enable **Manage App.** Then **Save changes.**
* The asset gets added to the system user. Click **Done.**
* Click on **Generate New Token** against the user to generate a new access token.
* Select the **App** from the dropdown and check the `whatsapp_business_messaging` and `whatsapp_business_management` permissions. Then, click **Generate Token.**
* The permanent token is generated and presented to you. Copy this token and use it in your integrations.

## Uninstall Whatsapp App

To delete the Whatsapp app from your workspace,

* Go to **Administration > Apps > Installed.**
* Click th**e kebab menu** against the **Whatsapp app.**
* Select **Uninstall**.
* Click **Yes** to confirm the uninstallation.

{% content-ref url="../../../../../resources/frequently-asked-questions/whatsapp-cloud-api-faqs.md" %}
[whatsapp-cloud-api-faqs.md](../../../../../resources/frequently-asked-questions/whatsapp-cloud-api-faqs.md)
{% endcontent-ref %}
