# Snaps

{% hint style="success" %}
**Rocket.Chat 6.0** is our most secure and scalable version yet. It includes 10 security patches, 9 brand-new features, and 25+ overall platform enhancements. Visit our [website](https://www.rocket.chat/six) to learn more about what’s new in this latest version. [Update now](https://docs.rocket.chat/deploy/updating-rocket.chat)!
{% endhint %}

## Prerequisites

* A Linux-based system (Ubuntu, Debian, Fedora, etc.)
* AVX/AVX2 supported CPU to run _Mongo 5.0_ for Rocket.Chat workspaces on version 6.0 & above.

## Installation

Snap is pre-installed in most modern Linux distributions. Snap is secure and also auto-updates when we release a new version.

{% hint style="info" %}
See the [official documentation](https://snapcraft.io/docs/installing-snapd) on how to install snap if it's not pre-installed.
{% endhint %}

* To install Rocket.Chat with snap on Ubuntu, run the following command:

```
sudo snap install rocketchat-server
```

{% hint style="info" %}
This command installs the latest available version on Rocket.Chat. You can also specify the installation by track.
{% endhint %}

* Go to `http://localhost:3000` and complete the [setup wizard](../../../../setup-and-configure/accessing-your-workspace/).

### Moving Between Major Releases

\
You can leverage Snap tracks to transit between different major releases (e.g., from 2.x to 3.x or from 3.x to 4.x). Snap tracks allow you to stay on a specific release while receiving updates only for that track. For example:

{% hint style="info" %}
sudo snap switch rocketchat-server --channel=4.x/stable
{% endhint %}

## Configuration

* To see the list of snap variables to configure for your Rocket.Chat server, run:

```shell
snap get rocketchat-server
```

A list of variables is displayed as follows:

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
