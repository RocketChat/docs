# Enterprise License Application

&#x20;In the realm of open-source communication, Rocket.Chat, has always been at the forefront of providing secure and scalable solutions. To fully appreciate Rocket.Chat's breadth and depth, you are encouraged to try out the enterprise version. Having a Rocket.Chat License unlocks additional functionality. [Check out our plans](https://www.rocket.chat/pricing). &#x20;

All directions on this page assume you have a valid license and now wish to apply it. If you do not yet have one, please get in [contact with sales](https://www.rocket.chat/sales-contact).

{% hint style="success" %}
**Rocket.Chat 6.0** is our most secure and scalable version yet. It includes 10 security patches, 9 brand-new features, and 25+ overall platform enhancements. Visit our [website](https://www.rocket.chat/six) to learn more about what’s new in this latest version. [Update now](https://docs.rocket.chat/deploy/updating-rocket.chat)!
{% endhint %}

## I have a…

<details>

<summary>SaaS Workspace</summary>

You have a SaaS workspace that you've purchased an additional license for and need to apply it.

You can do this by:

* Log in to your workspace as the Administrator.
* Navigate to **Administration** > **Workspace** > **Registration** > **Manage** for workspaces as from Rocket.Chat `6.0` or  **Administration** > **Connectivity Services** for workspaces below `6.0`.
* Click on **Sync**. This fetches the License for your workspace from Rocket.Chat Cloud.

Your License is now applied to your workspace and it is ready to use. You can confirm this by going to **Administration > Workspace > Info** and checking the License section.

</details>

<details>

<summary>Self Managed Registered Workspace</summary>

You have a Self Managed Workspace that you've already registered and have had a license provisioned and need to apply it.

You can do this by:

* Log in to your workspace as the Administrator.
* Navigate to **Administration** > **Workspace** > **Registration** > **Manage** for workspaces as from Rocket.Chat `6.0` or  **Administration** > **Connectivity Services** for workspaces below `6.0`.
* Click on **Sync.** This fetches fetch the License for your workspace from Rocket.Chat Cloud

Your License is applied to your workspace and is ready to use.  You can confirm this by going to **Administration > Info** and checking the License section

</details>

<details>

<summary>Self Managed  Unregistered Workspace</summary>

You have an existing workspace but have not registered and have been given a registration token to register and apply.

You can do this by:

* Copying the Registration token provided to you.
* For Rocket.Chat `6.0` or newer
  * Navigate to **Administration** > **Workspace** > **Registration**
  * Click **Register** and then click **Use Token**&#x20;
  * Paste the token provided
* For Rocket.Chat below `6.0`&#x20;
  * Navigate to **Administration** > **Connectivity Services**
  * In the Token field provided paste the token
  * Click **Register**
* Click on **Sync** to sync the workspace to Rocket.Chat cloud.

Your workspace is now Registered and your License applied to your workspace.  You can confirm this by going to **Administration > Info** and checking the License section

</details>

<details>

<summary>Self Managed Air-gapped Workspace</summary>

You have an existing workspace that is air-gapped and has been given a license token to apply.

You can do this by:

* Navigate to **Administration** > **Workspace** > **Info** > **Apply Offline License**
* Paste the License token you were provided
* Click **Apply License**

Your License should now be applied. You can confirm this by going to **Administration > Info** and checking the License section.

If your workspace will need to send push notifications you will need to allow access to:

* cloud.rocket.chat
* pushgateway.rocket.chat

Then take the Registration token provided:

* Navigate to **Administration** > **Workspace** > **Registration.**
* Click **Register** and then click **Use Token.**
* Paste the token provided.

Your workspace should now be Registered and your License should now be applied to your workspace and be ready to use.  You can confirm this by going to **Administration > Info** and checking the License section

</details>

## I do not have a…

<details>

<summary>SaaS Workspace</summary>

If you purchased a license for a SaaS Workspace you will have a workspace provisioned for you. &#x20;

To start using it:

* Visit the workspace URL and set it up following the [setup-wizard.md](../use-rocket.chat/workspace-administration/settings/setup-wizard.md "mention")

Your workspace should now be ready to use.

</details>

<details>

<summary>Self Managed Workspace</summary>

If you purchased a license for Self Managed but do not yet have a workspace.

* [Deploy a new workspace](../deploy/deploy-rocket.chat/)
* Visit your workspace URL and complete the [setup](../use-rocket.chat/workspace-administration/settings/setup-wizard.md).
* Copying the Registration token provided to you.
* For Rocket.Chat `6.0` or newer
  * Navigate to **Administration** > **Workspace** > **Registration**
  * Click **Register** and then click **Use Token**&#x20;
  * Paste the token provided
* For Rocket.Chat below `6.0`&#x20;
  * Navigate to **Administration** > **Connectivity Services**
  * In the Token Field Provided paste the token
  * Click Register
* Click on **Sync** to sync the workspace to Rocket.Chat cloud.

Your workspace is now registered and your License applied to it. You can confirm this by going to **Administration > Info** and checking the License section

</details>

<details>

<summary>Self Managed Air-Gapped Workspace</summary>

You have an existing workspace but it is air-gapped and you have been given a license token to apply.

You can do this by:

* [Deploy a new air-gapped workspace](rocket.chat-air-gapped-deployment/)&#x20;
* Navigate to **Administration** > **Workspace** > **Info** > **Apply Offline License**
* Paste the License token you were provided.
* Click **Apply License.**

Your Lice is applied. You can confirm this by going to **Administration > Info** and checking the License section.

If your workspace needs to send push notifications you will need to allow access to:

* cloud.rocket.chat
* pushgateway.rocket.chat

Then take the Registration token provided:

* Navigate to **Administration** > **Workspace** > **Registration**
* Click **Register** and then click **Use Token**&#x20;
* Paste the token provided

Your workspace gets registered and your License is applied to it.  You can confirm this by going to **Administration > Info** and checking the License section

</details>

## 360 Dialog WhatsApp Integration

The Integration between Rocket.Chat and WhatsApp Business (360 Dialog) is available for your workspace.

After completing the sync process, you need to complete the WhatsApp Installation and configuration on your workspace.

See more info here:

{% content-ref url="../extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/whatsapp/" %}
[whatsapp](../extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/whatsapp/)
{% endcontent-ref %}
