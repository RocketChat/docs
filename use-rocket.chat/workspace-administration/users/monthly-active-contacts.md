# Monthly Active Contacts

Monthly Active Contact (MAC) is a metric used to measure the number of unique contacts engaging with your workspace via Omnichannel on a monthly basis. It is helpful in determining the most suitable [subscription plan](../../../readme/our-plans.md) and add-on packs for workspaces using Omnichannel. Workspaces that require [Omnichannel](../../omnichannel/) capabilities will be charged accordingly through the MAC add-on.&#x20;

{% hint style="success" %}
* A contact is considered active when their message is received in the workspace, processed by the routing system, and responded to by an [agent](../../omnichannel/agents.md).
{% endhint %}

A contact initiating conversations through different channels is counted only once within the same month if the workspace successfully identifies them by primary fields like email address and telephone number present in the contact's profile. For example, if CRM provides the email and phone number of registered contacts, the workspace can accurately recognize the same customer on Livechat, SMS, and WhatsApp channels. Otherwise, the contact is counted multiple times.

**MAC Pack**

**MAC pack** is the add-on mechanism that allows you to determine and purchase the number of MACs your workspace consumes during the billing period. Each MAC pack is capped at **3000 active contacts**. The number of MAC packs you can purchase during your billing period depends on your workspace [subscription plan.](monthly-active-contacts.md#mac-plan-comparison) However, it does not affect your [subscription plan](../../../readme/our-plans.md).&#x20;

The billing period is represented by a **monthly calendar**. It starts counting the moment you upgrade to a plan—and resets the counter to zero when a new month begins. For example, if you upgrade to a PRO plan on Jan 18,  you can interact with up to 15,000 contacts between Jan 18th to Jan 31st. On February 1st, the counter is reset, and you can interact with up to 15,000 Monthly Active Contacts until March 1st.

**MAC Fair Usage Allowance**&#x20;

The **MAC Fair Usage Allowance** enables workspaces to temporarily exceed the MAC scale limits of their current plan without extra costs. When a workspace hits the MAC scale limit of its current plan, the fair usage allowance is triggered, providing a 30-day trial license for the next plan. Throughout this period, you can engage with multiple contacts within the scale limit specified by the trial plan. This allowance occurs once per major [release](https://github.com/RocketChat/Rocket.Chat/releases) (e.g., 6.x, 7.x, 8.x).  After the trial period, the workspace reverts to the original plan.

## MAC Plan Comparison

The rules for MACs vary distinctly across the different the Rocket.Chat [plans](../../../readme/our-plans.md). Therefore, when choosing a plan, it is important to consider how many contacts you intend to interact with monthly.

**Starter Plan**

The [Starter plan](../../../readme/our-plans.md#starter-plan) offers 100 MACs for free. When the limit is reached, the workspace behaves as follows:

1. **If a PRO trial has not been previously granted in the workspace:**
   * The MAC fair usage allowance is triggered and a [pro-trial.md](../../../setup-and-configure/trials/pro-trial.md "mention") is activated in the workspace immediately. Omnichannel operations can proceed seamlessly within the limits of the Pro plan until the trial period expires.
2. **If a PRO trial has been granted in the workspace:**
   * You can either upgrade to the [PRO plan](monthly-active-contacts.md#pro-plan) immediately to buy MAC packs or wait until the next billing month to handle incoming chats. Throughout this period, the workspace still receives incoming chats, but [agents](../../omnichannel/agents.md) won't be able to take them from the queue.

**Pro Plan**

With the [Pro plan](../../../readme/our-plans.md#pro-plan), you get the benefits of the Starter plan, which includes 100 free MACs. To exceed that limit and interact with more contacts, determine the number of MACs your workspace requires monthly and purchase the amount of **MAC packs(each capped at 3000 MACs)** that suit your needs.

You can purchase between **1-5 MAC packs** on the Pro plan. When your purchased MAC pack limit is reached, the workspace administrator is notified and the workspace behaves as follows:

1. **If an Enterprise trial has not been previously granted in the workspace:**
   * The MAC fair usage allowance is triggered and an [enterprise-trial.md](../../../setup-and-configure/trials/enterprise-trial.md "mention") is activated in the workspace immediately. You can continue to interact with your contacts until the trial period expires.
2. **If an Enterprise trial has been granted in the workspace:**
   * You can purchase additional MAC packs or upgrade to the [enterprise plan](../../../readme/our-plans.md#enterprise-plan) if you've reached the Pro plan limit of 5 MAC packs.&#x20;
   * You can choose to wait until the next billing month to handle incoming chats. Throughout this period, the workspace still receives incoming chats, but [agents](../../omnichannel/agents.md) won't be able to take them from the queue.

**Enterprise Plan**

With our [Enterprise plan](../../../readme/our-plans.md), you have the flexibility to customize your workspace's MAC scale limit and purchase additional MAC packs required to suit your needs.

{% hint style="info" %}
When limit restrictions are applied to a workspace, workspace [managers](../../omnichannel/managers.md) and administrators can view incoming chats in [current-chats.md](../../omnichannel/current-chats.md "mention") but cannot interact with them.
{% endhint %}

To **purchase MAC packs on your workspace**, [contact our sales team](https://www.rocket.chat/sales-contact) or continue with these steps on your [Rocket.Chat Cloud portal](https://cloud.rocket.chat/),

* Select the workspace.
* Click the **Manage Subscription** button.
* Select **MAC pack** as the add-on you want to purchase.
* Select either a monthly or yearly renewal period.
* Enter the number of **MAC packs** you want to purchase.
* Click **Save** and your workspace is updated with the purchased MACs.

In conclusion, MAC is crucial for measuring the contacts that your workspace interacts with. Rocket.Chat's [premium plans](../../../readme/our-plans.md) provide a dynamic approach to handling Monthly Active Contacts (MACs). With MAC packs, workspaces can efficiently manage and scale their interactions with contacts, ensuring a cost-effective and tailored solution for effective Omnichannel engagement. For more details on MACs, visit [monthly-active-contacts-faqs.md](../../../resources/frequently-asked-questions/monthly-active-contacts-faqs.md "mention").
