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

To launch your workspace, you are required to complete the setup wizard. Fill in the information in the various steps to continue.

*   **Admin Information**: Fill in this information as it is needed to create the first user who automatically becomes an administrator of your Rocket.Chat workspace.&#x20;

    * **Full name**: Set the first and last name.
    * **Username**: Specify the admin username.
    * **Email**: Enter your email.
    * **Password**: Create a password for the admin user.

    Click **Next** to continue.
*   **Organization Information**: This involves information about your organization. The required information about your organization includes the following:

    * **Organization name**: Your organization name.
    * **Organization type**: The type of organization.
    * **Organization industry**: The industry your organization operates under.
    * **Organization size**: The size of the organization
    * **Country**: The country in which your organization is.

    Click **Continue** to proceed to the third step.
* **Register Your Server**: You are asked to [register your workspace](rocket.chat-setup-wizard.md#register-workspace) to the Rocket.Chat Cloud or link the workspace to an existing Rocket.Chat Cloud account.
  * Check the box if you want to receive security updates.
  * Agree to the [**Terms**](../../rocket.chat-legal/terms-of-service/) and [**Privacy Policy**](broken-reference) and **Register**.

{% hint style="info" %}
With a registered workspace, you have access to benefits like:

* Access to [**Marketplace apps**](../../extend-rocket.chat-capabilities/rocket.chat-marketplace/).
* [**Omnichannel**](../../use-rocket.chat/omnichannel/)
* Mobile [**push notifications**](../../use-rocket.chat/rocket.chat-mobile/push-notifications/)**.**
{% endhint %}

Open your email inbox and click **verify registration** to ensure the security codes match.

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

{% hint style="success" %}
Your workspace is ready for use, and you can apply for an [Enterprise Edition trial](../enterprise-edition-trial/) to test out all the features that come with an enterprise workspace.
{% endhint %}

With your Rocket.Chat workspace setup completed, you can [invite users](inviting-users.md) to collaborate with. Learn more about how to use Rocket.Chat following the [user-guides](../../use-rocket.chat/user-guides/ "mention").
