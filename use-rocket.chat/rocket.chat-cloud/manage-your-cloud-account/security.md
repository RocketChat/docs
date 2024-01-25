---
description: Manage the security of your Rocket.Chat Cloud account.
---

# Security

Rocket.Chat prioritizes data security in all of our services and offers robust security measures to protect your data in your Rocket.Chat cloud account.

**To reset your password,**&#x20;

* Sign out from your cloud account and click **Reset password** on the login page. A password reset link is sent to your email if it matches an account.&#x20;
* Click **Reset My Password** from the email to update your new passwords for your cloud accounts.

**Two Factor Authentication**

Enabling Two Factor Authentication (2FA) adds an extra layer of security to your Rocket.Chat Cloud account.

{% hint style="warning" %}
To set up 2FA (two-factor authentication) for your cloud account, you must first have a password set up.
{% endhint %}

To set up 2FA for your cloud account,&#x20;

* From the sidebar menu, navigate to **Security > Two-factor authentication**.
* Click **Enable.** A modal is displayed, prompting you to enter your TOTP (time-based one-time password) or to set up one if you don't have.
* Download any Authenticator app of your choice to proceed. Some popular Authenticators include [Google Authenticator](https://chromewebstore.google.com/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai),[ Authy, ](https://authy.com/)and[ Duo](https://duo.com/).
* Scan the QR Code with your Authenticator app or set up the Authentication keys manually.
* Enter the TOTP code from your authenticator app and click **Next.**
* A list of backup codes is displayed. Save them securely in case you lose access to your Authenticator app.

{% hint style="success" %}
When you enable 2FA on your account, you're prompted to provide an Authenticator code when resetting your password or logging in using passwords and passwordless methods.
{% endhint %}

Congratulations - your 2FA setup is complete. The number of backup codes left is displayed and a button to disable 2FA or generate new codes.
