# Livechat Triggers

Omnichannel Livechat triggers are events you can set up. When these events occur, they make the Livechat widget take action or open automatically.

To access this menu, go to **Administration > Omnichannel > Livechat Triggers**. Here, you can **View**, **Create New**, **Edit**, or **Delete** existing Livechat Triggers.

## Create new Omnichannel Livechat trigger

To create a new Omnichannel Livechat trigger, click **Create trigger** and enter the following details:

* **Enable**: Enables the Livechat trigger.
* **Run only once for each visitor**: Select to have the trigger run once for each visitor. If false, you get a recurring pop-open. (For example, If your user goes to a different website and comes back to the same website, it pops open.)
* **Name**: Name your new trigger.
* **Description**: Set the description of the trigger.
* **Condition**: Select the condition for which the action will be triggered. Depending on what condition to track, you can set additional properties for validation.
  * **Visitor Page URL**: This setting lets you specify a regular expression (regex) describing the website page where you want the live chat widget trigger to occur. For instance, if your website is xyz.com and you wish for the trigger to occur only on a specific page (xyz.com/contact) and not on any other pages, select "**Visitor Page URL**" and enter the regex. In this scenario, the regex should be `.*/contact`_._  Alternatively, if you want the trigger action to occur on all your website pages, the regex should be  `.*`.
  * **Visitor Time on Site**: The action occurs after the specified time in seconds once the customer visits your website.
  * **Chat Open by Visitor**: The action occurs when the customer/visitor opens a new chat.
  * **After Guest Registration**: The action occurs after a guest submits the Livechat registration form.
* **Action**: Define the action you want the Livechat widget to perform. For now, there is only one option of sending a message to the visitor. You can also select if you want to impersonate the next available agent in the queue or use a bot/custom agent.
* **Sender**: Select the sender of the trigger action:
  * **Impersonate next agent from queue**: The next agent from the queue is impersonated as the sender.
  * **Custom agent**: Select the custom agent as the sender of the trigger action and message.
* **Message**: Enter a message for the trigger.

## Edit Omnichannel Livechat trigger

To edit an Omnichannel Livechat trigger:

* Select the trigger from the list of triggers.
* A section is opened with all the current details of that trigger, which can be modified and saved.

## Delete Omnichannel Livechat trigger

To delete a trigger, click on the **delete** icon on the right-hand side of the trigger.
