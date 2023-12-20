# SAML Configuration

This page guides you through the various available settings you can configure for your SAML integration. This enables you to customize the user sign-in experience and behavior, map user data, and additional premium settings.&#x20;

In your Rocket.Chat workspace, go to **Administration** > **Workspace** > **Settings** > **SAML**. On the **SAML** page, you will find the configuration tabs where you can provide the details according to your requirements. Make sure that you have an identity provider and the necessary credentials.

{% hint style="info" %}
You can refer to [SimpleSAMLphp](simple-saml-php.md), [Active Directory Federation Services](active-directory-federation-services.md), [Oracle Identity Cloud Service](oracle-cloud.md), and [Keycloak](keycloak.md#troubleshooting) for specific configuration options and sample values.
{% endhint %}

## Connection

* **Enable**: Enables the SAML connection.
* **Custom Provider**: The SAML provider's name.
* **Custom Entry Point**: The custom entry point.
* **IDP SLO Redirect URL**: This is the URL provided by your identity provider for logging out. In SAML terminology, it refers to the location (URL) of the `SingleLogoutService` with the redirect binding (`urn:oasis:names:tc:SAML:2.0:bindings: HTTP-Redirect`)
* **Custom Issuer**: The URI is the unique identifier of your service. By convention, this is also the URL of your (unedited) metadata. Again, where you set **Custom Provider** to your provider app name, this will be: `https://my-rocketchat-domain.tld/_saml/metadata/my-app`
* **Enable Debug**: Set to true to enable debugging.

### Certificate

* **Custom Certificate**: This is the public certificate for the identity providers used to verify SAML requests. The format for this is the PEM without `-----BEGIN CERTIFICATE-----` and `--`
*   **Public Cert Contents**: The public part of the self-signed certificate you created for encrypting your SAML transactions. [Example of self-signed certificate on the SimpleSAMLphp website here](https://simplesamlphp.org/docs/stable/simplesamlphp-sp.html#enabling-a-certificate-for-your-service-provider).

    Format for this is the PEM with  `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`
* **Signature Validation Type**: Select the type of signature validation. This setting will be ignored if no **Custom Certificate** is provided_**.**_
* **Private Key Contents**: The private key matches the self-signed certificate you created as PKCS#1 PEM. The format for this is PEM with  `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`.

## Premium

<figure><img src="../../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

The settings on the **Premium** tab are only available to workspaces on any of the Rocket.Chat premium plans.

### Roles

* **Sync User Roles**: Enable to sync user roles on login (overwrites local user roles).
* **Role Attribute Name**: If this attribute is found on the SAML response, its values will be used as role names for new users.

### Advanced

* **Identifier Format**: Format of the identifier. Leave this empty to omit the **NameID Policy** from the request
* **NameID Policy Template**: The NameID policy template. You can use any variable from the **Authorize Request Template** here.
*   **Custom Authn Context**: Leave this empty to omit the authorization context from the request.

    To add multiple authorization contexts, add the additional ones directly to the **AuthnContext Template** setting.
* **Authn Context Comparison**: Select the authorization context comparison method
*   **AuthnContext Template**: You can use any variable from the **AuthnRequest Template** here.

    To add additional authorization contexts, duplicate the _AuthnContextClassRef_ tag and replace the _\_\_authnContext\_\__ variable with the new context.
* **AuthnRequest Template**: The following variables are available:
  * **\_\_newId\_\_**: Randomly generated id string
  * **\_\_instant\_\_**: Current timestamp
  * **\_\_callbackUrl\_\_**: The Rocket.Chat callback URL.
  * **\_\_entryPoint\_\_**: The value of the _Custom Entry Point_ setting.
  * **\_\_issuer\_\_**: The value of the _Custom Issuer_ setting.
  * **\_\_identifierFormatTag\_\_**: The contents of the _NameID Policy Template_ if a valid _Identifier Format_ is configured.
  * **\_\_identifierFormat\_\_**: The value of the _Identifier Format_ setting.
  * **\_\_authnContextTag\_\_**: The contents of the _AuthnContext Template_ if a valid _Custom Authn Context_ is configured.
  * **\_\_authnContextComparison\_\_**: The value of the _Authn Context Comparison_ setting.
  * **\_\_authnContext\_\_**: The value of the _Custom Authn Context_ setting.
* **Logout Response Template**: The following variables are available:
  * **\_\_newId\_\_**: Randomly generated id string
  * **\_\_inResponseToId\_\_**: The ID of the Logout Request received from the IdP
  * **\_\_instant\_\_**: Current timestamp
  * **\_\_idpSLORedirectURL\_\_**: The IDP Single LogOut URL to redirect to.
  * **\_\_issuer\_\_**: The value of the _Custom Issuer_ setting.
  * **\_\_identifierFormat\_\_**: The value of the _Identifier Format_ setting.
  * **\_\_nameID\_\_**: The NameID received from the IdP Logout Request.
  * **\_\_sessionIndex\_\_**: The sessionIndex received from the IdP Logout Request.
* **Logout Request Template**: The following variables are available:
  * **\_\_newId\_\_**: Randomly generated id string
  * **\_\_instant\_\_**: Current timestamp
  * **\_\_idpSLORedirectURL\_\_**: The IDP Single LogOut URL to redirect to.
  * **\_\_issuer\_\_**: The value of the _Custom Issuer_ setting.
  * **\_\_identifierFormat\_\_**: The value of the _Identifier Format_ setting.
  * **\_\_nameID\_\_**: The NameID received from the IdP when the user logged in.
  * **\_\_sessionIndex\_\_**: The sessionIndex received from the IdP when the user logged in.
* **Metadata Certificate Template**: The following variables are available:
  * **\_\_certificate\_\_**: The private certificate for assertion encryption.
* **Metadata Template**: The following variables are available:
  * **\_\_sloLocation\_\_**: The Rocket.Chat Single LogOut URL.
  * **\_\_issuer\_\_**: The value of the _Custom Issuer_ setting.
  * **\_\_identifierFormat\_\_**: The value of the _Identifier Format_ setting.
  * **\_\_certificateTag\_\_**: If a private certificate is configured, this will include the _Metadata Certificate Template_, otherwise it will be ignored.
  * **\_\_callbackUrl\_\_**: The Rocket.Chat callback URL.

### Mapping

* **User Data Custom Field Map**: Configure how user custom fields are populated from a record in SAML (once found).

## General

### User Interface

* **Button Text**: Text to display on the button.
* **Button Text Color**: Set the button text color.
* **Button Color**: The button color.

### Behavior

* **Generate Username**: Enable to generate usernames.
* **Normalize username**: Set the type of normalization to perform on a username.
* **Immutable field name**: Select the field name to be immutable.
* **Overwrite user fullname (use idp attribute)**: Enable to overwrite user full name.
* **Overwrite user mail (use idp attribute)**: Enable to overwrite user mail.
* **Logout Behaviour**: Set the behavior to happen on logout.
* **Update Room Subscriptions on Each Login**: When enabled, room subscriptions are updated on each login. Ensures the user is a member of all channels in SAML assertion on every login.
* **Include Private Rooms in Room Subscription**: Adds a user to any private rooms that exist in the SAML assertion.
* **Default User Role**: Set the default user role. You can specify multiple roles, separating them with commas.
* **Allowed clock drift from Identity Provider**: The clock of the Identity Provider may drift slightly ahead of your system clocks. You can allow for a small amount of clock drift. Its value must be given in a number of milliseconds (ms). The value given is added to the current time at which the response is validated.

### Mapping

* **User Data Field Map**: Configure how user account fields (like email) are populated from a record in SAML (once found). As an example, `{"name":"cn", "email":"mail"}` chooses a person's human-readable name from the cn attribute, and their email from the mail attribute. Available fields in Rocket.Chat: `name`, `email` and `username`. Everything else is discarded.

```json
{
  "email": "mail",
  "username": {
    "fieldName": "mail",
    "regex": "(.*)@.+$",
    "template": "user-__regex__"
  },
  "name": {
   "fieldNames": [
      "firstName",
      "lastName"
    ],
    "template": "__firstName__ __lastName__"
  },
  "__identifier__": "uid"
}
```

This concludes the configuration options that you can enter for the SAML integration.

In the upcoming sections, we look at some SAML identity providers and how you can integrate them with Rocket.Chat.
