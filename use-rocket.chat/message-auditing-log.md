---
description: Review log history of users who have accessed the Message Auditing Panel.
---

# Message Auditing Log

<figure><img src="../.gitbook/assets/2021-06-10_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (2) (1) (1) (1) (1) (1) (1) (4) (1) (1) (1) (1) (1) (1) (1) (34).jpg" alt=""><figcaption></figcaption></figure>

The **Audit Logs Panel** allows you to verify who runs audits and when a conversation was inspected. The user must have an `auditor-log` [role](../setup-and-configure/roles-in-rocket.chat.md) and `Can Audit Log` [permission](workspace-administration/permissions/) to access the **Audit Logs**.

To access the **Audit Logs Panel**,

* Navigate to **Administration** > **Audit** > **Logs**.

If you are interested in the entire log history, clear the start and end date fields. The full log history results are returned, from the oldest to the most recent audits. However, if you want to see who audited messages within a specific time frame, select the **start** (left) and end **date**s(right). The **kebab** **menu** also provides other time options like **Today**, **This Week,** etc.

The **Audit Logs** returns a table with the following information:

* **Username** : The name, username, and avatar of the auditors.
* **Looked for** : The search term of each audit.
* **When** : The date and time when each audit was made.
* **Results**: The number of search results returned by each audit.
* **Filters**: Filters that were applied for each audit depending on the type of audit.

## Assign Message Audit Log Permission to Specific Users

The **`Can Audit Log`** [permission](workspace-administration/permissions/) grant users access to the **Audit** **Logs** feature. As a workspace administrator, you can assign this permission to any [role ](workspace-administration/permissions/#roles)you want to give audit log access to.

To assign audit logs permissions,

* Navigate to **Administration** > **Workspace** > **Permissions.**
* To access the **Audit Logs Panel**, check the `Can Audit Log` box under the role you want to assign.
