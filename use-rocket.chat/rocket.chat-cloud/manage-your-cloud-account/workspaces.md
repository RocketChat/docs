# Workspaces

As a workspace administrator, you can view and manage all the workspaces linked to your cloud account.

## View workspace information

1. Log into your cloud account.
2. Click **Workspaces** from the sidebar menu.
3. Click on the workspace from the list of workspaces displayed.
4. You can view the workspace [plan](../../../readme/our-plans.md), push notification limit, total usage, and push notification usage of the workspace.

{% hint style="info" %}
If you want multiple [cloud-hosted workspaces](https://docs.rocket.chat/customer-center/cloud-services-center/rocket.chat-cloud-hosting-service-level-agreement-sla) under the same cloud account, please contact us at [support@rocket.chat](mailto:support@rocket.chat).
{% endhint %}

## Manage your workspace subscription

Note the following points when you [deploy a new workspace](../../../deploy/deploy-rocket.chat/):

* The new workspace is automatically subscribed to the [Starter plan](../../../readme/our-plans.md#starter-plan).&#x20;
* As you exceed the scale limits of the Starter plan, your workspace is granted a 30-day Pro plan trial to explore the Rocket.Chat features that are accessible on the [Pro plan](../../../readme/our-plans.md#pro-plan).&#x20;
* If your workspace is already subscribed to the Pro plan and you exceed the scale limits, a 30-day Enterprise trial is granted to your workspace to experience the Rocket.Chat features that are available on the [Enterprise plan](../../../readme/our-plans.md#enterprise-plan).&#x20;
* [Cloud-hosted workspaces](https://docs.rocket.chat/customer-center/cloud-services-center/rocket.chat-cloud-hosting-service-level-agreement-sla) start off with a Pro trial, not the [Starter plan](../../../readme/our-plans.md#starter-plan).

You can modify your workspace [plan ](../../../readme/our-plans.md)on Rocket.Chat Cloud, with the option to upgrade, downgrade, or switch to monthly or yearly plans.&#x20;

{% hint style="info" %}
To subscribe to our [Enterprise plan](../../../readme/our-plans.md#enterprise-plan), [contact our sales team](https://www.rocket.chat/sales-contact).
{% endhint %}

### **Register your self-managed workspace**

On the **Workspaces** tab, click **Register self-managed**. You have two options to register your workspace to Rocket.Chat cloud:

#### Continue Online with Cloud Services

Online cloud services provide you with benefits such as mobile push notifications, access to marketplace apps, and communication with external providers.&#x20;

To register, paste the **Registration Token** in your workspace from **Administration** > **Connectivity Services** > **Token**.

#### Continue Offline

If you have an [air-gapped deployment](https://docs.rocket.chat/setup-and-configure/rocket.chat-air-gapped-deployment), continuing offline will result in the loss of all of the Cloud Services benefits listed previously. To change to online later, you will need to contact the Rocket.Chat Sales Team.&#x20;

To learn how to register an offline workspace, see [Air-gapped Workspace Registration](https://docs.rocket.chat/setup-and-configure/rocket.chat-air-gapped-deployment/offline-workspace-registration).

### **Upgrade or downgrade your workspace plan**&#x20;

1. Log in to your [Rocket.Chat Cloud](https://cloud.rocket.chat/home) account.
2. Navigate to **Workspaces** and select the workspace.
3. Click **Subscribe.**&#x20;
   1. A **Manage Subscription** panel is displayed, providing options for the **add-on** or **plan** subscriptions to select from.
   2. **Add plan or add-on**: Select the plan or add-on you want to subscribe to.&#x20;
   3. Select your billing plan cycle as **Monthly** or **Yearly**.
   4. Update the units of **Seats** (additional workspace users) or [**MAC packs**](https://docs.rocket.chat/use-rocket.chat/workspace-administration/users/monthly-active-contacts-macs) you want to purchase for the selected plan. Click **Save** to continue. Validate the checkout, add your card details, and click **Subscribe** to complete the purchase.
4. Click **Save** to continue. Validate the checkout, add your card details, and click **Subscribe** to complete the purchase.

{% hint style="info" %}
* You can purchase MAC packs only for the plan that you are on. For example, if you are on the Starter plan, to purchase Pro Mac packs, you must also purchase Pro seats.
* Upon successful checkout, your subscription is activated and you receive an invoice via email. If you decrease the number of already purchased seats, the cost is refunded as a credit to your Rocket.Chat Cloud account.
{% endhint %}

Once your subscription is successful, navigate to **Administration** > **Subscription** on your workspace and click **Sync license updates** to sync these changes. To cancel your subscription, refer[#cancel-workspace-subscription](../../../setup-and-configure/license-application.md#cancel-workspace-subscription "mention").

## **Workspace actions**

You can take the following actions on a workspace:

* Restart a workspace
* Cancel a workspace
* Update a workspace

{% hint style="warning" %}
Restarting, updating, and canceling workspaces from Rocket.Chat cloud is only available for [cloud-hosted workspaces](https://docs.rocket.chat/customer-center/cloud-services-center/rocket.chat-cloud-hosting-service-level-agreement-sla).
{% endhint %}

### **Restart Workspace**

If you encounter any problems with your workspace, you can try restarting it to resolve the issue. This disconnects you from the workspace, which is then shut down and restarted. A server restart is recommended for minor performance issues, such as slow messages. Once you restart your workspace, it may take anywhere from 1 to 5 minutes (depending on the number of users) for it to become available again.

To restart your workspace,

* From the sidebar menu, click **Workspaces.**
* Click the **kebab menu icon** beside the workspace and select **Restart**.

### **Cancel Workspace**

To terminate your subscription and hibernate your workspace, you have the option to cancel it.

To cancel a workspace,

* From the sidebar menu, click **Workspaces.**
* Click the **kebab menu** **icon** beside the workspace and select **Cancel**.

{% hint style="info" %}
* Only workspace administrators can terminate subscriptions from Rocket.Chat cloud.
* When canceling a workspace, the status shows as "**canceling**" until the end of your billing cycle. Once the billing cycle is over, the status changes to "**canceled**".
* Should you reconsider your decision within 30 days of canceling your workspace, please contact us at  [support@rocket.chat](mailto:support@rocket.chat) to restore your workspace. However, if more than 30 days have elapsed, you need to create a new workspace.
{% endhint %}

### **Update Workspace**

You can update your workspace to the latest Rocket.Chat version from your cloud account.

To update your workspace,

* From the sidebar menu, click **Workspaces.**
* Click the **kebab menu** **icon** beside the workspace and select **Update**.

With your Rocket.Chat cloud account, you can manage both[ self-hosted](../../../deploy/deploy-rocket.chat/) and [cloud-hosted](https://docs.rocket.chat/customer-center/cloud-services-center/rocket.chat-cloud-hosting-service-level-agreement-sla) workspaces. This includes subscribing to plans and add-ons for the workspace. In the next section, we'll highlight handling invoices for your subscriptions.
