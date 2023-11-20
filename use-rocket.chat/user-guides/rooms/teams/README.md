# Teams

&#x20;In Rocket.Chat, a **Team** is a digital workspace that allows you to manage multiple users simultaneously, where teammates can collaborate and work together towards a common goal. A **Team** can have multiple [channels](../channels/). For example, you have a team in your workspace for all core members of your organization that contains a list of channels you want them to belong to. If you add a new core member to that team, they automatically have access to all the channels in that team. There will be no need to add them to those channels individually.

Teams are identified by: ![](<../../../../.gitbook/assets/team (2).png>)

**Teams** can be made private so that only invited members are allowed to join or public so that all Rocket.Chat users can see them. Each **Team** may consist of channels, which may also be either [public ](../channels/#public-channels)or [private](../channels/#private-channels).

## Team Privacy and Encryption

#### Read-Only Teams

Only authorized users with write permissions can send messages in read-only teams. All other users can react to messages on this channel.

#### Broadcast Teams

Like read-only teams, broadcast teams allow only authorized users with the appropriate permissions to write new messages, while other users can reply to existing messages.

However, it differs from read-only teams in the following ways:

* All messages have a reply button that redirects you to the sender's direct message (DM), replying to the message as a quote.
* The team cannot be converted to a read-only again.

#### Encrypted Teams

Encrypted teams have end-to-end encryption enabled across all messages exchanged by the Team members.

## Mention Teams

With Teams, you don’t need to remember everyone’s name to communicate with a team quickly. Just mention a Team — @engineers, for instance — and all members will get notified instantly.

{% hint style="info" %}
To learn more, see [Teams: Efficiently Manage Your Remote Team on Rocket.Chat](https://www.rocket.chat/blog/teams).
{% endhint %}

{% content-ref url="create-a-new-team.md" %}
[create-a-new-team.md](create-a-new-team.md)
{% endcontent-ref %}

{% content-ref url="edit-a-team.md" %}
[edit-a-team.md](edit-a-team.md)
{% endcontent-ref %}

{% content-ref url="manage-team-members.md" %}
[manage-team-members.md](manage-team-members.md)
{% endcontent-ref %}

{% content-ref url="manage-team-channels.md" %}
[manage-team-channels.md](manage-team-channels.md)
{% endcontent-ref %}

{% content-ref url="teams-premium-plan.md" %}
[teams-premium-plan.md](teams-premium-plan.md)
{% endcontent-ref %}

From facilitating quick communication through team mentions to ensuring secure, end-to-end encrypted messages, Rocket.Chat Teams offers a versatile solution for remote team management. As we delve into the next section, we'll guide you on how to [create your own Team](create-a-new-team.md).
