---
description: Install and use the Zoom App.
---

# Zoom

The Zoom app allows you to generate zoom meeting links from your Rocket.Chat workspace.&#x20;

## Install Zoom App

### Prerequisite

* A Zoom [Pro account](https://zoom.us/pricing) for other users to create Zoom links.
* These users are added to your Zoom account, and their emails must be the same on Rocket.Chat and Zoom.

To install the Zoom App,

* Navigate to **Administration > Apps > Marketplace.**
* Search for the **Zoom** app.
* Click **Install**

## Create JWT App at Zoom Marketplace

To create a new JWT app,

* Sign in to  [Zoom Marketplace](https://marketplace.zoom.us/).
* Navigate to **Develop > Build App**.
* Select **JWT** and click **Create**.
* Enter a name for the app and click **Create.**
* Enter your app's Company Name and Developer Contact Information. Click **Continue.**
* Copy the app's **API Key** and **API Secret** from the **App Credentials** tab.

## Configure the Zoom App

To configure the Zoom App,

* On the **Zoom App Info** screen, navigate to **Settings.**
* Paste the **API Key** and **API Secret** from the **JWT App** on the marketplace**.**

## Using the Zoom App

To use the zoom app in a [room](../../../use-rocket.chat/workspace-administration/rooms.md),

* Run the slash command `/zoom start` to generate a new Zoom meeting link. It generates a Zoom meeting link, and anyone in that room can click the link to join the meeting.
* You can also run `/zoom start <topic>` to add a title to the meeting. For example, `/zoom start < Designers Daily Standup>`.
