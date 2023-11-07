# Getting Started with Voice Channel

To use any Rocket.Chat product, you must have a [Rocket.Chat workspace deployed](../../deploy/deploy-rocket.chat/). The workspace can either be on the community or enterprise [plan](https://www.rocket.chat/pricing).

**Requirements**

* [Asterisk](https://www.asterisk.org/) 16.19.0 or higher (We used [FreePBX](https://www.freepbx.org/) 16.0.10.40 with Asterisk 18.6.0)
* Valid SSL certificate (valid domain)
* You need Rocket.Chat version 5.0.0 or higher.&#x20;

**It's important to note the following**:

* A **private branch exchange (PBX)**  is a telephone system within an enterprise that switches calls between users on local lines while enabling all users to share a certain number of external phone lines.&#x20;
* **Asterisk** is an open-source software implementation of a **PBX**.&#x20;
* **FreePBX** is a web-based open-source GUI (graphical user interface) that controls and manages Asterisk (PBX).

**To set up a voice channel, you have two paths:**

1. [**Configure without previously having a PBX server**](voice-channel-admin-guide/configure-without-previously-having-a-pbx-server/)
2. [**Configure with an active PBX server**](voice-channel-admin-guide/configure-with-an-active-pbx-server/)

**Further Information:**

* [**Technical Specification**](voice-channel-technical-specification.md)
* [**Admin Guides**](voice-channel-admin-guide/)
* [**Agent Guides**](voice-channel-agent-guides/)
