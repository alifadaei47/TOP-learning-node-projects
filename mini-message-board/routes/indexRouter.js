import { Router } from "express";
import { indexRouterController } from "../controller/indexRouterController.js";

export const indexRouter = Router();

indexRouter.get("/", indexRouterController);
