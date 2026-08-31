import 'dotenv/config'
import express from "express";
import ejs from "ejs";

const app = express();
const port = +process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port);
