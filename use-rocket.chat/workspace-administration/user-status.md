# User Status



The Rocket.Chat User Status setting lets you manage users' presence and status in your workspace.

A **Presence** is used to determine the **Status** of a user in the workspace.

By default, Rocket.Chat has the following Presence presets.

* **Online**: Used to indicate a user is online and available.
* **Away**: Indicates a user is idle and away from the workspace. See how to configure the Idle time limit here [Default User Preferences](settings/accounts/#default-user-preferences) or as a user in [User Presence](../user-guides/user-panel/my-account/#user-presence).
* **Busy**: This shows a user is busy and unavailable on the workspace.
* **Offline**: Used to indicate a user is offline and not connected.

To access this menu,

Navigate to **Administration** > **Workspace** > **User Status.**

## Presence Service

With the Presence service enabled, users can see the status of other users in the workspace.

To enable the Presence service,

* Navigate to **Administration** > **Workspace** > **User Status** > **Presence service.**&#x20;
* Click the **Presence Service** button.
* Toggle the **Service status** to on.

{% hint style="warning" %}
Workspaces on the community plan have a maximum limit of 200 concurrent connections. While you can have more connections active, users' statuses will no longer be visible, and the presence service gets disabled once you reach this cap. However, this limitation does not impact their capacity to send and receive messages.
{% endhint %}

{% hint style="info" %}
When the Presence service gets disabled automatically due to the cap on concurrent connections,

* Users see the status indicator for all users, including themselves as `disabled`.
* The workspace administrator has to manually reactivate the Presence service when the number of connections drops below the connection limit of 200.&#x20;
* Workspace users and administrator(s) are notified that Presence is inactive because the workspace has exceeded the connection limit.
{% endhint %}

## Custom Status

To create a custom status,

* Navigate to **Administration** > **Workspace** > **User Status.**
* Click **New custom status.**&#x20;
* Enter a **name** for your custom status.
* Select a **presence** to tie with your custom status.
* Hit **Save.**

### Use Custom Status

The custom status and default status presets will be visible to all users in your workspace.

To set a custom status,&#x20;

* Click on your avatar by the top left of your workspace.
* From the dropdown, select the custom status from the list of statuses.

### Delete/Edit Custom Status

To delete or edit a custom status,

* Navigate to **Administration** > **Workspace** > **User Status**
* Search and click the custom status you want to edit or delete.
* Update the details and click **Save** to edit the status.
* Click **Delete** to delete the status.
