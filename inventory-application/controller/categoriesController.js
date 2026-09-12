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
  body("book")
    .trim()
    .notEmpty()
    .withMessage("Book name can not be empty.")
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

export const updateCategoryPostCtrl = [
  validateCategory,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("updateCategory", {
        errors: errors.array(),
        category: req.params.category,
      });
    }

    const oldName = req.params.category;
    const newName = req.body.category;

    await updateCategory(newName, oldName);
    res.redirect("/");
  },
];

export const addNewBookCtrl = [
  validateBook,
  async (req, res) => {
    const { category } = req.params;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const items = await getAllItems(category);
      return res
        .status(400)
        .render("category", { items, category, errors: errors.array() });
    }

    const title = req.body.book;
    await addNewBook(title, category);
    const url = `/categories/${category}`;
    res.redirect(url);
  },
];

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

export const updateBookPostCtrl = [
  validateBook,
  async (req, res) => {
    const errors = validationResult(req);
    const { category } = req.params;
    const oldTitle = req.params.book;

    if (!errors.isEmpty()) {
      return res.render("updateBook", {
        category,
        title: oldTitle,
        errors: errors.array(),
      });
    }

    const newTitle = req.body.title;
    await updateBook(newTitle, oldTitle, category);
    const url = `/categories/${category}`;
    res.redirect(url);
  },
];
