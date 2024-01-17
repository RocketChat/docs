# Authentication

The Rocket.Chat authentication documentation provides a comprehensive overview of the various authentication methods supported by Rocket.Chat.&#x20;

1. **Basic Authentication**: Users can create accounts using email and password, which is the basic authentication method in Rocket.Chat.
2. **Advanced Authentication Protocols**:
   * [**Lightweight Directory Access Protocol (LDAP)**](ldap/)**:** Acts as a digital phonebook, storing user information and access levels. Rocket.Chat supports LDAP configuration, user search, data sync, etc.
   * [**Security Assertion Markup Language (SAML)**](saml/): An open standard allowing single sign-on (SSO) for multiple web applications with one set of credentials. Rocket.Chat offers user interface configuration, behavior settings, and data mapping for SAML integration.
   * [**Open Authorization (OAuth)**](oauth/): An open protocol using tokens to grant access to third-party services without exposing user credentials. Rocket.Chat supports various OAuth setups, including Google, Apple, GitHub, and custom OAuth services.
   * [**OpenID Connect**](broken-reference): An identity layer on top of OAuth 2.0, enabling SSO for various web applications. Rocket.Chat is compatible with providers like Gluu Server 4.0, Keycloak, and Okta Identity Cloud Service.
   * [**External authentication**](broken-reference): For direct sign-in from a website or third-party application, Rocket.Chat offers iframe-based sign-on integration.

Rocket.Chat's authentication framework is adaptable and provides robust access control to meet diverse business needs. Users can choose any option or a combination that suits their requirements.
