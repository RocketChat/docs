---
description: >-
  Users menu lets you view, create, edit, delete, deactivate, and, invite team
  members.
---

# Users

This section provides access to various user account management functions within your Rocket.Chat workspace. Here, you can view, create, edit, delete, activate, and perform other actions related to team members' accounts on your workspace.

To access this menu, go to **Administration** > **Workspace** > **Users**.

## Invite users to your Rocket.Chat workspace

To access this menu,

* Navigation to **Administration > Workspace > Users.**
* Click **Invite** on the top right.
* Enter the email of the invitees
* Hit **Send**, and they’ll receive it in their email.

{% hint style="info" %}
Note that for self-managed workspaces, you need to have [SMTP enabled](https://docs.rocket.chat/use-rocket.chat/workspace-administration/settings/email/email-configuration) to send emails through the workspace. If you wish not to do so, you can still invite team members by creating their credentials.
{% endhint %}

## Add new users

To add(create) new users:&#x20;

* Navigate to **Administration > Workspace > Users.**
* Click **New** on the top right.
* Enter user credentials.
* Hit **Save.**

{% hint style="info" %}
The settings **Set random password and send by email** and **Send welcome email** will require [SMTP enabled ](https://docs.rocket.chat/use-rocket.chat/workspace-administration/settings/email/email-configuration)to send emails successfully.
{% endhint %}

## Edit a user

To edit a user,

* Click on the user from the table.
* Click on **Edit** to update any of the users' credentials.
* Click the **kebab menu** beside the **Edit** button to handle extra actions like **Deactivate**, **Delete**, **Reset E2E key,** and **Reset TOTP**.

{% hint style="info" %}
You can also [add-users-through-identity-management-and-authentication-services.md](add-users-through-identity-management-and-authentication-services.md "mention")
{% endhint %}
