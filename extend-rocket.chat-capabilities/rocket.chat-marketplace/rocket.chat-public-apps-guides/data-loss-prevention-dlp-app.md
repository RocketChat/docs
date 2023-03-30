# Data Loss Prevention (DLP) App

<figure><img src="../../../.gitbook/assets/2021-06-10_22-31-38 (3) (3) (3) (3) (3) (3) (3) (3) (3) (2) (3) (1) (1) (1) (1) (2) (1) (1) (1) (1) (25).jpg" alt=""><figcaption></figcaption></figure>

Data loss prevention (DLP) is a security mechanism that helps prevent sensitive data from being unduly shared, misused, lost, or accessed by unauthorized users. The Data Loss Prevention App is free for [Enterprise ](../../../use-rocket.chat/workspace-administration/settings/enterprise.md)workspaces and works best with the most recent version of Rocket.Chat.

{% hint style="success" %}
This app can also work in a fully air-gapped environment. Follow the [air-gapped-app-installation.md](../../../setup-and-configure/rocket.chat-air-gapped-deployment/air-gapped-app-installation.md "mention") guide and continue with the configuration instructions below.
{% endhint %}

## Installing the Data Loss Prevention App

To install the Data Loss Prevention App,

* Navigate to **Administration > Workspace > Apps > Marketplace.**
* Search for the **Data Loss Protection** app.
* Click **Install.**

## Configuring the Data Loss Prevention App

After installing the app, you need to configure the rule set for its functionality.

To configure DLP,

* On the **DLP App Info** screen, navigate to **Settings.**
* Configure the following settings as needed:
  * **Rules for Blacklisting message**: Takes in an array of regular expressions defining the rules. Add each Regular Expression on a new line.
  * **Moderator Channel**: Specify the channel to which all blacklisted messages will be forwarded. From there, the [Channel Moderators](../../../setup-and-configure/roles-in-rocket.chat#rocket.chat-user-roles) can either `Approve` or `Reject` the message. e.g. `general`
  * **Content control type**: Choose to ignore channels or select targeted channels to monitor.
  * **Channels**: List channels separated by commas to apply the **Channel Filter** rule.
  * **Censor only Sensitive Information**: If enabled, only the sensitive information is replaced by multiple hashtags (######)
  * **Custom Blacklisted Message title**: Set the title of a temporal message that replaces the blacklisted message pending when it gets approved by the moderator.
  * **Custom Pending approval message**: Set the temporal message that replaces the blacklisted message pending when it gets approved by the moderator. Click **More info** button under the blacklisted message in the room to see it.
  * **Custom Rejected Message**: This message is displayed in place of the blacklisted message when a moderator rejects a blacklisted message.
* Click **Save Changes**. The Data Loss Prevention App is ready and functional on your workspace.

{% hint style="info" %}
Read the [data-loss-prevention-user-guide.md](../../../use-rocket.chat/user-guides/security-bundle/data-loss-prevention-user-guide.md "mention") to know more about using the DLP App.
{% endhint %}

Through DLP features, admins can create a list of regular expressions to be monitored in Rocket.Chat, and you can apply it to any conversation. Once a regular expression is detected, it appears blurred in the room where it was originally written. The original message is forwarded to a predefined channel for auditing flow, where a moderator can approve or reject its content. Rooms can have more than one moderator. It’s also possible to select the rooms to apply the DLP app. If you have channels on your workspace where sensitive information is frequently shared or data leak is more likely to happen, e.g., the finance team channel, you can restrict this channel.
