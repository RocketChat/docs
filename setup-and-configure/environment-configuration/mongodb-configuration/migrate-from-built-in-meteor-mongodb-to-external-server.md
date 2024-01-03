# Migrate from Built-In Meteor MongoDB to External Server

Rocket.Chat uses the Meteor open-source framework, and the data is typically stored in MongoDB. If you want to migrate from the built-in Meteor MongoDB server to an external MongoDB server, follow the steps in this guide.

{% hint style="info" %}
We do not advise running Rocket.Chat in production from the source using the meteor command. Instead, we recommend using a separate Mongo database and using a compiled meteor bundle, either our official release or your own.

See our [recommended deployment methods](https://docs.rocket.chat/deploy/deploy-rocket.chat).
{% endhint %}

Before starting, make sure Meteor is running and follow these steps:

1. Run the command: `mongodump -h 127.0.0.1 --port 3001 -d meteor`. This will dump the database in a folder called `dump`.
2. Then, install Mongodb on your system.
3. Once Mongo is installed, restore the data using: `mongorestore -d meteor dump/meteor`
   1. In this step, if you want to use a different database, change the database name. Replace `-d meteor` with your desired database name.
4. Then follow the remainder of the guide on [deploying Rocket.Chat](https://docs.rocket.chat/deploy/deploy-rocket.chat) for your current OS.
