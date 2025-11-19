const express = require("express");
const router = express.Router();
const controller = require("../../controllers/global/loginController");

router.post("/login", controller.login);

module.exports = router;