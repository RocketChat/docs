# File Upload FAQs

<details>

<summary>Why am I getting the "Request Entity Too Large" error on file upload?</summary>

The error shown below is when the upload limit is less than the size of the file in rocket.chat.

<img src="../../../../.gitbook/assets/image (1011).png" alt="" data-size="original">

If you are using nginx as your load balancer, it could be nginx limit that is throwing the following error not your rocket.chat limit.

<img src="../../../../.gitbook/assets/image (289) (1).png" alt="" data-size="original">

Edit your Nginx configuration to increase the `client_max_body_size` value. Learn more [here](https://www.cyberciti.biz/faq/linux-unix-bsd-nginx-413-request-entity-too-large/).

Large file sizes can affect the Mongo sort operation follow [this guide](https://developerslogblog.wordpress.com/2019/11/27/mongodb-sort-how-to-fix-maximum-ram-exceeded-error/) to resolve it.

</details>
