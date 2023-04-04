# Support FAQs

## **Slow connections. iOS connection error**

95% or more of these are due to improperly configured reverse proxies where the WebSocket is not working properly. If a WebSocket cannot be correctly established, the client will try and fall back to an XHR connection. It is extremely slow and flaky. The iOS app will not connect at all without a WebSocket.

{% hint style="info" %}
Always use Chrome and dev tools to check for the presence of a WebSocket.
{% endhint %}

## **WebSockets**

* Right Click, Inspect
* Network, F5 to refresh
* Look for the WS filter
* Should see WebSocket( _wss://open.rocket.chat/sockjs/123/pbiz45rm/websocket_)
* Click it and look on the right for 'Headers'
* Has this got a green light?

```
 Status Code: 101 Switching Protocols
```

* What do the headers say?

```
Response headers
 Connection: Upgrade
 Sec-WebSocket-Accept: nXd/PfaHuA1Kx/ggJWAAy+96Ee4=
 Upgrade: websocket
```

## **Upgrading Rocket.Chat**

You can upgrade your Rocket.Chat version and also your mongo version. Snaps should auto-update, so this is aimed at those who use other methods.

* **Backup:** Lots of them and lots of ways, and practice restores.
* **Use virtual machines for testing:** They are so cheap.

### Upgrading Mongo

* There are leaps between `2.x` and `3.x`
* Then there are more leaps as you proceed through 3.x and then again to 4.x.

{% hint style="info" %}
Backup is essential. Confirm the supported MongoDB version for the Rocket.Chat [release ](https://github.com/RocketChat/Rocket.Chat/releases)you want to upgrade to and follow the official MongoDB documentation to upgrade it.
{% endhint %}



### Upgrading Rocket.Chat

Most Roket.Chat updates also update the database schema - the core layout. Now, theoretically, apart from adding oplogs to Mongo for Rocket `1.x` +, you should be able to merrily jump from version `0.62` through to `2.1.x`.

If you hit a problem asides from schema changes, it will be one of those.

The devs test changes from one version to another and maybe even over a few versions. But not every single version is up to the latest or, say `0.74.3` -> `1.3.2.`That's where it may go wrong.

So a recommended path is something like this:

```
-> 0.73.x -> 1.0.x -> 1.32 -> 2.0.x -> 2.1.x
```

Or possibly even more cautious:

```
 -> 073.x - 1.0.x -> 1.1.x -> 1.2.x -> 1.3.x -> 2.0.x -> 2.1.x
```

{% hint style="info" %}
'x' means the last patched version e.g. 1.3.2 Check [tags](https://github.com/RocketChat/Rocket.Chat/tags) or [releases](https://github.com/RocketChat/Rocket.Chat/releases)&#x20;
{% endhint %}

We have seen people make some big jumps. And some disasters too. If in doubt, take your time and do well to back up!
