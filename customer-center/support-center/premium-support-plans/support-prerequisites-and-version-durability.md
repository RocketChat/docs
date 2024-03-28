---
description: Requirements for official support from Rocket.Chat team
---

# Support Prerequisites and Version Durability

This document serves as a key resource for understanding the specific conditions and criteria that must be met to ensure full support eligibility. Additionally, it delves into the aspects of version durability, highlighting how different versions are maintained and supported over time. This information is crucial for users and administrators to effectively manage and sustain their Rocket.Chat installations, ensuring they remain up-to-date, secure, and fully functional.

### Support Window Duration

Each release of Rocket.Chat comes with a support period lasting six months from its release date. Once this period expires, hosted services such as the Push Gateway and Marketplace will cease to function for that particular version. During the support window, Rocket.Chat focuses on delivering security patches and responding to support queries concerning configuration and usage for the versions specified. Any bugs that are not security-related will be addressed solely in future releases.

{% hint style="info" %}
Effective December 15, 2023, Rocket.Chat will cease support for connections from cloud services and official mobile/desktop apps to workspaces running legacy versions outside our support window. Users on unsupported legacy servers are advised to upgrade to the latest Rocket.Chat version to ensure continued access to cloud, mobile, and desktop applications. **Each Rocket.Chat version is supported for six months post-release.**
{% endhint %}

### Requirements for Official Support

To obtain official support, installations must meet specific requirements, ensuring the support request pertains to the Rocket.Chat application and not external factors. The installation should run the Docker image provided by the Rocket.Chat team to ensure this. Rocket.Chat requires the installation to run on their Docker image to isolate external factors. This approach ensures efficient support by avoiding issues like:

* Missing or outdated dependencies.
* Use of non-official versions.

{% content-ref url="../../../deploy/deploy-rocket.chat/deploy-with-docker-and-docker-compose.md" %}
[deploy-with-docker-and-docker-compose.md](../../../deploy/deploy-rocket.chat/deploy-with-docker-and-docker-compose.md)
{% endcontent-ref %}

{% hint style="warning" %}
Before an app version reaches its end-of-life (EOL), it's crucial to upgrade to ensure you continue to receive official support and have the latest security features. This is particularly important for white-label app users, as they might not receive automatic updates. Ensure you follow the version support dates to maintain optimum app performance and security standards.
{% endhint %}

### Version End-of-Life

Check the table below to verify the final support date of each release version.

{% hint style="info" %}
Please note that **end-of-life** for any version signifies the last day of the month when support for that version will be terminated.
{% endhint %}

| Rocket.Chat Release                                                            | Released At | End of Life |
| ------------------------------------------------------------------------------ | ----------: | ----------: |
| 6.6 ([6.6.6](https://github.com/RocketChat/Rocket.Chat/releases/tag/6.6.6))    |    Feb 2024 |    Aug 2024 |
| 6.5 ([6.5.5](https://github.com/RocketChat/Rocket.Chat/releases/tag/6.5.5))    |    Dec 2023 |    Jun 2024 |
| 6.4 ([6.4.9](https://github.com/RocketChat/Rocket.Chat/releases/tag/6.4.9))    |    Sep 2023 |    Mar 2024 |
| 6.3 ([6.3.12](https://github.com/RocketChat/Rocket.Chat/releases/tag/6.3.12))  |    Aug 2023 |    Feb 2024 |
| 6.2 ([6.2.12](https://github.com/RocketChat/Rocket.Chat/releases/tag/6.2.12))  |    May 2023 |    Nov 2023 |
| 6.1 ([6.1.8](https://github.com/RocketChat/Rocket.Chat/releases/tag/6.1.8))    |    Mar 2023 |    Sep 2023 |
| 6.0 ([6.0.8](https://github.com/RocketChat/Rocket.Chat/releases/tag/6.0.8))    |    Mar 2023 |    Sep 2023 |
| 5.4 ([5.4.10](https://github.com/RocketChat/Rocket.Chat/releases/tag/5.4.10))  |    Dec 2022 |    Jun 2023 |
| 5.3 ([5.3.7](https://github.com/RocketChat/Rocket.Chat/releases/tag/5.3.7))    |    Nov 2022 |    May 2023 |
| 5.2 ([5.2.2](https://github.com/RocketChat/Rocket.Chat/releases/tag/5.2.2))    |    Oct 2022 |    Apr 2023 |
| 5.1 ([5.1.5](https://github.com/RocketChat/Rocket.Chat/releases/tag/5.1.5))    |    Sep 2022 |    Mar 2023 |
| 5.0 ([5.0.8](https://github.com/RocketChat/Rocket.Chat/releases/tag/5.0.8))    |    Jul 2022 |    Jan 2023 |
| 4.8 ([4.8.7](https://github.com/RocketChat/Rocket.Chat/releases/tag/4.8.7))    |    Jun 2022 |    Dec 2022 |
| 4.7 ([4.7.5](https://github.com/RocketChat/Rocket.Chat/releases/tag/4.7.5))    |    May 2022 |    Nov 2022 |
| 4.6 ([4.6.4](https://github.com/RocketChat/Rocket.Chat/releases/tag/4.6.4))    |    Apr 2022 |    Oct 2022 |
| 4.5 ([4.5.7](https://github.com/RocketChat/Rocket.Chat/releases/tag/4.5.7))    |    Mar 2022 |    Sep 2022 |
| 4.4 ([4.4.5](https://github.com/RocketChat/Rocket.Chat/releases/tag/4.4.5))    |    Jan 2022 |    Jul 2022 |
| 4.3 ([4.3.3](https://github.com/RocketChat/Rocket.Chat/releases/tag/4.3.3))    |    Dec 2021 |    Jun 2022 |
| 4.2 ([4.2.4](https://github.com/RocketChat/Rocket.Chat/releases/tag/4.2.4))    |    Nov 2021 |    May 2022 |
| 4.1 ([4.1.6](https://github.com/RocketChat/Rocket.Chat/releases/tag/4.1.6))    |    Oct 2021 |    Apr 2022 |
| 4.0 ([4.0.6](https://github.com/RocketChat/Rocket.Chat/releases/tag/4.0.6))    |    Oct 2021 |    Apr 2022 |
| 3.18 ([3.18.7](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.18.7)) |    Aug 2021 |    Feb 2022 |
| 3.17 ([3.17.3](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.17.3)) |    Jul 2021 |    Jan 2022 |
| 3.16 ([3.16.5](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.16.5)) |    Jun 2021 |    Dec 2021 |
| 3.15 ([3.15.4](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.15.4)) |    May 2021 |    Nov 2021 |
| 3.14 ([3.14.6](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.14.6)) |    Apr 2021 |    Oct 2021 |
| 3.13 ([3.13.5](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.13.5)) |    Apr 2021 |    Oct 2021 |
| 3.12 ([3.12.7](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.12.7)) |    Feb 2021 |    Aug 2021 |
| 3.11 ([3.11.6](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.11.6)) |    Feb 2021 |    Aug 2021 |
| 3.10 ([3.10.7](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.10.7)) |    Dec 2020 |    Jun 2021 |
| 3.9 ([3.9.7](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.9.7))    |    Nov 2020 |    May 2021 |
| 3.8 ([3.8.9](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.8.9))    |    Nov 2020 |    May 2021 |
| 3.7 ([3.7.4](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.7.4))    |    Sep 2020 |    Mar 2021 |
| 3.6 ([3.6.3](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.6.3))    |    Aug 2020 |    Feb 2021 |
| 3.5 ([3.5.4](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.5.4))    |    Jul 2020 |    Jan 2021 |
| 3.4 ([3.4.3](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.4.3))    |    Jun 2020 |    Dec 2020 |
| 3.3 ([3.3.3](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.3.3))    |    May 2020 |    Nov 2020 |
| 3.2 ([3.2.2](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.2.2))    |    Apr 2020 |    Oct 2020 |
| 3.1 ([3.1.3](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.1.3))    |    Apr 2020 |    Oct 2020 |
| 3.0 ([3.0.13](https://github.com/RocketChat/Rocket.Chat/releases/tag/3.0.13))  |    Feb 2020 |    Aug 2020 |
| 2.4 ([2.4.14](https://github.com/RocketChat/Rocket.Chat/releases/tag/2.4.14))  |    Dec 2019 |    Jun 2020 |
| 2.3 ([2.3.3](https://github.com/RocketChat/Rocket.Chat/releases/tag/2.3.3))    |    Nov 2019 |    May 2020 |
| 2.2 ([2.2.1](https://github.com/RocketChat/Rocket.Chat/releases/tag/2.2.1))    |    Oct 2019 |    Apr 2020 |
| 2.1 ([2.1.3](https://github.com/RocketChat/Rocket.Chat/releases/tag/2.1.3))    |    Sep 2019 |    Mar 2020 |
| 2.0 ([2.0.1](https://github.com/RocketChat/Rocket.Chat/releases/tag/2.0.1))    |    Sep 2019 |    Mar 2020 |
| 1.3 ([1.3.5](https://github.com/RocketChat/Rocket.Chat/releases/tag/1.3.5))    |    Aug 2019 |    Feb 2020 |
| 1.2 ([1.2.4](https://github.com/RocketChat/Rocket.Chat/releases/tag/1.2.4))    |    Jun 2019 |    Dec 2019 |
| 1.1 ([1.1.5](https://github.com/RocketChat/Rocket.Chat/releases/tag/1.1.5))    |    May 2019 |    Nov 2019 |
| 1.0 ([1.0.5](https://github.com/RocketChat/Rocket.Chat/releases/tag/1.0.5))    |    Apr 2019 |    Oct 2019 |

### What to Do Before Deprecation

Before the end of the deprecation period, we strongly recommend all the workspaces on Rocket.Chat plans to upgrade to a supported version for continued access to cloud services, mobile, and desktop apps. If you do not wish to update, Rocket.Chat provides workspace owners with a variety of options for managing their workspaces in the manner of your choosing. You must implement the following alternatives to our cloud services and published apps:

* Mobile and desktop apps: You must compile each app from our open-source code and publish your own builds to relevant app stores.
* Push notifications: You will need to deploy your own push notification server.
* Apps: You must develop and sideload your own applications instead of installing them through our Marketplace.

### MongoDB Version Support

Each Rocket.Chat release supports different MongoDB versions. It's essential to follow the official MongoDB documentation for upgrade guides, ensuring no versions are skipped during the upgrade process.

| Rocket.Chat Release |                                                                                                                                                                                                                                      Supported Versions | Deprecated Version |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | -----------------: |
| 1.x                 |                                                                                                                                                                                                                                      3.2, 3.4, 3.6, 4.0 |                3.2 |
| 2.x                 |                                                                                                                                                                                                                                           3.4, 3.6, 4.0 |                3.4 |
| 3.x                 |                                                                                                                                                                                                                                           3.4, 3.6, 4.0 |                3.4 |
| 4.x                 |                                                                                                                                                                                                                                 3.6, 4.0, 4.2, 4.4, 5.0 |           3.6, 4.0 |
| 5.x                 |                                                                                                                                                                                                                                           4.2, 4.4, 5.0 |                4.2 |
| 6.x                 | [4.4](https://www.mongodb.com/docs/manual/release-notes/4.4-upgrade-replica-set/), [5.0](https://www.mongodb.com/docs/manual/release-notes/5.0-upgrade-replica-set/), [6.0](https://www.mongodb.com/docs/manual/release-notes/6.0-upgrade-replica-set/) |                    |

> It's possible to bypass the MongoDB version check by using the environment variable `BYPASS_MONGO_VALIDATION=true`. Bear in mind that this work around should be used only when extrictly necessary and may prevent some functionalities to work properly or even prevent the server to start.

### Browser Support

Support is limited to recent browsers due to the rapid evolution in the browser ecosystem. Supported browsers include the latest three versions of Google Chrome and Mozilla Firefox, the latest two versions of Apple Safari and Microsoft Edge, and the latest version of Microsoft Internet Explorer.

### System Requirements

Support is limited to installations that meet the requirements described in the [system requirements](../../../deploy/deploy-rocket.chat/system-requirements.md) guide.

### **Monitoring**

Monitoring is required for all supported installations with Rocket.Chat supporting the [Prometheus and Grafana monitoring stack](https://github.com/RocketChat/Rocket.Chat.Metrics).

### Access to Logs

While Rocket.Chat doesn't require server or database access; we might need access to logs to identify issues. Potential logs include server logs, web browser logs, and mobile logs.

By adhering to the guidelines and timelines outlined in this document, you can make informed decisions that contribute to the security, efficiency, and longevity of your Rocket.Chat workspace. Should you have any further questions or require additional clarification, we encourage you to reach out to our support team for expert assistance.
