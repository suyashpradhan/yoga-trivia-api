const express = require("express");
const { userLogin } = require("../controllers/signIn.controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Login User Here!" });
});
router.post("/", userLogin);

module.exports = router;
