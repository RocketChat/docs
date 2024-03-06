# Import from Slack

With Rocket.Chat's import feature, you can import your Slack users, channels, messages, and other data to your workspace. This page guides you through the required steps.&#x20;

## Prerequisites

* Permission to export Slack data.
* Permission to import data to Rocket.Chat workspace.

Before importing, keep the following points in mind:

* If your Slack workspace is currently set up to hide emails, they'll also be excluded from exports. You can update your workspace settings temporarily and re-run the export to include emails as well.
* It can be helpful to export time ranges from Slack such that the size of each import file is less than 15MB.
* If facing difficulties during the upload phase of the import process, try copying the archive directly to the uploads folder using other means such as `scp`. Then select **Server File Path** as the **File Type**.
* **Channel name with special character:** If you use **special characters** in the channel name, it is important to enable the option [_"Allow Special Characters in Room Names"_](https://docs.rocket.chat/use-rocket.chat/workspace-administration/settings/layout#user-interface) in layout settings. An advanced option is to edit the special characters accepted in the [_UTF-8 setting_](https://docs.rocket.chat/use-rocket.chat/workspace-administration/settings/general#utf8) in the general configuration. For example:\
  `[0-9a-zA-Z-_.ãÃàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$`
* If you import a Slack user with the same username as in your Rocket.Chat workspace, the Slack user is not imported.
* If you import a Slack channel with the same name as in your Rocket.Chat workspace, the messages from Slack are imported into the existing Rocket.Chat channel.

## Export Slack data

* To export your entire Slack workspace data, go to [Export your workspace data](https://slack.com/intl/en-in/help/articles/201658943-Export-your-workspace-data) for instructions.&#x20;
* To export your user list as a CSV file, go to [Download a list of members in your workspace](https://slack.com/intl/en-in/help/articles/4405848563603-Download-a-list-of-members-in-your-workspace) for instructions.

Once your data is ready, go to the next steps to import it into your workspace.

## Import Slack data

In your Rocket.Chat workspace, go to **Administration** > **Workspace** > **Import**. The **Import** page lists the import history.

1. Click **Import New File**.
2. For the **Import Type** field:
   1. Select **Slack** to import your entire workspace data.
   2. Select **Slack's Users CSV** to import the users only.
3. Select one of the following options for the **File Type** field:
   1. **Upload**: Upload the exported data as a `.zip` file.
   2. **Public URL**: Enter the file URL.
   3. **Server File Path**: Enter the file path.
4. Click **Import**.&#x20;
   1. If you are importing your entire **Slack** workspace data, the users, channels, and messages tabs are displayed. Deselect the **Users** and **Channels** you do not want to import. By default, all messages from the selected users and channels are imported.
   2. If you are importing only your **Slack's Users CSV**, the list of users is displayed. You can deselect the users that you do not want to import.
5. Click **Start Importing**. Once the import is successful, you can view the import details on the **Import** page.

## After import

Now that your Slack data has been successfully imported, you can take the following steps to verify your data:

1. Go to **Administration** > **Workspace** > **Users**. Check that your Slack users are present. Note that the `Workspace Admin` role of a Slack user is inherited in Rocket.Chat as `admin`. Other users have the `user` role.
2. Use the search option to search for the imported channels. You can see the imported messages in the channels.
