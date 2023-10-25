---
description: You can view the available and installed Rocket.Chat Apps and manage them.
---

# Rocket.Chat Marketplace

{% hint style="success" %}
Rocket.Chat 6.0 is our most secure and scalable version yet. It includes 10 security patches, 9 brand-new features, and 25+ overall platform enhancements. Visit our [website](https://www.rocket.chat/six) to learn more about what’s new in this latest version. [Update now](https://docs.rocket.chat/deploy/updating-rocket.chat)!
{% endhint %}

Rocket.Chat apps are extensions that users can add to their workspaces to customize and enhance their functionality. Apps can be integrated with third-party services.

The [Rocket.Chat Marketplace](https://www.rocket.chat/marketplace) provides a repository of apps users can browse, install and manage directly from within their workspace. You can also develop your own apps using the [Rocket.Chat Apps engine](https://developer.rocket.chat/apps-engine).

**These Apps can do the following :**

* Display interactive and dynamic content on their own surface - like a modal or the room’s contextual bar.
* Create buttons in the UI for users to interact with native content.
* Create slash commands for users to trigger more generic interactions.
* Register endpoints to receive data from other applications and services.
* Work on both desktop and mobile clients.
* Send messages to users; create and manage public channels, groups, discussions, and threads.

{% hint style="info" %}
You must register your workspace (even if it is a Community Edition) on [Rocket.Chat Cloud](https://cloud.rocket.chat) before you can install apps from Rocket.Chat marketplace.
{% endhint %}

You can browse Rocket.Chat apps from the [marketplace](https://rocket.chat/marketplace) or access them directly from **Administration > Apps > Marketplace.**

On the **Explore** tab of the **Apps** screen,

* You can see all the apps available on Rocket.Chat and search for the one you need.
* You can also filter based on **Categories, Status, and Price.** Choose between multiple categories within the filter to help you find the best app for your workspace users.
* <img src="../../.gitbook/assets/image (917).png" alt="" data-size="line"> tag next to an app on the marketplace means you need to upgrade your workspace to a higher version to use the app.

On the **Installed** tab of the **Apps** screen,

* You can find the apps you have installed on your workspace.
* **Enable/Disable/Uninstall** any of your installed apps.
* View App details.
* View **logs** of the app.
* Provide additional user settings and configuration for the app. (All Rocket.Chat Apps might not require any setup configuration or user settings.)

## Types of Apps

### Public Apps

Public Apps are all the apps available on the Rocket.Chat [marketplace](https://www.rocket.chat/marketplace). If you are a third-party publisher/developer, you can also [submit an app to the marketplace](https://developer.rocket.chat/apps-engine/app-submission-to-the-marketplace).

To submit an app to the marketplace, the publisher must have a Rocket.Chat [Cloud Account](https://cloud.rocket.chat/login) and register their publisher account. You can find more about it in the [developer documentation. ](https://developer.rocket.chat/apps-engine/app-submission-to-the-marketplace)

{% hint style="info" %}
You can learn how to install and enable each of them in the [App Guide](rocket.chat-public-apps-guides/).
{% endhint %}

### Private Apps

You can develop private apps for your workspace or publish the app to the Marketplace for others to install and use on their own workspaces.

Private apps only work for the workspaces it has been manually installed on. Follow [this guide](https://developer.rocket.chat/apps-engine/getting-started/creating-an-app) on how to develop Rocket.Chat apps.

#### Installing a Private App

To install a Private app, get your app [packaged](https://developer.rocket.chat/apps-engine/app-submission-to-the-marketplace#package-the-app) and ready-to-use app in a `.zip` format, follow these instructions to install it on your workspace:

{% hint style="info" %}
For Rocket.Chat workspace versions less than 6.0, Go to **Administration** > **Settings** > **General** > **Apps** and **Enable development mode**, then proceed to **Administration** > **Apps** to **Upload App.**
{% endhint %}

* Navigate to **Administration  > Marketplace > Private apps >**&#x20;
* Click **Upload Private App.**
* Choose the installation method ( URL or a compiled `.zip)` and **Install.**
* **Agree** to the permissions needed to complete the installation.

The app is installed on the workspace and ready to use.

## App Limitation

### Community Edition

Community Edition (CE), workspaces can install numerous Public apps (apps from the marketplace) but enable only five. And they can allow three Private apps. Once it reaches the limit, you can upgrade to the[ Enterprise Edition](./#enterprise-edition) (EE) for access to enable all apps in the workspace.  Refer to the table below for a better understanding.

<table><thead><tr><th width="266.3333333333333">Community Edition 6.0</th><th width="199">Public apps</th><th>Private apps</th></tr></thead><tbody><tr><td>Install</td><td>Unlimited</td><td>Unlimited</td></tr><tr><td>Enable/Use</td><td>5</td><td>3</td></tr></tbody></table>

{% hint style="info" %}
For workspace version`5.4` or lower, you can use all the enabled public and private apps you already have. However, you can not purchase or enable more apps once the limit is reached.&#x20;
{% endhint %}

### Enterprise Edition

Enterprise Edition (EE), workspaces can install all Public and Private apps. But, if the workspace license expires and the workspace has exceeded the limit, the marketplace disables all downloaded apps, and the app count returns to zero.

## Enterprise Edition App Offerings

Some apps are part of the **Enterprise Edition** offerings. You don't have to purchase them if you are subscribed to the Enterprise Edition of Rocket.Chat. They include the following:

| Name                                                                                                            | EE/CE      | Air-Gapped |
| --------------------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| [Bamboo Integration](rocket.chat-public-apps-guides/atlassian/bamboo-integration.md)                            | Enterprise | Yes        |
| Bitbucket Cloud Integration                                                                                     | Enterprise | No         |
| [Bitbucket Server Integration](rocket.chat-public-apps-guides/atlassian/bitbucket-server-integration.md)        | Enterprise | Yes        |
| Confluence Cloud Integration                                                                                    | Enterprise | No         |
| [Confluence Server Integration](rocket.chat-public-apps-guides/atlassian/confluence-server-integration.md)      | Enterprise | Yes        |
| [Data Loss Prevention](rocket.chat-public-apps-guides/data-loss-prevention-dlp-app.md)                          | Enterprise | Yes        |
| [Facebook Messanger](rocket.chat-public-apps-guides/omnichannel-apps/facebook-app/)                             | Enterprise | No         |
| [Google Calendar](rocket.chat-public-apps-guides/google-calendar/)                                              | Enterprise | No         |
| [Google Drive](rocket.chat-public-apps-guides/google-drive/)                                                    | Enterprise | No         |
| [Google Meet](../../use-rocket.chat/rocket.chat-conference-call/conference-call-admin-guide/google-meet-app.md) | Enterprise | No         |
| [Instagram](rocket.chat-public-apps-guides/omnichannel-apps/instagram-direct/)                                  | Enterprise | No         |
| JIRA Cloud Integration                                                                                          | Enterprise | No         |
| [JIRA Server Integration](rocket.chat-public-apps-guides/atlassian/jira-server-v2.0.md)                         | Enterprise | Yes        |
| [Pexip](../../use-rocket.chat/rocket.chat-conference-call/conference-call-admin-guide/pexip-app.md)             | Enterprise | Yes        |
| [Telegram](rocket.chat-public-apps-guides/omnichannel-apps/telegram-app/)                                       | Enterprise | No         |
| [Trello](rocket.chat-public-apps-guides/trello.md)                                                              | Enterprise | No         |
| [Twitter](broken-reference)                                                                                     | Enterprise | No         |
| [WhatsApp](rocket.chat-public-apps-guides/omnichannel-apps/whatsapp/)                                           | Paid       | No         |
| [Whatsapp Cloud](rocket.chat-public-apps-guides/omnichannel-apps/whatsapp-cloud-app/)                           | Enterprise | No         |
| [Zoom](rocket.chat-public-apps-guides/zoom.md)                                                                  | Enterprise | No         |

{% hint style="success" %}
If you are subscribed to Rocket.Chat's **Enterprise Edition**, you can install and enable any number of paid and free apps available in the marketplace on your workspace.
{% endhint %}

If you are looking for the manual/user guide of a particular app, check [rocket.chat-public-apps-guides](rocket.chat-public-apps-guides/ "mention") or search for it within the documentation.
