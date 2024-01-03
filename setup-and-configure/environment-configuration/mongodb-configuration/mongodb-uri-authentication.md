# MongoDB URI Authentication

The connection between Rocket.Chat and MongoDB instance is achieved using a [MongoDB Connection String URI](https://www.mongodb.com/docs/manual/reference/connection-string/). MongoDB authentication is done with the username and password.

Adding the following snippet to your `.env` file does the trick:

{% code overflow="wrap" %}
```bash
MONGO_URL=mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
```
{% endcode %}

In your container, pass `MONGO_URL` and `MONGO_OPLOG_URL` with the right values for connection.

{% hint style="info" %}
Depending on the password you're using, you might need to escape some characters. Refer to the MongoDB documentation for more information  [https://docs.mongodb.com/manual/reference/connection-string/](https://docs.mongodb.com/manual/reference/connection-string/)
{% endhint %}

Your `docker-compose.yml` file should look like this:

{% code overflow="wrap" %}
```bash
environment:
      - "MONGO_URL=mongodb://rctestuser:mymongopassword@mongo:27017/rocketchat?authSource=admin"
      - "MONGO_OPLOG_URL=mongodb://rctestuser:mymongopassword@mongo:27017/local?authSource=admin"
```
{% endcode %}

If you are using `docker run`, it should look like this:

{% code overflow="wrap" %}
```bash
docker run \                                                                                                                                                                                                                   -e "MONGO_URL=mongodb://rctestuser:mymongopassword@mongo:27017/rocketchat?authSource=admin" \
-e "MONGO_OPLOG_URL=mongodb://rctestuser:mymongopassword@mongo:27017/local?authSource=admin" \
rocketchat/rocket.chat:X.X.X
```
{% endcode %}

**MongoDB authentication role**

If you are using MongoDB authentication, you might also need to add the [`clusterMonitor`](https://www.mongodb.com/docs/manual/reference/built-in-roles/#mongodb-authrole-clusterMonitor) role to your user. The `clusterMonitor` role gives users read-only access to MongoDB monitoring tools. This is a requirement for your instance to be able to use [change streams](https://www.mongodb.com/docs/manual/changeStreams/). Change streams allow your workspace to react to real-time changes in data

Execute the following command, replacing the users with that selected for your users:

```
admin = db.getSiblingDB("admin");
admin.grantRolesToUser('OPLOGUSER',[{ role: "clusterMonitor", db: "admin" }])
admin.grantRolesToUser('ROCKETUSER',[{ role: "clusterMonitor", db: "admin" }])
```
