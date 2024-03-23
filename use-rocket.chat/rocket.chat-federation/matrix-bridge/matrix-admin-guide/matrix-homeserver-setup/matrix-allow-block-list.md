---
description: >-
  Blocking or allowing specific domain names or IPs address to communicate with
  your Matrix Homeserver
---

# Matrix Allow/Block List

### Synapse

To configure Matrix federation for specific workspaces, define a subset of servers that can federate with your workspace in the Synapse server's configuration file _**(homeserver.yaml)**_.  If you don't specify the whitelist, the default behavior is to allow federation with any Matrix server. You can block undesired communication with specific homeservers or allow only the desired ones.

{% hint style="info" %}
* To access the **homeserver.yam**l file for [automated installation](./#automated-installation), navigate to the _**/data/matrix/synapse**_ directory.
* To access the **homeserver.yaml** file for [manual installation](./#standalone-manual-installation), navigate to the _**/data**_ directory.

See the official [Synapse documentation](https://matrix-org.github.io/synapse/latest/usage/configuration/config\_documentation.html#federation\_domain\_whitelist) for more details about this configuration.
{% endhint %}

#### Allow List

* Add the following to the Synapse configuration file:
  * `ip_range_whitelist`: Creates an allow list by IP ranges (List all IPs you want as a YAML array).
  * `federation_domain_whitelist`: Creates an allow list by domain names (List all domain names you want as a YAML array). Here is an example:

```
federation_domain_whitelist:
  - lon.example.com
  - nyc.example.com
  - syd.example.com
```

* Then, restart synapse server with this command:

```
docker restart <synapse-container-name>
```

{% hint style="info" %}
To learn more, see [federation\_domain\_whitelist](https://matrix-org.github.io/synapse/latest/usage/configuration/config\_documentation.html#federation\_domain\_whitelist).
{% endhint %}

#### Block List

* Add the following to the Synapse configuration file:
  * `ip_range_blacklist`: Creates a block list by IP ranges (List all IPs you want as a YAML array).

{% hint style="info" %}
To learn more, see [Blacklisting IP ranges](https://matrix-org.github.io/synapse/latest/upgrade.html#blacklisting-ip-ranges).
{% endhint %}

* Then, restart synapse server with this command:

```
docker restart <synapse-container-name>
```

### Dendrite

Currently, Dendrite does not support creating allow/block lists.

## Federate Two or More Rocket.Chat Workspaces

To set up two Rocket.Chat workspaces for exclusive federation between themselves,

* [Configure each Rocket.Chat workspace](./#standalone-manual-installation) with its Matrix server separately&#x20;
* [Whitelist the domains](matrix-allow-block-list.md#allow-list) of both Rocket.chat workspaces on each instance.
