import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

import { app } from "./index";
const port = process.env.PORT || 8002;

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  if (!process.env.DATABASE) {
    throw new Error("DATABASE must be defined");
  }
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }
};

app.listen(port, () => {
  console.log("App is running on port " + port);
});

start();
