# Canned Responses

<figure><img src="../../../.gitbook/assets/Premium.svg" alt=""><figcaption></figcaption></figure>

Canned responses, also known as predefined responses or templated responses, are pre-written messages that can be quickly used to respond to common questions, issues, or inquiries in Omnichannel conversations or general messaging within your Rocket.Chat workspace. To use a canned response, type  the shortcut (preceded with `!`) in the message  box.

## Canned Responses Rocket.Chat Admin's Guide

As a Rocket.Chat workspace admin, you can enable and disable Canned Responses on your server.

### Enable Rocket.Chat Canned Responses

To enable canned responses on your workspace,

* Go to **Administration** > **Workspace** > **Settings** > **Omnichannel** > **Canned Responses**
* Activate the toggle to enable and **Save Changes**

{% hint style="info" %}
* When Canned Responses is enabled, it'll be available to users with the corresponding `canned-responses` permission.
* To enable **Canned Responses** for the first time, **Omnichannel** needs to be enabled first.
* **Canned Responses** can be used only in the normal workspace when Omnichannel is disabled.
{% endhint %}

## Canned Responses Permissions

Go to **Administration** > **Workspace** > **Permissions** and search for `canned-response`, you can now define which user roles should be able to view, create, and delete canned responses in your workspace.

Each canned response has a scope and there are three scope levels for creating canned responses:

* **User-level**: These canned responses are created by [agents](../agents.md) for their use. It won't be visible to any other user. This requires the  `save-canned-responses` [permission](../../workspace-administration/permissions/).
* **Department level**: These canned responses are created by department [managers](../managers.md) and are accessible to the [agents](../agents.md) who belong to that department. It requires the  `save-department-canned-responses` [permission](../../workspace-administration/permissions/).
* **Global level**: These canned responses are created by managers to be used globally in your workspace. Anyone can access them and it requires the  `save-all-canned-responses` [permission](../../workspace-administration/permissions/).

{% hint style="info" %}
To create a new canned response for your workspace, visit [Canned Responses Omnichannel Managers Guide](canned-responses-omnichannel-managers-guide.md).
{% endhint %}

See the guides below to learn more about how to use canned response:

* [Canned Responses Omnichannel Manager's Guide](canned-responses-omnichannel-managers-guide.md)
* [Canned Responses Omnichannel Agents Guide](../../omnichannel-agents-guides/omnichannel-conversation.md#canned-responses)
