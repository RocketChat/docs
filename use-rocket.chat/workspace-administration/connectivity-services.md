# Registration

Rocket.Chat Registration gives you access to connect your workplace to [Rocket.Chat Cloud](https://cloud.rocket.chat/).

To access this menu:

Navigate to **Administration** > **Workspace** > **Registration** for workspaces above Rocket.Chat `6.0` or **Administration** > **Workspace** > **Connectivity Services** for workspaces below `6.0`.

## Introduction

Connecting your workplace to the cloud gives you access to interact with services like

* [Mobile push notifications gateway](../rocket.chat-mobile/push-notifications/)
* [Apps Marketplace](https://www.rocket.chat/marketplace)
* Live Chat Omnichannel proxy
* OAuth proxy for social network
* Automatic license synchronization

Below are the steps required to connect and synchronize a Rocket.Chat self-hosted workspace to Rocket.Chat Cloud infrastructure at [cloud.rocket.chat](https://cloud.rocket.chat).

{% hint style="info" %}
The steps below are required only for self-managed instances. Rocket.Chat SaaS workspaces are provisioned and connected to the Cloud infrastructure.
{% endhint %}

{% hint style="info" %}
To connect your workspace to our Rocket.Chat Cloud, you must be running a supported version. At least `v3.x.`
{% endhint %}

## Registration steps

The registration steps are different depending on the version of Rocket.Chat your workspace is running on.

1. [Workspaces as from Rocket.Chat 6.x](connectivity-services.md#workspaces-as-from-rocket.chat-6.x)
2. [Workspaces below Rocket.Chat 6.x](connectivity-services.md#workspaces-below-rocket.chat-6.x)

### Workspaces as from Rocket.Chat 6.x

When [deploying ](broken-reference)a self-managed Rocket.Chat `>=6.x` workspace you are automatically required to register your workspace upon completing the [setup-wizard.md](settings/setup-wizard.md "mention").

With your workspace setup completed, sync it to Rocket.Chat Cloud as an Administrator by:

* Navigate to **Administration** > **Workspace** > **Registration** > **Manage.**
* Click on **Sync** to synchronize the workspace.

#### Disconnect workspace from Rocket.Chat Cloud

To disconnect your workspace from Rocket.Chat Cloud:

* Go to **Administration** > **Workspace** > **Registration** > **Manage.**
* Click **Disconnect** and **Disconnect workspace**.

### Workspaces below Rocket.Chat 6.x

#### **If you don't have a cloud account yet:**

* Go to [cloud.rocket.chat](https://cloud.rocket.chat)
* Hit **Create account**
* Fill up the registration form and hit **Next.** A verification email is sent to your provided email address.
* Click to open the verification link. You are redirected to cloud.rocket.chat where you get logged in to your Cloud console.&#x20;
* Under **Workspaces** on your Rocket.Chat Cloud portal, click  **Register self-manage** by the top right to register your self-hosted workspace.
* Select the workspace type from the modal displayed.
  * **Continue Online with Cloud Services**: Rocket.Chat server that has a connection to the internet (connected to the outside)
  * **Continue Offline**: Special cases where Rocket.Chat workspace is air-gapped.

{% hint style="info" %}
See the guide on how to register an offline workspace.[air-gapped-workspace-configuration.md](../../setup-and-configure/rocket.chat-air-gapped-deployment/air-gapped-workspace-configuration.md "mention")
{% endhint %}

{% hint style="info" %}
In the following section, we are going to cover the option for **Internet Access**.
{% endhint %}

#### Online Registration

A registration token is presented under the **Online** option. Copy the token, as this will be used to register your Rocket.Chat server.

* On your Rocket.Chat workspace, navigate to **Administration** > **Workspace** > **Connectivity Services.**
* Click on **Register workspace** and enter the _token_ copied from Rocket.Chat Cloud account in the **Token** field
* Hit **Connect.** This sets the connection between your Rocket.Chat workspace and Rocket.Chat Cloud console when successful.
* Click on **Sync** to synchronize your workspace.

The newly registered workspace is listed in the **Workspace** section at [cloud.rocket.chat](https://cloud.rocket.chat)
