# MongoDB Backup and Restore

Maintaining backups of your workspace data is a very important practice. These data backups can act as a safety measure where data can be recovered or restored in case of an emergency.

Rocket.Chat uses MongoDB as its database. With MongoDB, you have multiple built-in backup options depending on the deployment method.

In this guide, we are going to focus on how to:

1. [Perform a backup of your Rocket.Chat workspace data](mongodb-backup-and-restore.md#mongodb-backup-with-mongodump)
2. [Restore your Rocket.Chat workspace data](mongodb-backup-and-restore.md#mongodb-restore-with-mongorestore)

## MongoDB backup with `mongodump`

We are going to see how to backup our MongoDB database, using [`mongodump`](https://www.mongodb.com/docs/database-tools/mongodump/). `mongodump` allows you to create backups from standalone, replica sets or sharded cluster deployments.

{% hint style="info" %}
From MongoDB server 4.4, you need to install the `mongodump` utility separately.\
Read more at the MongoDB Database tools docs [https://www.mongodb.com/docs/database-tools/mongodump](https://www.mongodb.com/docs/database-tools/mongodump/)
{% endhint %}

### Backup a MongoDB standalone instance

The command to backup a simple MongoDB standalone instance is of the format:

```bash
mongodump <options> <connection-string>
```

* Running `mongodump` alone from the command line without any options will assume the database is located on `localhost` at port `27017` with no authentication.
* When the backup is completed, a `/dump` directory is created.

### Backup a remote MongoDB instance

Backing up a remote MongoDB instance can be done with the following command:

```bash
mongodump --uri="mongodb://<host URL/IP>:<Port>" [additional options]
```

See more options and how to use `mongodump` on [MongoDB Database tools docs](https://www.mongodb.com/docs/database-tools/mongodump/).

You should see something like the image below when the command is running:

<figure><img src="../../../.gitbook/assets/image (1068).png" alt=""><figcaption><p>mongodump command executing</p></figcaption></figure>

## MongoDB Restore with `mongorestore`

After backing up your instance, you may need to restore the data at some time. That can be done using [`mongorestore`](https://www.mongodb.com/docs/database-tools/mongorestore/). `mongorestore` allows you to load data from either a binary database dump created by [`mongodump`](https://www.mongodb.com/docs/database-tools/mongodump/#mongodb-binary-bin.mongodump) or the standard input into the MongoDB instance.

{% hint style="info" %}
Make sure you first drop any existing Rocket.Chat schema in your database with the same name as the one you are restoring.
{% endhint %}

* The syntax for the `mongorestore` command is as follows:

```bash
mongorestore <options> <connection-string> <directory or file to restore>
```

* The simple command below restores from a `dump` directory to a local [`mongod`](https://www.mongodb.com/docs/manual/reference/program/mongod/#mongodb-binary-bin.mongod) instance running on port `27017`:

```bash
mongorestore  dump/
```

* You can restore to a remote instance by running the following command:

```bash
mongorestore --uri="mongodb://<host URL/IP>:<Port>" /dump
```

{% hint style="info" %}
You have the ability to also restore a specific collection or collections from the `dump/` directory. [See MongoDB docs ](https://www.mongodb.com/docs/database-tools/mongorestore/)
{% endhint %}

In a successful command execution, you should see a screen like the one below:

<figure><img src="../../../.gitbook/assets/image (50).png" alt=""><figcaption><p>mongorestore command executed</p></figcaption></figure>
