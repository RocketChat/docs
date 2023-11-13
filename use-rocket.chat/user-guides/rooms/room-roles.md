# Room Roles

Rocket.Chat Rooms, such as [Teams](teams/), [Channels](channels/), and [Discussions](../../workspace-administration/settings/discussion.md), have several roles that can be assigned to a user in that room. These Roles provide varying control permission levels, privileges, and access to the Room's features and settings.

Room roles have permissions in the [Room scope](../../workspace-administration/permissions/#scope-of-roles) type.

### Available Room Roles

By default, there are three major Roles available in Rocket.Chat Rooms:

* **Owner**: This is the highest Room scoped role. It provides complete control over the Room, including the ability to change its name, and description, manage its members and even delete the Room entirely.
* **Leader**: This role is a step down from the Owner. A Room leader has significant control over the room and can manage Room members, edit the Room name and description and perform other tasks pertaining to the Room.
* **Moderator**: This role is designed to help keep the Room organized and on-topic. Moderators can delete messages, kick users out, and pin important messages to the top of the Room.

{% hint style="success" %}
With an [Enterprise ](../../workspace-administration/settings/premium.md)workspace, you can [create custom Roles](../../workspace-administration/permissions/#creating-custom-roles) as needed.
{% endhint %}

### Assigning Room Roles

{% hint style="warning" %}
Room roles can only be assigned to members belonging to the room.
{% endhint %}

To assign a Role to a user:

* Open the desired room.
* Click  **Members** icon on the top right action bar. This shows a list of users in that room.
* Search and select the user you want to assign a role.
* Click Kebab menu on the right against the user. A dropdown is seen.
* Click **Set as \<role>** from the dropdown to set the role you wish to assign to the user.

{% hint style="info" %}
* Only Room Owners and Leaders can assign Roles to other users.
* Users can have multiple Roles within a single room.
{% endhint %}

### Unassigning Room Roles

Room roles can be revoked from a user in a Room if no longer needed.

To remove a role:

* Open the desired room.
* &#x20;Click on the **Members** icon on the top right action bar. This shows a list of users in that room.
* Search or select the user having an existing role.
* Click Kebab menu on the right against the user. A dropdown is seen.
* From the dropdown, click **Remove as \<role>** to remove the role previously assigned to the user.

Learn more about Rocket.Chat [Roles ](../../../setup-and-configure/roles-in-rocket.chat.md)and [Permissions](../../workspace-administration/permissions/).
