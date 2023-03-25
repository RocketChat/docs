---
description: Administrator initial workspace configuration for Rocket.Chat server.
---

# Rocket.Chat Setup Wizard

Rocket.Chat provides multiple [Rocket.Chat Client Apps](../../deploy/installing-client-apps/) that can be used for the user interface.&#x20;

{% hint style="info" %}
The URL of your Rocket.Chat server may be a local host server URL or domain server URL, depending on how you deploy your workspace.
{% endhint %}

## Adding Rocket.Chat server to Desktop Client

* After installing the [Rocket.Chat Desktop Client](../../deploy/installing-client-apps/#desktop-apps), launch the application.
* Enter your server URL.
* Click **Connect.**

To add more servers to the Desktop client app, click the plus sign icon at the left of the navigation menu.

## Accessing Rocket.Chat Using Browser

To access Rocket.Chat in a browser,

* In the address bar, type in the URL for your Rocket.Chat server.

## Setup Wizard

To launch your workspace, it is required to do a simple 4-step setup.

* **Admin Information**: Fill in this information as it is needed to create the first user who automatically becomes an administrator of your Rocket.Chat workspace. The necessary information includes your name,  username, organizational email, and password. Next, click on **Continue** to proceed to the organization's information setup.
*   **Organization Information**: This involves information about your organization. The required information about your organization includes the following:

    * The organization's name.
    * Its type.
    * The size of the organization.
    * The country in which your organization operates.
    * The industry your organization is linked to.
    * Your organization's website(if there is any).

    Next, click **Continue** to proceed to the third step, which concerns server information.
* **Server Info**: The server Info form requires the site name and your preferred language. You can also select whether the server is private or public and, finally, choose to opt into two-factor authentication via email. Next, click **Continue**.
* **Register Your Server**: You are asked to [register your workspace](rocket.chat-setup-wizard.md#register-workspace) to the Rocket.Chat Cloud or proceed with a [standalone server](rocket.chat-setup-wizard.md#continue-as-standalone). Registering your workspace is highly recommended, as you can enjoy numerous benefits, including the following:
  * Access to [**marketplace apps**](../../extend-rocket.chat-capabilities/rocket.chat-marketplace/).
  * ****[**Omnichannel**](../../use-rocket.chat/omnichannel/)****
  * Mobile [**push notifications**](../../use-rocket.chat/rocket.chat-mobile/push-notifications/)**.**

<details>

<summary>Information collected for Registered workspaces</summary>

When registering your workspace, Rocket.Chat collects the following information about your workspace.

* The **workspace Id** to help identify the workspace.
* The organization's **address.**
* **Contact name** for the workspace.
* **Contact email** for the workspace.
* The number of **seats** for the workspace.
* The **account name.**
* The **organization type**.&#x20;
* What **industry** the organization belongs to.
* The **size of the organization**.&#x20;
* The **country** of the organization.
* **Language** set for the workspace.&#x20;
* **Website** of the organization.
* **Site name** of the workspace.
* The **workspace type**.
* The **deployment method** used for the workspace.
* The **deployment platform.**
* The **version of Rocket.Chat** deployed.

</details>

Your workspace is ready for use, and you can apply for an [Enterprise Edition trial](../enterprise-edition-trial.md).

### Register Workspace

* Click on **Register to access** to continue. Check the box if you want to receive security updates.
* Agree to the [**Terms**](../../rocket.chat-legal/terms-of-service.md) and [**Privacy Policy**](../../rocket.chat-privacy-and-security/privacy-policies/) of Rocket.Chat. Click **continue**.
* Open up your email inbox and click **verify registration.** Confirm that the security codes match.
* Confirm the registration and go back to your server.

### Continue as Standalone

* Click **Continue as standalone.**
* Click **Confirm.**
