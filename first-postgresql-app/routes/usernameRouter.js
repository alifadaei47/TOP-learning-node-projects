import { Router } from "express";
import * as userControllers from "../controllers/usernameControllers.js";
export const usernameRouter = Router();

usernameRouter.get("/", userControllers.getUsernames);

usernameRouter.get("/new", userControllers.createUsernameGet);

usernameRouter.post("/new", userControllers.createUsernamePost);
