# Guest users

<figure><img src="../../../.gitbook/assets/2021-06-10_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (2) (1) (1) (1) (1) (1) (1) (4) (1) (1) (1) (1) (1) (1) (1) (34).jpg" alt=""><figcaption></figcaption></figure>

Guest users in Rocket.Chat are invited external users with limited capabilities. While they can join select channels and discussions, they don't have full workspace access. This setup is ideal for collaboration with partners, contractors, or customers, allowing businesses to grant project-specific access while ensuring security.

{% hint style="info" %}
Guest users do not count towards the seat cap, but they count towards the guest cap.
{% endhint %}

### What can a guest user do?

A Rocket.Chat guest users can do the following:

* Join [channels](../../user-guides/rooms/channels/) they are invited to.
* Participate in [Channel](../../user-guides/rooms/channels/), [1:1 DM](../../user-guides/rooms/direct-messages/#types-of-direct-messages), and [1:M DM](../../user-guides/rooms/direct-messages/#types-of-direct-messages) conversations they are a part of.
* [Create Discussions](../../user-guides/rooms/discussions/create-a-new-discussion.md).

{% hint style="info" %}
You can manage the capabilities of guest users further by [configuring their permissions](guest-users.md#guest-access-permissions).
{% endhint %}

## Manage your guest users

### **Guest User Permissions**

To view the guest user permissions,

* Navigate to **Administration > Workspace > Permissions** and locate the guest role.&#x20;
* You will see the enabled permissions the guest role has. The guest role has limited permissions like Start Discussion, and View Direct Messages.&#x20;

{% hint style="warning" %}
The Guest Users feature is exclusively available to workspaces on the [Enterprise plan](../../../readme/our-plans.md#enterprise-plan). From Rocket.Chat version `6.0`, permissions for the guest role can not be modified on workspaces subscribed to the Enterprise plan.
{% endhint %}

![Permissions](../../../.gitbook/assets/GuestUser\_Permissions.png)

### Add a Guest User

{% hint style="info" %}
You must be an administrator to add a guest to your  workspace.
{% endhint %}

To add a guest user,&#x20;

* Go to **Administration > Workspace > Users > New.**
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

Once the guest user is added, you can edit, activate or deactivate the guest user.

### Edit Guest Users

To edit the guest user,

* Go to **Administration > Workspace > Users.**
* Click the guest user from the list of users to view the **User Info.**
* Click the **Edit** button to edit the user.
* Click the **kebab** menu for other actions like activate/deactivate, delete the user.
