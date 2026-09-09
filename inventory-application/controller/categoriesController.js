import { getAllItems } from "../db/queries.js";
import { deleteCategory } from "../db/queries.js";

export async function getAllItemsCtrl(req, res) {
  const { category } = req.params;
  const items = await getAllItems(category);

  res.render("category", { items });
}

export async function deleteCategoryCtrl(req, res) {
  const { category } = req.params;
  console.log(category)
  await deleteCategory(category);

  res.redirect("/");
}
