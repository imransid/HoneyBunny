const { verify } = require("jsonwebtoken");
const dot = require("dotenv").config();

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");

    if (token) {
      token = token.slice(7);
      verify(token, dot.parsed.SIGN, (err, decoded) => {
        if (err) {
          res.json({
            sucess: "! wrong token",
            message: "invalid token",
          });
        } else {
          next();
        }
      });
    } else {
      res.json({
        sucess: 0,
        message: "Access denied! unauthorized user",
      });
    }
  },
};
