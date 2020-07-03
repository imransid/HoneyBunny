const {
  create,
  getUsers,
  getUsersByID,
  updateUser,
  deleteUser,
  getUserByEmail,
} = require("../model/userauth.model");

const dot = require("dotenv").config();

const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log("error is", err);
        return res.status(500).json({
          sucess: 0,
          message: "Database connection error",
        });
      }
      //   sucess
      return res.status(200).json({
        sucess: 1,
        data: results,
      });
    });
  },
  getUsers: (req, res) => {
    getUsers((err, results) => {
      if (err) {
        return res.status(600).json({
          sucess: 0,
          message: "Error in Query",
        });
      }
      return res.status(200).json({
        sucess: "List of all users",
        data: results,
      });
    });
  },
  getUsersByID: (req, res) => {
    const id = req.params.id;
    getUsersByID(id, (err, results) => {
      if (err) {
        console.log("error is", err);
        return res.status(500).json({
          sucess: 0,
          message: "Database connection error",
        });
      }
      if (!results || results.length == 0) {
        return res.status(320).json({
          sucess: "not foynd",
          message: "Record Not Found",
        });
      }

      return res.status(200).json({
        sucess: "sucessfully",
        data: results,
      });
    });
  },
  updateUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUser(body, (err, results) => {
      if (err) {
        console.log("error is", err);
        return res.status(500).json({
          sucess: 0,
          message: "Database connection error",
        });
      }

      if (results.changedRows == 0) {
        return res.status(320).json({
          sucess: "not found",
          message: "update failed",
        });
      }
      //   sucess
      return res.status(200).json({
        sucess: "update sucessfully",
        data: results,
      });
    });
  },
  deleteUser: (req, res) => {
    const data = req.body;
    deleteUser(data, (err, results) => {
      if (err) {
        console.log("error is", err);
        return res.status(500).json({
          sucess: 0,
          message: "Database connection error",
        });
      }
      if (!results || results.length == 0) {
        return res.status(320).json({
          sucess: "not foynd",
          message: "Record Not Found",
        });
      }
      return res.status(200).json({
        sucess: "sucessfully",
        mesage: "user deleted sucessfully ",
      });
    });
  },
  login: (req, res) => {
    const body = req.body;
    getUserByEmail(body.email, (err, results) => {
      if (err) {
        console.log("error is", err);
        return res.status(500).json({
          sucess: 0,
          message: "Database connection error",
        });
      }

      if (!results) {
        return res.status(400).json({
          sucess: "wrong password",
          message: "Invalid email or password",
        });
      }

      const result = compareSync(body.password, results[0].password);

      if (result) {
        results[0].password = undefined;
        const jsontoken = sign({ result: results[0] }, dot.parsed.SIGN, {
          expiresIn: "1h",
        });
        return res.json({
          sucess: "login sucessfully",
          message: "login sucessfully",
          token: jsontoken,
        });
      } else {
        return res.status(400).json({
          sucess: "wrong password",
          message: "Invalid email or password",
        });
      }
    });
  },
};
