# Deploy on Windows 10

## Preparation Steps

Installing Rocket.Chat on Windows 10 Pro 64-bit with Docker for Windows.

{% hint style="warning" %}
_This is a community-supported installation method. To learn more, see this_ [_forum thread_](https://forums.rocket.chat/t/windows-10-pro-installation-guide/408)_._
{% endhint %}

Before you begin, make sure you have the following:

* Minimum of 4 GB of memory on your Windows 10 Pro machine.
* Minimum of 20 GB of disk space, preferably SSD.
* A 64-bit edition of Windows 10 Pro.
* Your system has the latest Windows updates.
* Enabled Hyper-V (requires a reboot).&#x20;

{% hint style="warning" %}
See the [docker desktop virtualization](https://docs.docker.com/desktop/troubleshoot/topics/#virtualization) to enable Hyper-V.
{% endhint %}

### Install Rocket.Chat with Windows 10

* Download and install [Docker for Windows](https://docs.docker.com/desktop/install/windows-install/).
* Create or open a directory you want to hold the content of your server.
* Create a file named `docker-compose.yml` based on [this example](https://github.com/RocketChat/Docker.Official.Image/blob/master/compose.yml).
* Execute these commands in the directory where the `docker-compose.yml` file is located and wait for the server to start.

```
docker compose up
docker compose logs -f rocketchat
```

* Visit  `http://localhost:3000` on your browser to access your workspace. Follow the configuration prompts to [configure your workspace.](https://docs.rocket.chat/setup-and-configure/accessing-your-workspace/rocket.chat-setup-wizard#setup-wizard)
