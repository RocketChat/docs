# MS Office 365 OAuth Setup

This guide shows how you can set up OAuth integration between Microsoft accounts and Rocket.Chat.

This is achieved with the use of[ Microsoft Entra ID](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) _(formerly called_ [_Azure Active Directory_](https://azure.microsoft.com/en-us/services/active-directory/)_)_ which is an identity service by Microsoft that provides single sign-on and other authentication methods.

## Create Custom O365 OAuth

To create a custom authentication method for your Rocket.Chat instance:

* Navigate to **Administration** > **Workspace** > **Settings** > **OAuth** and click on **Custom OAuth** and set the new OAuth integration name

![Create new custom OAuth](<../../../../.gitbook/assets/image (829).png>)

* After creating the new integration, you are given the `callback URL` followed by other fields to configure

![365OAuth integration details page](<../../../../.gitbook/assets/image (785).png>)

## Creating an Azure Active Directory App

* Log in to your [Azure portal](https://portal.azure.com/) then navigate to the **Microsoft Entra ID** tab

<figure><img src="../../../../.gitbook/assets/microsoft entra ID.png" alt=""><figcaption><p>Azure Portal</p></figcaption></figure>

* Create a new **App Registration**

<figure><img src="../../../../.gitbook/assets/microsoft-app-registration.png" alt=""><figcaption><p>Azure Active Directory new App Registration</p></figcaption></figure>

* Fill in the name and other fields including the redirect URI provided by Rocket.Chat when [creating the new OAuth integration](ms-office-365-oauth-setup.md#create-custom-365-oauth)

![Azure AD app details](<../../../../.gitbook/assets/image (493).png>)

After registering your new app, take note of `Application (client) ID` it will be needed to configure the integration later.

* On your new app's page, navigate to **Certificates and Secret** tab to create a **New client secret**

![AD create new app secret](<../../../../.gitbook/assets/image (968).png>)

* After creating, take note of the `client secret` immediately, it is only displayed once. You'll need it to configure the integration in your Rocket.Chat workspace.

![AD client secret](<../../../../.gitbook/assets/image (464).png>)

## Configuring O365 OAuth

After creating the Azure Active Directory App with its secret, head over back to your Rocket.Chat O365 custom OAuth integration page in your workspace and set the various fields.

* **Enable**: Set to true to enable this OAuth integration
* **URL**: `https://login.microsoftonline.com/<tenant ID>`
* **Token Path**:  `/oauth2/token`
* **Token Sent Via**: Payload
* **Identity Token Sent Via**: Header
* **Identity Path**: `/openid/userinfo`
* **Authorize Path**: `/oauth2/authorize`
* **Scope**: openid
* **Param Name for access token**: `access_token`
* **Id**: `<Your Azure AD Application (client) ID>`
* **Secret**: `<Your Azure AD client secret>`
* **Login style**: Redirect
* **Button Text**: Login via Microsoft
* **Merge Users**: True
* **Merge Users From Distinct Services**: True

Do the configurations and **Save changes**

<figure><img src="../../../../.gitbook/assets/365Oauth-settings.png" alt=""><figcaption><p>OAuth 365 integration settings</p></figcaption></figure>

* After saving, you will find the O365 Oauth button on the login and signup page. Clicking on them brings up a popup to authenticate your Microsoft account

![O365 Button on login and sign in pages](<../../../../.gitbook/assets/image (182).png>)

* Simply sign in to your Office account to authenticate

![Microsoft account sign in](<../../../../.gitbook/assets/image (169).png>)

* Accept the permission required to proceed

![Microsoft login grant permision](<../../../../.gitbook/assets/image (244).png>)
