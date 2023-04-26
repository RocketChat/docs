# Microsoft Teams Bridge

Microsoft Teams Bridge is an app that connects collaborators across Rocket.Chat and Microsoft Teams. It acts as a bridge between **Teams** and **Rocket.Chat** to enable cross-platform messaging among users in an organization. This way, users can send and receive messages from their workspace or Teams account.

{% hint style="info" %}
It supports other message formats, such as emojis, files, and links. Furthermore, operations like editing or deleting a message are also supported.
{% endhint %}

## Setup Microsoft Teams Bridge

{% hint style="success" %}
The **Microsoft Teams Bridge app** is only available for workspaces on version `6.1` and above.
{% endhint %}

As an administrator, ensure you have access to the Rocket.Chat admin account and Teams admin account for your organization before installing.

To install **Microsoft Teams Bridge**,

* Go to **Administration > Apps > Marketplace.**
* Search for the **Microsoft Teams Bridge** app.
* Click **Install.** Confirm that the app is enabled.
* On the **Microsoft Teams Bridge** **App Info** screen, navigate to **Details > API and** copy the `GET auth endpoint URL`.

{% hint style="info" %}
If it's a localhost URL, exposing the localhost port to the internet requires a tunnel service like Ngrok.
{% endhint %}

### Set up an Azure Active Directory App

To set up an Azure Active Directory App for your organization,

* Login to[ Microsoft Azure Portal ](https://portal.azure.com/)with your organization's Teams admin account.
* Find and click **Azure Active Directory**.
* Click **Add**. Then, select **App registration**.
* Give the app a name. Select **Accounts in this organizational directory only** as the **Supported account type**.
* Select **Web** as the **Redirect URI platform.** Paste the `GET auth endpoint URL` you copied from the **Microsoft Teams Bridge App Info** as the value.
* Click **Register**. Copy the **Application (client) ID** and **Directory (tenant) ID** shown on the overview page.
* Click **Add a certificate or secret > New Client Secret.** Fill in the description and expiration timeline. Then, click **Add**.
* After the client secret is created, copy the **Client Secret Value**.
* Navigate to **API permissions**. Select **Add a permission**, add the set of required permissions, and click **Grant admin consent for org**. The table below outlines the required permissions you'll need to set.

| Name                                     | Type        | Description                                                                                | Requires Admin Consent |
| ---------------------------------------- | ----------- | ------------------------------------------------------------------------------------------ | ---------------------- |
| ChannelMessage.Read.All                  | Application | Read all channel messages                                                                  | Yes                    |
| ChannelMessage.Send                      | Delegated   | Send channel messages                                                                      | No                     |
| ChannelMessage.UpdatePolicyViolation.All | Application | Flag channel messages for violating policy                                                 | Yes                    |
| Chat.Create                              | Delegated   | Create chats                                                                               | No                     |
| Chat.Create                              | Application | Create chats                                                                               | Yes                    |
| Chat.Read.All                            | Application | Read all chat messages                                                                     | Yes                    |
| Chat.ReadBasic                           | Delegated   | Read names and members of user chat threads                                                | No                     |
| Chat.ReadBasic.All                       | Application | Read names and members of all chat threads                                                 | Yes                    |
| Chat.ReadWrite                           | Delegated   | Read and write user chat messages                                                          | No                     |
| Chat.ReadWrite.All                       | Application | Read and write all chat messages                                                           | Yes                    |
| ChatMember.Read                          | Delegated   | Read the members of chats                                                                  | Yes                    |
| ChatMember.Read.All                      | Application | Read the members of all chats                                                              | Yes                    |
| ChatMember.Read.WhereInstalled           | Application | Read the members of all chats where the associated Teams application is installed.         | Yes                    |
| ChatMember.ReadWrite                     | Delegated   | Add and remove members from chats                                                          | Yes                    |
| ChatMember.ReadWrite.All                 | Application | Add and remove members from all chats                                                      | Yes                    |
| ChatMember.ReadWrite.WhereInstalled      | Application | Add and remove members from all chats where the associated Teams application is installed. | Yes                    |
| ChatMessage.Read                         | Delegated   | Read user chat messages                                                                    | No                     |
| ChatMessage.Read.All                     | Application | Read all chat messages                                                                     | Yes                    |
| ChatMessage.Send                         | Delegated   | Send user chat messages                                                                    | No                     |
| email                                    | Delegated   | View users' email address                                                                  | No                     |
| Files.ReadWrite                          | Delegated   | Have full access to user files                                                             | No                     |
| Group.ReadWrite.All                      | Delegated   | Read and write all groups                                                                  | Yes                    |
| offline\_access                          | Delegated   | Maintain access to data you have given it access to                                        | No                     |
| openid                                   | Delegated   | Sign users in                                                                              | No                     |
| profile                                  | Delegated   | View users' basic profile                                                                  | No                     |
| ServiceMessage.Read.All                  | Application | Read service messages                                                                      | Yes                    |
| User.Read                                | Delegated   | Sign in and read user profile                                                              | No                     |
| User.Read.All                            | Delegated   | Read all users' full profiles                                                              | Yes                    |
| User.Read.All                            | Application | Read all users' full profiles                                                              | Yes                    |
| User.ReadWrite.All                       | Application | Read and write all users' full profiles                                                    | Yes                    |

### Configure Microsoft Teams Bridge

* Navigate to **Microsoft Teams Bridge** **App Info > Settings**.
* Update the **Directory (tenant) ID, Application (client) ID**, and **Client Secret** with the values you copied earlier. Then, click **Save Changes**.

{% hint style="info" %}
Ensure you use the correct credentials and set the appropriate API permissions on the Azure Active Directory.
{% endhint %}

## API Limitation

With the Microsoft Teams Bridge, you can exchange up to 500 messages per month across [Rocket.Chat](https://rocket.chat/) and MS Teams at no additional cost. If you surpass this limit, you can no longer exchange messages between [Rocket.Chat](https://rocket.chat/) and Teams.

If you intend to exchange more than 500 messages, here are some important details to note:

* Check if the API is metered. Microsoft Teams has free and metered APIs that are billed based on usage. Know the metering unit to estimate API costs. There's a limit of 500 messages per month. Exceeding this limit means Teams messages won't show in Rocket.Chat, but it can still be sent.

{% hint style="info" %}
Read the [documentation ](https://learn.microsoft.com/en-us/graph/teams-licenses)to learn more about the pricing models and licensing requirements.
{% endhint %}

* To monitor message count, set up an Azure budget to track messages against the threshold. Configure alerts to ensure you stay within the 500 messages monthly spending limit. For example, your organizational spending limit is 500 messages per month; email notifications are sent if the budget threshold is exceeded.

{% hint style="info" %}
See the official guide to understand how to [create and manage](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets) Azure budgets.
{% endhint %}

> This app was developed in partnership with Yuqing Bian during Google Summer of Code 2022.
