# LDAP User Search

Building upon the LDAP connection settings, the next crucial aspect in LDAP integration with Rocket.Chat is the LDAP user search. This functionality is central to how Rocket.Chat locates and authenticates users within the LDAP directory.

To perform an LDAP user search, navigate to the **User Search** tab in LDAP menu and configure the following settings.

## **Find user after login**&#x20;

When enabled, a search to find the user's DN is performed after binding to ensure it successfully prevents login with empty passwords when allowed by the AD configuration.

## Search Filter

* **Base DN**: The fully qualified Distinguished Name (DN) of an LDAP subtree you want to search for users and groups. There is no limit to the number of groups you can add, but they must be defined in the same domain base as the users who belong to them. Example: `ou=Users+ou=Projects,dc=Example,dc=com`.

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
* **Scope**: The search scope.
* **Search Field**: The LDAP attribute that identifies the LDAP user who attempts authentication. This field should be `sAMAccountName` for most Active Directory installations, but it may be `uid` for other LDAP solutions, such as OpenLDAP. You can use mail to identify users by email or whatever attribute you want. You can use multiple values separated by a comma to allow users to log in using multiple identifiers like username or email.
* **Search Page Size**: The maximum number of entries each result page will return to be processed.
* **Search Size Limit**: The maximum number of entries to return. It must be greater than the Search Size.

## Group Filter

The group filter is for OpenLDAP as it doesn't have a `memberOf` filter.

* **Enable LDAP User Group Filter**: Restrict user access in an LDAP group. It is useful for allowing OpenLDAP servers without a `memberOf` filter to limit group access.
* **Group ObjectClass**: The `objectclass` that identifies the groups. For example, `OpenLDAP:groupOfUniqueNames`.
* **Group ID Attribute**: For example, `*OpenLDAP:*cn`.
* **Group Member Attribute**: For example, `*OpenLDAP:*uniqueMember`.
* **Group Member Format**: For example, `*OpenLDAP:*uid=#{username},ou=users,o=Company,c=com`.
* **Group name**: Group name to which the user should belong.

With the LDAP User Search properly configured, Rocket.Chat is now equipped to efficiently locate and authenticate users from the LDAP directory, ensuring a secure and streamlined login process. Next, configure your LDAP data sync and user mapping settings in the next topic.
