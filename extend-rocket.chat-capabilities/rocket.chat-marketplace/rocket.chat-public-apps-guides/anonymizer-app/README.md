# Anonymizer App

The Anonymizer App is a valuable tool that allows users to discreetly forward messages to [rooms](../../../../use-rocket.chat/user-guides/rooms/) in your workspace without revealing their identities. It is designed to provide a secure and anonymous way for users to express themselves, share feedback, make suggestions, and engage in discussions without the fear of reprisal.  It is essential for maintaining confidentiality in various settings, where preserving the anonymity of the message sender is crucial in your organization.

## Install the Anonymizer App

To install the **Anonymizer** App,

* Go to **Administration > Apps > Marketplace.**
* Search for the **Anonymizer** app.
* Click **Install** and agree to the needed permissions.

### Configuring the Anonymizer App&#x20;

To configure the **Anonymizer App** after installing it,

* On the **Anonymizer App Info** screen, navigate to **Settings.**
* Update the required fields:
  * **Members Room Name**: The Anonymizer app is only enabled for members of this room. Messages from users who aren't members of this room are ignored. This field is case-sensitive.
  * **Room Name**: The room where the anonymous messages are posted. This field is case-sensitive.
  * **Bot username:** The username of the bot that forwards the message. Users send a [DM](../../../../use-rocket.chat/user-guides/rooms/direct-messages/) to this bot in your workspace, which anonymously forwards the message to the configured room. The app uses _rocket.cat_ by defaul_t_.
  * **Bot Alias**: The display name of the bot. It's displayed as the sender with the forwarded message.
  * **Bot Avatar (emoji)**: The emoji that represents the bot's avatar.

{% hint style="warning" %}
If you [create a custom bot,](../../../../use-rocket.chat/workspace-administration/users/#add-new-users) ensure that it's a member of the room where the anonymous messages are posted.
{% endhint %}

Now that you've successfully set up the Anonymizer app, the next section will guide you on how to use the app in your workspace.
