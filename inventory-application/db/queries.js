import pool from "./pool.js";

export async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

export async function getAllItems(category) {
  const { rows } = await pool.query(
    "SELECT items.* FROM items JOIN categories ON items.category_id = categories.id WHERE categories.name = $1;",
    [`${category}`],
  );
  return rows;
}

export async function deleteCategory(category) {
  await pool.query(
    "DELETE FROM items WHERE category_id = (SELECT id FROM categories WHERE name = $1);",
    [`${category}`],
  );

  await pool.query("DELETE FROM categories WHERE name = $1;", [`${category}`]);
}

export async function addNewCategory(category) {
  await pool.query("INSERT INTO categories (name) VALUES ($1)", [
    `${category}`,
  ]);
}

export async function updateCategory(newName, oldName) {
  await pool.query("UPDATE categories SET name = $1 WHERE name = $2;", [
    `${newName}`,
    `${oldName}`,
  ]);
}

export async function addNewBook(title, category) {
  await pool.query(
    "INSERT INTO items (title, category_id) VALUES ($1, (SELECT id FROM categories WHERE name = $2));",
    [`${title}`, `${category}`],
  );
}

export async function deleteBook(category, title) {
  await pool.query(
    "DELETE FROM items WHERE title = $2 AND category_id = (SELECT id FROM categories WHERE name = $1);",
    [`${category}`, `${title}`],
  );
}

export async function updateBook(newTitle, oldTitle, category) {
  await pool.query(
    "UPDATE items SET title = $1 WHERE title = $2 AND category_id = (SELECT id FROM categories WHERE name = $3);",
    [newTitle, oldTitle, category],
  );
}
