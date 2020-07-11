const DB = require("../config/db.config");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  createCategory: (data, image, callback) => {
    let status = data.status == "true" ? 1 : 0;
    DB.query(
      `insert into category(categoryid , categoryname , description, picture, status) values(?,?,?,?,?)`,
      [uuidv4(), data.categoryname, data.description, image, status],
      (error, result, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  getCategory: (callback) => {
    DB.query(
      `select categoryid , categoryname , description, picture, active from category`,
      [],
      (error, result, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  getUsersByID: (id, callback) => {
    DB.query(
      `select id, firstname, lastname, gender, email, password, number, user_id from users where user_id = ?`,
      [id],
      (error, result, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  updateUser: (data, callback) => {
    DB.query(
      `update users set id=?, firstname=? , lastname=?, gender=?, email=?, password=?, number=? where user_id = ?`,
      [
        data.id,
        data.firstname,
        data.lastname,
        data.gender,
        data.email,
        data.password,
        data.number,
        data.user_id,
      ],
      (error, result, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  deleteUser: (data, callback) => {
    DB.query(
      `delete from users where user_id = ?`,
      [data.user_id],
      (error, result, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  getUserByEmail: (email, callback) => {
    DB.query(
      `select * from users where email=?`,
      [email],
      (error, result, fields) => {
        if (error) {
          return error;
        }
        return callback(null, result);
      }
    );
  },
};
