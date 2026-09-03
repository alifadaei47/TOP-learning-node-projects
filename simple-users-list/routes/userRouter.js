import { Router } from "express";
import * as userController from "../controllers/userController.js";

export const userRouter = Router();

userRouter.get("/", userController.userListGet);
userRouter.get("/create", userController.userCreateGet);
userRouter.post("/create", userController.userCreatePost);
userRouter.get("/:id/update", userController.userUpdateGet);
userRouter.post("/:id/update", userController.userUpdatePost);
userRouter.post("/:id/delete", userController.usersDeletePost);
