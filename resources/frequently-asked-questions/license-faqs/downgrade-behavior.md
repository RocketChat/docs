# Downgrade behavior

## **What Happens When I Downgrade My Rocket.Chat Workspace Plan?**

Downgrading your Rocket.Chat workspace to a lower-tier plan involves certain changes in features and functionalities. Understanding these changes is crucial for a smooth transition. Here are the key impacts of downgrading from different plans:

**1. Downgrading from Enterprise to Starter or Pro:**

* **Engagement Dashboard:** This feature will be unavailable post-downgrade.
* **Device Management:** You will lose access to this functionality.
* **Custom Roles:** The creation of new custom roles will not be allowed.
* **Scalability:** Access to multi-instance or microservices architecture will be revoked. If your workspace uses this model, a new deployment will be necessary.
* **Advanced User Authentication:** Premium user authentication features will be disabled.
* **Guest Users:** The ability to create new guest users will be removed.

**2. Downgrading from Starter or Pro to Community Plan:**

* **Read Receipts:** This feature will be disabled, and historical data will be lost.
* **Push Notifications:** Secure push notifications will be disabled, and the 10k per month quota will resume.
* **White Label:** The Rocket.Chat watermark will be re-added, and homepage customization will be limited.
* **Apps:** All apps will be disabled, and your workspace will be limited to 5 public and 3 private apps. Premium apps will cease to function and cannot be re-enabled.
* **Video Conferencing:** The call manager will be disabled, and premium apps will be subject to the app restrictions mentioned above.
* **User Presence Service:** This service will be disabled once 200 concurrent user connections are reached.

**3. Transition from Enterprise to Community Plan:**

* In case of downgrading from the Enterprise to the Community Plan, all the aforementioned restrictions from both downgrade scenarios will apply to your workspace.

It's important to carefully consider these changes when planning a downgrade, as they can significantly impact your team's collaboration and communication capabilities within Rocket.Chat. If you have any concerns or require further clarification, our support team is ready to assist you through this transition.
