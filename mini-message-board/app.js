import "dotenv/config";
import express from "express";
import ejs from "ejs";
import { fileURLToPath } from "url";
import path from "path";

// routes
import { indexRouter } from "./routes/indexRouter.js";
import { messageRouter } from "./routes/messageRouter.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = +process.env.PORT ?? 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", messageRouter);

app.listen(port);
