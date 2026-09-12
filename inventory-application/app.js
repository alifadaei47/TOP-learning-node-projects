import express from "express";
import "dotenv/config";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";

import { indexRouter } from "./routes/indexRouter.js";
import { categoriesRouter } from "./routes/categoriesRouter.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/categories", categoriesRouter);
app.use((req, res) => {
  res.render("404");
});

const PORT = +process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Inventory app listening on port ${PORT}`);
});
