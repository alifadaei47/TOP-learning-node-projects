import pool from "./pool.js";

export async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

export async function getAllItems(category) {
  const {rows} = await pool.query(
    "SELECT items.* FROM items JOIN categories ON items.category_id = categories.id WHERE categories.name = $1;",
    [`${category}`]
  );
  return rows;
}