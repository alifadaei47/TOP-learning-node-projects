import { getAllItems } from "../db/queries.js";
import { deleteCategory } from "../db/queries.js";

export async function getAllItemsCtrl(req, res) {
  const { category } = req.params;
  const items = await getAllItems(category);

  res.render("category", { items, category });
}

export async function deleteCategoryCtrl(req, res) {
  const { category } = req.params;
  await deleteCategory(category);

  res.redirect("/");
}

export async function updateCategoryCtrl(req, res) {
  console.log(req.params.category);
  return;
}

export async function addNewBookCtrl(req, res) {
  const { category } = req.params;
  console.log(req.body);
  return;
}
