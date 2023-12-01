# Monthly Active Contacts (MACs)

Monthly Active Contact (MAC) is a key metric in Rocket.Chat, used to track the number of unique contacts interacting with your workspace through Omnichannel each month. This metric is vital for selecting the appropriate [subscription plan](../../../readme/our-plans.md) and add-on packs, especially for workspaces utilizing [Omnichannel](../../omnichannel/) capabilities. Charges for these workspaces are based on the MAC add-on.

**Definition of Active Contact:**&#x20;

A contact is deemed active when they send a message that is received, processed by the routing system, and responded to by an agent. If a contact engages through multiple channels (like Livechat, SMS, WhatsApp), they are counted once in the same month, provided they are identified by primary fields (email, phone number) in their profile. Without such identification, the contact is counted multiple times.

**MAC Pack:**

The MAC pack is an add-on that allows workspaces to determine and purchase the required number of MACs for a billing period. Each pack covers up to 3000 active contacts. The number of MAC packs purchasable depends on the workspace's subscription plan. The billing period is monthly, starting from the date of plan upgrade.

The billing cycle operates on a monthly basis, commencing from the date of your plan upgrade. This cycle resets at the beginning of each new calendar month. To illustrate, if you switch to the PRO plan on January 18th, your interaction limit with contacts is capped at 15,000 for the period from January 18th to January 31st. Subsequently, on February 1st, this interaction limit is reset, allowing you to engage with up to 15,000 Monthly Active Contacts until the onset of March 1st.

**MAC Fair Usage Allowance:**

The MAC Fair Usage Allowance permits temporary exceeding of MAC scale limits without extra costs. Triggered when the limit of the current plan is reached, it offers a 30-day trial license for the next plan.  Throughout this period, you can engage with multiple contacts within the scale limit specified by the trial plan. This allowance is available once per major release (e.g., 6.x, 7.x, 8.x). After the trial period, the workspace reverts to the original plan.

**Plan-Specific Rules:**

Different Rocket.Chat plans have specific rules regarding Monthly Active Contacts (MACs). It is crucial to factor in your anticipated monthly contact interaction volume when selecting a plan.

* **Starter Plan:** Offers 100 free MACs. Upon reaching this limit:
  1. If no [PRO trial](../../../setup-and-configure/trials/pro-trial.md) was previously granted, a Pro Trial is activated.
  2. If a PRO trial was granted, upgrade to PRO or wait until the next billing month. During this wait interval, the workspace will continue to receive incoming chats. However, agents will not be able to retrieve these chats from the queue.
* **Pro Plan:** Includes Starter plan benefits plus the ability to purchase additional up to 5 MAC packs (each capped at 3000). Upon reaching this limit:
  1. If no Enterprise trial was previously granted, an Enterprise Trial is activated. You can continue to interact with your contacts until the trial period expires.
  2. If an Enterprise trial was granted, purchase additional MAC packs (up to 5) or upgrade to Enterprise. Alternatively, you have the option to defer handling incoming chats until the beginning of the next billing month. During this interim, the workspace will continue to accept incoming chats, yet agents will be unable to retrieve these chats from the queue.
* **Enterprise Plan:** Customizable MAC scale limit with the option to purchase additional MAC packs.

{% hint style="warning" %}
When a workspace is subject to limit restrictions, workspace managers and administrators have the ability to view incoming chats in [current chats](../../omnichannel/current-chats.md), but are restricted from interacting with them.
{% endhint %}

**Purchasing MAC Packs:**

To purchase MAC packs on your workspace, [contact our sales team](https://www.rocket.chat/sales-contact) or continue with these steps on your [Rocket.Chat Cloud portal](https://cloud.rocket.chat/),

* Select the workspace.
* Click the **Manage Subscription** button.
* Select **MAC pack** as the add-on you want to purchase.
* Select either a monthly or yearly renewal period.
* Enter the number of **MAC packs** you want to purchase.
* Click **Save,** and your workspace is updated with the purchased MACs.

With MAC packs, workspaces can efficiently manage and scale their interactions with contacts, ensuring a cost-effective and tailored solution for effective Omnichannel engagement. For more details on MACs, visit [monthly-active-contacts-faqs.md](../../../resources/frequently-asked-questions/monthly-active-contacts-faqs.md "mention").
