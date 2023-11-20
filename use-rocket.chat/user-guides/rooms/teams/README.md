# Teams

A **Team** in Rocket.Chat is essentially a collection of [channels](../channels/), each serving a specific purpose or project. For instance, consider a scenario where your workspace includes a Team designated for the core members of your organization. This Team encompasses a variety of channels tailored to the needs and roles of these core members. The primary advantage here is the automation of access privileges: when a new core member joins the Team, they are instantly granted access to all associated channels. This eliminates the need for manually adding them to each channel, thereby enhancing efficiency and reducing administrative overhead

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
To learn more, see [Teams: Efficiently Manage Your Remote Team on Rocket.Chat](https://www.rocket.chat/blog/teams)
{% endhint %}

In summary, the Team feature in Rocket.Chat represents a significant step towards more efficient and cohesive team management. By centralizing access to multiple channels under a single Team umbrella, it simplifies the process of managing group memberships and ensures seamless integration of new members into the organizational workflow.&#x20;
