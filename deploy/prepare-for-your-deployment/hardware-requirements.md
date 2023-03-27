---
description: Minimum Requirements for Server Deployment
---

# Hardware Requirements

{% hint style="info" %}
[**👉 Trouble installing or deploying Rocket.Chat?** Join our Weekly Technical Helpline to get real-time help from our team!](https://app.livestorm.co/rocket-chat/rocketchats-weekly-technical-helpline?type=detailed)
{% endhint %}

To get a Rocket.Chat instance running, paying attention to the properties of the machine/hardware you have is essential.

These requirements vary significantly with the following:

* Number of concurrently active users
* Number of actually connected devices per user
* Users' activities: Solely text-based messaging takes minimal resources, while file sharing and jpg uploads will consume more resources. This is because a set of computations has to be done on these files.
* Bot or integration activity level: Different bots and integrations have different requirements.

## Bare-metal Server

The following are sizes for the lowest-cost deployment unit available for cloud VPS and bare-metal servers.

* Intel Xeon E5-2603 v4 (or equivalent) \[1.7 GHz, 6 cores, $213 USD]
* 4 GB RAM
* 500 GB hard disk or larger

This minimal hardware configuration is ideal for corporate or groups with up to 1,000 users, up to 300 concurrently active, and moderate levels of mixed uploads, sharing, and bot activities.

## VPS(Virtual Private Server)

A virtual private server is a virtual machine sold as a service by an Internet hosting service or cloud provider.

### VPS (minimal)

* Single-core (2 GHz)
* 1 GB RAM
* 30 GB of SSD

When not over-provisioned by the provider, this minimal virtual configuration is ideal for small deployments of up to 200 users, up to 50 concurrently active, and a minimal level of mixed uploads, sharing, and bot activities.

### VPS (recommended)

* Dual-core (2 GHz)
* 2 GB RAM
* 40 GB of SSD

When not over-provisioned by the provider, this virtual configuration can accommodate small deployments of up to 500 users, up to 100 concurrently active, and moderate levels of mixed uploads, sharing, and bot activities.

## Really Small Office Server

* Raspberry Pi 3 or Pi 2
* 4 cores 1 GB memory
* 32 GB SD card ($15)

This minimal configuration can accommodate a small office or group of up to 50 users and up to 25 concurrently active and moderate levels of mixed uploads, sharing, and bot activities. It is based on a managed MongoDB service ([mlab.com](https://mlab.com)). Running mongo locally to a Pi is not recommended at this time.
