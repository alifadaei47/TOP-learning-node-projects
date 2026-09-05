import { Router } from "express";
import * as userControllers from "../controllers/usernameControllers.js";
export const usernameRouter = Router();

usernameRouter.get("/", userControllers.getUsernames);

usernameRouter.get("/new", userControllers.newUsernameGet);

usernameRouter.post("/new", userControllers.newUsernamePost);
