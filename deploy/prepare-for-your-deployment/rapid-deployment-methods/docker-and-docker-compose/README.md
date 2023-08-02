# Docker & Docker Compose

{% hint style="success" %}
Rocket.Chat 6.0 is our most secure and scalable version yet. It includes 10 security patches, 9 brand-new features, and 25+ overall platform enhancements. Visit our [website](https://www.rocket.chat/six) to learn more about what’s new in this latest version. [Update now](https://docs.rocket.chat/deploy/updating-rocket.chat)!
{% endhint %}

Deploying Rocket.Chat using Docker and Docker Compose is a straightforward and highly recommended method of deployment due to its simplicity and flexibility.

## Installing Docker and Docker Compose

* Ensure you have [Docker](https://docs.docker.com/install) and [Docker-compose](https://docs.docker.com/compose/install/) (v2 is required) installed and operational. If you don't have them installed, you can conveniently set them up using Docker's official helper script:

```bash
curl -L https://get.docker.com | sh
```

* To run Docker commands without using sudo, add the current user to the Docker group and then reboot using the following commands:

```bash
sudo usermod -aG docker $USER
sudo reboot
```

## Fetching Compose file

* Navigate to your preferred directory and create a `docker-compose.yml` file following [our example](https://github.com/RocketChat/Docker.Official.Image/blob/master/compose.yml).  Alternatively, you can use the `curl` command to download the example `docker-compose.yml` file by executing this command

```bash
curl -L https://raw.githubusercontent.com/RocketChat/Docker.Official.Image/master/compose.yml -O
```

## **Editing Environment Variables**

Modifying the configurations in the compose file directly is strongly discouraged. Instead, use environment variables. You can set environment variables using a `.env` file.

{% hint style="warning" %}
Remember to uncomment the variables you are updating.
{% endhint %}

* In your project directory, create an `.env` file following [this example](https://github.com/RocketChat/Docker.Official.Image/blob/master/env.example).

{% hint style="info" %}
If you cloned the [GitHub repository](https://github.com/RocketChat/Docker.Official.Image/tree/master), you can copy the `.env.example` to  `.env` with this command:

```
cp env.example .env
```
{% endhint %}

* Set the `RELEASE` variable in the `.env`to your desired Rocket.Chat version.&#x20;

{% hint style="info" %}
See our [releases here](https://github.com/RocketChat/Rocket.Chat/releases). Keeping the default as`latest` is **not recommended.**&#x20;

See [available-images.md](docker-containers/available-images.md "mention") for the available docker images.
{% endhint %}

* Edit `ROOT_URL` from the default `http://localhost:3000` to match your domain name or IP address.
* If you have a registration token to register the workspace automatically, you can add it to the `.env` file like this:

```
REG_TOKEN={your token here}
```

* If you are using MongoDB Atlas as the database provider, edit the value of the `MONGO_URL` variable in your compose file to be your connection string in this format:

```
MONGO_URL=mongodb://<user>:<pass>@host1:27017,host2:27017,host3:27017/<databaseName>?replicaSet=<replicaSet>&ssl=true&authSource=admin
```

* Now, start up the container by executing this command:

```shell
docker compose up -d
```

This command will:

* Start a MongoDB service named `mongodb`.
* Start a service `rocketchat`, which will also wait for `mongodb` to be ready.

MongoDB supports continuous 24 x 7 operations and live backup, minimizing the need for frequent restarts. Refer to  [MongoDB documentation](https://www.mongodb.com/docs/manual/) for proper server operation and management. Optionally, you can manage messages and configuration information by uncommenting the volume mounts. Ensure a `data` subdirectory exists to store and mount the data.

### Updating Rocket.Chat Docker Image

To update the `rocketchat` docker image to the latest version, update the `RELEASE` value in your `.env` file, then run `docker compose up -d`. Your data should not be affected by this since it's located in the `mongo` image.

{% content-ref url="../../../updating-rocket.chat.md" %}
[updating-rocket.chat.md](../../../updating-rocket.chat.md)
{% endcontent-ref %}
