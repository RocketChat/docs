# Zapier App

The Rocket.Chat Zapier App provides integration between Rocket.Chat and [Zapier](https://zapier.com/), a popular automation tool that allows users to automate tasks and workflows by creating triggers and actions.

The Zapier app makes it possible for Rocket.Chat and many other external services and tools to be connected thus providing several benefits:

* **Automation of Tasks**: The app allows users to automate tasks and workflows by creating triggers and actions, reducing the need for manual intervention and increasing efficiency.
* **Integration with Other Applications**: Integrates with other applications and services, such as project management tools, social media platforms, email services, etc.
* **Streamlining Workflows**: The app streamlines workflows by providing a simple and intuitive interface for creating triggers and actions, making it easy to customize the app to meet specific needs and requirements.
* **Improved Productivity and Real-Time Communication**: Reduces the time and effort required to perform routine tasks and provides notifications and alerts when specific events occur. allowing teams to respond quickly to changing circumstances.

See the guide below on installing the Zapier app on your workspace as an Administrator.

{% content-ref url="install-zapier-app.md" %}
[install-zapier-app.md](install-zapier-app.md)
{% endcontent-ref %}

## Rocket.Chat Zapier Actions and Triggers

Rocket.Chat Zapier Actions and Triggers are events that are triggered from and within Rocket.Chat when an action occurs.\
Below is a list of available Triggers and Actions.

### Rocket.Chat Zapier Triggers

| Trigger                                 | Description                                                      |
| --------------------------------------- | ---------------------------------------------------------------- |
| `New channel`                           | Triggers when a new Channel is created.                          |
| `New message posted anywhere`           | Triggers when a new message is posted to any public Channel.     |
| `New message posted on public channel`  | Triggers when a message is posted to a specific public Channel.  |
| `New message posted on private channel` | Triggers when a message is posted to a specific private Channel. |
| `Message pinned anywhere`               | Triggers when a message is pinned in any public room.            |
| `New private channel`                   | Triggers when a new private Channel is created.                  |
| `Starred message anywhere`              | Triggers when a message is starred in any public room.           |
| `New user`                              | Triggers when a new user is created.                             |
| `Mentioned on public channel`           | Triggers when a user is mentioned on a public channel.           |

### Rocket.Chat Zapier Actions

| Action                         | Description                                                                                                             |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `Create channel`               | Creates a new Channel.                                                                                                  |
| `Invite user to channel`       | Invites an existing user to an existing public channel. You must be a member of the channel in order to invite someone. |
| `Create private channel`       | Creates a new private channel.                                                                                          |
| `Send channel message`         | Post a new message in a channel.                                                                                        |
| `Send direct message`          | Sends a direct message to a user.                                                                                       |
| `Send private channel message` | Sends a message to a specific private channel.                                                                          |
| `Add reminder`                 | Adds a new reminder.                                                                                                    |
| `Set status`                   | Sets user status.                                                                                                       |
| `Find channel`                 | Searches for a channel. It creates a new channel if none is found.                                                      |
| `Find private channel`         | Searches the workspace for a private channel. Creates a private channel if none is found.                               |
| `Find user by username`        | Finds a user by their username.                                                                                         |

See how to use the Zapier app and some common examples below.

{% content-ref url="using-zapier-app.md" %}
[using-zapier-app.md](using-zapier-app.md)
{% endcontent-ref %}
