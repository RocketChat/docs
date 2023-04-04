# AppVeyor

[AppVeyor](https://www.appveyor.com/) is a CI/CD service for Windows, Linux, and macOS. AppVeyor supports most source control platforms. You can link AppVeyor to Rocket.Chat through webhooks and get notified in a Rocket.Chat channel each time a build runs.

## AppVeyor webhook integration

[Sign up](https://ci.appveyor.com/signup) for an Appveyor account and link it to your source control platform. The demonstration here is done using [GitHub](https://github.com) as the source control platform.

### Create a New AppVeyor Project

To create an AppVeyor project:

* Create a new GitHub repository or clone [this NodeJs project](https://github.com/ngengesenior/nodeproject).
* Sign in to AppVeyor.
* Go to the [Projects](https://ci.appveyor.com/projects) page.
* Click **+NEW PROJECT.**
* Select **GitHub** on the left pane.
* Select either **public repositories only** or both **public and private repositories**.
* Click **Authorize GitHub**.
* Sign in to GitHub in the newly opened tab.&#x20;
* Select the above-created webhook project in the list of projects shown as the repository to use.

### Create Rocket.Chat Incoming Webhook

Follow the necessary steps to create a Rocket.Chat incoming webhook. See[ Create a new incoming webhook](./#create-a-new-incoming-webhook). Take note of the generated webhook URL.

### Script details

Paste the following script into the **Script** field for the incoming webhook created.

```
/* exported Script */
/* globals console, _, s */

/** Global Helpers
 *
 * console - A standard console instance
 * _       - An underscore instance
 * s       - An underscore string instance
 */

class Script {
    /**
     * @params {object} request
     */
    process_incoming_request({ request }) {
        let reqContent = request.content;
        let message = "";
        const name = reqContent.commitAuthor;
        const authorEmail = reqContent.commitAuthorEmail;
        const commitDate = reqContent.commitDate;
        const commitMessage = reqContent.commitMessage;
        const repo = reqContent.repositoryName;
        const commitId = reqContent.commitId;
        const projectName = reqContent.projectName;
        const buildNumber = reqContent.buildNumber;
        const buildId = reqContent.buildId;
        message += "Commit by author:" + name + " whose email is " + authorEmail;
        message += " on the repo " + "[" + projectName + "](https://github.com/" + repo + ")";
        message += " on " + commitDate + " and their commit message was,'" + commitMessage + "'\n"
        message += "Build details, build ID:" + buildId + ", build number:" + buildNumber + "\n"
        message += "You can check the [Commit](https://github.com/" + repo + "/commit/" + commitId + ")"

        const content = {
            "emoji": ":smiley:",
            "text": message,
            "attachments": [
                {
                    "title": projectName + " build",
                    "title_link": "https://rocket.chat",
                    "text": "Appveyor is a CI tool,"
                    "image_url": "https://writing-demo.dev.rocket.chat/images/integration-attachment-example.png",
                    "color": "#764FA5"
                }
            ]
        };

        return {
            content:content
        };
    }
}
```

### Code details

Each time you push to your configured GitHub repository, AppVeyor posts a payload to our webhook. The structure of the payload is similar to that of [sample.json](https://github.com/ngengesenior/nodeproject/blob/master/sample.json) found in the example repository. You retrieve the `content` object and use the details to create a message object which becomes the text portion of the Rocket.Chat message returned in the method. `process_incoming_request`.

### Configuring AppVeyor build

To configure your build:

* Create a file in the root directory of your configured GitHub project called `appveyor.yml` and paste the following content.

```yaml
environment:
  nodejs_version: "8"

# Install scripts. (runs after repo cloning)
install:
  # Get the latest stable version of Node.js or io.js
  - ps: Install-Product node ''
  # install modules
  - npm install

# Post-install test scripts.
test_script:
  # Output useful info for debugging.
  - node --version
  - npm --version
  # run tests
  - npm test

# Don't actually build.
build: off
deploy:
  provider: Webhook
  url: https://the-link-to-your-incoming-webhook
  request_timeout: 5
```

* The `install` block in the configuration tells the build to install the latest version of NodeJS and the deploy block tells AppVeyor to make use of webhooks. Replace the **`url`** variable with the webhook URL generated during the creation of your incoming webhook. Check [provider settings](https://www.appveyor.com/docs/deployment/webhook/#provider-settings) to understand better.
* Commit and push the code to your GitHub repository.
* The build process starts immediately after the push is successful.
* A notification is sent in the channel you configured to be used for your incoming webhook.

The current build can be verified by navigating to **Projects** > **Your-Project** > **Current build** on AppVeyor.
