# Departments

An Omnichannel Department is a collection of rooms that can be tailored to represent diverse units in your organization. This feature is essential when there are incoming chats originating from various communication channels, requiring expertise from diverse departments or specialized knowledge experts.

**Key Features of Omnichannel Departments**

1. **Directing conversations to a department**: Visitors can choose the specific department they want to forward their inquiries to
2. **Assigning agents to a department:** You can assign [agents ](agents.md)to specific departments, ensuring that conversations for that department are routed to the most appropriate knowledge experts.

To access the **Department** menu,

* Go to **Administration > Omnichannel > Departments**. You can **View**, **Create New**, **Edit,** or **Delete** a department.

## **Create Omnichannel Department**

To create a new Omnichannel department,&#x20;

* Click the **Create Department** button at the top of the department interface.
* Fill in the required information:
  * **Enabled**: Enable the new department.
  * **Name:** Name of the new department.
  * **Description:** An optional description of the department.
  * **Show on the registration page:** Enable this to allow your visitors to choose the department they want to chat with. The department is displayed to the visitor in the [Live Chat widget](livechat-widget-installation.md).
  * **Email**: Set an email address to forward conversations to  during offline hours.
  * **Show on offline page**: Enable this to display the department during offline hours.
  * **Send this department's Live Chat offline messages to a channel:** Set the channel where offline messages should be directed to.
  * **Max. number of simultaneous chats**: Set the maximum number of simultaneous chats that agents in this department can attend to.
  * **How long to wait to consider visitor abandonment?**:  Set the time in seconds to wait before considering visitor abandonment.
  * **Custom message when the room is automatically closed by visitor inactivity**: Set the custom message to be displayed when a room is authomatically closed due to visitor abandonment.
  * **Waiting queue message**: Enter the waiting queue message.
  * **List of departments allowed for forwarding (Optional)**: Allow to set a restricted list of departments that can receive chats from this department.
  * **Fallback department for forwarding**: Select a fallback department for forwarding.
  * **Request tag(s) before closing the conversation:** Request your agent to set tags for the conversation for later searching purposes.
  * **Conversation closing tags:** As an administrator, you can add some default conversation tags for this department.
  * **Agents:** Assign [agents](agents.md) to the department.
* Click **Save Changes**.

{% hint style="info" %}
* Workspaces on the [community plan](../../readme/our-plans.md#community) from version `6.0` and above can only create one department. The **multiple department** feature is exclusively available to workspaces subscribed to any of Rocket.chat's [premium plan](../../readme/our-plans.md).
* Workspaces with multiple departments on versions less than 6.0 can continue using their departments but can't create a new one until they're subscribed to any of Rocket.chat's [premium plan](../../readme/our-plans.md).
{% endhint %}

Omnichannel behavior varies based on how many departments are created in the workspace:

* **No departments**: All Live Chat agents receive incoming chats using a round-robin rule.
* **One department**: All incoming chats are only assigned to agents in that department using a round-robin rule.
* **Multiple departments**: The visitor must select the department to handltheirer chat during registration.

## Archive Omnichannel Department

When a department is no longer needed, but you don't want to delete it, you can archive it and unarchive it later if a need arises.

{% hint style="info" %}
For [community](../../readme/our-plans.md) workspaces below version `6.0` with multiple departments, archiving departments can be instrumental if you want to avoid upgrading your workspace [plan](../../readme/our-plans.md). Instead of deleting a department when you no longer need it, you can archive it. When the need for that department arise, you can unarchive it. This gives [community](../../readme/our-plans.md) workspaces below version `6.0` the ability to retain the same number of departments they had before the upgrade.
{% endhint %}

To archive an **Omnichannel** department,

* Click the **kebab** menu across the department you want to archive.
* Then, select **Archive**. Navigate to the **Archived** tab, and you'll see the archived departments.

To unarchive an **Omnichannel** department,

* From the list of archived departments, Click the **kebab** menu across the department you want to unarchive.
* Then, select **Unarchive**. The department is added back to the list of active departments.

## Edit Omnichannel Department

To edit an **Omnichannel** department,

* Click the **kebab** menu across the department. Then, select **Edit**.
* A panel is displayed with all the current omnichannel department information you can modify. Update the department details and click **Save**.

## Delete Omnichannel Department

To delete an **Omnichannel** department,

* Click the **kebab** menu across the department. Then, select **Delete**.

{% hint style="info" %}
As a workspace administrator, navigate to **Administration > Settings > Omnichannel** and **Enable department removal** to allow deleting departments.
{% endhint %}

Rocket.Chat offers omnichannel departments to categorize conversations, enhancing collaboration and timely responses for improved customer satisfaction, loyalty, and retention.
