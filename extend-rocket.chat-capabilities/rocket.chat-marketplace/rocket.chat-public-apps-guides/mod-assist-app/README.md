# Mod Assist App

<figure><img src="../../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

Content moderation is vital for maintaining a safe, inclusive digital workspace. It serves to uphold user safety by filtering harmful content like spam and hate speech, preserving brand reputation as a secure platform, and complying with legal regulations on content removal. Manual moderation is increasingly impractical due to the volume of conversations and the psychological risks to human moderators.&#x20;

The Mod Assist app automates this process, offering an efficient, scalable solution for content moderation. It enhances digital workspace security by automating key moderation tasks. It detects harmful content based on predefined rules, flags and reports these messages for moderator review, and enriches reports with contextual details like sender information, room location, and timestamps. This streamlines the moderation process and provides comprehensive data for informed decision-making.

## Install Mod Assist App

{% hint style="warning" %}
The app will only be available to workspaces **running version 6.3.0 and higher.**&#x20;
{% endhint %}

To install the Mod Assist app,

* Go to **Administration > Apps > Marketplace**.
* Search for the **Mod Assist** app and click on it.
* Click **Install** and accept the needed permissions to install.&#x20;

### Get an OpenAI API Key

The **Mod Assist app** requires [API keys](https://platform.openai.com/account/api-keys) to authenticate your OpenAI account on Rocket.Chat and make requests.

{% hint style="warning" %}
Your OpenAI account must have active billing with credits. For a more detailed guide on billing, please refer to [OpenAI's prepaid billing](https://help.openai.com/en/articles/8264644-what-is-prepaid-billing).
{% endhint %}

To [get your OpenAI API key](https://platform.openai.com/account/api-keys),&#x20;

* **Log into** your[ OpenAI account](https://platform.openai.com/) and click on your **profile icon** at the top-right corner of the screen.
* From the profile dropdown, select **View API Keys**.
* If you don't have any API keys, click **+ Create new secret key** button to create a new API key.
* **Copy the API key** to your clipboard. You'll need it for configuring the app in your workspace.

### Configuring the Mod Assist App&#x20;

To configure the **Mod Assist App** after installing it,

* On the **Mod Assist** **App Info** screen, navigate to **Settings.**
* Update the required fields:
  * **AI Moderated Rooms:** Select the [rooms](../../../../use-rocket.chat/user-guides/rooms/) where the moderation app should automatically screen for inappropriate content.
  * **Exclude Roles:** Select and whitelist trusted [roles](../../../../setup-and-configure/roles-in-rocket.chat.md) whose messages can bypass moderation. It does not support custom roles.
  * **Moderate accounts created in the past (number in days):** This setting enables the app to moderate messages from accounts created within a specific number of days.  For example, if you set a 30-day period, the app will moderate the message if the sender's account was created within the last 30 days. Messages from accounts created prior to this timeframe will bypass moderation.
  * **OpenAI API Key:**  Paste the [Open AI API key](./#how-to-get-an-api-key) you copied earlier.
  * **Moderation Categories:** Select the types of inappropriate content you want the app to moderate. Natural language processing techniques are used to detect all types of inappropriate content such as profanity, toxicity, etc.&#x20;
    * **Toxicity:** Any message that is harsh, disrespectful, negative, malicious, harmful, or hateful is toxic in nature.&#x20;
    * **Profanity:** Any message where the language is bad, abusive, foul, vulgar, or obscene is deemed as profanity type.&#x20;
    * **Financial Risk:** Scam messages sent by fraudsters and imposters tricking users into divulging sensitive personal information or financial details that can lead to identity theft, financial loss, or unauthorized access.&#x20;
    * **Flirtation:** Messages that are indecent, intimate, unwanted, and inappropriate can be deemed as a flirtatious content type.&#x20;
* Click **Save Changes**.

{% hint style="warning" %}
The API key used when [configuring the app](./#configuring-mod-assist-app) is applied to the entire workspace. Users in your workspace don't need to get their own API keys.&#x20;
{% endhint %}

Now that you've successfully installed and configured your Mod Assist app, proceed to explore [using-mod-assist-app.md](using-mod-assist-app.md "mention").
