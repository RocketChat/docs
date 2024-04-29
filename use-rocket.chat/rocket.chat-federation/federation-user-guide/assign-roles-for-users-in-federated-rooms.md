# Assign roles for users in federated rooms

<figure><img src="../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

In Rocket.Chat rooms, users have different roles.  However, roles in federated rooms differ slightly from the regular Rocket.Chat [room roles](../../user-guides/rooms/room-roles.md).

Federated rooms support three roles:

* **Owner**: Owners have full control over the room, including inviting users, assigning roles, and managing room activities.
* **Moderator**: Moderators can manage user actions and details of the room. They can invite users, assign new moderators, remove users from the room, and edit the room name and topic.
* **User**: Users can send and perform message actions in the room. They cannot perform any room management-related tasks. It is the default role for every room member.

Matrix uses the concept of power levels to define room roles, with the _owner_ as _admin_, then the _moderator_, and the _user_ as _default_.

{% hint style="danger" %}
* Rocket.Chat global roles are not supported in federated rooms. It doesn't matter if they are [_Room Scoped_](../../workspace-administration/permissions/#scope-of-roles).
* For rooms created using [Element](https://app.element.io/#/welcome) as a Matrix client, only Owners (admins) can assign room roles/permissions.  Navigate to **Room info** > **Room settings** > **Roles & Permission** on Element and update the **Change permissions** room setting to`Moderator`. Otherwise, Moderators using Rocket.Chat in that room cannot assign roles to other users.&#x20;
* Rooms that are created with Element have a set of room permission possibilities. Changing the permissions for event-specific features in a room can lead to unexpected behavior for federated users on Rocket.Chat.
{% endhint %}

The main rules for assigning roles in federated rooms are:

* Only room owners (admins) can assign roles once the room is created.
* All users added to federated rooms start with a `user` role by default.
* Users with the same role cannot assign each other roles (promote/demote)
* If a user promotes another user to a role as powerful as their own, such as a room owner appointing another room owner, this action cannot be undone.
* Users who are demoted cannot regain their previous privileges unless the role is re-assigned by a user with the necessary permission.

Other rules, such as room owners being unable to demote themselves if they are the last room owner, follow the same principles as regular [Rocket.Chat rooms](../../../setup-and-configure/roles-in-rocket.chat.md).
