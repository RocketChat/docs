# Rocket.Chat Security Advisories

The Security Advisories page provides information on security vulnerabilities that have been reported and fixed in Rocket.Chat products.

To increase user safety, advisories details are announced 30 days after fix release.&#x20;



| ID             | Severity | Details                                                                                                                        | Affected Versions        | Fixed Versions     |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------ | ------------------ |
| RCSA-2023-0001 | Medium   | Fixed an Insecure Direct Object Reference (IDOR) issue where a user could access any attachment if they have the correct link. | <=6.3.12,<=6.4.8,<=6.5.0 | 6.3.13,6.4.9,6.5.1 |
| RCSA-2023-0002 | Low      | Fixed an issue where a user could cause Denial of Service (DOS) if they request a very large user or room avatar.              | <=6.3.12,<=6.4.8,<=6.5.0 | 6.3.13,6.4.9,6.5.1 |
| RCSA-2023-0003 | High     | Fixed an issue where a user could brute-force the email OTP code.                                                              | <=6.3.12,<=6.4.8,<=6.5.0 | 6.3.13,6.4.9,6.5.1 |
| RCSA-2023-0004 | Medium   | Fixed an issue where a user could bypass the rate-limiter protection by modifying the `User-Agent` HTTP header.                | <=6.3.12,<=6.4.8,<=6.5.0 | 6.3.13,6.4.9,6.5.1 |
| RCSA-2023-0005 | High     | Fixed an issue where an authenticated user could access all Oauth app details by knowing the application ID.                   | <=6.3.12,<=6.4.8,<=6.5.0 | 6.3.13,6.4.9,6.5.1 |
