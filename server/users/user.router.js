const { login, getAccounts } = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");

router.get("/", checkToken, getAccounts);
router.post("/login", login);

module.exports = router;
