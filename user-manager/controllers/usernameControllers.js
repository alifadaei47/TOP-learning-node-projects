import * as db from "../db/queries.js";

export const getUsernames = async function (req, res) {
  const usernames = await db.getAllUsernames();
  res.render("index", { usernames });
};

export const createUsernameGet = async function (req, res) {
  res.render("createUsername");
};

export const createUsernamePost = async function (req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
};

export const searchUsername = async function (req, res) {
  const substring = req.query.name;
  const result = await db.searchUsernameBySubstring(substring);

  res.render("searchResult", { result });
};

export const deleteUsernames = async function (req, res) {
  await db.deleteAllUsernames();

  res.redirect("/");
};
