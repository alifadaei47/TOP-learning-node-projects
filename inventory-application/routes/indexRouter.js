import { Router } from "express";
import * as indexController from "../controller/indexController.js";

export const indexRouter = Router();

indexRouter.get("/", indexController.getAllCategoriesCtrl);
indexRouter.get("/create-category", indexController.createNewCategoryCtrl);