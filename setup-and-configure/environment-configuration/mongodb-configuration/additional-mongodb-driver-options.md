# Additional MongoDB Driver Options

It's possible to provide extra [connection settings](http://mongodb.github.io/node-mongodb-native/3.5/reference/connecting/connection-settings/) to the Mongo driver that are not covered in the URI connection string. Set the the `MONGO_OPTIONS` environment variable to a JSON string.&#x20;

For example:

{% code overflow="wrap" %}
```bash
# we need to pass the contents of PEMs, etc in a format compatible with JSON, so add '\n' to the end of each line.
export TLS_CRT=$(cat /pems/tls.crt | awk '{printf "%s\\n",$0} END {print ""}')
export PEM=$(cat /pems/mongo.pem | awk '{printf "%s\\n",$0} END {print ""}')
export KEY=$(cat /pems/mongo.key | awk '{printf "%s\\n",$0} END {print ""}')
# now insert all the credentials into the JSON OPTIONS string
export MONGO_OPTIONS='{"sslCA":["'${TLS_CRT}'"],"sslCert":"'${PEM}'","sslKey":"'${KEY}'"}'
```
{% endcode %}

You might want to do this, for example, if you're backing Rocket.Chat with a TLS-secured Mongo [replica set](https://docs.mongodb.com/manual/replication/) and need to pass certificates/PEM files, etc. to connect to it.

If you see the following error during startup:

```
MongoTimeoutError: Server selection timed out after 10000 ms
```

You can try increasing server selection time by adding the following property to `MONGO_OPTIONS` to change the default value of `10000` to `20000`:

```
MONGO_OPTIONS='{ "serverSelectionTimeoutMS": 20000 }'
```
