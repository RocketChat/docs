---
description: >-
  Blocking or allowing specific domain names or IPs address to communicate with
  your Matrix Homeserver
---

# Matrix Allow/Block List

### Synapse

To create allow/block lists on the Synapse installation, change it directly in the configuration file (_homeserver.yaml_). You can block undesired communication with specific homeservers or allow only the desired ones.

#### Block List

Add the following to the Synapse configuration file:

* `ip_range_blacklist`: Creates a block list by IP ranges (List all IPs you want as a YAML array).

{% hint style="info" %}
To learn more, see [Blacklisting IP ranges](https://matrix-org.github.io/synapse/latest/upgrade.html#blacklisting-ip-ranges).
{% endhint %}

#### Allow List

Add the following to the Synapse configuration file:

* `ip_range_whitelist`: Creates an allow list by IP ranges (List all IPs you want as a YAML array).
* `federation_domain_whitelist`: Creates an allow list by domain names (List all domain names you want as a YAML array).

After creating the desired configuration, restart the Synapse server; everything you specified should be blocked.

{% hint style="info" %}
To learn more, see [federation\_domain\_whitelist](https://matrix-org.github.io/synapse/latest/usage/configuration/config\_documentation.html#federation\_domain\_whitelist).
{% endhint %}

### Dendrite

Currently, Dendrite does not support creating allow/block lists.
