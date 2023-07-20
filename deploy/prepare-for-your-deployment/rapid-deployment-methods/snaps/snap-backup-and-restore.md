# Snap Backup and Restore

Snap Backup and Restore is a handy tool that allows you to create backups of your Rocket.Chat instance and restore them as needed.

## Backup Rocket.Chat Snap Data

{% hint style="success" %}
You can enable automatic backup on each snap refresh by executing `sudo snap set rocketchat-server backup-on-refresh=enable`
{% endhint %}

To backup the data on your snap installation,&#x20;

* Stop your rocketchat-server by running

```
sudo service snap.rocketchat-server.rocketchat-server stop
```

{% hint style="info" %}
While the `rocketchat-server service` should be stopped, the `rocketchat-mongo service` should be kept running!
{% endhint %}

```
sudo service snap.rocketchat-server.rocketchat-mongo status | grep Active
   Active: active (running) (...)
```

* Run the backup command

```
sudo snap run rocketchat-server.backupdb
```

* A successful backup will return this:

```
[+] A backup of your data can be found at /var/snap/rocketchat-server/common/backup/rocketchat_backup_<timestamp>.tar.gz
```

* Start your rocketchat-server

```
sudo service snap.rocketchat-server.rocketchat-server start
```

* Copy your backup to a different system for safekeeping.

## Restore Rocket.Chat Snap Data

To restore your backed up snap data,

* Stop your rocketchat-server by running

```
sudo service snap.rocketchat-server.rocketchat-server stop
```

{% hint style="info" %}
While the `rocketchat-server service` should be stopped, the `rocketchat-mongo service` should be kept running!
{% endhint %}

```
sudo service snap.rocketchat-server.rocketchat-mongo status | grep Active
   Active: active (running) (...)
```

* Copy your backup file to the snap's common folder:

```
sudo cp rocketchat_backup.tgz /var/snap/rocketchat-server/common/
```

* Run the restore command

```
sudo snap run rocketchat-server.restoredb /var/snap/rocketchat-server/common/rocketchat_backup.tgz
```

If you are replacing an existing database, you get a warning message

{% hint style="danger" %}
**ATTENTION**

* Your current database WILL BE DROPPED prior to the restore!
* Do you want to restore?
  * 1\) Yes
  * 2\) No
{% endhint %}

* Choose your restore option.
* If it is successfully done, you will see an output similar to:

```
[*] Extracting backup file...
[*] Restoring data...
[*] Preparing database...
[+] Restore completed! Please restart the snap.rocketchat services to verify.
```

* Start your rocketchat-server

```
sudo service snap.rocketchat-server.rocketchat-server start
```
