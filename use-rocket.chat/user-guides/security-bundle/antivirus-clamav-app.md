# Antivirus ClamAV App

The ClamAV app enables forwarding uploaded files to an open-source antivirus (ClamAV) application that prevents the upload from completing in Rocket.Chat if a virus is detected. You have to install and run the ClamAV server, and then the ClamAV app connects to it.

It works across web browsers, desktop apps, and mobile apps. It is used to prevent users from spreading viruses and malware via Rocket.Chat. It is an open-source (GPL) antivirus engine used in various situations, including email scanning, web scanning, and endpoint security. It provides several utilities, including a flexible and scalable multi-threaded daemon, a command-line scanner, and an advanced tool for automatic database updates.

{% hint style="info" %}
To install your ClamAV server, see the [official documentation](https://docs.clamav.net/).
{% endhint %}

## Installing the ClamAV Integration

To install the ClamAV Integration App,

* Go to **Administration > Apps > Marketplace.**
* Search for the **ClamAV Integration** app.
* Click **Install** and accept the needed permissions.

## Configure ClamAV Integration

To configure the **ClamAV** Integration app,

* On the **ClamAV Integration App Info** screen, navigate to **Settings.**
* Update the required details:
  * **ClamAV Server Host**: The ClamAV Server Host, where your ClamAV server is hosted.
  * **ClamAV Server Port**: The port for your ClamAV server.
