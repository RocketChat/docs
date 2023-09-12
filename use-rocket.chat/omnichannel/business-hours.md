# Business Hours

The Omnichannel Business Hour allows companies to define their operating hours, which is displayed on the [Live Chat Widget](livechat-widget-installation.md), guiding customers to reach out only during those hours. This system helps manage agent workloads by alerting them of inquiries strictly within these hours, ensuring timely customer assistance.

## Business Hour Modes

* **Single Mode:** Every agent and department adheres to one uniform business hour. It is ideal for teams sharing the same shift and time zone.
* **Multiple Mode:** Allows distinct working hours for different departments, useful for teams in varied time zones. Here, a default business hour is established, with the option to customize hours for specific departments.

In the multiple mode, unless a department has a customized business hour, the default is applied. This is also the case for agents not aligned with any department. Once a custom business hour is active for a department, its agents follow that schedule. For instance, if Agent Mike is in both Support (9 AM - 3 PM) and Sales (default hours 4 PM - 5 PM), he'll attend to Support chats till 3 PM, be unavailable till 4 PM, then assist Sales till 5 PM.

{% hint style="info" %}
Multiple business hour mode is an [enterprise ](https://www.rocket.chat/pricing)feature.
{% endhint %}

To enable the business hour mode settings for your workspace,

* Navigate to **Administration** > **Workspace** > **Settings** > **Omnichannel > Business Hours.**
* Toggle on **Business hours enabled.**
* Set the **Business Hour Type** to **Single** or **Multiple,** specifying the business hour mode.
* Click **Save Changes**.

## Create New Omnichannel Business Hours

To create a new business hour,

* Navigate to **Administration > Omnichannel > Business Hour**.
* Click +**New.**
* Fill in the required details and click **Save.**
  * **Enabled**: Enables the working hour.
  * **Name**: Name of the working hour
  * **Departments**: Select the departments the working hours apply to.
  * **Timezone**: Select the timezone
  * **Open Days of the Week**: Pick open days of the week. Each selected day lets you set an open and close time.

## View and Edit Omnichannel Business Hours

The Business Hours page shows a list of all the created business hours.&#x20;

To edit a business hour,

* Navigate to **Administration > Omnichannel > Business Hour**.
* Click on the business hour from the list.
* Update the business hour and click **Save**.

{% hint style="info" %}
If your agent's live chat status shows available or is still turned on when business hours are closed, navigate to [business hour admin settings](../workspace-administration/settings/omnichannel-admins-guide/#business-hour). Then, disable and enable business hours again.
{% endhint %}
