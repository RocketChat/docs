---
description: CDN Setup instructions
---

# CDN

In the era of high-speed internet and global connectivity, Content Delivery Networks (CDNs) have become an essential tool for delivering static assets such as JavaScript, CSS, and images to users efficiently. Rocket.Chat supports the use of a CDN to serve static assets to its workspace. This guide will provide a detailed overview of how to set up a CDN in Rocket.Chat and troubleshoot any issues that may arise.

{% hint style="info" %}
It's important to note that if you provide a CDN prefix that is not live or incorrect, you may lose access to your Rocket.Chat instance as the required assets will not be found.
{% endhint %}

## Enabling CDN

To enable CDN in your workspace,

* Go to **Administration > Workspace > Settings > General.**
* **Update the** CDN Prefix.
* You can enable **Use CDN Prefix for all assets** or set a different&#x20;

### CDN Prefix

This string will generate different outcomes depending on the value provided.

| Value                  | Example Url for Asset                   |
| ---------------------- | --------------------------------------- |
| cdn                    | /cdn/example-asset.js                   |
| http://cdn.domain.com  | http://cdn.domain.com/example-asset.js  |
| https://cdn.domain.com | https://cdn.domain.com/example-asset.js |

### Use CDN Prefix for all assets

Enable this for serving all assets from the same CDN.

### CDN Prefix for JS/CSS

This option takes the same style input as CDN Prefix. The value provided will be applied only to JS and CSS assets.

## Troubleshooting

In case the CDN stops working or the provided values are incorrect, there are a few workarounds to allow a fix to be implemented inside the Administration settings. These include updating the backend Mongo database to remove the CDN or using a browser extension to rewrite URLs from the CDN address to the exact location where Rocket.Chat is running.

#### Database Fix

As the front end of Rocket.Chat may be inaccessible, but the backend Mongo database can be updated to remove the CDN. The following Mongo commands should reset the value to the default state.

```
db.rocketchat_settings.update({_id:"CDN_PREFIX"},{$set:{"value":""}})
```

```
db.rocketchat_settings.update({_id:"CDN_JSCSS_PREFIX"},{$set:{"value":""}})
```

### Use a Browser Extension

A browser extension can be used to rewrite URLs from the CDN address to the exact location where Rocket.Chat is running. Take extra caution when selecting an appropriate extension for your browser.
