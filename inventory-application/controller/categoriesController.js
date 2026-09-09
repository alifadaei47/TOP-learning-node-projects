import { getAllItems } from "../db/queries.js";
import { deleteCategory } from "../db/queries.js";

export async function getAllItemsCtrl(req, res) {
  const { category } = req.params;
  const items = await getAllItems(category);

  res.render("category", { items });
}

export async function deleteCategoryCtrl(req, res) {
  const { category } = req.params;
  await deleteCategory(category);

  res.redirect("/");
}

export async function updateCategoryCtrl(req, res) {
  console.log(req.params.category)
  return;
}
