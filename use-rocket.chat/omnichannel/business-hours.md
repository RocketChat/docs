# Business Hours

The Omnichannel Business Hour allows companies to define their operating hours, which is displayed on the [Livechat Widget](livechat-widget-installation.md), guiding customers to reach out only during those hours. This system helps manage agent workloads by alerting them of inquiries strictly within these hours, ensuring timely customer assistance.

## Business Hour Modes

* **Single Mode:** Every agent and department adheres to one uniform business hour. It is ideal for teams sharing the same shift and time zone.
* **Multiple Mode:** Allows distinct working hours for different departments, especially useful for teams in varied time zones. In this mode, the workspace has a default business hour, but custom hours can be set for specific departments. Agents in those departments primarily handle chats during those custom hours. Outside of that, their Livechat status ideally goes offline.

In the **Multiple Mode**, agents without a department or agents with departments that are not connected to any business hour rule, follow the default business hour. **It's important to note that due to system nuances**, while agents are assigned to specific department hours, they may still receive chats from other departments they're associated with, even outside the set hours. For instance, if Mike is in Support (9 AM-3 PM) and Sales (default business hour: 4 PM-5 PM), he'll mainly handle Support chats from 9 AM until 3 PM. However, he might occasionally receive chats from Sales during the Support hours. From 3 PM-4 PM, he will be unavailable for new chats. Thereafter, he'll be primarily available for Sales from 4 PM-5 PM.

We recommend businesses be aware of this operational nuance and plan their staffing and training accordingly to ensure consistent customer experience.

{% hint style="warning" %}
Multiple business hour mode is exclusively available to workspaces subscribed to any of Rocket.Chat's [premium plans](../../readme/our-plans.md).
{% endhint %}

To enable the business hour mode settings for your workspace,

* Navigate to **Administration** > **Workspace** > **Settings** > **Omnichannel > Business Hours.**
* Toggle on **Business hours enabled.**
* Set the **Business Hour Type** to **Single** or **Multiple,** specifying the business hour mode.
* Click **Save Changes**.

## Create New Omnichannel Business Hours

To create a new business hour,

* Go to **Administration > Omnichannel > Business Hour**.
* Click +**New.**
* Fill in the following details:
  * **Enabled**: Enables the working hour.
  * **Name**: Name of the working hour.
  * **Departments**: Select the departments the working hours apply to.
  * **Timezone**: Select the timezone.
  * **Open Days of the Week**: Pick open days of the week. Each selected day lets you set an open and close time.
* Click **Save**.

## View and Edit Omnichannel Business Hours

The Business Hours page shows a list of all the created business hours.&#x20;

To edit a business hour,

* Navigate to **Administration > Omnichannel > Business Hour**.
* Click on the business hour from the list.
* Update the business hours and click **Save**.

{% hint style="info" %}
If your agent's live chat status shows available or is still turned on when business hours are closed, navigate to [business hour admin settings](omnichannel-admins-guide/#business-hour). Then, disable and enable business hours again.
{% endhint %}
