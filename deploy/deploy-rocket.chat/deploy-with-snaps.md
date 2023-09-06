# Deploy with Snaps

{% hint style="success" %}
**Rocket.Chat 6.0** is our most secure and scalable version yet. It includes 10 security patches, 9 brand-new features, and 25+ overall platform enhancements. Visit our [website](https://www.rocket.chat/six) to learn more about what’s new in this latest version. [Update now](https://docs.rocket.chat/deploy/updating-rocket.chat)!
{% endhint %}

{% hint style="info" %}
Snaps are a convenient way to rapidly deploy a Rocket.Chat instance for development or discovery purposes. We do not recommend snaps for managing production environment.
{% endhint %}

Installing software on Linux can now be done easily with the use of Snaps. They are self-contained packages with all necessary files and dependencies, ensuring easy installation and updates. Deploying Rocket.Chat with Snaps offers seamless deployment on any Linux distribution, providing a secure and isolated workspace. It also auto-updates when a new version of Rocket.Chat is released.

In this guide, you'll learn how to:&#x20;

* [Deploy Rocket.Chat using Snap](deploy-with-snaps.md#deploy-rocket.chat-with-snaps)
* [Backup & Restore Rocket.Chat Snap data](deploy-with-snaps.md#snap-backup-and-restore)
* [Auto SSL with Snaps](deploy-with-snaps.md#auto-ssl-with-snaps)
* [Update Rocket.Chat Snap](deploy-with-snaps.md#updating-rocket.chat-snap)

## Preparation Steps

**Prerequisites**

* A Linux-based system (Ubuntu, Debian, Fedora, etc.)
* AVX/AVX2 supported CPU to run _Mongo 5.0_ for Rocket.Chat workspaces on version 6.0 & above.

**Install Snaps**

Snap is pre-installed in most modern Linux distributions. If it's not, see the[ Snaps installation guide](https://snapcraft.io/docs/installing-snapd).

## Deploy Rocket.Chat with Snaps

* To install Rocket.Chat with snap on Ubuntu, run the following command:

```
sudo snap install rocketchat-server
```

{% hint style="info" %}
This command installs the latest available version on Rocket.Chat. You can also specify the installation by track.
{% endhint %}

* To access your Rocket.Chat workspace, open a web browser and navigate to the specified ROOT URL (_`http://localhost:3000`_). Follow the configuration prompts to [configure your workspace.](https://docs.rocket.chat/setup-and-configure/accessing-your-workspace/rocket.chat-setup-wizard#setup-wizard)

**Moving Between Major Releases**

With Snap tracks, you can smoothly transition between major releases of Rocket.Chat (_from 2.x to 3.x or from 3.x to 4.x_). These tracks enable you to remain on a specific release while receiving updates exclusively for that particular track. For instance, you can confidently switch to a new major release with the following command:

```bash
sudo snap switch rocketchat-server --channel=4.x/stable
```

Snap tracks allow you to keep your Rocket.Chat server up-to-date with the latest features while choosing your preferred release version.

**Configuring  Rocket.Chat with Snaps**

* To see the list of snap variables to configure for your Rocket.Chat server, run the following command:

```shell
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

* To set any of the variables, run this command:

```bash
sudo snap set rocketchat-server <variable-name>=<value>
```

#### **Configuring MongoDB**

From track _4.x_, you can configure your MongoDB. The configuration file is located in `/var/snap/rocketchat-server/current/mongod.conf`.

{% hint style="info" %}
For all the configuration options, see [MongoDB's official documentation.](https://www.mongodb.com/docs/)
{% endhint %}

### Snap Backup and Restore

Snap Backup and Restore is a handy tool that allows you to create backups of your Rocket.Chat instance and restore them as needed.

**Backup Rocket.Chat Snap Data**

You can enable automatic backup on each snap refresh by executing this command:

```
sudo snap set rocketchat-server backup-on-refresh=enable
```

To backup the data on your snap installation,

* Stop your rocketchat-server by running

```
sudo service snap.rocketchat-server.rocketchat-server stop
```

{% hint style="warning" %}
While the `rocketchat-server service` should be stopped, the `rocketchat-mongo service` should be kept running.
{% endhint %}

```
sudo service snap.rocketchat-server.rocketchat-mongo status | grep Active
   Active: active (running) (...)
```

* Execute the backup command:

```
sudo snap run rocketchat-server.backupdb
```

* A successful backup will return this:

```
[+] A backup of your data can be found at /var/snap/rocketchat-server/common/backup/rocketchat_backup_<timestamp>.tar.gz
```

* Start your rocketchat-server

```
sudo service snap.rocketchat-server.rocketchat-server start
```

* Copy your backup to a different system for safekeeping.

**Restore Rocket.Chat Snap Data**

To restore your backed-up snap data,

* Stop your rocketchat-server by running this command:

```
sudo service snap.rocketchat-server.rocketchat-server stop
```

{% hint style="warning" %}
While the `rocketchat-server service` should be stopped, the `rocketchat-mongo service` should be kept running.
{% endhint %}

```
sudo service snap.rocketchat-server.rocketchat-mongo status | grep Active
   Active: active (running) (...)
```

* Copy your backup file to the snap's common folder:

```
sudo cp rocketchat_backup.tgz /var/snap/rocketchat-server/common/
```

* Run the restore command:

```
sudo snap run rocketchat-server.restoredb /var/snap/rocketchat-server/common/rocketchat_backup.tgz
```

If you are replacing an existing database, you get a warning message.

{% hint style="danger" %}
**ATTENTION**

* Your current database WILL BE DROPPED prior to the restore!
* Do you want to restore?
  * 1\) Yes
  * 2\) No
{% endhint %}

* Choose your restore option.
* If it is successfully done, you will see an output similar to:

```
[*] Extracting backup file...
[*] Restoring data...
[*] Preparing database...
[+] Restore completed! Please restart the snap.rocketchat services to verify.
```

* Start your rocketchat-server

```
sudo service snap.rocketchat-server.rocketchat-server start
```

### **Auto SSL with Snaps**

Starting from release 0.73, the snap includes Caddy, which utilizes Let's Encrypt to enable TLS protection for your communications. Snap hooks ensure easy configuration of Caddy, including proper DNS setup, before starting Caddy with Let's Encrypt support.&#x20;

To set up Auto SSL with Snaps for _4.x latest AMD64 snaps_ or 3_.x latest ARM64 snaps_,

* Set the `SiteUrl` to your domain using the following command, esure it is prefixed with `https`:

```
sudo snap set rocketchat-server siteurl=https://<your domain>
```

* Start Caddy and restart the snap services.

```
sudo systemctl enable --now snap.rocketchat-server.rocketchat-caddy 
sudo snap restart rocketchat-server
```

To set up Auto SSL with Snaps for _older snaps_,

* To enable TLS and Let's Encrypt certificates:

1. Input a URL starting with HTTPS
2. Own the domain name you would like to use.
3. Ensure the proper DNS record is set up to link your domain name to your public IP address. Keep in mind that it may take some time for DNS records to propagate.

* Run the following commands to check that configuration is set up correctly before starting the services:

```bash
sudo snap set rocketchat-server caddy-url=https://<your-domain-name>
sudo snap set rocketchat-server caddy=enable
sudo snap set rocketchat-server https=enable
sudo snap run rocketchat-server.initcaddy
```

* If no errors are found, it is safe to restart Rocket.Chat and Caddy:

```bash
sudo systemctl restart snap.rocketchat-server.rocketchat-server.service
sudo systemctl restart snap.rocketchat-server.rocketchat-caddy.service
```

* In case you don't want to configure TLS for your site or want to remove TLS configuration:

```bash
sudo snap set rocketchat-server https=disable
sudo snap set rocketchat-server caddy-url=http://<your-domain-name>
sudo snap set rocketchat-server caddy=enable
sudo snap run rocketchat-server.initcaddy
```

If no errors were found, it is safe to restart Rocket.Chat and Caddy:

```bash
sudo systemctl restart snap.rocketchat-server.rocketchat-server.service
sudo systemctl restart snap.rocketchat-server.rocketchat-caddy.service
```

**To view the Caddy log,** run this command:&#x20;

```bash
sudo snap logs -f rocketchat-server.rocketchat-caddy
```

**Configure Caddy yourself or use another HTTP Proxy**

For 4.x latest AMD64 snaps or 3.x latest ARM64 snaps,

{% hint style="info" %}
Both caddy v2 and caddy v1 (EOL) is delivered in the snap, v2 is prioritized over v1.
{% endhint %}

* To configure Caddy yourself, place the Caddyfile in the `/var/snap/rocketchat-server/current/` directory and restart rocketchat-server.

```
sudo snap restart rocketchat-server
```

* To use another reverse proxy, disable Caddy by running this command:

```
sudo systemctl disable snap.rocketchat-server.rocketchat-caddy
```

For older snap versions,

* If you would like to use a different https proxy or prefer other options in your Caddy configuration, you can choose to disable Caddy by running this command:

```bash
sudo snap set rocketchat-server caddy=disable
```

* Edit the Caddyfile found at `/var/snap/rocketchat-server/current/Caddyfile` and write your configuration.
* Replace `_caddy-url_` and `_port_` with your site information. For example, suppose I have example-domain.com directed towards my server.

{% hint style="warning" %}
&#x20;If your DNS is not working, you could be instantly [throttled by Let's Encrypt](https://caddyserver.com/docs/automatic-https#testing) for _up to a week_.&#x20;
{% endhint %}

* Be sure that your DNS has finished resolving **before** attempting to enable TLS. To test your DNS you can use http:

```bash
http://example-domain.com

reverse_proxy localhost:3000
```

* Restart Caddy:

```bash
sudo systemctl reload snap.rocketchat-server.rocketchat-caddy
```

* You can check that the Caddy service started correctly by running:

```bash
sudo systemctl status snap.rocketchat-server.rocketchat-caddy
```

* Once that is tested and resolved, to get secured communications, you can remove the `http://`:

```bash
example-domain.com

reverse_proxy localhost:3000
```



{% hint style="info" %}
Using an IP address will not work for automatically enabling TLS with a publicly-trusted certificate. You must use a valid hostname for a trusted certificate. See the[ official guide](https://caddyserver.com/docs/automatic-https) for more information.&#x20;

If you use an IP address, Caddy will still serve your site over TLS, but using a self-signed certificate.
{% endhint %}

* Restart the Caddy service by running:

```bash
sudo systemctl reload snap.rocketchat-server.rocketchat-caddy
```

* You can check that the Caddy service started correctly by running:

```bash
sudo systemctl status snap.rocketchat-server.rocketchat-caddy
```

If the configuration is succesfull, the website should now be easily accessible at `https://example-domain.com`.

### Updating Rocket.Chat Snap

{% hint style="info" %}
Before you proceed, see the [general guidelines for updating Rocket.Chat](updating-rocket.chat.md).
{% endhint %}

With the Rocket.Chat snap installation, you'll always be on the latest track at the setup time, ensuring access to the latest releases.

{% hint style="warning" %}
It is highly advised to [back up your data](deploy-with-snaps.md#snap-backup-and-restore) before upgrading.

Before a major version update, check the [forum's announcement section](https://forums.rocket.chat/c/announcements/10). Major releases are often delayed by a couple of weeks to gather feedback and apply minor patches before the final release.
{% endhint %}

* To force an update, run this command**:**

```
sudo snap refresh rocketchat-server
```

* To update to a major version, switch to a specific track by executing this command:

```
sudo snap switch rocketchat-server --channel=x.x/stable
```

You'll then receive updates related to that track..

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
If you have any concerns or issues with your deployment, see [Snaps FAQ](https://docs.rocket.chat/deploy/prepare-for-your-deployment/rapid-deployment-methods/snaps/snap-faq).
{% endhint %}
