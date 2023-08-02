# Rocket.Chat Setup Wizard

In the digital age, effective communication is the key to success for any team. Rocket.Chat offers a platform that fosters collaboration and productivity. This guide will walk you through the process of setting up and configuring your Rocket.Chat workspace using the setup wizard. By the end of this guide, you'll be well-equipped to create, access, and manage your workspace effectively.

You can access Rocket.Chat in two ways:

1. **Adding Rocket.Chat server to Desktop Client**: Once you've successfully installed the [Rocket.Chat Desktop Client](../../deploy/installing-client-apps/#desktop-apps), initiate the application. Input the URL of your server. Proceed by clicking on **Connect**. If you wish to incorporate additional servers into the Desktop client application, click on the plus symbol on the navigation menu's left side.
2. **Accessing Rocket.Chat via a Web Browser**: To access Rocket.Chat through a web browser, navigate to the address bar, and input the URL associated with your Rocket.Chat server.

{% hint style="info" %}
* Rocket.Chat provides multiple [Rocket.Chat Client Apps](../../deploy/installing-client-apps/) that can be used for the user interface.&#x20;
* The URL of your Rocket.Chat server may be a local host or domain server URL, depending on how you deploy your workspace.
{% endhint %}

### Setup Wizard

Rocket.Chat's setup wizard is designed to streamline the process of creating and configuring your workspace. To access your workspace, you'll need to follow these steps:

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
  * Open your email inbox and click **verify registration** to ensure the security codes match.

Once you've completed these steps, your workspace will be set up and ready to use. You can access it by logging in with your admin credentials. You can change the information provided here in [setup-wizard.md](../../use-rocket.chat/workspace-administration/settings/setup-wizard.md "mention").

{% hint style="info" %}
With a registered workspace, you have access to benefits like:

* Access to [**Marketplace apps**](../../extend-rocket.chat-capabilities/rocket.chat-marketplace/).
* [**Omnichannel**](../../use-rocket.chat/omnichannel/)
* Mobile [**push notifications**](../../use-rocket.chat/rocket.chat-mobile/push-notifications/)**.**
{% endhint %}

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
