const express = require("express")
const router = express.Router()
const { fetchUserData } = require("../controllers/user.controller")

router.route("/").get(fetchUserData)

nodule.exports = router