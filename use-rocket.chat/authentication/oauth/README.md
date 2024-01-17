# OAuth

Open Authorization (OAuth) is an authorization protocol that acts as an intermediary and facilitates secure access to third-party applications without sharing user credentials, thereby protecting specific resources. Instead of usernames and passwords, OAuth uses tokens, serving as temporary access keys. Rocket.Chat offers integrations with various providers such as Google, Apple, and GitHub. This provides flexibility and security so users can log in with any of these credentials.&#x20;

This section guides you through the required configuration details of each supported method.&#x20;

## Key features of OAuth integration

* **Controlled access:** With the authentication methods, you can decide the user data that the workspace can access.
* **Single Sign-On (SSO):** Users can sign in to the workspace without creating new usernames and passwords.&#x20;
* **Flexibility:** You can choose the authentication methods you want to implement in your workspace from the list of available options. Furthermore, you can also set up your own custom OAuth methods in your Rocket.Chat workspace.

## **Set up your OAuth method**&#x20;

Navigate to **Administration > Workspace > Settings> OAuth**. You can view a list of some OAuth methods that are supported by Rocket.Chat, including Google, Github, LinkedIn, etc. Select the method that meets your needs and provide the configuration parameters. Refer to the sub-sections where we go into the details of each method.

## Add Custom OAuth

To add a custom OAuth:

* Click **Add custom OAuth.**
* Give a unique name for your custom OAuth.
* Click **Add.**
*   When configuring your OAuth Provider, you must include a Callback URL as follows:

    ```
    https://yourcompany.rocket.chat/_oauth/customoauth
    ```

Learn how to configure custom OAuth by referring to the examples — [Broken link](broken-reference "mention") and [Broken link](broken-reference "mention")

## Refresh OAuth Services

To update the options shown on your workspace login page based on your saved settings, click **Refresh OAuth Services**.

Let's delve into the configuration details of each of the supported OAuth options in the following sections.
