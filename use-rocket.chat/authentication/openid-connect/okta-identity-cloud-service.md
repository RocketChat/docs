# Okta Identity Cloud Service

Using Okta as an OpenID Connect identity provider is similar to [using it as an OAuth provider](../oauth/additional-oauth-methods.md#custom-oauth-okta), but OpenConnect ID has additional features specific to identity and access management. You can find more information on the [OAuth 2.0 and OpenID Connect overview](https://developer.okta.com/docs/concepts/oauth-openid/) page.

Okta Identity Cloud Service can be integrated with Rocket.Chat via its OpenID Connect support.

## Configure Okta in Rocket.Chat

* Login to Rocket.Chat with an administrator account and navigate to the **OAuth** page in the **Settings** tab.
* Click the **Add custom OAuth** button and provide the following configurations.
  * Give the custom OAuth a unique name. For this example, we will use _okta_.
  * **Enabled**: _True_
  * **URL**: The URL to your okta domain on okta.com with a suffix of _/oauth2/v1_. For example: _`https://mycompany.okta.com/oauth2/v1`_
  * **Token**: _/token_
  * **Token Sent Via**: _Header_
  * **Identity Token Sent Via**: _Same as Token Sent Via_
  * **Identity Path**: _/userinfo_
  * **Authorize Path**: _/authorize_
  * **Scope**: _openid email profile groups offline\_access_
  * **Param Name for access token**: _access\_token_
  * **id**: Set to the **Client ID** in the Okta app **Client Credentials** below.
  * **Secret**: Set to the **Client secret** in the Okta app **Client Credentials** below.
  * **Login Style**: Either setting works. **Popup** will pop up the Okta check/login in another window. **Redirect** will redirect the current page.
  * **Button Text**: Set to personal preference.
  * **Button Text Color**: Set to personal preference.
  * **Button Color**: Set to personal preference.
  * **Username field**: _preferred\_username_
  * **Avatar field**: Was not used on our Okta instance. Further research will be required to use this.
  * **Roles/Groups field name**: roles
  * **Merge Roles from SSO**: Our server syncs from LDAP, so we left this _false_.
  * **Merge users**: Our server syncs from LDAP, so we left this _false_.

## Configure Okta as the identity provider

![](../../../.gitbook/assets/AddApp.png)

* Create a new app on your Okta Application Dashboard.
* Select **Web** as the **Platform**.
* Select **OpenID Connect** as the **Sign on method**. Click **Create** to open the window to create the new integration.
* Update the **application name** and **redirect URI.** The **redirect UR**I is the same **callback URL** displayed after creating the custom OAuth in your Rocket.Chat workspace.

{% hint style="info" %}
In this example, the custom OAuth is called _okta_. This will result in a **redirect URI** of _`https://my-rocketchat-server.org/_oauth/okta`_.
{% endhint %}

* Click **Save.** You are redirected to the **General Settings** for the new app.
* Copy the **Client ID** to the Rocket.Chat **ID** field on your workspace OAuth settings page.
* Copy the **Client secret** to the Rocket.Chat **secret** field on your workspace OAuth settings page.

Everything should be configured appropriately now! You can now assign users or group users to your integration app on the Okta Dashboard and then test the login on your Rocket.Chat workspace.
