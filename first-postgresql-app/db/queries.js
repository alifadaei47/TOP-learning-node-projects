import pool from "./pool.js";

export const getAllUsernames = async function () {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
};

export const insertUsername = async function (username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
};
