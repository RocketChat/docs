# End to End Encryption User Guide

When E2E is enabled on your workspace, users can create encrypted rooms and send encrypted messages. To use E2E Encryption, your workspace administrator must turn on the [e2e-encryption.md](../../workspace-administration/settings/e2e-encryption.md "mention") feature.

{% hint style="warning" %}
**E2E encryption functionality is currently in beta** and includes the following notable restrictions that workspace owners should carefully consider before activating this feature for production use:

* E2E encrypted messages will not appear in search operations.
* Bots or other ancillary systems interacting via webhooks or REST API cannot read E2EE encrypted messages.
* File uploads are not encrypted.
* Rocket.Chat enables users to reset their private E2E key to avoid permanent data loss during the beta period.
{% endhint %}

### Save your E2E encryption password

Once E2E is enabled in your workspace, a **Save your encryption password** banner is displayed at the top of your workspace.

{% hint style="warning" %}
The encryption password is displayed only once. Therefore, it is essential to save it securely as you will require it to decode or encode encrypted messages on your workspace from any client.
{% endhint %}

To save this password,

* Click the **Save your encryption password** banner. It displays a modal with the encryption password.
* Hit **copy password** and save the password securely
* Finally, click on the **I have Saved my Password** button to confirm

### Enter your E2E encryption password

After [saving your encryption password](end-to-end-encryption-user-guide.md#save-your-e2e-encryption-password), an **Enter E2E password** banner is displayed at the top of your workspace whenever you log in to your account.

To access your encrypted messages, enter your E2E encryption password following these steps:

* Click on the **Enter E2E password** banner
* A modal is displayed, prompting you to input your encryption password
* Enter the password you saved earlier
* Hit the **Decode Key** button.

### Change Encryption Password

To set a new encryption password,

* Click your avatar and select **My Account**.
* Navigate to **Security > E2E Encryption**.
* Fill in the **new encryption password** and **confirm new encryption password.**
* Click **Save changes.**

{% hint style="info" %}
You can only change your encryption password in a client where you have already entered the existing password.
{% endhint %}

### Create an Encrypted Room

E2E is only available for DMs, private [channels](../rooms/channels/), and private [teams](../rooms/teams/).

To create an encrypted [channel](../rooms/channels/create-a-new-channel.md) or [team](../rooms/teams/create-a-new-team.md),&#x20;

* Enable the **Encrypted** option while [creating the room](../rooms/channels/create-a-new-channel.md).

### Enable/Disable E2E in an existing room

{% hint style="info" %}
You can only enable E2E in [private rooms](../rooms/channels/#private-channels).
{% endhint %}

To enable/disable E2E in an existing room,

* Ensure you have [entered your E2E Encryption password](end-to-end-encryption-user-guide.md#enter-your-e2e-encryption-password).
* Click the kebab menu from the room header
* Select **Enable E2E** or **Disable E2E**

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
