# Departments

An Omnichannel Department is a collection of rooms that can be configured based on a category as needed. These departments can be related directly to the various departments in your company. [Live Chat](livechat-widget-installation.md) conversations can be directed to a specific department.

{% hint style="info" %}
A typical use case is when you have Live Chat conversations initiated from different places or pages of your website and need them handled by various departments or groups of knowledge experts. You can [assign an agent to a department](agents.md#assign-omnichannel-agent-to-a-department).
{% endhint %}

To access this menu,

* Go to **Administration > Omnichannel > Departments**. Here, you can **View**, **Create New**, **Edit,** or **Delete** a department.

## **Create Omnichannel Department**

To create a new Omnichannel department:

* Click +**New** on the top right of the screen
* Fill in the required [information](departments.md#omnichannel-department-information) and click **Save.**

{% hint style="info" %}
Workspaces on the community plan from version `6.0` and above can only create one department. To create multiple departments, you are required to upgrade to the Rocket.Chat [enterprise plan](../../setup-and-configure/enterprise-plan-trial.md). For workspaces with multiple departments on previous versions of Rocket.Chat, you can continue with those departments but can't create a new one until you upgrade to Enterprise.
{% endhint %}

### Omnichannel Department Information

1. **Enabled**: Enables your new department.
2. **Name:** Name of the new department.
3. **Description**. An optional field that lets you set the department description
4. **Show on the registration page:** Allow your visitor to have the option to choose the department they want to talk to. The option will appear to your customer in the Live Chat widget.
5. **Email**: Forward your Omnichannel conversations to the email address you choose during offline hours.
6. **Show on offline page**: A radio button if you want your department to show offline during off-business hours. If you enable it, it will appear in the widget.
7. **Send this department's Live Chat offline messages to a channel:** Mention the name of the channel you want to direct the offline messages to.
8. **Max. number of simultaneous chats**: The maximum number of simultaneous chats that the agents can attend.
9. **How long to wait to consider visitor abandonment?**: Time in seconds to wait to Consider visitor abandonment.
10. **Custom message when the room is automatically closed by visitor inactivity**: Enter your custom message.
11. **Waiting queue message**: Enter the waiting queue message.
12. **List of departments allowed for forwarding (Optional)**: Allow to set a restricted list of departments that can receive chats from this department.
13. **Fallback department for forwarding**: Select a fallback department for forwarding.
14. **Request tag(s) before closing the conversation:** Request your agent to set tags for the conversation for later searching purposes.
15. **Conversation closing tags:** As an administrator, you can add some conversation tags for this department.
16. **Agents:** Assign the agents to this department.

Depending on how many departments you've created, you might have the following behavior:

* **No departments**: All Live Chat agents will receive incoming chats using a round-robin rule.
* **One department**: All incoming chats will be offered to agents **only** in that department using a round-robin rule.
* **More than one department**: The visitor must choose what department he wants to talk to at registration.

## Archive Omnichannel Department

When an Omnichannel department is no longer needed, but you don't want to delete it just yet, you can archive it. You can also unarchive it later if you discover a need for it.

{% hint style="info" %}
For community workspaces below version `6.0` with multiple departments, archiving departments can be instrumental if you want to avoid getting an enterprise license. Instead of deleting a department when you no longer need it, you can archive it. When you need that department later, you can unarchive it. This gives community workspaces below version `6.0` the ability to retain the same number of departments they had before the upgrade.
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
* A panel is opened with all the current [omnichannel department information](departments.md#omnichannel-department-information) you can modify. Update the department details and click **Save**.

## Delete Omnichannel Department

To delete an **Omnichannel** department,

* Click the **kebab** menu across the department. Then, select **Delete**.

{% hint style="info" %}
As a workspace administrator, navigate to **Administration > Settings > Omnichannel** and **Enable department removal** to allow deleting departments.
{% endhint %}
