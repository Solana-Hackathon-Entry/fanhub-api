import express, { Express } from "express";
import connectDB from "./app/db";
import ENV from "./app/env/index.js";
import { addRoutes } from "./app/routes/index.js";
import { addMiddlewares } from "./app/middlewares/index.js";
import fs from "fs";
const app: Express = express();

//initialization
const start = () => {
  fs.mkdirSync("./uploads", { recursive: true });
  addMiddlewares(app);
  addRoutes(app);

  connectDB(ENV.MONGO_CON).then(() => {
    console.log(`Database connected to ${ENV.MONGO_CON}`);

    app.listen(ENV.PORT, () => {
      console.log(`Server started on port ${ENV.PORT}`);
    });
  });
};

start();
