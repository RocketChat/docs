# Workspaces

As a workspace administrator, you can view and manage all the workspaces linked to your cloud account.

**To view all workspaces connected to your Rocket.Chat cloud account,**&#x20;

* Log into your cloud account.
* Click **Workspaces** from the sidebar menu.

**To view workspace Information,**

* Log into your cloud account.
* Click **Workspaces** from the sidebar menu.
* Click on the workspace from the list of workspaces displayed.
* You can view the workspace [plan](../../../readme/our-plans.md), push notification limit, total usage and push notification usage of the workspace.

{% hint style="info" %}
* To register a self-managed workspace, click **Register self-managed** to enable your self-hosted workspace.
* If you want multiple [cloud-hosted workspaces](https://docs.rocket.chat/customer-center/cloud-services-center/rocket.chat-cloud-hosting-service-level-agreement-sla) under the same cloud account, please contact us at [support@rocket.chat](mailto:support@rocket.chat).
{% endhint %}

**Manage your workspace subscription**

When you [deploy a new workspace](../../../deploy/deploy-rocket.chat/), it is automatically subscribed to the [Starter plan](../../../readme/our-plans.md#starter-plan). As you exceed the scale limits of the [Starter plan](../../../readme/our-plans.md#starter-plan), your workspace is granted a 30-day [pro-trial.md](../../../setup-and-configure/trials/pro-trial.md "mention") to explore the Rocket.Chat features accessible on the [Pro plan](../../../readme/our-plans.md#pro-plan). If your workspace is already subscribed to the [Pro plan](../../../readme/our-plans.md#pro-plan) and you exceed the scale limits, a 30-day [enterprise-trial.md](../../../setup-and-configure/trials/enterprise-trial.md "mention") is granted to your workspace to experience the Rocket.Chat features available on the [Enterprise plan](../../../readme/our-plans.md#enterprise-plan). [Cloud-hosted workspaces](https://docs.rocket.chat/customer-center/cloud-services-center/rocket.chat-cloud-hosting-service-level-agreement-sla) start off with a [pro-trial.md](../../../setup-and-configure/trials/pro-trial.md "mention"), not the [Starter plan](../../../readme/our-plans.md#starter-plan).

You can modify your workspace [plan ](../../../readme/our-plans.md)on Rocket.Chat Cloud, with the option to upgrade, downgrade, or switch to monthly or yearly plans.&#x20;

{% hint style="info" %}
To subscribe to our [Enterprise plan](../../../readme/our-plans.md#enterprise-plan), kindly [contact our sales team](https://www.rocket.chat/sales-contact).
{% endhint %}

To upgrade or downgrade your workspace plan,&#x20;

* Log in to your [Rocket.Chat Cloud](https://cloud.rocket.chat/home) account.
* Navigate to **Workspaces** and select the workspace .
* Click on **Subscribe.** A **Manage Subscription** panel is displayed, providing options of the **add-on** or **plan** subscriptions to select from.
  * **Add plan or add-on**: Select the plan or add-on you want to subscribe for.&#x20;
  * **Renew**: Toggle your billing plan cycle to either Monthly or Yearly.
  * Update the units of **Seats** or **MAC packs** you want to purchase for the selected plan.&#x20;
* Click **Save** to continue. Validate the checkout, add your card details, and click **Subscribe** to complete the purchase.

{% hint style="success" %}
Upon successful checkout, your subscription is activated and you receive an invoice via email. If you decrease the number of already purchased seats, the cost is refunded as a credit to your Rocket.Chat Cloud account.
{% endhint %}

Once your subscription is successful, navigate to **Administration** > **Subscription** on your workspace and click **Sync license updates** to sync these changes. To cancel your subscription, kindly consult [#cancel-workspace-subscription](../../../setup-and-configure/license-application.md#cancel-workspace-subscription "mention").

**Restart Workspace**

If you encounter any problems with your workspace, you can try restarting it to resolve the issue. This disconnects you from the workspace, which is then shut down and restarted. A server restart is recommended for minor performance issues, such as slow messages. Once you restart your workspace, it may take anywhere from 1 to 5 minutes (depending on the number of users) for it to become available again.

To restart your workspace,

* From the sidebar menu, click **Workspaces.**
* Click the **kebab menu icon** beside the workspace and select **Restart**.

**Cancel Workspace**

To terminate your subscription and hibernate your workspace, you have the option to cancel it.

To cancel a workspace,

* From the sidebar menu, click **Workspaces.**
* Click the **kebab menu** **icon** beside the workspace and select **Cancel**.

{% hint style="info" %}
* Only workspace administrators can terminate subscription from Rocket.Chat cloud.
* When canceling a workspace, the status shows as "**canceling**" until the end of your billing cycle. Once the billing cycle is over, the status changes to "**canceled**".
* Should you reconsider your decision within 30 days of canceling your workspace, please contact us at  [support@rocket.chat](mailto:support@rocket.chat) to restore your workspace. However, if more than 30 days have elapsed, you need to create a new workspace.
{% endhint %}

**Update Workspace**

You can update your workspace to the latest Rocket.Chat version from your cloud account.

To update your workspace,

* From the sidebar menu, click **Workspaces.**
* Click the **kebab menu** **icon** beside the workspace and select **Update**.

{% hint style="warning" %}
Restarting, updating, and canceling workspaces from Rocket.Chat cloud is only available for [cloud-hosted workspaces](https://docs.rocket.chat/customer-center/cloud-services-center/rocket.chat-cloud-hosting-service-level-agreement-sla).
{% endhint %}

With your Rocket.Chat cloud account, you can manage both[ self-hosted](../../../deploy/deploy-rocket.chat/) and [cloud-hosted](https://docs.rocket.chat/customer-center/cloud-services-center/rocket.chat-cloud-hosting-service-level-agreement-sla) workspaces. This includes subscribing to plans and add-ons for the workspace. In the next section, we'll highlight handling invoices for your subscriptions.
