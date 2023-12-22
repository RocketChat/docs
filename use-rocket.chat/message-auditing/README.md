# Audit Messages

<figure><img src="../../.gitbook/assets/2021-06-10_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (2) (1) (1) (1) (1) (1) (1) (4) (1) (1) (1) (1) (1) (1) (1) (34).jpg" alt=""><figcaption></figcaption></figure>

Rocket.Chat allows authorized users to audit messages and read conversations in a workspace. The user must have an `auditor` [role](../../setup-and-configure/roles-in-rocket.chat.md) and `Can Audit` [permission](../workspace-administration/permissions/) to access the **Audit Messages Panel**. As an organization, you may also want to inspect the [omnichannel](../omnichannel/) conversations and watch out for [agents ](../omnichannel/agents.md)who use improper language with customers.&#x20;

An auditor can do the following:

* Review messages in private rooms.
* Review messages by users.
* Review direct messages between users.
* Review omnichannel messages.
* Check the audit history of individuals using the [Message Audit Logs](../message-auditing-log.md).

To access the **Audit Messages Panel**,

* Navigate to **Administration** > **Audit** > **Messages.**

{% hint style="info" %}
If you can't find the audit options, you can get in touch with your workspace administrator to [assign message auditing permissions](./#assign-auditing-permissions) to you.
{% endhint %}

## Search and Review Messages

You can sort messages with various filters in your workspace.

### By Channel/Room

To search for a specific message in a room:

* Update the **Message** field with the key phrase of the message you are searching. To retrieve all messages, leave the **Message** field empty.
* Select the **start** and **end date** to limit the search results to a specific time frame. The ![](../../.gitbook/assets/three-dot-icon.png)**three-dots icon** also provides other time range options like **Today**, **Last Week,** etc.
* Select the room you want to search from the **Channel** drop-down menu.
* Click **Apply** to reveal the messages between the periods.

### By Users

To search for a specific message by users:

* Update the **Message** field with the key phrase of the message you are searching. To retrieve all messages, leave the **Message** field empty.
* Select the **start** and **end date** to limit the search results to a specific time frame. The ![](../../.gitbook/assets/three-dot-icon.png)**three-dots icon** also provides other time range options like **Today**, **Last Week,** etc.
* Type the username and select the users for which you want to search messages in the **Users** field.
* Click **Apply**. The selected users' conversations between those periods that match the search phrase are displayed.

### By Direct Messages

To search for a specific message by a direct message (DM):

* Update the **Message** field with the key phrase of the message you are searching. To retrieve all messages, leave the **Message** field empty.
* Select the **start** and **end date** to limit the search results to a specific time frame. The ![](../../.gitbook/assets/three-dot-icon.png)**three-dots icon** also provides other time range options like **Today**, **Last Week,** etc.
* Select at least two users whose direct messages you want to check in the **Users** field.
* Click **Apply**. The conversations between the users selected in that time frame that matches the search phrase are displayed.

### By Omnichannel

To search for a specific Omnichannel conversation:

* Update the **Message** field with the key phrase of the message you are searching. To retrieve all messages, leave the **Message** field empty.
* Select the **start** and **end date** to limit the search results to a specific time frame. The ![](../../.gitbook/assets/three-dot-icon.png)**three-dots icon** also provides other time range options like **Today**, **Last Week,** etc.
* Enter the visitor's number in the **Visitor** field.
* Enter the agent's name who served the conversation you want in the **Agent** field.
* Click **Apply**. The conversations between the agent and the visitor are displayed.

## Assign auditing permissions

The `Auditor` [permission](../workspace-administration/permissions/) grants users access to the **Audit Messages** feature. As a workspace administrator, you can assign this permission to any [role ](../workspace-administration/permissions/#roles)you want to give audit access to.

To assign message audit permissions:

* Navigate to **Administration** > **Workspace** > **Permissions.**
* To access the **Audit Messages Panel**, select the `Can Audit` checkbox under the role you want to assign.

In the following sub-sections, you can find more information about modifying your search results and checking the audit logs.
