# Manage Settings Using Environmental Variables

In software configuration, environmental variables play a crucial role in managing settings. Rocket.Chat leverages environmental variables to provide a flexible and efficient way to manage settings. This guide will provide a comprehensive overview of how Rocket.Chat manages settings using environmental variables

When starting your server, you can set any settings value via an environment variable. You will only have to know the setting ID and the data type of the setting (boolean, string, integer, etc.).

## Basic Settings

<table><thead><tr><th width="312">Name</th><th>Data Type</th></tr></thead><tbody><tr><td><code>_id</code></td><td><code>SettingId</code> = string</td></tr><tr><td><code>type</code></td><td><ul><li>boolean </li><li>timezone</li><li>string</li><li>relativeUrl</li><li>password</li><li>int</li><li>select</li><li>multiSelect</li><li>language</li><li>color</li><li>font</li><li>code</li><li>action</li><li>asset</li><li>roomPick</li><li>group</li><li>date</li></ul></td></tr><tr><td><code>public</code></td><td>boolean</td></tr><tr><td><code>env</code></td><td>boolean</td></tr><tr><td><code>group</code> (Optional)</td><td><code>GroupId</code> = <code>SettingId</code></td></tr><tr><td><code>section</code> (Optional)</td><td><code>SectionName</code> = string</td></tr><tr><td><code>tab</code> (Optional)</td><td><code>TabId</code> = <code>SettingId</code></td></tr><tr><td><code>i18nLabel</code></td><td>string</td></tr><tr><td><code>value</code></td><td><p><code>SettingValue</code> can be one of the following types:</p><ul><li>string</li><li>boolean</li><li>number</li><li>SettingValueMultiSelect</li><li>Date</li><li>AssetValue</li><li>undefined</li></ul></td></tr><tr><td><code>packageValue</code></td><td><p><code>SettingValue</code> can be one of the following types:</p><ul><li>string</li><li>boolean</li><li>number</li><li>SettingValueMultiSelect</li><li>Date</li><li>AssetValue</li><li>undefined</li></ul></td></tr><tr><td><code>blocked</code></td><td>boolean</td></tr><tr><td><code>enableQuery</code> (Optional)</td><td>string</td></tr><tr><td><code>displayQuery</code> (Optional)</td><td>string</td></tr><tr><td><code>sorter</code></td><td>number</td></tr><tr><td><code>properties</code> (Optional)</td><td>unknown</td></tr><tr><td><code>enterprise</code> (Optional)</td><td>boolean</td></tr><tr><td><code>requiredOnWizard</code> (Optional)</td><td>boolean</td></tr><tr><td><code>hidden</code> (Optional)</td><td>boolean</td></tr><tr><td><code>modules</code> (Optional)</td><td>Array</td></tr><tr><td><code>invalidValue</code> (Optional)</td><td><p><code>SettingValue</code> can be one of the following values:</p><ul><li>string</li><li>boolean</li><li>number</li><li>SettingValueMultiSelect</li><li>Date</li><li>AssetValue</li><li>undefined</li></ul></td></tr><tr><td><code>valueSource</code> (Optional)</td><td>string</td></tr><tr><td><code>secret</code> (Optional)</td><td>boolean</td></tr><tr><td><code>i18nDescription</code> (Optional)</td><td>string</td></tr><tr><td><code>autocomplete</code> (Optional)</td><td>boolean</td></tr><tr><td><code>processEnvValue</code> (Optional)</td><td><p><code>SettingValue</code> can be one of the following values:</p><ul><li>string</li><li>boolean</li><li>number</li><li>SettingValueMultiSelect</li><li>Date</li><li>AssetValue</li><li>undefined</li></ul></td></tr><tr><td><code>meteorSettingsValue</code> (Optional)</td><td><p><code>SettingValue</code> can be one of the following values:</p><ul><li>string</li><li>boolean</li><li>number</li><li>SettingValueMultiSelect</li><li>Date</li><li>AssetValue</li><li>undefined</li></ul></td></tr><tr><td><code>ts</code></td><td>Date</td></tr><tr><td><code>createdAt</code></td><td>Date</td></tr><tr><td><code>_updatedAt</code> (Optional)</td><td>Date</td></tr><tr><td><code>multiline</code> (Optional)</td><td>boolean</td></tr><tr><td><code>values</code> (Optional)</td><td>Array</td></tr><tr><td><code>placeholder</code> (Optional)</td><td>string</td></tr><tr><td><code>wizard</code> (Optional)</td><td><ul><li><code>step</code>: number</li><li><code>order</code>: number</li></ul></td></tr><tr><td><code>persistent</code> (Optional)</td><td>boolean</td></tr><tr><td><code>readonly</code> (Optional)</td><td>boolean</td></tr><tr><td><code>alert</code> (Optional)</td><td>string</td></tr><tr><td><code>private</code> (Optional)</td><td>boolean</td></tr></tbody></table>

## Group Settings

<table><thead><tr><th width="308">Name</th><th>Data Type</th></tr></thead><tbody><tr><td><code>_id</code></td><td>string</td></tr><tr><td><code>hidden</code></td><td>boolean</td></tr><tr><td><code>blocked</code></td><td>boolean</td></tr><tr><td><code>ts</code></td><td>Date</td></tr><tr><td><code>sorter</code></td><td>number</td></tr><tr><td><code>i18nLabel</code></td><td>string</td></tr><tr><td><code>displayQuery</code></td><td>string</td></tr><tr><td><code>i18nDescription</code></td><td>string</td></tr><tr><td><code>value</code></td><td>undefined</td></tr><tr><td><code>type</code></td><td>group</td></tr><tr><td><code>alert</code></td><td>string</td></tr></tbody></table>

## Enterprise Settings

<table><thead><tr><th width="318">Name</th><th>Data Type</th></tr></thead><tbody><tr><td><code>enterprise</code></td><td>true</td></tr><tr><td><code>invalidValue</code></td><td><p><code>SettingValue</code> can be one of the following values:</p><ul><li>string</li><li>boolean</li><li>number</li><li>SettingValueMultiSelect</li><li>Date</li><li>AssetValue</li><li>undefined</li></ul></td></tr></tbody></table>

## Color Settings

<table><thead><tr><th width="326">Name</th><th>Data Type</th></tr></thead><tbody><tr><td><code>type</code></td><td>color</td></tr><tr><td><code>editor</code></td><td>SettingEditor</td></tr><tr><td><code>packageEditor</code> (Optional)</td><td>SettingEditor</td></tr></tbody></table>

## Action Settings

<table><thead><tr><th width="335">Name</th><th>Data Type</th></tr></thead><tbody><tr><td><code>type</code></td><td>action</td></tr><tr><td><code>value</code></td><td>string</td></tr><tr><td><code>actionText</code> (Optional)</td><td>string</td></tr></tbody></table>

## Code Settings

<table><thead><tr><th width="335">Name</th><th>Data Type</th></tr></thead><tbody><tr><td><code>type</code></td><td>action</td></tr><tr><td><code>value</code></td><td>string</td></tr><tr><td><code>actionText</code> (Optional)</td><td>string</td></tr></tbody></table>

## Asset Settings

<table><thead><tr><th width="339">Name</th><th>Data Type</th></tr></thead><tbody><tr><td><code>type</code></td><td>asset</td></tr><tr><td><code>value</code></td><td>AssetValue</td></tr><tr><td><code>fileConstraints</code></td><td>IRocketChatAssetConstraint</td></tr><tr><td><code>asset</code></td><td>string</td></tr></tbody></table>

## SelectOption Settings

<table><thead><tr><th width="346">Name</th><th>Data Type</th></tr></thead><tbody><tr><td><code>key</code></td><td><p>The type can be:</p><ul><li>string</li><li>number</li></ul></td></tr><tr><td><code>i18nLabel</code></td><td>string</td></tr></tbody></table>

## Editor Settings

<table><thead><tr><th width="346">Name</th><th>Data Type</th></tr></thead><tbody><tr><td><code>COLOR</code></td><td>color</td></tr><tr><td><code>EXPRESSION</code></td><td>expression</td></tr></tbody></table>

## Date Settings

<table><thead><tr><th width="346">Name</th><th>Data Type</th></tr></thead><tbody><tr><td><code>type</code></td><td>Date</td></tr><tr><td><code>value</code></td><td>Date</td></tr></tbody></table>

## Statistics Settings

| Name                                       | Data Type |
| ------------------------------------------ | --------- |
| `account2fa` (Optional)                    | boolean   |
| `cannedResponsesEnabled` (Optional)        | boolean   |
| `e2e` (Optional)                           | boolean   |
| `e2eDefaultDirectRoom` (Optional)          | boolean   |
| `e2eDefaultPrivateRoom` (Optional)         | boolean   |
| `smtpHost` (Optional)                      | string    |
| `smtpPort` (Optional)                      | string    |
| `fromEmail` (Optional)                     | string    |
| `fileUploadEnable` (Optional)              | boolean   |
| `frameworkDevMode` (Optional)              | boolean   |
| `frameworkEnable` (Optional)               | boolean   |
| `surveyEnabled` (Optional)                 | boolean   |
| `updateChecker` (Optional)                 | boolean   |
| `liveStream` (Optional)                    | boolean   |
| `broadcasting` (Optional)                  | boolean   |
| `allowEditing` (Optional)                  | boolean   |
| `allowDeleting` (Optional)                 | boolean   |
| `allowUnrecognizedSlashCommand` (Optional) | boolean   |
| `allowBadWordsFilter` (Optional)           | boolean   |
| `readReceiptEnabled` (Optional)            | boolean   |
| `readReceiptStoreUsers` (Optional)         | boolean   |
| `otrEnable` (Optional)                     | boolean   |
| `pushEnable` (Optional)                    | boolean   |
| `globalSearchEnabled` (Optional)           | boolean   |
| `threadsEnabled` (Optional)                | boolean   |
| `bigBlueButton` (Optional)                 | boolean   |
| `jitsiEnabled` (Optional)                  | boolean   |
| `webRTCEnableChannel` (Optional)           | boolean   |
| `webRTCEnablePrivate` (Optional)           | boolean   |
| `webRTCEnableDirect` (Optional)            | boolean   |

## Settings Actions

You can take the following actions while configuring your workspace settings:

* Set the setting values for the first time.
* Overwrite setting values.
* Block settings from being changed.
* Hide settings.
* Set any wizard setting as mandatory.

Let's look at these options in detail.

### Set Setting

To set a setting for the first time, you need only to add the environment variable `SETTING_ID=VALUE` when starting the server.

For example:

```
FileUpload_Storage_Type=hiGoogleCloudStorage
```

{% hint style="info" %}
This only works if the setting isn't already set; hence it's most useful for setting on the initial start. If the setting already has a value, you will need to use [overwrite setting](manage-settings-using-environmental-variables.md#overwrite-setting).
{% endhint %}

### Overwrite Setting

You can overwrite any setting by setting an environment variable prefixed with `OOVERWRITE_SETTING_<Setting Id>`.

For example:

```
OVERWRITE_SETTING_FileUpload_Storage_Type=GoogleCloudStorage
```

Settings capable of this can be seen when hovered in the **Administration** > **Workspace** > **Settings** section.

![](<../../../.gitbook/assets/image (11).png>)

### Block Settings

You can block a setting from being changed by specifying the `SETTINGS_BLOCKED` environment variable. It is a comma-separated list. You need to add any setting you want to block to this list.

For example:

{% code overflow="wrap" %}
```
SETTINGS_BLOCKED=FileUpload_Storage_Type,FileUpload_GoogleStorage_AccessId,FileUpload_GoogleStorage_Secret
```
{% endcode %}

As an administrator, you can't change this from the UI. You must remove it from the list and reboot the server to change this setting.

### Hide Settings

You can hide settings from the client by using the `SETTINGS_HIDDEN` environment variable.

For example:

```
SETTINGS_HIDDEN=FileUpload_GoogleStorage_AccessId,FileUpload_GoogleStorage_Secret
```

{% hint style="info" %}
Take extra caution here because the client needs settings like `FileUpload_Storage_Type`, so it can not be hidden.
{% endhint %}

### **Required Wizard** Settings

You can force settings to be required on wizard pages by using the `SETTINGS_REQUIRED_ON_WIZARD` environment variable.

For example:

```
SETTINGS_REQUIRED_ON_WIZARD=Organization_Type,Organization_Name
```

Rocket.Chat's use of environmental variables for managing your workspace settings provides a powerful and flexible configuration mechanism.&#x20;
