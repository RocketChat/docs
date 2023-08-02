---
description: Learn how to use Google Translate feature with your Rocket.Chat workspace
---

# Google Translate Integration&#x20;

In the era of cloud computing, the integration of cloud services into communication platforms is essential. Rocket.Chat has adopted this trend, particularly by incorporating Google Cloud features. This document will primarily focus on how Rocket.Chat leverages the Google Auto Translate feature, a significant aspect of Google Cloud services.

**Google Auto Translate**: Rocket.Chat leverages Google Cloud's Auto Translate feature to enhance communication within its platform. This feature allows every communication received on a channel to be translated using the Google translation engine. To use this feature, a Google Translate API key is required. The process of obtaining this key involves creating a project on the Google Cloud Console, enabling the Cloud Translation API, and creating the API key under credentials. The [official Google API documentation](https://cloud.google.com/translate/pricing) explains how to get and use a Google Translate API key.

**Getting the key**: To get the Google Translate API Key,

* Go to [Google Cloud Console](http://cloud.google.com/console/).
* Create a Project and select it.
* On the navigation menu, go to **APIs & Services >** **Dashboard.**
* Click on **ENABLE APIS AND SERVICES** and search for Cloud Translation API.
* Go to **Credentials.**
* Click **Create credentials.**
* Select **API key.**

**Configuration**: It's time to configure auto-translate in your workspace now that you have your API key.t.

* Go to **Administration > Workspace > Settings > Message > Auto-Translate**
* Enable **Auto-Translate**.
* Select **Google** as the **Service Provider**.

{% hint style="info" %}
Only users with `auto-translate` [permission](../../use-rocket.chat/workspace-administration/permissions/) can use this feature.
{% endhint %}

**Enabling Auto-Translate on a Channel**: Auto-Translate can be enabled on a per-channel basis. When enabled, any messages sent in a language that Google Translate supports will be translated into the user's chosen language. The translated messages are only visible to the user who enabled Auto Translation, while the original, untranslated messages are displayed for users who have not enabled this feature.

To activate Auto-Translate in a room,

* Click the **kebab menu** in the room header.
* Select **Auto-Translate**.
* Enable **Automatic Translation** and select your desired language.
* An **auto-translate icon** ![](../../.gitbook/assets/auto-translate.png) is displayed beside the room name to indicate that the feature is active.

To translate a message,

* Hover over the message and click the **kebab menu.**
* Select **Translate**.

Rocket.Chat's integration with Auto Translate feature significantly enhances the platform's communication capabilities. By leveraging Google's powerful translation engine, Rocket.Chat ensures that language barriers do not hinder communication within its platform.
