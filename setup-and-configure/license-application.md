# License Application

{% hint style="info" %}
As of December 15, 2023, Rocket.Chat has ceased support for connections from cloud services and official mobile/desktop apps to workspaces running legacy versions outside our support window. Users on unsupported legacy servers are advised to upgrade to the latest Rocket.Chat version to ensure continued access to cloud, mobile, and desktop applications. **Each Rocket.Chat version is supported for six months post-release.**
{% endhint %}

Rocket.Chat has always been at the forefront of providing secure and scalable solutions. To gain a comprehensive understanding of Rocket.Chat, we recommend exploring the extensive capabilities using our [premium plans](https://www.rocket.chat/pricing). A license is applied to your workspace when you subscribe to any of Rocket.Chat's[ premium plans](../readme/our-plans.md). Alternatively, you can [contact our sales](https://www.rocket.chat/sales-contact) team for a license and manually apply it to your workspace.

The guide provides detailed instructions on how to sync your workspace license on different kinds of workspaces.

{% hint style="warning" %}
Before you proceed, [contact sales](https://www.rocket.chat/sales-contact) to get a valid license for the [plan](../readme/our-plans.md) you want to apply to your workspace.
{% endhint %}

## I have a SaaS Workspace&#x20;

You have a SaaS workspace, and you've purchased a license for it.

To sync the license,

* Log in to your workspace as the administrator.
* Go to **Administration > Subscription** and click the **Sync license update** button. This fetches the license for your workspace from Rocket.Chat Cloud.

{% hint style="warning" %}
* For workspaces below `6.5`, go to **Administration** > **Workspace** > **Registration** > **Manage.** For workspaces below `6.0`, go to **Administration** > **Connectivity Services**.
* Then, click **Sync**.
* Keep in mind that older workspace versions may be out of the support window duration. To learn about this, see [Support Prerequisites and Version Durability](https://docs.rocket.chat/customer-center/support-center/premium-support-plans/support-prerequisites-and-version-durability).
{% endhint %}

Your license has now been applied to your workspace, and it is ready to use. Go to **Administration > Subscription** to confirm and view your current workspace plan.

## I have a Self Managed Registered Workspace&#x20;

You have a Self Managed Workspace that you've registered and gotten a license provisioned.

To sync the license,

* Log in to your workspace as the administrator.
* Go to **Administration > Subscription** and click the **Sync license update** button. This fetches the license for your workspace from Rocket.Chat Cloud.

{% hint style="warning" %}
* For workspaces below`6.5`, go to **Administration** > **Workspace** > **Registration** > **Manage.** For workspaces below`6.0`, go to   **Administration** > **Connectivity Services**.
* Then, click **Sync**.
* Keep in mind that older workspace versions may be out of the support window duration. To learn about this, see [Support Prerequisites and Version Durability](https://docs.rocket.chat/customer-center/support-center/premium-support-plans/support-prerequisites-and-version-durability).
{% endhint %}

Your license is applied to your workspace and is ready to use. Go to **Administration > Subscription** to confirm and view your current workspace plan.

## I have a Self Managed Unregistered Workspace

{% hint style="info" %}
<img src="../.gitbook/assets/Deprecated (1).png" alt="" data-size="line"> Unregistered workspaces are no longer supported. All workspaces are registered automatically from the 6.5 version. Refer to [Support Prerequisites and Version Durability](https://docs.rocket.chat/customer-center/support-center/premium-support-plans/support-prerequisites-and-version-durability).
{% endhint %}

You have an existing workspace but have not registered and have been given a registration token to register and apply.

To sync the license,

* Copy the Registration token provided to you.
* For workspaces on version `6.0` or newer
  * Navigate to **Administration** > **Workspace** > **Registration**
  * Click **Register** and then click **Use Token**&#x20;
  * Paste the token provided
* For workspaces below version `6.0`&#x20;
  * Navigate to **Administration** > **Connectivity Services**
  * In the Token field provided paste the token
  * Click **Register**
* Click on **Sync** to sync the workspace to Rocket.Chat cloud.

Your workspace is now Registered and your License applied to your workspace.  Navigate to **Administration > Workspace** to confirm and view your current workspace plan.

## I have a Self Managed Air-gapped Workspace&#x20;

You have an air-gapped workspace and you've gotten the license token for the workspace.

{% hint style="info" %}
To apply the license to air-gapped workspaces on version 6.5 and above, refer to [offline-license.md](rocket.chat-air-gapped-deployment/offline-license.md "mention").
{% endhint %}

To apply the license token to air-gapped workspaces on versions below 6.5,

* Navigate to **Administration** > **Workspace** > **Workspace** > **Apply Offline License**
* Paste the license token you were provided
* Click **Apply License**

Your license is now applied to your workspace. Navigate to **Administration > Workspace** to confirm and view your current workspace plan.

If your workspace is not registered and you have the registration token,&#x20;

* Navigate to **Administration** > **Workspace** > **Registration.**
* Click **Register** and then click **Use Token.**
* Paste the token provided.

Your workspace is now Registered and your License applied to your workspace.

## I do not have a SaaS Workspace

If you purchased a license for a SaaS Workspace, you will have a workspace provisioned for you. &#x20;

To start using it,

* Visit the workspace URL and set it up following the [setup-wizard.md](../use-rocket.chat/workspace-administration/settings/setup-wizard.md "mention")

Your workspace is now ready to use.

## I do not have a Self Managed Workspace

You purchased a license for a Self-Managed workspace but don't have a workspace.

To sync the license,

* [Deploy a new workspace](../deploy/deploy-rocket.chat/)
* Visit your workspace URL and complete the [rocket.chat-setup-wizard.md](accessing-your-workspace/rocket.chat-setup-wizard.md "mention").
* Navigate to **Administration > Subscription** and click the **Sync license update** button. This fetches the License for your workspace from Rocket.Chat Cloud.

{% hint style="warning" %}
* For workspaces below `6.5`, navigate to **Administration** > **Workspace** > **Registration** > **Manage.** For workspaces below `6.0`, navigate to   **Administration** > **Connectivity Services**.
* Then, click **Sync**.
* Keep in mind that older workspace versions may be out of the support window duration. To learn about this, see [Support Prerequisites and Version Durability](https://docs.rocket.chat/customer-center/support-center/premium-support-plans/support-prerequisites-and-version-durability).
{% endhint %}

Your license is now applied to your workspace and is ready to use. Navigate to **Administration > Subscription** to confirm and view your current workspace plan.

## I do not have a Self Managed Air-Gapped Workspace

You don't have an air-gapped workspace yet and you've purchased a license token to apply.

To apply the license,

* [Deploy a new air-gapped workspace](rocket.chat-air-gapped-deployment/)&#x20;

{% hint style="info" %}
To apply license to air-gapped workspaces on version 6.5 and above, refer to [offline-license.md](rocket.chat-air-gapped-deployment/offline-license.md "mention").
{% endhint %}

To apply the license token to air-gapped workspaces on versions below 6.5,

* Navigate to **Administration** > **Workspace** > **Workspace** > **Apply Offline License**
* Paste the License token you were provided
* Click **Apply License**

Your license is now applied to your workspace. Navigate to **Administration > Workspace** to confirm and view your current workspace plan.

If your workspace is not registered and you have the registration token,&#x20;

* Navigate to **Administration** > **Workspace** > **Registration.**
* Click **Register** and then click **Use Token.**
* Paste the token provided.

Your workspace is now registered, and your license applied to your workspace.

## Cancel Workspace Subscription

To cancel your workspace subscription and revert back to [Community](../readme/our-plans.md#community), go to **Administration > Subscription** and click the **Cancel Subscription** button.

{% hint style="info" %}
You can only cancel your subscription when your workspace is subscribed to the [Starter plan](../readme/our-plans.md#starter-plan) or any of our [Trials](trials/).
{% endhint %}
