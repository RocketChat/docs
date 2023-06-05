---
description: Requirements for official support from the Rocket.Chat team
---

# Enterprise Support

{% hint style="success" %}
**Rocket.Chat 6.0** is our most secure and scalable version yet. It includes 10 security patches, 9 brand-new features, and 25+ overall platform enhancements. Visit our [website](https://www.rocket.chat/six) to learn more about what’s new in this latest version. [Update now](https://docs.rocket.chat/deploy/updating-rocket.chat)!
{% endhint %}

## Supported Environment

We have a minimum set of requirements to obtain official support from our team. These requirements are necessary for us to access the essential system information, provide an SLA, answer questions, or provide a solution for the problem.

Only installations matching these minimum requirements can be covered by our SLAs and our paid Support Policy. Some requirements may vary depending on the installation size as described in the following sections.

We require the installation to run the Docker image provided by the Rocket.Chat team, this makes it possible to isolate external factors. It ensures that the support request refers to our application, not the following factors.

1. Problems during the compilation process
2. Problems during the installation process
3. Missing or outdated dependencies
4. Installation of non-official versions

This ensures we can provide quick fixes and a more efficient way to reproduce problems leading to the most efficient support flow possible.

{% content-ref url="../../../deploy/prepare-for-your-deployment/rapid-deployment-methods/docker-and-docker-compose/docker-containers/" %}
[docker-containers](../../../deploy/prepare-for-your-deployment/rapid-deployment-methods/docker-and-docker-compose/docker-containers/)
{% endcontent-ref %}

## Rocket.Chat versions

Rocket.Chat provides support for, at least, 3 months for each release. Rocket.Chat provides support for 6 months to the latest releases of each major version, e.g. 1.3 is the latest release of major version 1.x before major version 2.0. Rocket.Chat may provide a longer period of support depending on the necessity, check the table below to verify the final support date of each release version.

By support, we mean that Rocket.Chat will provide only security fixes and answer support tickets related to configuration and usage for the below-mentioned versions. Bugs not related to security issues will be fixed only in new versions.

{% hint style="info" %}
In case of security-relevant bugs, we might decide to backport patches to older releases on a case-by-case basis. Please understand though, that those will be rare exceptions. If you want to play it safe, upgrade to the latest stable.
{% endhint %}

<table><thead><tr><th>Rocket.Chat Release</th><th width="163">Latest Version</th><th width="115" align="right">Released At</th><th align="right">End of Life</th></tr></thead><tbody><tr><td>6.2</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/6.2.2"><mark style="color:red;">6.2.2</mark></a></td><td align="right">May 2023</td><td align="right">Aug 2023</td></tr><tr><td>6.1</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/6.1.8"><mark style="color:red;">6.1.8</mark></a></td><td align="right">May 2023</td><td align="right">Aug 2023</td></tr><tr><td>6.0</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/6.0.8"><mark style="color:red;">6.0.8</mark></a></td><td align="right">May 2023</td><td align="right">Aug 2023</td></tr><tr><td><strong>5.4 (LTS)</strong></td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/5.4.10"><mark style="color:red;"><strong>5.4.10</strong></mark></a></td><td align="right"><strong>May 2023</strong></td><td align="right"><strong>Nov 2023</strong></td></tr><tr><td>5.3</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/5.3.6"><mark style="color:red;">5.3.6</mark></a></td><td align="right">Jan 2023</td><td align="right">Apr 2023</td></tr><tr><td>5.2</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/5.2.2"><mark style="color:red;">5.2.2</mark></a></td><td align="right">Jan 2023</td><td align="right">Apr 2023</td></tr><tr><td>5.1</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/5.1.4"><mark style="color:red;">5.1.4</mark></a></td><td align="right">Sep 2022</td><td align="right">Dec 2022 </td></tr><tr><td>5.0</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/5.0.7"><mark style="color:red;">5.0.7</mark></a></td><td align="right">Jul 2022</td><td align="right">Oct 2022</td></tr><tr><td><strong>4.8 (LTS)</strong></td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/4.8.7"><mark style="color:red;"><strong>4.8.7</strong></mark></a></td><td align="right"><strong>Nov 2022</strong></td><td align="right"><strong>May 2023</strong></td></tr><tr><td>4.7</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/4.7.5">4.7.5</a></td><td align="right">Jul 2022</td><td align="right">Oct 2022</td></tr><tr><td>4.6</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/4.6.4">4.6.4</a></td><td align="right">Jun 2022</td><td align="right">Sep 2022</td></tr><tr><td>4.5</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/4.5.7">4.5.7</a></td><td align="right">Jun 2022</td><td align="right">Sep 2022</td></tr><tr><td>4.4</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/4.4.5">4.4.5</a></td><td align="right">Jan 2022</td><td align="right">Apr 2022</td></tr><tr><td>4.3</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/4.3.3">4.3.3</a></td><td align="right">Dec 2021</td><td align="right">Mar 2022</td></tr><tr><td>4.2</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/4.2.4">4.2.4</a></td><td align="right">Nov 2021</td><td align="right">Mar 2022</td></tr><tr><td>4.1</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/4.1.6">4.1.6</a></td><td align="right">Jun 2021</td><td align="right">Sep 2022</td></tr><tr><td>4.0</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/4.0.6">4.0.6</a></td><td align="right">Nov 2021</td><td align="right">Feb 2022</td></tr><tr><td><strong>3.18 (LTS)</strong></td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/3.18.7">3.18.7</a></td><td align="right"><strong>May 2021</strong></td><td align="right"><strong>Nov 2021</strong></td></tr><tr><td>3.17</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/3.17.3">3.17.3</a></td><td align="right">Jul 2021</td><td align="right">Oct 2021</td></tr><tr><td>3.16</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/3.16.5">3.16.5</a></td><td align="right">Jun 2021</td><td align="right">Sep 2021</td></tr><tr><td>3.15</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/3.15.4">3.15.4</a></td><td align="right">May 2021</td><td align="right">Aug 2021</td></tr><tr><td>3.14</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/3.14.6">3.14.6</a></td><td align="right">Apr 2021</td><td align="right">Jul 2021</td></tr><tr><td>3.13</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/3.13.5">3.13.5</a></td><td align="right">Mar 2021</td><td align="right">Jun 2021</td></tr><tr><td>3.12</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/3.12.7">3.12.7</a></td><td align="right">Feb 2021</td><td align="right">May 2021</td></tr><tr><td>3.11</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/3.11.6">3.11.6</a></td><td align="right">Aug 2022</td><td align="right">Nov 2022</td></tr><tr><td>3.10</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/3.10.7">3.10.7</a></td><td align="right">Dec 2020</td><td align="right">Mar 2021</td></tr><tr><td>3.9</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/3.9.7">3.9.7</a></td><td align="right">Nov 2020</td><td align="right">Feb 2021</td></tr><tr><td>3.8</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/3.8.9">3.8.9</a></td><td align="right">Oct 2020</td><td align="right">Jan 2021</td></tr><tr><td>3.7</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/3.7.4">3.7.4</a></td><td align="right">Sep 2020</td><td align="right">Dec 2020</td></tr><tr><td>3.6</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/3.6.3">3.6.3</a></td><td align="right">Aug 2020</td><td align="right">Nov 2020</td></tr><tr><td>3.5</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/3.5.4">3.5.4</a></td><td align="right">Jul 2020</td><td align="right">Oct 2020</td></tr><tr><td>3.4</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/3.4.3">3.4.3</a></td><td align="right">Jun 2020</td><td align="right">Sep 2020</td></tr><tr><td>3.3</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/3.3.3">3.3.3</a></td><td align="right">May 2020</td><td align="right">Aug 2020</td></tr><tr><td>3.2</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/3.2.2">3.2.2</a></td><td align="right">Apr 2020</td><td align="right">Jul 2020</td></tr><tr><td>3.1</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/3.1.3">3.1.3</a></td><td align="right">Mar 2020</td><td align="right">Jun 2020</td></tr><tr><td>3.0</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/3.0.13">3.0.13</a></td><td align="right">Jan 2020</td><td align="right">Apr 2020</td></tr><tr><td><strong>2.4 (LTS)</strong></td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/2.4.14">2.4.14</a></td><td align="right"><strong>Dec 2019</strong></td><td align="right"><strong>Jun 2020</strong></td></tr><tr><td>2.3</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/2.3.3">2.3.3</a></td><td align="right">Nov 2019</td><td align="right">Feb 2020</td></tr><tr><td>2.2</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/2.2.1">2.2.1</a></td><td align="right">Oct 2019</td><td align="right">Jan 2020</td></tr><tr><td>2.1</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/2.1.3">2.1.3</a></td><td align="right">Sep 2019</td><td align="right">Dec 2019</td></tr><tr><td>2.0</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/2.0.1">2.0.1</a></td><td align="right">Aug 2019</td><td align="right">Nov 2019</td></tr><tr><td><strong>1.3 (LTS)</strong></td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/1.3.5">1.3.5</a></td><td align="right"><strong>Jul 2019</strong></td><td align="right"><strong>Jan 2020</strong></td></tr><tr><td>1.2</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/1.2.4">1.2.4</a></td><td align="right">Jun 2019</td><td align="right">Sep 2019</td></tr><tr><td>1.1</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/1.1.5">1.1.5</a></td><td align="right">May 2019</td><td align="right">Aug 2019</td></tr><tr><td>1.0</td><td><a href="https://github.com/RocketChat/Rocket.Chat/releases/tag/1.0.5">1.0.5</a></td><td align="right">Apr 2019</td><td align="right">Jul 2019</td></tr></tbody></table>

{% hint style="warning" %}
Always update to the latest stable version before reporting any bugs or before ask for help from the community.
{% endhint %}

{% hint style="info" %}
**LTS** means **Long Time Support** and it's used to identify the last **minor** version before a **major** version, e.g. 2.4 is the last minor before 3.x. A new major version means that the version introduced a breaking change and requires attention on the upgrade, so we maintain the support of the previous version for a longer time in order to give you more time to plan and test the upgrade.
{% endhint %}

### Rocket.Chat Cloud

Rocket.Chat manages upgrades and provides support to Rocket.Chat Cloud users regardless of the release version. If a Rocket.Chat Cloud user with an outdated server version sends in a support request, his server might be upgraded to the latest stable version without acknowledgment to ensure the best performance.

### Rocket.Chat Services

Rocket.Chat Services include services such as our push gateway, the marketplace, and other services managed by Rocket.Chat.

October 1st our services will no longer continue to guarantee support for Rocket.Chat 0.x. After this date, you may receive errors or warnings about incompatibility.

3 months after a new major release, e.g. 2.x, the last major release, e.g. 1.x, will have the Services support deprecated and you may receive warnings about the deprecation. 5 months after the deprecation the support will be removed and you may receive errors and warnings about incompatibility.

#### Cloud Service Support

| Rocket.Chat Release | Deprecation Date | End of Life Date |
| ------------------- | ---------------: | ---------------: |
| 0.x                 |         Aug 2019 |         Jan 2020 |
| 1.x                 |         Nov 2019 |         Apr 2020 |
| 2.x                 |         May 2020 |         Oct 2020 |
| 3.x                 |         Jan 2022 |         Jun 2022 |
| 4.x                 |              TBD |              TBD |
| 5.x                 |              TBD |              TBD |
| 6.x                 |              TBD |              TBD |

## MongoDB versions

Each Rocket.Chat release supports different versions of MongoDB, the table below presents the support of MongoDB versions for each major Rocket.Chat release in addition to the deprecated version that will be removed on the next or subsequent versions.

> Rocket.Chat only adds or removes support of MongoDB versions on major releases so the minor versions are ommited on table below.

#### MongoDB Support

| Rocket.Chat Release |      Supported Versions | Deprecated Version |
| ------------------- | ----------------------: | -----------------: |
| 1.x                 |      3.2, 3.4, 3.6, 4.0 |                3.2 |
| 2.x                 |           3.4, 3.6, 4.0 |                3.4 |
| 3.x                 |           3.4, 3.6, 4.0 |                3.4 |
| 4.x                 | 3.6, 4.0, 4.2, 4.4, 5.0 |           3.6, 4.0 |
| 5.x                 |           4.2, 4.4, 5.0 |                4.2 |
| 6.x                 |           4.4, 5.0, 6.0 |                    |

The upgrade guides available from the official MongoDB documentation are listed below. Bear in mind that it's not possible to skip a version when upgrading, e.g. to upgrade from 3.2 to 3.6 it's necessary to upgrade from 3.2 to 3.4 first and then to 3.6.

* [Upgrade Replicat Set to 3.4](https://docs.mongodb.com/manual/release-notes/3.4-upgrade-replica-set/)
* [Upgrade Replicat Set to 3.6](https://docs.mongodb.com/manual/release-notes/3.6-upgrade-replica-set/)
* [Upgrade Replicat Set to 4.0](https://docs.mongodb.com/manual/release-notes/4.0-upgrade-replica-set/)
* [Upgrade Replicat Set to 4.2](https://docs.mongodb.com/manual/release-notes/4.2-upgrade-replica-set/)
* [Upgrade Replicat Set to 4.4](https://docs.mongodb.com/manual/release-notes/4.4-upgrade-replica-set/)
* [Upgrade Replicat Set to 5.0](https://docs.mongodb.com/manual/release-notes/5.0-upgrade-replica-set/)
* [Upgrade Replicat Set to 6.0](https://www.mongodb.com/docs/manual/release-notes/6.0-upgrade-replica-set/)

> It's possible to bypass the MongoDB version check by using the environment variable `BYPASS_MONGO_VALIDATION=true`. Bare in mind that this work around should be used only when extrictly necessary and may prevent some functionalities to work properly or even prevent the server to start.

## Browser versions

The ecosystem of browsers has been and still is, an ever-evolving field of change. Since the rate of change is tremendous, we also have to limit the support to recent browsers. We're usually quite good with that but some older browsers just don't support some features that we build upon. That is why we limit or support for browsers in the following way:

We support the following desktop browsers and versions:

| Browser                     | Supported Versions  |
| --------------------------- | ------------------- |
| Google Chrome               | Latest 3 versions   |
| Mozilla Firefox             | Latest 3 versions   |
| Apple Safari                | Latest 2 versions   |
| Microsoft Edge              | Latest 2 versions   |
| Microsoft Internet Explorer | Latest version only |

> There may be small exceptions in rare cases.

That being said, here's how you can find out if **your** browser version is still supported (all lists include an indication of a specific browser version is still supported or not):

* [Version history of Mozilla Firefox](https://en.wikipedia.org/wiki/Firefox\_version\_history)
* [Version history of Google Chrome](https://en.wikipedia.org/wiki/Google\_Chrome\_version\_history)
* [Version history of Apple Safari](https://en.wikipedia.org/wiki/Safari\_version\_history)
* [Version history of Microsoft Edge](https://en.wikipedia.org/wiki/Microsoft\_Edge#Release\_history)
* [Version history of Microsoft Internet Explorer](https://en.wikipedia.org/wiki/Internet\_Explorer\_version\_history)

## Hardware

The support is limited to installations matching the requirements described in the [Minimum ](../../../deploy/prepare-for-your-deployment/hardware-requirements.md)[Hardware](../../../deploy/prepare-for-your-deployment/hardware-requirements.md) [Requirements](../../../deploy/prepare-for-your-deployment/hardware-requirements.md) page.

## Monitoring

We require monitoring for all supported installations. All installations must continually collect [Metrics](https://github.com/RocketChat/Rocket.Chat.Metrics) regarding the installation's instances and database. Rocket.Chat supports the industry-standard Prometheus + Grafana monitoring stack. Grafana dashboards required for support are available in the [Metrics](https://github.com/RocketChat/Rocket.Chat.Metrics) repository.

Explanations about each metric/graph which help reading and interpreting the data can be found in this [dedicated document here](https://github.com/RocketChat/Rocket.Chat.Metrics/blob/master/metrics.md).

## Data access

We do not require access to the servers, instances, or databases to provide support, but we may require access to the logs if we consider them necessary to identify the problem.

Types of logs we may require:

1. Server logs
2. Web browser logs
3. Mobile logs
