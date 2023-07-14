---
description: >-
  If you want to invite external users to your Rocket.Chat workspace, you can
  add them as guest users.
---

# Guest users

{% hint style="info" %}
As from Rocket.Chat `6.0`, Guest role [permissions](../permissions/) on [Enterprise Edition](../settings/enterprise.md) and [Rocket.Chat SaaS](../../../#rocket.chat-saas) workspaces cannot be modified.
{% endhint %}

{% hint style="success" %}
Users with the Guest role don't count on the cap of seats, but they count on the guest cap.
{% endhint %}

### What can a guest user do?

Guest users have fewer capabilities than regular users.

A  Rocket.Chat guest users can:

* Join channels they are invited to.
* Participate in [Channel](../../user-guides/rooms/channels/), [1:1 DM](../../user-guides/rooms/direct-messages/#types-of-direct-messages), and [1:M DM](../../user-guides/rooms/direct-messages/#types-of-direct-messages) conversations they are a part of.
* [Create Discussions](../../user-guides/rooms/discussions/create-a-new-discussion.md).

{% hint style="info" %}
You can set a maximum number of guest users for every license.

You can set a maximum number of channels a guest can join for every license.
{% endhint %}

## Manage your guest users

### **Guest Access Permissions**

Go to **Administration > Workspace > Permissions** and locate the guest role. You see the available permissions the guest role has.

Check to enable any other permission to elevate the guest privileges.

{% hint style="info" %}
For Enterprise workspaces from `6.0`, the guest role has limited permissions like: `Start Discussion`,`View Direct Messages` and cannot be modified.
{% endhint %}

#### Permissions Available **for the Guest Role**

![Permissions](../../../.gitbook/assets/GuestUser\_Permissions.png)

### Add a Guest User

{% hint style="info" %}
You must be an administrator to add a guest to Rocket.Chat workspace.
{% endhint %}

* Go to **Administration > Workspace > Users > New**
* On the **Add User** page, enter the guest users' information:
  * **Name:** Enter the name of the guest user.
  * **Username:** Enter the guest users's username.
  * **Email:** Enter the guest users' email address.
  * **Status Message:** Set the guest user's status message.
  * **Bio:** Enter the guest user's bio information.
  * **Nickname:** Enter the guest users's nickname.
  * **Password:** Enter the guest users's password.
  * **Require password change:** Enable or disable this option to change or reset the password.
  * **Set random password and send by email:** Enable or disable this option to set a random password and send by email.
  * **Roles:** Select the **guest** role from the dropdown menu.
  * **Join default channels:** Set whether you want the guest user to join default channels.
  * **Send welcome email:** Set whether you want to send a welcome email to the guest user.
* Click **Save**.

{% hint style="info" %}
[**Roles** ](../../../setup-and-configure/roles-in-rocket.chat.md)- This defines what permissions a user has.
{% endhint %}

Once the guest user is added, you can edit, activate or deactivate the guest user as needed.

### Activate Guest Users

* Go to **User Info** and then click **Activate.**

### Deactivate Guest Users

* Go to **User Info** and then click **Deactivate.**
