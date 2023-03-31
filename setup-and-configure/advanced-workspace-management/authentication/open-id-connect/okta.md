---
description: Open ID Connect
---

# Okta Identity Cloud Service

Okta Identity Cloud Service can be integrated as an Identity Provider for Rocket.Chat via its Open ID Connect support.

## Configuring Rocket.Chat

### Create a Custom Oauth provider

* Login to Rocket.Chat with an administrator account and navigate to the OAuth page.
* Click the **Add custom OAuth** button and provide the following configurations.
  * Give the custom OAuth a unique name. For this example we will use _okta_.
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
  * **Login Style**: Either setting works. Popup with pop up the Okta check/login in another window. Redirect will redirect the current page.
  * **Button Text**: Set to personal preference.
  * **Button Text Color**: Set to personal preference.
  * **Button Color**: Set to personal preference.
  * **Username field**: _preferred\_username_
  * **Avatar field**: Was not used on our Okta instance. Further research will be required to use this.
  * **Roles/Groups field name**: roles
  * **Merge Roles from SSO**: Our server syncs from LDAP, so we left this _false_.
  * **Merge users**: Our server syncs from LDAP, so we left this _false_.

## Configuring the Identity Provider

### Adding a new Application in Okta

![](../../../../.gitbook/assets/AddApp.png)

* Create a new app on your Okta Application Dashboard.
* Select **Web** as the **Platform**.
* Select **OpenID Connect** as the Sign on method. Click **Create** to open the window to create the new integration.
* Update the **application name** and **redirect URI.** The **redirect UR**I is the same **callback URL** displayed after creating the custom OAuth in your Rocket.Chat workspace.

{% hint style="info" %}
In this example, the custom OAuth is called _okta_. This will result in a **redirect URI** of _`https://my-rocketchat-server.org/_oauth/okta`_.
{% endhint %}

* Click **Save.** You are redirected to the  **General Settings** for the new app.
* Copy the **Client ID** to the Rocket.Chat **id** field on your workspace OAuth settings page.
* Copy the **Client secret** to the Rocket.Chat **secret** field on your workspace OAuth settings page.

### Testing

Everything should be configured appropriately now. You can now assign users or group users to your integration app on the Okta Dashboard and then test the login on your Rocket.Chat instance.
