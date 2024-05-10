# Deploy with Snaps

{% hint style="info" %}
As of December 15, 2023, Rocket.Chat has ceased support for connections from cloud services and official mobile/desktop apps to workspaces running legacy versions outside our support window. Users on unsupported legacy servers are advised to upgrade to the latest Rocket.Chat version to ensure continued access to cloud, mobile, and desktop applications. **Each Rocket.Chat version is supported for six months post-release.**
{% endhint %}

{% hint style="info" %}
Snaps are a convenient way to rapidly deploy a Rocket.Chat instance for development or discovery purposes. We do not recommend snaps for managing a production environment.
{% endhint %}

Installing software on Linux can be done easily with the use of Snaps. They are self-contained packages with all necessary files and dependencies, ensuring easy installation and updates. Deploying Rocket.Chat with Snaps offers seamless deployment on any Linux distribution, providing a secure and isolated workspace. It also auto-updates when a new version of Rocket.Chat is released.

In this guide, you'll learn how to:&#x20;

* [Deploy Rocket.Chat using Snap](deploy-with-snaps.md#deploy-rocket.chat-with-snaps)
* [Backup and restore Rocket.Chat Snap data](deploy-with-snaps.md#snap-backup-and-restore)
* [Auto SSL with Snaps](deploy-with-snaps.md#auto-ssl-with-snaps)
* [Update Rocket.Chat Snap](deploy-with-snaps.md#updating-rocket.chat-snap)

## **Prerequisites**

* A Linux-based system (Ubuntu, Debian, Fedora, etc.).
* AVX/AVX2 supported CPU to run _Mongo 5.0_ for Rocket.Chat workspaces on version 6.0 & above.
* Snap is pre-installed in most modern Linux distributions. If it's not, see the[ Snaps installation guide](https://snapcraft.io/docs/installing-snapd).

## Deploy Rocket.Chat with Snaps

To install Rocket.Chat with snap on Ubuntu, run the following command:

```bash
sudo snap install rocketchat-server
```

This command installs the latest available version on Rocket.Chat. You can also specify the installation by track.

To access your Rocket.Chat workspace, open a web browser, and navigate to the specified ROOT URL (`http://localhost:3000`). Follow the configuration prompts to [configure your workspace.](https://docs.rocket.chat/setup-and-configure/accessing-your-workspace/rocket.chat-setup-wizard#setup-wizard)

### **Move between major releases**

With Snap tracks, you can smoothly transition between major releases of Rocket.Chat (_from 2.x to 3.x or from 3.x to 4.x_). These tracks enable you to remain on a specific release while receiving updates exclusively for that particular track.&#x20;

For instance, you can confidently switch to a new major release with the following command:

```bash
sudo snap switch rocketchat-server --channel=4.x/stable
```

Snap tracks allow you to keep your Rocket.Chat server up-to-date with the latest features while choosing your preferred release version.

### **Configure Rocket.Chat with Snaps**

To see the list of snap variables to configure for your Rocket.Chat server, run the following command:

```bash
snap get rocketchat-server
```

It displays a list of values like this:

```
Key                Value
backup-on-refresh  disable
ignore-errors      false
mongo-oplog-url    mongodb://localhost:27017/local
mongo-url          mongodb://localhost:27017/parties
port               3000
siteurl            http://localhost:3000
```

To set any of the above configuration parameters, run this command:

```bash
sudo snap set rocketchat-server <variable-name>=<value>
```

### **Configure MongoDB**

From track _4.x_, you can configure your MongoDB. The configuration file is located in `/var/snap/rocketchat-server/current/mongod.conf`.&#x20;

For all the configuration options, see [MongoDB's official documentation.](https://www.mongodb.com/docs/)

## Snap backup and restore

Snap Backup and Restore is a handy tool that allows you to create backups of your Rocket.Chat instance and restore them as needed.

### **Backup Rocket.Chat Snap data** <a href="#backup-rocket.chat-snap-data" id="backup-rocket.chat-snap-data"></a>

Run the following command to enable automatic backup on each snap refresh:

```bash
sudo snap set rocketchat-server backup-on-refresh=enable
```

To backup the data on your snap installation, follow these steps:

1. Stop your `rocketchat-server` by running the command:

```bash
sudo service snap.rocketchat-server.rocketchat-server stop
```

While the `rocketchat-server service` should be stopped, the `rocketchat-mongo service` should be kept running. To verify this, run the following command:

```bash
sudo service snap.rocketchat-server.rocketchat-mongo status | grep Active
   Active: active (running) (...)
```

2. Execute the backup command:

```bash
sudo snap run rocketchat-server.backupdb
```

A successful backup will return this:

{% code overflow="wrap" %}
```bash
[+] A backup of your data can be found at /var/snap/rocketchat-server/common/backup/rocketchat_backup_<timestamp>.tar.gz
```
{% endcode %}

3. Start your rocketchat-server

```bash
sudo service snap.rocketchat-server.rocketchat-server start
```

4. Copy your backup to a different system for safekeeping.

### **Restore Rocket.Chat Snap data** <a href="#restore-rocket.chat-snap-data" id="restore-rocket.chat-snap-data"></a>

To restore your backed-up snap data, follow these steps:

1. Stop your `rocketchat-server` by running this command:

```bash
sudo service snap.rocketchat-server.rocketchat-server stop
```

While the `rocketchat-server service` should be stopped, the `rocketchat-mongo service` should be kept running. To verify this, run the following command:

```bash
sudo service snap.rocketchat-server.rocketchat-mongo status | grep Active
   Active: active (running) (...)
```

2. Copy your backup file to the snap's common folder:

```bash
sudo cp rocketchat_backup.tgz /var/snap/rocketchat-server/common/
```

3. Run the restore command:

{% code overflow="wrap" %}
```bash
sudo snap run rocketchat-server.restoredb /var/snap/rocketchat-server/common/rocketchat_backup.tgz
```
{% endcode %}

If you are replacing an existing database, you get the following warning message:

```bash
ATTENTION
Your current database WILL BE DROPPED prior to the restore!
Do you want to restore?
1) Yes
2) No
```

Choose your restore option. If it is successfully done, you will see an output similar to the following:

```bash
[*] Extracting backup file...
[*] Restoring data...
[*] Preparing database...
[+] Restore completed! Please restart the snap.rocketchat services to verify.
```

4. Start your `rocketchat-server`:

```bash
sudo service snap.rocketchat-server.rocketchat-server start
```

## **Auto SSL with Snaps**

Starting from release 0.73, the snap includes **Caddy**, which utilizes **Let's Encrypt** to enable TLS protection for your communications. Snap hooks ensure easy configuration of Caddy, including proper DNS setup, before starting Caddy with Let's Encrypt support.&#x20;

To set up Auto SSL with Snaps for _4.x latest AMD64 snaps_ or 3_.x latest ARM64 snaps_, follow these steps:

1. Set the `SiteUrl` to your domain using the following command, ensure it is prefixed with `https`:

```bash
sudo snap set rocketchat-server siteurl=https://<your domain>
```

2. Start Caddy and restart the snap services:

```bash
sudo systemctl enable --now snap.rocketchat-server.rocketchat-caddy 
sudo snap restart rocketchat-server
```

You can configure Caddy yourself or use another HTTP Proxy.&#x20;

For 4.x latest AMD64 snaps or 3.x latest ARM64 snaps, follow these steps:

{% hint style="info" %}
Both caddy v2 and caddy v1 (EOL) is delivered in the snap, v2 is prioritized over v1.
{% endhint %}

* **To configure Caddy yourself**, place the Caddyfile in the `/var/snap/rocketchat-server/current/` directory and restart rocketchat-server:

```bash
sudo snap restart rocketchat-server
```

* **To use another reverse proxy**, disable Caddy by running this command:

```bash
sudo systemctl disable snap.rocketchat-server.rocketchat-caddy
```

#### **For older snap versions**

If you would like to use a different HTTPS proxy or prefer other options in your Caddy configuration, you can choose to disable Caddy by running this command:

```bash
sudo snap set rocketchat-server caddy=disable
```

1. Edit the Caddyfile found at `/var/snap/rocketchat-server/current/Caddyfile` and write your configuration.
2. Replace `_caddy-url_` and `_port_` with your site information. For example, suppose that you have `example-domain.com` directed toward your server.

{% hint style="warning" %}
&#x20;If your DNS is not working, you could be instantly [throttled by Let's Encrypt](https://caddyserver.com/docs/automatic-https#testing) for up to a week.&#x20;
{% endhint %}

3. Be sure that your DNS has finished resolving **before** attempting to enable TLS. To test your DNS, you can use `http`:

```bash
http://example-domain.com

reverse_proxy localhost:3000
```

4. Restart Caddy:

```bash
sudo systemctl reload snap.rocketchat-server.rocketchat-caddy
```

5. You can check that the Caddy service started correctly by running:

```bash
sudo systemctl status snap.rocketchat-server.rocketchat-caddy
```

6. Once that is tested and resolved, to get secured communications, you can remove the `http://`:

```bash
example-domain.com

reverse_proxy localhost:3000
```

{% hint style="info" %}
Using an IP address will not work for automatically enabling TLS with a publicly-trusted certificate. You must use a valid hostname for a trusted certificate. See the[ official guide](https://caddyserver.com/docs/automatic-https) for more information.&#x20;

If you use an IP address, Caddy will still serve your site over TLS, but using a self-signed certificate.
{% endhint %}

7. Restart the Caddy service by running:

```bash
sudo systemctl reload snap.rocketchat-server.rocketchat-caddy
```

8. You can check that the Caddy service started correctly by running:

```bash
sudo systemctl status snap.rocketchat-server.rocketchat-caddy
```

If the configuration is successful, the website should now be accessible at `https://example-domain.com`.

## Update Rocket.Chat Snap

{% hint style="info" %}
Before you proceed, see the [general guidelines for updating Rocket.Chat](updating-rocket.chat.md).
{% endhint %}

With the Rocket.Chat snap installation, you'll always be on the latest track at the setup time, ensuring access to the latest releases.

{% hint style="warning" %}
It is highly advised to [back up your data](deploy-with-snaps.md#snap-backup-and-restore) before upgrading.

Before a major version update, check the [forum's announcement section](https://forums.rocket.chat/c/announcements/10). Major releases are often delayed by a couple of weeks to gather feedback and apply minor patches before the final release.
{% endhint %}

To force an update, run this command**:**

```
sudo snap refresh rocketchat-server
```

To update to a major version, switch to a specific track by executing this command:

```
sudo snap switch rocketchat-server --channel=x.x/stable
```

You'll then receive updates related to that track.

{% hint style="info" %}
&#x20;Learn more about track changes in this [discussion](https://forums.rocket.chat/t/introducing-snap-tracks/5890).
{% endhint %}

In addition to the latest track, Rocket.Chat offers three other channels: **stable**, **candidate**, and **edge**.  For more information on these channels, refer to the [official guide](https://snapcraft.io/docs/channels).

* To update to a new version, execute this command:

```
sudo snap refresh rocketchat-server --channel=x.x/stable
```

The channel format is "**x.x/stable**," where the first "x" represents the major version, and the second "x" remains unchanged. For example, for major version 6, the channel is "**6.x/stable**," and for major version 5, it's "**5.x/stable**." In each "**6.x/stable**" channel, you will receive all minor and patch release updates specifically for that major version (in this case, major version 6).&#x20;

{% hint style="info" %}
If you have any concerns or issues with your deployment, see [Snaps FAQ](../../resources/frequently-asked-questions/deployment-faq/snaps-faq.md).
{% endhint %}
