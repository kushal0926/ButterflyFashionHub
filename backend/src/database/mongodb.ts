import mongoose from "mongoose";
import { MONGODB_URI, NODE_ENV } from "../config/env.ts";

// making it throw an error if the mongodb_uri is empty inside the environment variable
if (!MONGODB_URI) {
  throw new Error(
    "PLEASE DEFINE THE MONGODB_URI ENVVVVent VARIABLE INSIDE env.<development/production>.local",
  );
}

const connectToDatabase = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log(`CONNECTED TO MONGODB DATABASE IN ${NODE_ENV} MODE`);
    });

    await mongoose.connect(MONGODB_URI as string);
  } catch (error) {
    console.log("Error connecting to mongodb database", error);
  }
};

export default connectToDatabase;
