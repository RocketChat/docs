# Facebook OAuth Setup

You can use your Facebook credentials to access your Rocket.Chat workspace.&#x20;

## Prerequisites

* A Facebook [Developer account](http://developers.facebook.com).
* A Facebook app that uses Facebook Login.&#x20;
* In the app settings, for the **Valid OAuth Redirect URIs** field, enter the **Facebook Callback URL** that you will find in your Rocket.Chat workspace (go to **Administration > Workspace > Settings> OAuth**).
* To view the OAuth credentials of your Facebook app, select **App Settings** > **Basic**. Copy your **App ID** and **App Secret**. You will need these to enable Facebook login in your workspace.

## Configure Facebook OAuth

1. Navigate to OAuth settings (**Administration > Workspace > Settings> OAuth)**.
2. In the **Facebook** tab, enable **Facebook Login** and fill in the **Facebook App ID** and **Facebook Secret** you copied earlier.
3. Click **Save changes**.&#x20;

A **Sign in with Facebook** button appears on your workspace's login page. Users can now **Sign in with Facebook** by clicking that button!
