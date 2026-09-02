import { Router } from "express";
import { messageRouterGetController } from "../controller/messageRouterController.js";
import { messageRouterPostController } from "../controller/messageRouterController.js";

export const messageRouter = Router();

messageRouter.get("/", messageRouterGetController);
messageRouter.post("/", messageRouterPostController);
