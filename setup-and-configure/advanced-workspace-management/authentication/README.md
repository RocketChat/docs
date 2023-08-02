# Authentication

In the digital age, secure and efficient authentication methods are paramount for any online platform. Rocket.Chat is no exception. It offers a variety of authentication methods to ensure the security and convenience of its users. This guide will delve into the specifics of these methods, providing a detailed overview of how Rocket.Chat handles user authentication.

Rocket.Chat's basic authentication method involves the use of a username or email and password. However, it also supports a range of other authentication methods to cater to diverse user needs and security requirements. These include:

[**LDAP**](../../../use-rocket.chat/workspace-administration/settings/ldap/)**:**  Leverage the Active Directory application or Identity Management System through **Lightweight Directory Access Protocol**

[**SAML**](../../../use-rocket.chat/workspace-administration/settings/saml/)**:** Exchanging authentication and authorization data between parties through **Security Assertion Markup Language.**

[**OpenID**](open-id-connect/)**:** Enable users to authenticate with their existing OpenID provider.

[**OAuth**](../../../use-rocket.chat/workspace-administration/settings/oauth/)**:** Authorize users via third-party applications like Google and Github without sharing their login credentials.

**External Authentication**: Rocket.Chat also supports external authentication. If you need to log in users from your website automatically, you can use the [iframe integration](../../../use-rocket.chat/workspace-administration/settings/account-settings/#iframe) in combination with [deeplinking](https://developer.rocket.chat/rocket.chat/deeplink) and resumeToken.&#x20;

```
# get the resumeToken from your REST API login - it's the authToken field
https://yourown.rocket.chat/home?resumeToken=abcd123456789
```

{% content-ref url="single-sign-on-iframe.md" %}
[single-sign-on-iframe.md](single-sign-on-iframe.md)
{% endcontent-ref %}

As online security continues to evolve, Rocket.Chat remains committed to providing secure and efficient authentication methods for its users.
