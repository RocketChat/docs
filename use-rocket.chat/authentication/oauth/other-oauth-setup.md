# Additional OAuth Methods

Rocket.Chat supports several other OAuth methods. On this page, we cover the configuration parameters of the remaining methods. You can find the values of the required fields such as the client ID and secret from your OAuth provider.

## Apple OAuth

To enable **Apple OAuth** on your workspace,

* Navigate to **OAuth** settings (**Administration > Workspace > Settings > OAuth**).
* In the **Apple** tab, enable **Sign in with Apple**.
* Enter the values for the following fields:
  * **Accounts\_OAuth\_Apple\_id**
  * **Accounts\_OAuth\_Apple\_secretKey**
  * **Accounts\_OAuth\_Apple\_iss**
  * **Accounts\_OAuth\_Apple\_kid**

{% hint style="info" %}
If you want Apple login enabled only on mobile, you can leave all fields empty.
{% endhint %}

## Twitter OAuth

Use the Twitter social media platform as an authentication provider to sign your users into your Rocket.Chat workspace. On the Twitter [Developer Portal](https://developer.twitter.com/en/portal/projects-and-apps), navigate to the **Apps** page to create or view your existing apps.  &#x20;

To enable **Twitter OAuth** on your workspace,&#x20;

* Navigate to **OAuth** settings (**Administration > Workspace > Settings > OAuth**).
* In the **Twitter** tab, enable **Twitter Login**.
* Enter the values for the following fields:
  * **Twitter Id**: The OAuth ID of your Twitter OAuth app.
  * **Twitter Secret**: Your Twitter OAuth app secret.

## Tokenpass OAuth

Tokenpass provides token management and authentication services, specifically for blockchain and cryptocurrencies. To use it as an OAuth provider, create an application on the [Tokenpass developers portal](https://tokenpass.tokenly.com/auth/apps) for OAuth integration.

To enable **Tokenpass OAuth** in your workspace,

* Navigate to **OAuth** settings (**Administration > Workspace > Settings > OAuth**).
* In the **Tokenpass** tab, enable **Tokenpass Login**.
* Enter the values for the following fields:
  * **Tokenpass Server URL**: Your server URL. Example `https://domain.com` (excluding trailing slash).
  * **Tokenpass Id**: Tokenpass app ID.
  * **Tokenpass Secret**: Your Tokenpass app secret.

## Drupal OAuth

Drupal is a free and open-source content management system used to build websites and web apps. It provides a user authentication system that supports accounts, roles, and permissions. Rocket.Chat offers you the option to authenticate your users with Drupal as an OAuth provider.

Drupal OAuth is made possible with the [OAuth2 Client](https://www.drupal.org/project/oauth2\_client) module. Follow [this guide](https://www.drupal.org/docs/contributed-modules/oauth2-client/oauth2-client-8x-3x) to create client credentials.

To enable Drupal OAuth in your workspace,

* Navigate to **OAuth** settings (**Administration > Workspace > Settings > OAuth**).
* In the **Drupal** tab, enable the **Drupal Login Enabled** option.
* Enter the values for the following fields:
  * **Drupal Server URL**: Your server URL. Example `https://domain.com` (excluding trailing slash)
  * **Drupal oAuth2 Client ID**: The OAuth ID from the Drupal configuration.
  * **Drupal oAuth2 Client Secret**: Your Drupal OAuth secret.

## Dolphin OAuth

{% hint style="warning" %}
Dolphine 7.x will no longer be supported. Refer to the [new Dolphin solution](https://www.boonex.com/) for more information.
{% endhint %}

Visit this [configuration page](https://github.com/boonex/dolphin.pro/wiki/Dolphin-Connect-Setup-for-ChatPlus) to see how to see how you can link your workspace to Dolphin.

To enable Dolphin OAuth in your workspace,

* Navigate to **OAuth** settings (**Administration > Workspace > Settings > OAuth)** in your workspace.
* In the **Dolphin** tab, click **Enable** to enable Dolphin OAuth.
* Enter the values for the following fields:
  * **URL**: Enter the URL from the information section of the OAuth2 module.
  * **Id**: Dolphin connect ID.
  * **Secret**: Dolphin connect secret.
  * **Login Style**: A dropdown to select the login style. You can choose **Redirect**, **Popup**, or the **Default** option.
  * **Button Text**: Text to be displayed on the OAuth button.
  * **Button Text Color**: The text color in the OAuth button.
  * **Button Color**: Color of the button.

## Custom OAuth: Okta

Okta is a widely used identity management platform that provides secure authentication and user management. You can use Okta as your OAuth method by creating a custom method in Rocket.Chat.&#x20;

* Go to your [Okta developers panel](https://developer.okta.com) and create a new OAuth app for a web application.&#x20;
* Fill in all the required information and save.
* Your new app is created with all the credentials needed for configuration.

To use Okta OAuth, you need to go to the OAuth section of your Rocket.Chat settings and create a custom OAuth.

* Navigate to **OAuth** settings (**Administration > Workspace > Settings > OAuth**).&#x20;
* Create a custom OAuth.
* Fill in all the required details and save.

## Proxy

A proxy server in the context of OAuth refers to an intermediary server that acts as an OAuth provider on behalf of an application. With this option, you can set up a proxy service as an OAuth method.

* **Proxy Host**: The OAuth proxy host.
* **Proxy Services**: The OAuth proxy service.
