const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const mysql = require("mysql");

const db = mysql.createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "everywell",
});

module.exports = db;

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:8100" }));
app.use(bodyparser.json());

//CORS SETTINGS FOR HEADERS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8100"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//get all article data
app.get("/article", (req, res) => {
  let qry = "SELECT * FROM article";

  db.query(qry, (err, result) => {
    if (err) {
      console.log(err, "error in articles");
    }

    if (result.length > 0) {
      res.send({
        message: "all qry data received from * article",
        data: result,
      });
    }
  });
});

//get single article data
app.get("/article/:id", (req, res) => {
  let aID = req.params.id;

  let qry = `SELECT * FROM article WHERE idarticle = ${aID}`;

  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }

    if (result.length > 0) {
      res.send({
        message: "single article data",
        data: result,
      });
    } else {
      res.send({
        message: "data not found",
      });
    }
  });
});

//create data
app.post("/article", (req, res) => {
  console.log(req.body, "postdata");

  let title = req.body.title;
  let descr = req.body.descr;
  let image = req.body.image;
  let prob1 = req.body.prob1;
  let solu1 = req.body.solu1;
  let prob2 = req.body.prob2;
  let solu2 = req.body.solu2;
  let prob3 = req.body.prob3;
  let solu3 = req.body.solu3;
  let prob4 = req.body.prob4;
  let solu4 = req.body.solu4;

  let qry = `INSERT INTO article(title, descr, image, prob1, solu1, prob2, solu2, prob3, solu3, prob4, solu4) 
            VALUES("${title}", "${descr}", "${image}", "${prob1}", "${solu1}", "${prob2}", "${solu2}","${prob3}", "${solu3}", "${prob4}", "${solu4}")`;

  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result, "result");
    res.send({
      message: "Article Data Inserted Successfully!",
    });
  });
});

//update data
app.put("/article/:id", (req, res) => {
  let aID = req.params.id;

  let title = req.body.title;
  let descr = req.body.descr;
  let image = req.body.image;
  let prob1 = req.body.prob1;
  let solu1 = req.body.solu1;
  let prob2 = req.body.prob2;
  let solu2 = req.body.solu2;
  let prob3 = req.body.prob3;
  let solu3 = req.body.solu3;
  let prob4 = req.body.prob4;
  let solu4 = req.body.solu4;

  let qry = `UPDATE article set title = '${title}', descr = '${descr}', image = '${image}', prob1 = '${prob1}', solu1 = '${solu1}', prob2 = '${prob2}', solu2 = '${solu2}', prob3 = '${prob3}', solu3 = '${solu3}', prob4 = '${prob4}', solu4 = '${solu4}'
  WHERE idarticle = ${aID}
  `;

  console.log(req.body, "update article data");

  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send({
      message: "Article Data Updated!",
      // data: result,
    });
  });
});

//delete article data
app.delete("/article/:id", (req, res) => {
  let aID = req.params.id;

  let qry = `DELETE FROM article WHERE idarticle = '${aID}'`;

  console.log(req.body, "delete article data");

  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send({
      message: "Article Data Deleted!",
      //data: result,
    });
  });
});

app.post("/accounts", (req, res) => {
  let qry = "SELECT * FROM accounts";

  db.query(qry, (err, result) => {
    if (err) {
      console.log(err, "error in accounts");
    }
    if (result.length > 0) {
      res.send({
        message: "all qry data received from * accounts",
        data: result,
      });
    }
  });
});

app.get("/accounts", (req, res) => {
  let qry = "SELECT * FROM accounts";

  db.query(qry, (err, result) => {
    if (err) {
      console.log(err, "error in accounts");
    }
    if (result.length > 0) {
      res.send({
        message: "all qry data received from * accounts",
        data: result,
      });
    }
  });
});

// app.read();

// app.update();

// app.delete();

// check db connection

app.listen(3000, () => {
  console.log("Server Is Running :");
});
