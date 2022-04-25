import StorageStack from "./StorageStack";
import ApiStack from "./ApiStack";
import AuthStack from "./AuthStack";

export default function main(app){

  app.setDefaultFunctionProps({
    runtime: "nodejs14.x"
  });
  
  const storageStack = new StorageStack(app, "storagemp");

  const apiStack = new ApiStack(app, "apimp", {
    table: storageStack.table
  });

  new AuthStack(app, "authmp", {
    api: apiStack.api,
    bucket: storageStack.bucket
  });
}