---
description: Deploy on a kubernetes cluster using our official helm chart.
---

# Deploy with Kubernetes

This documentation guides you through deploying Rocket.Chat on [Kubernetes](https://kubernetes.io/) using the [Helm package manager](https://helm.sh/). The [official Rocket.Chat helm chart](https://github.com/RocketChat/helm-charts/tree/master/rocketchat) bootstraps the deployment process by provisioning a fully featured Rocket.Chat installation. It also provides strong support for [scaling Rocket.Chat](../scaling-rocket.chat/) to accommodate growing server capacity needs and ensure high availability.

**Prerequisites**&#x20;

* A domain name. Ensure your domain name is pointing to your server IP address.
* A Kubernetes cluster up and running
* Helm must be installed
* Your firewall rules must allow HTTPS traffic
* The following Kubernetes resources must be deployed on your server:
  * [Storage Class](https://kubernetes.io/docs/concepts/storage/storage-classes/)
  * [Ingress controller](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers)&#x20;
  * Certificate controller&#x20;
  * ClusterIssuer
  * [Persistent Volume](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)

{% hint style="success" %}
The Rocket.Chat [chart](https://github.com/RocketChat/helm-charts/tree/master/rocketchat) has an optional dependency on the MongoDB chart. By default, the MongoDB chart requires persistent volume support on underlying infrastructure, which may be disabled.
{% endhint %}

### Deploying Rocket.Chat with Kubernetes Using Helm

Once you've confirmed that all prerequisites are met, continue with the following steps to deploy a Rocket.Chat workspace using Kubernetes,

1. **Add the Chart Repository**

Add the Rocket.Chat[ helm chart repository](https://github.com/RocketChat/helm-charts/tree/master/rocketchat) by running the following command:

```
helm repo add rocketchat https://rocketchat.github.io/helm-charts
```

If successful, it returns a response that "rocketchat" has been added to your repositories.

2. **Define the deployment configurations**

To install the Rocket.Chat with the chart, you can either define your [configuration options](deploy-with-kubernetes.md#configuration) in a values file or pass the configuration parameters via command line arguments.

{% hint style="info" %}
We recommend defining the configuration parameters inside a _values.yaml_ file with at least the non-root user's password and the root password before passing it to Helm. You must set at least the database and root password in the values file.
{% endhint %}

Kindly refer to the [configuration section](deploy-with-kubernetes.md#configuration) to learn more about the deployment configurations you can set in your _values.yaml_ file. However, let’s create an example file to proceed with this guide:

* Create _values.yaml_ file with the following content to define the configurations that Helm will use for your deployment:

```
image:
  pullPolicy: IfNotPresent
  repository: registry.rocket.chat/rocketchat/rocket.chat
  tag: <release>

mongodb:
  enabled: true  #For test purposes, a single mongodb pod is deployed, consider an external MongoDB cluster for production environments
  auth:
    passwords:
      - rocketchat
    rootPassword: rocketchatroot

microservices:
  enabled: false  #This must be set to false for a monolithic deployment
host: domain.xyz 
ingress:
  enabled: true
  ingressClassName: nginx  # State the ingress controller that is installed in the K8s cluster 
  annotations:
    cert-manager.io/cluster-issuer: production-cert-issuer # Replace with the name of your ClusterIssuer 
  tls:
    - secretName: rckube #This is the name of the secret - You can use a different name if needed 
      hosts:
        - domain.xyz #This is the domain for your Rocket.Chat server, Replace it with your own domain 

```

* Replace the \<release> with the [Rocket.Chat release](https://github.com/RocketChat/Rocket.Chat/releases) tag you want to deploy.
* Update _domain.xyz_ with your domain name
* Optionally, you can use a different `secretName` for `tls`.
* Ensure that the appropriate `ingressclassName,` and cluster issuer are specified.

{% hint style="warning" %}
It’s important to note that microservices is disabled in this deployment. To use microservices, visit our [Microservices documentation](https://docs.rocket.chat/deploy/deploy-rocket.chat/scaling-rocket.chat/microservices) for more details.
{% endhint %}

3. **Install Rocket.Chat**

Now that you’ve defined the configurations in values.yaml, install Rocket.Chat with the following command:

```
helm install rocketchat -f values.yaml rocketchat/rocketchat
```

If your deployment is successful, you’ll get a response similar to the following:

<figure><img src="../../../.gitbook/assets/kubernetes-succesful.png" alt=""><figcaption></figcaption></figure>

You can now access your workspace via the URL where Rocket.Chat was deployed (your domain), and complete the [Setup Wizard](https://docs.rocket.chat/setup-and-configure/accessing-your-workspace/rocket.chat-setup-wizard).\


**\[Alternative] Set the configuration parameters via command line arguments**

Optionally, you can use the `--set` flag to pass the configuration parameters to helm.

```
helm install rocketchat rocketchat/rocketchat --set mongodb.auth.passwords={$(echo -n $(openssl rand -base64 32))},mongodb.auth.rootPassword=$(echo -n $(openssl rand -base64 32))
```

> Starting from chart version 5.4.3, username, password, and database entries must be arrays of the same length due to MongoDB dependency. Rocket.Chat will use the first entries of those arrays for its own use. `mongodb.auth.usernames` array defaults to `{rocketchat}` and `mongodb.auth.databases` array defaults to `{rocketchat}.`

## Updating Rocket.Chat on Kubernetes

To update your Rocket.Chat workspace, update the image tag in the _values.yaml_ file with the release tag of your desired version and execute the following command:

```
helm upgrade rocketchat -f values.yaml rocketchat/rocketchat
```

{% hint style="info" %}
Kindly refer to [this issue](https://github.com/RocketChat/helm-charts/issues/124) for more details.
{% endhint %}

## Uninstalling the Chart

To uninstall/delete the `rocketchat` deployment:

```
helm delete rocketchat
```

### Configuration

The following table lists the configurable parameters of the Rocket.Chat chart and their default values.

| Parameter                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Default                                       |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `image.repository`                     | Image repository                                                                                                                                                                                                                                                                                                                                                                                                                                               | `registry.rocket.chat/rocketchat/rocket.chat` |
| `image.tag`                            | Image tag                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `3.18.3`                                      |
| `image.pullPolicy`                     | Image pull policy                                                                                                                                                                                                                                                                                                                                                                                                                                              | `IfNotPresent`                                |
| `host`                                 | Hostname for Rocket.Chat. Also used for ingress (if enabled)                                                                                                                                                                                                                                                                                                                                                                                                   | `""`                                          |
| `replicaCount`                         | Number of replicas to run                                                                                                                                                                                                                                                                                                                                                                                                                                      | `1`                                           |
| `smtp.enabled`                         | Enable SMTP for sending mails                                                                                                                                                                                                                                                                                                                                                                                                                                  | `false`                                       |
| `smtp.existingSecret`                  | Use existing secret for SMTP account                                                                                                                                                                                                                                                                                                                                                                                                                           | `""`                                          |
| `smtp.username`                        | Username of the SMTP account                                                                                                                                                                                                                                                                                                                                                                                                                                   | `""`                                          |
| `smtp.password`                        | Password of the SMTP account                                                                                                                                                                                                                                                                                                                                                                                                                                   | `""`                                          |
| `smtp.host`                            | Hostname of the SMTP server                                                                                                                                                                                                                                                                                                                                                                                                                                    | `""`                                          |
| `smtp.port`                            | Port of the SMTP server                                                                                                                                                                                                                                                                                                                                                                                                                                        | `587`                                         |
| `extraEnv`                             | Extra environment variables for Rocket.Chat. Used with `tpl` function, so this needs to be a string                                                                                                                                                                                                                                                                                                                                                            | `""`                                          |
| `extraVolumes`                         | Extra volumes allowing inclusion of certificates or any sort of file that might be required (see bellow)                                                                                                                                                                                                                                                                                                                                                       | `[]`                                          |
| `extraVolumeMounts`                    | Where the aforementioned extra volumes should be mounted inside the container                                                                                                                                                                                                                                                                                                                                                                                  | `[]`                                          |
| `podAntiAffinity`                      | Pod anti-affinity can prevent the scheduler from placing RocketChat replicas on the same node. The default value "soft" means that the scheduler should _prefer_ to not schedule two replica pods onto the same node but no guarantee is provided. The value "hard" means that the scheduler is _required_ to not schedule two replica pods onto the same node. The value "" will disable pod anti-affinity so that no anti-affinity rules will be configured. | `""`                                          |
| `podAntiAffinityTopologyKey`           | If anti-affinity is enabled sets the topologyKey to use for anti-affinity. This can be changed to, for example `failure-domain.beta.kubernetes.io/zone`                                                                                                                                                                                                                                                                                                        | `kubernetes.io/hostname`                      |
| `affinity`                             | Assign custom affinity rules to the RocketChat instance [https://kubernetes.io/docs/concepts/configuration/assign-pod-node/](https://kubernetes.io/docs/concepts/configuration/assign-pod-node/)                                                                                                                                                                                                                                                               | `{}`                                          |
| `minAvailable`                         | Minimum number / percentage of pods that should remain scheduled                                                                                                                                                                                                                                                                                                                                                                                               | `1`                                           |
| `existingMongodbSecret`                | An already existing secret containing MongoDB Connection URL                                                                                                                                                                                                                                                                                                                                                                                                   | `""`                                          |
| `externalMongodbUrl`                   | MongoDB URL if using an externally provisioned MongoDB                                                                                                                                                                                                                                                                                                                                                                                                         | `""`                                          |
| `externalMongodbOplogUrl`              | MongoDB OpLog URL if using an externally provisioned MongoDB. Required if `externalMongodbUrl` is set                                                                                                                                                                                                                                                                                                                                                          | `""`                                          |
| `mongodb.enabled`                      | Enable or disable MongoDB dependency. Refer to the [stable/mongodb docs](https://github.com/bitnami/charts/tree/master/bitnami/mongodb#configuration) for more information                                                                                                                                                                                                                                                                                     | `true`                                        |
| `persistence.enabled`                  | Enable persistence using a PVC. This is not necessary if you're using the default [GridFS](../../../use-rocket.chat/workspace-administration/settings/file-upload/) file storage                                                                                                                                                                                                                                                                               | `false`                                       |
| `persistence.storageClass`             | Storage class of the PVC to use                                                                                                                                                                                                                                                                                                                                                                                                                                | `""`                                          |
| `persistence.accessMode`               | Access mode of the PVC                                                                                                                                                                                                                                                                                                                                                                                                                                         | `ReadWriteOnce`                               |
| `persistence.size`                     | Size of the PVC                                                                                                                                                                                                                                                                                                                                                                                                                                                | `8Gi`                                         |
| `persistence.existingClaim`            | An Existing PVC name for rocketchat volume                                                                                                                                                                                                                                                                                                                                                                                                                     | `""`                                          |
| `resources`                            | Pod resource requests and limits                                                                                                                                                                                                                                                                                                                                                                                                                               | `{}`                                          |
| `securityContext.enabled`              | Enable security context for the pod                                                                                                                                                                                                                                                                                                                                                                                                                            | `true`                                        |
| `securityContext.runAsUser`            | User to run the pod as                                                                                                                                                                                                                                                                                                                                                                                                                                         | `999`                                         |
| `securityContext.fsGroup`              | fs group to use for the pod                                                                                                                                                                                                                                                                                                                                                                                                                                    | `999`                                         |
| `serviceAccount.create`                | Specifies whether a ServiceAccount should be created                                                                                                                                                                                                                                                                                                                                                                                                           | `true`                                        |
| `serviceAccount.name`                  | Name of the ServiceAccount to use. If not set and create is true, a name is generated using the fullname template                                                                                                                                                                                                                                                                                                                                              | `""`                                          |
| `ingress.enabled`                      | If `true`, an ingress is created                                                                                                                                                                                                                                                                                                                                                                                                                               | `false`                                       |
| `ingress.pathType`                     | Sets the value for pathType for the created Ingress resource                                                                                                                                                                                                                                                                                                                                                                                                   | `Prefix`                                      |
| `ingress.annotations`                  | Annotations for the ingress                                                                                                                                                                                                                                                                                                                                                                                                                                    | `{}`                                          |
| `ingress.path`                         | Path of the ingress                                                                                                                                                                                                                                                                                                                                                                                                                                            | `/`                                           |
| `ingress.tls`                          | A list of [IngressTLS](https://kubernetes.io/docs/reference/kubernetes-api/service-resources/ingress-v1/#IngressSpec) items                                                                                                                                                                                                                                                                                                                                    | `[]`                                          |
| `license`                              | Contents of the license file, if applicable                                                                                                                                                                                                                                                                                                                                                                                                                    | `""`                                          |
| `prometheusScraping.enabled`           | Turn on and off /metrics endpoint for Prometheus scraping                                                                                                                                                                                                                                                                                                                                                                                                      | `false`                                       |
| `prometheusScraping.port`              | Port to use for the metrics for Prometheus to scrap on                                                                                                                                                                                                                                                                                                                                                                                                         | `9458`                                        |
| `serviceMonitor.enabled`               | Create ServiceMonitor resource(s) for scraping metrics using PrometheusOperator (prometheusScraping should be enabled)                                                                                                                                                                                                                                                                                                                                         | `false`                                       |
| `serviceMonitor.interval`              | The interval at which metrics should be scraped                                                                                                                                                                                                                                                                                                                                                                                                                | `30s`                                         |
| `serviceMonitor.port`                  | The port name at which container exposes Prometheus metrics                                                                                                                                                                                                                                                                                                                                                                                                    | `metrics`                                     |
| `livenessProbe.enabled`                | Turn on and off liveness probe                                                                                                                                                                                                                                                                                                                                                                                                                                 | `true`                                        |
| `livenessProbe.initialDelaySeconds`    | Delay before liveness probe is initiated                                                                                                                                                                                                                                                                                                                                                                                                                       | `60`                                          |
| `livenessProbe.periodSeconds`          | How often to perform the probe                                                                                                                                                                                                                                                                                                                                                                                                                                 | `15`                                          |
| `livenessProbe.timeoutSeconds`         | When the probe times out                                                                                                                                                                                                                                                                                                                                                                                                                                       | `5`                                           |
| `livenessProbe.failureThreshold`       | Minimum consecutive failures for the probe                                                                                                                                                                                                                                                                                                                                                                                                                     | `3`                                           |
| `livenessProbe.successThreshold`       | Minimum consecutive successes for the probe                                                                                                                                                                                                                                                                                                                                                                                                                    | `1`                                           |
| `microservices.enabled`                | Use [microservices](../scaling-rocket.chat/microservices.md) architecture                                                                                                                                                                                                                                                                                                                                                                                      | `false`                                       |
| `microservices.presence.replicas`      | Number of replicas to run for the given service                                                                                                                                                                                                                                                                                                                                                                                                                | `1`                                           |
| `microservices.ddpStreamer.replicas`   | Idem                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `1`                                           |
| `microservices.streamHub.replicas`     | Idem                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `1`                                           |
| `microservices.accounts.replicas`      | Idem                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `1`                                           |
| `microservices.authorization.replicas` | Idem                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `1`                                           |
| `microservices.nats.replicas`          | Idem                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `1`                                           |
| `readinessProbe.enabled`               | Turn on and off readiness probe                                                                                                                                                                                                                                                                                                                                                                                                                                | `true`                                        |
| `readinessProbe.initialDelaySeconds`   | Delay before readiness probe is initiated                                                                                                                                                                                                                                                                                                                                                                                                                      | `10`                                          |
| `readinessProbe.periodSeconds`         | How often to perform the probe                                                                                                                                                                                                                                                                                                                                                                                                                                 | `15`                                          |
| `readinessProbe.timeoutSeconds`        | When the probe times out                                                                                                                                                                                                                                                                                                                                                                                                                                       | `5`                                           |
| `readinessProbe.failureThreshold`      | Minimum consecutive failures for the probe                                                                                                                                                                                                                                                                                                                                                                                                                     | `3`                                           |
| `readinessProbe.successThreshold`      | Minimum consecutive successes for the probe                                                                                                                                                                                                                                                                                                                                                                                                                    | `1`                                           |
| `registrationToken`                    | Registration Token for [Rocket.Chat Cloud](https://cloud.rocket.chat/)                                                                                                                                                                                                                                                                                                                                                                                         | ""                                            |
| `service.annotations`                  | Annotations for the Rocket.Chat service                                                                                                                                                                                                                                                                                                                                                                                                                        | `{}`                                          |
| `service.labels`                       | Additional labels for the Rocket.Chat service                                                                                                                                                                                                                                                                                                                                                                                                                  | `{}`                                          |
| `service.type`                         | The service type to use                                                                                                                                                                                                                                                                                                                                                                                                                                        | `ClusterIP`                                   |
| `service.port`                         | The service port                                                                                                                                                                                                                                                                                                                                                                                                                                               | `80`                                          |
| `service.nodePort`                     | The node port used if the service is of type `NodePort`                                                                                                                                                                                                                                                                                                                                                                                                        | `""`                                          |
| `podDisruptionBudget.enabled`          | Enable or disable PDB for RC deployment                                                                                                                                                                                                                                                                                                                                                                                                                        | `true`                                        |
| `podLabels`                            | Additional pod labels for the Rocket.Chat pods                                                                                                                                                                                                                                                                                                                                                                                                                 | `{}`                                          |
| `podAnnotations`                       | Additional pod annotations for the Rocket.Chat pods                                                                                                                                                                                                                                                                                                                                                                                                            | `{}`                                          |

Specify each parameter using the `--set key=value[,key=value]` argument to `helm install`. Alternatively, you can update the YAML file that specifies the values for the parameters to be provided while installing the chart.

## Database Setup

Rocket.Chat uses a MongoDB instance to presist its data. By default, the [MongoDB](https://github.com/bitnami/charts/tree/master/bitnami/mongodb) chart is deployed, and a single MongoDB instance is created as the primary in a replicaset.\
Please refer to [this chart](https://artifacthub.io/packages/helm/bitnami/mongodb) for additional MongoDB configuration options. If you are using chart defaults, set the `mongodb.auth.rootPassword` and `mongodb.auth.passwords`.

### **Using an External Database**

This chart supports using an existing MongoDB instance. Use the [configuration ](deploy-with-kubernetes.md#configuration)options and disable the chart's MongoDB with `--set mongodb.enabled=false`

### Configuring Additional Environment Variables

```
extraEnv: |
  - name: MONGO_OPTIONS
    value: '{"ssl": "true"}'
```

### Specifying aditional volumes

Sometimes, it's necessary to include extra sets of files by means of exposing them to the container as a mountpoint. The most common use case is the inclusion of SSL CA certificates.

```
extraVolumes: 
  - name: etc-certs
    hostPath:
    - path: /etc/ssl/certs
      type: Directory
extraVolumeMounts: 
  - mountPath: /etc/ssl/certs
    name: etc-certs   
    readOnly: true
```

### Increasing Server Capacity and HA Setup ![](../../../.gitbook/assets/Premium.svg)

To increase the server's capacity, you can increase the number of Rocket.Chat server instances across available computing resources in your cluster. For example,

```
kubectl scale --replicas=3 deployment/rocketchat
```

By default, the chart creates one MongoDB instance as a Primary in a replicaset. You can also scale up the capacity and availability of the MongoDB cluster independently.

> See [MongoDB chart](https://github.com/bitnami/charts/tree/master/bitnami/mongodb) for configuration information. To learn more on running Rocket.Chat in scaled configurations, visit the [Configure MongoDB Replicaset](../../../setup-and-configure/environment-configuration/mongodb-configuration/configure-a-replica-set-for-mongodb.md) guide.

### Manage MongoDB secrets

The chart provides several ways to manage the connection for MongoDB apart from the primary `mongodb.auth` values. They include:

* Values passed to the chart (externalMongodbUrl, externalMongodbOplogUrl)
* An ExistingMongodbSecret containing the MongoURL and MongoOplogURL

```
apiVersion: v1
kind: Secret
metadata:
  name: my-secret
type: Opaque
data:
  mongo-uri: mongodb://user:password@localhost:27017/rocketchat
  mongo-oplog-uri: mongodb://user:password@localhost:27017/local?replicaSet=rs0&authSource=admin
```

### Upgrading

### To 5.4.3

Due to changes on the upstream MongoDB chart, some deprecated variables have been renamed, which changed how this chart generates its manifests. Here are the values that need updates:

* `mongodb.auth.username` is no longer supported and has been changed to `mongodb.auth.usernames` array. If you set it to something custom (defaults to `rocketchat`), make sure you update it to an array, and the entry is the **first** entry in that array, as that's what Rocket.Chat will use to connect to the database.
* `mongodb.auth.password` is no longer supported and has been changed to `mongodb.auth.passwords` array. Update your values file to make it an array, and ensure it's the first entry of that array.
* `mongodb.auth.database` is no longer supported and has been changed to `mongodb.auth.databases`. Update your values file, convert it to an array, and ensure it's the first entry of that array.
* `mongodb.auth.rootUsername` and `mongodb.auth.rootPassword` remain the same.

> _`usernames`, `passwords` and `databases` arrays must be of the same length. Rocket.Chat chart will use the first entry for its mongodb connection string in `MONGO_URL` and `MONGO_OPLOG_URL`._

The used image tag gets updated **in most cases** on each chart update. The same is true for the MongoDB chart we use as our dependency. Before version 5.4.3, we used the chart version 10.x.x. Starting from 5.4.3, the dependency chart version has been updated to the latest available version, 13.x.x. This chart defaults to MongoDB 6.0.x at the moment.

> As a warning, this chart will not handle MongoDB upgrades and will depend on the user to ensure the supprted version is runnning.

The upgrade will fail if any of the following requirements are not met :

* Must not skip a MongoDB release. For example, 4.2.x to 5.0.x will fail.
* Current `featureCompatibilityVersion` must be compatible with the version the user is trying to upgrade to. For example—if the current database version and feature compatibility is 4.4 and 4.2, respectively, but the user is trying to upgrade to 5.0, it'll fail.

The chart will not check if the mongodb version is supported by the Rocket.Chat version considering deployments that might occur in an airgapped environment. You can check the[ release notes](https://github.com/RocketChat/Rocket.Chat/releases) to confirm that.

To get the currently deployed MongoDB version, the easiest method is to get into the mongo shell and run `db.version()`. You are advised to pin your MongoDB dependency in the values file.

```
mongodb:
  image:
    tag: # find from https://hub.docker.com/r/bitnami/mongodb/tags
```

To learn more about the Rocket.Chat helm chart, visit the [Github repository](https://github.com/RocketChat/helm-charts/blob/master/rocketchat/README.md).

### References

* [Run a shell inside a container (to check mongodb version)](https://kubernetes.io/docs/tasks/debug/debug-application/get-shell-running-container/)
* [MongoDB upgrade official documentation](https://www.mongodb.com/docs/manual/tutorial/upgrade-revision/)
* [MongoDB helm chart options](https://artifacthub.io/packages/helm/bitnami/mongodb)
