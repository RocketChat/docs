---
description: Requirements for Rocket.Chat Deployment
---

# System Requirements

{% hint style="success" %}
* November 20, 2023 will be the sunset date for allowing connections between our cloud services and workspaces running legacy versions of Rocket.Chat that are outside our support window. November 20, 2023 will also be the sunset date for allowing connections between our official mobile and desktop apps and workspaces running legacy versions of Rocket.Chat that are outside our support window. If you are on a legacy unsupported server, we strongly recommend you update to the latest version of Rocket.Chat to access your cloud portal, mobile and desktop apps.
* Rocket.Chat versions receive support for six months after release.
{% endhint %}

When preparing to deploy your Rocket.Chat workspace, it's essential to consider the necessary software and hardware requirements to ensure a successful deployment.

These requirements vary significantly with the following:

* Number of concurrently active users
* Number of actually connected devices per user
* Users' activities: Solely text-based messaging takes minimal resources, while file sharing and jpg uploads will consume more resources. This is because a set of computations has to be done on these files.
* Bot or integration activity level: Different bots and integrations have different requirements.

### Hardware Requirements

1. **Virtual Private Server (VPS)**

A VPS is a virtual machine offered as a service by a hosting provider or cloud service, allowing users to access and manage their own isolated server environment.

**Minimal VPS requirements**

This minimal virtual setup, if not over-provisioned, is suitable for small deployments of up to 200 users, and 50 concurrent active users, with limited mixed uploads, sharing, and bot activities.

* Single-core (2 GHz)
* 1 GB RAM
* 30 GB of SSD

**Recommended VPS requirements**

If not over-provisioned, the recommended virtual configuration can handle small deployments with up to 500 users, 100 concurrent active users, and moderate levels of mixed uploads, sharing, and bot activities.

* Dual-core (2 GHz)
* 2 GB RAM
* 40 GB of SSD

2. **Small Office Server**

This configuration can support a small office or group of up to 50 users, with 25 concurrently active users and moderate levels of mixed uploads, sharing, and bot activities. It relies on a managed MongoDB service ([mlab.com](https://www.mongodb.com/cloud/atlas/migrate/mlab)), as running MongoDB locally on a Pi is not advised.

* Raspberry Pi 3 or Pi 2
* 4 cores 1 GB memory
* 32 GB SD card ($15)

3. **Bare-metal server**

This minimal hardware configuration is ideal for corporate or groups with up to 1,000 users, up to 300 concurrently active, and moderate levels of mixed uploads, sharing, and bot activities.

* Intel Xeon E5-2603 v4 (or equivalent) \[1.7 GHz, 6 cores, $213 USD]
* 4 GB RAM
* 500 GB hard disk or larger

## Sizing Guides

| Type                   | VPS                         | Small HA(Monolithic)            | S. Microservices                | L Microservices                 |
| ---------------------- | --------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| **Total Users**        | 0 - 500                     | 1k - 2k                         | 10k - 20k                       | 40k - 80k                       |
| **C Active Users**     |                             |                                 |                                 |                                 |
| **CPU**                | 0.8 - 3 CPU                 | 31 - 60 CPUs                    | 31 - 60 CPUs                    | 117 - 233                       |
| **RAM/GB**             | 2GB                         | 1.5GB - 4GB                     |                                 |                                 |
| **Storage**            | 40GB SSD                    |                                 |                                 | 3508 - 6999                     |
| **MongoDB min Memory** | 8GB(2 Cores) 32GB (8 Cores) | 32GB(2 Cores) 32GB (8 Cores)    | 32GB(2 Cores) 32GB (8 Cores)    | 32GB(2 Cores) 32GB (8 Cores)    |
| **File Uploads**       |                             | S3, Google Storage, File System | S3, Google Storage, File System | S3, Google Storage, File System |
| **Deployment method**  | Docker/Docker Compose       |                                 |                                 |                                 |
