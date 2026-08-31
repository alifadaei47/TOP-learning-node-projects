import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "node:url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "index.html")),
);

app.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "about.html")),
);

app.get("/contact-me", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "contact-me.html")),
);

app.use((_, res) => res.sendFile(path.join(__dirname, "views", "404.html")));

app.listen(3000);
