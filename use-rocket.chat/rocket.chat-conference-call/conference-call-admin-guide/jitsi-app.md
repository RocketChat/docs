# Jitsi app

[Jitsi](https://jitsi.github.io/handbook/docs/architecture/) is a collection of open-source projects for voice, video conferencing, and instant messaging. Jitsi provides users with secure, scalable, and easy-to-use video conferencing platforms with state-of-the-art video quality and features. The [Jitsi Meet project](https://jitsi.org/Projects/JitsiMeet) is a bandwidth-efficient WebRTC-compatible SFU (server-based) solution from our FOSS partner, [Jitsi](https://jitsi.org).&#x20;

**Jitsi Meet** is a fully encrypted, open-source video conferencing solution that enables users to share screens and collaboratively edit documents together while video conferencing. It is browser-ready and doesn’t require a client to install the application, as you can invite users via a custom URL.&#x20;

**Key features of the Rocket.Chat - Jitsi integration**

* Directly initiate calls from DMs, channels, teams, and discussions.
* Identify the moderator of the call automatically.
* Check user names and avatars before initiating a call

Here are a few additional features for our Enterprise plan:

* Record and list call details to check users who joined the call.
* Ring users before initiating a call to provide a visual and audio indicator for them.
* A record of the call history.

## Download the Jitsi app

{% hint style="info" %}
This app can also work in a fully air-gapped environment. Follow the [Air-gapped App installation guide](../../../setup-and-configure/rocket.chat-air-gapped-deployment/air-gapped-app-installation.md) and continue with the configuration instructions below.
{% endhint %}

A [Jitsi server](https://jitsi.github.io/handbook/docs/devops-guide/) is required for this integration.

To download the **Jitsi** app on your workspace, follow these steps:

1. Go to **Administration > Apps > Marketplace**.
2. Search for the **Jitsi** app.
3. Click **Install**. Accept the terms and conditions and the required permissions.

## Set up the Jitsi app&#x20;

To set up the **Jitsi** app on your workspace, follow these steps:

1. Confirm that the app is enabled.
2. Go to the **Settings** tab and update the following fields according to your requirements:

<table><thead><tr><th width="310">Field</th><th>Description</th></tr></thead><tbody><tr><td><strong>Domain</strong></td><td>Your Jitsi domain.</td></tr><tr><td><strong>Title prefix</strong></td><td>Text that is added before the title when identifying a video conference.</td></tr><tr><td><strong>Title suffix</strong></td><td>Text that is added after the title when identifying a conference call.</td></tr><tr><td><strong>Use SSL</strong></td><td>Your Jitsi SSL.</td></tr><tr><td><strong>Chrome Extension Id</strong></td><td>Your Jitsi Chrome extension ID.</td></tr><tr><td><strong>Use Authentication Token</strong></td><td>When enabled, Rocket.Chat will generate a JWT token using the settings below.</td></tr><tr><td><strong>Application ID (iss)</strong></td><td>The app ID to use when generating authentication tokens.</td></tr><tr><td><strong>Application Secret</strong></td><td>The app secret to use when generating authentication tokens.</td></tr><tr><td><strong>Use JaaS (8x8)</strong></td><td>The provided URL is obtained from a JaaS provider like <a href="https://www.8x8.com/products/apis/video">8x8</a>.</td></tr><tr><td><strong>The private key you downloaded in BASE64 encoded format</strong></td><td>Must be in base64 format to preserve the format, use <code>base64 -i ".pk file"</code> to get the base64 string.</td></tr><tr><td><strong>8x8 API key id</strong></td><td>The API key ID you get from 8x8.</td></tr><tr><td><strong>Limit token to Jitsi Room</strong></td><td>If enabled, generated tokens will grant access only to the intended Jitsi room.</td></tr><tr><td><strong>Token Auditor</strong></td><td>The auditor's name to use when generating authentication tokens.</td></tr><tr><td><strong>Token Expiration</strong></td><td>The expiring time of the authentication tokens.</td></tr></tbody></table>

3. Click **Save changes**.

## Configure conference calls using the Jitsi app

To configure the **Jitsi** video conference on your workspace,

* Go to **Administration** > **Settings** > **Conference Call**.
* Select **Jitsi** as your **Default Provider**.
* Select the options that meet your needs and click **Save changes.**

## Initiate calls using the Jitsi app

After successfully installing and configuring the Jitsi app, you can initiate a secure Jitis call inside any Rocket.Chat room by using the slash command `/jitsi` or the call icon in the room header.

Follow the [conference-call-users-guide.md](../conference-call-users-guide.md "mention") to start using it.

{% hint style="warning" %}
When using mobile apps to join a public server, Jitsi may redirect users to a browser to [complete authentication](https://jitsi.org/blog/authentication-on-meet-jit-si/) before joining calls. Users can choose to stay on the call screen within the app while waiting for another participant to log in, and then they can continue the call via their mobile app. However, if you're using a private Jitsi server, there's no need for anyone to sign in.
{% endhint %}
