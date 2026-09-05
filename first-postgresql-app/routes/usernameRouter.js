import { Router } from "express";
import * as userControllers from '../controllers/usernameControllers.js'
export const usernameRouter = Router();

usernameRouter.get("/", (req, res) => {
  console.log("usernames will be logged here - wip");
  return;
});

usernameRouter.get("/new", (req, res) => {
  res.render("new");
});

usernameRouter.post("/new", (req, res) => {
  console.log("username to be saved: ", req.body.username);
});
