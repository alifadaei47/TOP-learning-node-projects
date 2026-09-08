import express from "express";
import "dotenv/config";
import { indexRouter } from "./routes/indexRouter.js";

const app = express();

app.use("/", indexRouter);

const PORT = +process.env.PORT || 3000;
app.listen(PORT)
