# LDAP User Search

Building upon the LDAP connection settings, the next crucial aspect in LDAP integration with Rocket.Chat is the LDAP user search. LDAP has built-in search capabilities to find users and groups from the directory that are permitted access.

To configure LDAP user search settings on your Rocket.Chat workspace, go to the **User Search** tab in LDAP menu and configure the following settings.

## **Find user after login**&#x20;

When enabled, it performs a search of the user's DN after binding to ensure that the bind was successful, preventing login with empty passwords when allowed by the active directory configuration.

## Search Filter

Enter the following search search filter fields to specify the context and scope of the search:

* **Base DN**: The fully qualified DN of an LDAP subtree you want to search for users and groups. There is no limit to the number of groups you can add, but they must be defined in the same domain base as the users who belong to them. For example, `ou=Users+ou=Projects,DC=support,DC=rocket,DC=chat`.

{% hint style="info" %}
If you specify restricted user groups, only users that belong to those groups will be in scope. We recommend setting the top level of your LDAP directory tree as your domain base and using a search filter to control access.
{% endhint %}

*   **Filter**: If specified, only users that match this filter will be allowed to log in. If no filter is selected, all users within the scope of the defined domain base can sign in.&#x20;

    For example, for Active Directory:

    ```
    memberOf=cn=ROCKET_CHAT,ou=General Groups
    ```

    For example, for OpenLDAP (extensible match search):

    ```
    ou:dn:=ROCKET_CHAT
    ```
* **Scope**: The search scope. Provide the specific portion of the subtree that you want to search. For example, `sub`.
* **Search Field**: The LDAP attribute that identifies the LDAP user who attempts authentication. This field should be `sAMAccountName` for most Active Directory installations, but it may be `uid` for other LDAP solutions, such as OpenLDAP. You can use mail to identify users by email or whatever attribute you want. You can use multiple values separated by a comma to allow users to log in using multiple identifiers like username or email.
* **Search Page Size**: The maximum number of entries each result page will return to be processed.
* **Search Size Limit**: The maximum number of entries to return. It must be greater than the **Search Page Size**.

## Group Filter

Search users by the groups defined in your LDAP directory.

* **Enable LDAP User Group Filter**: Restrict user access in an LDAP group. It is useful for allowing OpenLDAP servers without a `memberOf` filter to limit group access.
* **Group ObjectClass**: The `objectclass` that identifies the groups. For example, `OpenLDAP:groupOfUniqueNames`.
* **Group ID Attribute**: For example, `*OpenLDAP:*cn`.
* **Group Member Attribute**: For example, `*OpenLDAP:*uniqueMember`.
* **Group Member Format**: For example, `*OpenLDAP:*uid=#{username},ou=users,o=Company,c=com`.
* **Group name**: Group name to which the user should belong.

Click **Save changes**. Click **Test LDAP Search** to test the user search configuration.

With the LDAP User Search properly configured, Rocket.Chat is now equipped to locate and authenticate users from the LDAP directory. Next, configure your LDAP data sync and user mapping settings in the next topic.
