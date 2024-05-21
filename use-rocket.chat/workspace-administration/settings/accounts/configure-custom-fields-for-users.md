# Configure Custom Fields for Users

You can set custom fields for specific users while registering or updating the user information. For example, you can add additional fields, such as address or employee ID.

**Note**: Currently, you may need some basic understanding of Javascript, and Rocket.Chat's internal working structure to set other custom fields than in the example below. A more user-friendly interface is planned for the future.

## Define custom fields

To set custom fields, go to **Administration** > **Workspace** > **Settings** > **Accounts** > **Registration** > **Custom Fields**. Configure the custom fields using a [JSON object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) containing a dictionary of field settings. Let's look at two examples.

**Basic example**

In this example, we add two custom fields, `team` and `designation`, with the type `text`. This means that the custom fields can take any text values as input.

```json
{
	"Team": {
		"type": "text"
	},
	"Designation": {
		"type": "text"
	}
}
```

Once these custom fields are saved, you can enter the values for the fields while creating a new user, or updating an existing user. The following screenshot shows the example:

<figure><img src="../../../../.gitbook/assets/Screenshot 2024-05-16 134844.png" alt=""><figcaption></figcaption></figure>

**Advanced example**

Here, `role` is a custom field consisting of two options (`teacher` and `student`) as the possible values. `twitter` and `dept` are text fields where you can enter any values according to the defined settings.

```json
{
	"role": {
		"type": "select",
		"defaultValue": "student",
		"options": ["teacher", "student"],
		"required": true,
		"modifyRecordField": {
			"array": true,
			"field": "Roles"
		}
	},
	"twitter": {
		"type": "text",
		"required": true,
		"minLength": 2,
		"maxLength": 10
	},
	"dept": {
		"type": "text",
		"required": false,
		"minLength": 12,
		"sendToIntegrations": true
	}
}
```

Let's look at the properties in detail:

<table><thead><tr><th width="222">Field</th><th>Description</th></tr></thead><tbody><tr><td><strong>type</strong></td><td><p>Defines the type of the custom field. </p><p>Currently, there are 2 types: <code>select</code> and <code>text</code>, where <code>select</code> creates a dropdown list, and <code>text</code> creates a plain text form. If you enter a URL in the text field, it is interpreted as a hyperlink (it will be clickable in the <strong>User Info</strong> pane).</p></td></tr><tr><td><strong>defaultValue</strong></td><td>Used with a <code>select</code> form type to set the default option for the list.</td></tr><tr><td><strong>options</strong></td><td>Used with a <code>select</code> form type for the values that should be on the dropdown list, which follows the <code>["item1", "item2","item3"]</code> pattern. Use a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">JavaScript Array</a> to create it.</td></tr><tr><td><strong>required</strong></td><td>Set whether the field is required for registration. Enter <code>true</code> or <code>false</code> for this property.</td></tr><tr><td><strong>minLength</strong></td><td>Used with the <code>text</code> type to define the minimum length required for the text.</td></tr><tr><td><strong>maxLength</strong></td><td>Used with the <code>text</code> type to define the maximum length required for the text.</td></tr><tr><td><strong>modifyRecordField</strong></td><td>This property is required when you add a field that already exists in Rocket.Chat.</td></tr><tr><td><strong>array</strong></td><td>Used inside the <code>modifyRecordField</code> property to define whether the existing field is an array.</td></tr><tr><td><strong>field</strong></td><td>Used inside the <code>modifyRecordField</code> property. It should be the name of the existing field.</td></tr><tr><td><strong>public</strong></td><td>Defines the field as visible to other users when viewing the user's profile. Enter <code>true</code> or <code>false</code> for this property. By default, the value is <code>true</code>.</td></tr><tr><td><strong>private</strong></td><td>Defines the field as private. Only users with <code>view-full-other-user-info</code> permission can see this field when viewing the user's profile. Enter <code>true</code> or <code>false</code> for this property.</td></tr><tr><td><strong>sendToIntegrations</strong></td><td>Define the field as shareable with external applications, such as Omnichannel integrations.</td></tr></tbody></table>

{% hint style="info" %}
* Use `tabs` for indentation in the JSON object, do not use `spaces`.
* You can also use the API to create and manage custom fields. See the [Create User](https://developer.rocket.chat/reference/api/rest-api/endpoints/user-management/users-endpoints/create-user), [Update User](https://developer.rocket.chat/reference/api/rest-api/endpoints/user-management/users-endpoints/update-user), and [Get Users List](https://developer.rocket.chat/reference/api/rest-api/endpoints/user-management/users-endpoints/get-users-list) endpoints.
{% endhint %}

## Display user's custom fields

You can configure the list of custom fields that are displayed on the **User Info** panel. Go to **Administration** > **Workspace** > **Settings** > **Accounts** > **Custom Fields to Show in User Info**.

The list of fields needs to be specified as a JSON array in the following format:

```json
[{"label1":"key2"},{"label2":"key2"},...]
```

The label can be the name of the custom field that is displayed for users. The key must be a custom field name defined previously. Considering the previous example, the field can look something like this:

```json
[{"Role":"role"},{"Department":"dept"}]
```

This means that the `role` and `dept` custom fields will be displayed on the **User Info** panel. Note that the fields are only shown if the user has permission to view private fields or if the field is set to `"public": true`.

## Set custom field values

Now that you have configured the custom fields, the fields will be displayed while creating new users, or updating existing ones. Enter the respective values and save the user details.
