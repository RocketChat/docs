# Prepare for your Deployment

{% hint style="info" %}
[ **👉 Trouble installing or deploying Rocket.Chat?** Join our Weekly Technical Helpline to get real-time help from our team!](https://app.livestorm.co/rocket-chat/rocketchats-weekly-technical-helpline?type=detailed)
{% endhint %}

Rocket.Chat can be hosted on our Cloud, installed from various marketplaces, or manually installed on your server.

## Official Recommendation

We have a minimum set of requirements to obtain official support from our team. These requirements are necessary to access essential system information, provide an SLA, answer questions, or solve problems. SLAs and our paid Support Policy can cover only installations matching these minimum requirements. Some requirements may vary depending on the installation size, as described in the following sections.

[Docker](https://www.docker.com) is widely used for packaging applications in containers and distributing them as images, providing abstraction and isolation layers from the OS (operational system). It allows the application to be shipped with a specific version of the OS compatibility layer and its dependencies already installed and configured.

{% hint style="success" %}
We offer a variety of Deployment methods, and we recommend you set up using our [Docker & Docker Compose](rapid-deployment-methods/docker-and-docker-compose/) guide for several reasons mentioned below.
{% endhint %}

## Environment

### Docker Container

We strongly recommend using our official Docker images to eliminate environmental issues of missing, outdated, or mismatching dependencies, specific operating system issues, or problems during manual installations.

{% hint style="info" %}
Rocket.Chat's cloud uses our official Docker images, which makes this installation method the most tested.
{% endhint %}

{% content-ref url="rapid-deployment-methods/docker-and-docker-compose/docker-containers/" %}
[docker-containers](rapid-deployment-methods/docker-and-docker-compose/docker-containers/)
{% endcontent-ref %}

#### Why Docker?

* **Scalability**: Scaling your Rocket.Chat deployment using Docker with Docker Compose is quite easy as editing the compose file.
* **Ease of Deployment**: An instance of Rocket.Chat can be up and running efficiently using our images or the compose `yml` file.
* **Ease of Maintenance and Support**: Maintaining a docker instance is pretty straightforward. Rocket.Chat offers both official and community support for all Docker-related issues.

### Multiple processes

We recommend running multiple application processes to maximize the usage of all available cores. Although you can use either Virtual Machines or containers, we recommend and only support the usage of Docker containers.

Virtual machines and containers differ in several ways. Still, the primary difference is that containers provide a way to virtualize an OS so that multiple workloads can run on a single OS instance. With VMs, the hardware is virtualized to run multiple OS instances. The containers’ speed, agility, and portability offer definite performance advantages for our use case.

### Performance benefits of containers

* **Faster startup time**: A containerized application usually starts in a couple of seconds. Virtual machines could take a couple of minutes.
* **Better resource distribution**: Containers use only as many system resources as needed at a given time. Before a virtual machine can start, some resources must be permanently assigned. For this reason, virtual machines tie up resources on the host, even if they are not using them. Host resources can be distributed effectively with the help of containers.
* **Direct hardware access**: When an application runs inside a virtual machine, it usually cannot directly access the hardware resources of the host machine, such as graphics cards. This can slow down the processing speed of the application. However, when an application is containerized, it can access and use the hardware resources of the host machine, including graphics cards, which can speed up processing.
* **Less redundancy**: With virtual machines, you have to install an entire guest operating system, duplicating many components already running on your host server. However, with containers, you do not need to install a complete operating system for each container.

{% embed url="https://www.backblaze.com/blog/vm-vs-containers/" %}

### Containers orchestration

Using Docker-compatible containers orchestration/management systems such as Kubernetes, Rancher, or OpenShift can facilitate the scaling of containerized Rocket.Chat instances make it possible to distribute load among different physical bare-metal servers or virtual machines.

Rocket.Chat's cloud uses this approach to manage cloud-hosted instances with high reliability and flexibility. We leverage the same expertise to provide documentation on configuring and deploying scaled installations.

We require **scaled installations** (with more than **one instance** or more than **2000 users**) to be orchestrated and managed with one of the following:

1. SUSE Rancher
2. Red Hat Openshift
3. Kubernetes and Helm _(Managed by a cloud platform such as AWS, Google Cloud, etc, or self-managed)_
4. docker-compose

At this time, no other container orchestration/management technologies will be supported by our Support team for any issues related to **scaled installations**.

## Hardware

To learn more about the minimum hardware requirements for deploying Rocket.Chat, see [hardware-requirements.md](hardware-requirements.md "mention").

## Monitoring

Production deployments should continually collect metrics regarding the installation's instances and database. Rocket.Chat supports and recommends the industry-standard Prometheus + Grafana monitoring stack. Grafana dashboards are available in the [Metrics](https://github.com/RocketChat/Rocket.Chat.Metrics) repository.

{% embed url="https://github.com/RocketChat/Rocket.Chat.Metrics" %}

## Versions

Rocket.Chat releases a new version periodically. It is recommended to regularly check the [release cycles](https://github.com/RocketChat/Rocket.Chat/releases) and ensure that you are using a supported version.

{% content-ref url="../../resources/get-support/" %}
[get-support](../../resources/get-support/)
{% endcontent-ref %}
