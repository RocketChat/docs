# LDAP Examples

After exploring the comprehensive LDAP settings in Rocket.Chat, it's beneficial to examine practical examples of these configurations. These examples provide a clearer understanding of how to apply LDAP settings in real-world scenarios.

## **Environment**

* Host = `ldap.domain.com`
* Group = `CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com` (Access Control Group)
* Proxy User = `rocket.service@domain.com or CN=rocket service,CN=Users,DC=domain,DC=com` (DN or userPrincipalName)
* Proxy User password = `urpass` (Proxy user password)

{% hint style="warning" %}
Replace the values above with your respective environment.
{% endhint %}

## Log in with a username

* LDAP\_Enable = `True`
* LDAP\_Dn = `dc=domain,dc=com`
* LDAP\_Url = `ldap://ldapserver`
* LDAP\_Port = `389`
* LDAP\_Bind\_Search = `{"filter": "(&(objectCategory=person)(objectclass=user)(memberOf=CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com)(sAMAccountName=#{username}))", "scope": "sub", "userDN": "rocket.service@domain.com", "password": "urpass"}`

If you need to auth users from subgroups in LDAP, use this filter:

LDAP\_Bind\_search = `{"filter": "(&(objectCategory=person)(objectclass=user)(memberOf:1.2.840.113556.1.4.1941:=CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com)(sAMAccountName=#{username}))", "scope": "sub", "userDN": "rocket.service@domain.com", "password": "urpass"}`

## Log in with an email address

* LDAP\_Enable = `True`
* LDAP\_Dn = `dc=domain,dc=com`
* LDAP\_Url = `ldap://ldapserver`
* LDAP\_Port = `389`
* LDAP\_Bind\_Search = `{"filter": "(&(objectCategory=person)(objectclass=user)(memberOf=CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com)(mail=#{username}))", "scope": "sub", "userDN": "rocket.service@domain.com", "password": "urpass"}`

## Log in with either an email address or username

* LDAP\_Enable = `True`
* LDAP\_Dn = `dc=domain,dc=com`
* LDAP\_Url = `ldap://ldapserver`
* LDAP\_Port = `389`
* LDAP\_Bind\_Search = `{"filter": "(&(objectCategory=person)(objectclass=user)(memberOf=CN=ROCKET_ACCESS,CN=Users,DC=domain,DC=com)(|(mail=#{username})(sAMAccountName=#{username})))", "scope": "sub", "userDN": "rocket.service@domain.com", "password": "urpass"}`

## LDAP SSL connection

When you enable LDAP, the login form will log in users via LDAP instead of the internal account system.

Here, we are using Stunnel to create a secure connection to the LDAP server. Create a new configuration file `/etc/stunnel/ldaps.conf` with the following content:

```
options = NO_SSLv2

[ldaps]
client = yes
accept = 389
connect = your_ldap_server.com:636
```

To enable Stunnel automatic startup, change the `ENABLED` variable in `/etc/default/stunnel4` to `1`:

```bash
# Change to one to enable stunnel automatic startup
ENABLED=1
```

Finally, on the Rocket.Chat server under `/admin/LDAP` set these values:

* `LDAP_Url = localhost`
* `LDAP_Port = 389`

By tailoring these settings to your specific environment, you can ensure a secure, efficient, and user-friendly experience. As we conclude this section, remember that these examples serve as a guide, and it's crucial to adapt them to the unique requirements of your workspace.

This concludes the LDAP configuration section, which provides the various connection and user management settings in Rocket.Chat.&#x20;
