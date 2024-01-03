# Migrate from mmap to WiredTiger Storage Engine

Starting with the major release 4.x of Rocket.Chat, MongoDB has to be set up with a [**WiredTiger**](https://www.mongodb.com/docs/manual/core/wiredtiger/) storage engine rather than the deprecated _mmapv1_ one. This is mandatory, if you plan to upgrade to one of the future Rocket.Chat versions have to be prepared before initiating the application upgrade.

This guide helps you migrate your existing `mmap` based MongoDB instance to WiredTiger manually.

## Requirements

* MongoDB instance with _mmap_ storage engine.

## Quick usage

Following is an overview of the migration steps:

1. Stop running Rocket.Chat.
2. Create a database dump from the _mmapv1_ MongoDB (also to have a backup in place).
3. Stop _mmapv1_ MongoDB service, drop existing data files, and start up with WiredTiger.
4. Import the dump into the new WiredTiger MongoDB.
5. Start Rocket.Chat.

## Detailed usage

Here are the detailed steps of the migration process:

1.  Stop Rocket.Chat service to ensure a consistent database dump:

    ```bash
    systemctl stop rocketchat
    ```
2.  Create a database dump from the current _mmapv1_ MongoDB:

    ```bash
    mongodump --archive=~/mmapdump.gz --gzip
    ```
3.  Stop MongoDB service:

    ```bash
    systemctl stop mongod
    ```
4.  Delete the _mmapv1_ based data files of your existing MongoDB:

    ```bash
    rm -rf /var/lib/mongodb/*
    ```
5.  Adjust MongoDB configuration to make use of _wiredTiger_ storage engine:

    ```
    vi /etc/mongod.conf
    ```

    ```bash
    [...]
    engine: wiredTiger
    [...]
    ```
6.  Start MongoDB service again:

    ```bash
    systemctl start mongod
    ```
7.  If running with a Replica-Set in your mongo.conf initialize replica set

    ```bash
    mongo --eval 'rs.initiate()'
    ```
8.  Import dump back into (_wiredTiger_) MongoDB:

    ```bash
    mongorestore --drop --archive=~/mmapdump.gz --gzip --noIndexRestore
    ```
9.  Repair databases and rebuild indices:

    ```bash
    mongo --eval 'db.repairDatabase()'
    ```
10. Start Rocket.Chat service:

    ```bash
    systemctl start rocketchat
    ```
