# Deploy with RocketchatCTL

Rocketchatctl is a powerful command-line tool written in bash designed to simplify the installation, configuration, and maintenance of Rocket.Chat servers on Linux hosts. It automates the entire setup process, including installing dependencies, configuring repositories, setting up directories, permissions, and managing systemd services for both Node.js and MongoDB.&#x20;

Additionally, `rocketchatctl` provides an effortless way to keep your Rocket.Chat installation updated by checking for available updates and performing smooth upgrades to the latest release. Furthermore, it offers the option to install a load balancer/proxy with auto SSL provided by Let's Encrypt for enhanced security.

{% hint style="success" %}
&#x20;For additional information, see the [GitHub repository](https://github.com/RocketChat/install.sh).
{% endhint %}

## Preparation Steps

`rocketchatctl` is currently supported in these Linux distributions:

* Ubuntu 18.04, 19.04, 19.10, 20.04, 21.04, 21.10&#x20;
* CentOS 7, 8
* Debian 9, 10, 11

`rocketchatctl` automatically installs the latest supported versions of Node.js and MongoDB.  It considers the possibility that users might already have existing installations of Node.js, MongoDB, or even a web server on their servers. Therefore, during the installation process, it performs checks to detect any pre-installed versions of Node.js and MongoDB present on the system.

{% hint style="warning" %}
The automatic installation for MongoDB and Node.js for CentOS is still under development.
{% endhint %}

### Deploy Rocket.Chat with RocketChatCTL

{% hint style="success" %}
All `rocketchatctl` commands must be run as an admin with root privileges.
{% endhint %}

You can run `rocketchatctl install` directly, curling the _install.sh_ script from our website. `install.sh` will download `rocketchatctl` , save it in `/usr/local/bin` , and call `rocketchatctl` with the install option. This installation prompts you for the following:

1. **ROOT\_URL**: The public URL where Rocket.Chat server will be accessible on the Internet
2. **Webserver**: The web server to use as a reverse proxy. You can choose caddy, traefik, or none. If you choose a web server, it also prompts you for the email address to use.

```bash
bash -c "$(curl https://install.rocket.chat)"
```

* If you want an unattended install, use unattended install flags with `install.sh` script like this:

```bash
bash -c "$(curl https://install.rocket.chat)" -s --root-url=https://www.example.com --webserver=traefik --letsencrypt-email=myemail@mydomain.com
```

* If you already have `rocketchatctl` installed, run the following command:

```bash
rocketchatctl install
```

* To utilize your Mongo server, ensure that you have updated the required node version for Rocket.Chat, listen to a different port, and install a specific release with this command:

```bash
rocketchatctl install --root-url=https://www.example.com --webserver=none --use-mongo --install-node --port=4000 --version=3.9.0
```

**Update Rocket.Chat with `rockectchatctl`**

The "**update**" option begins by creating a temporary backup directory and fetching the latest Rocket.Chat release. After downloading, it launches the new release and verifies its health by querying the info API. If any startup issues occur, it automatically reverts to the previous version from the backup and displays an error message explaining the problem encountered.

* Check for release updates by running the following command:

```bash
rocketchatctl check-updates
```

* Update to the latest Rocket.Chat release with this command:

```bash
rocketchatctl update
```

**Upgrade `rockectchatctl`**

The upgrade option downloads the latest version available for `rocketchatctl`  command line tool, compares it to your current `rocketchatctl` , and upgrade to the latest version if needed. Ensure to check that you are running the latest `rocketchactl`.

**Backup `rocketchatctl`**

* Backup `rocketchatctl` data by running this command:

```
rocketchatctl backup
```

By default, a backup is made in the `/tmp` directory. You can specify the location using the `--backup-dir` flag.

**Options and Flags**&#x20;

* To check for options and flags, run this command:

```
  rocketchatctl --help
```

You will see something similar to this:

```
Usage: rocketchatctl [options] [--root-url=ROOT_URL --port=PORT --letsencrypt-email=EMAIL --webserver=WEBSERVER  --version=VERSION --install-node --use-mongo]
Installs node, mongo, RocketChat server and optionally a webserver (Caddy or Traefik), sets up directories and permissions to use Let's Encrypt certificates.
In case node or mongo already installed, it uses already installed versions though confirmation is required.
For node it set v12.18.4 as default in your system, for mongo wiredTiger storage engine and no authentication enabled is required during installation.
If you wish this script to run unattended, provide extra flags to the install option, server URL is required (--root-url).

OPTIONS
  -h help                   Display this message
  install                   Install latest RocketChat server version
  update                    Update RocketChat server from current version to latest version
  check-updates             Check for updates of RocketChat server
  upgrade-rocketchatctl     Upgrade the rocketchatctl command line tool
  configure                 Configures RocketChat server and Let's Encrypt
  backup                    Makes a rocketchat database backup

FOR UNATTENDED INSTALLATION
  --root-url=ROOT_URL       the public URL where RocketChat server will be accessible on the Internet (REQUIRED)
  --port=PORT               port for the RocketChat server, default value 3000
  --webserver=WEBSERVER     webserver to install as reverse proxy for RocketChat server, options are caddy/traefik/none (REQUIRED)
  --letsencrypt-email=EMAIL e-mail address to use for SSL certificates (REQUIRED if webserver is not none)
  --version=VERSION         RocketChat server version to install, default latest
  --install-node            in case node installed, sets node to RocketChat server recommended version, default behavoir cancel RocketChat server installation
  --use-mongo               in case mongo installed, and storage engine configured is wiredTiger, skip mongo installation but uses systems mongo for RocketChat server database,
                            default database name rocketchat
  --mongo-version=4.x.x     mongo 4 version, default value is latest (supported only for Debian and Ubuntu)
  --bind-loopback=value     value=(true|false) set to false to prevent from bind RocketChat server to loopback interface when installing a webserver (default true)
  --reg-token=TOKEN         This value can be obtained from https://cloud.rocket.chat to automatically register your workspace during startup

FOR CONFIGURE OPTION
  --rocketchat --root-url=ROOT_URL --port=PORT --bind-loopback=value                  Reconfigures RocketChat server Site-URL and port (--root-url REQUIRED)
  --lets-encrypt --root-url=ROOT_URL --letsencrypt-email=EMAIL --bind-loopback=value  Reconfigures webserver with Let's Encrypt and RocketChat server Site-URL (--root-url and letsencrypt-email REQUIRED)

FOR BACKUP OPTION
  --backup-dir=<path_to_dir>       sets the directory for storing the backup files, default backup directory is /tmp
```
