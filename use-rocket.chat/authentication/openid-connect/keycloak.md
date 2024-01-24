# Keycloak

[Keycloak](https://www.keycloak.org/) is an open-source identity and access management software. It supports user federation, OAuth, SAML, and OpenID Connect protocols. Along with role-based authorization, you can also connect to existing LDAP user directories. Rocket.Chat supports Keycloak configuration for you to securely manage your users and resources.

This guide walks you through a basic Keycloak OpenID Connect setup in Rocket.Chat to log in with Keycloak credentials.

## Configure Keycloak OpenID Connect

To create a client in Keycloak, follow these steps:

1. Enter a **Client ID**, for example, `rocket-chat-client`.
2. Select the **Client Protocol** as `openid-connect`.
3. Select the **Access Type** as **confidential**. Setting the client as confidential means that a client secret is required to initial the login.
4. Enable the **Standard Flow Enabled** field.
5. Enter the **Valid Redirect URIs**, for example, `https://{demo.rocket.cat}/*`

Save the client. A new credentials tab will be created for the client. This credentials tab will provide the client secret to be used when configuring Keycloak in your Rocket.Chat workspace.

## Configure Keycloak in Rocket.Chat

1. Login to Rocket.Chat with an administrator account and navigate to the **OAuth** page in the **Settings** tab.
2. Click the **Add custom OAuth** button and enter the following details:

<table><thead><tr><th width="189">Field</th><th width="292">Description</th><th>Example</th></tr></thead><tbody><tr><td><strong>URL</strong></td><td>The URL of the OpenID Connect issuer in the Keycloak realm.</td><td><code>https://keycloak.support.rocket.cat/realms/{realm-name}/protocol</code></td></tr><tr><td><strong>Token Path</strong></td><td>The token endpoint is used to obtain access tokens. Enter the path from the token endpoint.</td><td><code>/openid-connect/token</code></td></tr><tr><td><strong>Token sent via</strong></td><td>Select whether the token is sent via <code>Header</code> or <code>Payload</code>.</td><td><code>Header</code></td></tr><tr><td><strong>Identity Token Sent Via</strong></td><td>Select whether the identity token is sent via <code>Header</code>, <code>Payload</code>, or the same method as the <code>Token sent via</code> field.</td><td><code>Token sent via</code></td></tr><tr><td><strong>Identity Path</strong></td><td>The user information endpoint is used to retrieve user data. Enter the path from the user endpoint.</td><td><code>/openid-connect/userinfo</code></td></tr><tr><td><strong>Authorize Path</strong></td><td>Enter the path from the authorization endpoint.</td><td><code>/openid-connect/auth</code></td></tr><tr><td><strong>Scope</strong></td><td>The scope defines the user access level and permissions that you have configured in Keycloak.</td><td><code>openid</code></td></tr><tr><td><strong>Param Name for access token</strong></td><td>The name of the access token.</td><td><code>access_token</code></td></tr><tr><td><strong>Id</strong></td><td>The client ID that you created in Keycloak.</td><td><code>rocket-chat-client</code></td></tr><tr><td><strong>Secret</strong></td><td>Enter the client secret from your Keycloak client's <strong>Credentials</strong> tab.</td><td><code>QTrbVadjfjhurUzsJHRbteQPHHm8Od6w</code></td></tr><tr><td><strong>Button Text</strong></td><td>Enter the text to be displayed on the login screen.</td><td><code>Login with Keycloak</code></td></tr></tbody></table>

{% hint style="info" %}
To access the URL paths provided in the configurations, go to **Realm Settings > General** and click the endpoints link. While configuring the settings, replace `realm_name` with the appropriate realm name. The default realm provided by Keycloak is `master`.
{% endhint %}

3. You can leave the rest of the configurations as default. Click **Save changes.**
4. Enable the new Keycloak provider. Click **Refresh OAuth Services**.
5. If you are in a test environment with no SMTP server set, disable two-factor authentication in **Administration > Settings > General**.

A **Login with Keycloak** button is displayed on your workspace's login page. Users can now log in with their Keycloak credentials!

## Mapping non-federated Keycloak user roles to Rocket.Chat roles

Client-specific roles of a Keycloak-managed user can be mapped to Rocket.Chat roles. This does not work for federated users (LDAP-managed users). For this example, to map the `admin` and `livechat-manager` [role](../../workspace-administration/permissions/#roles), add the required roles to the client.

To create a role in Keycloak, follow these steps:

* Navigate to **Roles** and click **Add Role.**
* Fill in the name and description of the role, and then click **Save**.
* Add a mapper entry that maps our client roles to OpenID, passing the value to Rocket.Chat.

To view all the client roles you have created, navigate to **Roles** and click **View all roles**.

You can also create composite roles. A composite role is a role that can be associated with other roles. To define composite roles, navigate to **Roles > Composite Roles**. To grant the Rocket.Chat role to a user, we have to modify the user's **Role Mappings**.

{% hint style="info" %}
For more information on Keycloak server setup and roles, see [Server Administration Guide](https://www.keycloak.org/docs/latest/server\_admin/#keycloak-features-and-concepts).
{% endhint %}
