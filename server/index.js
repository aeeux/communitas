const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());
app.use(bodyparser.json());

// db connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "everywell",
  port: 3306,
});

app.get("/users", (req, res) => {
  let users = "SELECT * FROM users";

  db.query(users, (err, result) => {
    if (err) {
      console.log(err, "error in users");
    }

    if (result.length > 0) {
      res.send({
        message: "all users data received",
        data: result,
      });
    }
  });
});

//get single data
app.get("/users/:id", (req, res) => {
  let uID = req.params.id;

  let qry = `SELECT * FROM users WHERE idusers = ${uID}`;

  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }

    if (result.length > 0) {
      res.send({
        message: "single user data",
        data: result,
      });
    } else {
      res.send({
        message: "data not found",
      });
    }
  });
});

// app.create();

// app.read();

// app.update();

// app.delete();

// check db connection
db.connect((err) => {
  if (err) {
    console.log(err, "db err");
  }
  console.log("database connected...");
});

app.listen(3000, () => {
  console.log("Server Is Running..");
});
