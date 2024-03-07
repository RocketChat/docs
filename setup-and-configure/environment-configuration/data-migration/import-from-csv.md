# Import from CSV

The CSV importer allows you to import your own plain text files. However, it does require the `.zip` file to be in a specific format for the importer to understand.

## `.zip` file structure

The zip file must be a **flat zip**, which means there can **not** be a "root" or "sub" folder in which the items reside in the zip file. The importer looks for the files `channels.csv` and `users.csv` immediately inside the zip and not inside any folder. If you have any questions about this, please ask in the [#support channel on the Community server](https://open.rocket.chat/channel/support).

Note that the **directmessages** directory is a special directory name.

```
fileToImport.zip
├── channels.csv
├── users.csv
├── directmessages
│   ├── messages1.csv
│   ├── messages2.csv
│   └── messages3.csv
├── general
│   └── messages.csv
├── otherChannelName
│   ├── canBeAnyNameButHasToHave.csv
│   ├── theDotCSV.csv
│   └── asTheFileExt.csv
├── privateArea
│   └── messages.csv
└── random
   ├── dateTimeStamp1.csv
   ├── dateTimeStamp2.csv
   └── dateTimeStamp3.csv
```

## channels.csv format

{% hint style="info" %}
This file should not include channels between 2 users (Direct Messages). See the[#direct-messages-direct-channels](import-from-csv.md#direct-messages-direct-channels "mention") section for more information.
{% endhint %}

The `channels.csv` requires a **very** specific structure and layout. Each line contains information about one channel. Each line must include the channel name, the creator, whether it is private or public, and the members in the channel separated by a semicolon `;`. Quotes are **required**. You can use a text editor to ensure the quotes are correctly placed.

1. Channel name
2. Username of the channel creator
3. Whether the channel is public or private. If the last argument is not `private` it is assumed the channel is public
4. List of users in the channel, separated by semicolons. If only the creator is in the channel, then there must be empty quotes.

```
"general","bradley.hilton","public",""
"otherChannelName","billy.bob","public",""
"random","bradley.hilton","public","billy.bob;graywolf336"
"privateArea","bradley.hilton","private","graywolf336"
```

## users.csv format

The `users.csv` is a file that contains the user details, each line containing a new user, and the user details are:

1. Username (must not contain @ or any other special characters)
2. Email
3. Name

```
"bradley.hilton","bradley.hilton@example.com","Bradley Hilton"
"billy.bob","billy.bob@example.com","Billy Bob Jr."
"graywolf336","graywolf336@example.com","GrayWolf336"
```

## Message files

The message CSV files require a particular format. Each line contains a new message, and every piece of information requires quotes to surround it, and there cannot be any spaces between the commas. The details required are:

1. The username who sent the message
2. The timestamp in milliseconds
3. The message and quotes are highly recommended, especially if the message text contains a comma.

```
"bradley.hilton","1479162481336","this is a test message"
"billy.bob","1479162481654","this is another message, a test message"
```

## Direct messages / Direct channels

Direct Channels / Direct Messages are imported from a special directory named **directmessages** with a specific format based on the **Message Files** format. The details required are:

1. The username who sent the message
2. The username who received the message
3. The timestamp in milliseconds
4. The message and quotes are highly recommended, especially if the message text contains a comma.

It's **required** to keep conversations in **distinct files;** for example, a conversation between user A and B compose a file (`messages1.csv`), and the conversation between user B and C compose another file (`messages2.csv`).

```
"bradley.hilton","billy.bob","1479162481336","this is a test message"
"billy.bob","bradley.hilton","1479162481654","this is another message, a test message"
```

## Import the file

Once you have that, all set up and zipped; you can start the import process in your Rocket.Chat workspace.

1. Go to **Administration** > **Workspace** > **Import**.
2. Click **Import New File**. Select the **Import Type** as **CSV**.
3. Select your `.zip` file and wait until Rocket.Chat can read it (it can take a few minutes, depending on the size of the file)
4. Once the file is loaded, deselect any items you don't want to import.
5. Click on **Start Importing**.

Your users and messages are now available in the workspace! If you have problems during the import process, click **Reports** in the admin section to view the logs.
