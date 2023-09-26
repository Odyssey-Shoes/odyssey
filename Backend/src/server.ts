// basic packages for server
import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./Router";
import { urlencoded } from "body-parser";

// custom build handlers

// setting up app and basic middleware
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// entry to the backend routes through router middleware
app.use("/api", router);

export default app;
