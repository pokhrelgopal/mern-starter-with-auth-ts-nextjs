import cors from "cors";
import path from "path";
import express from "express";
import cookieParser from "cookie-parser";

import { frontendUrl } from "./config";

import routes from "./routes";
import * as middleware from "./middlewares/logger.middleware";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(
  cors({
    origin: frontendUrl,
    credentials: true,
  })
);

app.use(middleware.logger);

app.use("/api/users", routes.userRoutes);

export default app;
