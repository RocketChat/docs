# Updating Rocket.Chat

{% hint style="success" %}
**Rocket.Chat 6.0** is our most secure and scalable version yet. It includes 10 security patches, 9 brand-new features, and 25+ overall platform enhancements. Visit our [website](https://www.rocket.chat/six) to learn more about what’s new in this latest version. [Update now](https://docs.rocket.chat/deploy/updating-rocket.chat)!
{% endhint %}

Keeping your Rocket.Chat installation up-to-date is essential to access the latest features, bug fixes, and security enhancements. This technical guide will walk you through the process of updating Rocket.Chat across various deployment methods. Workspace admins should monitor new releases and [release notes](https://github.com/RocketChat/Rocket.Chat/releases) to determine whether updates should be applied to their Rocket.Chat workspace.&#x20;

{% hint style="danger" %}
* For a successful update, you must not skip any major version. That is, say you want to move from version `1.x.x` to say `4.x.x`, you need to traverse chronologically `1.x.x` -> `2.x.x` -> `3.x.x` -> `4.x.x`. Ideally, it's even better to make more granular steps, and not skip more than two minor versions at a time.
* Upgrading to `v5` requires you to be on at least `4.x`.
{% endhint %}

1. [**Update Rocket.Chat on Docker**](deploy-with-docker-and-docker-compose.md#updating-rocket.chat-on-docker)
2. [**Update Rocket.Chat on Snaps**](deploy-with-snaps.md#updating-rocket.chat-snap)

**Updating Manual Installation**

Manual installation includes Rocket.Chat deployment on CentOS and Debian distributions.

To update the Rocket.Chat server deployed via manual installation,&#x20;

* Stop Rocket.Chat service:

```
sudo systemctl stop rocketchat
```

* Remove the installation folder, usually in _/opt_

```
sudo rm -rf /opt/Rocket.Chat
```

* Ensure you have the needed build packages for Debian.

```
sudo apt-get install -y build-essential graphicsmagick
```

* Update the node version required by Rocket.Chat. Check the [release notes](https://github.com/RocketChat/Rocket.Chat/releases) for the supported engine versions for MongoDB and NodeJs, and install as recommended.&#x20;

```
sudo n install <x.x.x>
```

* Download the latest version of Rocket.Chat:

```
curl -L https://releases.rocket.chat/latest/download -o /tmp/rocket.chat.tgz
```

```
tar -xzf /tmp/rocket.chat.tgz -C /tmp
```

* Install it and set the proper permissions to Rocket.Chat folder with these commands:

```
cd /tmp/bundle/programs/server && npm install
```

```
sudo mv /tmp/bundle /opt/Rocket.Chat
```

```
sudo chown -R rocketchat:rocketchat /opt/Rocket.Chat
```

* Start the Rocket.Chat service:

```
sudo systemctl start rocketchat
```

{% hint style="info" %}
If you have any concerns or issues with updating Rocket.Chat, see [updating-faq.md](../../resources/frequently-asked-questions/deployment-faq/updating-faq.md "mention")
{% endhint %}
