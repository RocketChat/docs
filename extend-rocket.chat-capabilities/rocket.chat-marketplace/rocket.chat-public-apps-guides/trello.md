# Trello

Trello App allows you to receive notifications about your Trello activities, including creating cards and comments, completing checklist items and uploading attachments, etc.

## Install the Trello App

### Prerequisites

* A publicly accessible Rocket.Chat server
* A Trello account with active boards.

To install the Trello Rocket.Chat App,

* Go to **Administration > Apps > Marketplace.**
* Search for the **Trello** app.
* Click **Install** and accept the needed permissions. A direct message is then received from the `trello.bot` to assist you with setting up the app.

## Configure Trello App

To configure the Trello App,

* Go to the `trello.bot` chat. Run the slash command `/trello setup` in the chatbox. It displays a set of instructions to follow for setting up Trello.
* Log in to your [Trello](https://trello.com/) account. Go to [Power-Up Admin Portal](https://trello.com/power-ups/admin/).
* Create a new or select an existing Power-Up. Then, navigate to **API key**.
* Copy the server's URL displayed by the `trello.bot` and add it to the **Allowed Origins** field of your API key.
* Now, copy the `API Key` and `OAuth Secret` from the Trello page. You need it to configure Trello in Rocket.Chat.
* On the **Trello App Info** screen, navigate to **Settings.**
* Paste the **Trello API key** and **Trello API secret** from the Trello App.
* Next, you authorize your Trello account to connect and interact with the app.

To authorize your Trello account,

* Go to the `trello.bot` chat. Run the slash command `/trello authorize`. Click the **Authenticate** button.

{% hint style="info" %}
All users must authorize their Trello account before using Trello in the workspace.
{% endhint %}

* Click **Allow** in the prompt to grant all the permissions needed to run the Trello App integration smoothly.
* If authentication is successful, you get a confirmation message from the `trello.bot`. Now, your Trello app is ready to use.
