const DB = require("../config/db.config");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  create: (data, callback) => {
    DB.query(
      `insert into users(firstname, lastname, gender, email, password, number, user_id) values(?,?,?,?,?,?,?)`,
      [
        data.firstname,
        data.lastname,
        data.gender,
        data.email,
        data.password,
        data.number,
        uuidv4(),
      ],
      (error, result, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  getUsers: (callback) => {
    DB.query(
      `select id, firstname, lastname, gender, email, password, number, user_id from users`,
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
