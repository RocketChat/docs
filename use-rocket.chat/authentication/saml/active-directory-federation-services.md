# Active Directory Federation Services

Microsoft's [Active Directory Federation Services (ADFS)](https://learn.microsoft.com/en-us/windows-server/identity/ad-fs/ad-fs-overview) provides users with single sign-on access to systems and applications. It's used to securely share digital identity and permissions across applications. This simplifies user experience while implementing robust security policies.

Rocket.Chat supports authentication with ADFS and ADFS provides an IdP service that can be consumed by Rocket.Chat for authentication.&#x20;

{% hint style="info" %}
If you are using Active Directory _without_ Federation Services, you should perform the user synchronization via LDAP only.
{% endhint %}

{% hint style="warning" %}
This document considers that your ADFS environment is deployed and running. For further information, please refer to [this guide](https://docs.microsoft.com/en-us/previous-versions/dynamicscrm-2016/deployment-administrators-guide/gg188612\(v=crm.8\)).
{% endhint %}

The Rocket.Chat configuration should be done as follows:

* Navigate to **Administration** > **Workspace** > **Settings** > **SAML** and configure the entry points and the IdP path.
* Add the private key certificate related to the ADFS server.

{% hint style="info" %}
ADFS uses `.pfx` certificate extensions (widely used on Windows landscapes) and Rocket.Chat uses `.pem` files. So, before setting the certificate here, it must be converted.
{% endhint %}

* Set the **Custom Authn Context** and **User Data Field Map** according to the configuration you have on your ADFS system.

{% hint style="info" %}
The Custom Authorization context fields must match the authentication methods selected on ADFS. Microsoft Federation Services provides two authentication methods: **Forms Authentication** and **Windows Authentication**.
{% endhint %}

![](<../../../../.gitbook/assets/adfs\_1 (1).png>)

* **Forms authentication**: If this option is set as 'primary', a login form provided by ADFS will be called by the SAML assertion to perform the login operation. For this method, the recommended **Custom Authn Context** in Rocket.Chat should be `urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport`
* **Windows authentication**: if this option is set as 'primary', ADFS will expect the login assertions on the Windows Domain level. To set a full SSO scenario between Rocket.Chat and ADFS, the recommended **Custom Authn Context** should be `_urn:federation:authentication:windows_`

Once all your settings are complete, you can use Rocket.Chat with your ADFS integration to maintain security, troubleshoot issues, and monitor authentication events.
