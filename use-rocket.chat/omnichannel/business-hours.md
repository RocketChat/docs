# Business Hours

The Omnichannel **Business Hour** enables businesses to set their designated working days and hours. This data is reflected on the [Live Chat widget](livechat-widget-installation.md) availability status, notifying customers to contact customer support agents exclusively during those specified hours. It also helps to manage the workload of agents by ensuring that they receive notifications of queries only within their working hours, enabling them to assist customers promptly.

## Business Hour Modes

The Business Hour feature has two operating modes: **single** and **multiple**. In the **single mode,** all agents and departments in the workspace follow one business hour setting. This mode is beneficial when all agents share the same shift and time zone. On the contrary, the **multiple mode** enables businesses to set up different working hour rules for various departments, making it particularly valuable when customer support teams operate across numerous time zones.

Every agent has a default business hour to follow when using multiple business hour mode. This default business hour applies to any department not associated with a custom business hour or any agents who don't belong to a department. It's the default business hour for the entire workspace.

However, you can create a new custom business hour and specify the department it should apply to. Once that business hour is active, all agents in that department adhere to the new business hour. They can only handle new conversations from this department during working hours. Once it's outside their working hours, their LiveChat status is turned off, and they can't receive any new conversations from this department.

{% hint style="info" %}
Multiple business hour mode is an [enterprise ](https://www.rocket.chat/pricing)feature.
{% endhint %}

To enable the business hour mode settings for your workspace,

* Navigate to **Administration** > **Workspace** > **Settings** > **Omnichannel > Business Hours.**
* Toggle ON **Business hours enabled.**
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
