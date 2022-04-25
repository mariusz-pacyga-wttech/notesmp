import StorageStack from "./StorageStack";
import ApiStack from "./ApiStack";

export default function main(app){
  const storageStack = new StorageStack(app, "storagemp");
  new ApiStack(app, "apimp", {
    table: storageStack.table
  });
}