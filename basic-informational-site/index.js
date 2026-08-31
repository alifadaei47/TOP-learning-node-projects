import http from "http";
import { readFile } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/") {
    const html = await readFile("./views/index.html", "utf8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } else if (method === "GET" && url === "/about") {
    const html = await readFile("./views/about.html", "utf8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } else if (method === "GET" && url === "/contact-me") {
    const html = await readFile("./views/contact-me.html", "utf8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } else {
    const html = await readFile("./views/404.html", "utf8");
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(html);
  }
});

server.listen(8080);
