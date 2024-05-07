# Pexip App

<figure><img src="../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

{% hint style="success" %}
This app can also work in a fully air-gapped environment. If your workspace is subscribed to any of Rocket.Chat's premium [plans](../../../readme/our-plans.md), follow the [Air-gapped App installation guide](../../../setup-and-configure/rocket.chat-air-gapped-deployment/air-gapped-app-installation.md), and continue with the configuration instructions below.
{% endhint %}

[Pexip](https://www.pexip.com/) is a purpose-built video communication platform that empowers organizations to transform their operations with video conferencing. Pexip’s technology provides a customized solution with data privacy and business continuity features for secure spaces. Pexip offers both self-hosted and as-a-service deployment options for enterprise video conferencing.

The integration between Rocket.Chat and Pexip enables secure and compliant communication that is ideal for organizations operating within strict regulatory requirements for internal and external communications, such as government, financial services, healthcare, and other sectors.

**Key features of the Rocket.Chat - Pexip integration**

* Initiate calls from Rocket.Chat directly without switching tools.
* Record and list call details to check users who joined the call.
* Maintain a record of the call history.

In this guide, let's take a look at the underlying architecture of the integration and the app configuration steps.

## Architecture

This integration is made possible by connecting Rocket.Chat with [**Pexip Infinity**](https://docs.pexip.com/admin/admin\_intro.htm) through its external policy API. The **Pexip** app in Rocket.Chat acts as a relay between the two platforms. Rocket.Chat users initiate a video call to a Pexip conferencing node and trigger an external policy request to Pexip. The policy server creates a single-use **Virtual Meeting Room** (VMR) and responds with the meeting parameters. This VMR is made available in the Rocket.Chat room for its duration.

{% hint style="info" %}
Ensure that the Rocket.Chat external policy server can connect to the Pexip Infinity Conferencing Nodes over HTTPS on port 443.
{% endhint %}

<figure><img src="../../../.gitbook/assets/RocketChat-Pexip.png" alt=""><figcaption><p>Rocket.Chat Pexip Architecture</p></figcaption></figure>

## Set up the Pexip app

For a complete setup, here are some requirements you need:

* A workspace subscribed to any of Rocket.Chat's premium [plans](../../../readme/our-plans.md).
* A [Pexip infinity server deployed](https://docs.pexip.com/admin/installation\_overview.htm) with:
  * [Valid certificates and intermediate certificates](https://docs.pexip.com/admin/certificate\_management.htm).
  * [A suitable network routing between Rocket.Chat and Pexip Infinity](https://docs.pexip.com/admin/port\_usage.htm)
  * Only one location for each Rocket.Chat workspace, but that location can contain multiple **Conferencing Nodes**.

### Download the Pexip app

To download the **Pexip** app, follow these steps:

1. Go to **Administration** > **Apps** > **Marketplace.**
2. Search for the **Pexip** app and click **Install**.
3. Accept the required permissions.

### Pexip app configuration

To configure the **Pexip** app on your Rocket.Chat workspace, follow these steps:

1. Confirm that the app is enabled in your workspace.
2. [Configure the Pexip server ](https://docs.pexip.com/admin/integrate\_policy.htm)with a remote policy to make service configuration requests before connecting with Rocket.Chat.
3. On the **Pexip App Info** screen, go to **Details.**
4. Copy the policy server URL (`GET policy/v1/service/configuration`) and update the Pexip settings.
5. Copy the **POST events URL** and add it to the **Events Sink** on your Pexip server.

{% hint style="info" %}
The events sink informs the workspace when a call on Pexip Infinity has ended. This way, the call message block on your workspace is updated with the appropriate call status.
{% endhint %}

6. On the **Pexip App Info** screen, go to **Settings.** Update the **Base URL** with the URL of your running Pexip server.
7. Click **Save Changes.**

Additional settings' details are as follows:

<table><thead><tr><th width="279">Field</th><th>Description</th></tr></thead><tbody><tr><td><strong>Base URL</strong></td><td>The URL where Pexip is running.</td></tr><tr><td><strong>API Username</strong></td><td>The API username to use for authenticated calls. If specified, Rocket.Chat will ignore any API calls that do not include this username and password.</td></tr><tr><td><strong>API Password</strong></td><td>The password to use along with the <strong>API Username</strong>.</td></tr><tr><td><strong>Theme Name</strong></td><td>Name of the Pexip theme to be used on Rocket.Chat calls.</td></tr><tr><td><strong>Lock Conferences</strong></td><td>Whether conferences should be locked on creation. When enabled, call owners must accept each participant.</td></tr><tr><td><strong>Allow multiple concurrent calls on the same room</strong></td><td>Enable to allow the creation of multiple conference calls in the same room. When disacallsbled, Rocket.Chat will only create one Pexip Conference per room and re-use it for every new call. Users can then connect to the meeting using the room's internal name.</td></tr><tr><td><strong>Participant name overlay text</strong></td><td>Enable to allow participant names or aliases to show at the bottom of a video in a conference call.</td></tr><tr><td><strong>Meeting layout</strong></td><td>Select the meeting layout from the drop-down menu. This determines how the participants are displayed in the meeting room. This does not limit the total number of call participants.</td></tr><tr><td><strong>Static Host Pin</strong></td><td>A pin code to identify meeting hosts. Leave empty to generate a new unique pin for every meeting.</td></tr><tr><td><strong>Static Guest Pin</strong></td><td>Set a pin code to grant meeting access to guests. Leave empty to generate a new unique pin for every meeting.</td></tr></tbody></table>

### Configure conference calls using the Pexip app

To configure the Pexip video conference on your workspace, follow these steps:

1. Go to **Administration > Settings > Conference Call.**
2. Select Pexip as your **Default Provider**.
3. Select the options that meet your needs and click **Save Changes.**

The Pexip app is successfully configured on your server. Follow the [conference call user's guide](../conference-call-users-guide.md) to start using it.

## Initiate calls using the Pexip app

After successfully installing and configuring the Pexip app, you can initiate a secure Pexip call inside any Rocket.Chat room by using the slash command `/pexip` or the call icon in the room header.

When you use the `/pexip` command, a new Pexip Virtual Meeting Room (VMR) is created, and a link is made available in the room for users to use and **Join call**. On joining the call, users are prompted to provide their details and grant permission for camera and microphone usage. The list of users joining the VMR can also be seen within the Rocket.Chat room.
