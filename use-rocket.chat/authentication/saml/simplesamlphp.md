# SimpleSAMLphp

Implementing SAML from scratch can be complex. SimpleSAMLphp is an extensible and customizable open-source application that deals with authentication and supports SAML as an identity provider and service provider. It streamlines the integration of SAML into web applications.

As we have seen from the various customizable SAML configuration settings provided by Rocket.Chat, you can use SimpleSAMLphp to implement SAML for your workspace. Assuming that you have a SimpleSAMLphp IdP up and running, follow the [QuickStart instructions](https://simplesamlphp.org/docs/stable/simplesamlphp-sp.html). You can find the metadata for using the Rocket.Chat SAML Service Provider (SP) here, where `my-app` is the text you entered in the **Custom Provider** box in the Rocket.Chat SAML settings page:

`https://my-rocketchat-domain.tld/_saml/metadata/my-app`

1. Copy the XML on this page.
2. Open the metadata converter page in your SimpleSAMLphp admin UI found at: `/admin/metadata-converter.php`
3. Paste the XML and submit it.
4. Copy the resulting PHP output to the file in your SimpleSAMLphp installation under metadata: `/metadata/saml20-sp-remote.php`
5. You should now see your SP on the SimpleSAMLphp Federation page, listed as a trusted SAML 2.0 SP at: `module.php/core/frontpage_federation.php`

## IdP Attribute Mapping

Use the following attributes required to return user information to Rocket.Chat:

<table><thead><tr><th width="349">Idp Returned Attribute Name</th><th>Usage</th></tr></thead><tbody><tr><td>cn</td><td>User's Full Name.</td></tr><tr><td>email</td><td>User's Email Address.</td></tr><tr><td>username</td><td>User's username.</td></tr></tbody></table>

Proceed to enter all the [saml-configuration.md](saml-configuration.md "mention") settings and ensure a secure authentication mechanism for your workspace!
