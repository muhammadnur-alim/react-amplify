import { defineFunction } from "@aws-amplify/backend";

export const connectMongoDb = defineFunction({
  // optionally specify a name for the Function (defaults to directory name)
  name: "connect-to-mongodb",
  // optionally specify a path to your handler (defaults to "./handler.ts")
  entry: "./handler.ts",
});
