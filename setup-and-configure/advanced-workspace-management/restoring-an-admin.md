# Restoring an Admin User

In the management of any digital platform, there may be instances where access to an admin user is lost and needs to be restored. Rocket.Chat provides a comprehensive process for restoring an admin user without requiring another admin user. This document will provide a detailed overview of how to restore an admin user in Rocket.Chat by accessing the database.

**Access the Database:** Restoring an admin user in Rocket.Chat involves accessing the database, which can be done in various ways depending on how the Rocket.Chat server was installed. Restoring an admin user in Rocket.Chat involves accessing the database, which can be done in various ways depending on how the Rocket.Chat server was installed. For Docker-based installations, the mongo shell within the mongo container can be accessed, and for Ubuntu Snaps installations, MongoDB can be connected directly.

1. **Docker-based installations**:

To open the **mongo shell** within the **mongo container**,

* Change into the docker compose directory (where your `docker-compose.yml` is located) and run mongo bash.

```bash
cd /opt/docker/Rocket.Chat
docker compose run mongo bash
```

Alternatively, you can run the following command without navigating to the`docker-compose.yml` directory.

```
docker exec -it -u root mongo-image /bin/bash
```

* Login into the mongo shell.

```
mongo
```

{% hint style="info" %}
Make sure to replace `mongo` with the name of your MongoDB container if you use a different one.
{% endhint %}

* Open the database in the mongo shell

```sql
use rocketchat
```

{% hint style="info" %}
Make sure to replace `rocketchat` with the name of your Mongo database. If you're unsure of the name, you can either check your `docker-compose.yml` file or run the following command:
{% endhint %}

```sql
show dbs
```

2. **Ubuntu Snaps Installation**:

* Connect to MongoDB using the following command:

```bash
sudo rocketchat-server.mongo
```

* Select the Rocket.Chat Database.

```sql
use parties
```

3. **Updating the Admin Password**:

To update the admin password, you can either use a one-time access token or update the admin password to a random string.

Using an access token will require the user to change his password.

```javascript
db.getCollection('users').update({username:"administrator"}, {$set: { "services":{"loginToken":{"token":"some-token-id-that-you-will-use-to-login-once"}}, "requirePasswordChange":true} })
```

Then access `http://{your server url}/login-token/some-token-id-that-you-will-use-to-login-once` to log in.

Alternatively, you can update the admin password to a random string. Using `12345` as an example of the password, use its hashed(bycrypt) value:

```javascript
db.getCollection('users').update({username:"administrator"}, { $set: {"services" : { "password" : {"bcrypt" : "$2a$10$n9CM8OgInDlwpvjLKLPML.eizXIzLlRtgCh3GRLafOdR9ldAUh/KG" } } } })
```

{% hint style="warning" %}
_Replace `administrator` with the appropriate username of the administrator on your server._
{% endhint %}

* Restart your application container in case the new password is not accepted yet.

4. **Generate a Valid Admin Password:** To generate a valid password and its hashed value with `bcrypt-cli,`

* Install `bcrypt-cli` with:

```
// npm install -g @carsondarling/bcrypt-cli
```

* Then, use this to generate your `bcrypt` password:

```
// npm install -g @carsondarling/bcrypt-cli bcrypt $(echo -n "yourPasswordHere" | sha256sum | cut -d " " -f 1) && echo
```

5. **Reset a User role to Admin**:

In addition to updating the password, the user role can also be reset to admin using a specific database command. This ensures that the restored user has the necessary admin privileges.

Run the following database command :

```javascript
db.users.update({username: "administrator"}, { $push: { roles: "admin"}})
```

{% hint style="warning" %}
_Replace `administrator` with the appropriate username of the administrator on your server._
{% endhint %}
