# Iframe-based Single Sign-On

With an iframe-based single sign-on, you can implement authentication within an iframe (inline frame) embedded in a webpage. You can authenticate users inside Rocket.Chat automatically from a third-party application. It can be useful when embedding the chat inside another application to make the users' lives easier.&#x20;

You can use the iframe integration in combination with [deeplinking](https://developer.rocket.chat/rocket.chat/deeplink) and `resumeToken`.&#x20;

```
# get the resumeToken from your REST API login - it's the authToken field
https://yourdomain.rocket.chat/home?resumeToken=abcd123456789
```

## Integrate iframe with Rocket.Chat

There are two ways to use the iframe integration for this purpose. It's important to note that both options require you to handle the user creation from your own application server using our APIs and make the login to retrieve the user's session token to pass it to the Rocket.Chat client via one of these ways:

### Embedd Rocket.Chat inside an iframe

If you already have Rocket.Chat inside an iframe, you can use call commands inside that iframe. There[ is a command to log in the user passing a token](https://developer.rocket.chat/rocket.chat/iframe-integration/iframe-integration-sending-commands). Retrieve the token from your APIs and then pass it to the iframe.

* Call your API to retrieve the token, for example `/api/rocketchat/token`
* Your API will validate your session, probably via cookies.
* Your API will then call the[ Rocket.Chat APIs](https://developer.rocket.chat/reference/api) to check if the user exists.
* If it doesn't exist, call the Rocket.Chat APIs to create the user.
* If the user exists, call the Rocket.Chat APIs to make the login and receive the token.
* Return the token in your API response.
* In your client, with the token, call the [iframe methods to execute the login](https://developer.rocket.chat/rocket.chat/iframe-integration/iframe-integration-sending-commands).

### Embed your own "Loading page" inside Rocket.Chat

This flow requires a page to be rendered in place of the normal Rocket.Chat's login page. It can be a basic loading screen since it's just for information.

The other setting you configure here is the [API URL and Method](https://developer.rocket.chat/rocket.chat/iframe-integration/what-is-iframe-auth) to be called once an unauthenticated user opens the Rocket.Chat. Then Rocket.Chat will make an HTTP call to your endpoint, expecting a [JSON response containing the authToken](https://developer.rocket.chat/rocket.chat/iframe-integration/what-is-iframe-auth#managing-mongodb-directly). You should use cookies to identify if the user calling your API is authenticated and make the process to generate the Rocket.Chat's token and return it:

* Rocket.Chat will call the configured API and Method to retrieve the token.
* The API should validate your session via cookies.
* The API will then call the Rocket.Chat APIs to check if the user exists.
* If it doesn't exist, call the Rocket.Chat APIs to create the user.
* If the user exists, call the Rocket.Chat APIs to make the login and receive the token.
* Return the token in your API response in JSON format as [described here](https://developer.rocket.chat/rocket.chat/iframe-integration/what-is-iframe-auth#managing-mongodb-directly).
* Rocket.Chat will use the token automatically to make the authentication.
* For this implementation, configure [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and [X-FRAME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options):&#x20;
  * Your server should **not** block the page you want to load inside the iframe. See [X-FRAME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) for more information on how to prevent this.
  * Your server should **not** block the calls **from** Rocket.Chat's domain to your configured API endpoint. Calls between domains are often blocked by default. See [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) for more information on how to prevent this.

Along with the authentication options highlighted in this section, iframe-based sign-on also helps you integrate multiple web applications and create a seamless user experience.
