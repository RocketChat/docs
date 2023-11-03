# Identity Management EE FAQ

<details>

<summary>What exactly will be implemented on Enterprise Plan only? When will this be effective?</summary>

Rocket.Chat launched a re-factored set of advanced LDAP features on September 28, 2021. The ability to connect to your LDAP server to sync user names and unique identifiers will remain in the Community plan with existing social login features.

Selected advanced LDAP features, including extended user attribute sync, group/team management, background sync, and SAML integration, will be implemented only in the Enterprise plan. This change will enable Rocket.Chat to support ongoing improvements to our suite of identity management solutions while continuing to make our primary LDAP directory synchronization codebase available for use and extension by the Rocket.Chat community.

To learn more, visit [identity-management-ee-vs-ce.md](../../setup-and-configure/advanced-workspace-management/identity-management-ee-vs-ce.md "mention").

</details>

<details>

<summary>What LDAP, Active Directory, OAuth, and SAML mean, and how do these things work together?</summary>

* **Directory service**\
  Directory service is a shared information infrastructure for locating, managing, administering, and organizing everyday items and network resources, including volumes, folders, files, printers, users, groups, devices, telephone numbers, and other objects.\
  E.g., Microsoft AD, NetIQ eDirectory, and Apache Directory.
* **LDAP**\
  Lightweight Directory Access Protocol is an open, vendor-neutral, industry-standard application protocol for accessing and maintaining distributed directory information services that allow sharing of information about users, systems, networks, services, and applications.
* **SAML**\
  Security Assertion Markup Language is an open standard for exchanging authentication and authorization data between parties, particularly between an identity provider and a service provider.
*   **OAuth**\
    Open Authorization is an open standard for access delegation, commonly used for Internet users to grant websites or applications access to their information on other websites without giving them the passwords.

    E.g. Google, Facebook, LinkedIn, and Twitter.
* **SSO**\
  Single sign-on is an authentication scheme allowing users to log in with a single ID and password to any related yet independent software systems.

</details>

<details>

<summary>Why is Identity Management (and authentication/authorization services) important?</summary>

Integrating with your organization’s user directory service is essential for always keeping your users’ access up to date. For example, when someone joins your organization, their Rocket user can be created automatically, and when they leave, their user can be promptly deactivated. The bigger the user count, the more significant it gets.

</details>

<details>

<summary>What will community users not be able to do anymore? Examples.</summary>

Community users can connect an LDAP service used by their organization to and sync user email, name, and username; use the fallback option and encrypted settings. Basic SAML sync options and Oauth for all providers (Apple, Dolphin, Drupal, Facebook, GitHub, GitHub, Enterprise, GitLab, Google, Linkedin, Meteor, Nextcloud, Tokenpass, Twitter, and WordPress) will continue available in Community plan.

\
[View full functionalities](../../setup-and-configure/advanced-workspace-management/identity-management-ee-vs-ce.md)

</details>

<details>

<summary>Will the new implementation affect Single Sign-On capabilities? Please explain single sign-on.</summary>

Single Sign-On (SSO) is an authentication scheme allowing users to log in with a single ID and password to any related yet independent software systems. True single sign-on enables users to log in once and access services without re-entering authentication factors. This change will not impact workspaces that use social login capabilities (users sign on via Google, Linked In, etc.).

</details>

<details>

<summary>I've contributed to building LDAP/SAML/Custom Oauth and now I can't use my code. What should I do?</summary>

We are rewriting the LDAP feature to TypeScript and making improvements on top of it. Naturally, over time parts of the code will be changed. We recognize all portions of our platform had contributions from our community. For those who contributed to LDAP/SAML/Custom Oauth, we will ensure it will not negatively impact their operation.

</details>

<details>

<summary>How will this affect my air-gapped (no internet connection) environment? Can’t we just pull from our intranet easily anyway?</summary>

If the Rocket.Chat server is air-gapped but integrated with an internal LDAP server, so you must [apply for an enterprise plan license](../../setup-and-configure/enterprise-license-application.md) to access the complete suite of advanced LDAP/SAML/Oauth features when you upgrade.

</details>

<details>

<summary>The reason a division of our team/company uses RC is for security, and/or it is air-gapped. This LDAP change doesn’t seem to affect us for our purposes – but will this have some sort of unanticipated effect on our security processes/ability to maintain data privacy? If so, please explain so we can consider it further.</summary>

No there will not be ancillary effects.

</details>

<details>

<summary>What's the "Bind successful but user was not found via search" error?</summary>

This error means the login attempt was successful, but a subsequent search for the user on the LDAP Server yielded no results. To disable this search, turn off the "Find user after login" setting.

</details>

<details>

<summary>How do I stop disabled LDAP users from logging in on Rocket.Chat?</summary>

Use the "Sync User Active State" setting under **Advanced Sync,** but it is not yet compatible with all LDAP Servers.

</details>

<details>

<summary>I cannot log in even though everything looks good</summary>

If you cannot log in without getting any error messages (the last thing in the log you see is Attempt to bind ), make sure the username of your LDAP account does not match any username of a local account. For example, if you created a local user with the username joe, then enable LDAP and try to log in with a username joe (who exists on your LDAP server), it will silently fail without any error message in your log simply saying username or password does not match. You can no longer log in by joe, your LDAP password, or your local password.

</details>

<details>

<summary>No users are created even if everything looks good</summary>

Every Rocket.Chat user has to have an email. So either the LDAP users need to have an email or you have to set a default domain using the setting "default domain".

</details>

## References

* [MS LDAP Info](https://msdn.microsoft.com/en-us/library/windows/desktop/aa746475\(v=vs.85\).aspx)
