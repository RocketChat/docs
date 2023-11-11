# License Application

{% hint style="success" %}
* November 20, 2023 will be the sunset date for allowing connections between our cloud services and workspaces running legacy versions of Rocket.Chat that are outside our support window. November 20, 2023 will also be the sunset date for allowing connections between our official mobile and desktop apps and workspaces running legacy versions of Rocket.Chat that are outside our support window. If you are on a legacy unsupported server, we strongly recommend you update to the latest version of Rocket.Chat to access your cloud portal, mobile and desktop apps.
* Rocket.Chat versions receive support for six months after release.
{% endhint %}

In the realm of open-source communication, Rocket.Chat, has always been at the forefront of providing secure and scalable solutions. To gain a comprehensive understanding of Rocket.Chat's extensive capabilities, we recommend exploring our [premium plans](https://www.rocket.chat/pricing). Acquiring a Rocket.Chat license for your workspace unlocks these additional functionalities.&#x20;

The following instructions provide a detailed guide to apply your workspace license to different kinds of workspaces.

{% hint style="warning" %}
Before you proceed, [contact sales](https://www.rocket.chat/sales-contact) to get a valid license for the plan you want to apply on your workspace.
{% endhint %}

## I have a SaaS Workspace&#x20;

You have a SaaS workspace that you've purchased an additional license for.

To apply the license,

* Log in to your workspace as the administrator.
* Navigate to **Administration > Subscription** and click the **Sync license update** button. This fetches the License for your workspace from Rocket.Chat Cloud.

{% hint style="warning" %}
* For workspaces below `6.5`, navigate to **Administration** > **Workspace** > **Registration** > **Manage.** For workspaces below `6.0`, navigate to   **Administration** > **Connectivity Services**.
* Then, click **Sync**.
{% endhint %}

Your License is now applied to your workspace and it is ready to use. Navigate to **Administration > Subscription** to confirm and view your current workspace plan.

## I have a Self Managed Registered Workspace&#x20;

You have a Self Managed Workspace that you've already registered and have had a license provisioned.

To apply the license,

* Log in to your workspace as the administrator.
* Navigate to **Administration > Subscription** and click the **Sync license update** button. This fetches the License for your workspace from Rocket.Chat Cloud.

{% hint style="warning" %}
* For workspaces below `6.5`, navigate to **Administration** > **Workspace** > **Registration** > **Manage.** For workspaces below `6.0`, navigate to   **Administration** > **Connectivity Services**.
* Then, click **Sync**.
{% endhint %}

Your License is applied to your workspace and is ready to use. Navigate to **Administration > Subscription** to confirm and view your current workspace plan.

## I have a Self Managed Unregistered Workspace

You have an existing workspace but have not registered and have been given a registration token to register and apply.

To apply the license,

* Copy the Registration token provided to you.
* For Rocket.Chat `6.0` or newer
  * Navigate to **Administration** > **Workspace** > **Registration**
  * Click **Register** and then click **Use Token**&#x20;
  * Paste the token provided
* For Rocket.Chat below `6.0`&#x20;
  * Navigate to **Administration** > **Connectivity Services**
  * In the Token field provided paste the token
  * Click **Register**
* Click on **Sync** to sync the workspace to Rocket.Chat cloud.

Your workspace is now Registered and your License applied to your workspace.  Navigate to **Administration > Subscription** to confirm and view your current workspace plan.

## I have a Self Managed Air-gapped Workspace&#x20;

You have an existing workspace that is air-gapped and has been given a license token to apply.

To apply the license token,

* Navigate to **Administration** > **Workspace** > **Workspace** > **Apply Offline License**
* Paste the License token you were provided
* Click **Apply License**

Your License should now be applied. Navigate to **Administration > Subscription** to confirm and view your current workspace plan.

For your workspace to send push notifications, it must be registered and allowed access to:

* cloud.rocket.chat
* pushgateway.rocket.chat

Then take the Registration token provided:

* Navigate to **Administration** > **Workspace** > **Registration.**
* Click **Register** and then click **Use Token.**
* Paste the token provided.

Your workspace should now be Registered and your License should now be applied to your workspace and be ready to use.  Navigate to **Administration > Subscription** to confirm and view your current workspace plan.

## I do not have a SaaS Workspace

If you purchased a license for a SaaS Workspace you will have a workspace provisioned for you. &#x20;

To start using it,

* Visit the workspace URL and set it up following the [setup-wizard.md](../use-rocket.chat/workspace-administration/settings/setup-wizard.md "mention")

Your workspace should now be ready to use.

## I do not have a Self Managed Workspace

If you purchased a license for Self Managed but do not yet have a workspace.

To apply the license,

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

Your workspace is now registered and your License applied to it.  Navigate to **Administration > Subscription** to confirm and view your current workspace plan.

## I do not have a Self Managed Air-Gapped Workspace

You don't have an existing air-gapped workspace and you have been given a license token to apply.

To apply the token,

* [Deploy a new air-gapped workspace](rocket.chat-air-gapped-deployment/)&#x20;
* Navigate to **Administration** > **Workspace** > **Workspace** > **Apply Offline License**
* Paste the License token you were provided.
* Click **Apply License.**

Your License is applied. You can confirm this by going to **Administration > Workspace** and checking the License section.

If your workspace needs to send push notifications you will need to allow access to:

* cloud.rocket.chat
* pushgateway.rocket.chat

Then take the Registration token provided:

* Navigate to **Administration** > **Workspace** > **Registration**
* Click **Register** and then click **Use Token**&#x20;
* Paste the token provided

Your workspace gets registered and your License is applied to it. Navigate to **Administration > Subscription** to confirm and view your current workspace plan.

## Remove a License

To remove your workspace license and revert back to the community plan, simply navigate to **Administration > Workspace > Settings > Premium** to remove the license and click **Save Changes**.
