---
description: Review log history of users who have accessed the Message Auditing Panel.
---

# Audit Logs

The **Audit Logs Panel** allows you to verify who runs audits and when a conversation was inspected. The user must have an `auditor-log` [role](../../../setup-and-configure/roles-in-rocket.chat.md) and `Can Audit Log` [permission](../../workspace-administration/permissions/) to access the **Audit Logs**.

To access the **Audit Logs Panel**,

* Navigate to **Administration** > **Audit** > **Logs**.
* If you are interested in the entire log history, clear the start and end date fields in the date picker. The full log history results are returned, from the oldest to the most recent audits.&#x20;
* If you want to see who audited the messages within a specific time frame, select the start and end dates from the date picker. The **kebab** **menu** also provides other time range options like **Today**, **This Week,** etc.

The **Audit Logs** page returns the following information:

* **User**: The name, username, and avatar of the auditors.
* **Looked for**: The search term entered for each audit.
* **When**: The date and time when each audit was made.
* **Results**: The number of search results returned by each audit.
* **Filters applied**: Filters that were applied for each audit depending on the type of audit, such as the dates and the channels.
