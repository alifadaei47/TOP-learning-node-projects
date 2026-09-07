import pool from "./pool.js";

export async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

export async function addNewMessage(message, username) {
  await pool.query(
    "INSERT INTO messages (text, username) VALUES ($1, $2)",
    [message, username],
  );
}
