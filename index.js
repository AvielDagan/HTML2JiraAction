const core = require("@actions/core");
const github = require("@actions/github");
let { HTML2Jira } = require("HTML2Jira");
try {
  const htmlInput = core.getInput("html-input");
  let converter = new HTML2Jira();
  let jiraContent = converter.toJira(htmlInput);
  core.setOutput("jira-content-output", jiraContent);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
