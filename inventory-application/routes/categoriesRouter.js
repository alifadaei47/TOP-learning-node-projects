import { Router } from "express";
import * as categoriesController from "../controller/categoriesController.js";
export const categoriesRouter = Router();

categoriesRouter.get("/:category", categoriesController.getAllItemsCtrl);

categoriesRouter.post(
  "/:category/delete",
  categoriesController.deleteCategoryCtrl,
);

categoriesRouter.post(
  "/:category/add-book",
  categoriesController.addNewBookCtrl,
);

categoriesRouter.get(
  "/:category/update",
  categoriesController.updateCategoryGetCtrl,
);

categoriesRouter.post(
  "/:category/update",
  categoriesController.updateCategoryPostCtrl,
);

categoriesRouter.post(
  "/:category/:title/delete",
  categoriesController.deleteBookCtrl,
);