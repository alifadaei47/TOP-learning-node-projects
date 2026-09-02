import { addNewMessage } from "../db.js";

export function messageRouterGetController(req, res) {
  return res.render("form", { title: "Mini Messageboard" });
}

export function messageRouterPostController(req, res) {
  const { message, author } = req.body;
  addNewMessage(message, author, new Date());

  return res.redirect('/')
}
