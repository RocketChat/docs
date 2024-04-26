---
description: Apply an Air-Gapped License on your Rocket.Chat workspace
---

# Air-Gapped License

To unlock additional features in your workspace, activate your workspace with a license for your subscribed [plan](../../readme/our-plans.md). You can also apply [trials](../trials/ "mention") on your workspace to explore additional features.

## Get an air-gapped workspace license

If your workspace is in an air-gapped environment where it is unable to talk to our licensing servers, you will need to get an air-gapped license.

To obtain a license for an air-gapped workspace, you can either contact [Rocket.Chat support](https://desk.rocket.chat/portal/en/home) to provide a license for you or retrieve an offline license from your Rocket.Chat cloud console.

#### **Contact Rocket.Chat support to provide a license for your workspace**

1. Open up a query requesting a license for your air-gapped workspace from [Rocket.Chat support](../../customer-center/support-center/premium-support-plans/support-prerequisites-and-version-durability.md).

{% hint style="info" %}
If the workspace detects that it is not airgapped, it will still force you to register.  The assumption is that the workspace is truly unable to communicate with the outside world.

When requesting, you will be required to provide the following information:

* Your workspace registration email.
* The workspace URL.
{% endhint %}

2. When the license is provided, proceed to [apply the license](offline-license.md#applying-license) on your workspace.

#### **Get a license from Rocket.Chat Cloud**

Make sure that you have completed[ registering your workspace](offline-workspace-registration.md). Purchase a plan and follow these steps:

1. On your [Rocket.Chat Cloud](https://cloud.rocket.chat/home) account, click on the workspace.
2. Click **Get License**.
3. Copy the license code provided and [apply the license](offline-license.md#applying-license) on your workspace.

## Apply the license

After getting your air-gapped license, proceed with the following steps to apply it to your workspace:

* When the license code is provided, navigate to **Administration > Settings > Premium** on your workspace.&#x20;
* Update the **Premium License** field with the license code, confirm the status of the applied license, and click **Save Changes**.

{% hint style="warning" %}
You may need to refresh your workspace for the changes to reflect.
{% endhint %}

Now that you've upgraded your workspace [plan](../../readme/our-plans.md), proceed to explore the additional benefits Rocket.Chat offers on your workspace. In the next section, we'll show you the additional configurations you can make on your air-gapped workspace.
