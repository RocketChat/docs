# Identity Management FAQ

### What Identity Management features are exclusive to the Premium Plan?

While basic functionalities such as LDAP connection to sync user names and unique identifiers remain in the [community plan](../../readme/our-plans.md#community), the [premium plan](../../readme/our-plans.md) will exclusively offer extended user attribute sync, group/team management, and background sync.

{% hint style="success" %}
For an overview of the Identity Management features available across our various [plans](../../readme/our-plans.md), please refer to [authentication-across-plans.md](../../use-rocket.chat/authentication/authentication-across-plans.md "mention").
{% endhint %}

### What does LDAP, Active Directory, OAuth, and SAML mean ?

**Directory service**\
A directory service is a shared system that helps organize and manage various items and network resources, such as files, users, printers, and devices. Examples include Microsoft AD, NetIQ eDirectory, and Apache Directory.

**LDAP**\
**Lightweight Directory Access Protocol (LDAP)** is a protocol designed to enable easy access to and management of distributed directory information services over an IP network.

**SAML**\
**Security Assertion Markup Language(SAML)** is an open standard for exchanging authentication and authorization data between parties, particularly between an identity provider and a service provider.

**OAuth**\
OAuth is a widely-used open standard for granting websites and apps access to users' info on other platforms, without revealing passwords. Examples include Google, Facebook, LinkedIn, and Twitter.

### Why is Identity Management crucial?&#x20;

Integrating with your organization's user directory ensures timely updates to user access. For instance, when someone joins the organization, their Rocket.Chat account is automatically created, and when they leave, their account is promptly deactivated. This becomes more crucial as the user scale increases.

### What is the impact of Single Sign-On in Rocket.Chat?

**Single Sign-On (SSO)** allows users to authenticate once and access multiple independent software systems using a single set of credentials. SSO doesn't affect workspaces using social login capabilities (e.g., Google, LinkedIn), where users sign in through those platforms.

### Why am I unable to use the code I contributed to building for LDAP/SAML/Custom OAuth?

We are rewriting the LDAP feature in TypeScript and improving it over time.  If you can't use your code due to this, be rest assured that we acknowledge community contributions. For those who contributed to LDAP/SAML/Custom OAuth, steps are taken to ensure that the changes do not negatively impact your operations.

### How is my air-gapped environment impacted?&#x20;

If the Rocket.Chat workspace is [air-gapped](../../setup-and-configure/rocket.chat-air-gapped-deployment/) but linked to an internal LDAP server, subscribe to any of Rocket.Chat's [premium plan](../../readme/our-plans.md) to access advanced LDAP/SAML/OAuth features.

### Does the LDAP change affect the security or data privacy in my air-gapped environment?

No, there are no adverse effects.

### What does the "Bind successful but user was not found via search" error mean?

This error indicates that the login attempt was successful, but a follow-up search for the user on the LDAP Server returned no results. To resolve this, disable the "[**Find user after login**](broken-reference)" setting.

### **How can I prevent disabled LDAP users from logging into Rocket.Chat?**

Use the "[**Sync User Active State**](../../use-rocket.chat/authentication/ldap/ldap-premium-settings.md#advanced-sync)" setting in [#advanced-sync](../../use-rocket.chat/authentication/ldap/ldap-premium-settings.md#advanced-sync "mention"). Please be aware that compatibility with all LDAP Servers is not guaranteed.

### **Why can't I log in even though the setup seems correct?**

&#x20;If you're unable to log in without receiving error messages (and the last log entry is "Attempt to bind"), ensure that the LDAP account username doesn't match any local account username on your workspace. For instance, if you have a local user with the username "joe", enabling LDAP and attempting to log in with the same username "joe" from your LDAP server may fail without providing an error message. In this case, you won't be able to log in using "joe," your LDAP password, or your local password.

### **Why are users not created even though the setup seems correct?**

Every Rocket.Chat user must have an email address. Therefore, either the LDAP users have an email address or you set a default domain using the "**default domain**" setting in [ldap-data-sync-settings.md](../../use-rocket.chat/authentication/ldap/ldap-data-sync-settings.md "mention").

## References

* [Microsoft LDAP Search Filter Syntax](https://learn.microsoft.com/en-us/windows/win32/adsi/search-filter-syntax?redirectedfrom=MSDN)
