# Assign roles for users in federated rooms

<figure><img src="../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

Within a federated room context, room members can assign roles to federated users. However, roles in federated rooms differ slightly from the regular Rocket.Chat roles for the [room scope](../../user-guides/rooms/room-roles.md).

Federated rooms support three roles:

* **Owner**: The user owns and fully controls a room and its activities. They can invite users, assign new owners, promote/demote moderators, remove users from the room, and edit the room name and topics.
* **Moderator**: Moderators can manage user actions and details of the room. They can invite users, assign new moderators, remove users from the room, and edit the room name and topics.
* **User** (default): Room users can send and perform message actions in the room. Users cannot perform any room management-related tasks.

Matrix uses the concept of power levels to define room roles with the `Owner` being the most powerful, followed by the `Moderator`and the `User`the least powerful.

### IMPORTANT

{% hint style="danger" %}
Rocket.Chat global roles are not supported in federated rooms. It doesn't matter if they are [_Room Scoped_](../../workspace-administration/permissions/#scope-of-roles).
{% endhint %}

{% hint style="danger" %}
For rooms created using [Element](https://app.element.io/#/welcome) as a Matrix client, only Owners (admins) can assign room roles/permissions, and you need to change the **Change permissions** room setting to`Moderator`. Otherwise, Moderators using Rocket.Chat as their Matrix Client, cannot assign roles to other users.

This can be done by navigating to **Room info** > **Room settings** > **Roles & Permission** on your Element client.
{% endhint %}

{% hint style="warning" %}
Rooms that are created with Element as the client has a set of room permission possibilities.

Changing the permissions for event-specific features can lead to unexpected behavior for users on Rocket.Chat as their Matrix client.
{% endhint %}

The main rules for assigning roles in federated rooms are:

* Only room **owners** (admin) can assign roles at the moment of the room creation.
* All the users added to federated rooms have a **User** role by default.
* Users with the same role cannot assign roles (promote/demote) between them.
* Users with a specific role cannot demote other users from the room with the same role.
* Users can only demote and promote users in the layer again right below thier roles.
* Whenever a user wants to promote a user to a role as powerful as their own, undoing that change will not be possible (a confirmation modal will double-check the operation).
* When a user chooses to demote themselves, they won't be able to regain their previous privileges. The only possibility is for a user with the necessary permission to give back the same role for that user(a confirmation modal will double-check the operation).

For any other applicable rule, they are the same as regular Rocket.Chat rooms (e.g., Room owners cannot demote themselves if they are the last room owner).
