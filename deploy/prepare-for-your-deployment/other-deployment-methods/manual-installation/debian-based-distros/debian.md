# Deploy on Debian

## Preparation Steps

Depending on the version of Rocket.Chat you want to install, check the release notes to see the supported engine versions for MongoDB and NodeJs, and install as recommended.&#x20;

*   **Install MongoDB**

    Please refer to the official MongoDB documentation on how to install MongoDB on Debian. For the list of supported versions, see our documentation here.
*   **Install NodeJSNodeJS**

    Follow the official guide to install NodeJS on a Debian system. Check out our page on supported node versions for your specific version. You can also use third-party tools like nvm or n.

### Install Rocket.Chat on Debian

* Update your system by running this command:

```bash
sudo apt -y update
sudo apt -y upgrade
```

* Install required packages/dependencies:

```bash
sudo apt install -y curl build-essential graphicsmagick
```

* To download the latest Rocket.Chat version run the following command:

```bash
curl -L https://releases.rocket.chat/latest/download -o /tmp/rocket.chat.tgz
```

You can also use `wget`to download Rocket.Chat with this command:

```
wget https://releases.rocket.chat/latest/download -O /tmp/rocket.chat.tgz
```

To download a specific version, replace  `latest` the version number.

```
wget https://releases.rocket.chat/4.1.2/download -O /tmp/rocket.chat.tgz
```

* Extract the archive with `tar`:

```bash
tar xzf /tmp/rocket.chat.tgz -C /tmp
```

You should now see a new directory under `/tmp` named `bundle`.

* Next, install all the node dependencies:

```bash
(cd /tmp/bundle/programs/server; npm i)
```

{% hint style="warning" %}
If you're doing all this under the `root` user, which is not recommended, you'll need to pass the `--unsafe-perm` flag to npm along with `sudo`.
{% endhint %}

`/tmp` has been a temporary non-root user-writable location to prepare the bundle. For this guide, we're going to use /opt to be the final location but you can choose any other. Whatever may it be, if not /opt, make sure you change the location in all the other places it is specified.

```bash
sudo mv /tmp/bundle /opt/Rocket.Chat
```

**Configure the Rocket.Chat service**

* Add the rocketchat user, and set the right permissions on the Rocket.Chat folder.

```bash
sudo useradd -M rocketchat && sudo usermod -L rocketchat
```

* Create the Rocket.Chat service file:

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

The command above will create a barebone service file, this service file is what systemd will use to start your Rocket.Chat daemon/process.

**Passing environment variables**

* Pass some environment variables to the running process. See  Rocket.Chat environmental variables for more details. To update the Rocket.Chat file, run the following command :

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
Read the official documentation for a complete list of available MongoDB config options.
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

* [Configure firewall rule](../../../../../setup-and-configure/rocket.chat-environment-configuration/optional-configurations.md)
* [Configure a HTTP reverse proxy to access Rocket.Chat server](../../../../../setup-and-configure/rocket.chat-environment-configuration/configuring-ssl-reverse-proxy.md)
* [Configure mongo access control](../../../../../setup-and-configure/rocket.chat-environment-configuration/mongodb-configuration/mongodb-uri-authentication.md)
* [Configure production values for mongodb](../../../../../setup-and-configure/rocket.chat-environment-configuration/mongodb-configuration/mongo-options.md)
