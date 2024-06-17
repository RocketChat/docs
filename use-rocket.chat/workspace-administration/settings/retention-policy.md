---
description: Automatically prune old messages and files across your workspace
---

# Retention Policy

Retention policy in Rocket.Chat enables you to automatically delete old messages and files in your workspace based on custom rules.

## Permissions

Retention policies depend on two types of permissions:

* `edit-privileged-setting` : It is required to set a **global** policy.
* `edit-room-retention-policy`: It is required to set a **per-room** policy.

{% hint style="info" %}
To enable room owners to set their policies, assign `edit-room-retention-policy` permission to room owners. By default, it is assigned to administrators only.
{% endhint %}

## Configuration

To enable retention policy on your workspace,&#x20;

* Navigate to **Administration > Workspace > Settings > Retention Policy.**
* Toggle on **Enabled.**
* **Timer Precision**: It establishes how often the deletion script should run. When your policies have a long lifetime or are not concerned about precision, you can lower this to save processing power.
* **Use Advanced Retention Policy Configuration:** If enabled, it uses an advanced retention policy configuration, providing you with more granular control of the pruning frequency.
* **Use Advanced Retention Policy Cron**:  Define how often the prune timer should run with a [cron job expression](https://crontab.guru/#\*/5\_5\_8\_3). Setting this to a more precise value makes channels with fast retention timers work better, but might cost extra processing power on large communities.

{% hint style="success" %}
When the "**Use Advanced Retention Policy Configuration**"  setting is enabled, the policy follows the cron job expression set in "**Use Advanced Retention Policy Cron**".  If it's disabled, the policy follows the **Timer Precision** settings.
{% endhint %}

**There are two levels of retention policies in Rocket.Chat**: **global policies** (enforced across the entire workspace) and **per-room policies** (implemented in specified rooms ).

### Global policies

{% hint style="danger" %}
Tweaking these settings without extreme caution can **destroy** **all message history across your server**. Please read this entire section **before** you enable this feature.
{% endhint %}

To update the **Global Policies** settings, navigate to **Administration > Workspace > Settings > Retention Policy > Global Policies.**

The policy is split into three parts: one for all channels, one for all private groups, and one for all direct messages. Each type has two options:

* **Applies to channels/private groups/direct messages**: Enabling this option applies the global retention policy to this type of message. For example, if you only wish to prune messages in private groups, enable the option for private groups and disable the others.
* **Maximum message age in channels/private groups/direct messages**: This option sets the time period (in days), for the automatic deletion of messages. For instance, entering 30 will delete all messages older than 30 days, while entering 365 will remove messages older than a year.

Furthermore, other options allow you to specify how the policy works:

* **Do not prune pinned messages**: If enabled, pinned messages are not deleted. For example, when you pin a few messages with essential links, these messages stay intact during pruning.
* **Only delete files**: If enabled, messages are not deleted, but files are. They are replaced by a simple _File removed by automatic prune_ message. Only unpinned files are deleted when used together with **Do not prune pinned messages**.
* **Do not prune discussion messages:** If enabled, discussion messages are not deleted. All the discussions in your workspace remain intact.
* **Do not prune Threads:** When enabled, threads are not deleted. All the threads in your workspace remain intact.

{% hint style="warning" %}
If you don't enable **Do not prune discussion messages,** all your discussion messages will be deleted irrespective of the dates.
{% endhint %}

### Per-room policies

{% hint style="danger" %}
Tweaking these settings without extreme caution can **destroy** **all message history across your server**. Please read this entire section **before** you turn the feature on.
{% endhint %}

{% hint style="info" %}
Ensure you have the `edit-room-retention-policy` permission.
{% endhint %}

To enable an automated retention policy in a room that overrides the global retention policy,

* Click the **Room Information** icon and select the **Edit** button.&#x20;
* Go to **Prune.**
  * **Automatically prune old messages**: Enable this option to prune old messages automatically.
  * **Override global retention policy**: When enabled, you can define a retention policy for the room that overrides the global policy.&#x20;
  * **Maximum message age in days**: This option sets the time period (in days), for the automatic deletion of messages. For instance, entering 30 will delete all messages older than 30 days, while entering 365 will remove messages older than a year.
  * **Exclude pinned messages:** When enabled, do not prune pinned messages.
  * **Prune files only, keep messages:** When enabled, remove only files during pruning and keep the messages.
* Click **Save.**

Users can see if a room's messages will be pruned by scrolling to the top of the message history or opening the room info. A message is displayed if a policy (global or per-room) is present. For example, _Messages older than 30 days are automatically pruned here,_ or _Unpinned files older than a year are automatically pruned here_.

**You can also manually prune selected messages in a room as needed**, outside of the automated retention policies following these steps:&#x20;

* Navigate to the kebab menu in the room header.
* Click **Prune Messages** and update the following options:
  * **Newer than**: Set a date and time to prune messages newer than the select moment.
  * **Older than**: Set a date and time to prune messages older than the select moment.
  * **Only prune content from these users**: Select users to delete their messages. Leave empty to prune everyone's content.
  * **Inclusive**: If you check the inclusive checkbox, messages sent on and between **Newer than** and **Older than** dates are deleted (messages are deleted between and including those dates). If you don't check the inclusive checkbox, messages between **Newer than** and **Older than** dates are deleted, and the messages sent on those dates are not deleted.
  * **Do not prune pinned messages**: Pinned messages are not deleted if enabled. For example, if you pinned a few messages with important links, they stay intact.
  * **Do not prune discussion messages**: If enabled, messages in the discussions are not deleted.
  * **Do not prune threads:** If enabled, messages in the threads are not deleted.
  * **Only remove the attached files, keep messages:** If enabled, messages are not deleted, but files are. They are replaced by a simple _File removed by automatic prune_ message. When used together with **Exclude pinned messages**, only unpinned files are deleted.
* Click **Prune**.

The selected messages are deleted immediately based on the specified criteria.
