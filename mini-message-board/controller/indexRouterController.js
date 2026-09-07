import { getAllMessages } from "../db/queries.js";

export async function indexRouterController(req, res) {
  const messages = await getAllMessages();
  return res.render("index", { title: "Mini Messageboard", messages });
}
