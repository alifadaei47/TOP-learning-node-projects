import * as db from "../db/queries.js";

export const getUsernames = async function (req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
};

export const createUsernameGet = async function (req, res) {
  res.render("createUsername");
};

export const createUsernamePost = async function (req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
};
