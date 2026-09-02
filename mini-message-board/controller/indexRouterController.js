import { getAllMessages } from "../db.js";

export async function indexRouterController(req, res) {
  const messages = await getAllMessages();
  return res.render("index", { title: "Mini Messageboard", messages });
}
