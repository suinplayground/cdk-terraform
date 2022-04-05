import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { Repository } from "./.gen/providers/github/repository";
import { GithubProvider } from "./.gen/providers/github";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // Enable github provider
    new GithubProvider(this, "github", {
      owner: "suinplayground",
    });

    // Create repository
    new Repository(this, "repo", {
      name: "cdk-terraform",
    });
  }
}

const app = new App();
new MyStack(app, "cdk-terraform");
app.synth();
