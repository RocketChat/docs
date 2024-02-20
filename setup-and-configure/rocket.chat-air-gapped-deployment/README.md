---
description: Deploy Rocket.Chat in an air-gapped environment using docker & docker compose
---

# Rocket.Chat Air-gapped Deployment

An air-gapped computer system is one that is not directly connected to any external network or the internet. It ensures that a secure computer network is physically isolated from unsecured networks, such as the public internet or an unsecured local area network. This isolation makes it challenging for malware or hackers to infiltrate sensitive systems, providing a strong defense against cyber threats.&#x20;

{% hint style="info" %}
The recommended deployment method for Rocket.Chat is using [Docker and Docker Compose](../../deploy/deploy-rocket.chat/deploy-with-docker-and-docker-compose.md).
{% endhint %}

There are two options for deploying Rocket.Chat in an air-gapped environment:

1. [Copying Rocket.Chat Docker images from a server with internet access](./#copying-rocket.chat-docker-images-from-a-server-with-internet-access)
2. [Deploying Rocket.Chat with a Private Docker Registry](./#deploying-rocket.chat-with-a-private-docker-registry)

In this example guide, we'll extensively discuss the two options above and how you can use them to deploy your Rocket.Chat workspace.

## Copying Rocket.Chat Docker images from a server with internet access.

Given that an air-gapped environment has no internet access, simply download the required docker images on a server with internet access and transfer them to the air-gapped server.&#x20;

{% hint style="warning" %}
This example guide assumes that all your servers belong to the same network. Transfer methods may vary depending on your company's policies and network configurations.
{% endhint %}

**Prerequisites**

* One server that has internet access to download the docker images.
* One air-gapped server to deploy Rocket.Chat

{% hint style="success" %}
* Ensure that docker is installed and operational on the two servers.&#x20;
* The two servers must be able to communicate with each other.&#x20;
{% endhint %}

**To download the Rocket.Chat images,**

* Go to the server with internet access and download the Rocket.Chat and MongoDB images with this command:

```
docker pull registry.rocket.chat/rocketchat/rocket.chat:latest

docker pull docker.io/bitnami/mongodb:${MONGODB_VERSION:-5.0}
```

{% hint style="info" %}
Confirm that you are downloading the appropriate MongoDB version for your Rocket.Chat version by checking our [release notes](https://github.com/RocketChat/Rocket.Chat/releases).
{% endhint %}

* Run `docker images` to see the images you just downloaded.
* Save the images as  tar files with these commands:

```
docker save -o rocketchat.tar registry.rocket.chat/rocketchat/rocket.chat:latest

docker save -o mongodb.tar bitnami/mongodb:5.0
```

* Run `ls` to see the rocketchat.tar and mongodb.tar files.
* Transfer the tar files to your air-gapped server with the following commands:

{% hint style="warning" %}
Transfer methods may vary from this example depending on your company's policies and network configurations.
{% endhint %}

```
scp -i [key] <rocketchat_tar_file_path> <user_name@target_ip_address:/destination_path>

scp -i [key] <mongodb_tar_file_path> <user_name@target_ip_address:/destination_path>
```

{% hint style="info" %}
* Ensure to update the following with the appropriate values:
  * `key` : The key to access the air-gapped server where the file should be sent.
  * `rocketchat_tar_file_path` : The rocketchat.tar file path.
  * `mongodb_tar_file_path` : The mongodb.tar file path.
  * `user_name@target_ip_address`: The username and IP address of the air-gapped server where the file should be sent.
  * `destination_path`: The directory path on the air-gapped server where the file should be located.
* Below is an example of the transfer command :&#x20;

```
 scp -i firstServer.pem rocketchat.tar ubuntu@176.37.27.133:/home/ubuntu
```
{% endhint %}

**To deploy Rocket.Chat on the air-gapped server,**

* Go to the destination directory in the air-gapped server where you transferred the tar files. Run  `ls` to confirm that the rocketchat.tar and mongodb.tar files were transferred successfully.
* Load the images to Docker with the following commands:

```
docker load -i rocketchat.tar

docker load -i mongodb.tar
```

* You've successfully transferred the Rocket.Chat and MongoDB images to the air-gapped server. Run `docker images` to view them.
* Create a `docker-compose.yaml`  based on our   [official compose](https://github.com/RocketChat/Docker.Official.Image/blob/master/compose.yml) file and update it according to your needs.

{% hint style="warning" %}
For production environments, edit `ROOT_URL` from the default `http://localhost:3000` to match your domain name or IP address.
{% endhint %}

* Install Rocket.Chat by executing this command:

```shell
docker compose up -d
```

* Confirm that the RocketChat and Mongo DB containers are actively running by executing this command:

```
docker ps
```

* To see the log/status of your Rocket.Chat container, execute this command:

```
docker compose logs -f rocketchat
```

It also displays your Site URL, which you can use to access your workspace.

Now you have successfully deployed Rocket.Chat in your air-gapped environment. Log into your workspace using your SITE URL and the first user to log in becomes the workspace administrator.

## Deploying Rocket.Chat with a Private Docker Registry

A [docker registry](https://docs.docker.com/registry/) is a system for storing and distributing Docker images with specific names. Considering that an air-gapped computer can't access the internet to download the required docker images for deploying Rocket.Chat, this guide will demonstrate how to use a private registry to store the necessary images and deploy Rocket.Chat.

&#x20;Deploying Rocket.Chat with a private registry can be summarized into three phases:

1. [Create a private remote registry](./#creating-a-private-registry)
2. [Pull and push the Rocket.Chat and MongoDB images to the registry](./#pull-and-push-the-rocket.chat-mongodb-images-to-the-registry)
3. [Install Rocket.Chat with the images from the remote registry](./#installing-rocket.chat)

The diagram below highlights an overview of the servers:

<figure><img src="../../.gitbook/assets/registry-airgapped-deployment.png" alt=""><figcaption><p>Air</p></figcaption></figure>

**Prerequisites**

* One server that has internet access to download the docker images.
* Two air-gapped servers ( one for hosting the private registry, one for installing Rocket.Chat)

{% hint style="success" %}
* Ensure that docker is installed and operational on the three servers.&#x20;
* The three servers must be able to communicate with each other.&#x20;
{% endhint %}

### **Creating a Private Registry**

Given that the server to host the registry doesn't have internet access, it is impossible to download images from DockerHub or any public registry.  As a result, you need to download the registry image on a server that has internet access and transfer it to the air-gapped registry host server before proceeding with the installation. Follow these steps to complete the process:

* On the first server which has internet access, pull the image that'll be used to create the registry with this command:

```
docker pull registry:2
```

{% hint style="info" %}
Run `docker images` to see that the image has been downloaded.
{% endhint %}

* Create a tar file with the registry image and transfer it to the registry host server with these commands:

```
docker save -o registry_image.tar registry:2
```

```
scp -i [key] <registry_tar_file_path> <user_name@target_ip_address:/destination_path>
```

{% hint style="info" %}
* Ensure to update the following with the appropriate values:
  * `key` : The key to access the registry host server where the file should be sent.
  * `registry_tar_file_path` : The registry\_image.tar file path.
  * `user_name@target_ip_address`: The username and IP address of the registry host server where the file should be sent.
  * `destination_path`: The directory path on the registry host server where the file should be located.
* Below is an example of the transfer command :&#x20;

```
scp -i firstServer.pem registry_image.tar ubuntu@172.31.81.10:/home/ubuntu
```
{% endhint %}

* Now, go to the air-gapped registry host server.  Run the following commands to confirm that you don't have the registry image or container yet:

```
docker images 

docker ps
```

* Navigate to the destination path where you sent the tar file and run the `ls` command and verify that the transfer was successful.
* To load the tar file on the air-gapped registry host server, execute this command in your preferred directory:

```
docker load -i registry_image.tar
```

* Now run `docker images`  to see the registry image that you downloaded and transferred from the first server.
* To start the registry container for this image, execute this command:

```
docker run -d -p 5000:5000 --restart=always --name private-registry registry:2
```

{% hint style="warning" %}
* It's not mandatory to run the container on port 5000. The suggested port is an example and can be updated according to your specific requirements.
* Update `private-registry` with your preferred name for the registry container.
* For production environments, ensure the persistence of images by either specifying a local folder on the host for storage or by implementing other suitable persistence mechanisms.
{% endhint %}

* Run `docker ps` to see the new registry container running.

Now, you have a functioning remote registry on an air-gapped server ready to store the Rocket.Chat and Mongo DB images.

### **Pull and Push the Rocket.Chat MongoDB images to the Registry**

Recall that the registry server has no internet access, so it's impossible to download the Rocket.Chat and MongoDB images from external registries. Alternatively, download the images on the first server with internet access and push the images to the remote registry. Follow these steps to continue the process:

* Return to the first server with internet access and execute these docker-pull commands to download the Rocket.Chat  and MongoDB images:

```
docker pull registry.rocket.chat/rocketchat/rocket.chat:latest

docker pull docker.io/bitnami/mongodb:${MONGODB_VERSION:-5.0}
```

{% hint style="warning" %}
Confirm that you are downloading the appropriate MongoDB version for your Rocket.Chat version by checking our [release notes](https://github.com/RocketChat/Rocket.Chat/releases).
{% endhint %}

* Run this command  to confirm that the images have successfully downloaded:

```
docker images
```

* Tag the Rocket.Chat and MongoDB images with these commands:

```
docker tag registry.rocket.chat/rocketchat/rocket.chat:latest <registry_ip_address>:5000/registry.rocket.chat/rocketchat/rocket.chat:latest

docker tag bitnami/mongodb:5.0 <registry_ip_address>:5000/docker.io/bitnami/mongodb:${MONGODB_VERSION:-5.0}
```

{% hint style="warning" %}
Update `<registry_ip_address:5000>` with the IP address of your registry host server and the appropriate port number, if your registry container is not running on port 5000.&#x20;
{% endhint %}

* Execute the `docker images` command to see the newly tagged images in the list of images.
* If the air-gapped registry host server is HTTP, modify the docker daemon file to allow communication with insecure registries:

```bash
sudo nano /etc/docker/daemon.json
```

* Update the file with the following content and save it:

```json
{
    "insecure-registries": ["<registry_ip_address>:5000"]
}
```

{% hint style="warning" %}
Update `<registry_ip_address:5000>` with the IP address of your registry host server and the appropriate port number, if your registry container is not running on port 5000.&#x20;
{% endhint %}

* Restart docker with this command:

```
sudo systemctl restart docker
```

* Push the tagged images to the remote registry on the air-gapped server with these commands:

```bash
docker push <registry_ip_address>:5000/registry.rocket.chat/rocketchat/rocket.chat:latest

docker push <registry_ip_address>:5000/docker.io/bitnami/mongodb:${MONGODB_VERSION:-5.0}
```

{% hint style="warning" %}
Update `<registry_ip_address:5000>` with the IP address of your registry host server and the appropriate port number, if your registry container is not running on port 5000.&#x20;
{% endhint %}

* Now, go to the air-gapped registry host server to confirm that the images were successfully pushed. Run this command to open an interactive shell inside the registry container:

```
docker exec -it private-registry sh
```

{% hint style="info" %}
Update `private-registry` with the name of your registry container if it's different.
{% endhint %}

* Execute this command to see the docker images in the registry:

```
ls /var/lib/registry/docker/registry/v2/repositories
```

Confirm that the MongoDB and Rocket.Chat image exists in the registry, and you're ready to install Rocket.Chat from the remote registry.

### **Installing Rocket.Chat**

Now that the Rocket.Chat and MongoDB images have been pushed to the remote registry, the next step is to install Rocket.Chat on the third server. Kindly note that the third server is also air-gapped and does not have internet access. Therefore, you have to deploy Rocket.Chat using the images from the remote registry.

* Run these commands to confirm that no Rocket.Chat and MongoDB images are running on the server.

```
docker images 

docker ps
```

* If you are using HTTP to communicate between your server and registry, modify the docker daemon file to allow communication with insecure registries:

```bash
sudo nano /etc/docker/daemon.json
```

* Update the file with the following content and save it:

```json
{
    "insecure-registries": ["<registry_ip_address>:5000"]
}
```

{% hint style="warning" %}
Update `<registry_ip_address:5000>` with the IP address of your registry host server and the appropriate port number, if your registry container is not running on port 5000.&#x20;
{% endhint %}

* Restart docker with this command:

```
sudo systemctl restart docker
```

* Create a `docker-compose.yaml`  based on our   [official compose](https://github.com/RocketChat/Docker.Official.Image/blob/master/compose.yml) file and update it according to your needs.
* Update the image paths for Rocket.Chat and MongoDB to reference the images on the remote registry. Below is an example of how it can look like:

```yaml
volumes:
  mongodb_data: { driver: local }

services:
  rocketchat:
    image: <registry_ip_address>:5000/registry.rocket.chat/rocketchat/rocket.chat:${RELEASE:-latest}
    restart: always
    labels:
      traefik.enable: "true"
      traefik.http.routers.rocketchat.rule: Host(`${DOMAIN:-}`)
      traefik.http.routers.rocketchat.tls: "true"
      traefik.http.routers.rocketchat.entrypoints: https
      traefik.http.routers.rocketchat.tls.certresolver: le
    environment:
      MONGO_URL: "${MONGO_URL:-\
        mongodb://${MONGODB_ADVERTISED_HOSTNAME:-mongodb}:${MONGODB_INITIAL_PRIMARY_PORT_NUMBER:-27017}/\
        ${MONGODB_DATABASE:-rocketchat}?replicaSet=${MONGODB_REPLICA_SET_NAME:-rs0}}"
      MONGO_OPLOG_URL: "${MONGO_OPLOG_URL:\
        -mongodb://${MONGODB_ADVERTISED_HOSTNAME:-mongodb}:${MONGODB_INITIAL_PRIMARY_PORT_NUMBER:-27017}/\
        local?replicaSet=${MONGODB_REPLICA_SET_NAME:-rs0}}"
      ROOT_URL: ${ROOT_URL:-http://localhost:${HOST_PORT:-3000}}
      PORT: ${PORT:-3000}
      DEPLOY_METHOD: docker
      DEPLOY_PLATFORM: ${DEPLOY_PLATFORM:-}
      REG_TOKEN: ${REG_TOKEN:-}
    depends_on:
      - mongodb
    expose:
      - ${PORT:-3000}
    ports:
      - "${BIND_IP:-0.0.0.0}:${HOST_PORT:-3000}:${PORT:-3000}"

  mongodb:
    image: <registry_ip_address>:5000/docker.io/bitnami/mongodb:${MONGODB_VERSION:-5.0}
    restart: always
    volumes:
      - mongodb_data:/bitnami/mongodb
    environment:
      MONGODB_REPLICA_SET_MODE: primary
      MONGODB_REPLICA_SET_NAME: ${MONGODB_REPLICA_SET_NAME:-rs0}
      MONGODB_PORT_NUMBER: ${MONGODB_PORT_NUMBER:-27017}
      MONGODB_INITIAL_PRIMARY_HOST: ${MONGODB_INITIAL_PRIMARY_HOST:-mongodb}
      MONGODB_INITIAL_PRIMARY_PORT_NUMBER: ${MONGODB_INITIAL_PRIMARY_PORT_NUMBER:-27017}
      MONGODB_ADVERTISED_HOSTNAME: ${MONGODB_ADVERTISED_HOSTNAME:-mongodb}
      MONGODB_ENABLE_JOURNAL: ${MONGODB_ENABLE_JOURNAL:-true}
      ALLOW_EMPTY_PASSWORD: ${ALLOW_EMPTY_PASSWORD:-yes}
```

{% hint style="warning" %}
* Update `<registry_ip_address:5000>` with the IP address of your registry host server and the appropriate port number, if your registry container is not running on port 5000.&#x20;
* For production environments, edit `ROOT_URL` from the default `http://localhost:3000` to match your domain name or IP address.
{% endhint %}

* Install Rocket.Chat by executing this command:

```shell
docker compose up -d
```

* Run these commands to confirm that the RocketChat and Mongo DB  images are present with thier containers actively  running:

```
docker images 

docker ps
```

* To see the log/status of your Rocket.Chat container, execute this command:

```
docker compose logs -f rocketchat
```

It also displays your Site URL, which you can use to access your workspace.

Now you have successfully deployed Rocket.Chat in your air-gapped environment. Log into your workspace using your SITE URL and the first user to log in becomes the workspace administrator.
