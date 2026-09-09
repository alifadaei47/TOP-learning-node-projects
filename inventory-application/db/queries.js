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
