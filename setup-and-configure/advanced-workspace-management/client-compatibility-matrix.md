# Client Compatibility Matrix

Rocket.Chat maintains a client compatibility matrix to ensure its mobile and desktop applications function correctly across different server versions. This document will provide an overview of Rocket.Chat's approach to maintaining client compatibility.

While all past releases are not officially supported and may cause problems, Rocket.Chat strives to ensure that its applications function correctly with the most recent server versions. This approach ensures that users can leverage the latest features and improvements while maintaining a secure,  stable, and reliable user experience.

## Desktop

| Electron Version | Supported releases |
| :--------------: | :----------------: |
|       2.15       |        1.0+        |
|       2.14       |       ⩽ 0.70       |
|       2.13       |       ⩽ 0.69       |
|       2.12       |       ⩽ 0.68       |
|       2.11       |       ⩽ 0.65       |
|       2.10       |       ⩽ 0.59       |
|        2.9       |       ⩽ 0.58       |
|        2.8       |       ⩽ 0.56       |
|        2.7       |       ⩽ 0.55       |

## Mobile

Rocket.Chat's mobile applications support a maximum of three major server versions on each release. This is due to the rapid evolution of the platform's APIs with each release, which can make maintaining compatibility with older versions challenging, especially when those versions lack support for specific features.

| App Version | Supported releases |
| :---------: | :----------------: |
|    4.0.0+   |        0.70+       |

{% hint style="info" %}
In case of app server upgrade from 3.x to 6.x versions, if you log out of the app, you cannot log back in. There is a version check that prevents users from logging back in. If you do not log out, the app continues to function normally. We are currently working on fixing this behavior.
{% endhint %}
