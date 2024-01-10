# Configure LDAP Connection

Configuring the LDAP connection process is the first step for establishing a secure and efficient link between your Rocket.Chat instance and the LDAP directory.

To set up the **Authentication**, **Timeouts**, and **Encryption** settings for your LDAP connection, navigate to the **Connection** tab of the **LDAP** menu and set the following parameters:&#x20;

* **Enable**: Turns LDAP Authentication on or off.
* **Server Type**: Allows you to select the type of server you are connecting to. For example, `Active Directory`.
* **Host**: The LDAP connection host or domain. For example, `ldap.example.com`, `10.0.0.30`,   `adfs.support.rocket.chat`
* **Port**: The LDAP connection Port, usually `389` or `636`.
* **Reconnect**: Try reconnecting automatically when the connection is interrupted for some reason while executing operations.
* **Login Fallback**: Allow regular password users to log in to Rocket.Chat. It will also let LDAP users continue using Rocket.Chat if the LDAP server is down.

{% hint style="info" %}
You can refer to [LDAP Setup](../../workspace-administration/settings/ldap/ldap-setup.md) for sample values of various settings.
{% endhint %}

## Authentication

Configure the following authentication settings to sign in your users to the workspace:

* **Enable**: Enable or disable authentication to skip binding the user DN and password.
* **User DN**:  The administrative account login details or LDAP user with access to the active directory. This user can perform user lookups to authenticate other users when they sign in. This is typically a service account explicitly created for third-party integrations. Use a fully qualified name, such as `CN=Administrator,CN=Users,DC=support,DC=rocket,DC=chat`.
* **Password**: The password for the **User DN**.

## Encryption

You can set the following encryption details for the workspace to communicate with the LDAP server:

* **Encryption**: The encryption method used to secure communications to the LDAP server. Examples include:&#x20;
  * **No encryption**
  * **SSL/LDAPS** (if the LDAP server is encrypted from the start)
  * **StartTLS** (if you upgrade to encrypted communication once connected)
* **CA Cert**: The CA certificate to use in signing.
* **Reject Unauthorized**: Disable this option to allow certificates that can not be verified. Usually, **Self Signed Certificates** will require this option disabled to work.

## Timeouts

The following fields are used to define the connection timeout settings to the LDAP server:

* **Timeout (ms)**: Waiting time in milliseconds after a search is initiated before returning an error.
* **Connection Timeout (ms)**: Maximum time in milliseconds before connection timeout.
* **Idle Timeout (ms)**: Waiting time in milliseconds after the latest LDAP operation until closing the connection. Each operation opens a new connection.

After completing the settings, click **Save changes**. To check whether your LDAP connection is correctly configured, click **Test Connection**. A successful connection displays the **LDAP Connection Successful** message.&#x20;

Your Rocket.Chat workspace is now primed for efficient user authentication and management via LDAP. Further, customize your LDAP settings by configuring user search and user group options in the next topic.
