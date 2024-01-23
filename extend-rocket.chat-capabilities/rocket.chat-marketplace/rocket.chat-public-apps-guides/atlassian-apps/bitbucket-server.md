---
description: Atlassian Bitbucket Server Integration
---

# Bitbucket Server

<figure><img src="../../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
Due to Atlassian's decision to deprecate its server products, the Bitbucket server app is no longer supported in the latest versions of Rocket.Chat and will be ![](<../../../../.gitbook/assets/Deprecated (1).png>)
{% endhint %}

## Install Bitbucket Server App

To install the Bitbucket Server App,

* Navigate to **Administration > Apps > Marketplace.**
* Search for the **Bitbucket Server Integration** app.
* Click **Install.**
* **Agree** to the permissions to confirm the installation.

## Configure Bitbucket Server App

Connect a [channel](../../../../use-rocket.chat/user-guides/rooms/channels/) or private room to one or more Bitbucket repositories to enable notifications.

To configure the Bitbucket Server App,&#x20;

* Run the slash command `/bitbucket-server connect REPO_URL`, where:
  * **REPO\_URL**: The URL of the repository you want to connect to, e.g., `http://example.com:7990/bitbucket/projects/PROJECT_1/repos/repo1/browse`.
* You'll receive an ephemeral message with further instructions on how to add a Webhook to your Bitbucket repository.
* Navigate to your Bitbucket repository and [create a new Webhook](https://confluence.atlassian.com/bitbucketserver/managing-webhooks-in-bitbucket-server-938025878.html). In the URL field, paste the URL that was generated for you in the ephemeral message, e.g., `https://example.com:3000/api/apps/private/d98e7da9-2398-4bd1-a596-d5cac28468bd/zC5r4DxBQSTHfrhLg/webhook?repoId=aHR0cDovL2xcY2FsaG9zdDo30TkwL2Jpd6J1Y2t1dHxQUk9KRUNUXzF8cmVwzE=`
* Then, Bitbucket sends notifications on some events to the connected channel or private room.

{% hint style="info" %}
Only some of the available events are interpreted by the Rocket.Chat App. They include **Repository Push, Pull Request Opened, Approved, Merged,** and **Declined**. Any webhook sent to Rocket.Chat from other events will not result in any notification being sent.
{% endhint %}

![Example of chosen events](../../../../.gitbook/assets/image3.png)

{% hint style="info" %}
To connect the same repository to another channel or private group, repeat the process on them using the same repository URL.
{% endhint %}
