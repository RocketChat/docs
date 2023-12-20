# Authentication

Authentication is a crucial aspect of any application in our highly connected and fast-paced digital environment. Typically, you can create accounts with emails and passwords to access certain resources. Rocket.Chat's basic authentication method also involves the use of a username or email and password, offering a straightforward and reliable approach.  This forms the cornerstone for more advanced authentication methods available across all of [Rocket.Chat plans](../../readme/our-plans.md), with additional features for premium plans.&#x20;

For instance, you might encounter alternative sign-in options, such as **Sign in with Google**. This lets you securely access various applications with only your Google credentials. In a similar manner, you can configure your Rocket.Chat workspace so that users can sign in with an existing set of credentials using standard authentication protocols. The protocols can also provide user, role, and permission management features. This adds another layer of security and ensures that only authorized individuals can access sensitive business information.&#x20;

This section guides you through the supported authentication methods and the configuration details. The advanced authentication protocols are as follows:

* [**Lightweight Directory Access Protocol (LDAP)**](ldap/)

LDAP is an authentication protocol that serves as a digital phonebook by storing your organization's user information and the access that each user has. For example, OpenLDAP and Red Hat Directory Server are LDAP-based solutions. Rocket.Chat provides settings for configuration, user search, data sync, and more, offering a robust solution for organizational identity management.

* [**Security Assertion Markup Language (SAML)**](saml/)

SAML is an open standard for authentication that enables users to access multiple web applications with a single set of credentials. For example, Auth0 and Microsoft Entra ID (formerly Azure Active Directory) leverage SAML for secure identity management. Rocket.Chat provides options to configure the user interface, behavior, and data mapping, ensuring a seamless SAML integration.

* [**Open Authorization (OAuth)**](oauth/)

OAuth is an open authorization protocol that uses tokens to grant access to third-party services and resources. This avoids exposing the user credentials to third-party services. Rocket.Chat provides various OAuth setup options such as Google, Apple, GitHub, and more. You can also add custom OAuth services.

* [**OpenID Connect**](open-id-connect/)

OpenID Connect is an identity layer on top of the OAuth 2.0 protocol, which also enables users to access various web applications with a single set of credentials. Rocket.Chat is compatible with service providers such as Gluu Server 4.0, Keycloak, and Okta Identity Cloud Service, providing users with a versatile and secure authentication ecosystem.

* [**External authentication**](iframe-based-single-sign-on.md)

If you want your users to sign in directly from your website or a third-party application without using any of the other options, you can opt to use the iframe-based sign-on integration provided by Rocket.Chat.

Rocket.Chat provides an adaptable authentication framework with robust access control features to meet diverse business needs. Explore the advanced authentication features for our plans and configuration details in the following sections. You can use any one of these options or use a combination that suits your needs.&#x20;
