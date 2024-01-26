---
description: Your conversational search engine within Rocket.Chat
---

# ChatGPT App

<figure><img src="../../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
* The ChatGPT app is currently in Beta, and some features may not function as expected.
* ChatGPT app will only be available to workspaces running **version 6.3.0 and higher**.
{% endhint %}

The Rocket.Chat ChatGPT integration is an AI chatbot that enhances text-based communication within organizations. It supports content creation, coding assistance, and summarizes complex reports. The app also offers real-time multilingual translation, adding to its business utility.

Key capabilities include:

* **Threaded Interactions:** Manages and responds to inquiries within conversation threads.
* **Proofreading:** Corrects spelling, punctuation, and grammar in user messages.
* **Summarization:** Creates brief overviews of extensive documents.
* **Tone Customization:** Adjusts communication tone to suit formal or informal contexts.
* **Conversation Indexing:** Keeps track of threaded discussions for contextually relevant responses.

{% hint style="warning" %}
The current ChatGPT app version does not support summarizing large threads or conversations, but future updates will include this feature. However, ChatGPT can currently summarize extensive content such as articles, news, and novels.
{% endhint %}

## Install the ChatGPT App

To install the **ChatGPT** app,

* Go to **Administration > Apps > Marketplace**.
* Search for the **ChatGPT** app and click on it.
* Click **Install** and accept the needed permissions to install.&#x20;

To update the app,&#x20;

* Go to **Administration** > **Marketplace**.
* Search for the **ChatGPT** app and click on the item.
* You will find the **Update** button right below the app name and description.
* Click on the **Update** button and click **Save Changes**.&#x20;

### Get an OpenAI API Key

The **ChatGPT app** requires [API keys](https://platform.openai.com/account/api-keys) to authenticate your OpenAI account on Rocket.Chat and make requests.

{% hint style="warning" %}
Your OpenAI account must have active billing with credits. For a more detailed guide on billing, please refer to [OpenAI's prepaid billing](https://help.openai.com/en/articles/8264644-what-is-prepaid-billing).
{% endhint %}

To [get your OpenAI API key](https://platform.openai.com/account/api-keys),&#x20;

* **Log into** your[ OpenAI account](https://platform.openai.com/) and click on your **profile icon** at the top-right corner of the screen.
* From the profile dropdown, select **View API Keys**.
* If you don't have any API keys, click **+ Create new secret key** button to create a new API key.
* **Copy the API key** to your clipboard. You'll need it for configuring the app in your workspace.

### Configuring the ChatGPT App&#x20;

To configure the **ChatGPT App** after installing it,

* On the **ChatGPT App Info** screen, navigate to **Settings.**
* Update the required fields:
  * **OpenAI API Key:**  Paste the [Open AI API key](./#how-to-get-an-api-key) you copied earlier.
  * **Model**: Select the [OpenAI model ](https://platform.openai.com/docs/models/overview)to be used. **GPT-4** offers advanced reasoning capabilities, creative collaboration, and improved safety and alignment, but comes with higher usage costs. **GPT-3.5 Turbo** is the best choice for most use cases.

{% hint style="info" %}
We now support the GPT-4 model, giving you flexibility to choose between two AI models based on your business needs.
{% endhint %}

* Click **Save Changes**.

{% hint style="warning" %}
The API key used when [configuring the app](./#configuring-the-chatgpt-app) is applied to the entire workspace. Users in your workspace don't need to get their own API keys.&#x20;
{% endhint %}

Now that you've successfully installed and configured your **ChatGPT**  **app**, proceed to explore [using-the-chatgpt-app.md](using-the-chatgpt-app.md "mention").
