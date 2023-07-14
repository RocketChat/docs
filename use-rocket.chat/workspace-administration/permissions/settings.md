# Settings

Setting permissions allows you to control the [settings](../settings/) users can change within a workspace based on their roles. Instead of giving full access, you can grant specific permissions related to certain tasks. For example, a user managing file uploads can be assigned permissions to modify settings directly related to file upload, while restricting access to other sensitive areas. The ability to control permissions at a detailed level can help to improve security, reduce the risk of accidental changes, and facilitate the delegation of responsibilities.

{% hint style="info" %}
All [settings](../settings/) have permissions to determine which users can access them.
{% endhint %}

To access the settings,

* Navigate to **Administration** > **Workspace** > **Permissions > Settings.**

## Settings

| Name                                                                          | Codebase Name                                          | Description                                                                                           |
| ----------------------------------------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| General > REST API > Allow Getting Everything                                 | `API_Allow_Infinite_Count`                             | Allow REST API requests to return all results in one call.                                            |
| General > REST API > CORS Origin                                              | `API_CORS_Origin`                                      |                                                                                                       |
| General > REST API > Apply permission `view-outside-room` to api `users.list` | `API_Apply_permission_view-outside-room_on_users-list` | Temporary setting to enforce `view-outside-room` permission to users.                                 |
| General > REST API > Default Count                                            | `API_Default_Count`                                    | The default count for REST API results if the consumer did not provided any                           |
| Message > Embed Cache Expiration Days                                         | `API_EmbedCacheExpirationDays`                         | Embed Cache Expiration Days.                                                                          |
| Message > Embed Request User Agent                                            | `API_Embed_UserAgent`                                  |                                                                                                       |
| Message > API\_Embed\_clear\_cache\_now                                       | `API_Embed_UserAgent`                                  |                                                                                                       |
| Message > Safe Ports                                                          | `API_EmbedIgnoredHosts`                                |  List of hosts or CIDR addresses, eg. localhost, 127.0.0.1, 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 |
| OAuth > Drupal > Drupal Server URL                                            | `API_Drupal_URL`                                       | Example: `https://domain.com` (excluding trailing slash                                               |
| Embed Link Previews                                                           | `API_Embed`                                            | Whether embedded link previews are enabled or not when a user posts a link to a website               |
| Accounts                                                                      |                                                        |                                                                                                       |
| Accounts > Allow Anonymous Read                                               | `Accounts_AllowAnonymousRead`                          |                                                                                                       |
| Accounts > Allow Anonymous Write                                              | `Accounts_AllowAnonymousWrite`                         |                                                                                                       |
| Accounts > Allow Users to Delete Own Account                                  | `Accounts_AllowDeleteOwnAccount`                       |                                                                                                       |
| Accounts > Allow Email Change                                                 | `Accounts_AllowEmailChange`                            |                                                                                                       |
| Accounts > Allow Email Notifications                                          | `Accounts_AllowEmailNotifications`                     |                                                                                                       |
| Accounts > Allow Invisible status option                                      | `Accounts_AllowInvisibleStatusOption`                  |                                                                                                       |
| Accounts > Allow Password Change                                              | `Accounts_AllowPasswordChange`                         |                                                                                                       |
| Accounts > Allow Password Change for OAuth users                              | `Accounts_AllowPasswordChangeForOAuthUsers`            |                                                                                                       |
| Accounts > Allow Name Change                                                  | `Accounts_AllowRealNameChange`                         |                                                                                                       |
| Accounts > Allow User Avatar Change                                           | `Accounts_AllowUserAvatarChange`                       |                                                                                                       |
| Accounts > Allow User Profile Change                                          | `Accounts_AllowUserProfileChange`                      |                                                                                                       |
| Accounts > Allow Custom Status Message                                        | `Accounts_AllowUserStatusMessageChange`                |                                                                                                       |
| Accounts > Allow Username Change                                              | `Accounts_AllowUsernameChang`                          |                                                                                                       |
| Accounts > Registration > Allowed DomainsList                                 | `Accounts_AllowedDomainsList`                          |                                                                                                       |
| Accounts > Avatar > Block Unauthenticated Access                              | `Accounts_AvatarBlockUnauthenticatedAccess`            |                                                                                                       |
| Accounts > Avatar > Avatar cache time                                         | `Accounts_AvatarCacheTime`                             |                                                                                                       |
| Accounts > Avatar > Resize Avatars                                            | `Accounts_AvatarResize`                                |                                                                                                       |
| Accounts > Avatar > Avatar Size                                               | `Accounts_AvatarSize`                                  |                                                                                                       |
| Accounts > Registration > Blocked Domain List                                 | `Accounts_BlockedDomainsList`                          | Comma-separated list of blocked domains.                                                              |
| Accounts > Avatar > Resize Avatars                                            | `Accounts_AvatarResize`                                |                                                                                                       |
| Accounts > Avatar > Avatar External ProviderUrl                               | `Accounts_AvatarExternalProviderUrl`                   |                                                                                                       |
| Accounts > Registration > Blocked Username List                               | `Accounts_BlockedUsernameLis`                          |                                                                                                       |

