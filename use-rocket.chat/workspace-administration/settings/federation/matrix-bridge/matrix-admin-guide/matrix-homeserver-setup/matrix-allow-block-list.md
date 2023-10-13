---
description: >-
  Blocking or allowing specific domain names or IPs address to communicate with
  your Matrix Homeserver
---

# Matrix Allow/Block List

### Synapse

To configure your Matrix federation for specific workspaces, you can define a subset of whitelisted servers in your Synapse server's configuration file _**(data/homeserver.yaml)**_. By specifying this whitelist, you control which Matrix servers are allowed to federate with your workspace. If you don't specify this whitelist, the default behavior is to allow federation with any Matrix server. You can block undesired communication with specific homeservers or allow only the desired ones.

{% hint style="info" %}
See the official [Synapse documentation](https://matrix-org.github.io/synapse/latest/usage/configuration/config\_documentation.html#federation\_domain\_whitelist) for more details about this configuration.
{% endhint %}

#### Block List

* Add the following to the Synapse configuration file:
  * `ip_range_blacklist`: Creates a block list by IP ranges (List all IPs you want as a YAML array).

{% hint style="info" %}
To learn more, see [Blacklisting IP ranges](https://matrix-org.github.io/synapse/latest/upgrade.html#blacklisting-ip-ranges).
{% endhint %}

* Then, restart synapse server with this command:

```
docker restart synapse
```

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
docker restart synapse
```

{% hint style="info" %}
To learn more, see [federation\_domain\_whitelist](https://matrix-org.github.io/synapse/latest/usage/configuration/config\_documentation.html#federation\_domain\_whitelist).
{% endhint %}

### Dendrite

Currently, Dendrite does not support creating allow/block lists.

## Federate Two or More Rocket.Chat Workspaces

To set up two Rocket.Chat workspaces for exclusive federation between themselves,

* [Configure each Rocket.Chat workspace](./#standalone-manual-installation) with its Matrix server separately&#x20;
* [Whitelist the domains](matrix-allow-block-list.md#allow-list) of both Rocket.chat workspaces on each instance.
