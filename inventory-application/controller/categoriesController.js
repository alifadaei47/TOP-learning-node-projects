import { getAllItems } from "../db/queries.js";
import { deleteCategory } from "../db/queries.js";
import { addNewBook } from "../db/queries.js";
import { deleteBook } from "../db/queries.js";

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
  const title = req.body.book;
  await addNewBook(title, category);

  const url = `/categories/${category}`;
  res.redirect(url);
}

export async function deleteBookCtrl(req, res) {
  const { category, title } = req.params;
  await deleteBook(category, title);

  const url = `/categories/${category}`;
  res.redirect(url);
}
