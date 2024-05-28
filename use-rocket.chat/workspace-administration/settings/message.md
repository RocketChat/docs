---
description: Configure message settings
---

# Message

To access this menu, navigate to **Administration** > **Workspace** > **Settings** > **Message**.

{% hint style="info" %}
Remember to hit **Save Changes** in order to apply any changes made.
{% endhint %}

## Basic Settings

* **Custom Domain Whitelist for Auto Link**: When a local server link (for example, http://gitlab.local) is shared,  it is not clickable. For such internal links to be clickable, you need to whitelist the corresponding custom domain.  Navigate to **Administration** > **Workspace** > **Settings** > **Message** look for the '**Custom Domain Whitelist for Auto Link**' setting, and **add custom domains of your choice**. When you're finished, you'll see that when you send a message with a URL, including the custom domain, it becomes clickable. &#x20;

{% hint style="info" %}
**Custom Domain Whitelist for Auto Link** is available on workspaces running version 6.2 and above.
{% endhint %}

* **Allow message Editing**: When enabled, users have the ability to edit messages.
* **Block Message Editing After (n) Minutes**: Takes in time in minutes in which users are allowed to edit messages. After that they are unable. Enter 0 to disable blocking.
* **Allow message-deleting**: Toggle on to allow users to be able to delete messages.
* **Block Message Deleting After (n) Minutes**: This lets you set a duration in minutes in which users are allowed to delete messages.
* **Allow Unrecognized Slash Commands**: When enabled, unknown Slash Commands are allowed.
* **Allow user direct messages to yourself**: When enabled, users are able to send direct messages to themselves.
* **Always Search Using RegExp**: When enabled, all searches use RegExp. We recommend setting this `True` if your language is not supported on [MongoDB text search](https://docs.mongodb.org/manual/reference/text-search-languages/#text-search-languages).
* **Show Deleted Status**: When enabled, shows `deleted` when a message is deleted.
* **Allow Message bad words filtering**: Turn on to allow filtering of blacklisted words in messages.
  * **Add Bad Words to the Blacklist**: Takes in a list of comma-separated words that are to be filtered from the workspace.
  * **Remove words from the Blacklist**: Takes in any word already on the Blacklist and removes it.
* **Keep Per Message Editing History**: Whether or not to keep message editing history.
* **Maximum Channel Size for ALL Message**: This lets you set the maximum size of a channel.
* **Maximum Allowed Characters Per Message**: This lets you specify the maximum number of characters a message can contain.
* **Allow converting long messages to attachments**: When enabled, long messages can be converted to attachments.
* **Grouping Period (in seconds)**: Takes in time in seconds in which messages are grouped with the previous message if both are from the same user and the elapsed time was less than the informed time in seconds.
* **Embed Link Previews**: Turn on to enable embedded link previews when links are posted in a chat.
  * **Embed Request User Agent**: This lets you set a request user agent.
  * **Embed Cache Expiration Days**: Set how long in days where embed cache expires.
  * **Embed Ignored Hosts**: Comma-separated list of hosts or CIDR addresses, eg. `localhost`, `127.0.0.1`, `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`
  * **Safe Ports**: Comma-separated list of ports allowed for previewing.
* **Time Format**: Specify the format of time on your server. See also: [Moment.js](http://momentjs.com/docs/#/displaying/format/)
* **Date Format**: Set the format of the date in your server.
* **Time and Date Format**: This lets you set the time and date format.
* **Maximum Number of Chained Quotes**: This lets you set the maximum number of Chained quotes.
* **Hide System Messages**: Select from a dropdown which system messages are to be hidden.
* **DirectMesssage\_maxUsers**: Specifies the maximum uses for direct messages.
* **Message Erasure Type**: Select from the drop-down what to do with messages of users who removed their accounts.
* **Code highlighting languages list**: Comma-separated list of languages (all supported languages at [https://github.com/highlightjs/highlight.js/tree/9.18.5#supported-languages](https://github.com/highlightjs/highlight.js/tree/9.18.5#supported-languages) ) that are used to highlight code blocks.
* **Video Recorder Enabled**: Requires `video/webm` files to be an accepted media type within [File Upload](file-upload/) settings.
* **Allow Message Pinning**: When enabled, allow messages to be pinned to any channel.
* **Allow Message Starring**: When enabled, users are able to star messages.
* **Allow Custom Fields in Messages**: Enable this option to use custom fields for messages. For example, set priorities for messages. Note that you can only add custom fields via any of these API endpoints: [Update Message](https://developer.rocket.chat/reference/api/rest-api/endpoints/messaging/chat-endpoints/message-update), [Post Message](https://developer.rocket.chat/reference/api/rest-api/endpoints/messaging/chat-endpoints/postmessage), [Send Message](https://developer.rocket.chat/reference/api/rest-api/endpoints/messaging/chat-endpoints/send-message), and [Upload File to a Room](https://developer.rocket.chat/reference/api/rest-api/endpoints/rooms/rooms-endpoints/upload-file-to-a-room).
* **Custom Fields Validation**: The custom field values will be validated according to the rules defined in this setting. Check [ajv.js.org](https://ajv.js.org/json-schema.html) for more information regarding validation options. Properties `type` and `additionalProperties` will be forced to `object` and `false` respectively. \
  \
  For example:

```json
{
	"properties": {
		"priority": {
			"type": "string",
			"nullable": false,
			"enum": ["low", "medium", "high"]
		}
	},
	"required": ["priority"]
}
```

## Hex Color Preview

**Enabled**: Set true to allow preview for hex colors in rgba format.

To preview a color you should write in this format: color:#000000 and it will be displayed as:

<figure><img src="../../../.gitbook/assets/image (78).png" alt=""><figcaption><p>hex color preview</p></figcaption></figure>

## Message Attachments

* **Enable image thumbnails to save bandwidth**: When set to true, thumbnails are served instead of the original image to reduce bandwidth usage. Images at original resolution can be downloaded using the icon next to the attachment's name.
  * **Thumbnail's max width (in pixels)**: Takes in the thumbnail's max width in pixels
  * **Thumbnail's max height (in pixels)**: Takes in the thumbnail's max height in pixels
* **Remove EXIF metadata from supported files**: Enable to strip out EXIF metadata from image files (jpeg, tiff, etc.). This setting is not retroactive, so files uploaded while disabled will have EXIF data

## Audio Message

* **Audio Recorder Enabled**: When set to true, users are able to record audio.
* **Audio Message Bit Rate**: Lets you set the bit rate for audio messages.

## Read Receipts

<figure><img src="../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

* **Show Read Receipts**: Whether to show read receipts.
* **Detailed Read Receipts**: This shows each user's read receipts.

When both options are enabled, the [read receipts action](../../user-guides/messages/message-actions.md#read-receipts) shows a list of users who have read the message.

{% hint style="info" %}
Delivered messages are indicated by a grey checkmark on the right. Once the message is read, the checkmark turns into a blue double checkmark.
{% endhint %}

## Auto-Translate <a href="#ibh8nd40he" id="ibh8nd40he"></a>

* **Enable Auto-Translate**: Enabling auto-translation allows users with `auto-translate` permission to have all messages in a room automatically translated into their selected language. To learn more, see the[ Auto-Translate user guide](../../user-guides/rooms/#auto-translate).
* **Service Provider**: A drop-down to select the translation service provider. You can choose between [DeepL](message.md#hqizve3lvh5), [Google](message.md#e5sd70k5l0d) and [Microsoft](message.md#microsoft).&#x20;

{% hint style="info" %}
Add the respective API key to complete authentication for the setup depending on your selected service provider.
{% endhint %}

### DeepL <a href="#hqizve3lvh5" id="hqizve3lvh5"></a>

* **API Key**: Enter your **DeepL API** key. To get the Authentication key, see the [official DeepL API documentation](https://www.deepl.com/docs-api/api-access/authentication).

{% hint style="info" %}
Rocket.Chat does not currently support the [free version of DeepL API](https://www.deepl.com/pro/change-plan#developer).
{% endhint %}

### Google <a href="#e5sd70k5l0d" id="e5sd70k5l0d"></a>

* **API Key**:  Enter your Google Translate API key. To get the API key for authentication, see the official [setup guide for Google Translate](https://cloud.google.com/translate/docs/setup).

### Microsoft

* **Ocp-Apim-Subscription-Key**: Enter your Microsoft Ocp-Apim-Subscription-Key. Follow the [official Azure translator guide](https://learn.microsoft.com/en-us/azure/ai-services/translator/create-translator-resource#get-your-authentication-keys-and-endpoint) to create a translator resource and use the API key as your **Microsoft Ocp-Apim-Subscription-Key.**

## Google Maps <a href="#phxcc899uio" id="phxcc899uio"></a>

* **Enable Mapview**: Enabling map view displays a location share button on the right of the chat input field.
* **Google Static Maps API Key**: The Google Static Maps API Key. This can be obtained from the Google Developers Console for free.

## Katex

* **Katex Enabled**: When enabled, allows the use of [katex](http://khan.github.io/KaTeX/) for math typesetting in messages.
* **Allow Parenthesis Syntax**: When enabled, you can use \[katex block] and (inline katex) syntaxes.
* **Allow Dollar Syntax**: When enabled, allows using `$$katex block$$` and `$inline katex$` syntaxes.
