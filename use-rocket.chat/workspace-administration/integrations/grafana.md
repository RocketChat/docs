# Grafana

[Grafana](https://github.com/grafana/grafana) is a multi-platform open-source analytics and interactive visualization web application. It provides charts, graphs, and alerts for the web when connected to supported data sources. It can be easily installed using [Docker](https://en.wikipedia.org/wiki/Docker\_\(software\)) or Docker Compose.

[Rocket.Chat.Metrics](https://github.com/RocketChat/Rocket.Chat.Metrics) repository contains a basic monitoring setup of [Rocket.Chat](https://github.com/RocketChat/Rocket.Chat), based on Grafana and Prometheus. It currently shows and visualizes the following application metrics/information:

* _General totals_ (users online/away, DDP users, diffs based on time range)
* _Metrics_ (requests and total size per instance)
* _NodeJS_ (active handles, requests, event loop lag, heap used, per instance heap, garbage collector)
* _DDP rate limiter_ (by method, by type, by userId, by connectionId)
* _Rocket.Chat Data_ (messages sent, total sent, user presence, users & sessions, Oplog, push queue, Meteor facts, total users, total rooms, notification per minute per notification type)
* _Meteor_ (methods total time, methods time, method calls per minute)
* _Subscriptions_ (subscription total time, subscription time, subscription calls per minute)
* _Callbacks & Hooks_ (callbacks total time, callbacks time, callback calls per minute, hooks total time, hooks time, hook calls per minute)
* _REST API_ (REST total time, REST time, REST calls per minute)

{% embed url="https://github.com/RocketChat/Rocket.Chat.Metrics" %}
Rocket.Chat.Metrics
{% endembed %}
