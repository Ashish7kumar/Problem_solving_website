import bodyParser from "body-parser";
import errorHandler from "./utils/error.handler.js";
import express from "express";
import { PORT } from "./config/server.config.js";
import apiRouter from "./routes/index.js";
import errorHandlerMiddleware from "./utils/error.handler.js";
import Dbconnection from "./config/monogo.config.js";
const app = express();
app.use(bodyParser.json());
app.use("/api", apiRouter);
app.use(errorHandlerMiddleware);
app.listen(PORT, async () => {
  try{
  await Dbconnection();
  console.log('Connected to Db')
  console.log(`Server Started on ${PORT}`);
  }
  catch{
    console.log('Cant connect to server or db');
  }
});
