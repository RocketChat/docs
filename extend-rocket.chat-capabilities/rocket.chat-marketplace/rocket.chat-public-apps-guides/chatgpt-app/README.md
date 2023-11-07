---
description: Your conversational search engine within Rocket.Chat
---

# ChatGPT App

<figure><img src="../../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
The ChatGPT app is currently in Beta and some features may not function as expected.
{% endhint %}

The ChatGPT App integration in Rocket.Chat  is an AI-powered chatbot designed to facilitate natural and intelligent text-based interactions, offering significant value for organizational collaboration. It excels in generating high-quality content for websites, code assistance for developers, and summarizing market research reports for valuable insights. Additionally, it facilitates seamless multilingual communication through real-time translation services. This versatility makes the ChatGPT app an invaluable tool for various business communication needs.

With the ChatGPT app, users can engage in meaningful conversations, seek information, and receive assistance through text-based interactions in their workspace.

### Capabilities of ChatGPT app within Rocket.Chat&#x20;

{% hint style="warning" %}
ChatGPT app will only be available to workspaces running **version 6.3.0 and higher**.&#x20;
{% endhint %}

\
The Rocket.Chat ChatGPT app is capable of the following:&#x20;

* **Answer questions:** The ChatGPT bot responds to each inquiry in a thread, allowing you to manage multiple threaded conversations. Sending questions to ChatGPT in direct messaging rooms with other users opens up more conversations and corroboration opportunities.
* **Fix spelling, punctuation & grammar:** ChatGPT can be used to proofread your messages. Input text into the message box, and seek ChatGPT’s help to identify and correct grammar errors in your messages, sparing you the trouble of correcting each error individually.
* **Generate summaries:** ChatGPT can be used to generate summaries of lengthy documents to provide an executive summary, an excerpt to share with others or to allow you to avoid perusing the entire document.
* **Voice and tone editing:** ChatGPT is accessible from any channel, team, or discussion, so the application is always available to help you establish the tone of your communications. You can alter it based on whether you want the message to be formal or informal.
* **Index conversations:** ChatGPT responds to each conversation inside a thread. It indexes the conversations, and the responses within the conversation are contextually appropriate.
* **Handle longer queries:** The app is capable of providing complete, uninterrupted responses with longer text output. This implies that users can ask the app questions that necessitate longer responses without having to break them into smaller chunks.

{% hint style="warning" %}
Large conversations or threads cannot be summarized in the current version of the ChatGPT app. In future versions, we intend to support this feature. Nevertheless, it is now possible to summarize a great deal of information—articles, news, novels, and so on—using ChatGPT.
{% endhint %}

## Install the ChatGPT App

To install the **ChatGPT** app,

* Go to **Administration** > **Marketplace**.
* Search for the **ChatGPT** app and click on it.
* Click **Install** and accept the needed permissions to install.&#x20;

To update the app,&#x20;

* Go to **Administration** > **Marketplace**.
* Search for the **ChatGPT** app and click on the item.
* You will find the **Update** button right below the app name and description.
* Click on the **Update** button and click **Save Changes**.&#x20;

### Get an OpenAI API Key

The **ChatGPT app** requires [OpenAI API keys](https://platform.openai.com/account/api-keys) to authenticate your Rocket.Chat account and make requests.

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

{% hint style="info" %}
The API key used when configuring the app is applied to the entire workspace. Users in your workspace don't need to get their own API keys.&#x20;
{% endhint %}

Now that you've successfully installed and configured your **ChatGPT**  **app**, proceed to explore [using-chatgpt-app.md](using-chatgpt-app.md "mention").
