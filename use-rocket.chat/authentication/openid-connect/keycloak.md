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

{% hint style="info" %}
For more information on Keycloak server setup and roles, see [Server Administration Guide](https://www.keycloak.org/docs/latest/server\_admin/#keycloak-features-and-concepts).
{% endhint %}

## Advanced configuration

In this section, we talk about some advanced configuration options to map and sync your user data.

### Map Keycloak groups to Rocket.Chat rooms

Let's say that you want to add users from a Keycloak group to Rocket.Chat rooms. For this, keep the following points in mind:

* The **Map Roles/Groups to channels** field must be enabled.
* Provide the Keycloak groups in the **Roles/Groups field for channel mapping** in the OAuth settings.&#x20;
* In the **OAuth Group Channel Map** field, enter the group to rooms mapping data in the JSON format. From this mapping, users that belong to the specific Keycloak groups are inserted into all the associated Rocket.Chat rooms. For example, the mapping can look like this:

```json
{
    "keycloak-group": ["rocket-chat-room-name-1", "rocket-chat-room-name-2"]
}
// users in the "keycloak-group" are added to the specified rooms
```

If any of the rooms don't exist, Rocket.Chat creates the rooms as public rooms when a user from the Keycloak group logs in.

Note that user groups would not be returned from the Keycloak OAuth response by default. So let's look at an example of how to get the groups from Keycloak.

1. In Keycloak, create a group. For example, `Managers`. Let some users be added to this group. We will map this group to Rocket.Chat rooms.
2. Add a client scope for the group for Rocket.Chat to retrieve, and enter the required information. For example, create a client scope called `groups`.

<figure><img src="../../../.gitbook/assets/de 2024-03-18 00-03-41.png" alt=""><figcaption></figcaption></figure>

3. Now go to **Mappers** > **Add Mapper** > **By Configuration** > **Group Membership**. Fill in the details of the group membership called `groups`. The following screenshot shows an example:

<figure><img src="../../../.gitbook/assets/de 2024-03-18 00-05-51.png" alt=""><figcaption></figcaption></figure>

4. After saving this, go to **Clients** and select the client you are using for the Rocket.Chat workspace.
5. Go to the **Client scopes** tab and click **Add client scope**. Select the client scope for the group that you just created; in this example, `groups`.

Our Keycloak group is ready to be mapped to Rocket.Chat. In your workspace OAuth settings, enter the following details:

* **Roles/Groups field for channel mapping**: `groups`
* Enable the **Map Roles/Groups to channels** setting.
* Enter the following in the **OAuth Group Channel Map** field:

```json
{
    "/Managers": "managers-channel"
}
```

The following screenshot shows the example:

<figure><img src="../../../.gitbook/assets/de 2024-03-18 00-10-22 (1).png" alt=""><figcaption></figcaption></figure>

Save your changes. In this way, all users from the **Managers** group are mapped to the `managers-channel` room.

### Merge and sync roles from Keycloak to Rocket.Chat

* The **Merge Roles from SSO** option merges and mirrors the Keycloak user roles in the Rocket.Chat workspace. If you add or remove roles in Keycloak, this is replicated in Rocket.Chat.&#x20;
* In the **Roles to Sync** field, you can specify a list of role names to be mirrored on every new user login and sync.&#x20;

Make sure that you create roles in Rocket.Chat with the same names as in Keycloak for this to work successfully.
