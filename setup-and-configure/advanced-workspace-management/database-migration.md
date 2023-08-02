# Database Migration

As software evolves and new features are added, the underlying database schema often needs to change to accommodate these updates. This process, known as database migration, is a critical aspect of maintaining and updating software systems. Rocket.Chat, a leading communication platform, handles database migrations seamlessly, ensuring that the transition between different versions of the platform is smooth and efficient. This document will provide a comprehensive overview of how Rocket.Chat manages database migrations.

{% hint style="success" %}
When you incrementally update your Rocket.Chat version, the database migration is automatic, and you do not have to take any explicit action. Rocket.Chat migrations and thier versions can be found on [GitHub](https://github.com/RocketChat/Rocket.Chat/blob/develop/apps/meteor/server/startup/migrations).
{% endhint %}

However, it's important to note that Rocket.Chat uses migrations to enforce an updatable version range. This means that direct upgrades from non-consecutive versions (e.g., from version three to five) are not possible if the intermediate migrations have been removed.

{% hint style="info" %}
While Rocket.Chat does not officially support downgrades due to the changes made during database migrations, it is possible to manually roll back migrations separately if necessary.
{% endhint %}

### Migration Collection

Rocket.Chat's migration collection contains a single document with a specific structure that controls migration actions. This document includes fields for the migration version, a lock to indicate whether a migration is currently in progress, and an ID field. If a particular migration needs to be skipped, the version field in the migration collection can be set to the next version.

```javascript
{"_id": "control","locked":false, "version":19}
```

* &#x20;`_id` : The value is always `control`. It means the collection has only one document to control migration actions.
* &#x20;`locked` : The value is boolean and can either be `true` or `false`. It identifies whether migration is currently happening or not. If  a migration fails, it will be stuck at true.
* &#x20;`version` - The migration version your server is currently at.

Rocket.Chat's approach to database migration ensures a smooth and efficient transition between different versions of the platform. By automating the migration process and providing mechanisms for controlling migration actions, Rocket.Chat ensures that its database schema is always up-to-date and compatible with the current version of the platform.
