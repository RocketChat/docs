# LDAP

**Lightweight Directory Access Protocol (LDAP)** is a protocol designed to enable easy access to and management of distributed directory information services over an IP network. Rocket.Chat supports LDAP integration, allowing seamless connection with your organization's Active Directory or Identity Management System.

**Key Features of LDAP Integration**

1. **Data Accessibility**: LDAP serves as a gateway to access vital data about your server or company, ensuring that user information is seamlessly integrated and consistently updated across platforms.
2. **Advanced Settings Utilization**: The integration goes beyond basic connectivity. It includes features like:
   * **Background Sync**: Keeps user data synchronized without manual intervention, ensuring that changes in the LDAP directory are automatically reflected in Rocket.Chat.
   * **Roles Mapping from Groups**: This feature allows for the automatic assignment of roles in Rocket.Chat based on group memberships in your LDAP directory, facilitating permission management.
   * **Auto-Logout**: Enhances security by automatically logging out users from Rocket.Chat when certain conditions in the LDAP directory are met.
   * **Advanced User Data Sync**: Provides a comprehensive synchronization of user data, ensuring that all relevant attributes and settings are consistently mirrored in Rocket.Chat.

{% hint style="info" %}
For an overview of the LDAP features available across our various [plans](../../../../readme/our-plans.md), please refer to [identity-management-plan-comparison.md](../../../../setup-and-configure/advanced-workspace-management/identity-management-plan-comparison.md "mention").
{% endhint %}

To configure **LDAP** authentication,&#x20;

* Go to **Administration** > **Workspace** > **Settings** > **LDAP**
* Enable **LDAP**, and [add configurations](configure-ldap-connection.md) to connect with your **LDAP** server.&#x20;

#### LDAP Quick Actions

The following actions can be located at the top section of the LDAP settings interface.

* **Test Connection**: This will use your provided values and test for a connection. It will test the authentication and encryption but not the syncing settings.
* **Test LDAP Search**: Searches and notify if a user is found as configured in the user search page.
* **Sync Now**: Syncs your LDAP data based on the Data Sync configurations.

{% hint style="success" %}
These actions are exclusively available to workspaces subscribed to the [Enterprise plan](../../../../readme/our-plans.md#enterprise-plan).
{% endhint %}

{% hint style="info" %}
If you do not receive an alert confirming these actions, always consult the log under [view-logs.md](../../view-logs.md "mention") to check for their success or to identify any errors.&#x20;
{% endhint %}

Integrating LDAP with Rocket.Chat not only simplifies user management but also strengthens security and ensures data consistency across your digital ecosystem. As we move to the next section, we will delve deeper into the configuration process, guiding you through the steps to seamlessly integrate LDAP with your Rocket.Chat workspace, thereby unlocking its full potential.
