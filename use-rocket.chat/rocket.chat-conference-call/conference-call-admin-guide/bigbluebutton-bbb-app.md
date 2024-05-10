# BigBlueButton (BBB) app

[BigBlueButton](https://bigbluebutton.org/) is an open-source web collaboration software used by education organizations for online learning and training. **BigBlueButton** enables users to conduct web-conferencing and share documents, audio, and video files.&#x20;

The software’s **whiteboard** feature allows presenters to mark valuable topics in the presentation. In addition, its **polling** feature engages learners and helps the presenter to receive feedback. BigBlueButton’s **desktop sharing** feature extends beyond slides and allows moderators to share their screens with the audience, enabling a better understanding of topics.

**Key features of the Rocket.Chat - BigBlueButton integration**

* Real-time communication with integrated chat.
* Initiate calls from Rocket.Chat directly without having to switch tools.
* Check user names and avatars before initiating calls.
* End the call automatically.

Here are a few additional features for our Enterprise plan:

* Record and list call details to check users who joined the call.
* Ring users before initiating a call.
* A record of the call history.

## Download the BigBlueButton app

{% hint style="info" %}
A [BigBlueButton server](https://docs.bigbluebutton.org/administration/install/) is required for this integration.
{% endhint %}

To download the BigBlueButton app, follow these steps:

1. Go to **Administration > Apps > Marketplace**.
2. Search for the **BigBlueButton** app.
3. Click **Install**. Accept the terms and conditions and the required permissions.

## Set up the BBB app&#x20;

To set up the **BBB** app on your workspace, follow these steps:

1. Confirm that the app is enabled.
2. Run `sudo bbb-conf --secret` on the BBB server. It gives you a **URL** and a **Secret**. See [BBB's `bbb-conf tool` documentation](https://docs.bigbluebutton.org/administration/bbb-conf/).
3. Use this **URL** and **Shared Secret** in the **Settings** tab of the app to connect to BBB.
4. **Register Hook**: Enable this option to register a webhook on BBB to close conference calls automatically when they end. It requires the [`bbb-webhook`](https://docs.bigbluebutton.org/development/webhooks/) package.&#x20;
5. **Custom parameter for bbb-client**: Add additional parameters to the BBB call URL. Enter the keys and values in the JSON format. The parameter names must start with `userdata-bbb`. See [Application parameters](https://docs.bigbluebutton.org/administration/customize/#application-parameters) for details.
6. Click **Save changes**.

## Configure conference calls using the BBB **app**&#x20;

To configure the **BBB** video conference on your workspace, follow these steps:

1. Go to **Administration > Settings > Conference Call**.
2. Select **BigBlueButton** as your **Default Provider**.
3. Enable or disable the call option in DMs, public channels, private channels, and teams as per your needs.
4. Click **Save changes.**

## Initiate calls using the BBB app

The BigBlueButton app is successfully configured on your server. Follow the [conference-call-users-guide.md](../conference-call-users-guide.md "mention") to start using it.
