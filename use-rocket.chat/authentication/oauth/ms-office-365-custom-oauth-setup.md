# MS Office 365 Custom OAuth Setup

Apart from the OAuth methods that Rocket.Chat provides for user authentication, you can also choose to set up a custom OAuth method.

This guide shows how you can set up a custom OAuth integration between Microsoft accounts and Rocket.Chat. This is achieved with the use of[ Microsoft Entra ID](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) (formerly called [Azure Active Directory](https://azure.microsoft.com/en-us/services/active-directory/)) which is an identity service by Microsoft that provides single sign-on and other authentication methods. You can also define conditional access policies and role-based permissions.

## Prerequisites

* An account on the [Azure portal](https://portal.azure.com/).
* An Azure Active Directory app.
* An application ID and client secret.
  * If you don't have an app, log in to the Azure Portal and navigate to the **Microsoft Entra ID** tab.
  * Create a new **App Registration**.
  * Fill in the details. You will get the redirect URI from your Rocker.Chat workspace when you[#create-custom-o365-oauth](ms-office-365-custom-oauth-setup.md#create-custom-o365-oauth "mention").
  * After registering your new app, take note of **Application (client) ID**. It will be needed to configure the integration later.
  * On your new app's page, go to the **Certificates and Secret** tab to create a **New client secret**.

## Create Custom O365 OAuth

To create a custom authentication method in your Rocket.Chat workspace:

* Navigate to **Administration** > **Workspace** > **Settings** > **OAuth**.
* Click on **Custom OAuth** and set the new OAuth integration name.
* After creating the new integration, you are given the **Callback URL**. For example, `https://<your-domain>/_oauth/365OAuth`. Provide this as the redirect URI when you are creating your Azure app.
* You will also need to fill in other configuration fields.

## Configure Custom O365 OAuth

In your workspace, set the following fields as per your requirements.

**OAuth server configuration fields:**

* **Enable**: Set to true to enable this OAuth integration
* **URL**: `https://login.microsoftonline.com/<tenant ID>`
* **Token Path**:  `/oauth2/token`
* **Token Sent Via**: Select whether you want to send the token via `Payload` or `Header`.
* **Identity Token Sent Via**: Select whether you want to send the identify token via `Payload`, `Header`, or keep it **Same as "Token Sent Via"** field value.
* **Identity Path**: `/openid/userinfo`
* **Authorize Path**: `/oauth2/authorize`
* **Scope**: `openid`
* **Param Name for access token**: `access_token`
* **Id**: `<Your Azure AD Application (client) ID>`
* **Secret**: `<Your Azure AD client secret>`
* **Login style**: Select the login style as `Popup`, `Redirect`, or `Default`.
* **Button Text**: Enter some text to display on the button. For example, `Login via Microsoft`.
* **Merge Users**: True
* **Merge Users From Distinct Services**: True
* Click **Save changes**.

After saving, you will find the O365 Oauth button on the login and signup page.&#x20;

Simply sign in to your Office account to authenticate!
