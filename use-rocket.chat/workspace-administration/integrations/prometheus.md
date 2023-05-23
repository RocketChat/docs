# Prometheus

Prometheus is an open-source application used for [event monitoring](https://en.wikipedia.org/wiki/Event\_monitoring) and [alerting](https://en.wikipedia.org/wiki/Alert\_messaging). It records metrics in a [time series database](https://en.wikipedia.org/wiki/Time\_series\_database) (allowing for high [dimensionality](https://en.wikipedia.org/wiki/Dimension\_\(metadata\))) built using an [HTTP](https://en.wikipedia.org/wiki/HTTP) [pull model](https://en.wikipedia.org/wiki/Pull\_technology) with flexible queries and real-time alerting. The project is written in [Go](https://en.wikipedia.org/wiki/Go\_\(programming\_language\)) and licensed under the Apache 2 License, with [source code](https://en.wikipedia.org/wiki/Source\_code) available on [GitHub](https://en.wikipedia.org/wiki/GitHub).&#x20;

[Rocket.Chat.Metrics](https://github.com/RocketChat/Rocket.Chat.Metrics) repository contains a basic monitoring setup of [Rocket.Chat](https://github.com/RocketChat/Rocket.Chat), based on Grafana and Prometheus. It currently shows and visualizes the following application metrics/information:

* **General totals**: users online/away, DDP users, diffs based on time range
* **Metrics**: requests and total size per instance
* **NodeJS**: active handles, requests, event loop lag, heap used, per instance heap, garbage collector
* **DDP rate limiter**: by method, by type, by userId, by connectionId
* **Rocket.Chat Data:** messages sent, total sent, user presence, users & sessions, Oplog, push queue, Meteor facts, total users, total rooms, notification per minute per notification type
* **Meteor**: methods total time, methods time, method calls per minute
* **Subscriptions**: subscription total time, subscription time, subscription calls per minute
* **Callbacks & Hooks:** callbacks total time, callbacks time, callback calls per minute, hooks total time, hooks time, hook calls per minute
* **REST API:** REST total time, REST time, REST calls per minute

{% embed url="https://github.com/RocketChat/Rocket.Chat.Metrics" %}
Rocket.Chat.Metrics
{% endembed %}
