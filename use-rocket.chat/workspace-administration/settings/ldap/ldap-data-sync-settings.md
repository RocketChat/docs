# LDAP Data Sync Settings

After configuring the LDAP User Search, the next integral component in LDAP integration with Rocket.Chat is the LDAP Data Sync Settings. This feature ensures that user data in Rocket.Chat remains consistent with the information in the LDAP directory.

**Key LDAP Data Sync Settings**

* **Unique Identifier Field**: The field that links the LDAP user and the Rocket.Chat user. You can include multiple values separated by a comma to get the value from the LDAP record.
* **Merge Existing Users**: Whether or not to merge existing users. When importing a user from LDAP and a user with the same username already exists, the new user data (including info and password) will merge into the existing data.
* **Update User Data on Login**: Enable to update user data on login.
* **Update User Data on Login with OAuth services**: Enable to update user data on login with OAuth services.
* **Default Domain**: If provided, the default domain generates a unique email for users whose emails were not imported from LDAP. The mounting of the email will be `username@default domain` or `unique id@default domain`.

#### Avatar

* **Sync User Avatar**: Enable syncing the user's avatar.
* **User Avatar Field**: The field used as an avatar for users. Leave blank to use `thumbnailPhoto` first and `jpegPhoto` as a fallback.

#### Mapping

* **Username Field**: Usually, the `sAMAccountName` is used as a username for new users. Leave empty to let the user pick their Rocket.Chat username. You can use template tags too, for example:

```
#{givenName}.#{sn}
```

* **Email Field**: The LDAP field binds the user's email.
* **Name Field**: LDAP name filed for binding.

With these LDAP Data Sync Settings in place, Rocket.Chat ensures a high level of data integrity and consistency, reflecting real-time changes from the LDAP directory in the user's Rocket.Chat profile. This seamless synchronization enhances user experience and administrative efficiency.
