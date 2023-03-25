# Departments

An Omnichannel Department is a collection of rooms that can be configured based on a category as needed. These departments can be related directly to the various departments in your company. [Live Chat](livechat-widget-installation.md) conversations can be directed to a specific department.

{% hint style="info" %}
A typical use case is when you have Live Chat conversations initiated from different places or pages of your website and need them handled by various departments or groups of knowledge experts. You can [assign an agent to a department](agents.md#assign-omnichannel-agent-to-a-department).
{% endhint %}

To access this menu,&#x20;

* Go to **Administration > Omnichannel > Departments**. Here, you can **View**, **Create New**, **Edit,** or **Delete** a department.

## **Create Omnichannel Department**

To create a new Omnichannel department:

* Click +**New** on the top right of the screen
* Fill in the required [information](departments.md#omnichannel-department-information) and click **Save.**

{% hint style="info" %}
From workspaces on version `6.0`, the community edition allows you to create only one department. To create multiple departments, please upgrade to the [enterprise edition ](../../setup-and-configure/enterprise-edition-trial.md)of Rocket.Chat. For workspaces with various departments on previous versions, you can continue with those departments; however, you can't create a new one.
{% endhint %}

### Omnichannel Department Information

1. **Enabled**: Enables your new department.
2. **Name:** Name of the new department.
3. **Description**. An optional field that lets you set the department description
4. **Show on the registration page:** Allow your visitor to have the option to choose the department they want to talk to. The option will appear to your customer in the Live Chat widget.
5. **Email**: Forward your Omnichannel conversations to the email address you choose during offline hours.
6. **Show on offline page**: A radio button if you want your department to show offline during off-business hours. If you enable it, it will appear in the widget.
7. **Send this department's Live Chat offline messages to a channel:** Mention the name of the channel you want to direct the offline messages to.
8. **Request tag(s) before closing the conversation:** Request your agent to set tags for the conversation for later searching purposes.
9. **Conversation closing tags:** As an administrator, you can add some conversation tags for this department.
10. **Agents:** Assign the agents to this department.

Depending on how many departments you've created, you might have the following behavior:

* **No departments**: All Live Chat agents will receive incoming chats using a round-robin rule.
* **One department**: All incoming chats will be offered to agents **only** in that department using a round-robin rule.
* **More than one department**: The visitor must choose what department he wants to talk to at registration.

## Archive Omnichannel Department

When an Omnichannel department is no longer needed, but you don't want to delete it just yet, you can archive it. You can also unarchive it later if you discover a need for it.

To archive an **Omnichannel** department,

* Click the **kebab** menu across the department you want to archive.
* Then, select **Archive**. Navigate to the **Archived** tab, and you'll see the archived departments.

To  unarchive an **Omnichannel** department,

* From the list of archived departments, Click the **kebab** menu across the department you want to unarchive.
* Then, select **Unarchive**. The department is added back to the list of active departments.

## Edit Omnichannel Department

To edit an **Omnichannel** department,

* Click the **kebab** menu across the department. Then, select **Edit**.
* A panel is opened with all the current [omnichannel department information](departments.md#omnichannel-department-information) you can modify. Update the department details and click **Save**.

## Delete Omnichannel Department

To delete an **Omnichannel** department,&#x20;

* Click the **kebab** menu across the department. Then, select **Delete**.
