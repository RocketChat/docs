# Cloud FAQs

## Trials

<details>

<summary>How long do trials last?</summary>

Currently, trials last 30 days.

</details>

<details>

<summary>How can I convert from a trial to a paid plan?</summary>

Our trials are fully featured. So if you enter your card information in the billing section of the [Cloud Console](https://cloud.rocket.chat) your trial will automatically convert to a paid plan at the end of the trial period.

</details>

<details>

<summary>How do I cancel my trial?</summary>

You can cancel your Rocket.Chat workplace directly within the Cloud Console.

</details>

## Data Export

<details>

<summary>How can I get a data export?</summary>

Send an email to **support@rocket.chat** with the address of your workspace. Note: The request will take some time to fulfill.

</details>

## Cloud Accounts

***

<details>

<summary><strong>How do I view the push usage for my workspace?</strong></summary>

To view the push usage for your workspace,&#x20;

* Log in to your [Rocket.Chat Cloud](https://cloud.rocket.chat/home) account.
* Navigate to **Workspace** and click the workspace you want to see usage for.

<img src="../../.gitbook/assets/image (343).png" alt="" data-size="original">

</details>

<details>

<summary>I already canceled my workspace, but it is still in the “Cancelling” status and is accessible. Why?</summary>

If you cancel your workspace in the middle of the billing period, it will be accessible and in the “Cancelling” status till the end of your billing period.

For example, suppose you are charged on the 5th of every month and decide to cancel the subscription on the 20th of December or later. In that case, your workspace will be operational till the 5th of January (this way, we want to allow customers to use what they paid for). After this, it will stop running and switch to “Cancelled.”

</details>

<details>

<summary>How do I cancel my cloud subscription?</summary>

Only the workspace administrator in your [Cloud Console](https://cloud.rocket.chat/) can cancel your subscription.

* &#x20;Navigate to Workspaces.&#x20;
* Click on the kebab menu against the workspace and select **Cancel**. \
  \
  It will stop your subscription and hibernate your server (your server will still exist if you want to return to Rocket.Chat later).

<img src="../../.gitbook/assets/cancel_cloud_subscription (1) (1) (1) (1).png" alt="" data-size="original">

If you need a database dump or want to permanently delete your workspace and all the associated data, submit a [ticket ](https://desk.rocket.chat/portal/en/newticket?departmentId=413244000000006907\&layoutId=413244000000074011)on our Helpdesk or email [support@rocket.chat](mailto:support@rocket.chat) with the respective request.

</details>

<details>

<summary>How can I create one more workspace with the same Cloud account?</summary>

Please, note that only our Cloud engineers can do this. If you want to create an additional workspace, submit a [ticket ](https://desk.rocket.chat/portal/en/newticket?departmentId=413244000000006907\&layoutId=413244000000074011)on our Helpdesk or email [support@rocket.chat](mailto:support@rocket.chat), including the workspace address you want and the plan.

&#x20;\
Additional workspaces are billed based on their usage. So if you have five users on one workspace and ten on the other, you will get billed for them separately.

</details>

<details>

<summary>How can I change the ownership of the workspace?</summary>

If you need to grant the ownership of your workspace to another person or to change the primary email of your workspace, submit a [ticket ](https://desk.rocket.chat/portal/en/newticket?departmentId=413244000000006907\&layoutId=413244000000074011)on our Helpdesk or email [support@rocket.chat](mailto:support@rocket.chat)&#x20;

Submit the ticket from the admin email address (the email address the workspace is registered under). The ticket should contain the email address where the ownership should be granted.

</details>

<details>

<summary>I already canceled my subscription but was charged again. Why?</summary>

We charge our customers afterward, not in advance. It means you are charged for the previous month of use on a particular day of each month.

Suppose you started your trial on December 1st, it expired on December 15th, and your subscription was automatically continued (you added the payment method before the trial expired) - on January 15th, you will receive an invoice for the previous month (December 15th - January 15th).

</details>

<details>

<summary>How can I reactivate my workspace after the trial has expired?</summary>

If your trial has expired, and you didn’t add your payment method to continue your subscription,&#x20;

* Navigate to **Payments** on your [Cloud Console](https://cloud.rocket.chat/).
* Click **Add payment method** to add your card (credit/debit card is the only payment method we currently accept).

</details>

<details>

<summary>How to change workspace region?</summary>

The region is defined upon creation. Customers can not migrate their instances between regions independently. It requires manual work required by Rocket.Chat Cloud team. If you need to switch regions, submit a [ticket ](https://desk.rocket.chat/portal/en/newticket?departmentId=413244000000006907\&layoutId=413244000000074011)on our Helpdesk or email [support@rocket.chat](mailto:support@rocket.chat)&#x20;

</details>

<details>

<summary>How can I change or remove my credit card data?</summary>

You can not delete the card that is the only one (default one) linked to your workspace as well as you can not delete the card that was charged last. For the above caes. you will see the error message “Can't delete last payment option.”

If you need to change the card - add it as a new payment method and make it the default one (after that, you can delete all other cards).

If you want to remove the card information before canceling your subscription, please note that your payment data and all the other data associated with your workspace can only be deleted.&#x20;

To request that, submit a [ticket ](https://desk.rocket.chat/portal/en/newticket?departmentId=413244000000006907\&layoutId=413244000000074011)on our Helpdesk or email [support@rocket.chat](mailto:support@rocket.chat)&#x20;

</details>

<details>

<summary>Can I use another payment method rather than a credit/debit card?</summary>

A credit/debit card is the only payment method we accept at the moment.

For companies paying up-front for a specific period, we provide invoices to pay by wire transfer.

</details>

<details>

<summary>How to change your Cloud account email?</summary>

Cloud account email can be changed at cloud.rocket.chat on the Profile page. If you have difficulties changing the email of the account owner, contact us at support@rocket.chat. The request must be sent from the original account owner's email.

</details>

<details>

<summary>How to request a custom domain?</summary>

To request a custom domain,&#x20;

* Set up a CNAME DNS record for the domain name you want to have pointing to "**cdns.use1.cloud.rocket.chat**" (for US region) and to "**cdns.euc1.cloud.rocket.chat**" (for EU region).&#x20;
* Then,  send us an email to support@rocket.chat so we can make respective changes to your workspace.

Setting a custom domain is available only in the Enterprise Edition offering.

</details>
