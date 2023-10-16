# Third-party Login

Rocket.Chat's Third-party Login allows you to access custom applications through OAuth using your Rocket.Chat account. For example, you can log in to platforms like Zapier using your Rocket.Chat credentials. You can add and view the Third-party login apps linked with your workspace.

To access this menu, navigate to **Administration** > **Workspace** > **Third-party login.**

## Adding New OAuth Application

To add a new OAuth app,

* Click the **New Application** button at the top right.
* Fill in the details of the OAuth app.
  * **Active**: Enable this to set active the OAuth App.
  * **Application Name**: The name of the application. It will be displayed to your users.
  * **Redirect URI**: After OAuth2 authentication, users will be redirected to an URL on this list. You can add one URL per line.
* Click **Save**.

## Viewing and Editing OAuth Apps

To view and edit an OAuth app,

* From the list of OAuth apps, click the app to view and edit it.

{% hint style="info" %}
When you view an OAuth app, you can obtain additional configurations like Authorization URL, Client ID, and Client Secret.
{% endhint %}
