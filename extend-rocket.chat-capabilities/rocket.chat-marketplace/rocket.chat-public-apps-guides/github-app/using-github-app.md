# Using GitHub App

After installing the GitHub app, users in your workspace can start interacting with GitHub using the slash commands. The `/github` slash command is used to initiate actions with the GitHub app.&#x20;

{% hint style="info" %}
To execute any GitHub command, the user must first authenticate by using **/github login**.
{% endhint %}

## GitHub App Authentication

**Login**

To login to your GitHub account on the workspace,

* Enter the **`/github login`** slash command
* You receive a message from the `github.bot` with a **GitHub login** button. Click the button to authenticate with your GitHub account.
* Authorize the GitHub app to access your account.
* The `github.bot` sends a message once authentication is successful.

**Logout**

To log out your GitHub account from the workspace,

* Enter the  **`/github logout`** slash command
* This removes the currently authenticated user.

## GitHub App Functions

**Display your GitHub profile**

To display your GitHub profile details and view issues assigned to you,

* Enter the **`/github me`** slash command
* Click **Issues** to see a list of issues assigned to you.
* Click on **Share Profile** to select and share your profile details within a chat.

**GitHub Search**

To search for issues or pull requests in a specific repository,

* Enter the **`/github search`** slash command
* Specify the search parameters and click **Search.**

**Create GitHub Issue**

To create a new issue in a GitHub repository,

* Enter the **`/github issue`** slash command
* Enter the **Full Repository Name** in this format: _Owner/Repository_.
* Click **Next** and fill in the details of the issue.
* Click **Create Issue.** The issue gets created and `github.bot` sends a message with a link to the issue.

**Manage GitHub Issues**

To assign and share issues in a repository,

* Enter the **`/github issues`** slash command
* Enter the **Full Repository Name** in this format: _Owner/Repository_, and click **Next**
* A list of issues on the repository is displayed. You can perform  the following actions on an issue:
  * View the issue directly on **GitHub**
  * **Assign** to issue to someone
  * **Add** the issue

## GitHub App Repository Actions

**Manage Repository Subscriptions**

When you subscribe to a repository event, you receive a message in the Rocket.Chat room whenever each event gets triggered. To [manage repositories subscriptions](https://docs.github.com/en/account-and-profile/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github) on your workspace,&#x20;

* Enter the **`/github subscribe`** slash command to view the repositories and events you're subscribed to.
* Click **Add Subscriptions** to add a new subscription
  * Enter the **Full Repository Name**, select the **events** to subscribe to, and click **Subscribe.**
  * You get a message confirming the subscription.
* Click **Delete Subscriptions** to delete existing subscriptions.
  * Select the subscription and click **Unsubscribe.**
  * You receive a message about the unsubscription.
* Click **Refresh** to refresh the list of subscriptions.

**Get Repository**

&#x20;To get an interactive interface to fetch repository data,

* Enter the **`/github <username>/<repository name>`** slash command
* Click **Overview** to see the repository overview.
* Click **Issues** to get all the open repository issues.
* Click **Contributors** to get a list of all the top contributors.
* Click **Pull Requests** to see the open pull requests.

**Get Repository Overview**

To get a detailed overview of a repository,

* Enter the **`/github <username>/<repository name> repo`** slash command

**List Repository Issues**

To list open issues in a repository,

* Enter the **`/github <username>/<repository name> issues`** slash command
* A list of open issues in the repository is displayed. Click on any issue to open.

**List Repository Contributors**

To get contributors in a repository,

* Enter the **`/github <username>/<repository name> contributors`** slash command
* Click on a user to open their GitHub profile on a new tab.

**List Pull Requests**

To view recent open pull requests in a repository,

* Enter the **`/github <username>/<repository name> pulls`** slash command
* Click a pull request to open it in a new tab

**Review a Pull Request**

To review a specific pull request using its PR number,

* Enter the **`/github <username>/<repository name> pulls <pull number>`** slash command
* Click **View Changes** to see the changes made by that pull request
* Click **View File** to see the file(s) that have been affected by the pull request.
* Click **Comments** to view the comments under the PR or **Add a Comment.**
* Click **Merge** to submit the merge request details and **Merge** the PR.

**Subscribe to Repository Events**

To subscribe to all the events of a repository and receive messages in that room when event gets triggered,

* Enter the **`/github <username>/<repository name> subscribe`** slash command

**Unsubscribe from Repository Events**

To unsubscribe from all events of a repository,

* Enter the **`/github <username>/<repository name> unsubscribe`** slash command

With the GitHub app, users can easily collaborate on GitHub repositories, track issues and receive notifications directly from the workspace.
