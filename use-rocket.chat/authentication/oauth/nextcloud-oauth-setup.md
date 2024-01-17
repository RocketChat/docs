# Nextcloud OAuth Setup

Nextcloud is an open-source storage, collaboration, and communication tool. Rocket.Chat provides you the option to sign your users into your workspace with the Nextcloud credentials. This enhances your control over your data, giving you a high level of security and privacy.

## Prerequisites

* Administrator access to Nextcloud.
* An OAuth-enabled app on Nextcloud with the callback URL defined.
* The app client ID and secret.
* Login to your Nextcloud server as admin

## Configure Nextcloud OAuth

* Navigate to **OAuth** settings (**Administration > Workspace > Settings > OAuth)** in your workspace.
* In the **Nextcloud** tab, enable OAuth.
* Fill in your **Nextcloud Server URL**, **Nextcloud Id**, and **Client secret**.
* You can also modify how the sign-in button looks. Enter the values for the **Button Text**, **Button Text Color**, and **Button Color**.
* Click **Save Changes**.&#x20;

A **Sign in with Nextcloud** button appears on your workspace's login page. Users can now **Sign in with Nextcloud** by clicking that button!
