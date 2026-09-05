export const getUsernames = (req, res) => {
  console.log("usernames will be logged here - wip");
  return;
};

export const newUsernameGet = (req, res) => {
  res.render("new");
};

export const newUsernamePost = (req, res) => {
  console.log("username to be saved: ", req.body.username);
};
