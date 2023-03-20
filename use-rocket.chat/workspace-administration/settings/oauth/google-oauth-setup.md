# Google OAuth Setup

Google OAuth requires you to fill in the `Google Id` and `Google Secret` of your Google OAuth app.

To enable **Google OAuth** on your workspace,

* Go to the [Google Cloud console](https://console.cloud.google.com/) and [create a new project](https://support.google.com/googleapi/answer/6158849?hl=en) or select an existing one.
* From the sidebar, Navigate to **API & Services** > **OAuth consent screen** and fill in the required fields to **Create** a consent screen.
* Navigate to **Credentials,** Click **New Credentials**, then select **OAuth client ID**.
* Select **Web application** as the application type, then fill in the required details
* Add the following authorized redirect URIs

```
https://YOU DOMAIN/_oauth/google?close
https://YOU DOMAIN/_oauth/google
```

{% hint style="info" %}
It is necessary to register with `?close` to avoid receiving a `Erro 400: redirect_uri_mismatch` ([reference](https://github.com/RocketChat/Rocket.Chat/issues/16919#issuecomment-601321898))
{% endhint %}

* Click **Create**
* Your OAuth Client is created, and your `Client ID` and `Secret` are displayed in a modal box. Copy or download these credentials.
* On your Rocket.Chat workspace, navigate to **Administration > Workspace > Settings> OAuth > Google**
* Fill in the OAuth credentials you copied earlier and toggle on **Google Login**.
* Click **Save Changes**. A **Sign in with Google** button appears on your workspace's login page. Users can now **sign in with google**.
