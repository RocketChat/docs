# Authentication

For Rocket.Chat workspaces, the basic authentication method involves authenticating with a username/email and password.

Other authentication methods include:

[**LDAP**](../../../use-rocket.chat/workspace-administration/settings/ldap/)**:**  Leverage the Active Directory application or Identity Management System through **Lightweight Directory Access Protocol**

****[**SAML**](../../../use-rocket.chat/workspace-administration/settings/saml/)**:** Exchanging authentication and authorization data between parties through **Security Assertion Markup Language.**

****[**OpenID**](open-id-connect/)**:** Enable users to authenticate with their existing OpenID provider.

****[**OAuth**](../../../use-rocket.chat/workspace-administration/settings/oauth/)**:** Authorize users via third-party applications like Google and Github without sharing their login credentials.

## External Authentication

If you need to log in users from your website automatically, visit [iframe integration](../../../use-rocket.chat/workspace-administration/settings/account-settings/#iframe) in combination with [deeplinking](https://developer.rocket.chat/rocket.chat/deeplink) and the resumeToken.

```
# get the resumeToken from your REST API login - it's the authToken field
https://yourown.rocket.chat/home?resumeToken=abcd123456789
```

{% content-ref url="single-sign-on-iframe.md" %}
[single-sign-on-iframe.md](single-sign-on-iframe.md)
{% endcontent-ref %}
