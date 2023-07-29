# Enable HTTPS

You can secure your Rocket.Chat docker instance with TLS certificates from Let's Encrypt. Using Traefik as a reverse proxy, the certificates are automatically generated, enabling safe access to your Rocket.Chat instance via HTTPS on your specified domain.

To get HTTPS, ensure the correct A record (optionally CNAME) is set for your domain going to your server IP.&#x20;

* Update the following variables in your `.env` file. If you don't have one, create a .env file following [our example](https://github.com/RocketChat/Docker.Official.Image/blob/master/env.example).
  * `LETSENCRYPT_EMAIL`: Your required email for the TLS certificates.
  * `DOMAIN`: Your domain or subdomain name only. Avoid adding https:// or any trailing slashes. Confirm that this domain resolves to the server IP address.
  * `RELEASE` : Your preferred Rocket.Chat release. See the [releases page](https://github.com/RocketChat/Rocket.Chat/releases) to know more about our releases.
  * `DOMAIN` : Set the value to "[https://your-domain.com](https://your-domain.com/)," replacing "your-domain.com" with the domain name you want to use.
  * `BIND_IP`: Set to `127.0.0.1` .

```
LETSENCRYPT_EMAIL= # your email, required for the tls certificates
# set this to your domain name or subdomain, not trailing slashes or https://, just the domain
# make sure it actually resolves to your droplet ip
DOMAIN= 
RELEASE= # pin the rocketchat version, at the time of writing, prefer 6.0.0
ROOT_URL= # set this to https://${DOMAIN} replace ${DOMAIN} with the actual domain
BIND_IP=127.0.0.1
```

* Download the traefik template by running the following command:

```
curl -LO \
    https://raw.githubusercontent.com/RocketChat/Docker.Official.Image/master/traefik.yml
```

* Recreate the existing Rocket.Chat container

```
docker compose up -d rocketchat --force-recreate
```

* Star traefik

```
docker compose -f traefik.yml up -d
```

Wait for the TLS certificates to generate and Rocket.Chat to restart. Then,  access your Rocket.Chat instance securely at [https://your-domain.com](https://your-domain.com/), using the actual domain name you configured.
