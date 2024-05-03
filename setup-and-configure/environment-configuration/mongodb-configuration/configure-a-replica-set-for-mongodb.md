# Configure a Replica Set for MongoDB

Rocket.Chat uses the [MongoDB replica set](http://docs.mongodb.org/manual/replication/) to improve performance via Meteor Oplog tailing. Replica sets are used to provide high data availability by maintaining multiple copies of the data across different servers.

{% hint style="info" %}
Check the release notes to ensure you are using a compatible version of MongoDB.
{% endhint %}

To configure the replica set, add this section to the `mongod.conf` file:

```bash
replication: // indicates the beginning of the replication configuration section
  replSetName: "rs01"
```

For example, run the following command to update the replication settings in the MongoDB configuration file:

```bash
echo -e "replication:\n  replSetName: \"rs01\"" | sudo tee -a /etc/mongod.conf
```

## Restart MongoDB and initiate the replica set

Follow these steps to initiate the MongoDB replica set:

1. Restart MongoDB service:

```bash
sudo systemctl restart mongod
```

2. Start the MongoDB shell and initiate the replica set:

```bash
mongosh
> rs.initiate()
```

The output of the command should look like this:

```bash
{
    "info2" : "no configuration specified. Using a default configuration for the set",
    "me" : "127.0.0.1:27017",
    "ok" : 1,
    "operationTime" : Timestamp(1538772048, 1),
    "$clusterTime" : {
        "clusterTime" : Timestamp(1538772048, 1),
        "signature" : {
            "hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
            "keyId" : NumberLong(0)
        }
    }
}
rs01:SECONDARY>
```

Note that the `ok` value should be `1`. Any other value, i.e. 93, means something is wrong.

3. Hit enter, you should see your prompt turn into `rs01:PRIMARY>`, this indicates the replica set is being used. Type `exit` to get back to your regular shell:

```bash
rs01:PRIMARY> exit
bye
```

**Troubleshooting**

Depending on your network settings, including `/etc/hosts` and DNS, if you have configured Rocket.Chat to use `localhost:27017`, you may see an error similar to this:

{% code overflow="wrap" %}
```bash
[conn1] created this configuration for initiation : { _id: "rs0", version: 1, members: [ { _id: 0, host: "test:27017" } ] }
```
{% endcode %}

`rs.initiate()` may be defaulting to the host name e.g., `test`.

You can force a different hostname as follows:

```bash
rs.initiate({ _id: 'rs01', members: [ { _id: 0, host: 'localhost:27017' } ]})
```

You should get a response similar to the following:

```bash
> rs.initiate({ _id: 'rs01', members: [ { _id: 0, host: 'localhost:27017' } ]})
{ "ok" : 1 }
rs0:OTHER>
```

## Reconfigure and restart Rocket.Chat service

After you configured the replica set, you must add the `MONGO_OPLOG_URL` environment variable to the service definition and restart Rocket.Chat server.

* In CentOS, open the file `/usr/lib/systemd/system/rocketchat.service`
* In Ubuntu or Debian, open the file `/lib/systemd/system/rocketchat.service`

Add the following to the environment line:

```bash
MONGO_OPLOG_URL=mongodb://localhost:27017/local?replSet=rs01
```

Reload the system state and restart Rocket.Chat:

```bash
sudo systemctl daemon-reload && sudo systemctl restart rocketchat
```
