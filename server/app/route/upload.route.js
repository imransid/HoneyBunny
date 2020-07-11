module.exports = (app) => {
  const { createCategory } = require("../controller/product.controller");

  const { checkToken } = require("../auth/token.validation");

  var router = require("express").Router();

  // Create a new user
  router.post("/create_category", createCategory);

  app.use("/api/from", router);
};
