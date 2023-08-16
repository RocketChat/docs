# Deploy with Docker & Docker Compose

{% hint style="success" %}
**Rocket.Chat 6.0** is our most secure and scalable version yet. It includes 10 security patches, 9 brand-new features, and 25+ overall platform enhancements. Visit our [website](https://www.rocket.chat/six) to learn more about what’s new in this latest version. [Update now](https://docs.rocket.chat/deploy/updating-rocket.chat)!
{% endhint %}

Deploying Rocket.Chat with Docker and Docker Compose is a straightforward and highly recommended deployment method due to its simplicity and flexibility. This guide will walk you through the essential steps, whether you're a seasoned Docker expert or new to containerization, ensuring a smooth deployment for your Rocket.Chat workspace.

**In this guide, you'll learn how to:**

* [Install Docker and Docker Compose](deploy-with-docker-and-docker-compose.md#preparation-steps)
* [Deploy Rocket.Chat on Docker](deploy-with-docker-and-docker-compose.md#deploy-rocket.chat-on-docker)
* [Update Rocket.Chat on Docker](deploy-with-docker-and-docker-compose.md#updating-rocket.chat-on-docker)
* [Enable HTTPs with Docker deployment](deploy-with-docker-and-docker-compose.md#enable-https)
* [Backup and Restore Docker Mongo ](deploy-with-docker-and-docker-compose.md#docker-mongo-backup-and-restore)

## Preparation Steps

**Installing Docker and Docker Compose**

* Ensure you have [Docker](https://docs.docker.com/install) and [Docker-compose](https://docs.docker.com/compose/install/) (v2 is required) installed and operational. If you don't have them installed, you can conveniently set them up using Docker's official helper script:

```bash
curl -L https://get.docker.com | sh
```

* To run Docker commands without using sudo, add the current user to the Docker group and then reboot using the following commands:

```bash
sudo usermod -aG docker $USER
sudo reboot
```

## Deploy Rocket.Chat on Docker

**Fetching Compose file**

* Navigate to your preferred directory and create a `docker-compose.yml` file following [our example](https://github.com/RocketChat/Docker.Official.Image/blob/master/compose.yml).  Alternatively, you can use the `curl` command to download the example `docker-compose.yml` file by executing this command:

```bash
curl -L https://raw.githubusercontent.com/RocketChat/Docker.Official.Image/master/compose.yml -O
```

**Editing Environment Variables**

Modifying the configurations in the compose file directly is strongly discouraged. Instead, use environment variables. You can set environment variables using a `.env` file.

{% hint style="warning" %}
Remember to uncomment the variables you are updating in the `.env` file.
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
See our [releases page](https://github.com/RocketChat/Rocket.Chat/releases) and [available docker images.](deploy-with-docker-and-docker-compose.md#rocket.chat-docker-images) Keeping the default release as`latest` is **not recommended.**&#x20;
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

{% hint style="info" %}
MongoDB ensures continuous 24 x 7 operations and live backup, reducing the need for frequent restarts. Refer to the [MongoDB documentation](https://www.mongodb.com/docs/manual/) for proper server operation and management. Optionally, manage messages and configurations by uncommenting the volume mounts, and ensuring a data subdirectory is available for data storage and mounting.
{% endhint %}

Once the container is running, visit _http://localhost:3000_ on your browser. You can now explore your Rocket.Chat workspace and [invite other users](https://docs.rocket.chat/setup-and-configure/accessing-your-workspace).

**Start & Stop Docker Compose**

To stop your workspace from running, execute this command:

```
docker compose down
```

To start your docker-compose container, run this command:

```
docker compose up -d
```

To see the log/status of your Rocket.Chat container, execute this command:

```
docker compose logs -f rocketchat
```

## Rocket.Chat Docker Images

**Official image (stable and tested)**

The Official Docker Images Repository is responsible for maintaining and controlling Rocket.Chat's official stable image through Docker. It is also reviewed by the Docker committee.

```bash
docker pull registry.rocket.chat/rocketchat/rocket.chat
```

**Latest Release Image**

This is an image that holds the latest stable Rocket.Chat updates on the docker repository. The release may be from the `develop` or `master` branch.

```bash
docker pull registry.rocket.chat/rocketchat/rocket.chat:latest
```

**Preview Image**

The Rocket.Chat preview image deploys a container with a database inside. It's useful for quickly trying or running tests, not requiring a dedicated database installation.

{% embed url="https://hub.docker.com/r/rocketchat/rocket.chat.preview" %}

**Specific Release Image**

You can set up your Rocket.Chat workspace with a specific [release](https://github.com/RocketChat/Rocket.Chat/releases) image. Select the release you need from the [docker hub tags](https://hub.docker.com/r/rocketchat/rocket.chat/tags/) and  use it to run the following command:&#x20;

```bash
docker pull registry.rocket.chat/rocketchat/rocket.chat:<release-tag>
```

**Bleeding-edge untested develop build image**

This is an image maintained at Rocket.Chat's docker repository was updated from the `develop` (untested) branch, containing the latest updates for those who want to work with the newest features.

```bash
docker pull registry.rocket.chat/rocketchat/rocket.chat:develop
```

## Updating Rocket.Chat on Docker

Using Docker & Docker compose, you can update your `rocketchat`  docker image to the latest or preferred version of Rocket.Chat.

{% hint style="warning" %}
Updating the Rocket.Chat image doesn't affect your data since it exists in the Mongo image. Ensure that the version of your MongoDB is compatible with the intended [release](https://github.com/RocketChat/Rocket.Chat/releases) before proceeding with the update.
{% endhint %}

To update your Rocket.Chat version,

* For a specific version, modify the `RELEASE` variable in the `.env` file to point to the [docker image tag](https://hub.docker.com/r/rocketchat/rocket.chat/tags/) of that version. Alternatively, you can edit the  `compose.yml` file to point to the desired Rocket.Chat version.

<details>

<summary>Changing version in <code>.env</code></summary>

In the [`.env`](https://github.com/RocketChat/Docker.Official.Image/blob/master/env.example) file, change the `RELEASE` value to your specified version.

```
RELEASE=<desired version>
```

</details>

<details>

<summary>Changing version in <code>compose.yml</code></summary>

In the [`compose.yml`](https://github.com/RocketChat/Docker.Official.Image/blob/master/compose.yml) file, change the `rocketchat` service `image` value to point to an image in the rocketchat registry image with a [tag](https://hub.docker.com/r/rocketchat/rocket.chat/tags/) of your desired version.

```
services:
  rocketchat:
    image:registry.rocket.chat/rocketchat/rocket.chat:<desired version>
```

</details>

* Use `latest` to update to the latest version of Rocket.Chat. Alternatively, you can pull the Rocket.Chat image directly with the `latest` tag with this command:

```
docker pull registry.rocket.chat/rocketchat/rocket.chat:latest
```

* Now, stop and restart the existing container with these commands:

```
docker compose stop rocketchat
docker compose rm rocketchat
docker compose up -d rocketchat
```

{% hint style="info" %}
See [#rocket.chat-docker-images](deploy-with-docker-and-docker-compose.md#rocket.chat-docker-images "mention") for more details on Rocket.Chat docker images.
{% endhint %}

## Enable HTTPs

You can secure your Rocket.Chat docker instance with TLS certificates from Let's Encrypt. Using Traefik as a reverse proxy, the certificates are automatically generated, enabling safe access to your Rocket.Chat instance via HTTPS on your specified domain.

To get HTTPS, ensure the correct A record (optionally CNAME) is set for your domain going to your server IP.&#x20;

* Update the following variables in your `.env` file. If you don't have one, create a .env file following [our example](https://github.com/RocketChat/Docker.Official.Image/blob/master/env.example).
  * `LETSENCRYPT_EMAIL`: Your required email for the TLS certificates.
  * `DOMAIN`: Your domain or subdomain name only. Avoid adding https:// or any trailing slashes. Confirm that this domain resolves to the server IP address.
  * `RELEASE` : Your preferred Rocket.Chat release. See the [releases page](https://github.com/RocketChat/Rocket.Chat/releases) to know more about our releases.
  * `DOMAIN` : Set the value to "[https://your-domain.com](https://your-domain.com/)," replacing "your-domain.com" with the domain name you want to use.
  * `BIND_IP`: Set to `127.0.0.1` .

```
LETSENCRYPT_EMAIL= # your email, required for the tls certificates
# set this to your domain name or subdomain, not trailing slashes or https://, just the domain
# make sure it actually resolves to your droplet ip
DOMAIN= 
RELEASE= # pin the rocketchat version, at the time of writing, prefer 6.0.0
ROOT_URL= # set this to https://${DOMAIN} replace ${DOMAIN} with the actual domain
BIND_IP=127.0.0.1
```

* Download the traefik template by running the following command:

```
curl -LO \
    https://raw.githubusercontent.com/RocketChat/Docker.Official.Image/master/traefik.yml
```

* Recreate the existing Rocket.Chat container

```
docker compose up -d rocketchat --force-recreate
```

* Star traefik

```
docker compose -f traefik.yml up -d
```

Wait for the TLS certificates to generate and Rocket.Chat to restart. Then,  access your Rocket.Chat instance securely at _https://your-domain.com,_ using the actual domain name you configured.

## Docker Mongo Backup and Restore

**To back up your MongoDB database in docker**,

* Run the following command on your terminal to list out all running containers:

```
docker ps -a
```

{% hint style="warning" %}
Take note of your mongo container name.
{% endhint %}

* Run this command to dump the database into a binary file `db.dump`

```
docker exec <container_name> sh -c 'mongodump --archive' > db.dump
```

When successful, you should see `db.dump` file in the current directory.

**To restore the backup**, run the following command:

```
docker exec -i <container_name> sh -c 'mongorestore --archive' < db.dump
```

{% hint style="info" %}
You can export your database dump directly to MongoDB Atlas by simply running

`mongorestore --uri mongodb+srv://<user>:<password>@cluster0.w2btl.mongodb.net --archive=db.dump`
{% endhint %}

Congratulations on successfully deploying Rocket.Chat using Docker! You can now communicate effortlessly with your team members on your workspace. Visit the [accessing your workspace guide](https://docs.rocket.chat/setup-and-configure/accessing-your-workspace) to configure your workspace and onboard other team members.
