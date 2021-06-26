const express = require("express");
const registerNewUser = require("../controllers/signUp.controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: false, message: "Register User Here!" });
});
router.post("/", registerNewUser);

module.exports = router;
