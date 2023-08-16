# Deploy with Ubuntu

{% hint style="success" %}
**Rocket.Chat 6.0** is our most secure and scalable version yet. It includes 10 security patches, 9 brand-new features, and 25+ overall platform enhancements. Visit our [website](https://www.rocket.chat/six) to learn more about what’s new in this latest version. [Update now](https://docs.rocket.chat/deploy/updating-rocket.chat)!
{% endhint %}

## Preparation Steps

{% hint style="success" %}
To ensure the best performance and stability, it is advisable to install your workspace on an Ubuntu version with Long-Term Support (LTS).
{% endhint %}

Depending on the version of [Rocket.Chat](https://rocket.chat/) you want to install, check the [release notes](https://github.com/RocketChat/Rocket.Chat/releases) to see the supported engine versions for MongoDB and NodeJs, and install as recommended.&#x20;

*   **MongoDB**

    Please refer to the official MongoDB documentation on [how to install MongoDB on Ubuntu](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/).&#x20;
*   **NodeJS**

    Follow the [official guide](https://github.com/nodesource/distributions/blob/master/README.md#debinstall) to install NodeJS on Ubuntu. You can also use third-party tools like [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) or [n](https://www.npmjs.com/package/n).

### Install Rocket.Chat on Ubuntu

* Install the required packages/dependencies.

```bash
sudo apt install -y curl build-essential graphicsmagick
```

* Download and extract the [latest release ](https://github.com/RocketChat/Rocket.Chat/releases/latest)of Rocket.Chat.

```bash
curl -L https://releases.rocket.chat/latest/download -o /tmp/rocket.chat.tgz
```

* Extract the Rocket.Chat server files using these commands:

```bash
tar -xzf /tmp/rocket.chat.tgz -C /tmp
```

```bash
cd /tmp/bundle/programs/server && npm install --production
```

{% hint style="warning" %}
If you're using the `root` account (not recommended), use `sudo npm install --unsafe-perm --production` instead of the above.
{% endhint %}

* Move the extracted files to the _/opt_ directory.

```bash
sudo mv /tmp/bundle /opt/Rocket.Chat
```

{% hint style="info" %}
This guide uses the _/opt directory_. However, you can choose your preferred directory.
{% endhint %}

**Configure the Rocket.Chat service**

* Add the rocketchat user and set the right permissions on the Rocket.Chat folder.

```bash
sudo useradd -M rocketchat && sudo usermod -L rocketchat
```

```bash
sudo chown -R rocketchat:rocketchat /opt/Rocket.Chat
```

* Depending on how you install NodeJS, the binary path may be different. Save the path to a variable.

```bash
NODE_PATH=$(which node)
```

* Now, save the systemd service file.

```bash
cat << EOF |sudo tee -a /lib/systemd/system/rocketchat.service
[Unit]
Description=The Rocket.Chat server
After=network.target remote-fs.target nss-lookup.target nginx.service mongod.service
[Service]
ExecStart=$NODE_PATH /opt/Rocket.Chat/main.js
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=rocketchat
User=rocketchat
[Install]
WantedBy=multi-user.target
EOF
```

The command above will create a barebone service file; this service file is what systemd will use to start your Rocket.Chat daemon/process.

**Passing environment variables**

* Pass some environment variables to the running process. See  [Rocket.Chat environmental variables](https://docs.rocket.chat/deploy/rocket.chat-environment-configuration/environment-variables) for more details. To update the Rocket.Chat file, run the following command :

```
sudo systemctl edit rocketchat
```

* Update the text editor with the information below and save.

```
[Service]
Environment=ROOT_URL=http://localhost:3000
Environment=PORT=3000
Environment=MONGO_URL=mongodb://localhost:27017/rocketchat?replicaSet=rs01
Environment=MONGO_OPLOG_URL=mongodb://localhost:27017/local?replicaSet=rs01
```

**MongoDB Configuration**

* Open the MongoDB config file (`/etc/mongod.conf`) in your preferred text editor.&#x20;

```
nano /etc/mongod.conf
```

* Set the storage engine to `wiredTiger`.

```yaml
storage:
  engine: wiredTiger
```

* Enable replication, and name the replicaset `rs01`.

```yaml
replication:
  replSetName: rs01
```

{% hint style="warning" %}
The MongoDB replica set is mandatory for Rocket.Chat > 1.0.0.
{% endhint %}

Your MongoDB config file should look something like the following:

```yaml
storage:
  dbPath: /var/lib/mongodb
  journal:
    enabled: true
  engine: wiredTiger

systemLog:
  destination: file
  logAppend: true
  path: /var/log/mongodb/mongod.log

net:
  port: 27017
  bindIp: 127.0.0.1

processManagement:
  fork: true
  timeZoneInfo: /usr/share/zoneinfo

replication:
  replSetName: rs01
```

{% hint style="info" %}
Read the [official documentation](https://docs.mongodb.org/manual/reference/configuration-options/) for a complete list of available MongoDB config options.
{% endhint %}

* Start MongoDB with the following command:

```bash
sudo systemctl enable --now mongod
```

* Then, initiate  replica set with this command:

```bash
mongo --eval "printjson(rs.initiate())"
```

* You can start your Rocket.Chat workspace now using this command:

```bash
sudo systemctl enable --now rocketchat
```

**Configure your Rocket.Chat server**

To access your Rocket.Chat workspace, open a web browser and navigate to the specified ROOT URL (http://your-host-name.com-as-accessed-from-internet:3000). Follow the configuration prompts to [configure your workspace.](https://docs.rocket.chat/setup-and-configure/accessing-your-workspace/rocket.chat-setup-wizard#setup-wizard)

**Optional Configurations**

* [Configure firewall rule](https://docs.rocket.chat/deploy/rocket.chat-environment-configuration/optional-configurations)&#x20;
* [Configure an HTTP reverse proxy to access Rocket.Chat server](https://docs.rocket.chat/deploy/rocket.chat-environment-configuration/configuring-ssl-reverse-proxy)&#x20;
