---
description: Deploying Rocket.Chat on IBM Cloud
---

# IBM Cloud

While IBM Cloud offers several choices for hosting Rocket.Chat, including Docker container on a Kubernetes cluster, VMWare, and Bare Metal Server. The following instructions will concentrate on creating a Cloud Foundry app for Rocket.Chat.

## Prerequisites

* An IBM Cloud account
* The IBM Cloud command line client (ibmcloud) installed
* Git

## Deploying Rocket.Chat on IBM cloud

* Log in to the [IBM Cloud dashboard](https://cloud.ibm.com/). Navigate to **Apps Box** **> Create an app**.
* Give the Rocket.Chat server a unique app name, select as **Starting point.**
* Click **Create a new app.** Select Node.js as **Platform.**&#x20;
* Then click **Create**.
* In the **App Details** tab, click **Create Service**. From the list of services, select **Databases > Databases for MongoDB**.
* Configure MongoDB to enable oplog tailing and initiate a replicaset.

Open your terminal and run the following commands:

* Git clone the latest Rocket.Chat:

```
git clone https://github.com/RocketChat/Rocket.Chat.git
```

* Log in to the IBM Cloud command-line interface:

```
ibmcloud cf login
```

* Push Rocket.Chat to the app you created early in the dashboard using **meteor-buildpack-horse:**

```
cf push <your app name> -m 512M -b https://github.com/RocketChat/meteor-buildpack-horse.git
```

* Go to `https://<your app name>.mybluemix.net/` in your browser to access your instance of Rocket.Chat

{% hint style="info" %}
If you encounter any problems, visit the[ IBM Apps instructions](https://cloud.ibm.com/docs/apps?topic=apps-getting-started).
{% endhint %}
