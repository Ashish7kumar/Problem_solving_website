import bodyParser from "body-parser";
import errorHandler from "./utils/error.handler";
import express from "express";
import { PORT } from "./config/server.config";
import apiRouter from "./routes/index";
import errorHandlerMiddleware from "./utils/error.handler";
const app = express();
app.use(bodyParser.json());
app.use("/api", apiRouter);
app.use(errorHandlerMiddleware);
app.listen(PORT, () => {
  console.log(`Server Started on ${PORT}`);
});
