const { getCategory, createCategory } = require("../model/product.model");

module.exports = {
  getCategory: (req, res) => {
    getCategory((err, results) => {
      if (err) {
        return res.status(600).json({
          sucess: 0,
          message: "Error in Query",
        });
      }
      return res.status(200).json({
        sucess: "List of all Category",
        data: results,
      });
    });
  },
  createCategory: (req, res) => {
    const body = req.body;
    createCategory(body, (err, results) => {
      if (err) {
        return res.status(500).json({
          sucess: 0,
          message: "Database connection error" + err,
        });
      }
      //   sucess
      return res.status(200).json({
        sucess: 1,
        data: results,
      });
    });
  },
};
