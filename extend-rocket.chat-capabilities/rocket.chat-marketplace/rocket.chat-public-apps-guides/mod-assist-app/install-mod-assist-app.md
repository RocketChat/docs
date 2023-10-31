# Install Mod Assist App

### Installing the app

To install the Mod Assist app,

1. Go to **Administration** > **Marketplace**.
2. Search for the **Mod Assist** app and click on the item.
3. Click Install and accept the needed permissions to install.&#x20;

{% hint style="info" %}
**Note:** The Mod Assist app uses OpenAI API keys to authenticate your account on Rocket.Chat. This is a required field for authentication.&#x20;
{% endhint %}

#### How to get an API Key

1. **Log into** your[ OpenAI account](https://platform.openai.com/). After logging in, click on your **profile icon** at the top-right corner of the page. From here, you can create and manage your API keys.
2. In your account settings, click **View API Keys**.
3. If you currently do not have any API keys, click **+ Create new secret key** button to create a new API key.
4. **Copy the API key** you want to use to your clipboard.

{% hint style="info" %}
**Note:** The API key fetched from the OpenAI account is applicable to the entire workspace. Users are not required to retrieve their own API key.
{% endhint %}

### Configuring the app&#x20;

You need to configure the app based on the moderation requirements within your workspaces. Once you’ve installed the app, navigate to the Settings tab from the App Info page inside Rocket.Chat. Here are the following settings that you can configure:&#x20;

1. **AI Moderated Rooms:** select the rooms in which you want to enable the moderation app. This implies that the app will automatically screen the specified rooms for inappropriate content. You can choose any channel.&#x20;
2. **Exclude Roles:** select the user roles that can bypass the moderation app’s scrutinization. This means that the content posted by these roles will not be screened. Ensure you add only trusted roles for whitelisting, and these roles are the user roles within Rocket.Chat. Currently, custom roles cannot be excluded.&#x20;
3. **Moderate accounts created in the past:** this field enables the app to moderate accounts created within the stipulated number of days. For example, if you mention 30 days, then the app will screen all the accounts created in the last 30 days, after which it will no longer be monitored. This is done to empower you to be vigilant for suspicious activity and detrimental users.&#x20;
4. **OpenAI API Key:** You might have fetched the API key from your OpenAI account by following the steps provided in the previous section. Now, **paste** the key into the app’s **Settings** tab inside Rocket.Chat > against the **OpenAI API Key** field. The settings tab is available only after the app is installed. Once done, **refresh** your workspace.&#x20;
5. **Moderation Categories:** select the types of inappropriate content you want the app to moderate. This involves using natural language processing techniques to detect all types of inappropriate content such as profanity, toxicity, and more.&#x20;
   1. **Toxicity:** Any message that is harsh, disrespectful, negative, malicious, harmful, or hateful is toxic in nature.&#x20;
   2. **Profanity:** Any message where the language is bad, abusive, foul, vulgar, or obscene is deemed as profanity type.&#x20;
   3. **Financial Risk:** This moderation category is for scam messages sent by fraudsters and imposters to trick you into divulging sensitive personal information or financial details that can lead to identity theft, financial loss, or unauthorized access.&#x20;
   4. **Flirtation:** Messages that are indecent, intimate, unwanted, and inappropriate can be deemed as a flirtatious content type.&#x20;

{% hint style="success" %}
**Note:** The definition of each moderation category isn’t confined just to what we have stated. Based on the overall moderation strategy in your workplace, you can use them as you see fit.&#x20;
{% endhint %}
