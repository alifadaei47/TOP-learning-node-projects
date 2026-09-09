import { getAllCategories } from "../db/queries.js";
import { addNewCategory } from "../db/queries.js";

export async function getAllCategoriesCtrl(req, res) {
  const categories = await getAllCategories();
  res.render("index", { categories });
  return;
}

export async function createNewCategoryCtrl(req, res) {
  const { category } = req.query;
  await addNewCategory(category);
  res.redirect("/");
}
