# LDAP Premium Settings

<figure><img src="../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

On this page, we describe LDAP premium settings, available exclusively to workspaces subscribed to Rocket.Chat's [premium plans](../../../readme/our-plans.md). These settings offer advanced capabilities for syncing and managing user data and roles.

## **Advanced Sync**

Set the following advanced sync settings:

* **Sync User Active State**: Determine if users should be enabled or disabled on Rocket.Chat based on the LDAP status. The options are as follows:
  * **Do nothing**: No changes are made to the user status.
  * **Disable Users**: Disable users not found on sync.
  * **Enable Users**: Re-enable users found on LDAP background sync.
  * **Enable and Disable Users**: Enable and disable users according to the LDAP user status.\
    To verify the user status, search for the user from **Administration** > **Workspace** > **Users**. The status will be displayed accordingly.

{% hint style="info" %}
* The `pwdAccountLockedTime` attribute will be used to determine if the user is disabled. This setting is not yet compatible with all LDAP Servers, so if you don't use the `pwdAccountLockedTime` attribute, you may want to disable it completely.
* The `pwdAccountLockedTime` attribute is only available on **OpenLDAP** but not on **Windows Server AD**. For **Windows Server AD**, the `userAccountControl` attribute will be used to determine if the user is disabled or not.
{% endhint %}

* **Attributes to Query**: Specify which attributes should be returned on LDAP queries, separating them with commas. Defaults to everything. `*` represents all regular attributes and `+` represents all operational attributes. Make sure to include every attribute that is used by every Rocket.Chat sync option.

## Auto Logout Deactivated Users

Set the user logout behavior with the following fields:

* **Enable Auto Logout**: Set true to enable auto-logout.
* **Auto Logout Interval**: This allows you to set the interval for auto-logout. For example, every five minutes.

## Background Sync <a href="#z21x5q1bor" id="z21x5q1bor"></a>

Configure the background sync behavior:

* **Background Sync**: Enable periodic background sync.
* **Background Sync interval**: Select the interval between synchronizations, using the [Cron Text](https://bunkat.github.io/later/parsers.html#text) format. For example, once every six hours.
* **Background Sync Import New Users**: Import all users (based on your filter criteria) that exist in LDAP and that do not exist in Rocket.Chat.
* **Background Sync Update Existing Users**: This will sync the avatar, fields, username, etc (based on your configuration) of all users already imported from LDAP on every **Sync Interval**.
* **Background Sync Merge Existing Users**: Merge all users (based on your filter criteria) that exist in LDAP and also exist in Rocket.Chat. To enable this, activate the **Merge Existing Users** setting in the **Data Sync** tab.
* **Automatically disable users that are no longer found on LDAP**: This option will deactivate users on Rocket.Chat when their data is not found on LDAP. Any rooms owned by those users will be automatically assigned to new owners, or removed if no other user has access to them. You can verify this by searching for the user from **Administration** > **Workspace** > **Users**. The status will be displayed as `Disabled`.
* **Avatar Background Sync**: Enable a separate background process to sync user avatars.
* **Avatar Background Sync Interval**: The interval between avatar sync, using the [Cron Text](https://bunkat.github.io/later/parsers.html#text) format.

## Sync Channels

You can sync your LDAP groups with the channels in your workspace using the following fields:

* **Auto Sync LDAP Groups to Channels**: Enable this feature to automatically add users to a channel based on their LDAP group.
* **Channel Admin**: When channels are auto-created that do not exist during a sync, this user will automatically become the admin for the channel.
* **User Group Filter**: The LDAP search filter checks if a user is in a group. If the search returns any results, the user is considered to be in the group. When performing the search, the following strings, if present in the filter, will be substituted with data from the user and group whose membership status is being checked:
  * `#{username}` - Replaced with the username of the user in Rocket.Chat.
  * `#{groupName}` - Replaced with the name of the group in LDAP.
  * `#{userdn}` - Replaced with the LDAP DN of the user.
* **LDAP Group BaseDN**: The LDAP group base DN.
* **LDAP Group Channel Map**: Map LDAP groups to Rocket.Chat channels in JSON format. For example, the following objectives will add any user in the LDAP group `employee` to the `general` channel on Rocket.Chat.

```json
{
    "employee": "general"
}
```

* **Auto Remove Users from Channels**: Enabling this will remove any user in a channel that does not have the corresponding LDAP group. This will happen in every login and background sync, so removing a group on LDAP will not instantly remove access to channels on Rocket.Chat.

## Sync Custom Fields <a href="#id-46mhpg4k6kv" id="id-46mhpg4k6kv"></a>

* **Sync Custom Fields**: Enable to activate custom field sync.
* **Custom Fields Mapping**: Map the custom fields to sync.

## Sync Roles <a href="#y262hx6p5o9" id="y262hx6p5o9"></a>

You can sync the user roles from your LDAP groups to your workspace.

* **Sync LDAP Groups**: Enable this setting to activate role mapping from user groups on your workspace.
* **Auto Remove User Roles**: Enable this setting to automatically remove roles from LDAP users that don't have the corresponding group. This will only remove roles automatically that are set under the **User Data Group Map**.
* **User Group Filter**: The LDAP search filter checks if a user is in a group. If the search returns any results, the user is considered to be in the group. When performing the search, the following strings, if present in the filter, will be substituted with data from the user and group whose membership status is being checked:
  * `#{username}` - Replaced with the username of the user in RocketChat
  * `#{groupName}` - Replaced with the name of the group in LDAP
  * `#{userdn}` - Replaced with the LDAP Distinguished Name of the user
* **LDAP Group BaseDN**: The LDAP BaseDN is used to determine if users are in a group.
* **User Data Group Map**: The mapping of LDAP groups to Rocket.Chat roles in JSON format. For example, the following object will map the "rocket-admin" LDAP group to Rocket.Chat's "admin" role and the "tech-support" group to the "support" role. It's also possible to map one group to multiple roles ("manager" group to "leader" and "moderator" roles).

```json
{
	"rocket-admin": "admin",
	"tech-support": "support",
	"manager": ["leader", "moderator"]
}
```

## Sync Teams <a href="#h8eyqbx7wnb" id="h8eyqbx7wnb"></a>

Here you can map and sync LDAP teams to the workspace.

* **Enable team mapping from LDAP to Rocket.Chat**: Enables team mapping from LDAP to Rocket.Chat.
* **Team mapping from LDAP to Rocket.Chat**: Team mapping from LDAP to Rocket.Chat.
* **Validate mapping for each login**: Determine if users' teams should be updated every time they log in to Rocket.Chat. The team will be loaded only on their first login if this is turned off.
* **LDAP Teams BaseDN**: The LDAP BaseDN is used to look up user teams.
* **LDAP Team Name Attribute**: The LDAP attribute that Rocket.Chat should be used to load the team's name. You can specify more than one attribute name by separating them with a comma.
* **LDAP query to get user groups**: LDAP query to get the LDAP groups that the user is part of

The LDAP premium settings in Rocket.Chat provide a robust framework for advanced user data synchronization and role management, enhancing the administrative capabilities and user experience in premium workspaces. These settings ensure that Rocket.Chat remains in sync with the LDAP directory, reflecting real-time changes and maintaining data integrity.&#x20;

Next, take a look at some examples of the LDAP settings that you can configure based on your requirements.
