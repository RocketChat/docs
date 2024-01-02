# Rocket.Chat Configuration

This guide provides detailed instructions for configuring the environment necessary to run Rocket.Chat. Proper environment configuration ensures optimal performance, security, and functionality of Rocket.Chat.

{% hint style="info" %}
As of December 15, 2023, Rocket.Chat has ceased support for connections from cloud services and official mobile/desktop apps to workspaces running legacy versions outside our support window. Users on unsupported legacy servers are advised to upgrade to the latest Rocket.Chat version to ensure continued access to cloud, mobile, and desktop applications. **Each Rocket.Chat version is supported for six months post-release.**
{% endhint %}

## Prerequisites

Before proceeding with the environment configuration, ensure the following prerequisites are met:

* [**System Requirements**](../../deploy/deploy-rocket.chat/system-requirements.md): Verify that your system meets the minimum hardware and software requirements for Rocket.Chat.
* **Deploy Rocket.Chat**: Make sure that you have a Rocket.Chat workspace installed. You can deploy using any of the following methods:
  * [Deploy with Docker and Docker Compose](https://docs.rocket.chat/deploy/deploy-rocket.chat/deploy-with-docker-and-docker-compose) (recommended)
  * [Deploy with AWS](https://docs.rocket.chat/deploy/deploy-rocket.chat/deploy-with-aws) (recommended)
  * [Deploy with Snaps](https://docs.rocket.chat/deploy/deploy-rocket.chat/deploy-with-snaps)
  * Deploy with any of the [Additional Deployment Methods](https://docs.rocket.chat/deploy/deploy-rocket.chat/additional-deployment-methods)
* **Basic Understanding**: Familiarity with command-line interfaces, server management, and network configuration is recommended.

## Configuration Steps

### 1. Setting Environment Variables

Environment variables can be used to influence the workspace deployment or the workspace settings. Configuring the environment variables depends on the method of deployment. Generally, you can follow these steps:

* **Set Deployment Environment Variables**: In the `.env` or the `compose.yml` file (for Docker deployment), set values for the mandatory variables such as `ROOT_URL`, `PORT`, and `MONGO_URL`. You can also set values for the optional variables according to your requirements.
  * **Modify Deployment Environment Variables**: Modify the variables you need and deploy the workspace again for the changes to take effect.
  * See [Environment Variables](https://docs.rocket.chat/setup-and-configure/rocket.chat-environment-configuration/environment-variables) for detailed information.
* [**Settings Environment Variables**](https://docs.rocket.chat/setup-and-configure/advanced-workspace-management/managing-settings-using-environmental-variables): Configure the environment variables to manage the workspace settings.

### 2. Database Configuration

Rocket.Chat uses MongoDB. Configure the database connection:

* [**MongoDB Connection String URI**](https://docs.rocket.chat/setup-and-configure/rocket.chat-environment-configuration/mongodb-configuration/mongodb-uri-authentication): Connect Rocket.Chat and the MongoDB instance using a connection string URI. The authentication is done with a username and password.
* [**Backup and Restore**](https://docs.rocket.chat/setup-and-configure/rocket.chat-environment-configuration/mongodb-configuration/mongodb-backup-and-restore): Perform a backup of your workspace data.
* [**Replication**](https://docs.rocket.chat/setup-and-configure/rocket.chat-environment-configuration/mongodb-configuration/mongo-replicas): Configure a MongoDB replica set to improve the data availability.

### 3. Integrating External Services

Integrate external services like email, authentication, and file storage:

* **Email**: Use the [Mailer](https://docs.rocket.chat/use-rocket.chat/workspace-administration/mailer) tool to send emails to users in your workspace. For Omnichannel, use [Email Inboxes](https://docs.rocket.chat/use-rocket.chat/workspace-administration/email-inboxes) to create and manage the email accounts for the channels.
* [**Authentication**](https://docs.rocket.chat/use-rocket.chat/authentication): Set up user authentication and authorization using any of the available methods.
* [**File Upload and Storage**](https://docs.rocket.chat/use-rocket.chat/workspace-administration/settings/file-upload): Configure storage options for file uploads and storage (e.g., local file system, AWS S3, Google Cloud Storage, etc.).

### 4. Security Settings

Enhance the security of your Rocket.Chat server:

* [**SSL Certificate Authentication**](https://docs.rocket.chat/setup-and-configure/rocket.chat-environment-configuration/additional-configurations/setting-up-client-ssl-certificate-authentication-for-rocket.chat): Add a layer of security to your workspace by configuring the Nginx web server.
* [**SSL Reverse Proxy Configuration**](https://docs.rocket.chat/setup-and-configure/rocket.chat-environment-configuration/configuring-ssl-reverse-proxy): Implement reverse proxy servers to handle SSL.
* [**Firewall Setup**](https://docs.rocket.chat/setup-and-configure/rocket.chat-environment-configuration/optional-configurations): Configure the server's firewall to allow necessary traffic and block unwanted access.
* [**Regular Updates**](https://docs.rocket.chat/deploy/deploy-rocket.chat/updating-rocket.chat): Keep Rocket.Chat and its dependencies updated to patch security vulnerabilities.

## Troubleshooting

Address common issues during environment configuration:

* [**Connectivity Issues**](https://docs.rocket.chat/resources/frequently-asked-questions/support-faqs): Ensure all services are correctly configured and can communicate with each other.&#x20;
* [**Environment Variable Mistakes**](https://docs.rocket.chat/setup-and-configure/advanced-workspace-management/troubleshooting): Double-check environment variable settings for typos or incorrect values.

Proper environment configuration is crucial for a stable and efficient Rocket.Chat deployment. By following these steps, you can ensure that your Rocket.Chat server is well-configured, secure, and ready for use.
