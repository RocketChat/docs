# Security

Rocket.Chat prioritizes data security in all of our services and offers robust security measures to protect your data in your Rocket.Chat cloud account. In this section, learn how to manage the security settings of your account.

## **Reset your password**&#x20;

* Sign out from your cloud account and click **Reset password** on the login page. A password reset link is sent to your email if it matches an account.&#x20;
* Click **Reset My Password** from the email to update your new passwords for your cloud accounts.

## **Two-factor authentication**

Enabling Two Factor Authentication (2FA) adds an extra layer of security to your Rocket.Chat Cloud account.

{% hint style="warning" %}
To set up 2FA (two-factor authentication) for your cloud account, you must first have a password set up.
{% endhint %}

To set up 2FA for your cloud account,&#x20;

* From the sidebar menu, navigate to **Security > Two-factor authentication**.
* Click **Enable.** A modal is displayed, prompting you to enter your TOTP (time-based one-time password) or to set up one if you don't have one.
* Download any Authenticator app of your choice to proceed. Some popular Authenticators include [Google Authenticator](https://chromewebstore.google.com/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai),[ Authy, ](https://authy.com/)and[ Duo](https://duo.com/).
* Scan the QR Code with your Authenticator app or set up the Authentication keys manually.
* Enter the TOTP code from your authenticator app and click **Next.**
* A list of backup codes is displayed. Save them securely in case you lose access to your Authenticator app.

{% hint style="success" %}
When you enable 2FA on your account, you're prompted to provide an Authenticator code when resetting your password or logging in using passwords and passwordless methods.
{% endhint %}

Congratulations - your 2FA setup is complete. The number of backup codes left is displayed, and a button to disable 2FA or generate new codes.

## Delete your account

To delete your account, go to **Security** and click **Delete account**. Keep the following points in mind:

* If you have an **ongoing paid subscription** or an **active contract**, you cannot delete your account. Once the duration of the subscription or contract is complete, you can delete your account.
* **If you are the owner** of any workspaces and organizations associated with your account, they are all deleted with account deletion.&#x20;
* **If you are not the owner** of workspaces and organizations, you are removed from the organization with the account deletion.

Refer to the [Privacy Policy](https://docs.rocket.chat/customer-center/legal-center/privacy-policy) topic to learn about Rocket.Chat's policies regarding the collection, use, and disclosure of personal data.
