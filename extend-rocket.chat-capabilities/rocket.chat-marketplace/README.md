---
description: You can view the available and installed Rocket.Chat Apps and manage them.
---

# Rocket.Chat Marketplace

{% hint style="info" %}
Effective December 15, 2023, Rocket.Chat will cease support for connections from cloud services and official mobile/desktop apps to workspaces running legacy versions outside our support window. Users on unsupported legacy servers are advised to upgrade to the latest Rocket.Chat version to ensure continued access to cloud, mobile, and desktop applications. **Each Rocket.Chat version is supported for six months post-release.**
{% endhint %}

Rocket.Chat apps are extensions that users can add to their workspaces to customize and enhance their functionality. These apps can be integrated with third-party services.

The [Rocket.Chat Marketplace](https://www.rocket.chat/marketplace) provides a repository of apps users can browse, install, and manage directly from within their workspace. You can also develop your own apps using the [Rocket.Chat Apps engine](https://developer.rocket.chat/apps-engine).

**Some key capabilities of these apps include:**

* Display interactive and dynamic content on their own interface - like a modal or the room’s contextual bar.
* Create buttons in the UI for users to interact with native content.
* Create slash commands for users to trigger more generic interactions.
* Register endpoints to receive data from other applications and services.
* Work on both desktop and mobile clients.
* Send messages to users; create and manage public channels, groups, discussions, and threads.

{% hint style="info" %}
* You must register your workspace (even if it is on the [community plan](../../readme/our-plans.md#community)) on [Rocket.Chat Cloud](https://cloud.rocket.chat) before you can install apps from Rocket.Chat marketplace.
* Your workspace version must currently be within our [support window](../../resources/rocket.chats-support-structure/enterprise-support-and-version-durability/#support-window-duration).
{% endhint %}

You can browse Rocket.Chat apps from the [marketplace](https://rocket.chat/marketplace) or access them directly from **Administration > Apps > Marketplace.**

On the **Explore** section of the **Marketplace** screen,

* You can see all the apps available on Rocket.Chat and search for the one you need.
* You can also filter based on **Categories, Status, and Price.** Filter through multiple categories to find the best app for your workspace users.
* <img src="../../.gitbook/assets/image (917).png" alt="" data-size="line"> tag next to an app on the marketplace means you need to upgrade your workspace to a higher version to use the app.

On the **Installed** section of the **Marketplace** screen,

* You can find the apps you have installed on your workspace.
* **Enable/Disable/Uninstall** any of your installed apps.
* View **App details**.
* View **logs** of the app.
* Provide additional user settings and configuration for the app.&#x20;

{% hint style="warning" %}
Some apps might not require any setup configuration or user settings.
{% endhint %}

On the **Requested** section of the **Marketplace** screen,

* You can find all the requested apps from users in the workspace.

{% hint style="info" %}
Users with the `Access Marketplace` [permission](../../use-rocket.chat/workspace-administration/permissions/) can access the Rocket.Chat marketplace and request for any app they need in the workspace.
{% endhint %}

## Types of Apps

### **Public Apps**

Public Apps are all the apps available on the Rocket.Chat [marketplace](https://www.rocket.chat/marketplace). If you are a third-party publisher/developer, you can also [submit an app to the marketplace](https://developer.rocket.chat/apps-engine/app-submission-to-the-marketplace).

To submit an app to the marketplace, the publisher must have a Rocket.Chat [Cloud Account](https://cloud.rocket.chat/login) and register their publisher account. Please refer to the [app submission guide](https://developer.rocket.chat/apps-engine/app-submission-to-the-marketplace) for more details.

{% hint style="info" %}
You must purchase the Rocket.Chat paid apps to use them in your workspace, regardless of your subscription [plan](../../readme/our-plans.md).
{% endhint %}

### Private Apps

You can develop private apps for your workspace or publish the app to the Marketplace for others to install and use on their own workspaces. Private apps are only functional on the workspaces where they have been manually installed. To develop your Rocket.Chat app, see the [official Apps guide](https://developer.rocket.chat/apps-engine/creating-an-app).

{% hint style="info" %}
Workspaces on the [community plan](../../readme/our-plans.md) can enable a maximum of three private apps. To enable unlimited private apps, subscribe to any of Rocket.Chat's [premium plan](../../readme/our-plans.md).
{% endhint %}

#### Installing a Private App

To install a Private app, [package](https://developer.rocket.chat/apps-engine/app-submission-to-the-marketplace#package-the-app) your app in a `.zip` format and follow these guidelines to install it on your workspace:

{% hint style="info" %}
For Rocket.Chat workspaces on versions less than 6.0, Go to **Administration** > **Settings** > **General** > **Apps** and **Enable development mode**, then proceed to **Administration** > **Apps** to **Upload App.**
{% endhint %}

* Navigate to **Administration  > Marketplace > Private apps**
* Click **Upload Private App.**
* Choose the installation method ( URL or a compiled `.zip)` and **Install.**
* **Agree** to the permissions required to complete the installation.

The app is installed on the workspace and ready to use.

## Apps Plan Comparison

Here is an overview of Rocket.Chat apps across our various [plans](../../readme/our-plans.md):

**Community Plan**

Workspace on the [community plan](../../readme/our-plans.md) can install multiple public apps from the marketplace, provided the app is not exclusive to premium workspaces. However, they can only enable up to five at a time. They can also enable a maximum of three private apps.

<table><thead><tr><th width="266.3333333333333">Community Plan 6.0</th><th width="199">Public apps</th><th>Private apps</th></tr></thead><tbody><tr><td>Install</td><td>Unlimited</td><td>Unlimited</td></tr><tr><td>Enable/Use</td><td>5</td><td>3</td></tr></tbody></table>

{% hint style="info" %}
For workspaces on versions less than 6.0, you can use all the enabled public and private apps you already have. However, you can not purchase or enable more apps once the limit is reached.  Subscribe to any of Rocket.Chat [premium plans](../../readme/our-plans.md) to enable all public apps in the workspace.
{% endhint %}

**Premium Plan**

Workspaces subscribed to any of Rocket.Chat's [premium plans](../../readme/our-plans.md) can install all Public and Private apps. However, if the workspace [license](../../setup-and-configure/license-application.md) expires and the workspace has exceeded the community plan limit, the marketplace disables all downloaded apps, and the app count returns to zero.

Here is an overview of Rocket.Chat Apps across the various [plans](../../readme/our-plans.md):

<table><thead><tr><th width="180">Name</th><th width="122">Community</th><th width="88">Starter</th><th width="79">Pro</th><th width="113">Enterprise</th><th>Air-Gapped</th></tr></thead><tbody><tr><td><a href="rocket.chat-public-apps-guides/atlassian/bamboo-integration.md">Bamboo Integration</a></td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>Yes</td></tr><tr><td>Bitbucket Cloud Integration</td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr><tr><td><a href="rocket.chat-public-apps-guides/atlassian/bitbucket-server-integration.md">Bitbucket Server Integration</a></td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>Yes</td></tr><tr><td>Confluence Cloud Integration</td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr><tr><td><a href="rocket.chat-public-apps-guides/atlassian/confluence-server-integration.md">Confluence Server Integration</a></td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>Yes</td></tr><tr><td><a href="rocket.chat-public-apps-guides/data-loss-prevention-dlp-app.md">Data Loss Prevention</a></td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>Yes</td></tr><tr><td><a href="rocket.chat-public-apps-guides/omnichannel-apps/facebook-app/">Facebook Messenger</a></td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr><tr><td><a href="../../use-rocket.chat/workspace-administration/integrations/github.md">GitHub</a></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr><tr><td><a href="rocket.chat-public-apps-guides/google-calendar/">Google Calendar</a></td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr><tr><td><a href="rocket.chat-public-apps-guides/google-drive/">Google Drive</a></td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr><tr><td><a href="../../use-rocket.chat/rocket.chat-conference-call/conference-call-admin-guide/google-meet-app.md">Google Meet</a></td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr><tr><td><a href="rocket.chat-public-apps-guides/omnichannel-apps/instagram-direct/">Instagram Direct</a></td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr><tr><td>JIRA Cloud Integration</td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr><tr><td><a href="rocket.chat-public-apps-guides/atlassian/jira-server-v2.0.md">JIRA Server Integration</a></td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>Yes</td></tr><tr><td><a href="rocket.chat-public-apps-guides/microsoft-teams-bridge/">MS Teams Bridge</a></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr><tr><td><a href="../../use-rocket.chat/rocket.chat-conference-call/conference-call-admin-guide/pexip-app.md">Pexip</a></td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>Yes</td></tr><tr><td><a href="rocket.chat-public-apps-guides/omnichannel-apps/telegram-app/">Telegram</a></td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr><tr><td><a href="rocket.chat-public-apps-guides/trello.md">Trello</a></td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr><tr><td><a href="broken-reference">Twitter</a></td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr><tr><td><a href="rocket.chat-public-apps-guides/omnichannel-apps/whatsapp/">WhatsApp (Paid)</a></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr><tr><td><a href="rocket.chat-public-apps-guides/omnichannel-apps/whatsapp-cloud-app/">Whatsapp Cloud</a></td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr><tr><td><a href="rocket.chat-public-apps-guides/zapier-app/">Zapier</a></td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr><tr><td><a href="../../use-rocket.chat/user-guides/security-bundle/antivirus-clamav-app.md">ClamAV</a></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr><tr><td><a href="rocket.chat-public-apps-guides/omnichannel-apps/whatsapp-sandbox/">Whatsapp Sandbox</a></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr><tr><td><a href="rocket.chat-public-apps-guides/omnichannel-apps/rasa-app.md">Rasa</a></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr><tr><td><a href="rocket.chat-public-apps-guides/zoom.md">Zoom</a></td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr><tr><td><a href="rocket.chat-public-apps-guides/chatgpt-app/">ChatGPT</a></td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr><tr><td><a href="rocket.chat-public-apps-guides/mod-assist-app/">ModAssist</a></td><td><strong>x</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td><strong>✓</strong></td><td>No</td></tr></tbody></table>

For technical documentation or user guides specific to an app, please consult[rocket.chat-public-apps-guides](rocket.chat-public-apps-guides/ "mention") or search within the provided documentation resource.
