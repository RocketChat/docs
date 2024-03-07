# Okta Identity Cloud Service

Using Okta as an OpenID Connect identity provider is similar to [using it as an OAuth provider](../oauth/additional-oauth-methods.md#custom-oauth-okta), but OpenConnect ID has additional features specific to identity and access management. You can find more information on the [OAuth 2.0 and OpenID Connect overview](https://developer.okta.com/docs/concepts/oauth-openid/) page.

Okta Identity Cloud Service can be integrated with Rocket.Chat via its OpenID Connect support. This guide walks you through a basic example setup.

## Create a custom OAuth method

In your Rocket.Chat workspace, follow these steps:

1. Go to **Administration** > **Settings** > **OAuth**.
2. Click **Add Custom OAuth**.
3. Provide a unique name for the custom OAuth. For example, `Okta`. Click **Add**.
4. Make note of the callback URL. You will need this to configure the Okta app. For example, `https://dev.rocket.cat/_oauth/okta`

## Configure Okta as the Identity Provider

Now, in your Okta developer account, follow these steps:

1. Create a new app integration on your Okta application dashboard.
2. Select the **Sign-in method** as **OIDC - OpenID Connect**.
3. Select the **Application type** as **Web Application**. Click **Next**.
4. Provide a name for the new web app integration.
5. For the **Sign-in redirect URIs** field value, enter the callback URL you got from the Rocket.Chat workspace.
6. For this example, we will select the **Assignments** value as **Allow everyone in your organization to access**. Alternatively, you can assign users or groups to the app.
7. Click **Save**.

The application is created. Copy the client ID and the client secret values. You will need these values to configure Okta as the identity provider in Rocket.Chat

## Configure Okta in Rocket.Chat

In your Rocket.Chat workspace and follow these steps:

1. Login to Rocket.Chat with an administrator account and go to **Administration** > **Settings** > **OAuth**.
2. Select the custom OAuth method that you created and enable it.&#x20;
3. Enter values for the following details:

{% hint style="info" %}
To view the endpoints, you can access the discovery document from `https://<your-okta-domain>/.well-known/openid-configuration`
{% endhint %}

<table><thead><tr><th width="189">Field</th><th width="292">Description</th><th>Example</th></tr></thead><tbody><tr><td><strong>URL</strong></td><td>The URL to your Okta domain with a suffix of <code>/oauth2/v1</code></td><td><code>https://dev-9879999.okta.com/oauth2/v1</code></td></tr><tr><td><strong>Token Path</strong></td><td>The token endpoint is used to obtain access tokens.</td><td><code>/token</code></td></tr><tr><td><strong>Token sent via</strong></td><td>Select whether the token is sent via <code>Header</code> or <code>Payload</code>.</td><td><code>Header</code></td></tr><tr><td><strong>Identity Token Sent Via</strong></td><td>Select whether the identity token is sent via <code>Header</code>, <code>Payload</code>, or the same method as the <code>Token sent via</code> field.</td><td><code>Token sent via</code></td></tr><tr><td><strong>Identity Path</strong></td><td>The user information endpoint is used to retrieve user data. Enter the path from the user endpoint.</td><td><code>/userinfo</code></td></tr><tr><td><strong>Authorize Path</strong></td><td>Enter the path from the authorization endpoint.</td><td><code>/authorize</code></td></tr><tr><td><strong>Scope</strong></td><td>The scope defines the user access level and permissions.</td><td><code>openid email profile groups offline_access</code></td></tr><tr><td><strong>Param Name for access token</strong></td><td>The name of the access token.</td><td><code>access_token</code></td></tr><tr><td><strong>Id</strong></td><td>The client ID from the Okta web app.</td><td><code>0oafgyq3qdYPHa55555</code></td></tr><tr><td><strong>Secret</strong></td><td>The client secret from the Okta web app.</td><td><code>QTrbVadjfjhurUzsJHRbteQPHHm8Od6w</code></td></tr><tr><td><strong>Key Field</strong></td><td>The field that will be used to maintain unique user IDs. You can use the <code>Email</code> or <code>Username</code>.</td><td><code>Email</code></td></tr></tbody></table>

4. **Username field**: With this field, you can avoid the possibility of users selecting their own usernames while signing in for the first time. Thus, users will retain the usernames from Okta, maintaining consistency. To do this, follow these steps:
   1. In your Okta account, go to the **People** tab.
   2. Select the **Profile** of a user.&#x20;
   3. Provide a value for the **Nickname** field.
   4. Now in your Rocket.Chat workspace, enter `nickname` for the **Username** field.&#x20;
5. **Avatar field**: Enter `picture` to use the Okta user avatars.
6. Click **Save changes**.

You are now all set! Your users from Okta can now log in to the Rocket.Chat workspace. You can also set the values of other fields according to your requirements.
