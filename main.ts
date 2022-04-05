import { App, TerraformOutput, TerraformStack } from "cdktf";
import { Construct } from "constructs";
import { GithubProvider } from "./.gen/providers/github";
import { Repository } from "./.gen/providers/github/repository";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // Enable github provider
    new GithubProvider(this, "github", {
      owner: "suinplayground",
    });

    // Create repository
    const repo = new Repository(this, "repo", {
      name: "cdk-terraform",
    });

    new TerraformOutput(this, "repo-url", {
      value: repo.htmlUrl,
    });
  }
}

const app = new App();
new MyStack(app, "cdk-terraform");
app.synth();
