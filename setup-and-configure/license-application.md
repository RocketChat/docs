# Enterprise License Application

Having a Rocket.Chat License unlocks additional functionality included with your purchased [plan](https://www.rocket.chat/pricing). &#x20;

All directions on this page assume you have a valid license in hand and now wish to apply it.  If you do not yet have one please get in contact with sales.

## I have a workspace

<details>

<summary>SaaS Workspace</summary>

You have a SaaS workspace that you've purchased an additional license for and need to apply it.

You can do this by:

* Log in to your workspace as the Administrator.
* Navigate to **Administration** > **Workspace** > **Registration** > **Manage** for workspaces as from Rocket.Chat `6.0` or  **Administration** > **Connectivity Services** for workspaces below `6.0`.
* Click on **Sync** which will now fetch the License for your workspace from Rocket.Chat Cloud.

Your License should now be applied to your workspace and be ready to use.  You can confirm this by going to **Administration > Info** and checking the License section

</details>

<details>

<summary>Self Managed Registered Workspace</summary>

You have a Self Managed Workspace that you've already registered and have had a license provisioned and need to apply it.

You can do this by:

* Log in to your workspace as the Administrator.
* Navigate to **Administration** > **Workspace** > **Registration** > **Manage** for workspaces as from Rocket.Chat `6.0` or  **Administration** > **Connectivity Services** for workspaces below `6.0`.
* Click on **Sync** which will now fetch the License for your workspace from Rocket.Chat Cloud

Your License should now be applied to your workspace and be ready to use.  You can confirm this by going to **Administration > Info** and checking the License section

</details>

<details>

<summary>Self Managed  Unregistered Workspace</summary>

You have an existing workspace but have not registered and have been given a registration code to register and apply.

You can do this by:

* Copying the Registration Code Provided to you.
* For Rocket.Chat `6.0` or newer
  * Navigate to **Administration** > **Workspace** > **Registration**
  * Click **Register** and then click **Use Token**&#x20;
  * Paste the token provided
* For Rocket.Chat below `6.0`&#x20;
  * Navigate to **Administration** > **Connectivity Services**
  * In the Token Field Provided paste the Code
  * Click Register
* Click on **Sync** to sync the workspace to Rocket.Chat cloud.

Your workspace should now be Registered and your License should now be applied to your workspace and be ready to use.  You can confirm this by going to **Administration > Info** and checking the License section

</details>

<details>

<summary>Self Managed Air-gapped Workspace</summary>

You have an existing workspace but it is air-gapped and have been given a license code to apply.

You can do this by:

* Navigate to Administration > Workspace > Apply Offline License
* Paste the License code you were provided
* Click Apply License

Your License should now be applied. You can confirm this by going to **Administration > Info** and checking the License section.

If your workspace will need to send push notifications you will need to allow access to:

* cloud.rocket.chat
* pushgateway.rocket.chat

Then take the Registration code provided:

* Navigate to **Administration** > **Workspace** > **Registration**
* Click **Register** and then click **Use Token**&#x20;
* Paste the token provided

Your workspace should now be Registered and your License should now be applied to your workspace and be ready to use.  You can confirm this by going to **Administration > Info** and checking the License section

</details>

## I do not have a workspace

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

* [Deploy a new workspace](../deploy/prepare-for-your-deployment/)
* Visit your workspace URL and complete the [setup](../use-rocket.chat/workspace-administration/settings/setup-wizard.md).
* Copying the Registration Code Provided to you.
* For Rocket.Chat `6.0` or newer
  * Navigate to **Administration** > **Workspace** > **Registration**
  * Click **Register** and then click **Use Token**&#x20;
  * Paste the token provided
* For Rocket.Chat below `6.0`&#x20;
  * Navigate to **Administration** > **Connectivity Services**
  * In the Token Field Provided paste the Code
  * Click Register
* Click on **Sync** to sync the workspace to Rocket.Chat cloud.

Your workspace should now be Registered and your License should now be applied to your workspace and be ready to use.  You can confirm this by going to **Administration > Info** and checking the License section

</details>

<details>

<summary>Self Managed Air-Gapped Workspace</summary>

You have an existing workspace but it is air-gapped and have been given a license code to apply.

You can do this by:

* [Deploy a new air-gapped workspace](rocket.chat-air-gapped-deployment/)&#x20;
* Navigate to Administration > Workspace > Apply Offline License
* Paste the License code you were provided
* Click Apply License

Your License should now be applied. You can confirm this by going to **Administration > Info** and checking the License section.

If your workspace will need to send push notifications you will need to allow access to:

* cloud.rocket.chat
* pushgateway.rocket.chat

Then take the Registration code provided:

* Navigate to **Administration** > **Workspace** > **Registration**
* Click **Register** and then click **Use Token**&#x20;
* Paste the token provided

Your workspace should now be Registered and your License should now be applied to your workspace and be ready to use.  You can confirm this by going to **Administration > Info** and checking the License section

</details>

## 360 Dialog Whatsapp Integration

The Integration between Rocket.Chat and WhatsApp Business (360 Dialog) is available for your workspace.

After completing the sync process you need to complete the WhatsApp Installation and configuration on your workspace.

See more info here:

{% content-ref url="../extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/whatsapp/" %}
[whatsapp](../extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/whatsapp/)
{% endcontent-ref %}
