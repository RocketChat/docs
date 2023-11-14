# LDAP

**Lightweight Directory Access Protocol (LDAP)** enables anyone locate data about your server or company. Rocket.Chat allows you to connect with your Active Directory application or Identity Management System through **LDAP**. You can leverage advanced settings such as background sync, roles mapping from groups, auto-logout, and advanced user data sync.

To configure **LDAP** authentication,&#x20;

* Go to **Administration** > **Workspace** > **Settings** > **LDAP**
* Enable **LDAP**, and [add configurations](ldap-connection-setting.md) to connect with your **LDAP** server.&#x20;

[Rocket.Chat](http://rocket.chat) supports a variety of **LDAP** capabilities and associated identity management features. For example, you can import users from an active directory into your workspace.&#x20;

{% hint style="info" %}
For an overview of the LDAP features available across our various [plans](../../../../readme/our-plans.md), please refer to [identity-management-plan-comparison.md](../../../../setup-and-configure/advanced-workspace-management/identity-management-plan-comparison.md "mention").
{% endhint %}

## LDAP Actions

The following actions can be located at the top section of the LDAP settings interface.

* **Test Connection**: This will use your provided values and test for a connection. It will test the authentication and encryption but not the syncing settings.
* **Test LDAP Search**: Searches and notify if a user is found as configured in the user search page.
* **Sync Now**: Syncs your LDAP data based on the Data Sync configurations.

{% hint style="warning" %}
All these actions except "**LDAP Documentation"** are exclusively available to workspaces subscribed to the [Enterprise plan](../../../../readme/our-plans.md#enterprise-plan).
{% endhint %}

{% hint style="info" %}
If you don't get a response alert for these actions, always check the log in [view-logs.md](../../view-logs.md "mention") to confirm if they were successful or there is an error.
{% endhint %}

{% content-ref url="ldap-connection-setting.md" %}
[ldap-connection-setting.md](ldap-connection-setting.md)
{% endcontent-ref %}

{% content-ref url="ldap-user-search.md" %}
[ldap-user-search.md](ldap-user-search.md)
{% endcontent-ref %}

{% content-ref url="ldap-data-sync-settings.md" %}
[ldap-data-sync-settings.md](ldap-data-sync-settings.md)
{% endcontent-ref %}

{% content-ref url="ldap-examples.md" %}
[ldap-examples.md](ldap-examples.md)
{% endcontent-ref %}
