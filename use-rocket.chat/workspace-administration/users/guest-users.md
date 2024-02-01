# Guest Users

<figure><img src="../../../.gitbook/assets/2021-06-10_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (2) (1) (1) (1) (1) (1) (1) (4) (1) (1) (1) (1) (1) (1) (1) (34).jpg" alt=""><figcaption></figcaption></figure>

The **Guest Users** feature in Rocket.Chat enables organizations to extend collaboration beyond internal teams by inviting external users with limited capabilities to your workspace. This setup is ideal for collaboration with partners, contractors, or customers, allowing businesses to grant project-specific access while ensuring security.&#x20;

**Key capabilities of Guest Users:**

1. Start [Discussions](../../user-guides/rooms/discussions/).
2. Access and participate in invited [channels](../../user-guides/rooms/channels/).
3. Reply to [Direct Messages](../../user-guides/rooms/direct-messages/).

{% hint style="info" %}

{% endhint %}

To add a guest user,&#x20;

* Go to **Administration > Workspace > Users > New.**
* On the **Add User** page, enter the guest users' information:
  * **Name:** Enter the name of the guest user.
  * **Username:** Enter the guest users's username.
  * **Email:** Enter the guest users' email address.
  * **Verified**: Enable or disable this option to verify the guest user.&#x20;
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

**Edit Guest Users**

To edit the guest user,

* Go to **Administration > Workspace > Users.**
* Click the guest user from the list of users to view the **User Info.**
* Click the **Edit** button to edit the user.
* Click the **kebab** menu for other actions like activating, deactivating, and deleting the user.

**View Guest User Permissions**

To view the guest user permissions granted in a workspace,

* Navigate to **Administration > Workspace > Permissions** and locate the guest role.&#x20;
* You can view the enabled permissions for the guest role.

{% hint style="warning" %}
* Guest role permissions cannot be modified for Rocket.Chat workspaces on version 6.0 and above subscribed to the [Enterprise plan](../../../readme/our-plans.md#enterprise-plan).
* You must be an administrator to manage guest users in your workspace.
{% endhint %}

Rocket.Chat **Guest Users** feature is a valuable tool for organizations seeking seamless collaboration with external users. It streamlines communication and promotes efficient collaboration without compromising the security of your workspace.
