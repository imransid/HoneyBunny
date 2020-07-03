const { createPool } = require("mysql");
const dot = require("dotenv").config();

const pool = createPool({
  host: dot.parsed.DB_HOST,
  //port: 3306,
  user: dot.parsed.DB_USER,
  password: dot.parsed.DB_PASSWORD,
  database: dot.parsed.DB_NAME,
  connectionLimit: 10,
});

module.exports = pool;
