---
description: Deploying Rocket.Chat on Google Compute Engine
---

# Google Compute Engine

{% hint style="info" %}
[**👉 Trouble installing or deploying Rocket.Chat?** Join our Weekly Technical Helpline to get real-time help from our team!](https://app.livestorm.co/rocket-chat/rocketchats-weekly-technical-helpline?type=detailed)
{% endhint %}

## Create a Compute Instance

* Click **create VM instance** in Google Cloud Console.
* Select a preferred Machine Type (Default: 1cpu, 3.75GB Memory).
* Select a Linux image (Default: Debian/ ubuntu).
* Allow HTTP/S Traffic.

## Deploy Rocket.Chat on the Google Compute Engine

* Connect to the instance by SSH or via the browser on any port other than `80`.
* To install docker on the instance, run the following command:

`sudo wget -qO- https://get.docker.com/ | sh`

* Create a container network by running this command:

`docker network create chatNetwork`

* To install a docker image, run this command:

```bash
sudo docker run --name mongo --network chatNetwork -d mongo \
--smallfiles --oplogSize 128 --replSet rs0 --storageEngine=mmapv1
```

* SSH into the `mongodb` docker container and run this command to configure the MongoDB Replica set:

&#x20;`sudo docker exec -it mongo mongo`

Execute the following script to create a replica set :&#x20;

`rs.initiate({ _id: 'rs0', members: [ { _id: 0, host: 'localhost:27017' } ]})`

Then, exit the docker container.

* To install a docker image for Rocket.Chat, run the following command:

```bash
docker run --name rocketchat -d -p 80:3000 \
--network chatNetwork --env PORT=3000 \
--env ROOT_URL=https://www.test.com \
--env MONGO_URL=mongodb://mongo:27017/rocketchat \
--env MONGO_OPLOG_URL=mongodb://mongo:27017/local rocket.chat:latest
```

{% hint style="info" %}
Replace the `ROOT_URL` with your domain.
{% endhint %}

You are now running Rocket.Chat on compute engine. You can open a browser with the external IP of the instance.

If you want the containers to start each time the instance reboots, configure the following to the instance.

* Click on the instance and hit **edit**.
* Under **Custom metadata**, add an item with the following:

```
key: "startup-script"
value "sudo docker start mongo;
sudo docker start rocketchat"
```
