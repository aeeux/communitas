const { getAccountsByEmail, getAccounts } = require("./user.service");

const { sign } = require("jsonwebtoken");

module.exports = {
  login: (req, res) => {
    const body = req.body;
    getAccountsByEmail(body.email, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({ success: 0, data: "Invalid email or password" });
      }
      const result = (body.password, results.password);
      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, "test123", {
          expiresIn: "1h",
        });
        return res.json({
          success: 1,
          message: "login successfully",
          token: jsontoken,
        });
      } else {
        return res.json({ success: 0, data: "Invalid email or password" });
      }
    });
  },

  getAccounts: (req, res) => {
    getAccounts((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
};
