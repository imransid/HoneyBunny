module.exports = (app) => {
  const {
    createUser,
    getUsers,
    getUsersByID,
    updateUser,
    deleteUser,
    login,
  } = require("../controller/userauth.controller");

  const { checkToken } = require("../auth/token.validation");

  var router = require("express").Router();

  // Create a new user
  router.post("/registration", checkToken, createUser);

  // Retrieve all getUsers
  router.post("/users", checkToken, getUsers);

  // Retrieve all getUsers
  router.post("/users/:id", checkToken, getUsersByID);

  // Update a user with user id
  router.patch("/users/update", checkToken, updateUser);

  // Delete a user with id
  router.delete("/users/delete", checkToken, deleteUser);

  // login a user with email
  router.post("/login", login);

  app.use("/api/auth", router);
};
