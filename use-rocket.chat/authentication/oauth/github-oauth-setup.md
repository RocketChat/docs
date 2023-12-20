# GitHub OAuth Setup

You can sign in to your Rocket.Chat workspace by enabling GitHub or GitHub Enterprise OAuth.

## Prerequisites

* A GitHub or GitHub Enterprise account.
* A GitHub OAuth app and the client ID and secret.
  * If you don't have an app, go to your [GitHub Developers Settings](https://github.com/settings/developers), navigate to **OAuth Apps,** and click **New OAuth App**.&#x20;
  * Fill in the required information, including the **Authorization callback URL,** and save your app.
  * Your **Client ID** and a button to **Generate a new client secret** are now displayed. Click the button to generate a new client secret for your OAuth credentials. Copy both the client ID and the secret.

{% hint style="warning" %}
If your callback URL is wrong, GitHub does not display any error. Instead of logging in, you receive an error message saying, **No matching login attempt found**.
{% endhint %}

## Enable GitHub OAuth

* Navigate to **OAuth** settings (**Administration > Workspace > Settings > OAuth)** in your workspace.
* In the **GitHub** tab, enable OAuth and fill in the **Client Id** and **Client Secret** you copied earlier.&#x20;
  * For GitHub Enterprise, add your **Server URL** also.
* Click **Save changes**.&#x20;

A **Sign in with GitHub** button appears on your workspace's login page. Users can now **Sign in with GitHub** by clicking that button!
