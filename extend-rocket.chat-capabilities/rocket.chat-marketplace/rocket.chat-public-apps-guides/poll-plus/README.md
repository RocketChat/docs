# Poll Plus

The Poll Plus app allows you to create advanced Polls in Rocket.Chat.

To install the **Poll Plus** App,

* Go to **Administration > Apps > Marketplace.**
* Search for the **Poll Plus** app and click on it.
* Click on the **Install** button.

## Quickstart

To create a Poll with Poll Plus,

* Run the slash command _`/poll`_ in the [room](../../../../use-rocket.chat/user-guides/rooms/) you want to create the poll.
* Then, click **Enter** to execute. A pop-up form is triggered for you to create the poll. The form details include the following:
  * **Insert your question:** The poll question.
  * **Insert your options**: The reply options for the poll.
  * **Add a choice**: Add more reply options for the poll.
  * **Choice type**: Select if the poll will be multiple choice ,single choice, or [template based](poll-plus-features.md#template-based-poll).
  * **Vote visibility**: Select if the poll will have Open Vote, Conidential Vote or Mixed Visibility Vote.
  * **User-defined options:** Allow/disallow the user from adding their options to the poll.
  * **Word Cloud:** Enable/disable the wordcloud feature on poll finish.
* After creating the poll, it is available in the room for the users to vote.

To finish the poll,

* Select the **Kebab** menu at the top of the poll.
* Then, click **Finish poll**.

## Configuration Settings

The Poll Plus App offers some customization settings on the App settings screen.

* Go to **Administration > Apps > Poll Plus**.
* Select the **Settings** tab.
* Update the settings. Then click **Save Changes.**

### Use Name Attribute

The Poll Plus App allows you to display the voter's identity as either the voter's full name or username.

### Timezone

Since Rocket.Chat is used globally; everyone may not be comfortable with Coordinated Universal Time (UTC). The Poll Plus App allows you to choose which timezone to display the poll finish time. The default value for this setting is the UTC timezone.

### Word Cloud API

The word cloud feature uses an API link to fetch word clouds. The free version of [Quickchart word cloud API](http://quickchart.io/documentation/word-cloud-api/) can be used for small servers. Moreover, it is also the default value for this setting. Quickchart comes with the following restrictions:

* Requires Internet access.
* Enforces rate-limiting of 60 requests per minute per IP.

In this case, you are hosting your Rocket.Chat **on-premise** or need **more customization** than Quickchart, we've open-sourced an internally[ developed word cloud API](https://github.com/RonLek/wordcloud-api). It comes with the following features:

* No Internet access is required.
* No rate-limiting.
* It is free.

{% hint style="info" %}
If the **Wordcloud API endpoin**t is blank and **Word Cloud** is enabled on the poll, the poll summary is displayed when the poll is finished.
{% endhint %}

## Template Based Poll

The Poll Plus App provides some pre-filled template polls. These are some of the most commonly used polls, and pre-filling them saves you from manually typing all the options.

#### Overrated/Underrated Poll

This poll provides options including **Overrated/Underrated**, **Appropriately Rated**, **Never Tried**, and **Underrated**. For example, you can use it to get feedback about the publicity of a particular feature in your company.

#### 1-to-5 Poll

This poll allows users to rate a subject between 1-5.

#### 1-to-10 Poll

This poll allows users to rate a subject between 1-10.

![](../../../../.gitbook/assets/poll\_template\_based.gif)

##
