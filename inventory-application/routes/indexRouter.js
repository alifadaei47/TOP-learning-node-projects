import { Router } from "express";
import * as indexController from "../controller/indexController.js";

export const indexRouter = Router();

indexRouter.get("/", indexController.getAllCategoriesCtrl);
indexRouter.post("/create-category", indexController.createNewCategoryCtrl);