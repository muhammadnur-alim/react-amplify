import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { connectMongoDb } from "./functions/mongodb/resource";

defineBackend({
  auth,
  data,
  connectMongoDb,
});
