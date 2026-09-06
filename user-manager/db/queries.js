import pool from "./pool.js";

export const getAllUsernames = async function () {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
};

export const insertUsername = async function (username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
};

export const searchUsernameBySubstring = async function (substring) {
  const result = await pool.query(
    "SELECT * FROM usernames WHERE username ILIKE $1",
    [`%${substring}%`],
  );

  return result.rows;
};

export const deleteAllUsernames = async function () {
  await pool.query("TRUNCATE TABLE usernames");
};
