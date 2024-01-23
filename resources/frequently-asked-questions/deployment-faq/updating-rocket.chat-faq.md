# Updating Rocket.Chat FAQ

<details>

<summary>Why do I see a MongoDB Deprecated warning immediately after update</summary>

This is a result of your MongoDB version not being compatible with the Rocket.Chat version the installed.

It is advisable to incrementally upgrade the version of MongoDB deployed to the supported version. See release engine compatibility [https://github.com/RocketChat/Rocket.Chat/releases](https://github.com/RocketChat/Rocket.Chat/releases)

</details>

<details>

<summary>Why do I receive a question about the Unique ID change detected</summary>

"Unique ID" is the unique identifier of a server, it's a hash created when the Rocket.Chat's deployment starts for the first time.&#x20;

In order to prevent Unique ID duplicity caused by deployment clones, deployment splits, etc, when the database is copied to start a new deployment, the Unique ID record is copied becoming the same for the old and new deployments, Rocket.Chat implements a fingerprint solution to help admins identify when those cases happen by mistake.

The fingerprint is composed of the Site URL setting and database connection string, when some of those 2 information changes the fingerprint changes to a pending state. The admins are requested to validate the fingerprint again by deciding if the change is, in fact, an expected update of the current workspace or a new workspace being deployed.

### Configuration update

If the change detected was expected to be a normal workspace configuration change, like a site url change or a database string change, it's safe to confirm it. By confirming the update, nothing will change and the new fingerprint will become validated.

<mark style="color:red;">**If the change is, in fact, a new workspace, by confirming as an update it can generate issues with statistics reporting, license validation, push notifications, marketplace access, etc. Since more than one workspace is accessing the cloud services using the same Unique ID.**</mark>

### New workspace

If the change detected, in fact, means a new deployment has been done, by confirming a new workspace, all the identification information will be reset:

* Unique ID: A new unique hash will be generated
* Cloud Connection: All cloud connections will be reset
* Cloud Workspace: The cloud workspace data linking a cloud instance to the deployment will be reset
* Cloud License: Any license provided by the cloud portal will be reset

<mark style="color:red;">If the change is not, in fact, a new workspace, by confirming a new workspace it can generate issues to connect back the deployment with the cloud workspace.</mark>

</details>
