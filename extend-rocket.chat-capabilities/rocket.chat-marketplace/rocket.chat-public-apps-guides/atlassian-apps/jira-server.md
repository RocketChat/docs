---
description: Install and use the Jira Server in Rocket.Chat.
---

# Jira Server

<figure><img src="../../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
Due to Atlassian's decision to deprecate its server products, the Jira server app is no longer supported in the latest versions of Rocket.Chat and will be ![](<../../../../.gitbook/assets/Deprecated (1).png>)
{% endhint %}

## Install Jira App

To install the Jira App,

* Navigate to **Administration > Apps > Marketplace.**
* Search for the **Jira Server Integration** app.
* Click **Install**
* **Agree** to the permissions to confirm the installation.

## Configure Jira App

To configure the Jira App,

* Navigate to any [room](../../../../use-rocket.chat/user-guides/rooms/) and run the slash command `/jira-server install JIRA_URL USER PASSWORD` where :
  * **JIRA\_URL:** The base URL of your Jira server, e.g., `https://jira.example.com` or `https://example.com/jira`
  * **USER**:  The username of a user in your Jira server with administrative rights.
  * **PASSWORD:** The password of the user mentioned above.
* Now your Rocket.Chat workspace is connected to your Jira server instance.

{% hint style="info" %}
We strongly advise against using your Jira user account during installation. Create a fresh user with administrative privileges. After installation, you can revoke those privileges from the user.
{% endhint %}

## Use Jira App

After configuring the Jira App, connect your Jira projects to a room and receive notification messages for every activity carried out in that project.&#x20;

To connect your Jira project to a room,&#x20;

*   Run the slash command `/jira-server connect`.  A list of projects in your Jira server that you can connect to is displayed.&#x20;

    &#x20;
* To connect any project, run the slash command `/jira-server connect PROJECT_KEY`.

{% hint style="info" %}
You can connect many Jira projects to a room and a Jira project to multiple rooms.
{% endhint %}
