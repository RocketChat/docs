# Snaps FAQ

{% hint style="info" %}
If you have questions about snaps, ask them in the [#ubuntu-snap](https://open.rocket.chat/channel/ubuntu-snap) channel.
{% endhint %}

<details>

<summary>When will my snap installation get the latest release?</summary>

Snaps are one of our biggest install base. They are also auto-updating. As a result, we like to spend more time testing before releasing. Updated Snaps are usually released around the 15th of the month - around two weeks after a new release. This gives us time to look for issues, so you don't have to. If you have special requirements and need to use the latest release immediately, please consider another installation method, e.g., docker.

</details>

<details>

<summary>How do I access my site at a different port? How do I enable TLS/SSL with my snap?</summary>

You can change the default port (3000) to something else by changing the port configuration option. For example, if you wanted to change the HTTP port to 8080 instead of 3000:

```
sudo snap set rocketchat-server port=8080
```

Ensure you restart the `rocketchat-service` service afterward for the change to take effect. **You only need to restart the Rocket.Chat application itself, not the database or Caddy**.

For enabling TLS/SSL, check out our guide for enabling caddy [here](../../../setup-and-configure/environment-configuration/configuring-ssl-reverse-proxy.md).

</details>

<details>

<summary>Ubuntu 18.04 LTS gives the message "snap not found", what's wrong?</summary>

Make sure you're using x64 or amd64 (or armhf) images, especially on VPS or VMs. x86 (32-bit) is not supported.

</details>

<details>

<summary>How do I manually update to a new release?</summary>

While updates happen automatically, usually within 6 hours from the time of release, you can update manually by issuing this command:

```
sudo snap refresh rocketchat-server
```

</details>

<details>

<summary>How do I revert to the previous version of Rocket.Chat?</summary>

```
sudo snap revert rocketchat-server
```

</details>

<details>

<summary>How do I list the services shipped with Rocket.Chat snap?</summary>

The Rocket.Chat snap provides three services. Outside of the snap context, globally, each service is named like `snap.<SnapName>.<SnapServiceName>`. Look at the table to have a better understanding.

You can check the list of services yourself with:

```
snap info rocketchat-server
```

Look for the `services` section.

</details>

| Service     | Snap Service Name | Systemd Service Name                     |
| ----------- | ----------------- | ---------------------------------------- |
| MongoDB     | rocketchat-mongo  | snap.rocketchat-server.rocketchat-mongo  |
| Caddy       | rocketchat-caddy  | snap.rocketchat-server.rocketchat-caddy  |
| Rocket.Chat | rocketchat-server | snap.rocketchat-server.rocketchat-server |

<details>

<summary>How do I tell if Rocket.Chat is actually running?</summary>

You can check whether either or all of them are running or not with the following command:

```bash
snap services rocketchat-server
```

Look into the third column (`Current`) that logs the current state of the services.

Another option is to use the `systemctl` command. To quickly check if a service is active or not, use the `is-active` subcommand or the more well-known `status` subcommand. See the table above to know the name of the service you want to inspect.

```
systemctl is-active snap.rocketchat-server.rocketchat-mongo
systemctl is-active snap.rocketchat-server.rocketchat-caddy
systemctl is-active snap.rocketchat-server.rocketchat-server
```

Or use the `status` subcommand:

```
systemctl status snap.rocketchat-server.rocketchat-mongo
systemctl status snap.rocketchat-server.rocketchat-caddy
systemctl status snap.rocketchat-server.rocketchat-server
```

</details>

<details>

<summary>How can I view the logs?</summary>

You can either use the `snap logs` command, or the systemd alternative, `journalctl`. Always refer to [this table](snaps-faq.md#how-do-i-list-the-services-shipped-with-rocket.chat-snap) to know which service name to use where.

Using `snap logs`:

```
sudo snap logs -f rocketchat-server.rocketchat-server
sudo snap logs -f rocketchat-server.rocketchat-mongo
sudo snap logs -f rocketchat-server.rocketchat-caddy
```

To see the logs from Rocket.Chat using `journalctl`:

```
sudo journalctl -fu snap.rocketchat-server.rocketchat-server
```

To see the logs from Mongo or Caddy:

```
sudo journalctl -fu snap.rocketchat-server.rocketchat-mongo
sudo journalctl -fu snap.rocketchat-server.rocketchat-caddy
```

</details>

<details>

<summary>How do I schedule updates?</summary>

If you don't want snaps just updating when available, you can set when your snaps will update.

The following example asks the system only to update snaps between 4.00am and 7.00am, and 7.00pm and 10:10pm:

```
sudo snap set system refresh.timer=4:00-7:00,19:00-22:10
```

You can find more about your options in the [snapcraft documentation](https://snapcraft.io/docs/managing-updates).

</details>

<details>

<summary>I need to restart Rocket.Chat, how do I do this?</summary>

This follows the similar structure as many of the previous questions. You can use both the `snap` command or `systemctl` to restart RocketChat.

With `snap` you get the added benefit of restarting all of the services with a single command:

```
sudo snap restart rocketchat-server
```

You can also restart each service individually:

```
sudo snap restart rocketchat-server.rocketchat-server
sudo snap restart rocketchat-server.rocketchat-mongo
sudo snap restart rocketchat-server.rocketchat-caddy
```

To restart Rocket.Chat using `systemctl`:

```
sudo systemctl restart snap.rocketchat-server.rocketchat-server
```

Mongo and Caddy can similarly be restarted:

```
sudo systemctl restart snap.rocketchat-server.rocketchat-mongo 
sudo systemctl restart snap.rocketchat-server.rocketchat-caddThis follows the similar structure as many of the previous questions. You can use both the snap command or systemctl to restart RocketChat.
With snap you get the added benefit of restarting all of the services with a single command:
sudo snap restart rocketchat-server
You can also restart each service individually:
sudo snap restart rocketchat-server.rocketchat-server
sudo snap restart rocketchat-server.rocketchat-mongo
sudo snap restart rocketchat-server.rocketchat-caddy
To restart Rocket.Chat using systemctl:
sudo systemctl restart snap.rocketchat-server.rocketchat-server
Mongo and Caddy can similarly be restarted:
sudo systemctl restart snap.rocketchat-server.rocketchat-mongo 
sudo systemctl restart snap.rocketchat-server.rocketchat-cadd
```

</details>

<details>

<summary>What is the Restart Policy?</summary>

The snap's policy is to restart on failure.

</details>

<details>

<summary>How do I restore backup data to my Snap?</summary>

See [broken-reference](broken-reference/ "mention").

</details>

<details>

<summary>How do I back up my Snap data?</summary>

See [broken-reference](broken-reference/ "mention")

</details>

<details>

<summary>How do I access the MongoDB Shell?</summary>

You might want to access the mongo shell shipped with our Rocket.Chat snap. To do so, run:

```
rocketchat-server.mongo
```

</details>

<details>

<summary>How do I edit MongoDB configuration?</summary>

You can find the mongod configuration file in `/var/snap/rocketchat-server/current/mongod.conf`.

</details>

<details>

<summary>How do I add an option to mount media?</summary>

The interface providing the ability to access removable media is not automatically connected upon installation, so if you'd like to use external storage (or otherwise use a device in `/media` for data), you need to give the snap permission to access removable media by connecting that interface:

```
sudo snap connect rocketchat-server:removable-media
```

</details>

<details>

<summary>What folders do snaps use?</summary>

* Your actual snap files for each version of Rocket.Chat are copied to: `/var/lib/snapd/snaps` and they are mounted in read-only mode.

<!---->

* Your snap common directory is: `/var/snap/rocketchat-server/common/`; file uploads to disk and the database are stored here.

<!---->

* Your snap data directory is `/var/snap/rocketchat-server/<version>`; this is a versioned folder.

<!---->

* You can access the current snap data directory at `/var/snap/rocketchat-server/current`.

</details>

<details>

<summary>How do I remove a specific previous version of Rocket.Chat?</summary>

You can do this by issuing the following command, where `N` is the desired version:

```
snap remove --revision=N rocketchat-server
```

</details>

<details>

<summary>How do I add a tool like strace to debug what's happening in my snap?</summary>

```
snapcraft prime
snap try prime --devmode
cp /usr/bin/strace prime
snap run <snap.app> --shell
sudo ./strace
```

</details>

<details>

<summary>How do I change Rocket.Chat PORT, MONGO_URL, and MONGO_OPLOG_URL in my snap?</summary>

Starting from release 0.73, it is possible to configure these environmental variables through snap hooks like this:

```bash
sudo snap set rocketchat-server port=<another-port>
sudo snap set rocketchat-server mongo-url=mongodb://<your-url>:<your-port>/<your-db-name>
sudo snap set rocketchat-server mongo-oplog-url=mongodb://<your-url>:<your-port>/local
```

Remember to restart rocket.chat service after setting new values:

```bash
sudo systemctl restart snap.rocketchat-server.rocketchat-server.service
```

This is an example to run rocket.chat on port 4000 instead of 3000 and set database name to rocketchat instead of parties:

```bash
sudo snap set rocketchat-server port=4000
sudo snap set rocketchat-server mongo-url=mongodb://localhost:27017/rocketchat
sudo systemctl restart snap.rocketchat-server.rocketchat-server.service
```

</details>

<details>

<summary>How do I change other environmental variables in my snap?</summary>

Starting from release 0.73, it is possible to overwrite any Rocket.Chat environmental variables dropping files ending in `.env` in $SNAP\_COMMON directory (`/var/snap/rocketchat-server/common/`), for example, you can create a file to change SMTP settings:

```bash
cat /var/snap/rocketchat-server/common/overwrite-smtp.env
OVERWRITE_SETTING_SMTP_Host=my.smtp.server.com
```

Remember to restart rocket.chat service after creating .env files:

```bash
sudo systemctl restart snap.rocketchat-server.rocketchat-server.service
```

More than one .env file is allowed, and more than one environmental variable defined per file is allowed.

</details>

<details>

<summary>How do I set Rocket.Chat Registration Token on Snap</summary>

To set a registration token for your server, create any file ending in `.env` under `/var/snap/rocketchat-server/current/` with content:

```
REG_TOKEN=<your token>
```

Then restart your server

```
sudo systemctl restart snap.rocketchat-server.rocketchat-server
```

</details>
