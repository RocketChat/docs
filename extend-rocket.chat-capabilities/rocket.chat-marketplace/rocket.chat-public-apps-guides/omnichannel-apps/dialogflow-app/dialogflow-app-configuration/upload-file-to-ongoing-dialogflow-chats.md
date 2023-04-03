# Upload File To Ongoing Dialogflow Chats

You may have a use case where you want to upload a file to the ongoing Bot conversation, like a product handbook or purchase invoice.&#x20;

#### Pre-requisites

* Have a Dialogflow intent with Fulfillment webhook enabled
* A [bot user ](../#bot-user-configuration)with a Live Chat agent role.

To upload a file to an ongoing Bot conversation,

* Get the Dialogflow **`session-id`** of the ongoing bot conversation where you want to upload this file. You can get it from the fulfillment webhook request, which Dialogflow will send upon detecting your target intent.

{% hint style="info" %}
See a sample [webhook request ](https://cloud.google.com/dialogflow/es/docs/fulfillment-webhook#webhook\_request)for a detailed example. The `session-id` is in the session property.
{% endhint %}

* Use the [Upload File to a Room](https://developer.rocket.chat/reference/api/rest-api/endpoints/core-endpoints/rooms-endpoints/upload-file-to-a-room) endpoint with the `session id` as the `Room Id` on Rocket.Chat. The endpoint requires authentication, so you can use the [Login endpoint](https://developer.rocket.chat/reference/api/rest-api/endpoints/other-important-endpoints/authentication-endpoints/login) to get authentication tokens for the bot user.

