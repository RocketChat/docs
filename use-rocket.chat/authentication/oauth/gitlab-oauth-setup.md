# GitLab OAuth Setup

Use the GitLab OAuth option to enable your users to log in with the GitLab credentials.

## Prerequisites

* A GitLab application.
* The application ID and secret.
  * If you don't have a GitLab app, go to [GitLab Applications](https://gitlab.com/-/profile/applications).
  * Fill in the details, select the scopes, and save your app.&#x20;
  * After the application is created successfully, the OAuth credentials are displayed.
  * Copy the **Application ID** and **Secret**.

## Configure GitLab OAuth

* Navigate to **OAuth** settings (**Administration > Workspace > Settings > OAuth)** in your workspace.
* In the GitLab tab, enable OAuth.
* Fill in the **GitLab Id** and **Client Secret** you get from your GitLab app.
* If you are self-hosting a GitLab instance, enter your **GitLab URL**. By default, the value is `https://gitlab.com`.
* The **Identity Path** value is appended to the GitLab URL to complete the URL which is used to get the user's information during login.
* Click **Save Changes**.&#x20;

A **Sign in with GitLab** button appears on your workspace's login page. Users can now **Sign in with GitLab** by clicking that button!
