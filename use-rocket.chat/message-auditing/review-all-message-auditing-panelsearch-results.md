# Additional Audit Results

According to your requirements, you can audit encrypted, edited, and deleted messages. Learn how you can modify the workspace settings to audit such messages.

## Access encrypted messages

The **Audit Messages Panel** returns all messages that match the search values defined in the mandatory fields for each option. However, the auditor cannot read the encrypted messages of other users. If you want to audit these messages, Rocket.Chat recommends that you disable message encryption.

To disable message encryption:

* Navigate to **Administration > Workspace > Settings > E2E Encryption**.
* Toggle off the **Enabled** option to disable E2E Encryption.
* Click **Save Changes**.

## Check message edits and deletions

Rocket.Chat lets you view any message history, including modified or removed messages.

You need to update the message history settings as follows:

* Navigate to **Administration > Workspace > Settings > Message.**
* Enable **Allow Message Editing** and **Keep Per Message Editing History** to see a history of all messages and not only the last edit made.
* Disable **Allow Message Deleting**. Otherwise, messages show only the _deleted_ status, and you cannot see the complete message history.
