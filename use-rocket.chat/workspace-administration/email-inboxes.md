---
description: Omnichannel Integration between Rocket.Chat and email.
---

# Email Inboxes

As an administrator, you can configure and manage Omnichannel email inboxes or email accounts for the email channels.

{% hint style="warning" %}
**You must have the** [**Omnichannel**](https://docs.rocket.chat/guides/administration/settings/omnichannel-admins-guide#enable-omnichannel) **enabled as well as have** [**agents**](../omnichannel/agents.md) **and** [**managers**](../omnichannel/managers.md) **assigned in order to use this feature.**
{% endhint %}

To set up a new email inbox:

* Navigate to **Administration > Workspace > Email Inboxes**
* Click **+ New Email Inbox**:

Enter the following details:

* Add the **Name** of the email inbox.
* Specify the **Email** address.
* Assign it to a **Department; (optional).**
* Configure SMTP server.
* Toggle switch **Connect with SSL/TLS; (optional).**

{% hint style="info" %}
For Outlook accounts, disable the SSL option under SMTP.
{% endhint %}

* Configure the **IMAP** server.
* &#x20;Toggle switch **Connect with SSL/TLS** for IMAP**; (optional).**
* Hit **Save**

Your email inbox is set up, and your agents can receive emails within Rocket.Chat now.

## Configure Email Inbox with 2FA

If you have two-factor authentication enabled on your email account, using your regular email password to connect will result in an error. You need to generate an app password instead of the usual password.

To generate your app password, follow these guides:

{% embed url="https://support.google.com/accounts/answer/185833?hl=en" %}
GMail
{% endembed %}

{% embed url="https://support.microsoft.com/en-gb/account-billing/manage-app-passwords-for-two-step-verification-d6dc8c6d-4bf7-4851-ad95-6d07799387e9" %}
Outlook
{% endembed %}

{% embed url="https://help.aol.com/articles/Create-and-manage-app-password" %}
AOL Mail
{% endembed %}

{% embed url="https://help.yahoo.com/kb/generate-manage-third-party-passwords-sln15241.html?guccounter=1&guce_referrer=aHR0cHM6Ly9hcHAuZ2l0Ym9vay5jb20vby8tTTQxZE9QdG5qTzdxSzZLQ3lydC9zL05RUndxZEY3RHk5M1E1TXcwa3pzL34vY2hhbmdlcy8yNzYvdXNlLXJvY2tldC5jaGF0L3dvcmtzcGFjZS1hZG1pbmlzdHJhdGlvbi9lbWFpbC1pbmJveGVz&guce_referrer_sig=AQAAAJCBd5ySBYp5zKTldy88sQWD60c4_0VNPPT0QoxPX4NRIyOuGmzbnvyE4GtZMaMSc6RIzd5Tne9KCxEjDzS_brd0rCs_Po6PioD9tBEOnkh5nl" %}
Yahoo Mail
{% endembed %}

### Configuration for Office365

To connect an **Office365** email to a Rocket.Chat workspace,

* &#x20;Navigate to **Admin Center > Active Users > Click on a user > Mail > Manage Email Apps**  and enable **IMAP.**
* Next, go to **Azure Active Directory > Properties > Manage Security Defaults**. Select **No** for **Enable Security defaults**.
* Confirm that 2FA is turned **OFF** for the email account on office365.
* On your workspace, navigate to **Administration > Workspace > Email Inboxes**. Click the **New Email Inbox** button and update the configurations as follow:
  * Toggle **ON** the **Active** button.
  * Fill in the **Name**, **Email**, **Description**, **Sender Info,** and **Department**.
  * **Configure Outgoing Mail (SMTP)**
    * Server: `smtp.office365.com`
    * Port: `587`
    * Username: \<Your office365 email>
    * Password: \<Your office365 password>
    * Connect with SSL: **OFF**&#x20;
  * **Configure Incoming Mail (IMAP)**
    * Server: `outlook.office365.com`
    * Port: `993`
    * Username: \<Your office365 email>
    * Password: \<Your office365 password>
    * Connect with SSL: ON
* Click **Save**.
