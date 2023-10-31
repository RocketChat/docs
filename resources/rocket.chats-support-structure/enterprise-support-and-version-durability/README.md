---
description: Requirements for official support from the Rocket.Chat team
---

# Enterprise Support and Version Durability

{% hint style="warning" %}
We are extending the deprecation date from October 1, 2023 to **November 20, 2023**. Please **update your workspace to at least v.6.3.0 before November 20** for continued access to cloud services (marketplace apps, push notification, and omnichannel gateway), mobile and desktop applications.
{% endhint %}

**All Rocket.Chat releases are supported for six months from the date of the release.** By support, we mean that Rocket.Chat will provide only security fixes and answer support tickets related to configuration and usage for the below-mentioned versions. Bugs not related to security issues will be fixed only in new versions.

#### **Requirements for Official Support**

To obtain official support, installations must meet specific requirements, ensuring the support request pertains to the Rocket.Chat application and not external factors. The installation should run the Docker image provided by the Rocket.Chat team to ensure this.

#### **Supported Environment**

Rocket.Chat requires the installation to run on their Docker image to isolate external factors. This approach ensures efficient support by avoiding issues like:

1. Compilation problems.
2. Installation issues.
3. Missing or outdated dependencies.
4. Use of non-official versions.

{% content-ref url="../../../deploy/deploy-rocket.chat/deploy-with-docker-and-docker-compose.md" %}
[deploy-with-docker-and-docker-compose.md](../../../deploy/deploy-rocket.chat/deploy-with-docker-and-docker-compose.md)
{% endcontent-ref %}

{% hint style="info" %}
In case of security-relevant bugs, we might backport patches to older releases on a case-by-case basis. Please understand, though, that those will be rare exceptions. If you want to play it safe, upgrade to the latest stable.
{% endhint %}

Check the table below to verify the final support date of each release version.

| Rocket.Chat Release | Latest Version                                                          | Released At | End of Life |
| ------------------- | ----------------------------------------------------------------------- | ----------: | ----------: |
| 6.4                 | [6.4.4](https://github.com/RocketChat/Rocket.Chat/releases/tag/6.4.4)   |    Sep 2023 |    Mar 2024 |
| 6.3                 | [6.3.10](https://github.com/RocketChat/Rocket.Chat/releases/tag/6.3.10) |    Jul 2023 |    Jan 2024 |
| 6.2                 | [6.2.12](https://github.com/RocketChat/Rocket.Chat/releases/tag/6.2.12) |    Apr 2023 |    Oct 2023 |
| 6.1                 | [6.1.8](https://github.com/RocketChat/Rocket.Chat/releases/tag/6.1.8)   |    Mar 2023 |    Sep 2023 |
| 6.0                 | [6.0.8](https://github.com/RocketChat/Rocket.Chat/releases/tag/6.0.8)   |    Feb 2023 |    Aug 2023 |
| 5.4                 | [5.4.10](https://github.com/RocketChat/Rocket.Chat/releases/tag/5.4.10) |    Nov 2022 |    May 2023 |
| 5.3                 | [5.3.7](https://github.com/RocketChat/Rocket.Chat/releases/tag/5.3.7)   |    Oct 2022 |    Apr 2023 |
| 5.2                 | [5.2.2](https://github.com/RocketChat/Rocket.Chat/releases/tag/5.2.2)   |    Sep 2022 |    Mar 2023 |
| 5.1                 | [5.1.5](https://github.com/RocketChat/Rocket.Chat/releases/tag/5.1.5)   |    Aug 2022 |    Feb 2023 |
| 5.0                 | [5.0.8](https://github.com/RocketChat/Rocket.Chat/releases/tag/5.0.8)   |    Jul 2022 |    Jan 2023 |
| 4.8                 | [4.8.7](https://github.com/RocketChat/Rocket.Chat/releases/tag/4.8.7)   |    May 2022 |    Nov 2022 |
| 4.7                 | [4.7.5](https://github.com/RocketChat/Rocket.Chat/releases/tag/4.7.5)   |    Apr 2022 |    Oct 2022 |
| 4.6                 | [4.6.4](https://github.com/RocketChat/Rocket.Chat/releases/tag/4.6.4)   |    Mar 2022 |    Sep 2022 |
| 4.5                 | [4.5.7](https://github.com/RocketChat/Rocket.Chat/releases/tag/4.5.7)   |    Feb 2022 |    Aug 2022 |
| 4.4                 | [4.4.5](https://github.com/RocketChat/Rocket.Chat/releases/tag/4.4.5)   |    Jan 2022 |    Jul 2022 |
| 4.3                 | [4.3.3](https://github.com/RocketChat/Rocket.Chat/releases/tag/4.3.3)   |    Dec 2021 |    Jun 2022 |
| 4.2                 | [4.2.4](https://github.com/RocketChat/Rocket.Chat/releases/tag/4.2.4)   |    Nov 2021 |    May 2022 |
| 4.1                 | [4.1.6](https://github.com/RocketChat/Rocket.Chat/releases/tag/4.1.6)   |    Oct 2021 |    Apr 2022 |
| 4.0                 | [4.0.6](https://github.com/RocketChat/Rocket.Chat/releases/tag/4.0.6)   |    Sep 2021 |    Mar 2022 |
| 3.18                | [3.18.7](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.18.7) |    Aug 2021 |    Feb 2022 |
| 3.17                | [3.17.3](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.17.3) |    Jul 2021 |    Jan 2022 |
| 3.16                | [3.16.5](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.16.5) |    Jun 2021 |    Dec 2021 |
| 3.15                | [3.15.4](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.15.4) |    May 2021 |    Nov 2021 |
| 3.14                | [3.14.6](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.14.6) |    Apr 2021 |    Oct 2021 |
| 3.13                | [3.13.5](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.13.5) |    Mar 2021 |    Sep 2021 |
| 3.12                | [3.12.7](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.12.7) |    Feb 2021 |    Aug 2021 |
| 3.11                | [3.11.6](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.11.6) |    Jan 2021 |    Jul 2021 |
| 3.10                | [3.10.7](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.10.7) |    Dec 2020 |    Jun 2021 |
| 3.9                 | [3.9.7](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.9.7)   |    Nov 2020 |    May 2021 |
| 3.8                 | [3.8.9](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.8.9)   |    Oct 2020 |    Apr 2021 |
| 3.7                 | [3.7.4](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.7.4)   |    Sep 2020 |    Mar 2021 |
| 3.6                 | [3.6.3](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.6.3)   |    Aug 2020 |    Feb 2021 |
| 3.5                 | [3.5.4](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.5.4)   |    Jul 2020 |    Jan 2021 |
| 3.4                 | [3.4.3](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.4.3)   |    Jun 2020 |    Dec 2020 |
| 3.3                 | [3.3.3](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.3.3)   |    May 2020 |    Nov 2020 |
| 3.2                 | [3.2.2](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.2.2)   |    Apr 2020 |    Oct 2020 |
| 3.1                 | [3.1.3](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.1.3)   |    Mar 2020 |    Sep 2020 |
| 3.0                 | [3.0.13](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.0.13) |    Jan 2020 |    Jul 2020 |
| 2.4                 | [2.4.14](https://github.com/RocketChat/Rocket.Chat/releases/tag/2.4.14) |    Dec 2019 |    Jun 2020 |
| 2.3                 | [2.3.3](https://github.com/RocketChat/Rocket.Chat/releases/tag/2.3.3)   |    Nov 2019 |    May 2020 |
| 2.2                 | [2.2.1](https://github.com/RocketChat/Rocket.Chat/releases/tag/2.2.1)   |    Oct 2019 |    Apr 2020 |
| 2.1                 | [2.1.3](https://github.com/RocketChat/Rocket.Chat/releases/tag/2.1.3)   |    Sep 2019 |    Mar 2020 |
| 2.0                 | [2.0.1](https://github.com/RocketChat/Rocket.Chat/releases/tag/2.0.1)   |    Aug 2019 |    Feb 2020 |
| 1.3                 | [1.3.5](https://github.com/RocketChat/Rocket.Chat/releases/tag/1.3.5)   |    Jul 2019 |    Jan 2020 |
| 1.2                 | [1.2.4](https://github.com/RocketChat/Rocket.Chat/releases/tag/1.2.4)   |    Jun 2019 |    Dec 2019 |
| 1.1                 | [1.1.5](https://github.com/RocketChat/Rocket.Chat/releases/tag/1.1.5)   |    May 2019 |    Nov 2019 |
| 1.0                 | [1.0.5](https://github.com/RocketChat/Rocket.Chat/releases/tag/1.0.5)   |    Apr 2019 |    Oct 2019 |

{% hint style="warning" %}
Always update to the latest stable version before reporting any bugs or before asking for help from the community.
{% endhint %}

### Rocket.Chat Cloud

Rocket.Chat manages upgrades for Cloud users regardless of the release version. Outdated server versions might be upgraded to the latest stable version for optimal performance.

### Rocket.Chat Services

Services such as the push gateway and marketplace are managed by Rocket.Chat. Six months after a new release, the last release will have its services support deprecated.&#x20;

#### **What should you do before the end of the deprecation period?**

Before the end of the deprecation period, we strongly recommend all the workspaces on Rocket.Chat plans to upgrade to a supported version for continued access to cloud services mobile and desktop apps. If you do not wish to update, Rocket.Chat provides workspace owners with a variety of options for managing their workspaces in the manner of your choosing. If you choose to remain on a version of Rocket.Chat that is outside of our support window, you must implement the following alternatives to our cloud services and published apps:

* **Mobile and desktop apps:** You must compile each app from our open-source code and publish your own builds to relevant app stores.
* **Push notifications:** You will need to deploy your own push notification server.
* **Apps:** You must develop and sideload your own applications instead of installing them through our Marketplace.

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

### MongoDB versions

Each Rocket.Chat release supports different MongoDB versions. It's essential to follow the official MongoDB documentation for upgrade guides, ensuring no versions are skipped during the upgrade process.

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

### Browser versions

Support is limited to recent browsers due to the rapid evolution in the browser ecosystem. Supported browsers include the latest three versions of Google Chrome and Mozilla Firefox, the latest two versions of Apple Safari and Microsoft Edge, and the latest version of Microsoft Internet Explorer.

{% hint style="info" %}
Here's how you can find out if your browser version is still supported.

* [Mozilla Firefox](https://en.wikipedia.org/wiki/Firefox\_version\_history)
* [Google Chrome](https://en.wikipedia.org/wiki/Google\_Chrome\_version\_history)
* [Apple Safari](https://en.wikipedia.org/wiki/Safari\_version\_history)
* [Microsoft Edge](https://en.wikipedia.org/wiki/Microsoft\_Edge#Release\_history)
* [Microsoft Internet Explorer](https://en.wikipedia.org/wiki/Internet\_Explorer\_version\_history)
{% endhint %}

### **Hardware & Monitoring**

* Support is limited to installations that meet the requirements described in the [system requirements](../../../deploy/deploy-rocket.chat/system-requirements.md) guide.
* Monitoring is required for all supported installations with Rocket.Chat supporting the [Prometheus and Grafana monitoring stack](https://github.com/RocketChat/Rocket.Chat.Metrics).

### Data access

While Rocket.Chat doesn't require server or database access, they might need access to logs to identify issues. Potential logs include server logs, web browser logs, and mobile logs.
