const db = require("../config/database");

module.exports = {
  getAccountsByEmail: (req, res, callback) => {
    let email = req.body.email;
    let qry = `SELECT * FROM accounts WHERE email = ${email}`;

    db.query(qry, (err, results) => {
      if (err) {
        callback(err, "error in accounts");
      }

      return callback(null, results[0]);
    });
  },

  getAccounts: (req, res, callback) => {
    let qry = "SELECT * FROM accounts";

    db.query(qry, (err, result) => {
      if (err) {
        callback(err, "error in accounts");
      }

      if (result.length > 0) {
        res.send({
          message: "all qry data recieved from * accounts",
          data: result,
        });
      }
    });
  },
};
