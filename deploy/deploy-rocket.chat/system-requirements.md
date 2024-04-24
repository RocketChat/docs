---
description: Requirements for Rocket.Chat Deployment
---

# System Requirements

This document provides an overview of the system requirements for various Rocket.Chat deployment scenarios. The specifications are meant to guide system administrators in selecting appropriate hardware and storage capacities for a stable and efficient Rocket.Chat environment.

{% hint style="info" %}
* It is essential to customize these requirements based on your specific needs and usage patterns.
* Regular reviews and adjustments to your system specifications are recommended to ensure optimal performance.
* For deployments with special requirements (such as Omnichannel, Chat Engine) or enterprise-grade setups, please consult with Rocket.Chat representatives for tailored advice.
{% endhint %}

### Hardware Specifications

The hardware requirements for Rocket.Chat vary depending on the expected load and deployment scenario. Below are the specifications for different use cases:

<figure><img src="../../.gitbook/assets/image (466).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (538).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (586).png" alt=""><figcaption></figcaption></figure>

### File Storage Requirements

Rocket.Chat recommends using object storage services such as Amazon S3, GCS, or MinIO for file uploads. GridFS is not recommended for production environments, and therefore, the storage estimation is not considered. Depending on your use case, factor in the average MB/month/user to provide a realistic estimation of your storage size per year.&#x20;

#### Example Calculation:

If each user sends an average of 5 MB in attachments per month, and there are 100 concurrent users, the minimum yearly storage needed is:

`100 users * 5 MB * 12 months = 6,000 MB or approximately 6 GB`

For deployments over 5000 concurrent users, custom consultations are recommended. For more information visit [recommendations-for-file-upload.md](../../use-rocket.chat/workspace-administration/settings/file-upload/recommendations-for-file-upload.md "mention")

### MongoDB Considerations

A MongoDB Replica Set of 3 members is advised for high-availability scenarios to ensure sufficient space and resilience.

**Suggested MongoDB Atlas instance for HA:** Consider the base storage offered in the tier and adjust according to the utilization on a regular basis.

### Rocket.Chat Specifications for Large Deployments

For use cases exceeding 5000 concurrent users, the specifications are:

* vCPU: 16
* Memory: 12 GiB
* Storage: 40 GB
* MongoDB Specifications per replica:
  * vCPU: 4
  * Memory: 16 GiB
  * Storage: 80 GB
* Number of MongoDB replicas needed: 3
* File Storage (S3, GCS): `5000 users * 2 MB * 12 months = 120,000 MB or 120 GB/year (minimum)`

{% hint style="warning" %}
These are minimum requirements, and we recommend considering a buffer for growth.
{% endhint %}
