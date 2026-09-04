import express from "express";
import ejs from "ejs";
import path from "path";
import session from "express-session";

import { fileURLToPath } from "url";
import { userRouter } from "./routes/userRouter.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "your-secret",
    resave: false,
    saveUninitialized: false,
  }),
);
app.use("/", userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app listening on port ${PORT}!`);
});
