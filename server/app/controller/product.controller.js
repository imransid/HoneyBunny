const { getCategory, createCategory } = require("../model/product.model");

const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000,
  },
}).single("myImage");

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
    upload(req, res, (err) => {
      let image = req.file.filename;
      const body = req.body;
      if (!err) {
        createCategory(body, image, (err, results) => {
          if (err) {
            return res.status(500).json({
              sucess: 0,
              message: "Database connection error" + err,
            });
          }
          //   sucess
          return res.sendStatus(200).json({
            sucess: 1,
            data: results,
          });
        });
      }
    });
  },
};
