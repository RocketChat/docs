---
description: Configuring Rocket.Chat via environment variables
---

# Environment Variables

Rocket.Chat can be configured on deployment with a set of environment variables. Setting these environment variables depends on the deployment method of choice.

Environmental variables can be specified to take affect how the workspace is deployed or affects the workspace settings and configuration.

## Deployment Environment Variables

Deployment environment variables are critical in deploying a workspace. Using the most common deployment method [docker-and-docker-compose](../prepare-for-your-deployment/rapid-deployment-methods/docker-and-docker-compose/ "mention") these variables can be set in the `compose.yml` file.&#x20;

Some of these environment variables are mandatory and others can be treated optionally.

### Mandatory Environment Variables

| Name              | Description                                                                                                                             | Comment                                                                                                                                                                                              |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ROOT\_URL         | The URL where your Rocket.Chat instance will be hosted on. In other words the URL you will enter on your browser to access Rocket.Chat. | Format is `[protocol]://[domain or ip][: optional port]/[optional path]`                                                                                                                             |
| PORT              | Port your Rocket.Chat instance will bind to.                                                                                            | If served under a FQDN (which is recommended) this doesn't matter much, as long as the configured one is not in reserved range and doesn't collide with any other services.                          |
| MONGO\_URL        | MongoDB connection string.                                                                                                              | Read the [official documentation](https://www.mongodb.com/docs/manual/reference/connection-string/) of MongoDB to understand better. This also somewhat depends on your deployment method of choice. |
| MONGO\_OPLOG\_URL | MongoDB connection string to the `local` database.                                                                                      | Similar to the above, except this one points directly to the `local` database. E.g. `mongodb://localhost:27017/local`                                                                                |

### Optional Environment Variables

| Name            | Description                                                   | Comment                                                                                                                                                                                                                                                                                                    |
| --------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BIND\_IP        | Which IP the node (or main Rocket.Chat) process will bind to. | If intended to be accessed under a domain, which is recommended, users should set this to the loopback address (i.e. `127.0.0.1`) or any **private** IP in the host that's accessible via a reverse proxy or load balancer. This will ensure the instance isn't accessible via any IP that isn't intended. |
| ADMIN\_USERNAME | Admin user's username.                                        | <p>Admin user can be created automatically on deployment. Set this to your admin user's desired username.<br><br><em>Mandatory if any of the other ADMIN_* variables are passed for a successful account creation.</em></p>                                                                                |
| ADMIN\_NAME     | Admin user's name.                                            | <p>Self explanatory.<br><br><em>Mandatory if any of the other ADMIN_* variables are passed for a successful account creation.</em></p>                                                                                                                                                                     |
| ADMIN\_PASS     | Admin user's password (in plaintext).                         | <p>Self explanatory.<br><br><em>Mandatory if any of the other ADMIN_* variables are passed for a successful account creation.</em></p>                                                                                                                                                                     |
| ADMIN\_EMAIL    | Admin user's email address.                                   | <p>Self explanatory.<br><br><em>Mandatory if any of the other ADMIN_* variables are passed for a successful account creation.</em></p>                                                                                                                                                                     |

## Workspace Setting Environment Variables

Learn more about the environment variables and their value types that can be used to modify the workspace settings in this guide.

{% content-ref url="../../setup-and-configure/advanced-workspace-management/managing-settings-using-environmental-variables.md" %}
[managing-settings-using-environmental-variables.md](../../setup-and-configure/advanced-workspace-management/managing-settings-using-environmental-variables.md)
{% endcontent-ref %}
