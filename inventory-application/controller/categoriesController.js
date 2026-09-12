import { body } from "express-validator";
import { getAllItems } from "../db/queries.js";
import { deleteCategory } from "../db/queries.js";
import { updateCategory } from "../db/queries.js";
import { addNewBook } from "../db/queries.js";
import { deleteBook } from "../db/queries.js";
import { updateBook } from "../db/queries.js";

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

const validateBook = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Book name can not be empty.")
    .isAlpha()
    .withMessage("Book name must only contain alphabet letters.")
    .isLength({ min: 4, max: 50 })
    .withMessage(`Book name must be between 4 and 50 characters.`),
];

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

  await updateBook(newTitle, oldTitle, category);

  const url = `/categories/${category}`;
  res.redirect(url);
}
