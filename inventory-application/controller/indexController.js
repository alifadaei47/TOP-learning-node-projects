import { getAllCategories } from "../db/queries.js";

export async function getAllCategoriesCtrl(req, res) {
  const categories = await getAllCategories();
  res.render('index', {categories})
  return;
}

