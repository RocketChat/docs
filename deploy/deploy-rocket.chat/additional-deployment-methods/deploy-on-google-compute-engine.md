# Deploy on Google Compute Engine

Google Compute Engine (GCE) is a scalable and flexible Infrastructure as a Service (IaaS) solution from the Google Cloud Platform. Deploying Rocket.Chat on GCE gives you a robust and reliable communication platform for your organization. In this guide, you'll learn step-by-step through deploying Rocket.Chat with Google Compute Engine.

## Preparation Steps

Before you begin, make sure you have the following:

* A [Google Cloud Platform (GCP)](https://cloud.google.com/gcp) account with billing enabled

### Deploying Rocket.Chat on Google Compute Engine

**Create a Compute Instance**

* Log in to [Google Cloud Console](https://console.cloud.google.com/).
* Create a new project and select it.
* Click **Create a VM instance.**
* Select a preferred Machine Type (Default: 2vCPU, 1 core , 4GB Memory).
* Select a Linux image (Default: Debian/ubuntu).
* Allow HTTP and HTTPS Traffic.
* Click **Create.**

{% hint style="info" %}
To learn more about VM instances, see the [official documentation](https://cloud.google.com/compute/docs/instances/create-start-instance).
{% endhint %}

**Deploy Rocket.Chat**

* SSH into the VM instance.
* Install docker on the instance with this command:

```
sudo wget -qO- https://get.docker.com/ | sh
```

* Create a container network by running this command:

```
sudo docker network create chatNetwork
```

* To install a docker image for MongoDB, run this command:

```bash
sudo docker run --name mongo --network chatNetwork -d mongo  --oplogSize 128 --replSet rs0
```

* SSH into the `mongodb` docker container:

```
sudo docker exec -it mongo mongosh
```

* Execute the following script to configure the MongoDB replica set:&#x20;

```
rs.initiate({ _id: 'rs0', members: [ { _id: 0, host: 'mongo:27017' } ]})
```

* Exit the docker container.
* To install a docker image for Rocket.Chat, run the following command:

```bash
docker run --name rocketchat -d -p 80:3000 \
--network chatNetwork --env PORT=3000 \
--env ROOT_URL=https://<your-domain> \
--env MONGO_URL=mongodb://mongo:27017/rocketchat \
--env MONGO_OPLOG_URL=mongodb://mongo:27017/local rocket.chat:latest
```

{% hint style="info" %}
* Replace the `<your-domain>` with your domain name.
* Ensure that the domain is pointing to your server IP address.
{% endhint %}

Rocket.Chat is currently up and running on the compute engine. To access it, open a web browser and enter the external IP address of the instance. You can also access your workspace from _http://\<your-domain>_.

To confirm that Rocket.Chat container is running on the compute engine, run this command:

```
sudo docker ps -a
```

If you want the containers to **start automatically every time the instance reboots,**  configure the [startup script for the instance](https://cloud.google.com/compute/docs/instances/startup-scripts/linux#passing-directly) with the appropriate docker commands.

Great job on setting up Rocket.Chat on Google Compute Engine! Now, you have a secure and scalable platform for collaboration with real-time communication, monitoring, and backups. Expect better teamwork and productivity!
