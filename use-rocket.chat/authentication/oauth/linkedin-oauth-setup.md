# LinkedIn OAuth Setup

Rocket.Chat provides you the option to sign in your users with the LinkedIn social media platform credentials.

## Prerequisites

* A LinkedIn app with OAuth sign-in.
* The client ID and secret.
  * If you don't have an app, go to [LinkedIn Developers Portal](https://developer.linkedin.com/).&#x20;
  * Click **Create app.** Fill in the required information and save your app.
  * In the **Authentication** section, select the OAuth 2.0 sign-in option. Make sure to enter the callback URL and copy the client ID and secret.

## Configure LinkedIn OAuth

* Navigate to **OAuth** settings (**Administration > Workspace > Settings > OAuth)** in your workspace.
* In the **LinkedIn** tab, enable LinkedIn Login. Fill in the LinkedIn and Linked Secret you copied earlier.
* Click **Save changes**.&#x20;

A **Sign in with LinkedIn** button appears on your workspace's login page. Users can now **Sign in with LinkedIn** by clicking that button!
