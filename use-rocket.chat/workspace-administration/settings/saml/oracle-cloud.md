# Oracle Identity Cloud Service

Oracle Identity and Cloud Service (IDCS) provides an integrated identity and access management service with various access control features. With Rocket.Chat, organizations can use the IDCS as a SAML provider to implement secure sign-on. This page outlines how you can configure IDCS as an identity provider and integrate it with your Rocket.Chat workspace.

## Configure the Identity Provider

### Before you begin

Before you create your IDCS application, make sure you have enabled SAML per the [rocket.chat-server-settings.md](rocket.chat-server-settings.md "mention"). You must enter a **Custom Provider** and a **Custom Issuer** URL on the SAML settings page in Rocket.Chat.

{% hint style="info" %}
Leave the **Custom Entry Point** and **IDP SLO Redirect URL** values as the default values for now. We will obtain these URLs below, but you must save the SAML settings with your **Custom Issuer** URL so you can visit this URL and obtain values that are necessary when creating the IDCS application below.
{% endhint %}

### Add a new application

For the complete settings, refer to [Add a SAML Application](https://docs.oracle.com/en/cloud/paas/identity-cloud/uaids/add-saml-application.html#GUID-6177C667-6BEE-4728-BB93-A1F18953270C).

On your Oracle Cloud Applications Dashboard, find a button to add a new application. It should open the following pop-up:

![](<../../../../.gitbook/assets/AddApplication (1).png>)

Select **SAML Application** to open the configuration wizard.

### App Details

![](../../../../.gitbook/assets/AppDetails.png)

The only information needed on this page is the application name and URL. The URL you need to use here is the same one that is set on the **Custom Issuer** SAML configuration field on the Rocket.Chat settings.

### SSO Configuration

![](../../../../.gitbook/assets/SSOConfiguration.png)

To get the values for those new settings, you need to access the same **Custom Issuer** URL that you used on the previous page. It should show an XML file similar to the one below:

![](<../../../../.gitbook/assets/SampleXMLConfiguration (1).png>)

* From the **AssertionConsumerService** tag, you need to copy the value of the **Location** attribute. Then, paste this value into the **Assertion Consumer URL** field in the Oracle Settings.&#x20;
* From the **SingleLogoutService** tag, you need to copy the value of the **Location** attribute, and then paste it into the **Single Logout URL** field of the **Advanced Settings**.&#x20;
* From the same **SingleLogoutService** tag, you need to copy the value of the **ResponseLocation** attribute, and then paste it into the **Logout Response URL** field of the **Advanced Settings**.
* Finally, the **Entity ID** param receives the URL of the XML file itself (the same URL you used as the application URL).

Before clicking on **Finish**, click the **Download Identity Provider Metadata** button to download another XML file required for Rocket.Chat settings.

### Rocket.Chat Settings

![](../../../../.gitbook/assets/RocketChatSettings.png)

There are two Rocket.Chat settings that need to be copied from the IDP Metadata you just downloaded — **Custom Entry Point** and **IDP SLO Redirect URL**.

* For the **Custom Entry Point** field, locate the tag **md:SingleSignOnService** and copy the value of the **Location** attribute (ends with `/idp/sso`).
* For the **IDP SLO Redirect URL** field, locate the tag **md:SingleLogoutService** and copy the value of the **Location** attribute (ends with `/idp/slo`).

There may be multiple occurrences of those tags in the XML file, so make sure that the copied URLs end with `/idp/sso` and `/idp/slo` and not `/sp/sso` and `/sp/slo`.

### Test the SAML integration

Everything should be properly configured now! You can now add users to your SAML integration app on the Oracle Dashboard and then test the login on your Rocket.Chat workspace.
