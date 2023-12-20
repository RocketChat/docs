# Google OAuth Setup

Signing in with Google is a hassle-free and secure way to access a large number of web applications today. Learn how you can set up Google sign-in for your users on this page.

## Prerequisites

* A project on the [Google Cloud console](https://console.cloud.google.com/).
* A consent screen. You can create one from **API & Services** > **OAuth consent screen** and fill in the required fields.
* Credentials — the client ID and secret. You can create the credentials by clicking **New Credentials** and then selecting **OAuth client ID**. Select **Web application** as the application type, then fill in the required details.
* The authorized redirect URIs that you need to enter are as follows:

```
https://YOU DOMAIN/_oauth/google?close
https://YOU DOMAIN/_oauth/google
```

{% hint style="info" %}
It is necessary to register with `?close` to avoid receiving a `Erro 400: redirect_uri_mismatch` ([reference](https://github.com/RocketChat/Rocket.Chat/issues/16919#issuecomment-601321898))
{% endhint %}

## Configure Google OAuth

* On your Rocket.Chat workspace, navigate to **Administration > Workspace > Settings > OAuth > Google**.
* Enable **Google Login** and fill in the OAuth credentials you copied earlier.
* Click **Save changes**.&#x20;

A **Sign in with Google** button appears on your workspace's login page. Users can now **Sign in with Google**!
