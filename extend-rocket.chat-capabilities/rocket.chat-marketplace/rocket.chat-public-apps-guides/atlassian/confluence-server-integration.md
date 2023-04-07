---
description: Atlassian Confluence Server Integration
---

# Confluence Server

{% hint style="success" %}
This app can also work in a fully air-gapped environment. Follow the [air-gapped-app-installation.md](../../../../setup-and-configure/rocket.chat-air-gapped-deployment/air-gapped-app-installation.md "mention") guide and continue with the configuration instructions below.
{% endhint %}

## Install Confluence Server App

To install the Confluence Server App,

* Navigate to **Administration > Apps > Marketplace.**
* Search for the **Confluence Server** **Integration** app.
* Click **Install.**
* **Agree** to the permissions to confirm the installation.

## Configure Confluence Server App

{% hint style="info" %}
Confirm that you have the  [Rocket.Chat for Confluence](https://marketplace.atlassian.com/apps/1220180/rocket-chat-for-confluence) add-on installed on your Confluence server.
{% endhint %}

To configure the Confluence Server App,

* Navigate to any [room ](../../../../use-rocket.chat/workspace-administration/rooms.md)and run the slash command  `/confluence-server install CONFLUENCE_BASE_URL USER PASSWORD`, where:
  * **CONFLUENCE\_BASE\_URL:** The base URL of your Confluence server. Navigate to **Confluence administration** > **General Configuration.**
  * **USER:** The username of a user with administrative privileges in your Confluence server.
  * **PASSWORD:** The password of the user mentioned above.
* Now your Rocket.Chat workspace is connected to the Confluence server instance.
* Add the **@rocket.cat user** to the room and assign permission to write messages.

{% hint style="info" %}
We strongly advise against using your Confluence user account during installation. Create a fresh user with administrative privileges. After installation, you can revoke those privileges from the user.
{% endhint %}

## Using Confluence App

After configuring the Confluence App, connect your Confluence Space to a room and receive notification messages when a page is created or updated in the Space.

To connect your Confluence Space to a [room](../../../../use-rocket.chat/workspace-administration/rooms.md),&#x20;

* Run the slash command `/confluence-server connect`. A list of available Spaces you can connect to is displayed.&#x20;
* Choose one or more spaces and click **Connect.**

{% hint style="info" %}
You can connect many Spaces to a room and a Space to multiple rooms.
{% endhint %}
