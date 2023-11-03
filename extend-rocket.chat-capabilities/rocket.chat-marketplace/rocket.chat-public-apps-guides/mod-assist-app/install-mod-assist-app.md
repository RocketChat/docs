# Install Mod Assist App

To install the Mod Assist app,

* Go to **Administration** > **Marketplace**.
* Search for the **Mod Assist** app and click on it.
* Click **Install** and accept the needed permissions to install.&#x20;

{% hint style="info" %}
The Mod Assist app uses OpenAI API keys to authenticate your Rocket.Chat account. This is a required field for authentication.&#x20;
{% endhint %}

#### How to get an API Key

* **Log into** your[ OpenAI account](https://platform.openai.com/) and click on your **profile icon** at the top-right corner of the page.
* From the profile dropdown, select **View API Keys**.
* If you currently do not have any API keys, click **+ Create new secret key** button to create a new API key.
* **Copy the API key** to your clipboard. You'll need it for configuring the app in your workspace.

{% hint style="info" %}
The API key used when [configuring the app](install-mod-assist-app.md#configuring-mod-assist-app) is applied to the entire workspace. Users in your workspace don't need to get their own API keys.&#x20;
{% endhint %}

### Configuring Mod Assist App&#x20;

To configure the **Mod Assist App** after installing it,

* On the **Mod Assist** **App Info** screen, navigate to **Settings.**
* Update the required fields:
  * **AI Moderated Rooms:** Select the [rooms](../../../../use-rocket.chat/user-guides/rooms/) where the moderation app should automatically screen for inappropriate content.
  * **Exclude Roles:** Select and whitelist trusted [roles](../../../../setup-and-configure/roles-in-rocket.chat.md) whose messages can bypass moderation. It does not support custom roles.
  * **Moderate accounts created in the past:** this field enables the app to moderate accounts created within the stipulated number of days. For example, if you mention 30 days, then the app will screen all the accounts created in the last 30 days, after which it will no longer be monitored. This is done to empower you to be vigilant for suspicious activity and detrimental users.
  * &#x20;**OpenAI API Key:**  Paste the [Open AI API key](install-mod-assist-app.md#how-to-get-an-api-key) you copied earlier.
  * **Moderation Categories:** Select the types of inappropriate content you want the app to moderate. Natural language processing techniques are used to detect all types of inappropriate content such as profanity, toxicity, etc.&#x20;
    * **Toxicity:** Any message that is harsh, disrespectful, negative, malicious, harmful, or hateful is toxic in nature.&#x20;
    * **Profanity:** Any message where the language is bad, abusive, foul, vulgar, or obscene is deemed as profanity type.&#x20;
    * **Financial Risk:** Scam messages sent by fraudsters and imposters tricking users into divulging sensitive personal information or financial details that can lead to identity theft, financial loss, or unauthorized access.&#x20;
    * **Flirtation:** Messages that are indecent, intimate, unwanted, and inappropriate can be deemed as a flirtatious content type.&#x20;
* Click **Save Changes**.

Now that you've successfully installed and configured your Mod Assist app, proceed to explore [using-mod-assist-app.md](using-mod-assist-app.md "mention").
