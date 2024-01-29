# Keycloak

​[Keycloak](https://www.keycloak.org/) is an open-source identity and access management software. It supports user federation, OAuth, SAML, and OpenID Connect protocols. Rocket.Chat supports the SAML Keycloak configuration for you to securely manage your users and resources.

## Prerequisites

* Rocket.Chat workspace. For example, `https://test-rocket.chat`
* Keycloak server. For example, `https://keycloak.test.com`
* Keycloak realm: Set up a realm you want to use, for example, `master`. The realm will be referenced by the placeholder `<realm>`.

## Set up Keycloak in Rocket.Chat

Go to the [SAML configuration](https://docs.rocket.chat/use-rocket.chat/authentication/saml/saml-configuration) in Rocket.Chat settings and follow these steps.

1. Enable the SAML connection.
2. Provide a Keycloak server name. For example, `keycloak`.
3. For the **Custom Entry Point** and **IDP SLO Redirect URL** fields, go to `https://keycloak.test.com/auth/realms/<realm>/protocol/saml`
4. Note the **Custom Certificate** - this is the Keycloak's realm certificate. Go to the realm settings, examine the Keys tab, get the RSA Certificate, and paste it into the field. Don't include the `-----BEGIN/END CERTIFICATE-----` headers/footers.
5. Generate the public certificate and private key if needed, or leave them as they are if they are present.

## Set up Keycloak

1. Go to `https://test-rocket.chat/_saml/metadata/keycloak` - you should get an XML file. Save the raw file to your disk.&#x20;
2. Go to Keycloak and create a new client. Select the SAML protocol, and import the XML file from the previous step. You will be redirected to a partially pre-filled client setting page. The client ID referenced by Keycloak should be the same as the metadata URL.
3. Check the Valid Redirect URIs - make sure that it is set to `https://test-rocket.chat/_saml/validate/keycloak`.
4. Set the **Name ID Format** to `email`.
5. Go to the client **Keys** tab, and make sure that the public key (certificate) is the same as the Rocket.Chat's public key. Note that the `-----BEGIN/END CERTIFICATE-----` header/footer is not supposed to be part of the Keycloak's public key view, but the rest should be the same. If they are not the same, save the Rocket.Chat public key into a text file as a `.pem` file, and import it in Keycloak - use the import PEM functionality.
6. Go to the **Mappers** tab, and create mappers for the required data that Rocket.Chat expects. You shouldn't need `email` or `username`, but you probably need `cn`.
7. Click **Create**, and choose the type `User Property` and set the `SAML Attribute NameFormat` to `basic`. For the first name, set `Name` and `Property` to `firstName`, and `SAML Attribute name` to `cn`.

## Troubleshooting

You should be done by now. However, you may run into some problems for various reasons:

* Q: I keep getting the `Unable to validate response url: Error: Status is: urn:oasis:names:tc:SAML:2.0:status:Responder` error.
  * A: Make sure that the respective Keycloak user has an e-mail address. This may not be the case. For example, for the Keycloak admin.
* Q: How do I generate a certificate pair?
  * A: Try `openssl req -newkey rsa:3072 -new -x509 -days 3652 -nodes -out saml.crt -keyout saml.pem`. Then, just copy the file contents to the respective fields.
