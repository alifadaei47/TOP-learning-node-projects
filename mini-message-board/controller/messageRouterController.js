import { addNewMessage } from "../db/queries.js";

export async function messageRouterGetController(req, res) {
  return res.render("form", { title: "Mini Messageboard" });
}

export async function messageRouterPostController(req, res) {
  const { message, author } = req.body;
  await addNewMessage(message, author);

  return res.redirect("/");
}
