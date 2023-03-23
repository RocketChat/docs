# SLA Policies

<figure><img src="../../.gitbook/assets/2021-06-10_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (2) (1) (1) (1) (35).jpg" alt=""><figcaption></figcaption></figure>

Omnichannel SLA Policies allow you to change the order of Omnichannel queues based on **Estimated Wait Time**. It means chats with a shorter wait time will appear in the queue before others with longer or no due time set. SLA Policies are not mandatory for each chat. Thus, the Omnichannel queue has conversations with and without SLA policies.

{% hint style="info" %}
**Estimated Wait Time** is the time defined for a customer to be served. For example, if the estimated wait time is 10 minutes, the customer is supposed to wait in queue for up to 10 minutes until an agent takes the chat.
{% endhint %}

To configure **SLA Policies** in your workspace,

* Navigate to **Administration > Workspace > Settings > Omnichannel > Queue Management**.
* Under the **sorting mechanism**, select **SLA Policies.** Click **Save Changes**.

## Create Omnichannel SLA Policies

To create an Omnichannel **SLA Policy**,

* Navigate to **Administration > Omnichannel > SLA Policies**.&#x20;
* Click on **+ New.**
* Update the required information and click **Save.**
  * **Name:** The name of the SLA Policy.
  * **Description**: The description of the SLA Policy
  * **Estimated due time**: The time in minutes for the SLA Policy.

{% hint style="info" %}
An SLA policy name and estimated due time are unique and can not be duplicated. Two SLA policies can not have the same name and estimated due time.
{% endhint %}

## List Omnichannel SLA Policies

To view a list of all existing SLA Policies

* Navigate to **Administration > Omnichannel > SLA Policies**. It lists the current SLA Policies in your workspace.
* Click an SLA Policy to edit it and update the details.

## Delete Omnichannel SLA Policies

To delete an existing **SLA Policy**,&#x20;

* Navigate to **Administration > Omnichannel > SLA Policies**.&#x20;
* From the SLA Policies list, click the **Delete icon** across the SLA Policy you want to delete.

## Change the SLA Policy of a chat

To change the SLA policy of a conversation,

* Navigate to **Room Information > Edit**.
* Select the SLA policy and click **Save**. After updating the SLA policy, the chat is moved to reflect its priority position to determine the [queue](../omnichannel-agents-guides/omnichannel-queue.md) order.

