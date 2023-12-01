# Room Roles

Rocket.Chat [rooms](./), including [Teams](teams/), [Channels](channels/), and [Discussions](discussions/), have different roles that can be assigned to users in order to determine what actions and features they can access and control within a particular room. These roles are associated with permissions in the [room scope](../../workspace-administration/permissions/#scope-of-roles).

### Available Room Roles

By default, there are three major room roles available in a Rocket.Chat workspace:

* **Owner**: This is the highest room-scoped role. It provides complete control over the room, including the ability to change its name and description, manage its members, and delete the room entirely.
* **Leader**: A Room leader has significant control over the room and can manage room members, edit the room name and description, and perform other tasks pertaining to the room.
* **Moderator**: This role is designed to help keep the room organized and on-topic. Moderators can delete messages, kick users out, and pin important messages to the top of the room.

{% hint style="success" %}
Creating custom roles is exclusively available to workspaces subscribed to the [Enterprise plan](../../../readme/our-plans.md#enterprise-plan).  For more details, kindly visit [#creating-custom-roles](../../workspace-administration/permissions/#creating-custom-roles "mention").
{% endhint %}

### Assigning Room Roles

{% hint style="warning" %}
Room roles can only be assigned to members belonging to the room.
{% endhint %}

To assign a Role to a user:

* Open the desired room.
* Click **Members** icon on the top right action bar. This shows a list of users in that room.
* Search and select the user you want to assign a role.
* Click the **kebab menu** on the right against the user. A dropdown is seen.
* Click **Set as \<role>** from the dropdown to set the role you wish to assign to the user.

{% hint style="info" %}
* Only Room Owners and Leaders can assign Roles to other users.
* Users can have multiple roles within a single room.
{% endhint %}

### Unassigning Room Roles

Room roles can be revoked from a user in a room if no longer needed.

To remove a role:

* Open the desired room.
* &#x20;Click on the **Members** icon on the top right action bar. This shows a list of users in that room.
* Search or select the user having the existing role.
* Click the **kebab menu** on the right against the user. A dropdown is seen.
* From the dropdown, click **Remove as \<role>** to remove the role previously assigned to the user.

{% hint style="info" %}
See the official documentation to learn more about Rocket.Chat [Roles ](../../../setup-and-configure/roles-in-rocket.chat.md)and [Permissions](../../workspace-administration/permissions/).
{% endhint %}
