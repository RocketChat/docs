# Content Moderation Apps

Content moderation is vital for maintaining a safe and inclusive digital workspace. It serves to uphold user safety by filtering harmful content like spam and hate speech, preserving brand reputation as a secure platform, and complying with legal regulations. Manual moderation of messages in all the rooms can be impractical, especially if you have a large number of users and conversations.

Rocket.Chat offers two content moderation automation apps for [premium](https://docs.rocket.chat/readme/our-plans) workspaces:

* The [**Mod Assist**](mod-assist-app/) app is powered by [OpenAI](https://platform.openai.com/)'s ChatGPT for effective content moderation.
* The [**Mod Perspective**](mod-perspective-app/) app employs Google Jigsaw's [Perspective API](https://perspectiveapi.com/) to streamline content moderation for human moderators.

## Key features of the content moderation apps

* **Streamline the moderation process**: The apps detect harmful content based on pre-defined rules, flag the messages, and report them, which can be reviewed further by moderators. The reports contain contextual details such as sender information, rooms, and timestamps.
* **AI-powered moderation engine**: The moderation apps use machine learning models that analyze text content within the chat messages to identify violations.
* **Customizable moderation rules**: The apps provide various settings to select the filters and define thresholds that will be considered violations.
* **User notifications**: When a message is flagged as a violation of the guidelines, the user responsible for the message receives a notification, providing transparency and an opportunity to appeal, if required.

Let's look at the installation steps and the features of the content moderation apps in detail. You can then opt for the app that best suits your requirements to have a safe and enjoyable Rocket.Chat environment for your users.
