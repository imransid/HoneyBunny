module.exports = (app) => {
  const {
    getCategory,
    createCategory,
  } = require("../controller/product.controller");

  const { checkToken } = require("../auth/token.validation");

  var router = require("express").Router();

  //   list all categories
  router.get("/categories", getCategory);

  // // Retrieve all getUsers
  // router.post("/users/:id", checkToken, getUsersByID);

  // // Update a user with user id
  // router.patch("/users/update", checkToken, updateUser);

  // // Delete a user with id
  // router.delete("/users/delete", checkToken, deleteUser);

  // // login a user with email
  // router.post("/login", login);

  app.use("/api/product", router);
};
