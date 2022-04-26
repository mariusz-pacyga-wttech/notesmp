import StorageStack from "./StorageStack";
import ApiStack from "./ApiStack";
import AuthStack from "./AuthStack";
import FrontendStack from "./FrontendStack";

export default function main(app){

  app.setDefaultFunctionProps({
    runtime: "nodejs14.x"
  });
  
  const storageStack = new StorageStack(app, "storagemp");

  const apiStack = new ApiStack(app, "apimp", {
    table: storageStack.table
  });

  const authStack = new AuthStack(app, "authmp", {
    api: apiStack.api,
    bucket: storageStack.bucket
  });

  new FrontendStack(app, "frontend", {
    api: apiStack.api,
    auth: authStack.auth,
    bucket: storageStack.bucket
  });

}