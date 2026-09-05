import express from "express";
import { usernameRouter } from "./routes/usernameRouter.js";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.set("views", __dirname, "views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", usernameRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
