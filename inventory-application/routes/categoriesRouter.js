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

// categoriesRouter.post(
//   "/:category/update",
//   categoriesController.updateCategoryCtrl,
// );

categoriesRouter.post(
  "/:category/:title/delete",
  categoriesController.deleteBookCtrl,
);