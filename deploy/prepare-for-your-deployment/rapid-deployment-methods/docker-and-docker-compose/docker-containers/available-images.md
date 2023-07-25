# Available Images

Rocket.Chat is a rapidly growing Open Source Software (OSS) project that provides various Docker images catering to the diverse requirements of its global user community. These Docker images allow users to deploy and run Rocket.Chat on their systems easily.

To get the Docker images, users can visit the Rocket.Chat [GitHub Release Page](https://github.com/RocketChat/Rocket.Chat/releases), where they will find various releases available for download. From there, they can select the specific release they need based on their requirements.

{% hint style="info" %}
You must have Docker installed and operational before using the Docker images.
{% endhint %}

## Official image (stable and tested)

The [Official Docker Images Repository](https://docs.docker.com/docker-hub/official\_images/) is where Rocket.Chat's Official, stable image is maintained and controlled by Docker, and reviewed by the Docker committee.

```bash
docker pull registry.rocket.chat/rocketchat/rocket.chat
```

## Latest Release Image

This is an image that is maintained at Rocket.Chat's docker repository. The release may be from the `develop` or `master` branch.

```bash
docker pull registry.rocket.chat/rocketchat/rocket.chat:latest
```

## Preview Image

The Rocket.Chat preview image deploys a container with a database inside. It's useful for quickly trying or running tests, not requiring a dedicated database installation.

{% embed url="https://hub.docker.com/r/rocketchat/rocket.chat.preview" %}

## Specific Release Image

This is an image that is maintained at Rocket.Chat's docker repository. It is associated with a [release build](https://github.com/RocketChat/Rocket.Chat/releases).

```bash
docker pull registry.rocket.chat/rocketchat/rocket.chat:X.X.X
```

### Discovering existing releases

You can select the release you need from our [DockerHub Tags](https://hub.docker.com/r/rocketchat/rocket.chat/tags/).

#### Bleeding-edge untested develop build image

This is an image maintained at Rocket.Chat's docker repository updated from the `develop` (untested) branch, containing the latest updates for those who want to work with the newest features.

```bash
docker pull registry.rocket.chat/rocketchat/rocket.chat:develop
```
