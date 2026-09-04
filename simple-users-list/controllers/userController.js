import UsersStorage from "../storages/UsersStorage.js";
import { body, query, validationResult, matchedData } from "express-validator";

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

  body("email")
    .trim()
    .isEmail()
    .withMessage(`Please enter a valid email address.`),

  body("age")
    .optional({ values: "falsy" })
    .isInt({ min: 18, max: 120 })
    .withMessage(`Age must be between 18 and 120.`),

  body("bio")
    .optional({ values: "falsy" })
    .trim()
    .isLength({ max: 200 })
    .withMessage(`Bio must be 200 characters or less.`),
];

const validateSearch = [
  query("name")
    .trim()
    .isAlpha()
    .withMessage(`Name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Name ${lengthErr}`),

  query("email")
    .trim()
    .isEmail()
    .withMessage(`Please enter a valid email address.`),
];

export const userListGet = (req, res) => {
  const errors = req.session.errors;
  delete req.session.errors;

  return res.render("index", {
    title: "User List",
    users: UsersStorage.getUsers(),
    errors,
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
    const { firstName, lastName, email, age, bio } = matchedData(req);
    UsersStorage.addUser({ firstName, lastName, email, age, bio });
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

    const { firstName, lastName, email, age, bio } = matchedData(req);
    UsersStorage.updateUser(req.params.id, {
      firstName,
      lastName,
      email,
      age,
      bio,
    });
    res.redirect("/");
  },
];

export const usersDeletePost = (req, res) => {
  UsersStorage.deleteUser(req.params.id);
  res.redirect("/");
};

export const searchForUser = [
  validateSearch,
  (req, res) => {
    const { name, email } = req.query;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      req.session.errors = errors.array();
      return res.redirect("/");
    }

    const user = UsersStorage.findUser(name, email);
    res.render("search", {
      title: "Search Result",
      user,
    });
  },
];
