import "reflect-metadata";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import config from "./config";
import errorHandler from "./middleware/errorHandler";
import notFoundError from "./middleware/404";
import root from "./routes";

const app = express();

interface ClientCorsOrigins {
  [key: string]: string;
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin:
      (config.clientCorsOrigins as ClientCorsOrigins)[config.nodeEnv] ?? "*",
  })
);

app.use(helmet());
app.use(morgan("tiny"));

// Apply routes before error handling
app.use("/", root);

// Apply error handling last
app.use(notFoundError);
app.use(errorHandler);

export default app;
