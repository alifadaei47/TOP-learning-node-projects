import { getAllItems } from "../db/queries.js";
import { deleteCategory } from "../db/queries.js";
import { updateCategory } from "../db/queries.js";
import { addNewBook } from "../db/queries.js";
import { deleteBook } from "../db/queries.js";
import { updateBook } from "../db/queries.js";

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

export async function updateCategoryGetCtrl(req, res) {
  const { category } = req.params;
  res.render("updateCategory", { category });
}

export async function updateCategoryPostCtrl(req, res) {
  const oldName = req.params.category;
  const newName = req.body.category;

  await updateCategory(newName, oldName);
  res.redirect("/");
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

export async function updateBookGetCtrl(req, res) {
  const { category, title } = req.params;
  res.render("updateBook", { category, title });
}

export async function updateBookPostCtrl(req, res) {
  const { category } = req.params;
  const oldTitle = req.params.title;
  const newTitle = req.body.title;


  await updateBook(newTitle, oldTitle, category)

  const url = `/categories/${category}`;
  res.redirect(url);
}
