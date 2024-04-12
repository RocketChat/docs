# SLA Policies

<figure><img src="../../.gitbook/assets/2021-06-10_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (2) (1) (1) (1) (1) (1) (1) (4) (1) (1) (1) (1) (1) (1) (1) (43).jpg" alt=""><figcaption></figcaption></figure>

Omnichannel SLA Policies allow you to change the order of Omnichannel queues based on **Estimated Wait Time**. It means chats with a shorter wait time will appear in the queue before others with longer or no due time set. SLA Policies are not mandatory for each chat. Thus, the Omnichannel queue has conversations with and without SLA policies.

{% hint style="info" %}
**Estimated Wait Time** is the time defined for a customer to be served. For example, if the estimated wait time is 10 minutes, the customer is supposed to wait in queue for up to 10 minutes until an agent takes the chat.
{% endhint %}

To configure **SLA Policies** in your workspace,

* Go to **Administration > Workspace > Settings > Omnichannel >** [**Queue Management**](https://docs.rocket.chat/use-rocket.chat/workspace-administration/settings/omnichannel-admins-guide#uuvo8ic5yio).
* For the **Sorting Mechanism** field, select **SLA Policies.** Click **Save Changes**.

## Create Omnichannel SLA policies

To create an Omnichannel **SLA Policy**,

* Go to **Administration > Omnichannel > SLA Policies**.
* Click **Create SLA policy**.
* Enter the following information:
  * **Name:** The name of the SLA Policy.
  * **Description**: The description of the SLA Policy
  * **Estimated due time**: The time in minutes for the SLA Policy.
* Click **Save**.

{% hint style="info" %}
An SLA policy name and estimated due time are unique and can not be duplicated. Two SLA policies can not have the same name and estimated due time.
{% endhint %}

## Delete Omnichannel SLA Policies

To delete an existing **SLA Policy**,

* Go to **Administration > Omnichannel > SLA Policies**.
* From the SLA Policies list, click the **Delete** icon across the SLA Policy you want to delete.

## Change the SLA policy of a chat

To change the SLA policy of a conversation,

* Go to **Room Information > Edit**.
* Select the SLA policy and click **Save**. After updating the SLA policy, the chat is moved to reflect its priority position to determine the [queue](../omnichannel-agents-guides/omnichannel-queue.md) order.
