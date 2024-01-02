---
description: Configuring Rocket.Chat via environment variables
---

# Deployment Environment Variables

Environmental variables can be specified to affect how the workspace is deployed or affect the workspace settings and configuration. Setting the deployment environment variables depends on the deployment method of choice. This topic takes you through the mandatory and optional deployment environment variables for you to successfully deploy your workspace as per your needs.

Using the most common deployment method [deploy-with-docker-and-docker-compose.md](../../../deploy/deploy-rocket.chat/deploy-with-docker-and-docker-compose.md "mention") these variables can be set in the `compose.yml` file.

## Mandatory Environment Variables

<table><thead><tr><th width="215.33333333333331">Name</th><th width="248">Description</th><th>Comment</th></tr></thead><tbody><tr><td><code>ROOT_URL</code></td><td>The URL where your Rocket.Chat instance will be hosted on. In other words the URL you will enter on your browser to access Rocket.Chat.</td><td>Format is <code>[protocol]://[domain or ip][: optional port]/[optional path]</code></td></tr><tr><td><code>PORT</code></td><td>Port your Rocket.Chat instance will bind to.</td><td>If served under a FQDN (which is recommended) this doesn't matter much, as long as the configured one is not in reserved range and doesn't collide with any other services.</td></tr><tr><td><code>MONGO_URL</code></td><td>MongoDB connection string.</td><td>Read the <a href="https://www.mongodb.com/docs/manual/reference/connection-string/">official documentation</a> of MongoDB to understand better. This also somewhat depends on your deployment method of choice.</td></tr><tr><td><code>MONGO_OPLOG_URL</code></td><td>MongoDB connection string to the <code>local</code> database.</td><td>Similar to the above, except this one points directly to the <code>local</code> database. E.g. <code>mongodb://localhost:27017/local</code></td></tr></tbody></table>

## Optional Environment Variables

<table><thead><tr><th width="213.33333333333331">Name</th><th width="236">Description</th><th>Comment</th></tr></thead><tbody><tr><td><code>BIND_IP</code></td><td>Which IP the node (or main Rocket.Chat) process will bind to.</td><td>If intended to be accessed under a domain, which is recommended, users should set this to the loopback address (i.e. <code>127.0.0.1</code>) or any <strong>private</strong> IP in the host that's accessible via a reverse proxy or load balancer. This will ensure the instance isn't accessible via any IP that isn't intended.</td></tr><tr><td><code>ADMIN_USERNAME</code></td><td>Admin user's username.</td><td>Admin user can be created automatically on deployment. Set this to your admin user's desired username.<br><br><strong>Mandatory</strong> if any of the other <strong>ADMIN_*</strong> variables are passed for a successful account creation.</td></tr><tr><td><code>ADMIN_NAME</code></td><td>Admin user's name.</td><td><strong>Mandatory</strong> if any of the other <strong>ADMIN_*</strong> variables are passed for a successful account creation.</td></tr><tr><td><code>ADMIN_PASS</code></td><td>Admin user's password (in plaintext).</td><td><strong>Mandatory</strong> if any of the other <strong>ADMIN_*</strong> variables are passed for a successful account creation.</td></tr><tr><td><code>ADMIN_EMAIL</code></td><td>Admin user's email address.</td><td><strong>Mandatory</strong> if any of the other <strong>ADMIN_*</strong> variables are passed for a successful account creation.</td></tr></tbody></table>

After configuring the mandatory and optional deployment environment variables, see how to manage your workspace settings with environment variables in the next topic.
