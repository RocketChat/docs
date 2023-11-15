# Queue Types (Routing Algorithm)

Rocket.Chat offers diverse types of queues with unique routing algorithms to efficiently manage and distribute incoming Omnichannel conversations in your workspace. They define the routing methods and direct conversations to the appropriate [agents](../../../omnichannel/agents.md).&#x20;

{% hint style="info" %}
You can manage omnichannel queues in the [#routing](./#routing "mention") settings of your workspace.
{% endhint %}

## Type of Omnichannel Queues

Here are various types of queues you can set for routing in your Omnichannel workspace:

**Auto Selection**

In auto-selection, new incoming chats are directed to available agents with the lowest count. If multiple agents share the same count, the chat is assigned to the agent who is first in the order.&#x20;

For example, when a new chat arrives, it's assigned to the available agent with the lowest count. The next chat goes to the next available agent with lowest count in the queue. Once all available agents have the same count, subsequent incoming chats are sequentially assigned to the same agents, starting with the agent who was first assigned a chat. This ensures an equitable distribution of workload and reduces wait times for customers.



**Manual Selection**

When manual selection is active, all agents have a **Queued Chats** section where new incoming chats are displayed. When the agent clicks on a chat, they can preview the chat, see the messages sent, and decide whether to take up the chat or not. If the chat is taken, it is removed from **Queued Chats** for all agents.

{% hint style="info" %}
Department-specific chats is displayed in **Queued Chats** only for agents in that department.&#x20;
{% endhint %}

**External Service**

To integrate your custom agent routing rule into Live Chat, use an **External Service**. Once it's configured as the Live Chat [routing method](./#routing), update the **External Queue Service URL** and **Secret Token** in the [#routing](./#routing "mention") settings.

Rocket.Chat sends a `GET` request to the `External Queue Service URL` and the `Secret Token` is sent as a header `X-RocketChat-Secret-Token` for you to validate if the request came from the Rocket.Chat.  If Rocket.Chat receives a response status other than `200`, it will retry up to 10 times until a valid response is received.

After submitting the GET request, Live Chat expects a JSON response in the following format:

```json
{
    "_id": "CbbQkRAifP6HtDLSr",
    "username": "valid.username"
}
```

Once the valid response is received in the above format, Live Chat verifies that the provided username represents a valid Live Chat [agent](../../../omnichannel/agents.md), proceeding with the standard process flow.



**Load Balancing**

<figure><img src="../../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

Load balancing functions as an auto-assignment algorithm that takes into account both the agent's online status and the duration they have been actively engaged in chats. For example, if an agent briefly steps away and returns, the load-balancing algorithm will assign them more chats than a colleague who has been consistently active. This approach ensures a balanced distribution of chat workload among agents.



**Load Rotation**&#x20;

<figure><img src="../../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

Chats are assigned to available agents without considering their previous chat's history or the number of open rooms they have. Load rotation is a mix between the **Load Balancing** and **Auto Selection** queue type.

Workspace administrators can now leverage the various type of queues outlined to achieve dynamic load balancing, strategic auto-selection, and effective chat handling, tailoring the omnichannel experience to their specific organizational needs to enhance productivity.
