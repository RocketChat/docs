# End to End Encryption User Guide

When E2E is enabled on your workspace, users can create encrypted rooms and send encrypted messages.

{% hint style="info" %}
**IMPORTANT:** **E2E encryption functionality is currently in beta** and includes notable restrictions that workspace owners should carefully consider before activating this feature for production use as follow:

* E2E encrypted messages will not appear in search operations.
* Bots or other ancillary systems interacting via webhooks or REST API cannot read E2EE encrypted messages.
* File uploads are not encrypted.
* Rocket.Chat enables users to reset their private E2E key to avoid permanent data loss during the beta period.
{% endhint %}

## Getting started

To use E2E Encryption, your Rocket.Chat workspace administrator must [turn on the End to End Encryption](../../workspace-administration/settings/e2e-encryption.md) feature.

{% content-ref url="../../workspace-administration/settings/e2e-encryption.md" %}
[e2e-encryption.md](../../workspace-administration/settings/e2e-encryption.md)
{% endcontent-ref %}

### Set E2E Encryption Password

If E2E Encryption is enabled on your workspace, you see a banner notifying you to **Enter your E2E Password.**

* Click on the banner
* A modal is displayed with **your password.**
* Copy and store the password securely. You'll need it when using Rocket.Chat on another device.
* Confirm by clicking on **I Saved My Password.**

### Changing Encryption Password

To change your Encryption password,

* Click your avatar and select **My Account**.
* Navigate to **Security > E2E Encryption**.
* Set the **new encryption password**
* Click **Save changes.**

## Starting an End to End Conversation

To create an End to End Encrypted room,&#x20;

* Follow this guide [create-a-new-channel.md](../rooms/channels/create-a-new-channel.md "mention") to create a room.
* Enable **Encrypted.**

## Convert an existing room to use End to End encryption

{% hint style="info" %}
&#x20;It must be a [private room](../rooms/channels/#private-channels).
{% endhint %}

To convert an existing room to an encrypted room,

* Make sure you have entered your E2E Encryption password.
* Click the **three dots icon** at the menu bar of the channel.
* Click **Enable E2E** or **Disable E2E**

## FAQ

<details>

<summary>How can I tell if the room is encrypted?</summary>

If the room is using End to End Encryption you should see a key icon by the channel name.

<img src="../../../.gitbook/assets/e2e-keybychannel.png" alt="" data-size="original">

</details>

<details>

<summary>How can I tell if a message is encrypted?</summary>

You will see a key icon by the username.

</details>
