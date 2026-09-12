import { getAllCategories } from "../db/queries.js";
import { addNewCategory } from "../db/queries.js";

import { body, validationResult } from "express-validator";

const validateCategory = [
  body("category")
    .trim()
    .notEmpty()
    .withMessage("Category name can not be empty.")
    .isAlpha()
    .withMessage("Category name must only contain alphabet letters.")
    .isLength({ min: 4, max: 25 })
    .withMessage(`Category name must be between 4 and 25 characters.`),
];

export async function getAllCategoriesCtrl(req, res) {
  const categories = await getAllCategories();
  res.render("index", { categories });
  return;
}

export const createNewCategoryCtrl = [
  validateCategory,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const categories = await getAllCategories();
      return res
        .status(400)
        .render("index", { categories, errors: errors.array() });
    }
    
    const { category } = req.body;
    await addNewCategory(category);
    res.redirect("/");
  },
];
