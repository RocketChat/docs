# Third-party Login

Rocket.Chat's **Third-party login** allows you to access custom applications through OAuth using your Rocket.Chat account. For example, you can log in to platforms using your Rocket.Chat credentials. You can add and view the third-party login apps linked with your workspace.

## Example

This guide walks you through the example of adding a Zapier integration as a third-party login application. With this, you can log in to Zapier using your Rocket.Chat workspace credentials.

### Create Zapier integration

Create a [developer account](https://developer.zapier.com/) on the Zapier platform and follow these steps:

1. Go to the **My Integrations** tab.
2. On the **Create Integration** page, enter the integration details according to your requirements. Click **Create**.
3. In the newly created integration, click **Authentication** > **OAuth v2**.
4. Note the redirect URL from the **Step 2 Copy your OAuth Redirect URL** section.&#x20;

Let's move on to adding an application to the Rocket.Chat workspace.

### Add new application

To add a new app in the Rocket.Chat workspace, follow these steps:

1. Go to **Administration** > **Workspace** > **Third-party login** to access the third-party login tab**.**
2. Click **New application** at the top-right.
3. Enter the following details of the app:
   1. **Active**: Enable this to activate the app.
   2. **Application Name**: The name of the application. It will be displayed to your users. For example, `Zapier login`.
   3. **Redirect URI**: After OAuth2 authentication, users will be redirected to a URL on this list. You can add one URL per line. For this scenario, paste the URL value you got from the OAuth v2 authentication integration.\
      For example, `https://zapier.com/dashboard/auth/oauth/return/App201062CLIAPI/`
4. Click **Save**.

### Configure the Zapier integration

Now we will configure the integration that we created in Zapier. This will let us connect the OAuth integration with the Rocket.Chat workspace application. We can then log in to Zapier using the Rocket.Chat credentials.

1. In your Rocket.Chat workspace, click the application that you created. The **Active** status, **Application Name**, and the **Redirect URI** values are displayed.
2. Additional configuration fields — **Client ID**, **Client Secret**, **Authorization URL**, and **Access Token URL**, are also displayed. The values are automatically filled. You can edit the values to suit your requirements. Make sure to save the application.
3. Copy the **Client ID** and **Client Secret** values. Paste these values in the Zapier integration **Step 3 Enter your Application Credentials** section. For example,\
   Client ID: `zapier`\
   Client secret: `RTK6TlndaCIolhQhZ7_KHIGOKnlaOq_o-7J`
4. Copy the **Authorization URL** and **Access Token URL** values. Past these values in the Zapier integration **Step 4 Add OAuth v2 Endpoint Configuration** section. For example,\
   Authorization URL: `https://example.rocket.chat/oauth/authorize`\
   Access token URL: `https://example.dev.rocket.chat/oauth/token`
5. Save the values and test the authentication.&#x20;
6. A pop-up window opens to request access to your Rocket.Chat workspace account. Grant the access and your connection is complete!
