# Updating Rocket.Chat

{% hint style="success" %}
**Rocket.Chat 6.0** is our most secure and scalable version yet. It includes 10 security patches, 9 brand-new features, and 25+ overall platform enhancements. Visit our [website](https://www.rocket.chat/six) to learn more about what’s new in this latest version. [Update now](https://docs.rocket.chat/deploy/updating-rocket.chat)!
{% endhint %}

Keeping your Rocket.Chat installation up-to-date is essential to ensure that you have access to the latest features, bug fixes, and security enhancements. This guide will walk you through the process of updating Rocket.Chat across various deployment methods.

## Before you Update

To prepare for a successful Rocket.Chat upgrade, it's vital to adhere to specific guidelines. Start by thoroughly understanding the [system-requirements.md](system-requirements.md "mention") and carefully reading the [release notes ](https://github.com/RocketChat/Rocket.Chat/releases)specific to your target version.&#x20;

**Avoid skipping major versions**

When you upgrade from one major version to another, it is important to follow a sequential path and not skip any intermediate major versions. This is because each major version is a significant change, and skipping intermediate versions can lead to compatibility problems or unexpected behavior.

For example, if you are upgrading from version 1.x.x of a software to version 4.x.x, you should follow this path:

**1.x.x -> 2.x.x -> 3.x.x -> 4.x.x**

Skipping intermediate major versions, such as upgrading directly from 1.x.x to 4.x.x, can lead to problems because the software in 4.x.x may not be compatible with the data or settings that you have in 1.x.x.

{% hint style="danger" %}
It is also advisable not to skip more than two minor versions at a time. This is because minor versions can introduce changes to the code that can affect the way the software works.
{% endhint %}

{% hint style="info" %}
Furthermore, if you plan to upgrade to version 5, it's essential to be on at least version 4.x.x before proceeding.
{% endhint %}

**Backup your data**

Always perform a full backup of your Rocket.Chat instance, including the database and any custom configurations. This ensures that you can revert to a working state in case of any issues during the update.

### Updating Rocket.Chat

Updating your Rocket.Chat workspace to a new version involves several steps, which can vary depending on the [deployment method ](./)you're using.

1. If you [deployed your workspace with Docker](deploy-with-docker-and-docker-compose.md), follow the [**update Rocket.Chat on docker guide**](deploy-with-docker-and-docker-compose.md#updating-rocket.chat-on-docker)**.**&#x20;
2. If you [deployed your workspace with Snaps](deploy-with-snaps.md), see the [**update Rocket.Chat on snaps guide**](deploy-with-snaps.md#updating-rocket.chat-snap)**.**
3. If you deployed your workspace following the manual installations, continue with the following steps:

Manual installation includes Rocket.Chat deployment on [CentOS](additional-deployment-methods/deploy-with-centos.md) and Debian distributions.

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
