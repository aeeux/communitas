const mysql = require("mysql");

const db = mysql.createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "everywell",
});

module.exports = db;
