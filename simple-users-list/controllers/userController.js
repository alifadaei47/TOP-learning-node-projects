import UsersStorage from "../storages/UsersStorage.js";
import { body, validationResult, matchedData } from "express-validator";

const alphaErr = "Must only contain letters.";
const lengthErr = "Must be between 1 and 10 characters.";

const validateUser = [
  body("firstName")
    .trim()
    .isAlpha()
    .withMessage(`first name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`first name ${lengthErr}`),
  body("lastName")
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Last name ${lengthErr}`),
];

export const userListGet = (req, res) => {
  res.render("index", {
    title: "User List",
    users: UsersStorage.getUsers(),
  });
};

export const userCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create User",
  });
};

export const userCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("createUser", {
        title: "Create user",
        errors: errors.array(),
      });
    }
    const { firstName, lastName } = matchedData(req);
    UsersStorage.addUser({ firstName, lastName });
    res.redirect("/");
  },
];

export const userUpdateGet = (req, res) => {
  const user = UsersStorage.getUser(req.params.id);
  res.render("updateUser", {
    title: "Update user",
    user: user,
  });
};

export const userUpdatePost = [
  validateUser,
  (req, res) => {
    const user = UsersStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("updateUser", {
        title: "Update user",
        user: user,
        errors: errors.array(),
      });
    }
    const { firstName, lastName } = matchedData(req);
    UsersStorage.updateUser(req.params.id, { firstName, lastName });
    res.redirect("/");
  },
];

export const usersDeletePost = (req, res) => {
  UsersStorage.deleteUser(req.params.id);
  res.redirect("/");
};
