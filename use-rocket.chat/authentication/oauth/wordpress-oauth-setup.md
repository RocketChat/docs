# WordPress OAuth Setup

Rocket.Chat provides you with the option to log your users into your workspace with WordPress. Along with the benefits of unified user authentication and management, you can also control access to any data or APIs associated with your WordPress site. Furthermore, you can take advantage of the customization options and modify the OAuth functionality based on your needs.

## Prerequisites

* A WordPress account.
* An OAuth Server plugin that will add OAuth functionalities to your site or a custom OAuth server implementation. Copy the values of the client ID and secret.

## Configure WordPress OAuth

In your Rocket.Chat workspace,

* Navigate to **OAuth** settings (**Administration > Workspace > Settings > OAuth**).
* Scroll down to the **WordPress** tab and enable **WordPress Login**.
* Enter the values for the following fields:
  * **WordPress URL**: The URL of your WordPress site.
  * **WordPress Id** and **WordPress Secret**: Get the values from the OAuth server plugin associated with your site.
* Select a **Server Type** from the drop-down menu. You have three options as per your requirements:
  * **WordPress.com**: Select this option if you are using your WordPress account to log in with the help of an OAuth Server plugin.
  * **WP OAuth Server Plugin**: Select this option if you are using the [WP OAuth Server](https://wordpress.org/plugins/miniorange-oauth-20-server/) plugin provided by miniOrange to use your site as an OAuth Server.
  * **Custom**: Select this option if you are implementing a custom OAuth Server.
* If you select the **Server Type** as **WordPress.com** or **WP OAuth Server Plugin**, the rest of the fields are non-editable.
* If you select the **Server Type** as **Custom**, enter the values for the following fields provided by the OAuth Server plugin that you are using:&#x20;
  * **Identity Path**, **Token Path**, **Authorize Path**: These three path fields refer to the requests that Rocket.Chat makes to WordPress during the login process.
  * **Identity Token Sent Via**: This field refers to how the user identification token is sent with the requests. The options to send it are in the request header or in the request parameters. The plugin may support one or both of these options.
  * **Scope**: Refers to the list of user information that Rocket.Chat needs to access. You must select the valid values in the plugin settings.
* Click **Save changes**.&#x20;

A **Sign in with WordPress** button appears on your workspace's login page. Users can now **Sign in with WordPress** by clicking that button!

{% hint style="info" %}
For button customization, your inputted button text won't be displayed. However, the app will display your custom OAuth name at the top.
{% endhint %}

## Troubleshooting WordPress OAuth

Whenever you have an issue with OAuth in WordPress, enable **Level 2 Logging** to view your logs.

* Go to **Administration > Logs > Log Level > View Logs.** &#x20;
* While monitoring the log, open the login screen in an incognito browser and attempt a login.
* The log displays the OAuth response in real-time, which provides helpful troubleshooting information.

Visit this [forum ](https://wordpress.org/support/topic/rocketchat-wordpress-the-redirect-uri-provided-is-missing-or-does-not-match/)for more information on troubleshooting for  the error "**The redirect URI provided is missing or does not match."**
