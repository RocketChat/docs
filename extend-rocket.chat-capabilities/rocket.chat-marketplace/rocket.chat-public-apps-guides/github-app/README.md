# GitHub App

The Rocket.Chat GitHub App enhances the collaboration between developers by seamlessly integrating GitHub and Rocket.Chat. This app enables users to perform various tasks, such as searching and sharing Issues and Pull Requests, subscribing to Repository events, creating new Issues, reviewing and merging Pull Requests, and more, directly from the Rocket.Chat workspace.

## Install GitHub App

To install the GitHub App,

* Navigate to **Administration > Apps > Marketplace.**
* Search for the **GitHub** app.
* Click **Install** and accept the **needed** permissions to install.&#x20;
* On the **GitHub App Info** screen, navigate to **Details > API** and copy the `GET github-app-callback` URL.

## Create the GitHub OAuth App

GitHub OAuth Apps allow your workspace users to easily authenticate their GitHub accounts on the GitHub app. The OAuth app provides access to GitHub data, such as user profiles and repository information, and helps to integrate GitHub functionalities.

To create a GitHub OAuth app,

* Log in to your GitHub account.
* Click your avatar from the menu bar.
* Select **Settings** and navigate to **Developer settings** > **OAuth Apps.**
* Click **New OAuth App** to create a new app.
* Fill in the required information.
  * **Application name**: Set the application name.
  * **Homepage URL**: Fill in the URL of your workspace.
  * **Application description**: Add a description of the app.
  * **Authorization callback URL**: Paste the `GET github-app-callback` URL you copied from the **GitHub App**.
* Click **Register Application**.
* After registering the app, click **Generate a new client secret** to create a new client secret for the app.
* Copy the **Client ID** and the newly created **Client Secret.** You'll need them to configure the Rocket.Chat GitHub app.

## Configure GitHub App

To configure the GitHub App,

* On the **GitHub App Info** screen, navigate to **Settings.**
* Paste the **Client ID** and **Client Secret** you copied earlier in `github-app-oauth-client-id` and `github-app-oauth-client-secret`  respectively.
* Click **Save Changes.**

After installing and configuring the app, you can proceed to explore[using-github-app.md](using-github-app.md "mention").
